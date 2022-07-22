import AdminProfile from "../pages/userProfile/profile/AdminProfile";
import SocialLinks from "../pages/userProfile/links/Links";
import AdminEvents from "../pages/userProfile/events/AdminEvents";
import AdminVehicles from "../pages/userProfile/Vehicles/admin/AdminVehicles";
import Settings from "../pages/userProfile/Settings";

import Feedback from "../pages/userProfile/Feedback";

export default function ActionToShow({ action }) {
  if (action === "Profile") {
    return <AdminProfile />;
  } else if (action === "Links") {
    return <SocialLinks />;
  } else if (action === "Events") {
    return <AdminEvents />;
  } else if (action === "Vehicles") {
    return <AdminVehicles />;
  } else if (action === "Settings") {
    return <Settings />;
  } else if (action === "Feedback") {
    return <Feedback />;
  }

  return "Explanatory actions";
}
