﻿
var strGobalTable = '';
var strCurListCols = '';
var listObjectStr = '';
var uofx = 0;
var __ParserSpaces = {
    self: [],
    strTable: '',
    objTemp: {},
    countI: 0,
    init: function (listObjectSpaces) { this.self = listObjectSpaces },
    Parser: async function () {
        this.strTable = '';
        //await this.ParserCreateDB();
        //await this.ParserObjectJsSpace();

        var testMd5 = md5("123456");
        console.log(testMd5);
        console.log(this.self.length);

        //---------------------------------------------------
        //add data test
        //await this.PushDataTEST();
        //-------------------------------------------------
        //loading js to App
        reloadJs('/js/htmlControl/AdminGroup/Seller/Business/htmlCtrlJs/Business.js');

        console.log(_gbSubDictionary);

        $("#divGrid2").html('');
        $("#gc_MainForm2").html('');
        //_gbApp.init();
        _gbApp.reset();
        _gbApp._curMainOjectName = "Business";
        sessionStorage["groupUser"] = _gbApp._curMainOjectName;

        window.location.href = window.location + 'Home/Privacy?p=' + _gbApp._curMainOjectName;

        _gbApp.add(_gbApp._curMainOjectName, _gbSubDictionary[_gbApp._curMainOjectName]);
        console.log(_gbLanguageI18[_gbApp._curMainOjectName].UIname["vn"] + _gbLanguageI18[_gbApp._curMainOjectName].UIname["en"]);
        $('#TitlePage').html("/" + _gbLanguageI18[_gbApp._curMainOjectName].UIname["vn"]);


        await _gbApp.run($("#divGrid2"), $("#gc_MainForm2")).then(function () {
            //_gbCaches.saveToLocal();

        }
        );

        await this.LoadcomponentHeader($("#gc_MainForm2"));

        //__StackBag._$HeaderSelf = $divInner3;
        __StackBag._ObjName = _gbApp._curMainOjectName;
        __StackBag.initStackInfo(_gbSubDictionary[_gbApp._curMainOjectName]._fieldsList);
        __StackBag._ReportHeader.id = "Business_HeaderReceiptPrinter";
        __StackBag._ReportHeader.params[0] = "HD-00827938";
        __StackBag._ReportHeader.params[1] = new Date().toISOString();

        __StackBag._attachReportHeader($("#gc_MainForm2"));
        getRQcode("qrcode", "17829");

        console.log(__StackBag._createTable($("#gc_MainForm2")));
        __StackBag._totalAll.indexs = [];
        var sqlRequest = _gbSubDictionary[_gbApp._curMainOjectName]._listSelfTables[0];
        await _gbAjax.postN2(sqlRequest).then(function (data) {
            console.log(data);
            __StackBag.plushDataTable(data.records);
        });

        reloadJs('/js/htmlControl/AdminGroup/Seller/OrderDetail/htmlCtrlJs/OrderDetail.js');

        __StackBag._ObjName = "OrderDetail";
        __StackBag.initStackInfo(_gbSubDictionary["OrderDetail"]._fieldsReport);
        $("#OrderDetail_HeaderReport").html($("#OrderDetail_HeaderReport").html().format(new Date().toISOString(), new Date().toISOString()));
        $("#OrderDetail_HeaderReport").appendTo($("#gc_MainForm2"));
        console.log(__StackBag._createTable($("#gc_MainForm2")));
        __StackBag._totalAll.indexs[0] = 7;
        __StackBag._totalAll.indexs[1] = 8;
        var sqlRequest = _gbSubDictionary["OrderDetail"]._listSelfTables[0];
        sqlRequest.AjaxObj._f = __StackBag.getStrFields();
        await _gbAjax.postN2(sqlRequest).then(function (data) {
            console.log(data);
            __StackBag.plushDataTable(data.records);
        });

        //test for sql
        __StackBag._ObjName = "OrderDetail";
        __StackBag.initStackInfo(_gbSubDictionary["OrderDetail"]._fieldsList);
        __StackBag.plushDataToDB(__StackBag._arrRecords[0]);

        sqlRequest = __StackBag.getInsertDataRequest('AppCoreDb');
        await _gbAjax.postN2(sqlRequest).then(function (data) {
            console.log(data);

        });


        sqlRequest = __StackBag.getUpdateDataRequest('AppCoreDb', { Id: 5 });
        await _gbAjax.postN2(sqlRequest).then(function (data) {
            console.log(data);

        });

        sqlRequest = __StackBag.getDeleteDataRequest('AppCoreDb', { Id: 6 });
        await _gbAjax.postN2(sqlRequest).then(function (data) {
            console.log(data);

        });

        await this.SavetoJsFile("Business", $("#divGrid2").html(), '_grid.html');
        await this.SavetoJsFile("Business", $("#gc_MainForm2").html(), '_form.html');


    },
    LoadcomponentHeader: async function ($Container) {
        $('#bock_inner_HeaderReport').remove();
        var $divInner3 = $('<div></div>')
            .addClass('form-control')
            .attr('id', 'bock_inner_HeaderReport')
            .attr('style', 'display: none');

        $divInner3.html(await fetchHtmlAsText("/js/htmlControl/HeaderReportTemplate.html"));
        $divInner3.appendTo($Container);
    },
    SavetoDb: async function (strTable) {
        var sqlRequest = {
            AjaxObj:
            {
                a: "SQL",
                sql: strTable,
                ReloadModel: false,
                noquery: true,
                ModelDb: "AppCoreDb",
                jSonFormat: "1"
            },
            APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
        };
        await _gbAjax.postN2(sqlRequest).then(function (data) {
            console.log(data);
        });
    },
    SavetoJsFile: async function (objName, obj, type = '.js') {
        var Request = {
            CreateNewObjectJS: true,
            ParentGroup: "AdminGroup",
            subGroup: "Seller",
            htmlControl: "htmlControl",
            htmlCtrlJs: "htmlCtrlJs",

            selfKey: objName,

            fileJSName: objName + type,
            fileJSContent: "attach",

            AjaxObj: { CreateNewObjectJS: true, ModelDb: "CanteenDb" }
        };
        await _gbAjax.postN3(Request, obj).then(function () {
            console.log("Write a file to server!");
        });
    },
    ParserCreateDB: async function () {

        for (uofx = 0; uofx < this.self.length; uofx++) {
            this.objTemp = this.self[uofx].object;

            await this._Parse1ObjectDB(this.objTemp).then(function (data) {
                console.log("Catch data from parser:\r\n" + data);
                strGobalTable += data;// biến toàn cục mới thay đổi được
            });

            // test flush file 
            //await this.SavetoJsFile(this.objTemp.objID.self, strGobalTable).then(function (data) {

            //});
        }
        //
        //await console.log(strGobalTable);
        //this.SavetoDb(strTable);
    },

    ParserObjectJsSpace: async function () {

        for (this.countI = 0; this.countI < this.self.length; this.countI++) {

            this.resetParser1Object();//reset for orther object
            var objTemp = this.self[this.countI].object;

            await this._Parse1ObjectJS(objTemp, true).then(function (data) {
                console.log("Catch data from parser:\r\n" + data);
                strGobalTable = data;// biến toàn cục mới thay đổi được
                // test flush file 
                listObjectStr = '';// reset string


            });
            await this.SavetoJsFile(objTemp.objID.self, strGobalTable, ".js").then(function (data) {

            });

        }
    },
    getObectbyName: function (name) {
        var retVal = {};
        for (var i = 0; i < this.self.length; i++) {
            var objTemp = this.self[i].object;
            if (name === objTemp.objID.self) {
                return this.self[i].object;
            }
        }
        return retVal;
    },
    resetParser1Object: function () {
        for (var i = 0; i < this.self.length; i++) {
            this.self[i].object.isParsered = false;
        }
    },
    ParserObjectLanguage: function () { },
    ParserObjectReportJs: function () { },
    ParserObjectSelfRender: function () { },
    ParserObjectUtility: function () { },
    ParserObjectHtml: function () { },
    _Parse1ObjectDB: async function (obj) {
        var tableName = obj.objID.self;
        var columns = obj.columns;
        var SQLtype = obj.SQLtype;
        var strCol = '';
        var strColView = '';
        for (var i = 0; i < columns.length; i++) {
            var column = columns[i];
            strCol += __parserUtility.parse1Column(column, SQLtype);
            if (i < columns.length - 1)
                strCol += ",\r\n";

            //-------------------------
            strColView += column.self;
            if (i < columns.length - 1)
                strColView += ",";
        }
        strCurListCols = strColView;
        //create table data
        var strTableDrop = "IF OBJECT_ID(N'" + tableName + "', N'U') IS NOT NULL DROP TABLE  " + tableName + "; \r\n";
        var strTable = "CREATE TABLE " + tableName + " (\r\n" + strCol + "\r\n);\r\n  \r\n";
        var strViewDrop = "IF OBJECT_ID(N'zgcl_" + tableName + "00', N'V') IS NOT NULL DROP  VIEW  zgcl_" + tableName + "00; \r\n";
        var strView = "CREATE VIEW  zgcl_" + tableName + "00 AS   \r\n SELECT " + strColView + " FROM " + tableName + "\r\n ; \r\n";

        await this.SavetoDb(strViewDrop);
        await this.SavetoDb(strTableDrop + strTable);
        await this.SavetoDb(strView);
        //test log
        return strTableDrop + strTable;

    },
    _Parse1ObjectJS: async function (obj, flagChild) {

        //--------------------------------------------------
        //parser here

        //---------------------------------
        var tableName = obj.objID.self;
        var columns = obj.columns;
        var SQLtype = obj.SQLtype;
        var ModelDb = obj.ModelDb;
        var LanguageShow = obj.LanguageShow;

        var subScope = '\t{0} : {\r\n'.format(tableName);;
        subScope += '\t\t_rightOnTable: { },\r\n';
        subScope += '\t\t_titleName: "{0}",\r\n'.format(tableName);
        subScope += '\t\t_id: "{0}",\r\n'.format(tableName);

        var listRefTable = __parserUtility.parserRefTable(obj);

        subScope += '\t\t_className: "display",\r\n';

        subScope += '\t\t_listReports: [{}],\r\n';


        var strCol = '';
        var strColSearch = '';
        var strForm = '';
        var strColView = '';
        var ui = 0;
        for (var i = 0; i < columns.length; i++) {
            var column = columns[i];
            //strCols: strCols, strSearch:strSearch}
            var objRet = __parserUtility.parse1ColumnJS(i, column, SQLtype, LanguageShow, listRefTable);
            strCol += objRet.strCols;
            strColSearch += objRet.strSearch;

            if (i < columns.length - 1) {
                strCol += ",\r\n";
                strColSearch += ",\r\n";
            }

            //-------------------------
            //-------------------------
            //list col ngăn cách bằng dấu phẩy
            strColView += column.self;
            if (i < columns.length - 1)
                strColView += ",";
            //------------------------
            //tự động sinh form cứ 2 field vào 1 row
            if (ui < columns.length - 1)
                strForm += '\t\t\t{ row: [{0}, {1}], style: [".col-md-2", ".col-md-4"] }'.format(ui, ui + 1);
            else if (ui < columns.length)
                strForm += '\t\t\t{ row: [{0}], style: [".col-md-2"] }'.format(ui);

            if (ui < columns.length - 1)
                strForm += ",\r\n";
            ui += 2;
        }

        var strListSelfTable = __parserUtility.parserSelfTable(tableName, strColView, ModelDb);
        subScope += '\t\t_listSelfTables: [\r\n{0}\r\n\t\t],\r\n'.format(strListSelfTable);


        subScope += '\t\t_listRefTables: [\r\n{0}\r\n\t\t],\r\n'.format(__parserUtility.getListRefStr(listRefTable));

        subScope += '\t\t_fieldsList: [\r\n{0}\r\n\t\t],\r\n'.format(strCol);
        subScope += '\t\t_fieldsReport: [\r\n{0}\r\n\t\t],\r\n'.format(strCol);

        subScope += '\t\t_fieldsSearch: [\r\n{0}\r\n\t\t],\r\n'.format(strColSearch);

        subScope += '\t\t_editform: [\r\n{0}\r\n\t\t],\r\n'.format(strForm);
        subScope += '\t\t_searchform: [\r\n{0}\r\n\t\t],\r\n'.format(strForm);
        subScope += '\t\t_updateform: [\r\n{0}\r\n\t\t],\r\n'.format(strForm);


        subScope += '\t},\r\n';

        listObjectStr += subScope;
        //for ngắt đệ quy và lặp vòng
        this.getObectbyName(tableName).isParsered = true;

        //---------------------------------------------
        // quét đệ qui các đối tượng reference
        //chỉ quết 1 cấp
        if (flagChild === true) {
            for (i = 0; i < obj.refObjects.length; i++) {
                var refObj = obj.refObjects[i];
                //{ colum: "BusinessID", refObject: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] }

                var refObjName = refObj.refObjects;
                var objNew = this.getObectbyName(refObjName);

                console.log(refObjName + "<===" + obj.objID.self);
                this._Parse1ObjectJS(objNew, false);
            }
            // quét đệ qui các đối tượng connectionObject
            //chỉ quết 1 cấp

            for (i = 0; i < obj.connectionObject.length; i++) {
                var refConectObj = obj.connectionObject[i];
                //{ colum: "BusinessID", refObject: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] }

                var connectOBj = refConectObj.connectOBj;
                var objNew2 = this.getObectbyName(connectOBj);

                console.log(connectOBj + "<===" + obj.objID.self);

                this._Parse1ObjectJS(objNew2, false);
            }
        }
        //connectionObject
        //---------------------------------------------
        if (flagChild) {
            var scope = 'var _gbSubDictionary = {\r\n';//.format(this._ObjName);
            scope += listObjectStr;
            scope += '\r\n};';
            return scope;
        }

    },
    _Parse1Objecthtml: async function (obj) { },
    PushDataTEST: async function () {
        //gọi đệ quy tạo data cho các đối tượng ref
        for (this.countI = 0; this.countI < this.self.length; this.countI++) {
            var objTemp = this.self[this.countI].object;


            await this.PushDataTEST1Object(objTemp, true).then(function (data) {
                console.log("Catch data from parser:\r\n");
                //strGobalTable = data;// biến toàn cục mới thay đổi được
                // test flush file 
                listObjectStr = '';// reset string

            });


        }
    },
    PushDataTEST1Object: async function (obj, flagParent) {
        //
        // quét đệ qui các đối tượng reference
        if (this.getObectbyName(obj.objID.self).NumRowsTEST.isScan === false) {
            this.getObectbyName(obj.objID.self).NumRowsTEST.isScan = true;
            for (i = 0; i < obj.refObjects.length; i++) {
                var refObj = obj.refObjects[i];
                //{ colum: "BusinessID", refObject: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] }

                var refObjectName = refObj.refObjects;
                console.log(refObjectName + "<===" + obj.objID.self);
                if (this.getObectbyName(refObjectName).NumRowsTEST.isCreated === false) {
                    this.PushDataTEST1Object(this.getObectbyName(refObjectName), false);
                }
            }
        }
        //this.PushDataTEST1Object()
        // Tiến hành add dữ liệu và store flag đã tạo dữ liệu

        if (obj.NumRowsTEST.isCreated === false) {
            var NumRowsTEST = obj.NumRowsTEST;
            var numRows = NumRowsTEST.numRows;
            // tạo numRows lệnh insert
            var tableName = obj.objID.self;
            var columns = obj.columns;
            var SQLtype = obj.SQLtype;
            var ModelDb = obj.ModelDb;

            //Bạn dùng 1 stack để load dữ liệu và có thể hiệu chỉnh dữ liệu cho từng object
            //sao cho chúng gần giống nhất cấu trúc như sau:
            //{
            // fieldname: {self:"", format:"" , type:""}
            //}
            for (var u = 0; u < numRows; u++) {
                var stackData = {};
                var strInsert = 'INSERT INTO {0} ({1}) VALUES ({2});';
                var strCondition = '';
                var strColView = '';

                var data = '';
                for (var i = 0; i < columns.length; i++) {
                    var column = columns[i];
                    //-------------------------
                    //list col ngăn cách bằng dấu phẩy
                    if (column.self.toUpperCase() === "ID")
                        ;// by pass ID
                    else {
                        strColView += column.self;
                        stackData[column.self] = {};
                    }
                    if (i > 0)
                        if (i < columns.length - 1)
                            strColView += ",";
                    //put to stack

                    //-----------------------------------------------
                    //kiểu dữ liệu
                    var type = column.type.self;
                    var datavalue;
                    if (type === "string") {
                        datavalue = __DataTEST.getGenStr(getRandomInt(3, 8));

                        //tiến hành parser theo schema ví dụ Services, User nằm trong group
                        if (column.self.toUpperCase().includes("PHONE"))
                            datavalue = __DataTEST.getPhone();
                        else if (column.self.toUpperCase() === "NAME") {
                            //find trong dictionary ==> có thì lấy không có thì lấy thông tin chung
                            var objFind = __DataTEST.dictionary[tableName];

                            if (typeof (objFind) === "object") {
                                var objFindName = objFind[column.self];
                                if (typeof (objFindName) === "object")
                                    datavalue = objFindName[getRandomInt(0, objFindName.length - 1)];
                                else
                                    datavalue = __DataTEST.getPersonName();
                            }
                            else
                                datavalue = __DataTEST.getPersonName();
                        }
                        else if (column.self.toUpperCase() === ("CODE")) {
                            //find trong dictionary ==> có thì lấy không có thì lấy thông tin chung
                            datavalue = __DataTEST.dictionary[tableName];

                            if (typeof (objFind) === "object") {
                                var objFindName = objFind[column.self];
                                if (typeof (objFindName) === "object")
                                    datavalue = objFindName[getRandomInt(0, objFindName.length - 1)];
                                else
                                    datavalue = __DataTEST.getPersonName();
                            }
                            else
                                datavalue = __DataTEST.getPersonName();
                        }
                        else if (column.self.toUpperCase().includes("EMAIL"))
                            datavalue = __DataTEST.getEmail()
                        else if (column.self.toUpperCase().includes("PASSWORD"))
                            datavalue = md5('123456');
                        else if (column.self.toUpperCase().includes("USERNAME"))
                            datavalue = __DataTEST.getAccountByName();
                        else if (column.self.toUpperCase().includes("PASSCODE"))
                            datavalue = __DataTEST.getPassCode();
                        else if (column.self.toUpperCase().includes("BIRTHDAY"))
                            datavalue = __DataTEST.getBirthday();
                        else if (column.self.toUpperCase().includes("ISPARTFULL"))//getBirthday
                            datavalue = __DataTEST.getisPartFull();//"1-1-2-2901";
                        data += "N'{0}'".format(datavalue);
                        //push to stack
                        stackData[column.self]["self"] = datavalue;
                        stackData[column.self]["format"] = "N'{0}'".format(datavalue);
                        stackData[column.self]["type"] = type;

                    }
                    else if ((type === "int") || type === "bigint") {
                        if (column.self.toUpperCase() === "ID")
                            ;// by pass ID
                        else {
                            var valstore = 0;
                            if (column.self.toUpperCase().includes("ISVALID") || column.self.toUpperCase().includes("ISACTIVE"))
                                datavalue = getRandomInt(0, 1);
                            else
                                datavalue = getRandomInt(0, 50);

                            //find ref to orther table
                            // quét đệ qui các đối tượng reference
                            for (m = 0; m < obj.refObjects.length; m++) {
                                var refObjSub = obj.refObjects[m];
                                //{ colum: "BusinessID", refObject: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] }

                                var refName = refObjSub.refObjects;
                                if (refObjSub.colum === column.self) {

                                    datavalue = getRandomInt(0, this.getObectbyName(refName).NumRowsTEST.numRows);
                                }
                                //this._Parse1ObjectJS(this.getObectbyName(refObject), false);
                            }
                            data += datavalue;
                            //push to stack
                            stackData[column.self]["self"] = datavalue;
                            stackData[column.self]["format"] = "{0}".format(datavalue);
                            stackData[column.self]["type"] = type;
                        }
                    }
                    else if (type === "double") {
                        datavalue = getRandomDbl(1, 60);
                        data += datavalue
                        //push to stack
                        stackData[column.self]["self"] = datavalue;
                        stackData[column.self]["format"] = "{0}".format(datavalue);
                        stackData[column.self]["type"] = type;
                    }

                    else if (type === "datetime") {
                        datavalue = new Date().toISOString().slice(0, 19).replace('T', ' ');
                        data += "'{0}'".format(datavalue);
                        //push to stack
                        stackData[column.self]["self"] = datavalue;
                        stackData[column.self]["format"] = "'{0}'".format(datavalue);
                        stackData[column.self]["type"] = type;
                    }


                    //
                    if (i > 0)
                        if (i < columns.length - 1)
                            data += ",";
                }
                //process data for Order
                if (tableName === "OrderDetail") {
                    stackData.NumServices.self = getRandomInt(1, 6);
                    stackData.NumServices.format = "{0}".format(stackData.NumServices.self);

                    stackData.Coupon.self = __DataTEST.getCoupon6();
                    stackData.Coupon.format = "N'{0}'".format(stackData.Coupon.self);

                    stackData.TIP.self = getRandomDbl(1, 15);
                    stackData.TIP.format = "{0}".format(stackData.TIP.self);

                    stackData.Discount.self = getRandomDbl(1, 10);
                    stackData.Discount.format = "{0}".format(stackData.Discount.self);

                    stackData.Total.self = stackData.Price.self * stackData.NumServices.self + stackData.TIP.self - stackData.Discount.self;
                    stackData.Total.format = "{0}".format(stackData.Total.self);

                    datavalue = '';
                    for (i = 0; i < columns.length; i++) {
                        column = columns[i];
                        if (column.self.toUpperCase() === "ID")
                            ;// by pass ID
                        else {
                            datavalue += stackData[column.self].format + ",";
                        }
                    }
                    datavalue = datavalue.substring(0, datavalue.length - 1);
                    data = datavalue;
                }
                //end process
                else if (tableName === "Roles") {
                    stackData.Permission.self = __DataTEST.dictionary.GroupRights.Name[getRandomInt(0, __DataTEST.dictionary.GroupRights.Name.length - 1)];
                    stackData.Permission.format = "N'{0}'".format(stackData.Permission.self);

                    stackData.SubPermission.self = stackData.Permission.self;
                    stackData.SubPermission.format = "N'{0}'".format(stackData.SubPermission.self);

                    datavalue = '';
                    for (i = 0; i < columns.length; i++) {
                        column = columns[i];
                        if (column.self.toUpperCase() === "ID")
                            ;// by pass ID
                        else {
                            datavalue += stackData[column.self].format + ",";
                        }
                    }
                    datavalue = datavalue.substring(0, datavalue.length - 1);
                    data = datavalue;
                    //-------------------------------------------------
                    strCondition = 'IF NOT EXISTS(SELECT 1 FROM {0} WHERE {1} = {2}) '.format(tableName, "UserID", stackData.UserID.self);
                }
                //end process
                else if (tableName === "Staff") {
                    stackData.Code.self = stackData.Name.self;
                    stackData.Code.format = "N'{0}'".format(stackData.Code.self);

                    stackData.Email.self = __DataTEST.getAccountByNametoEmail(stackData.Name.self);
                    stackData.Email.format = "N'{0}'".format(stackData.Email.self);

                    stackData.Color.self = __DataTEST.getColor();
                    stackData.Color.format = "N'{0}'".format(stackData.Color.self);

                    datavalue = '';
                    for (i = 0; i < columns.length; i++) {
                        column = columns[i];
                        if (column.self.toUpperCase() === "ID")
                            ;// by pass ID
                        else {
                            datavalue += stackData[column.self].format + ",";
                        }
                    }
                    datavalue = datavalue.substring(0, datavalue.length - 1);
                    data = datavalue;
                }
                //end process
                else if (tableName === "Users") {

                    stackData.Email.self = __DataTEST.getAccountByNametoEmail(stackData.UserName.self);
                    stackData.Email.format = "N'{0}'".format(stackData.Email.self);

                    datavalue = '';
                    for (i = 0; i < columns.length; i++) {
                        column = columns[i];
                        if (column.self.toUpperCase() === "ID")
                            ;// by pass ID
                        else {
                            datavalue += stackData[column.self].format + ",";
                        }
                    }
                    datavalue = datavalue.substring(0, datavalue.length - 1);
                    data = datavalue;
                }
                //Languages
                else if (tableName === "Languages") {

                    stackData.FormName.self = stackData.Name.self;
                    stackData.FormName.format = "N'{0}'".format(stackData.FormName.self);

                    datavalue = '';
                    for (i = 0; i < columns.length; i++) {
                        column = columns[i];
                        if (column.self.toUpperCase() === "ID")
                            ;// by pass ID
                        else {
                            datavalue += stackData[column.self].format + ",";
                        }
                    }
                    datavalue = datavalue.substring(0, datavalue.length - 1);
                    data = datavalue;

                    //-------------------------------------------------
                    strCondition = "IF NOT EXISTS(SELECT 1 FROM {0} WHERE {1} = N'{2}') ".format(tableName, "Name", stackData.Name.self);

                }
                //CustomerType
                else if (tableName === "CustomerType") {


                    datavalue = '';
                    for (i = 0; i < columns.length; i++) {
                        column = columns[i];
                        if (column.self.toUpperCase() === "ID")
                            ;// by pass ID
                        else {
                            datavalue += stackData[column.self].format + ",";
                        }
                    }
                    datavalue = datavalue.substring(0, datavalue.length - 1);
                    data = datavalue;

                    //-------------------------------------------------
                    strCondition = "IF NOT EXISTS(SELECT 1 FROM {0} WHERE {1} = N'{2}' and BusinessID={3}) ".format(tableName, "Name", stackData.Name.self, stackData.BusinessID.self);

                }
                //Services
                else if (tableName === "Services") {

                    datavalue = '';
                    for (i = 0; i < columns.length; i++) {
                        column = columns[i];
                        if (column.self.toUpperCase() === "ID")
                            ;// by pass ID
                        else {
                            datavalue += stackData[column.self].format + ",";
                        }
                    }
                    datavalue = datavalue.substring(0, datavalue.length - 1);
                    data = datavalue;

                    //-------------------------------------------------
                    strCondition = "IF NOT EXISTS(SELECT 1 FROM {0} WHERE {1} = N'{2}' and BusinessID={3}) ".format(tableName, "Name", stackData.Name.self, stackData.BusinessID.self);

                }
                //GroupRights
                else if (tableName === "GroupRights") {
                    stackData.Code.self = stackData.Name.self;
                    stackData.Code.format = "N'{0}'".format(stackData.Code.self);

                    datavalue = '';
                    for (i = 0; i < columns.length; i++) {
                        column = columns[i];
                        if (column.self.toUpperCase() === "ID")
                            ;// by pass ID
                        else {
                            datavalue += stackData[column.self].format + ",";
                        }
                    }
                    datavalue = datavalue.substring(0, datavalue.length - 1);
                    data = datavalue;

                    //-------------------------------------------------
                    strCondition = "IF NOT EXISTS(SELECT 1 FROM {0} WHERE {1} = N'{2}') ".format(tableName, "Name", stackData.Name.self);

                }
                else if (tableName === "Department") {
                    stackData.Code.self = stackData.Name.self;
                    stackData.Code.format = "N'{0}'".format(stackData.Code.self);

                    datavalue = '';
                    for (i = 0; i < columns.length; i++) {
                        column = columns[i];
                        if (column.self.toUpperCase() === "ID")
                            ;// by pass ID
                        else {
                            datavalue += stackData[column.self].format + ",";
                        }
                    }
                    datavalue = datavalue.substring(0, datavalue.length - 1);
                    data = datavalue;

                    //-------------------------------------------------
                    strCondition = "IF NOT EXISTS(SELECT 1 FROM {0} WHERE {1} = N'{2}') ".format(tableName, "Name", stackData.Name.self);

                }
                //Categorys 
                else if (tableName === "Categorys") {
                    stackData.Code.self = stackData.Name.self;
                    stackData.Code.format = "N'{0}'".format(stackData.Code.self);

                    datavalue = '';
                    for (i = 0; i < columns.length; i++) {
                        column = columns[i];
                        if (column.self.toUpperCase() === "ID")
                            ;// by pass ID
                        else {
                            datavalue += stackData[column.self].format + ",";
                        }
                    }
                    datavalue = datavalue.substring(0, datavalue.length - 1);
                    data = datavalue;

                    //-------------------------------------------------
                    strCondition = "IF NOT EXISTS(SELECT 1 FROM {0} WHERE {1} = N'{2}') ".format(tableName, "Name", stackData.Name.self);

                }

                //Business
                else if (tableName === "Business") {

                    stackData.OpenTime.self = "8:00-17:00";
                    stackData.OpenTime.format = "N'{0}'".format(stackData.OpenTime.self);

                    datavalue = '';
                    for (i = 0; i < columns.length; i++) {
                        column = columns[i];
                        if (column.self.toUpperCase() === "ID")
                            ;// by pass ID
                        else {
                            datavalue += stackData[column.self].format + ",";
                        }
                    }
                    datavalue = datavalue.substring(0, datavalue.length - 1);
                    data = datavalue;
                }
                //Customers
                else if (tableName === "Customers") {

                    stackData.Email.self = __DataTEST.getAccountByNametoEmail(stackData.Name.self);
                    stackData.Email.format = "N'{0}'".format(stackData.Email.self);

                    stackData.LifeTimePoint.self = '12 months';
                    stackData.LifeTimePoint.format = "N'{0}'".format(stackData.LifeTimePoint.self);

                    stackData.CurrentPoint.self = '{0} points'.format(getRandomInt(1, 20));
                    stackData.CurrentPoint.format = "N'{0}'".format(stackData.CurrentPoint.self);

                    stackData.SMSSent.self = '{0} SMS'.format(getRandomInt(1, 20));
                    stackData.SMSSent.format = "N'{0}'".format(stackData.SMSSent.self);

                    stackData.EmailSent.self = '{0} emails'.format(getRandomInt(1, 20));
                    stackData.EmailSent.format = "N'{0}'".format(stackData.EmailSent.self);

                    stackData.AnniversaryDay.self = __DataTEST.getBirthday();
                    stackData.AnniversaryDay.format = "N'{0}'".format(stackData.AnniversaryDay.self);

                    datavalue = '';
                    for (i = 0; i < columns.length; i++) {
                        column = columns[i];
                        if (column.self.toUpperCase() === "ID")
                            ;// by pass ID
                        else {
                            datavalue += stackData[column.self].format + ",";
                        }
                    }
                    datavalue = datavalue.substring(0, datavalue.length - 1);
                    data = datavalue;
                }


                strInsert = strInsert.format(tableName, strColView, data);
                await this.SavetoDb(strCondition + strInsert);
            }
            this.getObectbyName(tableName).NumRowsTEST.isCreated = true;
            this.getObectbyName(tableName).NumRowsTEST.isScan = true;
        }
        //
    },
};


