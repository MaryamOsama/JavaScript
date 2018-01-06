var count=0;

var play = document.getElementById("play");
var stop = document.getElementById("stop");
var left = document.getElementById("left");
var right= document.getElementById("right");
var circ = document.getElementById("image");

/*console.log(play);
console.log(stop);
console.log(left);
console.log(right);
console.log(circ);*/

var id;
function intr(){
id=setInterval(ready_steady_go,500)
}

play.addEventListener('click',intr);
	
function ready_steady_go()
{
 
if(count==0)
{
 circ.src="img/green.png";	
 count=1;
}
else if(count==1)
{
 circ.src="img/orange.png";	
 count=2;
}
else if(count==2)
{
 circ.src="img/red.png";	
 count=3;
}
else if(count==3)
{
 circ.src="img/gray.png";	
 count=0;
}
}

 stop.addEventListener('click',stopShow);
function stopShow()
{
 clearInterval(id);
}

right.addEventListener('click',moveRight);

function moveRight()
{
 if(count==0)
{
 circ.src="img/green.png";	
 count=1;
}
else if(count==1)
{
 circ.src="img/orange.png";	
 count=2;
}
else if(count==2)
{
 circ.src="img/red.png";	
 count=3;
}
else if(count==3)
{
 circ.src="img/gray.png";	
 count=0;
}
}

left.addEventListener('click',moveLeft);

function moveLeft()
{
 if(count==0)
{
 circ.src="img/red.png";	
 count=3;
}
else if(count==3)
{
 circ.src="img/orange.png";	
 count=2;
}
else if(count==2)
{
 circ.src="img/green.png";	
 count=1;
}
else if(count==1)
{
 circ.src="img/gray.png";	
 count=0;
}
}