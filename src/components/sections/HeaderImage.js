import Image from "next/image";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";

export default function HeaderImage() {
  const [user] = useAuthState(auth);

  return (
    <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[550px] ">
      <Image
        onLoadingComplete={() => console.log("complete")}
        src="https://images.unsplash.com/photo-1632350456633-0043fde4bf78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        alt="banner image"
        layout="fill"
        objectFit="cover"
        className=""
      />
      <div className="absolute flex flex-col items-end text-center bottom-10 right-10">
        <p className="font-medium text-white text-md sm:text-2xl">
          Share your vehicle modifications with others.
        </p>
        {user && (
          <Link href={`/u/${user.uid}`}>
            <button className="px-8 py-3 mt-4 bg-[#00000066] rounded-md text-sm font-extrabold text-gray-200">
              Profile
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
