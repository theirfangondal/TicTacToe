// INITIAL DECLARATIONS
let gamediv=document.querySelector(".game");
let winDiv=document.querySelector(".winDiv");
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbutton");
let newbtn=document.querySelector(".newbutton");
let winnerText=document.querySelector(".winnerText");
let winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let player1=true;
let counter=0;

// EVENT LISTENER
boxes.forEach((box)=>box.addEventListener("click",()=>{
    if(player1){
    box.innerText="X";
    player1=false
} //if

else{
    box.innerText="O";
    player1=true
} //else
box.disabled = true;
counter++;
let isWinner = checkWinner();
if(isWinner!=true && counter===9){
 console.log("match drawn");
}
} //eventListener Function

) //eventListener


) //forEach;



//checkWinner

const checkWinner = () => {
    for (let pattern of winningPattern) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            return true;
            }
        }
      }
    };


    //show Winner
    function showWinner(winner){
        console.log(`${winner} is winner`);
        winnerText.innerText=`${winner} is winner`
        boxes.forEach((box)=> box.disabled=true);
        gamediv.classList.toggle("visibilityoff");
        resetbtn.classList.toggle("visibilityoff")
        winDiv.classList.toggle("visibilityoff");

    }

    //Enable function
    function EnableFunction(){
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }

    //Reset

    resetbtn.addEventListener("click", ()=> {
    console.log("Reset Pressed");
    EnableFunction();
    }
    ); //resetFunction
    
    //new
    newbtn.addEventListener("click",()=>{
        console.log("new pressed");
    gamediv.classList.toggle("visibilityoff");
    winDiv.classList.toggle("visibilityoff");
    resetbtn.classList.toggle("visibilityoff");
    EnableFunction()
    }
    ); //newbtn