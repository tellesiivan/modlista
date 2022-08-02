import Link from "next/link";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaChrome,
} from "react-icons/fa";

export default function SocialLinks({ links }) {
  const socialIcon = (type) => {
    if (type === "Website") {
      return <FaChrome size="1.02em" className="group-hover:text-yellow-400" />;
    } else if (type === "Instagram") {
      return (
        <FaInstagram size="1.02em" className="group-hover:text-pink-500" />
      );
    } else if (type === "Facebook") {
      return <FaFacebook size="1.02em" className="group-hover:text-blue-500" />;
    } else if (type === "YouTube") {
      return <FaYoutube size="1.02em" className="group-hover:text-red-500" />;
    } else if (type === "Twitter") {
      return <FaTwitter size="1.02em" className="group-hover:text-blue-400" />;
    } else {
      return type;
    }
  };

  return (
    <div className="flex p-1 space-x-0.5 md:border rounded-full md:bg-dark md:border-alt  -ml-3 md:mt-0 md:ml-0">
      {Object.entries(links).map(([key, val]) => {
        if (val !== "")
          return (
            <Link key={key} rel="noreferrer" href={val}>
              <a
                className="flex items-center justify-center w-8 h-8 text-gray-600 rounded-full hover:bg-alt group "
                target="_blank"
              >
                {socialIcon(key)}
              </a>
            </Link>
          );
      })}
    </div>
  );
}
