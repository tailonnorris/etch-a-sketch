let board = document.querySelector(".board");

document.addEventListener("DOMContentLoaded", () =>{
    createBoard(16);
});

function createBoard(size){
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    board.appendChild(column);
    for (let j = 1; j <= size ; j++) {
        let row = document.createElement ("div");
        row.classList.add("row");
        column.appendChild(row);
    };
    
  };
};