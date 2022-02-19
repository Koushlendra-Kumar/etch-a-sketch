
const colorInp = document.querySelector('#color');
const sizeInp = document.querySelector('#grid-size');
const container = document.querySelector('.container');
const randomColor = document.querySelector('.random-color');
const eraser = document.querySelector('.erase');
const deleteGrid = document.querySelector('.clear-grid');
const gridRangeOutput = document.querySelector('.grid-range');
let gridSize =sizeInp.value;
let bgColor = 'userSelection';

gridRangeOutput.textContent = sizeInp.value + ' X '+ sizeInp.value;
sizeInp.addEventListener('input', ()=>{
    gridRangeOutput.textContent = sizeInp.value + ' X '+ sizeInp.value;
    gridSize = sizeInp.value;
    clearGrid();
    createGrid(gridSize);
});
colorInp.addEventListener('input',()=>{
    bgColor = 'userSelection';
    eraser.classList.remove('active');
    randomColor.classList.remove('active');
});

randomColor.addEventListener('click', ()=>{
    randomColor.classList.add('active');
    bgColor='random';
    eraser.classList.remove('active');
});


eraser.addEventListener('click', ()=>{
    eraser.classList.add('active');
    bgColor = 'white';
    randomColor.classList.remove('active');
});

deleteGrid.addEventListener('click', ()=>{
    clearGrid();
    sizeInp.value = 4;
    gridRangeOutput.textContent = sizeInp.value + ' X '+ sizeInp.value;
    createGrid(4);
});

function createGrid(gridSize){
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for(let i = 1; i<=gridSize*gridSize; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.addEventListener('mouseenter', changeColor);
        container.appendChild(grid);
       }
}

function clearGrid() {
    container.innerHTML = ''
    
  }

function changeColor(e){
    if(bgColor=='white'){
        e.target.style.backgroundColor = 'white';
    }else if(bgColor =='random'){
        e.target.style.backgroundColor =`hsl(${Math.random()* 360},100% ,50%)`;
    }else if(bgColor=='userSelection'){
        e.target.style.backgroundColor = colorInp.value;
    }
   
}

createGrid(gridSize);

