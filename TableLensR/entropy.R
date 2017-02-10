
library(shiny)
library(MeanShift)

library(LPCM)
source(file = "silueta.R")

clusterData <- function(data){
  set.seed(20)
  ncluster <- floor(sqrt(nrow(data)))
  #ncluster <- 7
  fit.km <- kmeans(data,ncluster,nstart = 25)
  datalabel <- fit.km$cluster
  return(datalabel)
}
#Data to clustering 
dirData <- "www/data/"
dataString <- c("carros_r.data","winequality-white_r.data","Iris.data")
clsdata <- rep()

#getting the cluster by using k-means and mean shift
for( i in 1:length(dataString) ){
  clsdatacache <- dataString[i]
  
  nameData <- paste(dirData,dataString[i],sep = "")
  
  dataReader <- read.table(file = nameData , sep=";", skip = 4,quote="")
  if(i == 1){
    clsdatacache$data <- dataReader[,1:7]
  }else{
    if(i ==2){
      clsdatacache$data <- dataReader[,1:ncol(dataReader)-1]
    }else{
      clsdatacache$data <- dataReader[,2:ncol(dataReader)-1]  
    }
  }
  label <-  clusterData(as.matrix(clsdatacache$data))
  
  
  #calculate the silhouette coefficient
  D <- clsdatacache$data
  class_D <- label
  dist_mat_D <- as.matrix( dist(D) ) 
  sil <- SilhouetteCoefficient( class_D, dist_mat_D )
  
  #calculate measure for each cell in the cluster
  clsuterMesaure <- clusterEntropyInstance(dist_mat_D, sil, class_D,D)
  clsuterMesaure <- cbind(clsuterMesaure,sil)
  
  nameData <- paste(dirData,paste("sil_ins_",dataString[i],sep = ""),sep = "")
   write.table(clsuterMesaure,file = nameData,sep = ";",row.names = FALSE)
  #write the first element to representing
  databind <- cbind(clsdatacache$data,label)
  data_silhoutte <- cbind(clsdatacache$data,sil)
  nameData <- paste(dirData,paste("cls_",dataString[i],sep = ""),sep = "")
  write.table(databind,file = nameData,sep = ";",row.names = FALSE)
  
  #Transpose matrix
  data_tr <- clsdatacache$data
  clsdatacache$tr <- t(data_tr)
  data_tr <-clsdatacache$tr
  #Normalize transpose data
  clsdatacache$nm_tr <- clsdatacache$tr / apply(clsdatacache$tr,1,sd)
  
  data_tr<- clsdatacache$nm_tr
 # print(dim(data_tr))
  
  clsdata[i] <-  data_tr
  
 # 
  
  rm(clsdatacache)
  rm(label)
}

clusterEntropyInstance <- function(disInstance,silhouette,labels,data_){
  #cluster labels 
  data_labels <- labels
  data_label_index <- unique(labels)
  data_dist <- disInstance
  data_silhouette <- silhouette
  real_data <- data_
  real_data <- data.frame(real_data)
  #separte the cluster
  cluster_data_id <-  rep(0, nrow(real_data)) #cluster data id
  cluster_data <- vector("list",length = length(data_label_index))
  silhouette_variable <- vector("list",length = length(real_data))
  data_name <- colnames(real_data)
  for (j in 1:length(real_data)) {
    dist_mat_D <- as.matrix( dist(real_data[j]) ) 
    class_D <- data_labels
    sil <- SilhouetteCoefficient( class_D, dist_mat_D )
  
    silhouette_variable[[j]] <- c( silhouette_variable[[j]],sil)
  }
  n_row <- unlist(silhouette_variable[[1]])
  
  data_silhouette_instance <- as.data.frame(silhouette_variable)
  colnames(data_silhouette_instance) <- data_name
  #for(j in 1:length(silhouette_variable)){
   # print(silhouette_variable[[j]])
  #}
  return (data_silhouette_instance)
  
  for(j in 1:length(data_labels)){
    same_index <- which(data_label_index %in% data_labels[j])#
    cluster_data[[same_index]] <- c(cluster_data[[same_index]], j )
    cluster_data_id[same_index] <- same_index
  }
  
 
  for(i in 1:length(cluster_data)){
    data_row_index <- unlist(cluster_data[i])
    real_cluster  <- real_data[data_row_index,]
    real_distance_cluster <-  as.matrix(dist(real_cluster))
    "%not%" <- Negate("%in%")
    print(paste("cluster ",i,sep = " "))
    instance_cluster <- colnames(real_distance_cluster)
   
      #getting the instance in variable that is not into cluster
      for(j in 1:length(real_cluster)){
       # print(dist(real_cluster[j]))
      }
    
  #  real_distance_data <- subset(data_dist[,data_row_index]
    #print(apply(real_distance,2,mean))
    
  }
}


