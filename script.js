let turn="X";
let gameover=false;
let count=0;
let xwin=0;
let owin=0;
let rc=0;
let AllBoxes=document.getElementsByClassName("boxes");
const decideTurn=()=>{
    return turn==="X"?"O":"X";
}
const decideWinner=()=>{
    isTie=true;
    let PossibleWinner=[
        [0 , 1 , 2],
        [3 , 4 , 5],
        [6 , 7 , 8],
        [0 , 3 , 6],
        [1 , 4 , 7],
        [2 , 5 , 8],
        [0 , 4 , 8],
        [2 , 4 , 6]
    ]
    PossibleWinner.forEach((element)=>{
        if(AllBoxes[element[0]].innerText===AllBoxes[element[1]].innerText && AllBoxes[element[2]].innerText===AllBoxes[element[1]].innerText && AllBoxes[element[0]].innerText !== '' && gameover===false){
            document.getElementsByClassName("chnge")[0].innerText= AllBoxes[element[0]].innerText+" WINS THE GAME";
            AllBoxes[element[0]].style.backgroundColor = 'rgb(78, 44, 3)';
            AllBoxes[element[1]].style.backgroundColor = 'rgb(78, 44, 3)';
            AllBoxes[element[2]].style.backgroundColor = 'rgb(78, 44, 3)';
            var gifs = document.getElementsByClassName("gif");

            for (var i = 0; i < gifs.length; i++) {
                gifs[i].style.width = '300px';
                gifs[i].style.height = '300px';
            }
            gameover=true;
            if(AllBoxes[element[0]].innerText==="X"){
                xwin++;
            }
            else{
                owin++;
            }
            document.getElementsByClassName("X")[0].innerText= "X : "+xwin;
            document.getElementsByClassName("O")[0].innerText= "O : "+owin;
            rc=1;
        }
        else{
            if(count===9 && gameover===false){
                document.getElementsByClassName("chnge")[0].innerText= "It's a Tie";
                gameover=true;
                rc=1;
            }
        }
    })
    
}
rc=0;
Array.from(AllBoxes).forEach((element)=>{
    element.addEventListener('click',()=>{
        if(element.innerText===''){
            if(turn==="X") {
                element.style.color='darkorange';
            }
            else{
                element.style.color='white';
            }
            element.innerText=turn;
            count++;
            turn=decideTurn();
            decideWinner();
            if(!gameover){
                document.getElementsByClassName("chnge")[0].innerText="Turn For "+turn;
            }
        }

    })
})

reset.addEventListener('click',()=>{
    Array.from(AllBoxes).forEach((element)=>{
        element.innerText='';
        element.style.backgroundColor = 'black';
    })
    turn="X";
    gameover=false;
    document.getElementsByClassName("chnge")[0].innerText="Turn For "+turn;
    var gifs = document.getElementsByClassName("gif");

    for (var i = 0; i < gifs.length; i++) {
        gifs[i].style.width = '0px';
        gifs[i].style.height = '0px';
    }
    count=0;
})
if(rc===0) {
Array.from(AllBoxes).forEach((element)=>{
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = 'rgb(78, 44, 3)';
        element.style.cursor = 'pointer';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = 'black';
    });
})}


