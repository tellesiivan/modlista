import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiOutlineSelector, HiCheck } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { resetMod } from "../../../../../../store/slices/modificationsSlice";

export default function ModTypeDropdown({ mods, setType, type }) {
  const dispatch = useDispatch();

  return (
    <div className="absolute z-30 w-[95%] mt-4 -bottom-6 -translate-x-1/2 left-1/2">
      <Listbox value={type} onChange={setType}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-4 pl-3 pr-10 text-left rounded-md cursor-pointer bg-lighterAlt sm:text-sm">
            <span className="block text-xs tracking-wide text-gray-200 truncate">
              {type}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <HiOutlineSelector
                className="w-5 h-5 text-gray-200"
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
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-xs border rounded-md shadow-lg bg-alt max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none border-main">
              {mods.map((type, typeIdx) => (
                <Listbox.Option
                  key={typeIdx}
                  onClick={() => dispatch(resetMod())}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-lighterAlt text-gray-200" : "text-gray-500"
                    }`
                  }
                  value={type.name}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium text-selected" : "font-normal"
                        }`}
                      >
                        {type.name}
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
