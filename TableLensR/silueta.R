average <- function ( cluster, vector, diss) {
  a <- 0
  
  for (i in 1:length(cluster)) {
    a <- a + diss[cluster[i], vector]
  }
  
  result <-  a / length(cluster)
  return(result)
}


SilhouetteCoefficient <- function(matrix, diss){
  
  
  cdata <- matrix
  cdata_index <- unique(cdata)
  
  if (length(cdata_index)<= 1) {
    print("Only one cluster found. It is not possible to "
          + "calculate the Silhouette coefficient.");
  }
  
  cluster_id <- rep(0, length(cdata))
  clusters <- vector("list", length = length(cdata_index))
  
  for(i in 1:length(cdata)){
    index = which(cdata_index %in% cdata[i])  
    clusters[[index]] <- c(clusters[[index]], i )
    cluster_id[i] <- index
  }
  
  s <- rep(0, length(cdata))
  
  for (i in 1:length(s)) {
    #testing if the cluster is a singleton
    if ( length( clusters[[ cluster_id[i] ]] ) > 1 ) {
      
      a <- average( clusters[[ cluster_id[i] ]], i, diss )
      b <- 10000
      
      for (j in 1:length(clusters) ){
        if (j == cluster_id[i]) {
          next
        }
        
        b <- min(b, average( clusters[[j]], i, diss ) )
      }
     
      s[i] = (b - a) / (max(a, b))
      if(is.nan(s[i])){
        s[i] <- 0  
      }
    } else {
      #if it is a singleton, s <- 0
      s[i] <- 0
      
    }  
    #print(s[i])
  }
  
  result <- mean(s)
  #result
  return(s)
}

#data <- read.table(file = "www/data/Iris.data", sep=";", skip = 4)
#D <- data[,2:(ncol(data)-1)]
#class_D las clases de la data
#class_D <- data[, ncol(data)]
#print(class_D)
#length(class_D)
#dist_mat_D = matriz de distancia
#dist_mat_D <- as.matrix( dist(D) ) 
#sil <- SilhouetteCoefficient( class_D, dist_mat_D )#
#print(sil)
