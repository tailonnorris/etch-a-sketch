let board = document.querySelector(".board");

document.addEventListener("DOMContentLoaded", ()=>{
  createBoard(32);
});

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
};