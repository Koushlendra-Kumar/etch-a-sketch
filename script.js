let gridSize =3;
let bgColor = 'black';
const container = document.querySelector('.container');
const blackColor = document.querySelector('.black-color');
blackColor.addEventListener('click',()=>{
    blackColor.classList.add('active');
    bgColor = 'black';
    randomColor.classList.remove('active');
    eraser.classList.remove('active');
});

const randomColor = document.querySelector('.random-color');
randomColor.addEventListener('click', ()=>{
    randomColor.classList.add('active');
    bgColor='random';
    blackColor.classList.remove('active');
    eraser.classList.remove('active');
});

const eraser = document.querySelector('.erase');
eraser.addEventListener('click', ()=>{
    eraser.classList.add('active');
    bgColor = 'white';
    blackColor.classList.remove('active');
    randomColor.classList.remove('active');
});

const deleteGrid = document.querySelector('.clear-grid');
deleteGrid.addEventListener('click', ()=>{
    clearGrid();
    createGrid(3);
    customize.classList.remove('active');
    smallGrid.classList.remove('active');
    mediumGrid.classList.remove('active');
    bigGrid.classList.remove('active');
});


const smallGrid = document.querySelector('.small');
smallGrid.addEventListener('click', ()=> {
    clearGrid();
    createGrid(16);
    smallGrid.classList.add('active');
    mediumGrid.classList.remove('active');
    bigGrid.classList.remove('active');
    customize.classList.remove('active');
});
        

const mediumGrid = document.querySelector('.medium');
mediumGrid.addEventListener('click', ()=>{
    clearGrid();
    createGrid(32);
    mediumGrid.classList.add('active');
    smallGrid.classList.remove('active');
    bigGrid.classList.remove('active');
    customize.classList.remove('active');
 });

const bigGrid = document.querySelector('.big');
bigGrid.addEventListener('click', () =>{
    clearGrid();
    createGrid(64);
    bigGrid.classList.add('active');
    smallGrid.classList.remove('active');
    mediumGrid.classList.remove('active');
    customize.classList.remove('active');
});

const customize = document.querySelector('.customize');
customize.addEventListener('click', ()=>{
    customize.classList.add('active');
    let userInput = parseInt(prompt('Enter grid size (maximum: 100)'));
    if(userInput<=100){
        clearGrid();
        createGrid(userInput);
        smallGrid.classList.remove('active');
        mediumGrid.classList.remove('active');
        bigGrid.classList.remove('active');
    }else if(userInput>100){
        customize.classList.remove('active');
        alert('Value not allowed');
    }
}); 

function createGrid(gridSize){
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for(let i = 1; i<=gridSize*gridSize; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.addEventListener('mousemove', changeColor);
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
    }else if(bgColor=='black'){
        e.target.style.backgroundColor = 'black';
    }
   
}

createGrid(gridSize);

