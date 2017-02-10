this.addEventListener("message",function(e){
		
	var indata = e.data.data;
	var i =0;
	var initime = Date.now();
	var len = indata.length;

//	i=0;//by starting in second file line
			for (len=indata.length; i <len ; i++) {
				
				if(indata[i].trim().length > 0){
					
					// console.log(indata[i])
					var data = indata[i].split(";");//split by delimiter
					// console.log(i);
					var toCl = (data.length > e.data.col_len.length) ? e.data.col_len.length : data.length;//IF the length of data row  is greater than column count 
					//for (var c = 0, l = toCl; c < l; c++) {
						//console.log(i-1);
						//dtv.push(dv);
						//console.log(data);
						postMessage({obj:2,data:data,id:i});
					//}
					//postMessage({obj:2,id:i-2});
					//postMessage({obj:2,id:i});
				}
			}

	initime = Date.now() - initime;
	console.log(initime * 0.001);
	postMessage({obj:3})
	//this.close();
});