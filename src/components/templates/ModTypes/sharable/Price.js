import { MdAttachMoney } from "react-icons/md";

export default function Price({ price, setPrice }) {
  return (
    <div className="flex items-center justify-center px-2 bg-transparent group">
      <MdAttachMoney
        className="text-white group-focus-within:text-highlight"
        size="1.5em"
      />
      <input
        className="w-full h-full font-bold text-gray-300 bg-transparent border-0 rounded-md outline-none group-focus-within:text-highlight text-md placeholder:text-sm placeholder:text-gray-600 placeholder:font-light"
        type="number"
        placeholder="Price"
        onChange={({ target: { value } }) =>
          setPrice((prev) => ({ ...prev, price: value }))
        }
        value={price}
      />
    </div>
  );
}
