self.addEventListener("message",function(e){
		var data;
		function getXMLHttpRequest() 
		{
		    if (window.XMLHttpRequest) {
		        return new window.XMLHttpRequest;
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
			postMessage({"data":data})
		};
		http1.open("get","TableLensR/www/data/nsquare/cls_car_r.data",true)
		http1.send();
});