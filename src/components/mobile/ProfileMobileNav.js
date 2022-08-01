import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ActionToShow from "../helpers/ActionToShow";
import Menu from "../pages/userProfile/userAdmin/scrollTag/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileNav } from "../../store/slices/modalsSlice";

export default function ProfileMobileNav() {
  const actionSelected = useSelector((store) => store.userUI.actionSelected);
  const open = useSelector((store) => store.modals.showMobileNav);

  const dispatch = useDispatch();

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 md:hidden"
        onClose={() => dispatch(toggleMobileNav({ open: false }))}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="w-full h-full text-center ">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in duration-500 transform"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease duration-500 transform"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
          >
            <Dialog.Panel className="fixed bottom-0 w-full p-1 text-left align-middle bg-main rounded-t-[30px] shadow-xl flex flex-col z-50 h-[85%] overflow-y-scroll ">
              <div className="relative w-full p-2 pb-6 md:pb-2">
                <div className="mb-2 -mt-3 text-center">
                  <button
                    className="px-3 py-0.5 text-xs text-inputGray rounded-full outline-none bg-alt"
                    onClick={() => dispatch(toggleMobileNav({ open: false }))}
                  >
                    Close
                  </button>
                </div>
                <div className="sticky z-50 h-12 my-auto mb-2 -mx-3 -top-2 bg-gradient-to-b from-main via-main to-transparent">
                  <Menu />
                </div>
                <ActionToShow action={actionSelected} />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
