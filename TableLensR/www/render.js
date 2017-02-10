this.addEventListener("message",function(e) {
		
		var i=0;
		for(;i<e.data.len && i < e.data.len1;i++){
			postMessage({opt:1,row:i})
		}
		
		
		postMessage({opt:2, row:i});
});