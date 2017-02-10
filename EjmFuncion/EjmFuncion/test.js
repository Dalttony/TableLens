$( document ).ready(function() {
     var x;
     function myFunction(a, b) {
       x = a + b;
      return x;                
     }
     
    document.getElementById("action").onclick = function() {
        //myFunction("cielo", " 25");
        Shiny.onInputChange("mydata", x);
    };
    
  // handler to receive data from server
    //Shiny.addCustomMessageHandler("myCallbackHandler", function(input$text){alert(input$text + " hipo");}
    //Shiny.addCustomMessageHandler("myCallbackHandler", function(message){alert(message[0] + " - " + message[1]);}
    Shiny.addCustomMessageHandler("myCallbackHandler", function(message){myFunction(
      parseInt(message[0]),parseInt(message[1]));}

    );    
    
 
});