// eslint-disable-next-line no-unused-vars
import React from "react";

export default function className(props) {
  return (
    <div
      className={props.value ? "btn disabled" : "btn"}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}
