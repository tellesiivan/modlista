import { useContext, useEffect, useState } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import {
  VisibilityContext,
  slidingWindow,
  getItemsPos,
} from "react-horizontal-scrolling-menu";
import { useSelector } from "react-redux";

function Arrow({ children, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        height: "24px",
        width: "24px",
        cursor: "pointer",
        backgroundColor: "#000",
        cursor: "pointer",
        borderRadius: "100px",
        display: "flex",
        placeItems: "center",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}

function LeftArrow() {
  const {
    items,
    visibleItems,
    getItemById,
    isFirstItemVisible,
    scrollToItem,
    visibleItemsWithoutSeparators,
    initComplete,
  } = useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  // NOTE: for center items
  const prevGroupItems = slidingWindow(
    items.toItemsKeys(),
    visibleItems
  ).prev();
  const { center } = getItemsPos(prevGroupItems);
  const scrollPrevCentered = () =>
    scrollToItem(getItemById(center), "smooth", "center");

  return (
    <div className="absolute z-10 flex items-center justify-center left-0.5 h-7">
      <Arrow disabled={disabled} onClick={scrollPrevCentered}>
        <HiOutlineArrowSmLeft className="text-white" />
      </Arrow>
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <div className="absolute z-10 flex items-center justify-center right-0.5 h-7">
      <Arrow disabled={disabled} onClick={() => scrollNext()}>
        <HiOutlineArrowSmRight className="text-white" />
      </Arrow>
    </div>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = useContext(VisibilityContext);
  const actionSelected = useSelector((store) => store.userUI.actionSelected);

  return (
    <div onClick={() => onClick(visibility)} tabIndex={0}>
      <div
        className={` flex items-center justify-center w-24 h-7 mx-1 rounded-full  text-xs cursor-pointer hover:opacity-75 ${
          actionSelected === title
            ? "bg-ag-green text-main"
            : "bg-greyDark text-black"
        } `}
      >
        <div>{title}</div>
      </div>
    </div>
  );
}

export { Card, RightArrow, LeftArrow };
