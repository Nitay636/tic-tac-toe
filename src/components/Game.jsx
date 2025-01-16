import React from "react";
import Board from "./Board.jsx";

const reducer = (state, action) => {
  switch (action.type) {
    case "JUMP":
      return {
        xIsNext: action.payload.step % 2 === 0,
        history: state.history.slice(0, action.payload.step + 1),
      };
    case "MOVE":
      console.log("inside reducer");
      return {
        ...state,
        history: state.history.concat({
          squares: action.payload.squares,
        }),
        indexChanged: action.payload.indexChanged,
        xIsNext: !state.xIsNext,
      };
    default:
      return state;
  }
};

export default function Game() {
  console.log("inside game");
  const [state, dispatch] = React.useReducer(reducer, {
    xIsNext: true,
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    indexChanged: null,
  });
  console.log("after useReducer");
  const { xIsNext, history, indexChanged } = state;
  console.log(state);
  const jumpTo = (step) => {
    dispatch({
      type: "JUMP",
      payload: { step },
    });
  };

  const handleClick = (i) => {
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    if (history.length > 6) {
      squares.splice(i, 1);
      squares.splice(state.indexChanged, 0, null);
    }

    dispatch({
      type: "MOVE",
      payload: {
        squares: squares,
        indexChanged: i,
      },
    });
    console.log("after dispatch");
  };

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  const status = winner
    ? winner === "D"
      ? "Draw"
      : "Winner is: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");
  const moves = history.map((step, move) => {
    const desc = move ? "Go to #" + move : "Start the game";
    return (
      <li key={move} style={{ listStyleType: "none" }}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className={winner ? "game disabled" : "game"}>
      <div className="game-board">
        <Board
          onClick={(i) => handleClick(i)}
          squares={current.squares}
        ></Board>
      </div>
      <div className="game-info">
        {status}
        <ul>{moves}</ul>
      </div>
    </div>
  );
}

const calculateWinner = (squares) => {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let isDraw = true;
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
    if (!squares[a] || !squares[b] || !squares[c]) {
      isDraw = false;
    }
  }
  if (isDraw) return "D";
  return null;
};
