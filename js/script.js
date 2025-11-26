"use strict";

$(function(){
	let dir = -1;
	let interval = 15000;
	let duration = 900;
	let timer;
	$("#slide ul").prepend($("#slide li:last-child"));
	$("#slide ul").css("left",-900);
	timer = setInterval(slideTimer,interval);
	function slideTimer(){
		$("#slide ul").animate({"left" : "-=900px"},duration,
		function(){
		$(this).append($("#slide li:first-child"));
		$(this).css("left",-900);
		if(dir >= 3){
		clearInterval(timer);
		}
		});
	}
});







