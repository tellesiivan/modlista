import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiOutlineSelector, HiCheck } from "react-icons/hi";

export default function TrimSelection({ trims, setTrim, trim }) {
  const [selected, setSelected] = useState(trims[0].name);

  return (
    <div className="w-full my-3">
      <p className="text-sm text-dark">Trim</p>

      <Listbox value={trim === "" ? selected : trim} onChange={setTrim}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-4 pl-3 pr-10 text-left rounded-lg cursor-default bg-dark sm:text-sm">
            <span className="block text-xs text-gray-300 truncate">
              {trim === "" ? selected : trim}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <HiOutlineSelector
                className="w-5 h-5 text-main"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-xs rounded-md shadow-xl bg-main max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none ">
              {trims.map((trim, trimIdx) => (
                <Listbox.Option
                  key={trimIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-alt text-dark" : "text-gray-500"
                    }`
                  }
                  value={trim.name}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {trim.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-selected">
                          <HiCheck className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
