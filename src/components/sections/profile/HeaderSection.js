import Image from "next/image";
import Avatar from "../../helpers/Avatar";
import moment from "moment";

export default function HeaderSection({ currentUser }) {
  const { name, email, createdAt } = currentUser;

  return (
    <div className="relative h-[250px] overflow-hidden ">
      <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-t from-main " />
      <Image
        onLoadingComplete={() => console.log("complete")}
        src="https://images.unsplash.com/photo-1627666259356-03a116b7dde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="banner image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute z-20 flex items-center left-4 bottom-10 md:left-6">
        <div className="text-xl border-4 rounded-full shadow-2xl border-alt">
          <Avatar size="md:w-18 md:h-18 h-14 w-14" />
        </div>
        <div className="ml-2">
          <h2 className="text-lg font-semibold text-gray-200">
            {name ? name : email}
          </h2>
          <p className="text-sm text-gray-400">
            Member since <span>{moment(createdAt).format("YYYY")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