var __parserUtility = {
    getListRefStr: function (listObj) {
        var StrValue = '';
        for (var i = 0; i < listObj.length; i++) {
            var refObj = listObj[i];
            StrValue += '\t\t\t{0}'.format(refObj.refStr);
            if (i < listObj.length - 1)
                StrValue += ",\r\n";
        }
        return StrValue;
    },
    parserRefTable: function (obj) {
        var tableName = obj.objID.self;
        var columns = obj.columns;
        var SQLtype = obj.SQLtype;
        var ModelDb = obj.ModelDb;
        var LanguageShow = obj.LanguageShow;
        var refObjects = obj.refObjects;

        var listRefTable = [];
        for (var i = 0; i < refObjects.length; i++) {
            var refObj = refObjects[i];
            //{ colum: "BusinessID", refObject: "Business", refColum: "Id", refObjectShow: ["Name", "Phone"] }
            var column = refObj.colum;
            var refObject = refObj.refObjects;
            var refColum = refObj.refColum;
            var refObjectShow = refObj.refObjectShow;
            var strMerge = "[1]";
            if (refObj.refObjectShow.length === 1)
                strMerge = "[1]";
            else if (refObj.refObjectShow.length === 2)
                strMerge = "[1,2]";
            else if (refObj.refObjectShow.length === 3)
                strMerge = "[1,2,3]";
            else if (refObj.refObjectShow.length === 4)
                strMerge = "[1,2,3,4]";
            var tempObj = {};
            tempObj.field = column;
            tempObj.refStr = '{ field: "{0}", mergename: {1}, objAjax: { AjaxObj: { a: "fGet{2}", c: { }, _f: "{3}",_gb: " ORDER BY Id Desc", ModelDb: "{4}" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }'.format(
                column, strMerge, refObject, (refColum + "," + refObjectShow).replace('"', ''), ModelDb
            );
            listRefTable[i] = tempObj;
        }
        return listRefTable;
    },

    parserSelfTable: function (objName, listCols, Model) {
        var str1 = '\t\t\t{ AjaxObj: { a: "fGet{0}", _f: "*", _gb: " ORDER BY Id Desc", ModelDb: "{1}" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },\r\n'.format(objName, Model);
        var str2 = '\t\t\t{ AjaxObj: { a: "fGet{0}", _f: "{1}", _gb: " ORDER BY Id Desc", ModelDb: "{2}" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },\r\n'.format(objName, listCols, Model);
        var str3 = '\t\t\t{ AjaxObj: { a: "fGet{0}", _f: "{1}", _gb: " ORDER BY Id Desc", ModelDb: "{2}" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },'.format(objName, listCols, Model);
        return str1 + str2 + str3;
    },
    parse1ColumnJS: function (index, column, SQLtype, languageUI, listRefTable) {
        var nameCol = column.self;
        var typeOp = column.type;
        var type = typeOp.self;
        var len = typeOp.len;
        var allownull = (typeof (column['allownull']) !== 'undefined') ? column['allownull'] : 'false';
        var identify = column.identify;
        var defaultvalue = column.defaultvalue;
        var auto = column.auto;
        var strCol = nameCol + " ";
        var primarykey = column.primarykey;
        var search = (typeof (column.search) !== 'undefined') ? column.search : '';
        var en = column.en;
        var vn = column.vn;
        var lang = en;
        if (languageUI === "vn")
            lang = vn;
        //
        var patterm1 = '\t\t\t/*{0}*/{ field: "{1}", name: "{2}", create: true, edit: true, list: true, type: "{3}", {4} {5}}';
        var patterm2 = '\t\t\t/*{0}*/{ field: "{1}", name: "{2}", create: false, edit: false, list: false, type: "{3}", {4} {5}}';

        var strExpand = "";
        var expandtype = (typeof (column['expandtype']) !== 'undefined') ? column['expandtype'] : '';
        if (nameCol.toUpperCase() === "ID")
            expandtype = "hidden";

        //process for ref colum sau:

        //process for string
        var returnStr = patterm1;
        if ((nameCol === "isValid") || (nameCol === "isCreatedDate") || (nameCol === "isUpdatedDate") || (nameCol === "isPartFull"))
            if(search==='')
                returnStr = patterm2;

        var str5 = "";
        //find ref colum
        for (var i = 0; i < listRefTable.length; i++) {
            var refObj = listRefTable[i];
            if (refObj.field === nameCol) {
                //str5 = ', fkey:{obj:"{0}", fcol:"{1}}"}'.format(refObj.refObjects, refObj.refColum)+ ", option:" + refObj.refStr;
                str5 = ", fkey:true , option:" + refObj.refStr;
                expandtype = 'select';
            }
        }
        strExpand = ' expandtype:"{0}"'.format(expandtype);
        // xử lý số double
        if (type.self === 'double') {
            expandtype = (typeof (column['expandtype']) !== 'undefined') ? column['expandtype'] : 'money';
            str5 = " prediction:" + ((typeof (type['prediction']) !== 'undefined') ? type['prediction'] : '2');
        }
        //-----------------------
        //allow null
        str5 += ", allownull:{0}".format(allownull);

        var strCols = returnStr.format(index, nameCol, lang, type, strExpand, str5);
        var strSearch = returnStr.format(index, nameCol, lang, type, strExpand, str5 + ',search:"' + search + '"');
        //for search 
        //thêm 1 hàng cho chính field này để thực hiện range
        //fix sử dụng date picker range và text query trên form 12/07/2021
        //if (search === "range")
        //    strSearch += ",\r\n" + returnStr.format(index, nameCol, lang, type, strExpand, str5 + ',search:"' + search + '"');
        return { strCols: strCols, strSearch: strSearch };
    },
    parse1Column: function (column, SQLtype) {
        var name = column.self;
        var typeOp = column.type;
        var type = typeOp.self;
        var len = typeOp.len;
        var allownull = column.allownull;
        var identify = column.identify;
        var defaultvalue = column.defaultvalue;
        var auto = column.auto;
        var strCol = name + " ";
        var primarykey = column.primarykey;

        //process for string
        if (type === "string") {
            type = "nvarchar"
            if (typeof (len) === "string")
                type = type + "(" + len + ")";
            else
                type = type + "(50)";
        }
        strCol += this.typeStr(SQLtype, type);
        //process NULL
        if (typeof (allownull) === "boolean") {
            if (allownull === false)
                strCol += " NOT NULL";
        }
        //default value 
        if (typeof (defaultvalue) === "string") {
            strCol += " " + defaultvalue;
        }

        //---------------------------
        //process identify
        if (typeof (identify) === "boolean")
            strCol += this.identifyStr(SQLtype);

        //---------------------------
        //process auto
        if ((typeof (auto) === "boolean") && (typeof (identify) !== "boolean"))
            strCol += this.identifyStr(SQLtype);

        //---------------------------
        //process identify
        if (typeof (primarykey) === "boolean")
            strCol += " PRIMARY KEY ";
        return strCol;
    },
    identifyStr: function (dbType) {
        //"SQLServer",//MySQL, Oracle, Access, 
        if (dbType === "SQLServer")
            return " IDENTITY(1,1)";
        else if (dbType === "MySQL")
            return " AUTO_INCREMENT";
        else if (dbType === "Oracle")// you must create SEQUENCE  for this column
            return " ";
        else if (dbType === "Access")
            return " AUTOINCREMENT";
    },
    typeStr: function (dbType, type) {
        //"SQLServer",//MySQL, Oracle, Access, 
        if (type === "double") {
            if (dbType === "SQLServer")
                return " float";
            else if (dbType === "MySQL")
                return " double";
            else if (dbType === "Oracle")// you must create SEQUENCE  for this column
                return type;
            else if (dbType === "Access")
                return type;
        }
        return type;
    },
};

