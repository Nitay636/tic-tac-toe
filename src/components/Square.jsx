import React from "react";

export default function className(props) {
  return (
    <div className="btn" onClick={props.onClick}>
      {props.value}
    </div>
  );
}
