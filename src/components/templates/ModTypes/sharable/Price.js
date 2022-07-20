import { MdAttachMoney } from "react-icons/md";

export default function Price({ price, setPrice }) {
  return (
    <div className="flex items-center justify-center px-2 bg-transparent group">
      <MdAttachMoney className="text-white" size="1.5em" />
      <input
        className="w-full h-full font-bold bg-transparent border-0 rounded-md outline-none text-inputGray text-md placeholder:text-sm placeholder:text-textGray placeholder:font-light"
        type="number"
        placeholder="Price"
        onChange={({ target: { value } }) => setPrice("price", value)}
        value={price}
        pattern="[0-9]*"
      />
    </div>
  );
}
