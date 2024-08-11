let ttt=document.querySelector(".container");
let winnerText=document.querySelector("#MainTitle");
let btns=document.querySelectorAll(".box");
let lockTarget=document.querySelector(".game");
let startGame=document.querySelector(".newGame");
let reset=document.querySelector(".resetGame");


let turnX=true;

let followMap=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

btns.forEach((box)=>{

	box.addEventListener("click",()=>{
		turnX=!turnX;
		if(turnX)
		{
			box.innerText="O";
		}
		else
		{
			box.innerText="X";
		}
		box.classList.add("disCursor");
		CheckP();
	});
});

startGame.addEventListener("click",()=>{
	NewGame();
});

reset.addEventListener("click",()=>{
	ResetGame()
});


function CheckP(){

	for(let myPattern of followMap)
	{
		let val1=btns[myPattern[0]].innerText;
		let val2=btns[myPattern[1]].innerText;
		let val3=btns[myPattern[2]].innerText;
		
		if(val1!=""&& val2!="" && val3!="")
		{
			if(val1==val2 && val2==val3)
			{
				winnerText.innerText=`Player ${val1} is Winner!`;
				lockTarget.classList.add("lock");
				reset.innerText="";
			}
		}
		
	}
}

function NewGame(){
	window.location.reload();
}
function ResetGame(){
	winnerText.innerText="Tic Tac Toe";
	window.location.reload();
}