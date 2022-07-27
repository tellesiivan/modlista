import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMainModal } from "../../store/slices/modalsSlice";
import { GrClose } from "react-icons/gr";

export default function MainModal() {
  const { open, content } = useSelector((store) => store.modals.mainModal);
  const dispatch = useDispatch();

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() =>
            dispatch(
              toggleMainModal({
                open: false,
              })
            )
          }
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 h-screen bg-black bg-opacity-70 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-2 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-sm overflow-hidden text-left align-middle transition-all transform rounded-md shadow-xl bg-main">
                  <div
                    className="absolute z-50 flex items-center justify-center w-6 h-6 transition-transform bg-white rounded-full cursor-pointer top-1 right-1 hover:scale-110 drop-shadow-xl"
                    onClick={() =>
                      dispatch(
                        toggleMainModal({
                          open: false,
                        })
                      )
                    }
                  >
                    <GrClose size="0.65em" />
                  </div>
                  {content}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
