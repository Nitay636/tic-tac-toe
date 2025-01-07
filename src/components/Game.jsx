import React from "react";
import Board from "./Board.jsx";

export default function Game() {
  const status = "Next player: X";
  const moves = (
    <li>
      <button>Start the game</button>
    </li>
  );
  const squares = Array(9).fill(null);
  return (
    <div>
      <div className="game-board">
        <Board></Board>
      </div>
      <div className="game-info">
        {status}
        <ul>{moves}</ul>
      </div>
    </div>
  );
}
