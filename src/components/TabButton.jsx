import React from "react";

function TabButton({ isSelected,children, ...props }) {
  return (
    <>
      <li>
        <button className={isSelected ? "active" : undefined} {...props}>
          {children}
        </button>
      </li>
    </>
  );
}

export default TabButton;
