let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true  //playerX, player0

 //2d arr
const winPatterns = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8], //row
    [0, 3, 6],[1, 4, 7],[2, 5, 8], //columns
    [0, 4, 8],[6, 4, 2]      // diagonals


];

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }

  }


const restGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("Box was clicked");
       if(turn0){   
        //player 0
        box.innerText ="0";
        turn0= false;
       } else{ 
        //player x
        box.innerText ="X";
        turn0 = true;

       }
        box.disabled = true;

        checkWinner();
    })
})
   
  const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }

  }
  
  

  const showWinner =(winner) =>{
     msg.innerText =`Congratulation,Winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disabledBoxes();
  }

 const checkWinner = () =>{
     for(patterns of winPatterns){
        
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos1Val); 
                
                showWinner(pos1Val);
            }
        }
            
 }
};



newGameBtn.addEventListener("click",restGame);
resetBtn.addEventListener("click",restGame)