const btns=document.querySelectorAll("button");
let move=true;
function randNum(){
    return Math.floor(Math.random()*(8+1));
}
console.log(randNum())
function playMoves(){
    btns.forEach(btn=>{
        btn.addEventListener("click",()=>{
            if(btn.textContent===""){
                btn.textContent=move?"X":"O";
                move=!move;
                let result=checkWinner();
                if(result){
                    setTimeout(()=>{
                    handleResult(result)
                    resetGame();
                   },300)
                    
                  return;
                };
                let rand;
                setTimeout(()=>{
                    do{
                        rand=randNum();
                    }while(btns[rand].textContent!=="");
                    btns[rand].textContent=move?"X":"O";
                    move=!move
                    result=checkWinner();
                    if(result){
                        setTimeout(()=>{
                        handleResult(result)
                        resetGame();
                       },300)
                        
                      return;
                    };
                },600)

            }
        })
    })
    
}
function checkWinner() {
    // Rows
    if (btns[0].textContent === "X" && btns[1].textContent === "X" && btns[2].textContent === "X" ||
        btns[3].textContent === "X" && btns[4].textContent === "X" && btns[5].textContent === "X" ||
        btns[6].textContent === "X" && btns[7].textContent === "X" && btns[8].textContent === "X") {
        return 1;
    } else if (
        btns[0].textContent === "O" && btns[1].textContent === "O" && btns[2].textContent === "O" ||
        btns[3].textContent === "O" && btns[4].textContent === "O" && btns[5].textContent === "O" ||
        btns[6].textContent === "O" && btns[7].textContent === "O" && btns[8].textContent === "O") {
       return 2;
    }

    // Columns
    if (btns[0].textContent === "X" && btns[3].textContent === "X" && btns[6].textContent === "X" ||
        btns[1].textContent === "X" && btns[4].textContent === "X" && btns[7].textContent === "X" ||
        btns[2].textContent === "X" && btns[5].textContent === "X" && btns[8].textContent === "X") {
        return 1;
    } else if (
        btns[0].textContent === "O" && btns[3].textContent === "O" && btns[6].textContent === "O" ||
        btns[1].textContent === "O" && btns[4].textContent === "O" && btns[7].textContent === "O" ||
        btns[2].textContent === "O" && btns[5].textContent === "O" && btns[8].textContent === "O") {
        return 2;
    }

    // Diagonals
    if (btns[0].textContent === "X" && btns[4].textContent === "X" && btns[8].textContent === "X" ||
        btns[2].textContent === "X" && btns[4].textContent === "X" && btns[6].textContent === "X") {
        return 1;
    } else if (
        btns[0].textContent === "O" && btns[4].textContent === "O" && btns[8].textContent === "O" ||
        btns[2].textContent === "O" && btns[4].textContent === "O" && btns[6].textContent === "O") {
        return 2;
    }
    else{
        let tie=Array.from(btns).every(b=>b.textContent!=="");
        if(tie)
            return 3;
    }
}
function handleResult(result){
    switch(result){
        case 1:alert("X wins");
               break;
        case 2:alert("o wins");
               break;
        case 3:alert("it's a tie");
    }
}
function resetGame(){
    btns.forEach(btn=>{
        btn.textContent="";
    })
    move=true;
}
playMoves();