var __DataTEST = {
    
    dictionary: {
        abc: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', 'w'],
        abcnum: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', 'w', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        surname: ["Lê", "Lưu", "Nguyễn", "Trần", "Lý", "Triệu"],
        innername: ["Thị", "Vãn", "Minh", "Hoài", "Chấn", "Cấn", "Vy"],
        lastname: ["Tùng", "Hậu", "Phúc", "Anh", "Khanh", "Phượng", "Vy", "Hạnh"],
        headphone: ["098", "097", "091", "094", "090", "011"],
        tailEmail: ["gmail.com", "yahoo.com", "hotmail.com"],


        GenString: ["Lê", "Lưu", "Nguyễn", "Trần", "Lý", "Triệu", "Thị", "Vãn", "Minh", "Hoài", "Chấn", "Cấn", "Vy",
            "Tùng", "Hậu", "Phúc", "Anh", "Khanh", "Phượng", "Vy", "Hạnh", "trời", "đất", "nước", "lửa", "gió",
            "xanh", "đỏ", "tím", "vàng", "lam", "đen", "trắng", "cam", "lục",
            "gần", "xa", "rất", "mới", "trên", "dưới", "trong", "ngoài", "trước", "sau", "nhỏ", "lớn", "vừa",
            "con", "cái", "bịt", "gầm", "gà", "mèo"
        ],

        //shema for Nail
        Services:
        {
            Name: ["flash nail", "wax leg", "skin organic", "Skin collagen", "massage"],
            Code: ["FLASH", "NAIL", "ORGANIC", "MASSAGE"],
        },
        GroupRights:
        {
            Name: ["adminGroup", "sellerGroup", "staffGroup", "receptionistGroup", "accoutGroup", "customerGroup"],
            Code: ["adminGroup", "sellerGroup", "staffGroup", "receptionistGroup", "accoutGroup", "customerGroup"],
            Path: ["adminGroup", "sellerGroup", "staffGroup", "receptionistGroup", "accoutGroup", "customerGroup"],
        },
        CustomerType: {
            Name: ["Normal", "Gold", "Silver", "Regular", "VIP", "FirstTime"],
        },
        Department: {
            Name: ["Store", "Account", "Seller", "Human Resource", "Business"],
            Code: ["Store", "Account", "Seller", "Human Resource", "Business"],
        },
        Languages: {
            Name: ["English", "Vietnamese", "Khmer", "Chinise", "Japanese"],
            FormName: ["English", "Vietnamese", "Khmer", "Chinise", "Japanese"]
        },
        Categorys: {
            Name: ["flash", "nail", "organic", "massage"],
            Code: ["FLASH", "NAIL", "ORGANIC", "MASSAGE"],
        }


    },
    getPersonName: function () {
        var surname = this.dictionary.surname[getRandomInt(0, this.dictionary.surname.length - 1)];
        var innername = this.dictionary.innername[getRandomInt(0, this.dictionary.innername.length - 1)];
        var lastname = this.dictionary.lastname[getRandomInt(0, this.dictionary.lastname.length - 1)];
        return surname + " " + innername + " " + lastname;
    },
    getAccountByName: function () {
        var name = this.getPersonName();
        name = VNConvertVNKODAU(name.toLowerCase());
        return name.replaceAll(" ", "");
    },
    getAccountByNametoEmail: function (name) {
        var tailEmail = this.dictionary.tailEmail[getRandomInt(0, this.dictionary.tailEmail.length - 1)];
        name = VNConvertVNKODAU(name.toLowerCase());
        return name.replaceAll(" ", "") + "@" + tailEmail;
    },
    getPhone: function (num) {
        var headphone = this.dictionary.headphone[getRandomInt(0, this.dictionary.headphone.length - 1)];
        var so1 = getRandomInt(0, 9).toString();
        var so2 = getRandomInt(0, 9).toString();
        var so3 = getRandomInt(0, 9).toString();
        var so4 = getRandomInt(0, 9).toString();
        var so5 = getRandomInt(0, 9).toString();
        var so6 = getRandomInt(0, 9).toString();
        var so7 = getRandomInt(0, 9).toString();
        var so8 = getRandomInt(0, 9).toString();
        return headphone + so1 + so2 + so3 + so4 + so5 + so6 + so7;
    },
    getEmail: function () {
        var tailEmail = this.dictionary.tailEmail[getRandomInt(0, this.dictionary.tailEmail.length - 1)];
        var name = this.getAccountByName();
        return name + "@" + tailEmail;
    },
    getGenStr: function (len) {
        var strValue = '';
        for (var i = 0; i < len; i++) {
            var GenString = this.dictionary.GenString[getRandomInt(0, this.dictionary.GenString.length - 1)];
            strValue += GenString;
            if (i < len - 1)
                strValue += " ";
        }
        return strValue;
    },
    getPassCode: function () {
        var so1 = getRandomInt(0, 9).toString();
        var so2 = getRandomInt(0, 9).toString();
        var so3 = getRandomInt(0, 9).toString();
        var so4 = getRandomInt(0, 9).toString();
        var so5 = getRandomInt(0, 9).toString();
        var so6 = getRandomInt(0, 9).toString();
        return so1 + so2 + so3 + so4 + so5 + so6;
    },
    getisPartFull: function () {
        var so1 = getRandomInt(0, 9).toString();
        var so2 = getRandomInt(0, 9).toString();
        var so3 = getRandomInt(0, 9).toString();
        return so1 + '-' + so2 + '-' + so3 + ', {"time":"' + new Date().toISOString() + '"}';
    },
    getBirthday: function () {
        var so1 = getRandomInt(0, 12).toString();
        var so2 = getRandomInt(0, 31).toString();

        return so1 + '/' + so2;
    },
    getColor: function () {
        var so1 = getRandomInt(0, 255).toString();
        var so2 = getRandomInt(0, 255).toString();
        var so3 = getRandomInt(0, 255).toString();
        return 'RGB({0},{1},{2})'.format(so1, so2, so3);
    },
    getCoupon6: function () {
        var arr = [6];
        var chu1 = this.dictionary.abcnum[getRandomInt(0, 35)];
        var chu2 = this.dictionary.abcnum[getRandomInt(0, 35)];
        var chu3 = this.dictionary.abcnum[getRandomInt(0, 35)];

        var so1 = this.dictionary.abcnum[getRandomInt(0, 35)];
        var so2 = this.dictionary.abcnum[getRandomInt(0, 35)];
        var so3 = this.dictionary.abcnum[getRandomInt(0, 35)];

        return so1 + so2 + so3 + chu1 + chu2 + chu3;
    }

};

