var playername=	" ";
var team=		" ";
var loop=		0;
var msg=		" ";

while (loop<5)
{	
	loop++;
	playername=	prompt("enter player name","");
	team += playername + "<br>";
}
document.write("<h1>	My Basketball Team Members </h1> <br>" + team);
