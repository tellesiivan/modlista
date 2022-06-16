import { RadioGroup } from "@headlessui/react";

export default function RadioGroupTemplate({
  options,
  label,
  setSelected,
  selected,
}) {
  return (
    <div className="w-full">
      <h2 className="mt-0 mb-2 text-sm text-gray-500 ">{label}</h2>
      <div className="w-full ">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className={`grid grid-cols-1 w-full space-x-2 `}>
            {options.map((option) => (
              <RadioGroup.Option
                key={option}
                value={option}
                className={({ active, checked }) =>
                  `
                  ${checked ? "bg-selected  text-main" : "bg-alt "}
                    relative flex cursor-pointer rounded-md px-4 py-2  focus:outline-none h-12 `
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-main" : "text-gray-400"
                            }`}
                          >
                            {option}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="text-white shrink-0">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#111" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
