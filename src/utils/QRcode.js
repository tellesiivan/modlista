import QRCode from "react-qr-code";

export default function QRcode({ valueLink, userName }) {
  return (
    <div className="w-[256px] h-full px-3 py-5 bg-white ">
      <QRCode value={valueLink} className="mx-auto rounded-md " />
      <h2 className="mt-6 text-sm font-semibold text-center text-black">
        Scan to visit {userName}&#39;s profile{" "}
        <span className="hidden md:inline-flex">on your phone.</span>
      </h2>
    </div>
  );
}
