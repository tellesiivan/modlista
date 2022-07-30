import Image from "next/image";
import CreateEvent from "./admin/CreateEvent";
import EventToday from "./admin/EventToday";
export default function AdminEvents() {
  return (
    <>
      {/* TODO: If user is going to an event list below */}
      <EventToday />
      <CreateEvent />
    </>
  );
}