var __StackBag = {
    _StackData: [],
    _arrStrField: '',
    _arrStrDataFormat: '',
    _arrStrData: '',
    _arrData: [],
    _arrRecords: [],
    //---------------
    _ObjName: '',
    _className: '',
    _$table: null,
    _$form: null,
    _$ul: null,

    _$mainContainer: null,
    //-------------------------------
    //dùng để điều chỉnh và hiển thị lưới
    _showFooter: true, // show header ở cuối, false ản
    //biến này lưu trữ trạng tháí cột sumary: position: top,bottom,both, index là dãy vị trí sẽ tính tổng indexs:[1,5,6], values:[]
    _totalAll: { position: "both", indexs: [], values: [], title: "Total" },
    //-------------------------------

    //-------------------------------
    //HỖ trợ parser từ form search 1 số field bị bỏ trống nên ta lược giản
    parserSearchForm: function (data) {
        var c = {};
        for (var i = 0; i < this._StackData.length; i++) {
            var stackData = this._StackData[i];
            var colName = stackData.self;
            var type = stackData.type;
            if (typeof (data[colName]) !== 'undefined' && (data[colName] !== null)) {
                if (type === "string") {
                    if (data[colName].length > 0)
                        c[colName] = " $x LIKE N'%" + data[colName] + "%'";
                }
                else if (type === "datetime") {
                    if (data[colName].length > 0)
                    {
                        var range = data[colName].split('to');
                        if(range.length>1)
                        {
                            if(_gbLanguage==='vn')
                            {
                                range[0] = moment(range[0], _gbApp.defaultConfig.dateTimeFormat).format(_gbApp.defaultConfig.isoDateTimeFormat);//isoDateTimeFormat
                                range[1] = moment(range[1], _gbApp.defaultConfig.dateTimeFormat).format(_gbApp.defaultConfig.isoDateTimeFormat);//isoDateTimeFormat
                                
                            }
                            c[colName] = " $x BETWEEN " + "'{0}' AND '{1}'".formatArr(range);
                        }    
                        else 
                        {
                            if(_gbLanguage==='vn')
                            {
                                range[0] = moment(range[0], _gbApp.defaultConfig.dateTimeFormat).format(_gbApp.defaultConfig.isoDateTimeFormat);//isoDateTimeFormat
                            }
                            c[colName] = "'{0}'".format(range[0]);
                        }
                    }
                }
                else {
                    //colection nếu thông tin cho phép chọn nhiều
                    if (typeof (data[colName]) === 'object') {
                        if (data[colName].length === 1)
                            c[colName] = data[colName][0].id;
                        else if (data[colName].length > 1){
                            var arrValues = '';
                            for (var u = 0; u < data[colName].length; u++) {
                                arrValues += data[colName][u].id;
                                if (u < data[colName].length - 1)
                                    arrValues += ',';
                            }
                            c[colName] = "$x IN(" + arrValues + ")";
                        }
                    }
                    else if (data[colName].length > 0)
                    {
                        c[colName] = data[colName];
                    }
                }
            }
        }
        return c;
    },
    //HỖ trợ parser từ form search 1 số field bị bỏ trống nên ta lược giản
    parserForm: function (data) {
        //Bạn luôn nhớ rằng số field trên form có thể nhỏ hơn thông tin gốc StackData
        var c = {};
        for (var i = 0; i < this._StackData.length; i++) {
            var stackData = this._StackData[i];
            var colName = stackData.self;
            var type = stackData.type;
            if (typeof (data[colName]) !== 'undefined' && (data[colName] !== null)) {
                if (type === "string") {
                    if (data[colName].length > 0)
                        c[colName] =  data[colName] ;
                }
                else if (type === "datetime") {
                    if (data[colName].length > 0)
                    {
                        var range = data[colName].split('to');// cho phép range nhưng lưu data chưa đúng cần phải đồng bộ
                        c[colName] = data[colName];// kiểm tra kiểu ngày tháng để chuyển đổi kiểu
                        if(_gbLanguage==='vn')
                        {
                            c[colName] = moment(data[colName], _gbApp.defaultConfig.dateTimeFormat).format(_gbApp.defaultConfig.isoDateTimeFormat);//isoDateTimeFormat
                        }
                    }
                }
                else {
                    //colection nếu thông tin cho phép chọn nhiều
                    if (typeof (data[colName]) === 'object') {
                        if (data[colName].length === 1)
                            c[colName] = data[colName][0].id;
                        else if (data[colName].length > 1){
                            var arrValues = '';
                            for (var u = 0; u < data[colName].length; u++) {
                                arrValues += data[colName][u].id;
                                if (u < data[colName].length - 1)
                                    arrValues += ',';
                            }
                            c[colName] =  arrValues;
                        }
                    }
                    else if (data[colName].length > 0)
                    {
                        //kiểm tra 2 kiểu double, bigint, int để remove khoảng cách
                        //var token = (_gbLanguage==='vn')? ',': '.';
                        //var value = gcRev($(this).val(), token);
                        if ( (type === "bigint") || (type === "int") || (type === "double"))
                        {
                            var token = (_gbLanguage==='vn')? ',': '.';
                            var value = gcRev(data[colName], token);
                            c[colName] = value;
                        }
                        else 
                            c[colName] = data[colName];
                    }
                }
            }
        }
        return c;
    },
    ValidNull:function(data){
        //Bạn luôn nhớ rằng số field trên form có thể nhỏ hơn thông tin gốc StackData   
        var c = [];
        for (var i = 0; i < this._StackData.length; i++) {
            var stackData = this._StackData[i];
            var colName = stackData.self;
            var type = stackData.type;
            var allownull = stackData.allownull;
            //có tồn tại data
            if (typeof (data[colName]) !== 'undefined') {
                if(!allownull)//không cho phép null
                {
                    //kiểm tra nếu data null => invalid
                    if(data[colName].length<=0)
                    {
                        c[c.length] = stackData;
                        c[c.length-1]['indalidnull'] = true;
                    }    
                }
                //kiểm tra định dạng cơ bản
                if(!this.IsValidBasic(data[colName], type))
                {
                    c[c.length] = stackData;
                    c[c.length-1]['indalidtype'] = type;
                }
                //kiểm tra dữ liệu range: phạm vi cho number
                //kiểm tra dữ liệu kiểu định nghĩa cho form => Reg cho form kiểm tra định nghĩa expandtion: "Email"
            }
        }
        return c;
    },
    IsValidBasic: function(value, type){
        var bCheck = true;
        return bCheck;
    },
    //trả về dữ liệu sau khi change
    getDataGridChange: function(row, data,objName, type='update'){
        var rowNew = row;
        var $listColumns =  $("#"+objName+"_TableData thead tr th");
        for(var u = 0; u<$listColumns.length; u++)
        {
            var $column = $($listColumns[u]);
            var colName = $column.attr('self');
            var index = $column.attr('data-column-index');
            //bug for new data
            if(typeof(index)==='undefined')
                if(colName.toUpperCase() ==='ID')
                    index = 0;
            //---------------
            if(typeof(data[colName]) !=='undefined')// tồn tại data
            {
                rowNew[index] = data[colName];
            }
            else 
            {
                rowNew[index] = null;
            }
        }
        return rowNew;
    },
    //-------------------------------
    //Thông tin dùng để hiển thị Header of Report
    _$HeaderSelf: null,
    _ReportHeader: { id: "Business_HeaderReceiptReport", params: [] },
    _attachReportHeader: function ($Container) {
        var $s = $("#" + this._ReportHeader.id);
        $s.html($s.html().formatArr(this._ReportHeader.params));
        $s.appendTo($Container);
    },
    //-------------------------------
    Transfer: function (arrRecords) {
        this._arrRecords = arrRecords;
    },

   
    reLoadTable: function ($Container, option) {
        this._createTable($Container, option);
        this.plushDataTable(this._arrRecords, true);
    },
    //Phục vụ cho viêc xuất dữ liệu ra View là Table// Tương tự viết thêm cho ul,li
    plushDataTable: function (arrRecords, reload = false) {
        if (reload === false)
            this._arrRecords = arrRecords;

        var position = (typeof (this._totalAll.position) !== 'undefined') ? this._totalAll.position : "both";

        this._$table.find('tbody').html('');//reset body
        //hàm này gọi sau khi Transfer data vào
        //Và đã gọi initStackInfo
        //setup data for sum total
        for (var m = 0; m < this._totalAll.indexs.length; m++)
            this._totalAll.values[m] = 0.0;
        //calculate total
        for (var i = 0; i < this._arrRecords.length; i++) {
            var record = this._arrRecords[i];// array of data colum
            for (m = 0; m < this._totalAll.indexs.length; m++)
                this._totalAll.values[m] += record[this._totalAll.indexs[m]];
        }
        if (position === 'top' || position === 'both')
            this.ShowTotalTable();

        //main
        for (i = 0; i < this._arrRecords.length; i++) {
            var record = this._arrRecords[i];// array of data colum
            //var stackData = this._StackData[i];
            this.plushDataToRow(record);
        }

        if (position === 'bottom' || position === 'both')
            this.ShowTotalTable();
        return this._$table;
    },
    ShowTotalTable: function () {
        //var $tr = $('<tr style="background-color: #C6E0B4"></tr>');
        var $tr = $('<tr class="bg-warning"></tr>');
        var bFirst = false;
        var colspan = this._totalAll.indexs[0];//init
        for (var i = 0; i < this._StackData.length; i++) {
            //check gridShow is true tức show trên lưới
            if (this._StackData[i].gridShow) {
                //--------------------------------------------------
                //get total data
                var value = '';
                for (var j = 0; j < this._totalAll.indexs.length; j++)
                    if (i === this._totalAll.indexs[j]) {
                        if (!bFirst) {
                            // thêm colspan="sub"
                            $td = $('<td  colspan="{0}">{1}</td>'.format(colspan, this._totalAll.title));
                            $td.appendTo($tr);
                            bFirst = true;
                        }
                        value = this.getFormatData(i, this._totalAll.values[j]);
                        var $td = $('<td style="font-weight:bold;">{0}</td>'.format(this._StackData[i]["formatview"]));
                        $td.appendTo($tr);
                    }
                //end

                if (value === '' && bFirst) {
                    $td = $('<td></td>');
                    $td.appendTo($tr);
                }
            }
            else
                colspan = colspan - 1;
        }
        this._$table.find('tbody').append($tr);
    },
    //------------------------------------------
    plushDataToRow: function (record) {
        var $tr = $('<tr></tr>');
        //trong 1 số trường hợp record length> this._StackData.length như là các view => truyền data về
        for (var i = 0; i < record.length; i++) {
            //check gridShow is true tức show trên lưới
            if (this._StackData[i].gridShow) {
                this.getFormatData(i, record[i]);
                var $td = $('<td >{0}</td>'.format(this._StackData[i]["formatview"]));
                $td.appendTo($tr);
            }
        }
        this._$table.find('tbody').append($tr);
    },

    //------------------------------------------
    plushDataToDB: function (record) {
        //trong 1 số trường hợp record length> this._StackData.length như là các view => truyền data về
        for (var i = 0; i < this._StackData.length; i++) {
            this.getFormatData(i, record[i]);
        }
    },
    //Lấy format dữ liệu cho 2 chiều, format cho db và formatview cho form, grid
    getFormatData: function (i, data) {
        //var stackData = this._StackData[i];
        this._StackData[i]['data'] = data;
        var type = this._StackData[i]["type"];

        if (type === "string") {
            this._StackData[i]["format"] = "N'{0}'".format(data);
            this._StackData[i]["formatview"] = "{0}".format(data);
        }
        else if (type === "int") {
            this._StackData[i]["format"] = (data);
            this._StackData[i]["formatview"] = "{0}".format(data);
        }
        else if (type === "bigint") {
            this._StackData[i]["format"] = (data);
            this._StackData[i]["formatview"] = "{0}".format(data);
        }
        else if (type === "double") {
            this._StackData[i]["format"] = (data);
            this._StackData[i]["formatview"] = _gcFormatMoney(data, this._StackData[i].prediction, true);// true for english
        }
        else if (type === "datetime") {
            this._StackData[i]["format"] = "'{0}'".format(data);
            this._StackData[i]["formatview"] = _gcFormatFullDataTime(data);
        }
        else if (type === "bigint") {
            this._StackData[i]["format"] = (data);
            this._StackData[i]["formatview"] = "{0}".format(data);
        }

    },
     //-------------------------------------------
    //đưa vào dãy dữ liệu là 1 record => push chúng lên stack để có thể => chuyển data lên form hay chuyển data xuống db
    plushData: function (record) {
        //trong 1 số trường hợp record length> this._StackData.length như là các view => truyền data về
        for (var i = 0; i < this._StackData.length; i++) {
            this.getFormatData(i, record[i]);
        }
        this._StackData;
    },
    initStackInfo2: function (record) {
        this._StackData = [];
        //record is array data ! not json
        for (var i = 0; i < record.length; i++) {
            var data = record[i];
            var stackData = {};
            var type = typeof (data);
            var colName = i + '';
            stackData["self"] = colName;
            stackData["data"] = data;
            stackData["type"] = type;
            if (type === "string")
                stackData["format"] = "N'{0}'";
            else if (type === "int")
                stackData["format"] = "{0}";
            else if (type === "bigint")
                stackData["format"] = "{0}";
            else if (type === "double")
                stackData["format"] = "{0}";
            else if (type === "datetime")
                stackData["format"] = "'{0}'";
            else if (type === "bigint")
                stackData["format"] = "{0}";
            //put to stack
            this._StackData[i] = stackData;
        }
    },
    //Khởi động Stack bằng danh sách fields
    initStackInfo: function (arrFields) {
        this._StackData = [];
        //assert(arrFields.type)
        for (var i = 0; i < arrFields.length; i++) {
            var column = arrFields[i];
            var stackData = {};
            var type = arrFields[i].type;
            var colName = (typeof (column.field) !== 'undefined') ? column.field : column.self;
            var expandtype = (typeof (column.expandtype) !== 'undefined') ? column.expandtype : '';
            var prediction = (typeof (column.prediction) !== 'undefined') ? column.prediction : 2;
            var allownull =   (typeof (column.allownull) !== 'undefined') ? column.allownull : false;// rổng được xem là không cho phép null
            //thuộc tính list:false tức không hiển thị cột này, không khai báo gì là true
            var gridShow = (typeof (column.list) !== 'undefined') ? column.list : true;

            stackData["gridShow"] = gridShow;
            stackData["self"] = colName;
            stackData["type"] = type;
            stackData["expandtype"] = expandtype;
            stackData["prediction"] = prediction;
            stackData["allownull"] = allownull;
            if (type === "string") {
                stackData["format"] = "N'{0}'";
                stackData["formatview"] = "{0}";
            }
            else if (type === "int") {
                stackData["format"] = "{0}";
                stackData["formatview"] = "{0}";
            }
            else if (type === "bigint") {
                stackData["format"] = "{0}";
                stackData["formatview"] = "{0}";
            }
            else if (type === "double") {
                stackData["format"] = "{0}";
                stackData["formatview"] = "{0}";
            }
            else if (type === "datetime") {
                stackData["format"] = "'{0}'";
                stackData["formatview"] = "{0}";
            }
            else if (type === "bigint") {
                stackData["format"] = "{0}";
                stackData["formatview"] = "{0}";
            }
            //put to stack
            this._StackData[i] = stackData;
        }
    },
    //Trả về danh sách cột cách nhau bằng dấu comma ID,Code,Name
    getStrFields: function (comma = ',') {
        var arrStrField = '';
        for (var i = 0; i < this._StackData.length; i++) {
            var stackData = this._StackData[i];
            arrStrField += stackData.self;
            if (i < this._StackData.length - 1)
                arrStrField += comma;
        }
        this._arrStrField = arrStrField;
        return arrStrField;
    },
    //Trả về danh sách dữ liệu đã định dạng theo đối tượng 1,6,'test','27/2/2021'
    getStrData: function () {
        var arrStrData = '';
        for (var i = 0; i < this._StackData.length; i++) {
            var stackData = this._StackData[i];
            arrStrData += stackData.data;
            if (i < this._StackData.length - 1)
                arrStrData += comma;
        }
        this._arrStrData = arrStrData;
        return arrStrData;
    },
    //Trả về danh sách dữ liệu đã định dạng theo SQL 1,6,N'test','27/2/2021'
    getStrDataFormat: function () {
        var arrStrDataFormat = '';
        for (var i = 0; i < this._StackData.length; i++) {
            var stackData = this._StackData[i];
            arrStrDataFormat += stackData.format;
            if (i < this._StackData.length - 1)
                arrStrDataFormat += comma;
        }
        this._arrStrDataFormat = arrStrDataFormat;
        return arrStrDataFormat;
    },
    //Trả về danh sách dữ liệu Array định dạng theo đối tượng [1,6,'test','27/2/2021]
    getArrayData: function () {
        var arrData = [];
        for (var i = 0; i < this._StackData.length; i++) {
            var stackData = this._StackData[i];
            arrData[i] = stackData.data;
        }
        this._arrData = arrData;
        return arrData;
    },
    getStrUpdateSQL: function () {
        var arrStrUpdateSQL = '';
        for (var i = 0; i < this._StackData.length; i++) {
            var stackData = this._StackData[i];
            arrStrUpdateSQL += stackData.self + "=" + stackData.format;
            if (i < _StackData.length - 1)
                arrStrDataFormat += comma;
        }
        this._arrStrDataFormat = arrStrDataFormat;
        return arrStrDataFormat;
    },
    getInsertDataRequest: function (model) {
        //{ AjaxObj: { a: "fGetOrderDetail", exV:"view_ListOrderDetail", _f: "*", 
        //_gb: " ORDER BY OrderID, ServicesID, StaffID", ModelDb: "AppCoreDb" }, 
        //APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
        var jsonRequest = {};
        jsonRequest['AjaxObj'] = {};
        jsonRequest.AjaxObj['a'] = 'Insert' + this._ObjName;
        jsonRequest.AjaxObj['d'] = {};
        jsonRequest.AjaxObj['ModelDb'] = model;
        jsonRequest['APIkey'] = 'kUcHUoWsxLPrIJy$rTcbeG5k';
        for (var i = 0; i < this._StackData.length; i++) {
            var stackData = this._StackData[i];
            //loại bỏ ID là key auto gen <= để chính xác thì nên lưu auto:true vào field để chúng bỏ qua
            if (stackData.self.toUpperCase() !== 'ID')
                jsonRequest.AjaxObj.d[stackData.self] = stackData.data;
        }
        return jsonRequest;
    },
    getUpdateDataRequest: function (model, condition) {
        //{ AjaxObj: { a: "fGetOrderDetail", exV:"view_ListOrderDetail", _f: "*", 
        //_gb: " ORDER BY OrderID, ServicesID, StaffID", ModelDb: "AppCoreDb" }, 
        //APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
        var jsonRequest = {};
        jsonRequest['AjaxObj'] = {};
        jsonRequest.AjaxObj['a'] = 'Update' + this._ObjName;
        jsonRequest.AjaxObj['d'] = {};
        jsonRequest.AjaxObj['c'] = condition;//{Id: ID};
        jsonRequest.AjaxObj['ModelDb'] = model;
        jsonRequest['APIkey'] = 'kUcHUoWsxLPrIJy$rTcbeG5k';
        for (var i = 0; i < this._StackData.length; i++) {
            var stackData = this._StackData[i];
            //loại bỏ ID là key auto gen <= để chính xác thì nên lưu auto:true vào field để chúng bỏ qua
            if (stackData.self.toUpperCase() !== 'ID')
                jsonRequest.AjaxObj.d[stackData.self] = stackData.data;
        }
        return jsonRequest;
    },
    getDeleteDataRequest: function (model, condition) {
        //{ AjaxObj: { a: "fGetOrderDetail", exV:"view_ListOrderDetail", _f: "*", 
        //_gb: " ORDER BY OrderID, ServicesID, StaffID", ModelDb: "AppCoreDb" }, 
        //APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
        var jsonRequest = {};
        jsonRequest['AjaxObj'] = {};
        jsonRequest.AjaxObj['a'] = 'Remove' + this._ObjName;
        jsonRequest.AjaxObj['d'] = {};
        jsonRequest.AjaxObj['c'] = condition;//{Id: ID};
        jsonRequest.AjaxObj['ModelDb'] = model;
        jsonRequest['APIkey'] = 'kUcHUoWsxLPrIJy$rTcbeG5k';

        return jsonRequest;
    },

    //---------------------
    //Phần này dành cho Table
    getStrTableWithHeader: function (option, $Container) {
        this._$mainContainer = $Container;
        this._createTable($Container, option);
        return this._$table;
    },

    _createDIV: function (option) {
        var $div = $('<div {0}></div>'.format(option))
        return $div;
    },
    /* Creates <ul> list <li>.
        *************************************************************************/
    _createUl: function ($Container, option) {
        this._$mainContainer = $Container;
        //-----------------------------------------
        //Xử lý option truyền vào có định dạng option:{opUl, opLi}
        var opUl = '';
        var opLi = '';
        if (typeof (option) !== 'undefined') {
            if (typeof (option['opUl']) !== 'undefined')
                opUl = option['opUl'];
            if (typeof (option['opLi']) !== 'undefined')
                opLi = option['opLi'];
        }
        //-----------------------------------------
        var $div = $('<div class=""></div>')
            .appendTo(this._$mainContainer);
        $div.attr('id', this._ObjName + '_uldiv');
        $div.appendTo(this._$mainContainer);

        this._$ul = $('<ul {0}></ul>'.format(opUl))
            .addClass(this._className)
            .attr('id', this._ObjName + '_UlData')
            .appendTo($div);

        return this._$ul;
    },

    /* Creates the table.
        *************************************************************************/
    _createTable: function ($Container, option) {
        this._$mainContainer = $Container;
        //-----------------------------------------
        //Xử lý option truyền vào có định dạng option:{opTable, opCol, opRow, opHead}
        var opTable = ' class="table table-striped table-bordered"';
        var opCol = '';
        var opRow = ' ';
        var opHead = ' class="bg-info" ';
        if (typeof (option) !== 'undefined') {
            if (typeof (option['opTable']) !== 'undefined')
                opTable = option['opTable'];
            if (typeof (option['opCol']) !== 'undefined')
                opCol = option['opCol'];
            if (typeof (option['opRow']) !== 'undefined')
                opRow = option['opRow'];
            if (typeof (option['opHead']) !== 'undefined')
                opHead = option['opHead'];
        }
        //-----------------------------------------
        var $div = $('<div class=""></div>')
            .appendTo(this._$mainContainer);
        $div.attr('id', this._ObjName + '_griddivReport');
        $div.appendTo(this._$mainContainer);

        this._$table = $('<table {0}></table>'.format(opTable))
            .addClass(this._className)
            .attr('id', this._ObjName + '_TableReport')
            .css('width', '100%')
            .appendTo($div);

        this._createTableHead(opHead);
        this._createTableBody();
        if (this._showFooter)
            this._createTableFoot(opHead);
        return this._$table;
    },

    /* Creates header (all column headers) of the table.
    *************************************************************************/
    _createTableBody: function () {
        var $thead = $('<tbody></tbody>')
            .appendTo(this._$table);
    },
    /* Creates header (all column headers) of the table.
    *************************************************************************/
    _createTableHead: function (opHead) {
        var $thead = $('<thead></thead>')
            .appendTo(this._$table);

        this._addRowToTableHead($thead, opHead);
    },

    /* Creates header (all column headers) of the table.
   *************************************************************************/
    _createTableFoot: function (opHead) {
        var $thead = $('<tfoot></tfoot>')
            .appendTo(this._$table);

        var $tr = $('<tr></tr>')
            .appendTo($thead);
        this._addColumnsToHeaderRow($tr, opHead);
        $tr.appendTo($thead);
    },

    /* Adds tr element to given thead element
    *************************************************************************/
    _addRowToTableHead: function ($thead, opHead) {
        //fixed bug ngày 23/06/2021
        //Biến filter này lưu ở bảng của Object =>>> Dictionary để xác định
        //if(bBuildFilterColum)
        //this._addColumnsFilterToHeaderRow($tr2);
        var $tr = $('<tr {0}></tr>'.format(opHead))
            .appendTo($thead);

        this._addColumnsToHeaderRow($tr, opHead);
    },

    /* Adds column header cells to given tr element.
    *************************************************************************/
    _addColumnsToHeaderRow: function ($tr, opHead) {
        //-------------------------------------------------------------
        for (var i = 0; i < this._StackData.length; i++) {
            var stackData = this._StackData[i];
            //true is hiển thị cột này
            if (stackData.gridShow) {
                var colName = stackData.self;
                var widthCol = (typeof (stackData[widthCol]) !== 'undefined') ? stackData[widthCol] : '';
                //show language    
                if (typeof _gcSubLoopkupI18 == 'function')
                    colName = _gcLSuboopkupI18(this._ObjName, colName);

                var $headerCell = this._createHeaderCellForField(colName, widthCol, stackData, opHead);
                $headerCell.appendTo($tr);
            }
        }
    },
    /* Creates a header cell for given field.
        *  Returns th jQuery object.
        *************************************************************************/
    _createHeaderCellForField: function (colName, width, stackData, opHead) {
        //field.width = field.width || '10%'; //default column width: 10%.
        var $th = $('<th></th>')
            //.data('colName', colName)
            .html(colName);
        if (width != '')
            $th.css('width', width + ' !important');
        return $th;
    },
};

