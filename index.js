

function setbackground(){

	var x = document.body;
	var color = ["#bbff99", "#ffff66", "#66ffff", "#b3cccc"];


	setInterval(function() {
	   for(let y = 0; y < 4; y++){
	    x.style.backgroundColor = color[Math.floor(Math.random() * 3)];  
	  }
	}, 2000) ;
}