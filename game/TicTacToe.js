let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let head = document.querySelector(".head");
let msg = document.querySelector("#msg");

let turn0 = true;

const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

const resetGame = () =>{
    turn0 = true;
    enableButtons();
    head.classList.add("hidden");
    count = 0;

}

const enableButtons = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was Clicked");
        
        if(turn0)
        {
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count == 9 && !isWinner)
        {
            gameDraw();
        }


        
    })
});

const disableButtons = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`
    head.classList.remove("hidden");
    disableButtons();

}

const checkWinner = () => {
    for(let pattern of winning){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val == pos2val && pos2val == pos3val)
            {
                console.log("winner", pos1val);
                
                showWinner(pos1val);
                
            }
        }
    }
}

const gameDraw = () => {
    msg.innerText = "Draw";
    head.classList.remove("hidden");
    disableButtons();
};

newBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


