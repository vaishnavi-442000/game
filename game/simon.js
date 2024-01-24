let userseq =[];
let gameseq = [];
let level = 0;
let startBtn = document.querySelector(".js-start")
let info = document.querySelector(".js-info")
function start(){
   startBtn.classList.add('hidden')
   info.classList.remove("hidden")
   info.innerText = "Wait for the computer!"
   levelUp();
   
}
startBtn.addEventListener("click",start)



function activateTile(color){
    let tile = document.querySelector(`[data-tile='${color}']`)
    let sound = document.querySelector(`[data-sound='${color}']`)

    tile.classList.add("activated")
    sound.play();
    setTimeout(()=>{
        tile.classList.remove("activated")
    },300)
}
 function playRound(nextSeq){
     nextSeq.forEach((color,indx)=>{
        setTimeout(()=>{
            activateTile(color);
        },(indx+1)*600);
     })
 }

function nextStep(){
    let tile = ["red", "green","blue","yellow"]
    let ranColor = tile[Math.floor(Math.random()* 4)];
    return ranColor;
}

function levelUp(){
    level++;
    let nextSeq =[]
    nextSeq.push(nextStep())
    playRound(nextSeq);
    console.log(nextSeq)
}
