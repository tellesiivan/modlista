import AdminProfile from "../sections/profile/AdminProfile";
import SocialLinks from "../sections/SocialLinks";
import AdminEvents from "../sections/events/AdminEvents";
import AdminVehicles from "../sections/Vehicles/AdminVehicles";

export default function ActionToShow({ action }) {
  if (action === "Profile") {
    return <AdminProfile />;
  } else if (action === "Social Links") {
    return <SocialLinks />;
  } else if (action === "Events") {
    return <AdminEvents />;
  } else if (action === "Vehicles") {
    return <AdminVehicles />;
  }
}
