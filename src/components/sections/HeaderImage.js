import Image from "next/image";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";

export default function HeaderImage() {
  const [user] = useAuthState(auth);

  return (
    <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[450px] ">
      <div className="absolute z-10 w-full h-full bg-gradient-to-t from-main via-transparent to-transparent " />
      <Image
        onLoadingComplete={() => console.log("complete")}
        src="https://images.unsplash.com/photo-1652452161577-f0dee4a416d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80"
        alt="banner image"
        layout="fill"
        objectFit="cover"
        className=""
      />
      {/* <div className="absolute flex flex-col items-end text-center bottom-10 right-10">
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
      </div> */}
    </div>
  );
}
