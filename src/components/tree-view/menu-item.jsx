import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaPlus, FaMinus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [DisplayCurrentChildren, setDisplayCurrentChildren] = useState({});
  const HandleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...DisplayCurrentChildren,
      [getCurrentLabel]: !DisplayCurrentChildren[getCurrentLabel],
    });
  };
  console.log(DisplayCurrentChildren);
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => HandleToggleChildren(item.label)}>
            {DisplayCurrentChildren[item.label] ? (
              <FaMinus color="#978c81" size={20} />
            ) : (
              <FaPlus color="#978c81" size={20} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      DisplayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
