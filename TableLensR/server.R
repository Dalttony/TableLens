
# This is the server logic for a Shiny web application.
# You can find out more about building applications with Shiny here:
#
# http://shiny.rstudio.com
#

library(shiny)
library(MeanShift)
library(LPCM)
#source("silueta.r") #might be using namefunction <- dget("file")


shinyServer(function(input, output, session) {

  datos <- c("carros_r.data", "winequality-white_r.data","Iris.data")
  
  output$plot1 <- renderPlot({
    m <- matrix(c(1:20),nrow = 10, ncol=2)
    plot(m,pch = 16, cex = 3, col = "green")
    
  })
  
  observeEvent(input$actionEnvio, {
    #     session$sendCustomMessage(type='myCallbackHandler', input$text)
    session$sendCustomMessage(type='myCallbackHandler', message = list(input$text, input$text1))
  })
  
  #   output$Resultado <- renderPrint(input$mydata)
  observe({
    if(!is.null(input$mydata)){
      idfile <-strtoi(input$mydata)
      
    }else{
      idfile <- 1
    }
    
    name_data <- paste("www/data/",datos[idfile],sep="")
    data <- read.table(file = name_data, sep=";", skip = 4,quote="")
    if(idfile == 1){
       D.data <- data[,1:7]
    }else{
      if(idfile ==2){
        D.data <- data[,1:ncol(data)-1]
      }else{
        D.data <- data[,2:ncol(data)-1]  
      }
    }
    D.tr <- t(D.data)
    
    D.tr <- D.tr / apply(D.tr,1,sd)
    
    print(dim(D.tr))
    
    h.cand <- quantile( dist( t( D.tr ) ), seq( 0.05, 0.40, by=0.05 ) )
    
    ## perform mean shift clustering with the blurring version of the algorithm
    system.time( bms.clustering <- lapply( h.cand,
                                           function( h ){ bmsClustering( D.tr, h=h ) } ) )
    
    class(bms.clustering[[1]])
    
    tmp.labels3 <- bms.clustering[[1]]$labels
   # print(tmp.labels3)
    
   # D.dist <- as.matrix(dist(D.data))
  #  D.data <- scale(D.data)
    
   # mensh <- ms(D,h=0.05)
   # mensh1 <- bmsClustering(D.data, h=1)
  #  ms.labels1 <- mensh1$labels
  #  print(ms.labels1)
   
    session$sendCustomMessage(type = "GettingDataSilhouetteonServer", "color")
  })
  
})
