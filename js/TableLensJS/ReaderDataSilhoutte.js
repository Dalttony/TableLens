self.addEventListener("message",function(e){
		var data;
		var dataSilhoutte= [];
		function getXMLHttpRequest() 
		{
			
		    if (XMLHttpRequest) {
		        return new XMLHttpRequest;
		    }
		    else {
		        try {
		            return new ActiveXObject("MSXML2.XMLHTTP.3.0");
		        }
		        catch(ex) {
		            return null;
		        }
		    }
		}

		var http1 = getXMLHttpRequest();	

			http1.onload = function(){
				data = this.responseText;
			};
		http1.onloadend = function(){
			var dataRaw = data.split("\n");
			var colnames = dataRaw[0];
			var colnamesArray = colnames.split(e.data.delimiter);
			for(var i = 1;i < dataRaw.length;i++){
				dataSilhoutte.push(dataRaw[i].split(e.data.delimiter));
			}
			postMessage({"dataSilhoutte":dataSilhoutte})
		};
		http1.open("get",e.data.dataPath,true)
		http1.send();
});