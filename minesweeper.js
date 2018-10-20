
//Creating new dynamic board


//Generating Player Board
const generatePlayerBoard = (numberOfRows,numberOfColumns) => {

    const board = [];

    for (let i = 0; i < numberOfRows; i++) {
        const row = [];
        for (let j = 0; j <numberOfColumns; j++){
            row.push(' ');
        }
        board.push(row);
    }
    return board;

};

//Generating the bomb Board

const generateBombBoard = (numberOfRows,numberOfColumns,numberOfBombs) => {
    const board = [];

    for (let i = 0; i < numberOfRows; i++) {
        const row = [];
        for (let j = 0; j <numberOfColumns; j++){
            row.push(null);
        }
        board.push(row);
    }

    let numberOfBombsPlaced = 0;

    while(numberOfBombs > numberOfBombsPlaced){
        let randomRowIndex = Math.floor(Math.random()*numberOfRows);
        let randomColumnIndex = Math.floor(Math.random()*numberOfRows);
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced+=1;
        //control flow needs to be added so bombs aren't placed on top of each other
    }
    return board;
};

const printBoard = board =>{
    console.log(board.map( row => row.join(' | ') ).join('\n'));

}

let playerBoard = generatePlayerBoard(3,4);

let bombBoard  = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);
