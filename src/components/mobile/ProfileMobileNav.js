import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ActionToShow from "../helpers/ActionToShow";
import Menu from "../sections/userAdmin/scrollTag/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileNav } from "../../store/slices/modalsSlice";

export default function ProfileMobileNav() {
  const actionSelected = useSelector((store) => store.userUI.actionSelected);
  const open = useSelector((store) => store.modals.showMobileNav);
  const dispatch = useDispatch();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 md:hidden"
        onClose={() => dispatch(toggleMobileNav())}
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
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => dispatch(toggleMobileNav())}
          />
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
            <Dialog.Panel className="fixed bottom-0 w-full p-2 text-left align-middle bg-main rounded-xl shadow-xl flex flex-col z-50 h-[80%] overflow-y-scroll ">
              <div className="p-2">
                <div className="mb-6 text-center">
                  <button className="px-3 py-1 text-xs text-gray-400 rounded-full bg-inputMain ">
                    Close
                  </button>
                </div>
                <div className="-mx-1">
                  <Menu />
                  <ActionToShow action={actionSelected} />
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
