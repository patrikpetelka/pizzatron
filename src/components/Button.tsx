import React, { useState } from "react";

const Button = (props: any) => {
  const clickHandler = () => {
    props.setActiveButton(props.id);
  };
  return (
    <button
      type="button"
      className={`${
        props.active ? "button-secondary" : null
      } button-secondary `}
      value={props.value}
      onClick={clickHandler}
    >
      {props.value}
    </button>
  );
};

export default Button;
