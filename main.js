
// main.js
const canvas = document.querySelector('canvas');
const cxt = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {

    for(row=0; row<=canvas.width; row +=50){
        for(col=0; col<=canvas.height; col += 50){
            cxt.beginPath();
            cxt.moveTo(row, 0);
            cxt.lineTo(row, canvas.width);
            cxt.stroke();
            cxt.beginPath();
            cxt.moveTo(0, col);
            cxt.lineTo(canvas.height, col);
            cxt.stroke();
        }
    }
}

class Character{
    constructor(row, col){
        this.row = row;
        this.col = col;
    }
    moveUp(){
        this.row -= 1;
    }
    moveRight() {
       this.col += 1;
    }
    moveDown(){
        this.row +=1;
    }
    moveLeft(){
        this.col -= 1;
    }

};

function drawPlayer() {
    const player = new Image ();
    player.src = "./images/character-down.png"
    player.onload = () => cxt.drawImage(player, 100, 50, 50, 50);
  }



  function drawTreasure(){
  const treasure = new Image ();
  treasure.src = "./images/treasure.png"
  treasure.onload = () => cxt.drawImage(treasure, 100, 100, 50, 50);
  }


window.addEventListener("keydown", (event) => {
    const key = event.key;
    switch(key) {
        case 37:
            player.moveLeft();
        case 38:
            player.moveRight();
        case 39:
            player.moveUp();
        case 40:
            player.moveDown();
    
}});

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

drawEverything();
