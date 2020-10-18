function $ (id){return document.getElementById(id);};
window.onload = function(){
	$("goLeft").onclick = goLeft;
	$("goRight").onclick = goRight;
};
 var news;
goLeft = function (){
	news = $("news")
	news.setAttribute("href","http://tv.msnbc.com/");
	news.firstChild.nodeValue = "MSNBC";
};
goRight = function (){
	news = $("news")
	news.setAttribute("href","http://foxnews.com");
	news.firstChild.nodeValue = "FOX NEWS";
};