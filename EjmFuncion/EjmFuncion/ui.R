library(shiny)

# Define UI for application that draws a histogram
shinyUI(fluidPage(
  titlePanel("title panel"), 
  includeScript("test.js"),
  
  fluidRow(    

    column( 2,wellPanel( textInput("text", label = h3("Value 1"), value = 7), 
             textInput("text1", label = h3("Value 2"), value = 8),
             actionButton("actionEnvio", label = "Enviar"),
             actionButton("action", label = "Recibir"),
             verbatimTextOutput("Resultado") ) )
  )  
))


