var playername=	" ";
var team=		" ";
var loop=		5;
var msg=		" ";

for (counter=0; counter<loop; counter++)
{	
	playername=	prompt("enter player name","");
	team += playername + "<br>";
}
document.write("<h1>	My Basketball Team Members </h1> <br>" + team);
