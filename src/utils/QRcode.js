import QRCode from "react-qr-code";

export default function QRcode({ valueLink, userName }) {
  return (
    <div className="w-full h-full px-3 py-5 bg-white">
      <QRCode value={valueLink} className="mx-auto rounded-md " />
      <div className="flex items-center justify-center w-full p-2 mt-6 ">
        <h2 className="text-sm font-semibold text-center text-black">
          Scan to visit {userName}&#39;s profile{" "}
          <span className="hidden md:inline-flex">on your phone.</span>
        </h2>
      </div>
    </div>
  );
}
