import React, { useState } from "react";

const generateBoard = (size) => {
  const newBoard = [];

  for (let i = 0; i < size; i++) {
    newBoard.push([...Array(size)]); // gives empty array of size
  }
  return newBoard;
};

const checkWin = (board, player) => {
  const size = board.length;

  let ldwin = true;
  let rdwin = true;

  for (let r = 0; r < size; r++) {
    let hwin = true;
    let vwin = true;

    for (let c = 0; c < size; c++) {
      // horizontal
      if (hwin && board[r][c] !== player) {
        hwin = false;
      }
      // vertical
      if (vwin && board[c][r] !== player) {
        vwin = false;
      }
      // left diagnol
      if (ldwin && r === c && board[r][c] !== player) {
        ldwin = false;
      }
      // right diagnol
      if (rdwin && r + c === size - 1 && board[r][c] !== player) {
        rdwin = false;
      }
    }
    if (hwin || vwin) return true;
  }
  if (ldwin || rdwin) return true;
};

const checkDraw = (board) => {
  const size = board.length;
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (board[r][c] === undefined) {
        return false;
      }
    }
  }
  return true;
};

const TicTacToe = () => {
    const size = 3;
    const initialMessage = "Click To Start as player 'X'";
  const [board, setBoard] = useState(generateBoard(size));

  const [curPlayer, setCurPlayer] = useState("X");

  const [message, setMessage] = useState(initialMessage);

  const handleClick = (r, c) => {
    board[r][c] = curPlayer;
    setBoard([...board]);
    

    if (checkWin(board, curPlayer)) {
      console.log("Congratulation ! Player "+curPlayer + " wins");
      setMessage("Congratulation ! Player "+curPlayer + " wins");
      setTimeout( ()=> {
        setBoard(generateBoard(size));
        setCurPlayer("X");
        setMessage(initialMessage);
      },2000)
      return;
    }
    if (checkDraw(board)) {
      console.log("Thats a Draw ! Well Played Both of You ");
      setMessage("Thats a Draw ! Well Played Both of You ");
      setTimeout( ()=> {
          setBoard(generateBoard(size));
          setCurPlayer("X");
          setMessage(initialMessage);
      },2000)
      return;
    }

    setCurPlayer(curPlayer === "X" ? "O" : "X");
    setMessage(`${curPlayer === "X" ? "O" : "X"}'s Turn`)
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: 'center',
        height: "100%",
        width: '100%'
      }}
    >
      <h1>{message}</h1>
      <div style={{ width : '30vw',height:'30vw'}}>
        {board.map((row, r) => {
          return (
            <div key={r} style={{ display: "flex" , width:'100%',height:`${100/size}%`}}>
              {row.map((cell, c) => {
                return (
                  <div
                    key={c}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "1px solid white",
                      display: "grid",
                      placeContent: "center",
                      fontSize:'2rem'
                    }}
                    onClick={() => handleClick(r, c)}
                  >
                    {cell}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
