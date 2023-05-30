import React from "react";

const Input = (props) => {
  const { label, id, type, icon } = props;
  return (
    <div className="grid grid-cols-2">
      <label htmlFor={id}>{label}</label>
      <div className="relative flex items-center">
        <input type={type || "text"} id={id} className="p-1 w-full" />
        {icon && <div className="absolute right-5 flex items-center">{icon}</div>}
      </div>
    </div>
  );
};

export default Input;
