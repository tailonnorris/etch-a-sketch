let board = document.querySelector(".board");
let setSize = document.querySelector(".btnSize");
let color = 'black';

document.addEventListener("DOMContentLoaded", ()=>{
  createBoard(32);
});

// setSize.addEventListener("click", ()=>{
//   let boardSize = prompt("Por favor digite la dimension del tablero");

//   if (boardSize > 100 || boardSize <= 0 || board == undefined){
//     boardSize = prompt("Por favor digite un numero entre 1 y 100");
//   };

//   createBoard(boardSize)
// })

function createBoard(size){
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 1; j <= size ; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      column.appendChild(row);
    };
    board.appendChild(column);
  };

  let cells = [...document.querySelectorAll(".row")];

  cells.forEach(item =>{
    item.addEventListener("mouseover", ()=>{
      console.log(item);
      drawing(item);
    });
  });
};

function drawing (square){
  square.style.backgroundColor = color;
};