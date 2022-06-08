import { useSelector } from "react-redux";
import ActionToShow from "../../helpers/ActionToShow";
import Menu from "./scrollTag/Menu";

export default function AdminPanel({ profileUser }) {
  const actionSelected = useSelector((store) => store.userUI.actionSelected);

  if (!profileUser) {
    return <p className="text-white text-md">loading</p>;
  }

  return (
    <div className="fixed hidden h-full p-3 border-r border-gray-800 md:block w-96 md:overflow-y-scroll ">
      <Menu />
      <ActionToShow action={actionSelected} />
    </div>
  );
}
