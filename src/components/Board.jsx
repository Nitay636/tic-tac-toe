// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

export default function Board(props) {
  return (
    <div className="board">
      <div>
        <Square
          value={props.squares[0]}
          onClick={() => {
            props.onClick(0);
          }}
        />
        <Square
          value={props.squares[1]}
          onClick={() => {
            props.onClick(1);
          }}
        />
        <Square
          value={props.squares[2]}
          onClick={() => {
            props.onClick(2);
          }}
        />
      </div>
      <div>
        <Square
          value={props.squares[3]}
          onClick={() => {
            props.onClick(3);
          }}
        />
        <Square
          value={props.squares[4]}
          onClick={() => {
            props.onClick(4);
          }}
        />
        <Square
          value={props.squares[5]}
          onClick={() => {
            props.onClick(5);
          }}
        />
      </div>
      <div>
        <Square
          value={props.squares[6]}
          onClick={() => {
            props.onClick(6);
          }}
        />
        <Square
          value={props.squares[7]}
          onClick={() => {
            props.onClick(7);
          }}
        />
        <Square
          value={props.squares[8]}
          onClick={() => {
            props.onClick(8);
          }}
        />
      </div>
    </div>
  );
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
