const sudokus = [
    [2,5,0,7,0,0,0,1,6,0,6,0,0,0,0,4,2,8,0,0,0,1,0,0,5,0,0,5,7,0,2,1,8,9,0,0,0,0,0,3,0,9,7,8,0,9,0,3,0,0,5,1,0,0,0,0,0,8,3,0,0,7,0,4,0,2,0,0,7,0,0,0,0,0,7,0,5,0,0,3,0],
    [0,0,9,0,0,0,0,0,8,6,0,7,4,1,0,0,5,0,0,0,2,0,5,0,0,0,7,0,9,0,1,0,7,6,0,0,0,4,0,0,9,6,3,0,0,8,6,3,0,0,4,7,0,9,5,3,6,0,0,0,0,7,0,0,0,0,7,8,0,0,3,0,0,7,0,0,0,0,0,9,2],
    [0,0,0,0,5,0,1,0,0,7,0,0,1,0,0,6,0,0,2,3,1,0,8,0,0,0,0,3,1,0,0,0,6,8,0,0,0,0,7,0,0,0,0,9,5,0,4,0,0,3,7,0,0,0,0,2,5,3,0,0,0,8,7,0,0,6,9,0,0,0,3,2,4,0,3,2,0,0,0,1,0],
    [6,0,0,5,1,8,0,0,0,4,2,1,0,0,0,0,0,0,0,8,0,0,3,0,6,9,1,0,0,0,1,0,2,7,5,8,5,1,6,0,0,0,2,0,0,0,0,0,9,5,3,0,6,0,0,0,0,0,0,0,0,1,7,3,9,8,7,0,1,0,0,6,0,5,0,8,4,6,0,2,0],
    [4,0,3,0,5,2,6,0,0,0,0,2,0,8,6,3,0,0,0,0,0,0,1,3,4,2,7,1,6,0,0,0,4,0,9,0,0,3,0,0,0,5,0,4,0,0,7,0,0,9,0,5,0,0,9,0,0,0,0,0,0,0,6,3,0,0,8,2,7,0,0,1,5,8,0,3,0,0,0,0,0],
    [0,0,2,0,0,0,4,3,8,4,3,9,0,0,5,0,0,2,8,0,0,2,0,3,0,0,5,6,0,0,9,5,0,0,0,0,5,9,4,0,0,0,8,2,0,7,0,0,0,6,4,0,9,0,0,0,0,0,0,8,1,6,0,0,4,0,0,0,0,0,0,0,2,8,0,4,0,9,3,0,0],
    [0,0,0,7,3,0,0,0,9,2,8,9,0,0,0,7,0,0,7,0,0,0,8,0,2,6,0,8,0,0,0,0,5,6,0,4,6,3,0,0,0,0,0,0,0,0,0,0,8,0,9,0,0,5,0,0,8,0,5,0,3,2,6,5,0,0,2,4,0,9,0,0,3,1,0,6,0,0,0,0,7]
]

let activeCellId = 1;

let sudoku_string = "<ul>";
for(i=1; i<=81; i++){
    sudoku_string += `<li class="dummy" id="${i}" onclick="activateCell(${i})"></li>`;
}
sudoku_string += "</ul>";
document.getElementById("sudoku").innerHTML = sudoku_string;

function selectCijfer(cijfer){
    document.getElementById(activeCellId).innerText = cijfer;
}

function activateCell(id){

    if(!document.getElementById(id).classList.contains("bg-secondary-subtle")){
        document.getElementById(activeCellId).classList.remove("bg-primary-subtle");
        activeCellId = id;
        document.getElementById(activeCellId).classList.add("bg-primary-subtle");
    }
}

function GenereerSudoku(){
    let random_nmbr = Math.floor(Math.random()*7);
    let selected_sudoku = sudokus[random_nmbr];
    let index = 0;

    selected_sudoku.forEach(plaatsInGrid);
}

function plaatsInGrid(item, index)
{ 

    if(item == 0){
        document.getElementById(index + 1).classList.remove("bg-secondary-subtle");
        document.getElementById(index + 1).innerText = "";
    }
    else {
        document.getElementById(index + 1).innerText = item;
        document.getElementById(index + 1).classList.add("bg-secondary-subtle");
    }
}

function getSudokuArray() {
    let sudokuArray = [];
    for (let i = 1; i <= 81; i++) {
        let cellValue = document.getElementById(i).innerText;
        sudokuArray.push(cellValue === "" ? 0 : parseInt(cellValue));
    }
    return sudokuArray;
}

function checkSudoku() {
    let board = getSudokuArray();

    // Check if all cells are filled
    if (board.includes(0)) {
        alert("Not all cells have been filled in.");
        return false;
    }

    // Helper function to check if an array has duplicates
    function hasDuplicates(array) {
        let seen = new Set();
        for (let number of array) {
            if (number !== 0) {
                if (seen.has(number)) {
                    return true;
                }
                seen.add(number);
            }
        }
        return false;
    }

    // Check rows
    for (let i = 0; i < 9; i++) {
        let row = board.slice(i * 9, i * 9 + 9);
        if (hasDuplicates(row)) {
            alert("Incorrect Sudoku! Row " + (i + 1) + " has duplicates.");
            return false;
        }
    }

    // Check columns
    for (let i = 0; i < 9; i++) {
        let column = [];
        for (let j = 0; j < 9; j++) {
            column.push(board[i + j * 9]);
        }
        if (hasDuplicates(column)) {
            alert("Incorrect Sudoku! Column " + (i + 1) + " has duplicates.");
            return false;
        }
    }

    // Check 3x3 subgrids
    let subGridIndices = [
        [0, 1, 2, 9, 10, 11, 18, 19, 20],
        [3, 4, 5, 12, 13, 14, 21, 22, 23],
        [6, 7, 8, 15, 16, 17, 24, 25, 26],
        [27, 28, 29, 36, 37, 38, 45, 46, 47],
        [30, 31, 32, 39, 40, 41, 48, 49, 50],
        [33, 34, 35, 42, 43, 44, 51, 52, 53],
        [54, 55, 56, 63, 64, 65, 72, 73, 74],
        [57, 58, 59, 66, 67, 68, 75, 76, 77],
        [60, 61, 62, 69, 70, 71, 78, 79, 80]
    ];

    for (let i = 0; i < 9; i++) {
        let subGrid = subGridIndices[i].map(index => board[index]);
        if (hasDuplicates(subGrid)) {
            alert("Incorrect Sudoku! 3x3 subgrid " + (i + 1) + " has duplicates.");
            return false;
        }
    }

    alert("Congratulations! The Sudoku is correct.");
    return true;
}

document.addEventListener("DOMContentLoaded", GenereerSudoku);
