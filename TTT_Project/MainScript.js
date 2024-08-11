let ttt=document.querySelector(".container");
let winnerText=document.querySelector("#MainTitle");
let btns=document.querySelectorAll(".box");

let turnX=true;
let followMap=[[0,1,2],
			   [3,4,5],
			   [6,7,8],
			   [0,3,6],
			   [1,4,7],
			   [2,5,8],
			   [0,4,8],
			   [2,4,6]
			   ];

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

function CheckP(){
	for(let myPattern of followMap)
	{
		
	}
}