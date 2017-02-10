
# This is the user-interface definition of a Shiny web application.
# You can find out more about building applications with Shiny here:
#
# http://shiny.rstudio.com
#

library(shiny)

# Define UI for application that draws a histogram
shinyUI(fluidPage(
  titlePanel("TableLens"),
  includeScript("www/TableLens.js"),
  includeScript("www/load.js"),
  includeScript("test.js"),
  includeHTML("www/index.html"),
  fluidRow(    
    
    column( 2,wellPanel( textInput("text", label = h3("Value 1"), value = 7), 
                         textInput("text1", label = h3("Value 2"), value = 8),
                         actionButton("actionEnvio", label = "Enviar"),
                         actionButton("action", label = "Recibir"),
                         verbatimTextOutput("Resultado") ) )
    
  )  
  
  
))

