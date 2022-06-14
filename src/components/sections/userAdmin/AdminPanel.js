import { useSelector } from "react-redux";
import ActionToShow from "../../helpers/ActionToShow";
import AdminPanelLoading from "../../helpers/loading/AdminPanelLoading";
import Menu from "./scrollTag/Menu";

export default function AdminPanel({ profileUser }) {
  const actionSelected = useSelector((store) => store.userUI.actionSelected);

  if (!profileUser) {
    return <AdminPanelLoading />;
  }

  return (
    <div className="fixed hidden px-3 border-r border-gray-800 adminPanelH md:block w-96 md:overflow-y-scroll">
      <div className="relative adminPanelH">
        <div className="sticky z-50 h-12 my-auto -mx-3 top-4 md:top-0 bg-gradient-to-b from-main via-main to-transparent">
          <Menu />
        </div>

        <ActionToShow action={actionSelected} />
      </div>
    </div>
  );
}
