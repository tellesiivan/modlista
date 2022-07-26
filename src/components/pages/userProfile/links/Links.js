import { useState } from "react";
import AdminHeading from "../../../helpers/AdminHeading";
import LinkInput from "./LinkInput";
import { ImLink } from "react-icons/im";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, runTransaction } from "firebase/firestore";
import { auth, firestore } from "../../../../firebase/clientApp";
import { useSelector } from "react-redux";
import { Loading } from "@nextui-org/react";

const linkTypes = [
  { type: "Website", placeholder: "http://example.com/", icon: <ImLink /> },
  {
    type: "Instagram",
    placeholder: "https://instagram.com/...",
    icon: <ImLink />,
  },
  {
    type: "Facebook",
    placeholder: "https://facebook.com/...",
    icon: <ImLink />,
  },
  {
    type: "YouTube",
    placeholder: "https://youtube.com/channel/...",
    icon: <ImLink />,
  },
  { type: "Twitter", placeholder: "https://twitter.com/...", icon: <ImLink /> },
];

export default function Links() {
  const userLinks = useSelector((store) => store.userUI.user?.links);
  const [links, setLinks] = useState({
    Website: "",
    Instagram: "",
    Facebook: "",
    YouTube: "",
    Twitter: "",
  });
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);

  const [showSubmit, setShowSubmit] = useState(false);

  function removeEmpty(obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(([key, val]) => val !== "")
    );
  }

  const saveLinks = async (e) => {
    e.preventDefault();
    // user Ref
    const userRef = doc(firestore, `users/${user.uid}`);
    setLoading(true);
    try {
      await runTransaction(firestore, async (transaction) => {
        const userDoc = await transaction.get(userRef);

        const hasLinkObjct = userDoc.data().links;
        const filteredLinks = removeEmpty(links);

        if (hasLinkObjct) {
          transaction.update(userRef, {
            links: { ...hasLinkObjct, ...filteredLinks },
          });
        } else {
          transaction.update(userRef, {
            links,
          });
        }
      });
    } catch (error) {
      console.log(error.message, "saveLinks");
    }
    setLoading(false);
    setShowSubmit(false);

    setLinks({
      Website: "",
      Instagram: "",
      Facebook: "",
      YouTube: "",
      Twitter: "",
    });
  };

  return (
    <div className="relative">
      <AdminHeading
        Heading="Links"
        Desc="Add or update your links here, including YouTube, Twitter, Instagram and more."
      />
      <form className="flex flex-col space-y-5">
        {linkTypes.map((link) => (
          <LinkInput
            type={link.type}
            value={links[link.type]}
            setShowSubmit={setShowSubmit}
            key={link.type}
            defaultPlaceholder={
              userLinks && userLinks[link.type] !== ""
                ? userLinks[link.type]
                : link.placeholder
            }
            setLinks={setLinks}
            links={links}
            loading={loading}
          />
        ))}
      </form>
      <button
        className="sticky w-full p-4 mb-5 text-sm font-semibold tracking-wider text-center text-white transition-colors duration-500 border rounded-md mt-7 bg-accent-purple bottom-4 border-darkAlt hover:bg-opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
        onClick={saveLinks}
        disabled={!showSubmit}
      >
        {loading ? (
          <Loading
            type="points-opacity"
            size="sm"
            color="white"
            className="w-16 h-4"
          />
        ) : (
          "Update"
        )}
      </button>
    </div>
  );
}