var _
//-------------------------------------------------
//xử lý các action form
var _gbFormAction ={
    optionGrids:{
        searchHighlight: true,
        responsive: true,
        dom: 'CBftilp',// goog 19/03
        data: null,
        buttons: [
            'colvis', 'excel', 'print'
        ],
        scrollX: true,
        scrollCollapse: true,
        colReorder: true,
        bDrawing:true,
        //fixedHeader: true,
        select: true,
        "language": {
            "lengthMenu": "Xem _MENU_ hàng",
            "info": "Trang _PAGE_ / _PAGES_ ",
            "infoEmpty": "Không tìm thấy dữ liệu",
            "infoFiltered": "(Đang lọc từ _MAX_ bản ghi)",
            "loadingRecords": "Tải dữ liệu...",
            "processing": "Đang xử lý...",
            "search": "Tìm kiếm:",
            "zeroRecords": "Không tìm thấy dữ liệu",
            "paginate": {
                "first": "Đầu",
                "last": "Cuối",
                "next": "Sau",
                "previous": "Trước"
            },
        },
        //------------------------------------------------------------
        //row group
        "order": [0, 'desc'],
        //"rowGroup": group
    },
    optionGridsEn:{
        searchHighlight: true,
        responsive: true,
        dom: 'CBftilp',// goog 19/03
        data: null,
        buttons: [
            'colvis', 'excel', 'print'
        ],
        scrollX: true,
        scrollCollapse: true,
        colReorder: true,
        bDrawing:true,
        //fixedHeader: true,
        select: true,
        //------------------------------------------------------------
        //row group
        "order": [0, 'desc'],
        //"rowGroup": group
    },
    _innerProcessClick: function(objName, event, object){
        //alert(objName);
        var obj = _gbSubDictionary[objName];
		if (typeof (obj) === 'undefined')
			obj = _gbDictionary[objName];

		console.log(obj + ' action ' + objName);

		//----------------------------------------------
		//save data 
		if (typeof (obj) !== 'undefined') {
			
			//var data = _gbForms.getdata(obj);
			__StackBag._ObjName = objName;
			//get grid
			var table = $("#{0}_TableData".format(objName)).DataTable();
			var rows = table.rows( { selected: true } );
			var count = rows.count();
			if(count>=0)
			{
				console.log(count + rows.data()[0]);
				//we set to __StackBag() list data, now using init2
				var record = rows.data()[0]
				__StackBag.initStackInfo(obj._fieldsList);	
				__StackBag.plushData(record);
				console.log(__StackBag._StackData)
				_gbForms.setdata(obj,record)
			}	
        }
    },
};

