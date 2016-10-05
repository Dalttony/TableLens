this.addEventListener("message",function(e){
	var indata = e.data.data.split("\n");
	var i =2;
	var initime = Date.now();
	var len = indata.length;
	i=2;//by starting in second file line
			for (len=indata.length; i <len ; i++) {

				//aaray of data value
				var dtv = [];
				if(indata[i].trim().length > 0){
					var data = indata[i].split(";");//split by delimiter 
					var toCl = (data.length > e.data.col_len.length) ? e.data.col_len.length : data.length;//IF the length of data row  is greater than column count 
					for (var c = 0, l = toCl; c < l; c++) {
						//console.log(i-1);
						//dtv.push(dv);
						postMessage({obj:1,data:data[c],id:i-1,column:c});
					}
					postMessage({obj:2,id:i-2});
				}
			}
	initime = Date.now() - initime;
	console.log(initime * 0.001);
	postMessage({obj:3})
});