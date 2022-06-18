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
      className={`${enabled ? "bg-highlight " : "bg-inputMain"}
          relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Toggle</span>
      <span
        aria-hidden="true"
        className={`${
          enabled ? "translate-x-6 bg-alt" : "translate-x-0 bg-white"
        }
            pointer-events-none inline-block h-5 w-5 transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
}