var _gcActionStrDict = {
    form_action:[
        {
            self: "Add", lang:{en: "Add", vn: "Thêm mới", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Add new {0} successfull.", vn: "Thêm mới {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: add new {0}  {1}.", vn: "Nhắc: thêm mới {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Add new {0} fail.", vn: "Thêm mới {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
         self: "AddNew", lang:{en: "Add New", vn: "Thêm mới", kmer: "បន្ថែម​ថ្មី"},
         msg:[
             { self: "success", lang:{en: "Add new {0} successfull.", vn: "Thêm mới {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
             { self: "warning", lang:{en: "Warning: add new {0}  {1}.", vn: "Nhắc: thêm mới {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
             { self: "error", lang:{en: "Add new {0} fail.", vn: "Thêm mới {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
            ]
        },
        {
            self: "Update", lang:{en: "Update", vn: "Cập nhật", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Update {0} successfull.", vn: "Cập nhật {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: update {0}  {1}.", vn: "Nhắc: cập nhật {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Update {0} fail.", vn: "Cập nhật {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Save", lang:{en: "Save", vn: "Lưu", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Save {0} successfull.", vn: "Lưu {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: save {0}  {1}.", vn: "Nhắc: lưu {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Save {0} fail.", vn: "Lưu {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Next", lang:{en: "Next", vn: "Tiếp tục", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Next {0} successfull.", vn: "Tiếp tục {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: next {0}  {1}.", vn: "Nhắc: Tiếp tuc {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Next {0} fail.", vn: "Tiếp tục {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Back", lang:{en: "Back", vn: "Quay lại", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Back {0} successfull.", vn: "Quay lại {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: back {0}  {1}.", vn: "Nhắc: quay lại {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Back {0} fail.", vn: "Quay lại {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Search", lang:{en: "Search", vn: "Tìm kiếm", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Search {0} successfull.", vn: "Tìm kiếm {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: search {0}  {1}.", vn: "Nhắc: tìm kiếm {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Search {0} fail.", vn: "Tìm kiếm {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Transfer", lang:{en: "Update", vn: "Chuyển", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Transfer {0} successfull.", vn: "Chuyển {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: Transfer {0}  {1}.", vn: "Nhắc: Chuyển {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Transfer {0} fail.", vn: "Chuyển {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Tranfer all", lang:{en: "Transfer all", vn: "Chuyển hết", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Transfer all {0} successfull.", vn: "Chuyển hết {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: transfer all {0}  {1}.", vn: "Nhắc: chuyển hết {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Transfer all {0} fail.", vn: "Chuyển hết {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Receive", lang:{en: "Receive", vn: "Nhận", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Receive {0} successfull.", vn: "Nhận {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: receive {0}  {1}.", vn: "Nhắc: nhận {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Receive {0} fail.", vn: "Nhận {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Delete", lang:{en: "Delete", vn: "Xoá", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Delete {0} successfull.", vn: "Xoá {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: delete {0}  {1}.", vn: "Nhắc: Xoá {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Delete {0} fail.", vn: "Xoá {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Detail", lang:{en: "Detail", vn: "Chi tiết", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Load detail {0} successfull.", vn: "Tải chi tiết {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: load detail {0}  {1}.", vn: "Nhắc: Tải chi tiết {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Load detail {0} fail.", vn: "Tải chi tiết {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Setting", lang:{en: "Setting", vn: "Cài đặt", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Setting {0} successfull.", vn: "Cài đặt {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: setting {0}  {1}.", vn: "Nhắc: Cài đặt {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Setting {0} fail.", vn: "Cài đặt {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Load", lang:{en: "Load", vn: "Tải", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Load {0} successfull.", vn: "Tải {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: load {0}  {1}.", vn: "Nhắc: tải {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Load {0} fail.", vn: "Tải {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Info", lang:{en: "Info", vn: "Thông tin", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Load information {0} successfull.", vn: "Tải thông tin {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: load information {0}  {1}.", vn: "Nhắc: tải thông tin {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Load information {0} fail.", vn: "Tải thông tin {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Run", lang:{en: "Run", vn: "Chạy", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Run {0} successfull.", vn: "Chạy {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: Run {0}  {1}.", vn: "Nhắc: chạy {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Run {0} fail.", vn: "Chạy {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Payment", lang:{en: "Payment", vn: "Thanh toán", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Payment {0} successfull.", vn: "Thanh toán {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: Payment {0}  {1}.", vn: "Nhắc: thanh toán {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Payment {0} fail.", vn: "Thanh toán {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Debt", lang:{en: "Debt", vn: "Ghi nợ", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Debt {0} successfull.", vn: "Ghi nợ {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: Debt {0}  {1}.", vn: "Nhắc: ghi nợ {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Debt {0} fail.", vn: "Ghi nợ {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Print", lang:{en: "Print", vn: "In ấn", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Print {0} successfull.", vn: "In ấn {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: Print {0}  {1}.", vn: "Nhắc: In ấn {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Print {0} fail.", vn: "In ấn {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Import", lang:{en: "Import", vn: "Nhập liệu", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Import {0} successfull.", vn: "Nhập liệu {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: Import {0}  {1}.", vn: "Nhắc: nhập liệu {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Import {0} fail.", vn: "Nhập liệu {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "ImportExcel", lang:{en: "Import Excel", vn: "Nhập liệu Excel", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Import {0} from Excel successfull.", vn: "Nhập liệu {0} từ Excel thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: Import {0} from Excel  {1}.", vn: "Nhắc: nhập liệu {0} từ Excel {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Import {0} from Excel fail.", vn: "Nhập liệu {0} từ Excel thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "Export", lang:{en: "Export", vn: "Xuất dữ liệu", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Export liệu {0} successfull.", vn: "Xuất dữ liệu {0} thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: Export {0}  {1}.", vn: "Nhắc: xuất dữ liệu {0} {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Export {0} fail.", vn: "Xuất dữ liệu {0} thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
        {
            self: "ExportExcel", lang:{en: "Export Excel", vn: "Xuất Excel", kmer: "បន្ថែម​ថ្មី"},
            msg:[
                { self: "success", lang:{en: "Export {0} to Excel successfull.", vn: "Xuất dữ liệu {0}  Excel thành công", kmer: "បន្ថែម​ថ្មី"}},
                { self: "warning", lang:{en: "Warning: export {0} from Excel  {1}.", vn: "Nhắc: xuất dữ liệu {0}  Excel {1}", kmer: "បន្ថែម​ថ្មី"}},
                { self: "error", lang:{en: "Export {0} from Excel fail.", vn: "Xuất dữ liệu {0}  Excel thất bại", kmer: "បន្ថែម​ថ្មី"}}
               ]
        },
    ],
};