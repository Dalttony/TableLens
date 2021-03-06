//JavaScript implementation Table Lens : merging graphical and symbolic representations in an interactive focus + context visualization for tabular information
//DOi: 10.1145/191666.191776
/*
@inproceedings{Rao:1994:TLM:191666.191776,
 author = {Rao, Ramana and Card, Stuart K.},
 title = {The Table Lens: Merging Graphical and Symbolic Representations in an Interactive Focus + Context Visualization for Tabular Information},
 booktitle = {Proceedings of the SIGCHI Conference on Human Factors in Computing Systems},
 series = {CHI '94},
 year = {1994},
 isbn = {0-89791-650-6},
 location = {Boston, Massachusetts, USA},
 pages = {318--322},
 numpages = {5},
 url = {http://doi.acm.org/10.1145/191666.191776},
 doi = {10.1145/191666.191776},
 acmid = {191776},
 publisher = {ACM},
 address = {New York, NY, USA},
 keywords = {exploratory data analysis, fisheye technique, focus+context technique, graphical representations, information visualization, relational tables, spreadsheets, tables},
} 
 */
/**
* this is constructing the TableLesn algorithm (TL)
* @constructor
* @param {object} args configurations
* @param {integer} args.min_row_height=1 - Minimum height of the rows of TableLens
* @param {integer} args.max_row_height=10 - Maximum height of the rows of TableLens when this isn´t  compressed
* @param {integer} args.minwidthcol=0 - Minimum widht of the column 
* @param {String} [data] args.data = "data.data" - the format file is   "data"  for to read the data
* @param {String} [container] args.container =  id of element div html in the page
* @param {String} [datainput] args.datainput =  id of element imputu type=file html in the page
* @return TableLens
*         
* @author  Evinton Antonio Córdoba Mosquera
* @beta 1.0
*/
var TableLens = (function(args) {
    
    /**
     * Variable of the class
     * @private object {_self}
     * @privte Context2D {_ctx}
     */
    var load;
    var self = this;
    var ctx; //context 
    var ctx2;
    var ctx3;
    var cvs; //canvas 
    var canvas2 = document.createElement("canvas");
    var canvas3 = document.createElement("canvas");
    var ctxcache;
    var DataRow = [];
    var DataColumn = [];
    var viewModel;
    var TbLens;
    var mrow=0, mxrow=0;
    var verificamovida=false;
    var ready = false;
    var linefieyes = -1;
    var loadpromise;
    /**
     * [doc   document object of the broswer]
     * @type {[Object broswer]}
     */
    var doc = document;
    /**
     * [w window object of the broswer]
     * @type {Obejct}
     */
    var w = window;
    /**
     * [dl delimitator of the data file]
     * @type {String}
     */
    var dl = ";"
    var db = {
        _1:"",
        _2:""
    };
    var conf = {
        width: 600,
        height: 600,
        min_row_height: 1,
        max_row_height: 15,
        minwidthcol: 20,
        stHeight:12,
        datapadding:10,
        heightBar:20,
        colorTextLetter:"black",
        colorTextCod:"rgba(0,0,0,1)",
        colorBarLetter:"blue",
        colorBarCod:"rbga(14,14,255,1)",
        data: 'recursos.data',
        container: "container",
        datainput: "datainput",
        color:"blue"

    };
    /*Independent variable*/
    var i=0;

    //Verify data args withc conf
    var sort=false;
    var defaultsufixData = "norm_";
    var sufixData = defaultsufixData;
    var defaultPathfFolder = "cls3";
    var defaultDataBase = defaultsufixData+"car";
    var defaultDataBaseType = 1;
    //----------------------    

    var TypeColumn= {
        Integer:"INTEGER",
        Double:"DOUBLE",
        Str:"STRING",
        SoundString:"SOUNDEXSTRING",
        DistanceString:"DISTANCESTRING",
        Categorical:"CATEGORICAL"
    };

    var columns = {

    };

    var silhoutte_data_name ={
        car:'sil_ins_car_r.data',
        iris:'sil_ins_iris_r.data',
        wine:'sil_ins_winequality-white_r.data',
        norm_car:'norm_sil_ins_car_r.data',
        norm_iris:'norm_sil_ins_iris_r.data',
        norm_wine:'norm_sil_ins_winequality-white_r.data',
    };

    var cluster_data_name = {
        car:'cls_car_r.data',
        iris:'cls_iris_r.data',
        wine:'cls_winequality-white_r.data',
        norm_car:'norm_cls_car_r.data',
        norm_iris:'norm_cls_iris_r.data',
        norm_wine:'norm_cls_winequality-white_r.data',
    };

    var folder_path_relative= {
        cls3:'../../TableLensR/www/data/cls3/',
        cls7:'../../TableLensR/www/data/cls7/',
        clsnsquare:'../../TableLensR/www/data/nsquare/',
    };

    var folder_path_absolute= {
        cls3:'TableLensR/www/data/cls3/',
        cls7:'TableLensR/www/data/cls7/',
        clsnsquare:'TableLensR/www/data/nsquare/',
    };

    var orderByColumnData  = true;
    var orderBySilhouetteData = false;

    var data_silhoutte = [];

    var defaultSilhoutte = 0;
    var quantityoFShilhoutte = 0;
    function gettingDataServer(){
        
                
        for(var key in folder_path){
            console.log(key);
        }
        for (var i = 0; i < 5000; i++) {
            console.log(i);
        }
        var loading = document.getElementById("load");
        loading.firstChild.innerText="Loading";
        loading.style.visibility = "visible";
    }

    function gettingSilhoutte(strData){
        var indata = strData.split("\n");
        var nameCols = indata[0].split(dl);


    }

    function tranformingData(){

    }

    function renderingView(){

    }
    //laoding the data
    
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

            
    /**
     * @param {File} [data] [Data uncompressed for the rendering of the TL]
     */
    function reciverSilhoutte(e){
        data_silhoutte.push(e.data.dataSilhoutte);
        quantityoFShilhoutte ++;
        //if (quantityoFShilhoutte == 3){
            var http1 = getXMLHttpRequest();    
            http1.onload = function(){
                db["_1"] = this.responseText;
            };
            http1.onloadend = function(){
                //self.pipeline();
                if(defaultDataBase ==  sufixData+"car")   self.setdb();
                //self.readData();
            };
            http1.open("get",folder_path_absolute[defaultPathfFolder]+cluster_data_name[defaultDataBase],true)
            http1.send();

            var http2 = getXMLHttpRequest();
            http2.onload = function(){
                db["_2"] = this.responseText;
                if(defaultDataBase ==  sufixData+"iris") 
                    self.setdb(2);
            }

            http2.open("get",folder_path_absolute[defaultPathfFolder]+cluster_data_name[defaultDataBase],true)
            http2.send();

            var http3 = getXMLHttpRequest();
            http3.onload = function(){
                db["_3"] = this.responseText;
                if(defaultDataBase ==  sufixData+"wine") 
                    self.setdb(3);
            };
            
            http3.open("get",folder_path_absolute[defaultPathfFolder]+cluster_data_name[defaultDataBase],true)
            //http3.open("get","cls_winequality-white.data",true)
            http3.send();
            quantityoFShilhoutte=0;
            console.log(data_silhoutte[0].length)
        //}
    }
    
    var pipeline = function(){
        var self = this;
        //for(var str in folder_path_relative){
            var wk = new Worker("js/TableLensJS/ReaderDataSilhoutte.js");
            wk.postMessage({delimiter:dl,dataPath:folder_path_relative[defaultPathfFolder]+silhoutte_data_name[defaultDataBase]});
            wk.onmessage = reciverSilhoutte;
        //}
        /*var pip = new Promise(function(resolve, reject){
        
        });*/
    };


    pipeline();

    this.changeGroup =  function(type){
        data_silhoutte=[];
        switch(type){
            case "3":
                defaultPathfFolder = "cls3";
                defaultSilhoutte =0;
                break;
            case "7":
                //defaultSilhoutte = 1;
                defaultPathfFolder = "cls7";
                break;
            case "nsquare":
                //defaultSilhoutte = 2
                defaultPathfFolder = "clsnsquare";
                break;
        }
        defaultSilhoutte =0;
        pipeline();
    };

    this.setDataBase = function(db){
        data_silhoutte=[];
        switch(db){
            case 1:
                defaultDataBase = sufixData+"car";
                defaultDataBaseType =1;
                break;
            case 2:
                defaultDataBase = sufixData+"iris";
                defaultDataBaseType = 2;
                break;
            case 3:
                defaultDataBaseType=3;
                defaultDataBase = sufixData+"wine";
                break;
        }
        pipeline();
    };

    this.changeOrderType = function(type){
        switch(type){
            case 1:
                orderByColumnData  = true;
                orderBySilhouetteData = false;
                break;
            case 2:
                orderByColumnData  = false;
                orderBySilhouetteData = true;
                break;
        }
    };

    this.changeNormData  = function(type){
        switch(type){
            case 1:
                sufixData = defaultsufixData;
                break;
            case 2:
                sufixData = "";
                break;
        }
       this.setDataBase(defaultDataBaseType);
    }

    this.setdb = function(id){
        mrow =0;
        DataColumn =[];
        DataRow = [];
        linefieyes = -1;
        document.getElementById("range").value = -1;
        var id = (id == null) ? 1:id;
        worker_db(db["_"+id]);
     };


    this.readData = function(data){
        DataColumn =[];
        DataRow = [];
        var initime = Date.now();
        
        var updateProgress = function(evt){
            
        };
        var errorProgress =function(evt){
            console.log("errorProgress");
                console.log(evt);
        };

        var loaded= function (evt){

            worker_db(this.result);
            return;
            /**
             * @type {Array String} [indata] get the structure of the data file 
             * @type {Array String} [columns] get the row [1] of the strings columns into structure of data in indata
             * @type {Array String} [type] get the row [0] of the string TypeColumns into structure of data in indata
             */
            
            //get te row into data file
            i=2;//by starting in second file line
            for (var i = 2, len=indata.length; i <len ; i++) {
                //aaray of data value
                var dtv = [];
                if(indata[i].trim().length > 0){
                    var data = indata[i].split(dl);//split by delimiter 
                    var toCl = (data.length > columns.length) ? columns.length : data.length;//IF the length of data row  is greater than column count 
                    for (var c = 0, l = toCl; c < l; c++) {
                        //console.log(i-1);
                        var dv = new DataValue(i-1, DataColumn[c], data[c]);
                        //columns[c].addValue(data[c])
                        DataColumn[c].addDataValue(dv);
                        dtv.push(dv);
                    };
                    var r = new Row(dtv, i-2);
                    DataRow.push(r);
                }
            }
            var i=0;
            TbLens = new TableLens(model, DataRow);
            ready = true;
            var endtime = Date.now();
            initime = (endtime - initime) * 0.001;
            console.log("Time seg",initime);
            //return {model,Datar};
        };

        var init = function(){
            var file = new FileReader();
            file.onloadend = loaded;
            file.onprogress = updateProgress;
            file.error = errorProgress;
            file.readAsText(data);
        };

        // Check for the various File API support.
        
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            init(); 
        }else{
                Log.addValue('The File APIs are not fully supported by your browser.',"a"); 
        }   
    }

    function worker_db_slihoute(str){

    }


    function worker_db(str){
        
            load = setInterval(function(){
                var loading = document.getElementById("load");
                loading.firstChild.innerText="Loading DataBase";
                loading.style.visibility = "visible";
                
            },1);
        
        
      
                var indata = str.split("\n");
                var type = indata[0].split(dl);
                var strcolumns = indata[1].split(dl);
                var len = strcolumns.length;
                i=0;
                for (; i<len; i++){
                    // Factory of the  type Column 
                    var cl = ColumnFactory(strcolumns[i].trim(), type[i].trim());
                    cl.setIndex(i);
                    DataColumn.push(cl);
                };
                var model = new TableModel(DataColumn);
            if(window.Worker){
                    
                    var w = new Worker("reader1.js");
                    var w1 = new Worker("reader1.js");
                    var w2 = new Worker("reader1.js");
                    var workers = [];
                    var div = Math.round((indata.length-2)/3);
                    var d1 = indata.slice(2,div), d2 = indata.slice(div+1,div*2),d3 = indata.slice(div*2+1);
                    w.postMessage({data:indata.slice(2),col_len:DataColumn.length,init:0,end:div});
                    var end=0;
                    var dtv = [],dtv1 = [],dtv2 = [];
                    var id =0;
                    w.onmessage = function(e){
                        switch (e.data.obj){
                            case 1://case column
                                /*var dv = new DataValue(e.data.id, DataColumn[e.data.column], e.data.data);
                                DataColumn[e.data.column].addDataValue(dv);
                                dtv.push(dv);
                                break;*/
                            case 2: //case Row
                                    id++;
                                    for(var c =0; c< e.data.data.length;c++){
                                        
                                        var dv = new DataValue(e.data.id, DataColumn[c], e.data.data[c]);
                                        DataColumn[c].addDataValue(dv);
                                        dtv.push(dv);
                                    }
                                    var r = new Row(dtv, id);
                                    //var r = new Row(dtv, i-2);
                                    DataRow.push(r);
                                    dtv = [];
                            
                                break;
                            case 3: // finished the reader
                                    end++;
                                if(end == 3){
                                    var i=0;
                                    TbLens = new TableLens(model, DataRow);
                                    ready = true;
                                    break;
                                }
                        }
                    };
                    w1.postMessage({data:indata.slice(2),col_len:DataColumn.length,init:div+1,end:div*2});
                    w1.onmessage = function(e){
                        switch (e.data.obj){
                            case 1://case column
                                
                                break;
                            case 2: //case Row
                                    id++;
                                    for(var c =0; c< e.data.data.length;c++){
                                    //  var dv = new DataValue(id, DataColumn[c], e.data.data[c]);
                                        var dv = new DataValue(e.data.id, DataColumn[c], e.data.data[c]);
                                        DataColumn[c].addDataValue(dv);
                                        dtv1.push(dv);
                                    }
                                    var r = new Row(dtv1,id);
                                    //var r = new Row(dtv, i-2);
                                    DataRow.push(r);
                                    dtv1 = [];

                                break;
                            case 3: // finished the reader
                                end++;
                                if(end == 3){
                                    var i=0;
                                    TbLens = new TableLens(model, DataRow);
                                    ready = true;
                                    break;
                                }
                        }
                    };
             w2.postMessage({data:indata.slice(2),col_len:DataColumn.length,init:div*2+1,end:indata.length-2});
                    w2.onmessage = function(e){
                        switch (e.data.obj){
                            case 1://case column
                                
                                break;
                            case 2: //case Row
                                    id++;
                                    for(var c =0; c< e.data.data.length;c++){
                                        var dv = new DataValue(e.data.id, DataColumn[c], e.data.data[c]);
                                        DataColumn[c].addDataValue(dv);
                                        dtv2.push(dv);
                                    }
                                    var r = new Row(dtv2,id);
                                    //var r = new Row(dtv, i-2);
                                    DataRow.push(r);
                                    dtv2 = [];

                                break;
                            case 3: // finished the reader
                                end++;
                                
                                if(end == 3){
                                    var i=0;
                                    TbLens = new TableLens(model, DataRow);
                                    ready = true;
                                    break;
                                }
                        }
                    };
         }else{
            //get te row into data file
            i=2;//by starting in second file line
            for (var i = 2, len=indata.length; i <len ; i++) {
                //aaray of data value
                var dtv = [];
                if(indata[i].trim().length > 0){
                    var data = indata[i].split(dl);//split by delimiter 
                    var toCl = (data.length > columns.length) ? columns.length : data.length;//IF the length of data row  is greater than column count 
                    for (var c = 0, l = toCl; c < l; c++) {
                        //console.log(i-1);
                        var dv = new DataValue(i-1, DataColumn[c], data[c]);
                        //columns[c].addValue(data[c])
                        DataColumn[c].addDataValue(dv);
                        dtv.push(dv);
                    };
                    var r = new Row(dtv, i-2);
                    DataRow.push(r);
                }
            }
            var i=0;
            TbLens = new TableLens(model, DataRow);
            ready = true;
            var endtime = Date.now();
            initime = (endtime - initime) * 0.001;
            console.log("Time seg",initime);
         }
    }

    this.rolagem = function(acdc){
        mrow = mrow+acdc>0? mrow+acdc:0;
        if(barraRoll.roll(1)){
            TbLens.rolagem();
        }else{
            return false;
        }

    };

    this.start = function(){
            return  ready;
    };

    this.setRowminHeight = function(h){
        verificamovida=true;
        TbLens.setRowminHeight(h);
        if(h>-2)barraRoll.setup(length,mxrow);
        h = Math.abs(h);
        h=h==0?1:h;
        var length = parseInt(TbLens.getRowLength()/h);
        if(length<conf.height) length = TbLens.getRowLength();
        
    }
    this.color =function(idcolor){
        TbLens.colorValues(idcolor);
        //TbLens.setRowminHeight(TbLens.getRowHeight());
    }
    /**
     * [TableLens main class for represent]
     * @param {[type]} model [description]
     */
    var TableLens = function(model, rows){
        var model = model;
        var rows = rows;
        var rowHeight=-1;

        //set up column of table
        //viewModel = new TableLensView(model);
        
        //set up rows of table 
        viewModel = new TableLensView(model, rows);
        
        viewModel.render(rowHeight);
        
    
        barraRoll.setup(rows.length,mxrow);
        //DrawMurral();


        //set up rows table
        this.setLensSize = function(s){

        };
        this.fishEyes = function(irow){
            //if(rows.length >= irow){,
            
                viewModel.fishEyes(irow);
                viewModel.render(rowHeight);
            //}
        }
        this.setRowminHeight = function(h){
            rowHeight = h;
            viewModel.render(rowHeight);
        };
        this.getRowHeight = function(){
            return rowHeight;
        }
        this.setFont = function(f){

        };
        this.rolagem = function(){
            viewModel.render(rowHeight);
        }
        this.sort = function(id){
            viewModel.sort(id);
        }
        this.colorValues = function(color){
            viewModel.colorDrawed(color);
        }
        this.getRowLength = function(){
            return rows.length;
        }

        this.changeColumn = function(fromCol, toCol){
            var len = model.getColumnCount();
            viewModel.changeColumn(fromCol, toCol);
            viewModel.render(rowHeight);

        }

        this.getViewModel = function(){
            return viewModel;
        }
        this.letRoll = function(){
            return rows.length > conf.height ? true:false;
        }
    };  


    var TableLensView = function(model,rows){
        var self = this;
        var model = model;
        this.renderid =0;
        this.rows = rows;
        this.table = document.getElementById("TableLens");;
        self.body = document.createElement("tbody");
        this.rowCompressed = 1;
        var canvas = TableLensUtil.createElement("canvas");
        
        var _color = {
            //_1:["#FF9933","#003399","#99CCCC","#b2df8a","#a6cee3"],
            //position 5 is for negative value and 6 is for mapping positive value
            _1:["#FF9933","#00441b","#99CCCC","#b2df8a","#a6cee3","#bd0026","#003399"],
            _2:["#a6cee3","#00441b","#edf8b1","#FF9933","#1f78b4","#bd0026","#003399"],
            _3:["#003399","#99CCCC","#FF9933"],
            _4:["#FF9933","#99CCCC","#003399"],
            _5:["#a6cee3","#1f78b4","#b2df8a"],
            _6:["#edf8b1","#7fcdbb","#2c7fb8"],
        }
        this.color = _color["_1"];

        
        //set up width and hight of column table
        var i=0;
        var DataColumns = model.getColumns();
        var len = DataColumns.length;
        var widthCol = conf.width / len; //width of the divided parts in the same column
        var res=0;
        var mcol = [];
        //verify if exist column major than widthCol
        for (; i <len; i++) {
                var col= TableLensUtil.measureText(DataColumns[i].getTitle());
                DataColumns[i].setWidth(widthCol - (DataColumns[i].padding*2) - 1);
                DataColumns[i].setHeight(col.height);
                DataColumns[i].offset = res;
                res +=  DataColumns[i].getwidth() +(DataColumns[i].padding*2)+1;
        }
        var handler = {
            click:function(evt) {

            },
            dbclick:function(evt) {

            },
            mousemove:function(evt) {

            },
            mousedown:function(evt) {
                
            },
            mouseup:function(evt) {

            },
            mouseleave:function(evt) {

            }
        };
        initComponents(DataColumns);
        //initComponentsTable();

        function initComponentsTable(){
            var len = DataColumns.length;
            var i=0;
            var item;
            var tr = document.createElement("tr");
            var thead = document.createElement("thead");
            self.table.parentElement.style.width = (conf.width+20)+"px";
            self.table.parentElement.style.height = (conf.height)+"px";

            self.table.style.width = conf.width+"px";
            self.table.style.height = conf.height+"px";
            for(; i < len; i++){
                item = DataColumns[i]
                var text = document.createTextNode(item.getTitle());
                
                var th = document.createElement("th");
                th.innerText = item.getTitle();
                th.style.width = item.getwidth()+"px";
                th.addEventListener("click", handler.click);
                th.addEventListener("dbclick", handler.dbclick);
                th.addEventListener("mousemove", handler.mousemove);
                th.addEventListener("mouseenter", handler.mouseenter);
                th.addEventListener("mousedown", handler.mousedown);
                th.addEventListener("mouseup", handler.mouseup);
                th.addEventListener("mouseleave", handler.mouseleave);
                tr.appendChild(th);
            }

            thead.appendChild(tr)

            self.table.appendChild(thead);
            
            self.table.appendChild(self.body);  
        }
        this.changeColumn = function(fromCol, toCol) {
            var auxoff1 = DataColumns[fromCol].offset;
            var auxoff2 = DataColumns[toCol].offset;
            DataColumns[toCol].offset = auxoff1;
            DataColumns[fromCol].offset = auxoff2;
            var aux = DataColumns[toCol];
            DataColumns[toCol] = DataColumns[fromCol];
            DataColumns[fromCol] = aux;
        };

        this.getDataColumn = function(id){
            
            return DataColumns[id];
        };
        this.getCountDataColumn = function(){
            return DataColumns.length;
        }
        this.getModel = function(){
            return model;
        }

        this.getRows = function(){
            return rows;
        }

        this.getColumns = function(){
            return DataColumns;
        };

        this.getDataClusterRow = function(idRow) {
            console.log(rows[idRow].getData()[DataColumns.length-1].getValue())
            var dataValue = DataColumns[DataColumns.length-1].getValue(idRow);
            return dataValue; //{"colorGroup": DataColumns[DataColumns.length-1].getColor(dataValue.getValue())};
        }

        this.colorDrawed = function(id){
            this.color = _color["_"+id];
            this.render(-this.rowCompressed);
        }
        this.fishEyes = function(irow){
            //if(rows.length >= irow){,
                var i = 0;
                var id = -1;
                for (; i <= irow && i < this.rows.length; i++) {
                        id += this.rows[i] ? this.rows[i].getHeight() : 0;
                        if( irow <= id && ( id >= irow)){
                            var _id = this.rows[i].getIndex();
                            if(this.rows[i].getFeyes()){
                                linefieyes = -1;
                                this.rows[i].setHeight(conf.min_row_height);
                                this.rows[i].fEyes(false);
                            }
                            else{
                                    
                                    id -= this.rows[i].getHeight();
                                    linefieyes =  i;
                                    this.rows[i].setHeight(conf.max_row_height);
                                    this.rows[i].fEyes(true);
                            }
                            break;
                        }else{
                            linefieyes=-1;
                        }
                }
        }
        /**
         * [Sorting the datarow]
         * @param  {[Integer]} id [Culumn Id]
         */
        this.sort = function(id){
            var initime = Date.now();
            mergeSort(id);
             console.log(id);
            this.sorting = true;
            //var sorted = model.getColumn(id).getSort();
            this.render(TbLens.getRowHeight());
            this.sorting = false;
            /*var endtime = Date.now();
            endtime = (endtime - initime) * 0.001;
            console.log(endtime,"seg - sorting time");*/
        }
        /**
         * [BlubbleSort sorting]
         * @param  {[Integer]} id [Culumn Id]
         */
        function bubbleSort(id){

            var sorting;
            var sorted = model.getColumn(id).getSort();
            for (var i = self.rows.length - 1; i >= 0; i--) {
                for (var j = 0; j < i; j++) {
                    if(sorted==enumsort.asc)

                        sorting = self.rows[j].getData()[id].getValue()>self.rows[j+1].getData()[id].getValue();
                    if(sorted==enumsort.desc) 
                        sorting = self.rows[j].getData()[id].getValue()<self.rows[j+1].getData()[id].getValue();
                        if(sorting) {
                            var aux = self.rows[j];
                            var x = self.rows[j].getData()[id].getIndex();
                            self.rows[j].setDataValueIndex(self.rows[j+1].getData()[id].getIndex());    
                            self.rows[j] = self.rows[j+1];
                            self.rows[j+1].setDataValueIndex(x);
                            self.rows[j+1] = aux;
                        }
                }
            }
        }
        /**
         * [mergeSort Algortihm for sorting data]
         * @param  {Integer} id [Id of column for sorting]
         * @return {TableLens Row}    [Rows ordered]
         */
        function mergeSort(id){
            var sorting;
            var sorted = model.getColumn(id).getSort();
              var nid = DataColumns[id].getIndex();
            var rows = merge(self.rows,nid);
            self.rows = rows;
            //id = nid;
            console.log(id,nid);
            console.log(DataColumns[id].getTitle())
            function merge(arr){
                if (arr.length < 2) return arr;
                var mid = Math.floor(arr.length/2);
                var arrLeft = merge(arr.slice(0,mid));
                var arrRight = merge(arr.slice(mid));
               
                return sort(arrLeft,arrRight,sorted);
            }

            function sort(a,b,sorted){
                
                var result = [];
                while(a.length > 0 && b.length > 0){
                    

                //    console.log(a[0].getData()[nid].getValue());
                    if(sorted == enumsort.asc)
                        
                        if (orderByColumnData || a[0].getData()[nid].getColumn() instanceof CategoricalColumn ){
                            result.push(a[0].getData()[nid].getValue() < b[0].getData()[nid].getValue()? a.shift() : b.shift());
                        }
                        else{
                            var sila = parseFloat(data_silhoutte[defaultSilhoutte][a[0].getData()[nid].getIndexOut()][nid])
                            var silb = parseFloat(data_silhoutte[defaultSilhoutte][b[0].getData()[nid].getIndexOut()][nid])
                            result.push(sila < silb ? a.shift() : b.shift());
                        }
                    if(sorted == enumsort.desc){
                        
                        if (orderByColumnData || a[0].getData()[nid].getColumn() instanceof CategoricalColumn)
                            result.push(a[0].getData()[nid].getValue() > b[0].getData()[nid].getValue()? a.shift() : b.shift());
                        else{
                            var sila = parseFloat(data_silhoutte[defaultSilhoutte][a[0].getData()[nid].getIndexOut()][nid])
                            var silb = parseFloat(data_silhoutte[defaultSilhoutte][b[0].getData()[nid].getIndexOut()][nid])
                            result.push(sila > silb ? a.shift() : b.shift());
                        }
                    }
                }
                return result.concat(a.length? a:b);
            }
        }   

        function insertSort(id){
            var i,j,eleito;
            /*  for (var i=1, len = self.rows.length; i < len; i++) {

                }*/
        }

        /*var scale = document.getElementById('scale');
        if(scale.children.length == 0){
            for(var i=1;i<100;i++){
                var color =  HSIModel({hue: 3.90, sat: 1, inte:255},{hue: 3, sat: 1, inte:255},i/99);
                var div = document.createElement('div');
                div.style.backgroundColor = " rgb("+Math.round(color.red)+","+Math.round(color.green)+","+Math.round(color.blue)+")";
                scale.appendChild(div);
            }
        }*/

    
        /**
         * [drawCompressedData compressing data by blending the row table]
         * @param  {[DataValues]} data [Davalues (row) to blend]
         * @param  {[Integer]} id   [row for to show  the compressing data]
         * @return {[]}      [Data compressing]
         */
        this.drawCompressedData = function(data,id){

            
            
                
            this.renderid ++;
            var i = 0;
            var len = data.length;
            var op = 1/len;
            var vl;
            var avg=0;//average variabel
            var  pmax=0,pmin=0,pmid=0;//minimum, maximum and middle data value
            var dst=0;//standard deviation
            var max=0,min=Number.MAX_VALUE,mid=0;
            var vlsum=0;
            var column = data[data.length-1].getColumn();

            op = (op<0.25)?0.25:op;
            var fisheyes = 0;
            for (; i < len; i++) {
                    
            /*  var rw = data[i].getIdr()-1;
                  if(this.rows[rw].getFeyes()) {
                    console.log(i,rw);
                    fisheyes = rw;
                    break;
                  }*/
            }
            i=0;
            for (; i < len; i++) {
                vl=data[i].getValue();
                vlsum+=vl;
                //console.log(vl+" "+id );
                if(column instanceof IntegerColumn || column instanceof DoubleColumn ){
                    avg+=vl; //getting the media value
                    
                    if(vl>max){

                        //getting the maximum data
                        max=vl;
                        pmax=i;
                    }
                    if(vl<min){
                        //getting the minimum data value
                        min=vl;
                        pmin=i;
                    }
                    if(vl>min && vl<max){
                        //getting the middle data value
                        mid=vl;
                        pmid=i;
                    }
                }
            }

            if(column instanceof IntegerColumn || column instanceof DoubleColumn ){
                    if(linefieyes > -1){
                        
                        if(id < linefieyes){
                            ctx2.filter = "blur(1px)"; 
                        }
                        if(id > linefieyes + conf.max_row_height * data.length){
                            ctx2.filter = "blur(1px)";
                        }
                        if(id == linefieyes){
                            
                            ctx2.restore();
                            ctx2.save();
                            //ctx2.shadowColor = "white";
                            ctx2.shadowBlur  = 5;
                            ctx2.strokeStyle = "white";
                            ctx2.fillStyle="white";
                            i=0;
                            var pos = this.renderid;
                            var squares = Math.floor(column.getwidth()/data.length);
                                /**
                                 * [Made the Histograma when is able the fisheyes interaction]
                                 * @param  {[type]} ;i<data.length;i++ [description]
                                 * @return {[type]}                    [description]
                                 */
                            for(;i<data.length;i++){
                                var h = (data[i].getValue() * (conf.max_row_height-3) * data.length)/data[pmax].getValue();
                                var py = Math.abs(((conf.max_row_height-3) * data.length) - h);
                                ctx2.fillStyle = this.color[1];
                                ctx2.fillRect(column.offset+(i*squares)+3,linefieyes + py+column.padding,squares-3,h);
                                ctx2.fillStyle  = "white";
                                var text = ctx2.measureText(data[i].getValue().toString().trim());
                                ctx2.fillText(data[i].getValue().toString().trim(),column.offset+(i*squares)+Math.floor(squares/2)-Math.floor(text.width/2),linefieyes + py+column.padding + h-2,squares-2);
                                //ctx2.rect(column.offset,this.renderid,column.getwidth()+column.padding,conf.max_row_height);
                                this.renderid+=conf.max_row_height;

                            }
                            ctx2.fill();
                        }

                    }
            }

            

            
            
            //if(id > fisheyes+){ ctx.save(); ctx.filter = "blur(1px)";}
            //draw the value for
            
            
            //draw the value for 
            if(column instanceof IntegerColumn || column instanceof DoubleColumn ){
                avg/=len;//calculate average
                //the max, midlle and min value
                var vlmax = (data[pmax].getValue() * column.getwidth())/column.getMaxValue();
                var vlmin = (data[pmin].getValue() * column.getwidth())/column.getMaxValue();
                var vlmid = (mid>0)?(data[pmax].getValue() * column.getwidth())/column.getMaxValue():mid;
                
                i=len-1;
                //draw the image 
                var x2 = column.offset + vlmax,  
                    y2 = id;
                    var grad = ctx.createLinearGradient(column.offset,id,x2,y2);
                
                
                //var grad= ctx.createLinearGradient(0,0,x2,y2);
                //getting the variance -
            
                //sort the data 
                    data.sort(function(a,b){
                        if(a.getValue() > b.getValue())return -1;
                        if(a.getValue() < b.getValue())return 1;
                    });
                //
                
            //if(f==100) console.log('percent '+f+' div '+ f/99 +" passos "+passos +' valor original '+value)
            //console.log(f/this.getMinValue());
            //for(i=1;i<100;i++){
                    

                var sum =0;
                var maxxx = data[0].getValue();
                for (var j = 0; j < data.length; j++) {
                    
                    sum+=data[j].getValue();
                }
                if(data.length==1){
                    var color1 =     HSIModel({hue: 3.90, sat: 1, inte:255},{hue: 3, sat: 1, inte:255},99/99);
                    grad.addColorStop(0," rgb("+Math.round(color1.red)+","+Math.round(color1.green)+","+Math.round(color1.blue)+")");
                }
                if (data.length ==2){
                    var v1 = data[0].getValue();
                    var v2 = data[1].getValue();
                    if(v1-v2 !=0){
                        var color1 = HSIModel({hue: 3.90, sat: 1, inte:255},{hue: 3, sat: 1, inte:255},99/99);
                        var color2 = HSIModel({hue: 3.90, sat: 1, inte:255},{hue: 3, sat: 1, inte:255},1/99);

                        var m = (v2 * 1) / v1;
                        m = (m > 0.9999) ? 1:m+0.0001;
                        grad.addColorStop(0," rgb("+Math.round(color1.red)+","+Math.round(color1.green)+","+Math.round(color1.blue)+")");
                        grad.addColorStop(m," rgb("+Math.round(color1.red)+","+Math.round(color1.green)+","+Math.round(color1.blue)+")");
                        
                        grad.addColorStop(m," rgb("+Math.round(color2.red)+","+Math.round(color2.green)+","+Math.round(color2.blue)+")");
                    }else{
                        
                        var color1 =     HSIModel({hue: 3.90, sat: 1, inte:255},{hue: 3, sat: 1, inte:255},99/99);
                        grad.addColorStop(0," rgb("+Math.round(color1.red)+","+Math.round(color1.green)+","+Math.round(color1.blue)+")");
                    }
                }
                if (data.length ==3){
                    var v1 = data[0].getValue();
                    var v2 = data[1].getValue();
                    var v3 = data[2].getValue();
                    var color1 =     HSIModel({hue: 3.90, sat: 1, inte:255},{hue: 3, sat: 1, inte:255},99/99);
                    var color2 =     HSIModel({hue: 3.90, sat: 1, inte:255},{hue: 3, sat: 1, inte:255},45/99);
                    var color3 =     HSIModel({hue: 3.90, sat: 1, inte:255},{hue: 3, sat: 1, inte:255},1/99);
                    var m = (v3 * 1) / v1;
                    m = (m > 0.9999) ? 1:m+0.0001;
                    grad.addColorStop(0," rgb("+Math.round(color1.red)+","+Math.round(color1.green)+","+Math.round(color1.blue)+")");
                    grad.addColorStop(m," rgb("+Math.round(color1.red)+","+Math.round(color1.green)+","+Math.round(color1.blue)+")");
                        if( v1-v3 != 0){
                            var dis = v2-v3;
                            var dism = (dis * 1) / v2;
                            var m1 = ((v3 + dis ) * 1 ) / v1;
                            grad.addColorStop(m," rgb("+Math.round(color2.red)+","+Math.round(color2.green)+","+Math.round(color2.blue)+")");
                            grad.addColorStop(m1," rgb("+Math.round(color2.red)+","+Math.round(color2.green)+","+Math.round(color2.blue)+")");
                        
                            if(v3-v2 != 0){
                                grad.addColorStop(m1," rgb("+Math.round(color3.red)+","+Math.round(color3.green)+","+Math.round(color3.blue)+")");
                                grad.addColorStop(1," rgb("+Math.round(color3.red)+","+Math.round(color3.green)+","+Math.round(color3.blue)+")");
                            }

                        }else{
                            /*if(v3-v2 != 0){
                                grad.addColorStop(m1," rgb("+Math.round(color3.red)+","+Math.round(color3.green)+","+Math.round(color3.blue)+")");
                                grad.addColorStop(1," rgb("+Math.round(color3.red)+","+Math.round(color3.green)+","+Math.round(color3.blue)+")");
                            }*/
                        }
                    
                    
                }

                if (data.length ==4){
                    var v1 = data[0].getValue();
                    var v2 = data[1].getValue();
                    var v3 = data[2].getValue();
                    var v4 = data[3].getValue();
                    var color1 =     HSIModel({hue: 3.90, sat: 1, inte:255},{hue: 3, sat: 1, inte:255},99/99);
                    var color2 =     HSIModel({hue: 3.90, sat: 1, inte:255},{hue: 3, sat: 1, inte:255},45/99);
                    var color3 =     HSIModel({hue: 3.90, sat: 1, inte:255},{hue: 3, sat: 1, inte:255},20/99);
                    var color4 =     HSIModel({hue: 3.90, sat: 1, inte:255},{hue: 3, sat: 1, inte:255},1/99);
                    var m = (v4 * 1) / v1;
                    m = (m > 0.9999) ? 1:m+0.0001;
                    grad.addColorStop(0," rgb("+Math.round(color1.red)+","+Math.round(color1.green)+","+Math.round(color1.blue)+")");
                    grad.addColorStop(m," rgb("+Math.round(color1.red)+","+Math.round(color1.green)+","+Math.round(color1.blue)+")");
                    if(v4-v1  != 1){
                        var dis = v3 - v4;
                        if(dis != 1){
                            var m1 = ((v3) * 1 ) / v1;
                            //percent of distance
                            var dism = (dis * 1) / v3;
                            grad.addColorStop(m," rgb("+Math.round(color2.red)+","+Math.round(color2.green)+","+Math.round(color2.blue)+")");
                            grad.addColorStop(m1," rgb("+Math.round(color2.red)+","+Math.round(color2.green)+","+Math.round(color2.blue)+")");
                            dis = v2 - v3;
                            if( dis != 0){
                                var m2 = ((v2) * 1 ) / v1;
                                dism = (dis * 1) / v2;
                                grad.addColorStop(m1," rgb("+Math.round(color3.red)+","+Math.round(color3.green)+","+Math.round(color3.blue)+")");
                                grad.addColorStop(m2," rgb("+Math.round(color3.red)+","+Math.round(color3.green)+","+Math.round(color3.blue)+")");

                                dis = v1 - v2;
                                if(dis != 0){
                                    grad.addColorStop(m2," rgb("+Math.round(color4.red)+","+Math.round(color4.green)+","+Math.round(color4.blue)+")");
                                    grad.addColorStop(1," rgb("+Math.round(color4.red)+","+Math.round(color4.green)+","+Math.round(color4.blue)+")");
                                }
                            }
                        }

                    }else{

                    }
                
                }
                if (data.length ==5){
                    var v1 = data[0].getValue();
                    var v1 = data[1].getValue();
                    var v1 = data[2].getValue();
                    var v1 = data[3].getValue();
                    var v1 = data[4].getValue();

                }
                if (data.length ==6){
                    var v1 = data[0].getValue();
                    var v1 = data[1].getValue();
                    var v1 = data[2].getValue();
                    var v1 = data[3].getValue();
                    var v1 = data[4].getValue();
                    var v1 = data[5].getValue();
                }
                if (data.length ==7){

                }
                if (data.length ==8){

                }
                if (data.length ==9){

                }
                // ordenar os dados
                // 
                // conhecer as porcentagem de cada dado comprimido
                // mapear segundo seja esse porcentagem
                //  

                //var grad= ctx.createLinearGradient(0,0,x2,y2);
                //getting the variance -
                i=len-1;
                for (; i >= 0; i--) {
                    vl=data[i].getValue();
                    //var color = column.setColor(vl);
                    //color = color.color;
                    var valor = parseInt(i) / 1 ;
                    var div = 1 / (i+1);
                    dst += Math.pow((vl-avg),2)

                }
                    
                //standard deviation
                dst = Math.sqrt(dst/len);
                
                
                
                var lavg = (avg * column.getwidth())/column.getMaxValue();
                var dstpos = (dst * column.getwidth())/column.getMaxValue();
                
                //ctx.globalCompositeOperation ="source-over";
                var v = vlsum/len;
                v =(v * column.getwidth())/column.getMaxValue();
                //column.draw(dstpos,id,1);
                //ctx.fillStyle=grad;
                //ctx.fillRect(column.offset,id,vlmax,1);
                //drawing maximum value into the other canvas
                var grad2 = ctx2.createLinearGradient(column.offset*2,this.renderid,column.offset*2+vlmax, id);
                var dstgrad =0;
                var lavggrad = 0;
                var diff = 0;
                var diffDst = 0;
                if(vlmax > 0){
                    dstgrad = dstpos / vlmax;
                    lavggrad = lavg / vlmax;
                    diffDst = vlmax - lavg;
                    diff = Math.abs(lavggrad - dstgrad);
                }
                //set the color data
               
               
               if(avg < 0){
                    grad2.addColorStop(dstgrad, this.color[5] );
                    grad2.addColorStop(diff, this.color[5] );
                    grad2.addColorStop(diff, this.color[5] );
               }

               if(avg > 0){ 

                 grad2.addColorStop(diff, this.color[6] );
                 grad2.addColorStop(lavggrad, this.color[6] )

               }
                grad2.addColorStop(1, this.color[2] );
            
                
                //ctx2.fillRect((column.offset*2) + (column.getwidth()+column.padding*2)*2,this.renderid,-lavg,1);
                var avgdatasilhoutte = 0;
                var maxSilhoutteValue = Number.MIN_SAFE_INTEGER;
                for (var i = 0; i < data.length; i++) {
                    var silValue = Math.abs(parseFloat(data_silhoutte[defaultSilhoutte][data[i].getIndexOut()][column.getIndex()]));

                    if (silValue > maxSilhoutteValue ){
                        maxSilhoutteValue = silValue;
                    }
                    avgdatasilhoutte+=silValue;
                }
                avgdatasilhoutte = avgdatasilhoutte/data.length;
                 
                //dsil = parseFloat(data_silhoutte[defaultSilhoutte][data[0].getIndexOut()][column.getIndex()])
                var dsil = avgdatasilhoutte;
                var diff = column.getwidth() - 5;
                var dsil_percentage = Math.abs(dsil)/1;
                var dsil_value = dsil_percentage * diff;

                var psilhouteX  = (column.offset*2) + (column.getwidth()+column.padding*2)*2;//position for mapping postion X of silhouette coefficient
                psilhouteX = psilhouteX -2;
               
                var grad = ctx2.createLinearGradient(psilhouteX,this.renderid,psilhouteX - column.getwidth() - 10,id);
                for (var i = 0; i < data.length ; i++) {
                   
                    var silValue = parseFloat(data_silhoutte[defaultSilhoutte][data[i].getIndexOut()][column.getIndex()]);
                    silValue = Math.abs(silValue) / maxSilhoutteValue;
                    if(parseFloat(data_silhoutte[defaultSilhoutte][data[i].getIndexOut()][column.getIndex()]) >= 0){
                        grad.addColorStop(silValue,this.color[3]);
                    }else{
                        grad.addColorStop(silValue,this.color[4]);
                    }
                }
                  ctx2.fillStyle = grad;
                   ctx2.fillRect(psilhouteX,this.renderid,-dsil_value,1);   

                ctx2.fillStyle = grad2;
                //ctx2.strokeStyle = grad2;
            //  ctx3.fillStyle = this.color[1];
            //  ctx3.fillRect((column.offset*2) ,this.renderid,vlmax,1);
            //  ctx2.fillStyle = this.color[2];
                ctx2.fillRect(column.offset * 2 ,this.renderid,vlmax,1);

                ctx2.fillStyle ="red";
                ctx2.fillRect((column.offset*2)+dstpos,this.renderid,1,1);
/**/            //drawing average value
                //ctx2.fillStyle = this.color[1];
                //ctx2.fillRect(column.offset,id,lavg,1);
                ctx2.lineWidth = 1;
                ctx.restore();
                //group mapping in column
               // var groupData = this.getDataClusterRow(this.renderid-1);
                /*var colorGroup = groupData.getColumn().getColor(groupData.getValue());
                ctx2.fillStyle =  colorGroup;
                ctx2.fillRect( (column.offset*2) + column.getwidth()+column.padding + 3,this.renderid,3,1);*/
            }


            if(column instanceof CategoricalColumn || column instanceof StringColumn){
                    var c = Math.floor(Math.random() * data.length) - 1;
                    c=c<0?0:c;
                    var dtcat = column.getDataCompress();
                    var categoryColumnSpace = Math.ceil((column.getwidth()*2+column.padding)/dtcat.length);
                    var idof = dtcat.indexOf(data[c].getValue());
                    var p = (idof>0)?categoryColumnSpace*idof:0;
                    fil = h*id;
                    ctx2.fillStyle = column.getColor(data[c].getValue());
                    ctx2.fillRect(column.offset * 2+p,this.renderid,categoryColumnSpace,1);
                    var len = DataColumns.length;
                    var c = 0;
                    for (; c <len-1; c++) {
                        ctx2.fillRect((DataColumns[c].offset*2) + column.getwidth() + column.padding + 3,this.renderid,3,1);        
                    }
            }
        };
        //initialize components as column and roll bar
        function initComponents(cols){
            var div = TableLensUtil.ById(conf.container);//div for rol bar
            var div2 = document.getElementById("container2");
            var div3 = document.getElementById("container3");

            if(div.lastElementChild instanceof HTMLCanvasElement){
                div.removeChild(div.children[1]);
                div.removeChild(div.lastElementChild);
            }

            if(div2.lastElementChild instanceof HTMLCanvasElement){
                div2.removeChild(div2.children[1]);
                div2.removeChild(div2.lastElementChild);
            }
            var w = conf.width + 1, h=conf.height + 1; //width of canvas
            
            var divcl = TableLensUtil.createElement("div");
            var ul = TableLensUtil.createElement("ul");
            
            var rol = TableLensUtil.ById("rolagem");
            var range = TableLensUtil.ById("range");
            /***Render Table */
            
            /**/
            range.max = conf.max_row_height;
            range.min = -30;
            // range.value=1;
            range.step=1;
            // range.defaultValue = conf.max_row_height/2;
            //console.log(Object.create(range));
            rol.style.visibility ="visible";
            
            ul.className = "cols";
            var ul2 = ul.cloneNode(true);
            //create div columns
            var i=0;
            var wi=0;
            for (; i < cols.length; i++) {
                /**text*/
                var text = document.createTextNode(cols[i].getTitle());
                var li = TableLensUtil.createElement("li")
                li.style.padding = cols[i].padding+"px";
                li.setAttribute("draggable",true);
                li.setAttribute("id","col-"+i);
                li.className ="cols";
                li.value= i;
                li.type = i;
                li.addEventListener("click", click,false);
                li.addEventListener("dbclick", dbclick,false);
                //li.addEventListener("dragstart",dragStart,false);
                /*li.addEventListener("dragenter",dragEnter,false);
                li.addEventListener("dragover",dragOver,false);
                li.addEventListener("dragleave",dragLeave,false);
                li.addEventListener("dragleave",dragLeave,false);
                li.addEventListener("dragend",dragEnd,false);
                li.addEventListener("drop",drop,false);*/
                // li.addEventListener("mousemove", mousemove);
                // li.addEventListener("mouseenter", mouseenter);
                // li.addEventListener("mousedown", mousedown);
                // li.addEventListener("mouseleave", mouseleave);
                li.style.height = cols[i].getHeight()+"px";
                li.style.borderLeft =  "1px solid #737373";
                li.style.maxWidth = Math.ceil(cols[i].getwidth())+"px";
                li.style.width = Math.ceil(cols[i].getwidth())+"px";
                li.style.minWidth = "10px";
                li.appendChild(text);

                var l2 = li.cloneNode(true);
                l2.style.padding = 2 * cols[i].padding+"px";
                l2.addEventListener("click", click);
                l2.addEventListener("dbclick", dbclick);
                //ENABLE DRAG AND DROP
                    l2.addEventListener("dragstart",dragStart,false);
                    l2.addEventListener("dragenter",dragEnter,false);
                    l2.addEventListener("dragover",dragOver,false);
                    l2.addEventListener("dragleave",dragLeave,false);
                    l2.addEventListener("dragleave",dragLeave,false);
                    l2.addEventListener("dragend",dragEnd,false);
                    l2.addEventListener("drop",drop,false);
                l2.setAttribute("id","col-"+i);
                l2.style.maxWidth =  (2 * cols[i].getwidth())+"px";
                l2.style.minWidth =  ( 2 * cols[i].getwidth()/1.5)+"px";
                l2.style.width = 2 * cols[i].getwidth()+"px";
                l2.setAttribute("draggable",true);
                ul2.appendChild(l2);
                ul.appendChild(li);

                console.log(cols[i].getwidth());
                /*Row*/
                if(cols[i] instanceof IntegerColumn || cols[i] instanceof DoubleColumn ){
                    wi+=(cols[i].getwidth()+cols[i].padding);
                }
            }
            divcl.style.width= w+"px";
            divcl.style.height ="auto";
            var divcl2 = divcl.cloneNode(false);
            divcl2.style.width= 2*w+"px";
            divcl2.style.height ="auto";

            divcl2.appendChild(ul2);
            divcl.appendChild(ul);

            div.style.width =  rol.clientWidth+4+(w+1)+"px";
            div.style.height = "auto";
            // div.style.border = "1px solid #737373";
            div.style.boxSizing = "border-box";

            
            canvas.width =conf.width;
            canvas.height = conf.height;
            canvas.style.display = "block";
            canvas.style.border = "1px dotted black";
            canvas.style.position = "relative";
            canvas.addEventListener('mousedown',canvasclick)

            canvas2.width = conf.width * 2;
            canvas2.height = conf.height;
            canvas2.style.display = "block";
            canvas2.style.border = "1px dotted black";
            canvas2.style.position = "relative";
            canvas2.addEventListener('mousedown',canvasclick)
            //set the context 2D 
            // canvas3.width =conf.width * 2;
            // canvas3.height = conf.height-200;
            // canvas3.style.display = "block";
            // canvas3.style.border = "1px dotted black";
            // canvas3.style.position = "relative";

            cvs = canvas;
            
            cvs.onmousemove=function(evt){
                //console.log(evt.layerY);
            }
            ctx = canvas.getContext("2d");
            ctx2 = canvas2.getContext("2d");
            // ctx3 = canvas3.getContext("2d")
            try
            {
                ctx.imageSmoothingEnabled = false;
                ctx.mozImageSmoothingEnabled = false;
                ctx.webkitImageSmoothingEnabled = false;
                ctx.msImageSmoothingEnabled = false;
            }catch(err){
                
                Log.addLog(err,"e");
            }
             
            //add element to main component [menu and canvas]
            div.appendChild(divcl);
            div.appendChild(canvas);
            div2.appendChild(divcl2);
            div2.appendChild(canvas2);
            // div3.appendChild(canvas3);
            rol.style.height = div.clientHeight+"px";

    }

        this.resizeColumn = function(){

        }

        /**
         *Listeners
         * 
         */
        var target;
        var cwidth=false;//when it activated to change width the column
        var wtarget=0;
        var adc=0; // integer value indicate if column increases or decrease width
        var vadc; //boolena value indicate if column increases or decrease width
        var target2=null;
        var w2=0;
        var pr = false;
        var t=0;
        var resize = false;
        var offsetX =0;
        var columnToChange=null;
        var columnToChangeD = null;
        var noAble = false;
        function click(evt){
            if(!resize){
                cwidth=false;
                adc=0;
                vadc=0;
                TbLens.sort(parseInt(this.value));
            }

        }

        function dbclick(evt){
            console.log("bs");
        }

        function dragStart(evt){
            
            console.log(parseInt(this.id.split("-")[1]),TbLens.getViewModel().getCountDataColumn())
            if(parseInt(this.id.split("-")[1]) < TbLens.getViewModel().getCountDataColumn()-2){
                this.style.opacity = '0.4';
                evt.dataTransfer.effectAllowed = "move";
                columnToChange = this;
                columnToChangeD = TableLensUtil.ById("col-"+this.id.split("-")[1]);
                evt.dataTransfer.setData('text/html', this.innerHTML);
                 noAble = false;
            }else{
                noAble = true;
            }
        }


        function dragEnter(evt){
             if(!noAble){
                this.classList.add("over");
            }
        }



        function dragOver(evt){
            
            if (evt.preventDefault) {
                evt.preventDefault(); // Necessary. Allows us to drop.
            }

            if(!noAble){
                evt.dataTransfer.dropEffect = "move";
            }
            return false;
        }

        function dragLeave(evt){
            if(!noAble){
                this.classList.remove("over");
            }
        }

        function drop(evt){
            if (evt.stopPropagation) {
                evt.stopPropagation(); // Stops some browsers from redirecting.
            }
            if(!noAble){
                if (columnToChange != this){
                    TbLens.changeColumn(columnToChange.id.split("-")[1], this.id.split("-")[1]);
                    columnToChange.innerHTML = this.innerHTML;// = this.innerHTML;
                    this.innerHTML = evt.dataTransfer.getData('text/html');
                    var auxHTML = columnToChangeD.innerHTML;
                    columnToChangeD.innerHTML = TableLensUtil.ById("col-"+this.id.split("-")[1]).innerHTML;
                    TableLensUtil.ById("col-"+this.id.split("-")[1]).innerHTML = auxHTML;
                }
                this.classList.remove("over");
            }
            return false;
        }

        function dragEnd(evt){
            this.style.opacity = '1';
        }

        function mousemove(evt){

            if(!cwidth){
                //set up riseze of column
                if(evt.target.nextSibling != null){
                    
                    if(evt.offsetX > (evt.target.clientWidth-10)){
                            this.style.cursor ="e-resize";
                        adc = evt.x;
                        pr=true;
                     }
                     else{
                        pr=false;
                        this.style.cursor ="auto";
                     }
                }
            }
            else
            {
                resize = true;
                var nx = evt.clientX - offsetX;
                target.style.width = (wtarget+nx)+"px"; 
                DataColumns[target.value].setWidth((wtarget+nx)- 1);
                
                i=target.value+1;
                len = DataColumns.length;
                res = DataColumns[target.value].offset;
                
                for (; i <len; i++) {
                    DataColumns[i].setWidth(DataColumns[i].getwidth() + nx - 1);
                    console.log(document.getElementById("col"+i).offsetLeft);
                    //DataColumns[i].offset = document.getElementById("col"+i).offsetLeft;
                }
                target.nextSibling.style.width = DataColumns[target.value+1].getwidth()+"px";
                self.render(1);

                //DataColumns[target.value].setWidth((wtarget+nx));
                //
                //DataColumns[target.value+1].offset =  DataColumns[target.value].getwidth() + (DataColumns[target.value].padding*2)+1;
                //self.render(1);
                /*if(adc < evt.x){
                    vadc=adc;
                    adc= evt.x;
                    wtarget+=5
                    var last=target.parentNode.lastElementChild;
                    if(t==0)t = last.clientWidth;
                    t-=10;
                    last.style.width = "10px";
                    target.style.width = wtarget+"px";  
                }else{

                    if(adc > evt.x){
                        vadc=adc;
                        adc= evt.x;
                        wtarget-=5;
                        target.style.width = wtarget+"px";
                    }
                }*/
            }
        }
        function mouseenter(evt){
            
///         console.log(evt.target);
        }

        function mouseup(){
            resize = false;
        }
        function mousedown(evt){
            if(pr){
                cwidth=true;
                target = evt.target;
                wtarget = target.clientWidth;
                target2 = target.nextSibling;
                w2 = target2.clientWidth;
                offsetX = evt.clientX;
            }
                
        }

        function mouseleave(){
            console.log("sale");
        }

    }

    
    function HSIModel(to,from,iter){

            function convierteHexadecimal(num){
                    //alert (num)
                    var hexaDec = Math.floor(num/16)
                    var hexaUni = num - (hexaDec * 16)
                    return hexadecimal[hexaDec] + hexadecimal[hexaUni]
                }
            function HSIScale(to,from,percent){
                    var hue_range = to.hue - from.hue;
                    var sat_range = to.sat -  from.sat;
                    var inte_range = to.inte - from.inte;

                    if(hue_range < 0) hue_range +=6;

                color = HSI(
                    hue_range * percent + from.hue,
                    sat_range * percent + from.sat,
                    inte_range * percent + from.inte
                    );

                return color;
            }

            function RgbToHsi(r,g,b){
                 r = r /(r + g + b );
                 g = g /(r + g + b );
                 b = b /(r + g + b );
                var mid = (r+g+b)/3;
                var mr = r - mid,
                    mg = g - mid,
                    mb = b - mid;
            //  var intensity = mid + Math.sqrt((2 * ( mr*mr + mg*mg + mb*mb)/3))
                var intensity = mid;
                var saturation = 1 - (3/(r+g+b)) * Math.min(r,g,b);
                //var saturation = 1 - 2 * (intensity   - mid) / intensity;

                //var cos_hue = (2 * mr - mg - mb)/ Math.sqrt((mr*mr + mg*mg + mb*mb) * 6)
                //hue = Math.acos(cos_hue) * 3 / Math.PI;
                var cos_hue = Math.acos( ( ( (r - g ) + ( r - b) ) / 2) / ( Math.sqrt( (r*r) + (g*g) + (b*b) - (r*g) -(r*b) - (g*b) ) ) );
                //if(b > g ) hue = 6 - hue;
                if(b > g ){
                    hue = 2* Math.PI - cos_hue;
                }
                if(b<=g){
                    hue = cos_hue;
                }

                hue = Math.floor(hue * 10) / 10;
                saturation = Math.floor(saturation * 10) / 10;
                intensity = Math.floor(intensity * 10) / 10;
                var data = {'hue':hue,'saturation':saturation,'intensity':intensity};
                return null;
            }

            function HSI(h,s,i){
                    
                    var r,g,b;
                    /*r=value(h);
                    g=value(h+0.4);
                    b = value(h+0.2);*/
                    if(0 <= h && h < ( (2/3) * Math.PI ) ) {

                        b = (1/3) * (1 - s);
                        //b = (1 - s)/3;.
                        //b = i - i*s;
                        r = (1/3) * ( 1 + ( (s * Math.cos(h)) / (Math.cos( ((1/3)*Math.PI) - h ) ) ) );
                        //r = ( 1 + ( (s * Math.cos(h)) / (Math.cos( ((1/3)*Math.PI) - h ) ) ) );
                        g = 1 - ( r + b);
                        
                    }
                    if( ( (2/3) * Math.PI <= h ) && (h <  (4/3) * Math.PI) ) {
                    
                        h = h - (2/3) * Math.PI;
                        r = (1/3)*(1-s);
                        g = (1/3) * ( 1 + ( (s * Math.cos(h)) / (Math.cos( ((1/3)*Math.PI) - h ) ) ) );
                        b = 1 - ( r + g);

                    }
                    if( (4/3 * Math.PI  <=  h) && (h < 2 *  Math.PI)){
                        h = h - ( (4/3) * Math.PI );
                        g = (1/3)*(1-s);
                        b = (1/3) * ( 1 + ( (s * Math.cos(h)) / (Math.cos( ((1/3)*Math.PI) - h ) ) ) );
                        r =1 - ( g + b);
                    }
                    /*function value(hue_phase){
                        var pure = 0.5 * (1 + Math.cos(hue_phase * Math.PI / 3));
                        var re = i * (1 - s * (1 - pure));
                        return re;
                    }*/
                //console.log(r*3*i,g*3*i,b*3*i);
                return  {red : Math.abs(r)* 255 ,
                         blue : Math.abs(b) * 255 ,
                         green : Math.abs(g) * 255
                        };
            }
            return HSIScale(to,from,iter);
        }
            
        /**
         * [knn Algorithm to knn]
         * @param  {[type]} data [Data row]
         * @return {[DataRow]}      [Kdata row the clustering]
         */
        function knn(datarow){

            return kdata;
        }
        /**
         * [bkmeas Algorithm bisecting k-means]
         * @param  {[type]} datarow [description]
         * @return {[type]}         [description]
         */
        function bkmeas(datarow){

        }

        function speccluster(datarow){
            
        }

    /**
     * [view for to render de view into of canvas]
     * @type {Object}
     */
    TableLensView.prototype = {
        draw:function(h){
            var time = Date.now();
            var w = new Worker("render.js");
            var rwdata = this.rows;
            var len = this.getCountDataColumn();
            var i = 0;
            var row =  Math.floor(conf.height/h);
            var vlen = rwdata.length;
            var id=1;
            var id2=0;
            var v=mrow;
                
               /* [].forEach.call(this.getColumns(),function(index){
                    console.log(index);
                });*/
                  //  console.log(this.getDataColumn(i).getTitle());
                
               
                i=0;
            for (; v < row+mrow && v < vlen ; v++) {
                var data = rwdata[v].getData();
                var hi = rwdata[v].getHeight();
                var fyes = rwdata[v].getFeyes()
                for (; i <len; i++) {
                //  rwdata[v].ele.appendChild(data[i].ele);
                            data[i].feyes(fyes);
                            data[i].setId(id);
                            data[i].draw(h,id,hi);
                }
                id+=hi;
                i=0;
                id2++;
                //this.body.appendChild(rwdata[v].ele);
            }
            mxrow=id2;
        },
        drawCompressed:function(h){
            this.renderid = 0;
            var rwdata = this.rows;
            h = Math.abs(h);
            var len = this.getCountDataColumn();
            var i=0;
            var row=Math.floor(conf.height/h);
            var datacompressed =[];
            //counter variable for to stop the draw row
            var vlen = rwdata.length;
            var id=0;
            var v=0;
            var c=0;
            var inslacke = Math.round(vlen / h);
            var lack = (inslacke * h) - vlen;
            var add = lack;
            ctx2.save();
            for (; i <len; i++) {
                
                for (; v < vlen; v+=h) {
                    hi = rwdata[v].getHeight();
                    var newrw = rwdata.slice(v,v+h);
                    for(var d=0;d<newrw.length;d++){
                        var dd= newrw[d].getData();
                        datacompressed.push(dd[i])
                    }
                    this.drawCompressedData(datacompressed,this.renderid);
                    id++;                   
                    datacompressed = []                         
                }
                mxrow=id;
                v=0;
                id=0;
                this.renderid = 0;
            }
                
        },
        render:function(h){
            mxro=0;
            if( h > -2 || this.sorting){
                cvs.width = cvs.width;
                
            }
            canvas3.width = canvas3.width;
                canvas2.width = canvas2.width
            i=0
            h=h==0||h==-1?1:h;
            this.rowCompressed = Math.abs(h);
            var len = this.getCountDataColumn();
            //draw the grid
            // ctx3.lineWidth=1;
            for (; i <len; i++) {
                
                //if(this.getDataColumn(i) instanceof IntegerColumn || this.getDataColumn(i) instanceof DoubleColumn ){
                    // ctx3.strokeStyle ="black";
                    // ctx3.moveTo(this.getDataColumn(i).offset*2, 0);
                    // ctx3.lineTo(this.getDataColumn(i).offset*2, conf.height);
                    // ctx3.stroke();
                //}
                ctx.moveTo(this.getDataColumn(i).offset, 0);
                ctx.lineTo(this.getDataColumn(i).offset, conf.height);
                ctx.stroke();
            }
            if(this.sorting) this.draw(1);
            if(h<=conf.min_row_height){
                canvas3.width = canvas3.width;
                this.drawCompressed(h)
            }
            if(h>conf.min_row_height-1) this.draw(h);
                document.getElementById("load").style.visibility ="hidden";
                        clearInterval(load);
            
             ///document.getElementById("load").className ="";
        }
    }
    /**
     * [TableModel  data models of table]
     * @param {[type]} columns [colmns object]
     */
    var TableModel = function(columns) {
        /**
         * [DataCols array of columns]
         * @type {[object column]}
         */
        var DataCols = columns || [];


        /**
         * [getColumnCount return zise of columns table]
         * @return {Integer} [Number of column]
         */
        this.getColumnCount = function(){
            return DataCols.length;
        };
        /**
         * [getColumns arrays column]
         * @return {[type]} [description]
         */
        this.getColumns = function(){
            return DataCols;
        };

        this.getColumn = function(id){
            return DataCols[id];
        }
        /**
         * [getColumnName return name column]
         * @param  {Integere} id [to represent index of the column into table]
         * @return {[Strring]}    [Name of column]
         */
        this.getColumnName = function(id){
            return DataCols[id].getTitle();
        };

        this.getRowCount = function(){
            return DataCols[0].getValueCount();
        };

        this.getValueAt =  function(row,col){
            return DataCols[col].getDataValue(row);
        }
        /**
         * [sort sort the datavalues]
         * @param  {Integer} id   [index of the column]
         * @param  {[type]} tipo [1=asc, 0=des]
         * @return {[type]}      [description]
         */
        
        var quickSort = function(array,begin,end){
            var pivote = Math.floor(DataCols[id].length/2);
            pivote = part(array, begin, end, p);
            quickSort()
        }
        var part = function(array,begin,end,pivote){
            var pv = array[pivote];

        }
    };
    
    /**
     * [Column class for to describe of column of Table Lens ]
     * @param {String} namecol [variavel of name column]
     */
    function ColumnFactory(namecol,type){
            var column;
            switch(type){
                case TypeColumn.Integer:
                    column = new IntegerColumn(namecol,type);
                    break;
                case TypeColumn.Double:
                    column = new DoubleColumn(namecol,type);
                    break;
                case TypeColumn.Str:
                    column = new StringColumn(namecol,type);
                    break;
                case TypeColumn.Categorical:
                    column = new CategoricalColumn(namecol,type);
                    break;
                default: 
                    Log.addLog(namecol+" Type column not found "+type,"e");
                    break;
            }
        return column;
    }

    var Column = function(namecol, type){
            enumsort = {
                desc:0,
                asc:1,
                none:true
            }
            var dic = [];
            var sort;
            /**
             * [values {DataValue} values of rows belonging to the column ]
             * @type {Array}
             */
            var values = [];

        
            /**
             * [name Name Column]
             * @type {[String]}
             */
            var name = namecol || "NULL VALUE";
            /**
             * [nameS if it exceeds the limits of column value]
             * @type {String}
             */
            var nameS =name;
            /**
             * [self object column]
             * @type {[object]}
             */
            var self = this;
            /**
             * [type type of culomn into data file]
             * @type {[TypeColumn]}
             */
            var type = type;
            /**
             * [column object to return ]
             * @type {[Column]}
             */
            var column;
            /** 
             * [width width of column ]
             * @type {Number}
             */
            var width=0;
            /**
             * [height heigh of columns]
             * @type {Number}
             */
            var height=0;
            /** 
             * [Integer index of column in the table]
             * @type {[Integer]}
             */
            this.id;
            this.offset =0;
            this.padding = 4;

            var visibility;
            /**
             * [getTitle [return of string name of column]
             * @return {[name]} [variavel of name column]
             */

            this.getTitle = function(){
                return name;
            }
            /**
             * [setWidth set width of column for to rendering]
             * @param {Integer} size [width]
             */
            this.setWidth = function(w){
                width = w;
            }
            this.getwidth = function(){
                return width;
            }

            this.setHeight = function(h){
                height = h;
            }
            this.getHeight = function(){
                return height;
            }
            /**
             * [setIndex set the index of column in table]
             * @param {Integer} ex: index=1 [index of column in the table]
             */
            this.setIndex = function(index){
                 this.id = index;
            }
            this.getIndex = function(){
                
                return this.id;
            }
            /**
             * [updateColumn method for to update values column ]
             * @return {[Array]} [Values of the columns]
             */
            this.updateColumn = function(){

            }

            this.getValues = function(){
                return values;
            }
            /**
             * [addValue add the news values for the column]
             * @param {[value column]} value [value Column]
             */
            this.addValue = function(value){
                //value = this._parseData(value);
                values.push(value);
            };  
            this.addDataValue=function(value){
                //value = this._parseData(value);
                var valor = value.getValue();
                (!dic.includes(valor))&&dic.push(valor);
                values.push(value);
            };  
            this.getDic = function(){
                return dic;
            };
            this.getValue = function(id){
                return values[id];
            };
            this.setValues = function(val){
                values=[];
                values = val;
            }
            this.getDataValue = function(row){
                return values[row].getValue();
            }
            this.getValueCount = function(){
                return values.length;
            };

            this.getVisibility = function(){
                return visibility;
            };
            this.activetVisibility = function(){
                visibility = true;
            };
            this.desactiveVisibility = function(){
                visibility = false;
            };
            this.getValuesLength = function(){
                return values.length;
            };
            var setSort = function(srt){
                if(enumsort.none){
                    enumsort.none = false;
                    sort = enumsort.asc;
                }else{
                    
                    if(sort == enumsort.asc){
                        sort = enumsort.desc;
                    }
                    else{ 
                         sort = enumsort.asc;
                        }
                }
            }
            this.getSort = function(){
                setSort();
                return sort;
            }
            this.toString = function(){
                return "Column id "+id+" type column "+type+" numbers rows [ "+values.length+" ]";
            };

    };

    Column.prototype ={
        getMaxValue:function(){
            return this.getMax();
        },
        getMin:function(){
            return val();
        },
        draw:function(value){},
        setColor:function(value){
            /*var corini = [255,255,217];
            var coffin = [8,29,88];
            var corinihsi = [];
            var corfinhsi = [];
            var template = "#FF0000";
            
            var iteracion = value;
            var color_actual = new Array(3)
            hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")

            diferencia = new Array(3)
            for (i=0;i<3;i++) 
                diferencia[i] = (coffin[i] - corini[i]) / passos;*/
            var passos = this.getMaxValue();
            var f = Math.round(value * 100) / passos;
            f = Math.round(f);
            //if(f==100) console.log('percent '+f+' div '+ f/99 +" passos "+passos +' valor original '+value)
            //console.log(f/this.getMinValue());
            //for(i=1;i<100;i++){
                var color =  HSIModel({hue: 3.90, sat: 1, inte:255},{hue: 0.8, sat: 1, inte:255},f/99); 
            //}
            
            /*for (i=0;i<3;i++)
                color_actual[i] = (iteracion * diferencia[i]) + corini[i];*/


            //var bg = convierteHexadecimal(Math.round(color_actual[0])) + convierteHexadecimal(Math.round(color_actual[1])) + convierteHexadecimal(Math.round(color_actual[2]));
            return color;
        }
    };


    function IntegerColumn(name,type){
        
        /**
         * 
        * [maxVal maximum get the max value of the column]
        * [minVal minimum get the min value of the column]
        */
        var maxVal=0;
        var minVal=Number.MAX_VALUE;
        var SetMax = function(max){
            maxVal = max > maxVal ? max:maxVal;
            minVal = max < minVal ? max:minVal;
        }

        this._parseData = function(data){
            var value = parseInt(data);
            SetMax(value);
            return value;
        };

        this.getMaxValue = function(){
            return maxVal;
        };

        this.getMinValue = function(){
            return minVal;
        };
        this.draw = function(value,id,h,fisheyes){
            var p = Math.floor((h*conf.datapadding)/conf.max_row_height);
            //console.log(value)
            var color = this.setColor(value);
            value = value*this.getwidth()/(maxVal);//formula of table lens
            // ctx.fillStyle=" rgb("+Math.round(color.red)+","+Math.round(color.green)+","+Math.round(color.blue)+")";
            ctx.fillStyle=" rgb(0,0,255)";
            // ctx3.fillStyle=" rgb(0,0,255)";
            if(fisheyes){
                    var fil = id-1;
                    barra = 1
            }
            else{
                var fil = ((h+p)*id +p/2)-(p+h);
                var barra = conf.heightBar/4;
            }
            if(h>7){                    
                ctx.fillRect(this.offset,fil,value,barra);
                //blur
                ctx.globalAlpha=0.2;
                ctx.fillRect(this.offset,fil,value,conf.heightBar); 
            }else{
                //fil = h*id;
                ctx.fillRect(this.offset,fil,value,h);
                // ctx3.fillRect(this.offset*2,fil,value,h);
        //      ctx.stroke();
            }
            return value;
        }
        Column.call(this, name,type);
    }
    IntegerColumn.prototype = Object.create(Column.prototype);
    IntegerColumn.prototype.constructor = IntegerColumn;
    function DoubleColumn(name,type){

    
        var maxVal=0;
        var minVal=Number.MAX_VALUE;
        var SetMax = function(max){
            maxVal = max > maxVal ? max:maxVal;
            minVal = max < minVal ? max:minVal;
        }
        this.getMaxValue = function(){
            return maxVal;
        };
        this.getMinValue = function(){
            return minVal;
        };
        this._parseData = function(data){
            var value = parseFloat(data);
            SetMax(value);
            return value;
        };
        this.draw = function(value,id,h,fisheyes){
            
            var p = Math.floor((h*conf.datapadding)/conf.max_row_height);
            var color = this.setColor(value);
            value = value*this.getwidth()/(maxVal);//formula of table lens
            //ctx.fillStyle="#"+color; 
            ctx.fillStyle="rgb(0,0,255)";
            // ctx3.fillStyle="rgb(0,0,255)";
            if(fisheyes){
                    var fil = id-1 ;
                    barra = 1
            }
            else{
                var fil = ((h+p)*id +p/2)-(p+h);
                var barra = conf.heightBar/4;
            }
            
            if(h>7){    
                
                ctx.fillRect(this.offset,fil,value,barra);
                //blur
                ctx.globalAlpha=0.2;
                ctx.fillRect(this.offset,fil,value,conf.heightBar); 
            }else{

            //  fil = h*id;
                ctx.fillRect(this.offset,fil,value,h);

                // ctx3.fillRect(this.offset*2,fil,value,h);
            }
            return value;
        }
            Column.call(this, name, type);
    }
    DoubleColumn.prototype = Object.create(Column.prototype);
    DoubleColumn.prototype.constructor = DoubleColumn;
    function StringColumn(name,type){
            var strdata =[];
            Column.apply(this,arguments);
            var maxVal=0;
            var minVal=Number.MAX_VALUE;
                var SetMax = function(max){
                    maxVal = max.length > maxVal ? max.length:maxVal;
                    minVal = max.length < minVal ? max.length:minVal;
                }
                this.getMaxValue = function(){
                    return maxVal.length;
                };
            this._parseData = function(data){
                strdata.push(data.toString().trim());
                SetMax(data);
                return   data.toString().trim();
            };
            this.getMinValue = function(){
                return minVal;
            };
            this.draw = function(value,id,h,fisheyes){
            //  console.log(value.search("a"));
                var p = Math.floor((h*conf.datapadding)/conf.max_row_height);
                value = value.length*this.getwidth()/(maxVal);//formula of table lens
                ctx.fillStyle=conf.color; 
                
                if(fisheyes){
                    var fil = id-1;
                            barra = 1
                }
                else{
                        var fil = ((h+p)*id +p/2)-(p+h);
                        var barra = conf.heightBar/4;
                }
                if(h>7){    
                    
                    ctx.fillRect(this.offset,fil,value,barra);
                    //blur
                    ctx.globalAlpha=0.2;
                    ctx.fillRect(this.offset,fil,value,conf.heightBar); 
                }else{

                //  fil = h*id;
                    
                    ctx.fillRect(this.offset,fil,value,h);
                }
                return value;
            }
            this.drawCompress = function(data){
                var c = Math.floor(Math.random() * data.length) - 1;
                c=c<0?0:c;
        }


            
    }

    StringColumn.prototype = Object.create(Column.prototype);
    StringColumn.prototype.constructor = StringColumn;
    function CategoricalColumn(name,type){
            Column.call(this,name,type);
            var category=new Object();
            var dtcat = [];
            var value;
            var colors =["#a6cee3",
                        "#1f78b4",
                        "#b2df8a",
                        "#33a02c",
                        "#fb9a99",
                        "#e31a1c",
                        "#fdbf6f",
                        "#ff7f00",
                        "#cab2d6",
                        "#6a3d9a",
                        "#ffff99",
                        "#b15928",
                        "#FF00FF",
                        "#000040",
                        "#400080",
                        "#FF80FF",
                        "#80FFFF",
                        "#EACEF4",
                        "#FBC50B",
                        "#808000",
                        "#027D55",
                        "#6F3700",
                        "#C0C0C0",
                        "#000000",
                        "#A67A39"]
            /* ["rgb(255, 0, 0)",
                        "rgb(0, 255, 0)",
                        "rgb(128, 128, 128)",
                        "rgb(255, 0, 255)",
                        "rgb(0,0, 255)",
                        "rgb(0, 255, 255)"
                        ,"rgb(255, 200, 0)"
                        ,"rgb(127, 127, 255)"
                        ,"rgb(102, 0, 102)"
                        ,"rgb(204, 102, 0)"
                        ,"rgb(0, 153, 204)"
                        ,"rgb(0, 51, 0)"
                        ,"rgb(102, 51, 0)",
                        "#FF00FF",
                        "#000040",
                        "#400080",
                        "#FF80FF",
                        "#80FFFF",
                        "#EACEF4",
                        "#FBC50B",
                        "#808000",
                        "#027D55",
                        "#6F3700",
                        "#C0C0C0",
                        "#000000",
                        "#A67A39"
                        ]*/
            this._parseData = function(data){

                if(category.hasOwnProperty(data.toString().trim())==false)
                    {
                        var activeColor = true;
                        var c = Math.floor(Math.random() * colors.length - 1);

                        color = colors.splice(c,1);
                        category[data.toString().trim()]=color[0];
                        var c= data.toString().trim();
                        dtcat.push(data.toString().trim());
                    }
                return  data.toString().trim();
            };
        this.draw = function(val,id,h,fisheyes,span){
            var p = Math.floor((h*conf.datapadding)/conf.max_row_height);
            value = this.getwidth()+this.padding;
                if(fisheyes){
                    var fil = id-1 ;
                            barra = 1
                }
                else{
                        var fil = ((h+p)*id +p/2)-(p+h);
                        var barra = conf.heightBar/4;
                }
            
            ctx.fillStyle= category[val];
            var categoryspace = Math.ceil((this.getwidth()+this.padding)/dtcat.length);
            
            if(h>7){

                ctx.fillRect(this.offset,fil,value,barra);
                //blur
                ctx.globalAlpha=0.2;
                ctx.fillRect(this.offset,fil,value,conf.heightBar); 
            }else{
                var idof = dtcat.indexOf(val);
                var p = (idof>0)?categoryspace*idof:0;
                fil = h*id;
                ctx.fillRect(this.offset+p,fil,categoryspace,h);
            }
            // span.style.width = categoryspace+"px";
            // span.style.left = p+"%";     
        };

        this.getDataCompress = function(row){
            return dtcat;
        };

        this.getColor = function(group){
            return category[group];
        };

        this.getMinValue = function(){
                return "Categorica Column";
        };
        this.drawCompress = function(data,id){
                var c = Math.floor(Math.random() * data.length) - 1;
                c=c<0?0:c;
                console.log(category[data[c].getValue()]);
        }

    }
    CategoricalColumn.prototype = Object.create(Column.prototype);
    CategoricalColumn.prototype.constructor = CategoricalColumn;
    /**
     * [Row class for to describe of row of Table Lens ]
     * 
     */

    var Row = function(data,id){
        var self = this;
        var hight = 1;
        var id = id || id++;
        var data = data || [];
        var eyes = false;
        this.ele = document.createElement("tr");
        this.ele.style.height = "1px";
        this.getData = function(){
            return data;
        }
        this.setHeight = function(h){
            hight = h;
        };
        this.getIndex = function(){
            return id;
        }
        this.getHeight = function(){
            return hight;
        };
        this.fEyes = function(value){
            eyes = true;
        };
        this.getFeyes = function(){
            return eyes;
        }
        this.setId = function(index){
            id = index;
        }
        this.setDataValueIndex = function(index){
            for (var i = 0; i < data.length; i++) {
                data[i].setIndex(index)
            }
        }
        function dataValue(){
            for (var i = 0, len = data.length;i<len;i++){
                var td = document.createElement("td");
                self.ele_td.push(td);
            }
        }
    };

    var DataValue = function(id, column, value){

        var id = id;
        var sid = id;
        var r = id;
        var column = column;
        var padding = 10;
        var feyes = false;
        var _value = value;
        //this.ele = document.createElement("td");
        //this.ele.style.lineHeight ="1px";
        //this.ele.style.width = "1px";
        //this.ele.innerText = value;
        //this.ele.className = "onepixel";
        //this.span = document.createElement("span");
        
        //this.ele.appendChild(this.span)
        /**
         * [value data value of column]
         * @type {[Type data Value]}
         */
        var value = column._parseData(value);

        this.draw = function(h,row,hi){
            
            var p = Math.floor((h*conf.datapadding)/conf.max_row_height); 
            if(hi==15){
                h=15;
            }
            
            //draw value of each column
            
            
            //calculate de value of column IntegerColumn,StringColumn,CategoricalColumn,DoubleColumn,SoundString,DISTANCESTRING
                
                var val = column.draw(value,id,h,feyes,this.span);
                //this.span.style.height ="1px";
                //this.span.style.width = val+"px";
            if(h>7){
                
                ctx.fillStyle=conf.colorTextLetter;
                //var fil = (h+p)*id;//variable for to draw the line down of column
                if(feyes){
                        var fil = id + h - 4;
                }else{
                    var fil = (h+p)*id;//variable for to draw the line down of column   
                }
                
                ctx.fillRect(column.offset,fil+p/2,column.getwidth()+padding,1);
                    //draw String of column value 
                ctx.globalAlpha=1;
                ctx.font = h+"px Arial";    
                ctx.fillText(value,column.offset+conf.datapadding/2,fil,column.getwidth());
                
            }
                //ctx.restore();
        };
        this.setId = function(row){
            id = row;

        };
        this.feyes =function    (value){
                feyes = value;
        };
        this.getIdr = function(){
            return r;
        };
        this.getFeyes = function    (){
            return feyes;
        };

        this.getIndexOut = function(){
            return sid;
        };

        this.drawCompressed = function(data,id){
            var i = 0;
            var len = data.length;
            var op = 1/len;
            var vl;
            var avg=-1;//average variabel
            var  pmax=0,pmin=0,pmid=0;//minimum, maximum and middle data value
            var dst=0;//standard deviation
            var max=0,min=Number.MAX_VALUE,mid=0;
            var vlsum=0;
            //var column = data[0].getColumn();
            op = (op<0.25)?0.25:op;
            
            for (; i < len; i++) {

                vl=data[i].getValue();
                vlsum+=vl;
                //console.log(vl+" "+id );
                if(column instanceof IntegerColumn || column instanceof DoubleColumn ){
                    avg+=vl; //getting the media value
                    
                    if(vl>max){

                        //getting the maximum data
                        max=vl;
                        pmax=i;
                    }
                    if(vl<min){
                        //getting the minimum data value
                        min=vl;
                        pmin=i;
                    }
                    if(vl>min && vl<max){
                        //getting the middle data value
                        mid=vl;
                        pmid=i;
                    }
                }

                
            }
            //draw the value for
            if(column instanceof CategoricalColumn || column instanceof StringColumn){
                var c = Math.floor(Math.random() * data.length) - 1;
                c=c<0?0:c;
                
                column.draw(data[c].getValue(),id,1);
            }
            
            //draw the value for 
            if(column instanceof IntegerColumn || column instanceof DoubleColumn ){
                avg/=len;//calculate average
                //the max, midlle and min value
                var vlmax = (data[pmax].getValue() * column.getwidth())/column.getMaxValue();
                var vlmin = (data[pmin].getValue() * column.getwidth())/column.getMaxValue();
                var vlmid = (mid>0)?(data[pmax].getValue() * column.getwidth())/column.getMaxValue():mid;
                //console.log(avg);
                i=len-1;
                //draw the image 
                var x2 = column.offset + vlmax,  
                    y2 = id;
                    var grad = ctx.createLinearGradient(column.offset,id,x2,y2);
                
                //var grad= ctx.createLinearGradient(0,0,x2,y2);
                //getting the variance -
                for (; i >= 0; i--) {
                    vl=data[i].getValue();
                    //console.log(vl);
                    var color = column.setColor(vl);
                    color = color.color;
                    
                    var valor = parseInt(i) / 1 ;
                    var div = 1 / (i+1);
                    grad.addColorStop(div," rgb("+Math.round(color.red)+","+Math.round(color.green)+","+Math.round(color.blue)+")");

                    dst += Math.pow((vl-avg),2)

                }
                //grad.addColorStop(1, "red");
                //grad.addColorStop(0, "black");
                
                dst = Math.sqrt(dst/len);
                //vl = (vl * column.getwidth())/column.getMaxValue();
                
                
                var dstpos = (dst * column.getwidth())/column.getMaxValue();
                
                //
                //ctx.globalCompositeOperation ="source-over";
                var v = vlsum/len;
                v =(v * column.getwidth())/column.getMaxValue();
                //column.draw(dstpos,id,1);
                ctx.fillStyle=grad;
                ctx.fillRect(column.offset,id,vlmax,1);
/*
                conf.color="red"
                ctx.fillStyle=conf.color;
                ctx.fillRect(column.offset+dstpos+3,id,1,1);
                */
                
            }
        
            
        }
        
        this.getIndex = function(){
            return id;
        }
        this.setValue = function(data){
            value = data; 
        };
        this.getString = function(){
            return value;
        };
        this.setIndex = function(nid){
            id = nid;
        }
        this.getValue = function(){
            return value;
        }
        this.toString = function(){
            return "Data value id {"+id+"} value {"+value+"} belong to column [" +column.toString()+"] ";
        }
        this.getColumn = function(){
            return column;
        }
    }

    /**
     * [Log Record the log of system]
     * @type {Object}
     */
    var Log = {
        info:[],
        error:[],
        ad:[],
        addLog:function(log,type){
            if(type === "i")
                this.info.push(log);
            if(type === "e")
                this.error.push(log);
            if(type === "a")
                this.ad.push(log);
        }
    };

    

    function canvasclick(evt){
        //if(Math.abs(TbLens.getRowHeight())==1) 
            TbLens.fishEyes(evt.offsetY)
    }

    /**
     * [Septup BarraRoll setup the roll bar]
     * @param  {Integer} max [describe the number row draw]
     * @return {[type]}     [description]
     */
    var barraRoll ={
         barra:null,
         mimtop:30,
         maxbottom:30,
         minheight:10,
         moveto:0,
         pos:0,
         h:0,
         ant:mrow,
         countclick:0,
         row:0,
     setup:function(maxrow,rdraw){
            
            if(maxrow!=null) this.row=maxrow;
            this.barra=TableLensUtil.ById("barra")
            
            this.barra.addEventListener("mousedown",this.mousedown,true);
            this.barra.addEventListener("mouseup",this.mouseup);
            this.barra.addEventListener("mouseleave",this.mouseleave);
            document.getElementById("rolagem").addEventListener("mouseup",this.mouseup,true);
            document.getElementById("rolagem").addEventListener("mousemove",this.mousemove);
            document.getElementById("rolagem").addEventListener("mousedown",this.mousedown);
            document.getElementById("rolagem").addEventListener("mouseleave",this.mouseleave);
            this.barra.style.top =this.mimtop+"px";
            this.pos =this.mimtop;
            this.maxbottom = this.barra.parentNode.clientHeight - this.barra.nextElementSibling.clientHeight;
            var heigh = this.barra.parentNode.clientHeight - this.barra.nextElementSibling.clientHeight-this.barra.previousElementSibling.clientHeight;
            this.moveto = Math.round(maxrow/rdraw);
            this.h = (rdraw * heigh) / this.row;

            //console.log(maxrow,rdraw,this.moveto);
            //console.log(this.maxbottom+" "+rdraw+" "+heigh);
            this.barra.style.height = this.h+"px";
        },
      down:function(roll){

        if(this.pos < this.maxbottom){
            
            this.countclick+=roll;
            console.log(this.moveto,this.countclick);
            //console.log(this.countclick +" "+this.moveto);
            if(this.countclick>this.moveto){
                this.countclick=0;
                this.pos+=roll;
                this.barra.style.top =this.pos+"px";
                //console.log(this.barra.style.top);
            }
        }
      },
      up:function(roll){
        if(this.pos>this.mimtop){
            this.countclick+=roll;
            if(this.countclick>this.moveto){
                this.countclick=0;
                this.pos-=roll;
                this.barra.style.top =this.pos+"px";
            }
        }
      },
      roll:function(roll){
        if(TbLens.letRoll()){
            console.log("S");
            if(this.ant<mrow){
                this.down(roll);
            }else{
                this.up(roll);
            }
            this.ant=mrow;
            return true;
        }else{
            
            return false;
        }
      },
      mousedown:function(evt){
            
            this.statey = evt.clientY;
            this.down = true;
        
      },
      mouseup:function(evt){
        this.down = false;
        
      },
      mouseleave:function(evt){
        this.down = false;
      },
      mousemove:function(evt){
        if(TbLens.letRoll()){
            if(this.down){
                this.nstatey = evt.clientY;
                if((this.nstatey - this.statey) > 0){
                    var roll = Math.abs(this.nstatey - this.statey);
                    mrow = mrow+roll > 0? mrow+roll:0;
                    console.log(mrow);
                    barraRoll.roll(roll);
                }else{
                    var roll = Math.abs(this.nstatey - this.statey);
                        mrow = mrow-roll>0? mrow-roll:0;
                        console.log(mrow);
                        barraRoll.roll(roll);
                }

                TbLens.rolagem();
                this.statey = this.nstatey;
            }
          }else{
            return false;
          }
        }
    };

    

    var TableLensUtil = {
        
        measureText:function (text) {
            
            var control= (this.ById("tbmeasure")==null)? this.createElement("span"):this.ById("tbmeasure");
            document.body.appendChild(control);
            control.setAttribute("id","tbmeasure");
            control.style.display = "inline";
            control.style.visibility ="hidden";
            control.textContent = text;
            data = {
                    height: control.offsetHeight,
                    width: control.offsetWidth
                };

                return data;
        },
        createElement: function (ele){
            return document.createElement(ele);
        },
        ById: function (id){
            return document.getElementById(id);
        }
    }


        
});

/**
 * [This is a class that represent the coluns of the Table Lens]
 * @return {column} []

TableLens.prototype.column = function() {
            console.log("Estoy");
} */