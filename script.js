let boxes = document.querySelectorAll('.btn');
let resetBtn = document.querySelector('.reset');
let winMsg = document.querySelector('.win');
let playerX = true; // true for X and false for O
let count = 0;


const winningPos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// EACH TURN
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerX) {
            box.innerText = "X";
            box.style.color = "rgb(123, 25, 40)"; 
            playerX = false;
        }
        else {
            box.innerText = "O";
            box.style.color = "rgb(15, 52, 81)"; 
            playerX = true;
        }
        box.disabled = true;
        count++;
        console.log(count);
        let winner = checkWinner();
        if (count == 9 && !winner) {
            gameDraw();
        }
    })
})

// GAME DRAW
const gameDraw = () => {
    winMsg.innerText = "Game was a DRAW!";
    console.log("Draw!!!");
    disableBoxes()
}

// DISABLE BOXES 
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

// ENABLE BOXES
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
    }
}

// WINNING SCENARIOS
const checkWinner = () => {
    let c1 = 0, c2 = 0, c = 0;
    for (let row of winningPos) {
        for ( let j = 0; j < 3; j++) {
            if (boxes[row[j]].innerText == "X") {
                c1++;
                // console.log("c1 =",c1);
            }      
            else if (boxes[row[j]].innerText == "O") {
                c2++;
                // console.log("c2 =",c2);
            }            
        }
        if (c1 == 3 ) {
            winMsg.innerText = "X WON the Game!";
            disableBoxes();
            return true;
        }
        if ( c2 == 3) {
            winMsg.innerText = "O WON the Game!";
            disableBoxes();
            return true;
        }
        c1 = 0;
        c2 = 0;
    }
}


// RESET BUTTON
resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
    })
    winMsg.innerText = "";
    count = 0;
    enableBoxes();
})