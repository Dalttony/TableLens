$(document).ready(function(){
	var Tl;
	var conf ={
		width: 800,
		height: 600,
		minheight: 1,
		maxheight: 10,
		minwidthcol: 20,
		data: 'recursos.data',
		container: "container",
		datainput: "datainput"
	}
	Tl = new TableLens(conf);
  	var downtime  = false, idinterval = 0;
 	document.getElementById("datainput").addEventListener('change',function(evt){
 		var fileInput = evt.target.files;
 		Tl.readData(this.files[0]);
 	});

 	document.getElementById("top").addEventListener('mousedown',function(){

 		downtime = true;
 		if(Tl.start()) 
 			idinterval = setInterval(function(){
 				if(downtime){
 					Tl.rolagem(-1)
 				}
 			},1)
 	});

 	document.getElementById("top").addEventListener("mouseup",function(evt){
 		downtime = false;
 		clearInterval(idinterval);
 	});

 	document.getElementById("down").addEventListener('mousedown',function(){

 		downtime = true;
 		if(Tl.start()) 
 			idinterval = setInterval(function(){
 				if(downtime){
 					Tl.rolagem(1)
	 					
 				}
 			},1)
 	});
 	document.getElementById("down").addEventListener("mouseup",function(evt){
 		downtime = false;
 		clearInterval(idinterval);
 	});
 	document.getElementById("range").addEventListener("input",function(){
 		var value = parseInt(this.value);
 		if(Tl.start()) Tl.setRowminHeight(value);
 	});
 	
	function colorchange(evt){
		 Shiny.onInputChange("mydata", 40);
			//Tl.color(evt);
		}

		function db(id){
			Tl.setdb(id);
		}
});