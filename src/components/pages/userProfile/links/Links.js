import { useState } from "react";
import AdminHeading from "../../../helpers/AdminHeading";
import LinkInput from "./LinkInput";
import { ImLink } from "react-icons/im";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, runTransaction } from "firebase/firestore";
import { auth, firestore } from "../../../../firebase/clientApp";

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
  const [links, setLinks] = useState({
    Website: null,
    Instagram: null,
    Facebook: null,
    YouTube: null,
    Twitter: null,
  });
  const [user] = useAuthState(auth);

  const saveLinks = async (e) => {
    e.preventDefault();
    // user Ref
    const userRef = doc(firestore, `users/${user.uid}`);

    try {
      await runTransaction(firestore, async (transaction) => {
        const userDoc = await transaction.get(userRef);

        const hasLinkObjct = userDoc.data().links;

        if (hasLinkObjct) {
          transaction.update(userRef, {
            links: { ...hasLinkObjct, ...links },
          });
        } else {
          transaction.update(userRef, {
            links,
          });
        }
      });
    } catch (error) {}
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
            key={link.type}
            defaultPlaceholder={link.placeholder}
            setLinks={setLinks}
            links={links}
          />
        ))}
      </form>
      <button
        className="sticky w-full p-4 mb-5 text-sm font-semibold tracking-wider text-center text-white transition-colors duration-500 border rounded-md mt-7 bg-main bottom-4 border-darkAlt hover:bg-greyDark"
        onClick={saveLinks}
      >
        Save
      </button>
    </div>
  );
}
