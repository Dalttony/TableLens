$( document ).ready(function() {
     var x;
     function myFunction(a, b) {
      return a + b;                
     }
     
    document.getElementById("action").onclick = function() {
        x = myFunction("cielo", " 25");
        Shiny.onInputChange("mydata", x);
    };
    
  // handler to receive data from server
    Shiny.addCustomMessageHandler("myCallbackHandler", input$text
		 function(input$text) {
			alert("The b variable is " + input$text);
		  }
    );    
 
});