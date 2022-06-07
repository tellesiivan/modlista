import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle({ getValue }) {
  const [enabled, setEnabled] = useState(false);

  const onToggle = () => {
    setEnabled(!enabled);
    getValue(!enabled);
  };

  return (
    <Switch
      checked={enabled}
      onChange={onToggle}
      className={`${enabled ? "bg-selected" : "bg-alt"}
          relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Toggle</span>
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-gray-300 shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
}
