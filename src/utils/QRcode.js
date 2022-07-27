import QRCode from "react-qr-code";

export default function QRcode({ valueLink, userName }) {
  return (
    <div className="w-full h-full px-3 py-5 ">
      <QRCode value={valueLink} className="mx-auto rounded-md " />
      <div className="flex items-center justify-center w-full p-2 mt-6 rounded-md bg-alt bg-opacity-90">
        <h2 className="text-sm font-medium text-center text-white">
          Scan to visit{" "}
          <span className="text-ag-yellow"> {userName}&#39;s</span> profile.
        </h2>
      </div>
    </div>
  );
}
