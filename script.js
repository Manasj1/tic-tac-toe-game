let boxes=document.querySelectorAll(".btn2");
let reset=document.querySelector(".rst-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0 = true;
 let winPattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
 ];

 const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
 }

 boxes.forEach((box) => {

    box.addEventListener("click", () => {
      

        if(turn0){

            box.innerText="O";
            turn0=false
        }else{

            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    });
    
 });
 
  const disabledBoxes =() => {
    for(let box of boxes) {
        box.disabled = true;
    }
  };

  const enableBoxes =() => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
  }; 

 const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
 };
 const checkwinner=() => {

    for(let pattern of winPattern){

       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;

       if(pos1!= "" && pos2 !="" && pos3 !=""){

        if(pos1===pos2 && pos2===pos3){

          
            showWinner(pos1);
        }
       }

    }
 };

 newGameBtn.addEventListener("click", resetGame);

 reset.addEventListener("click", resetGame);

