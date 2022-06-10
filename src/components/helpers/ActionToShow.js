import AdminProfile from "../sections/profile/AdminProfile";
import SocialLinks from "../sections/links/Links";
import AdminEvents from "../sections/events/AdminEvents";
import AdminVehicles from "../sections/Vehicles/AdminVehicles";
import Settings from "../sections/Settings";
import Feedback from "../sections/Feedback";

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
