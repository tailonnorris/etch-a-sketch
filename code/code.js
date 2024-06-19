let board = document.querySelector(".board");
let setSize = document.querySelector(".btnSize");
let rgbColor = document.querySelector(".rgb");
let rgbOn = false;
let color ;

document.addEventListener("DOMContentLoaded", ()=>{
  createBoard(10);
});

rgbColor.addEventListener("click", ()=> {
  rgbOn == true ? rgbOn = false : rgbOn = true;
  console.log(rgbOn);
});

setSize.addEventListener("click", ()=>{
  let boardSize = prompt("Por favor digite la dimension del tablero");

  if (boardSize > 100 || boardSize <= 0 || boardSize == ''){
    boardSize = prompt("Por favor digite un numero entre 1 y 100");
  };

  createBoard(boardSize)
})

function createBoard(size){
  resetBoard();
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
      drawing(item);
    });
  });
};

function drawing (square){
  if(rgbOn == true){
    color = rgb();
    console.log(color);
    square.style.backgroundColor = `rgb(${color})`;
  }else{
    square.style.backgroundColor = `Black`;

  }
  
};

function resetBoard(){
  const boardCells = document.querySelectorAll(".column");
  for (const cell of boardCells){
    cell.remove();
  };
};

function rgb(){
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);

  return [r,g,b];
};

function randomInteger(max){
  return Math.floor(Math.random()*(max+1));
};