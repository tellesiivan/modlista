import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth, firestore } from "../../firebase/clientApp";
import { toggleSidebar } from "../../store/slices/modalsSlice";
import Avatar from "../helpers/Avatar";
import UserName from "../SidebarActions/UserName";
import { useRouter } from "next/router";
import { doc, onSnapshot } from "firebase/firestore";
import { addUser } from "../../store/slices/uiSlice";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Sidebar({ active }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store.userUI.user);

  const { open } = useSelector((store) => store.modals.sidebarModal);

  const [user] = useAuthState(auth);

  // profile changes from DB
  useEffect(() => {
    if (user) {
      onSnapshot(doc(firestore, `users/${user.uid}`), (doc) => {
        const userData = {
          ...doc.data(),
          createdAt: new Date(
            doc.data()?.createdAt.seconds * 1000
          ).toLocaleString("en-US"),
        };

        dispatch(
          addUser({
            user: userData,
          })
        );
      });
    }
  }, [user]);

  const Logout = async () => {
    await signOut(auth);
    dispatch(
      addUser({
        user: null,
      })
    );

    dispatch(toggleSidebar({ open: false }));
  };

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-20"
          onClose={() => dispatch(toggleSidebar({ open: false }))}
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

          <div className="fixed top-0 bottom-0 right-0 z-50 w-full h-full text-center md:top-2 md:bottom-2 md:right-2 md:w-80">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in duration-500 md:duration-700 transform"
              enterFrom="translate-x-96"
              enterTo="translate-x-0"
              leave="transition ease duration-500 md:duration-700 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="z-50 flex flex-col w-full p-2 overflow-hidden text-left align-middle border rounded-md shadow-xl border-inputMain bg-alt sidebarH md:w-80">
                <Dialog.Title
                  as="div"
                  className="flex flex-row items-center justify-between w-full p-2 border rounded-md cursor-pointer border-inputMain hover:bg-black"
                  onClick={() => {
                    router.push(`/u/${user?.uid} `);
                    dispatch(toggleSidebar({ open: false }));
                  }}
                >
                  {user && (
                    <>
                      <Avatar />
                      <UserName />
                    </>
                  )}
                </Dialog.Title>{" "}
                <div className="mb-auto">
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {user && currentUser?.uid}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md"
                      onClick={() => dispatch(toggleSidebar({ open: false }))}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </div>
                <div className="mt-auto">
                  <button
                    className="flex flex-row items-center justify-between w-full p-2 text-sm text-gray-300 border rounded-md cursor-pointer border-inputMain hover:bg-black"
                    onClick={Logout}
                  >
                    <RiLogoutBoxLine />
                    <p>Logout</p>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
