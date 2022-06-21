import { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useDispatch } from "react-redux";
import { Card, LeftArrow, RightArrow } from "./Arrows";
import { selectedAction } from "../../../../store/slices/uiSlice";

const actionTabs = [
  {
    title: "Profile",
  },
  {
    title: "Vehicles",
  },
  {
    title: "Links",
  },
  {
    title: "Events",
  },
  {
    title: "Overview",
  },
  {
    title: "Settings",
  },
  {
    title: "Feedback",
  },
];

export default function Menu() {
  const dispatch = useDispatch();
  const [items, setItems] = useState(actionTabs);
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);
  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);
      dispatch(selectedAction({ action: id }));
      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <div className="translate-y-1/4 top-1/2 h-7">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {actionTabs.map(({ title }) => (
          <Card
            itemId={title} // NOTE: itemId is required for track items
            title={title}
            key={title}
            onClick={handleClick(title)}
            selected={isItemSelected(title)}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}
