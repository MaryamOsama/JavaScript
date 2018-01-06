var id=setInterval(ready_steady_go,500);


var num=0;

function ready_steady_go()
{
 var div1 = document.getElementsByTagName('img');

 
 if(num==0)
 {
   
 div1[0].src="img/red.png"; 
 div1[1].src="img/gray.png"; 
 div1[2].src="img/gray.png"; 
 num=1;
 console.log(0);

 }
 else if(num==1 )
 {
 div1[1].src="img/orange.png"; 
 div1[0].src="img/gray.png"; 
 div1[2].src="img/gray.png";   
 num=2;
 console.log(1);

 }
else if(num==2 )
 {
   
 div1[2].src="img/green.png"; 
 div1[1].src="img/gray.png"; 
 div1[0].src="img/gray.png";   
 num=0;
 console.log(2  );

 }

}
