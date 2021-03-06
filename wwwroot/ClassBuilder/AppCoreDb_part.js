var _gbDictionary = {
       
         
 'sysdiagrams' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "sysdiagrams",
            _id: "sysdiagrams",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetsysdiagrams", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetsysdiagrams", _f: "name,principal_id,diagram_id,version,definition", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetsysdiagrams", _f: "name,principal_id,diagram_id,version,definition", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*1*/{ field: "principal_id", name: "principal_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "diagram_id", name: "diagram_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "version", name: "version", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "definition", name: "definition", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "sysdiagrams",
            cols: [
               /*1*/{ ColName: 'name', FormName: 'name', PositionData: 1, IsShow: 'isShow', ColType: 'sysname', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'principal_id', FormName: 'principal_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'diagram_id', FormName: 'diagram_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'version', FormName: 'version', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'definition', FormName: 'definition', PositionData: 5, IsShow: 'isShow', ColType: 'varbinary', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "sysdiagramsdetail",
            cols: [
               /*1*/{ ColName: 'name', FormName: 'name', PositionData: 1, IsShow: 'isShow', ColType: 'sysname', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'principal_id', FormName: 'principal_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'diagram_id', FormName: 'diagram_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'version', FormName: 'version', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'definition', FormName: 'definition', PositionData: 5, IsShow: 'isShow', ColType: 'varbinary', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'Users' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "Users",
            _id: "Users",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetUsers", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetUsers", _f: "Id,UserName,Password,Email,PassCode,Phone,Domain,BusinessID,StaffID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetUsers", _f: "Id,UserName,Password,Email,PassCode,Phone,Domain,BusinessID,StaffID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "UserName", name: "UserName", create: true, edit: true, list: true  }
			,/*2*/{ field: "Password", name: "Password", create: true, edit: true, list: true  }
			,/*3*/{ field: "Email", name: "Email", create: true, edit: true, list: true  }
			,/*4*/{ field: "PassCode", name: "PassCode", create: true, edit: true, list: true  }
			,/*5*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*6*/{ field: "Domain", name: "Domain", create: true, edit: true, list: true  }
			,/*7*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "StaffID", name: "StaffID", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*10*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*11*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*12*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*13*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "Users",
            cols: [
               /*1*/{ ColName: 'UserName', FormName: 'UserName', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Password', FormName: 'Password', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Email', FormName: 'Email', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'PassCode', FormName: 'PassCode', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Phone', FormName: 'Phone', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Domain', FormName: 'Domain', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 7, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'StaffID', FormName: 'StaffID', PositionData: 8, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 9, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 10, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 11, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 12, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "Usersdetail",
            cols: [
               /*1*/{ ColName: 'UserName', FormName: 'UserName', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Password', FormName: 'Password', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Email', FormName: 'Email', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'PassCode', FormName: 'PassCode', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Phone', FormName: 'Phone', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Domain', FormName: 'Domain', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 7, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'StaffID', FormName: 'StaffID', PositionData: 8, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 9, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 10, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 11, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 12, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'Logins' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "Logins",
            _id: "Logins",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetLogins", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetLogins", _f: "Id,TimeLogin,TimeLogout,UpdatedTime,TotalTimes,UserID,Online,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetLogins", _f: "Id,TimeLogin,TimeLogout,UpdatedTime,TotalTimes,UserID,Online,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "TimeLogin", name: "TimeLogin", create: true, edit: true, list: true , type: "datetime" }
			,/*2*/{ field: "TimeLogout", name: "TimeLogout", create: true, edit: true, list: true , type: "datetime" }
			,/*3*/{ field: "UpdatedTime", name: "UpdatedTime", create: true, edit: true, list: true , type: "datetime" }
			,/*4*/{ field: "TotalTimes", name: "TotalTimes", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*5*/{ field: "UserID", name: "UserID", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "Online", name: "Online", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*9*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*10*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "Logins",
            cols: [
               /*1*/{ ColName: 'TimeLogin', FormName: 'TimeLogin', PositionData: 1, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'TimeLogout', FormName: 'TimeLogout', PositionData: 2, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'UpdatedTime', FormName: 'UpdatedTime', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'TotalTimes', FormName: 'TotalTimes', PositionData: 4, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'UserID', FormName: 'UserID', PositionData: 5, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Online', FormName: 'Online', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "Loginsdetail",
            cols: [
               /*1*/{ ColName: 'TimeLogin', FormName: 'TimeLogin', PositionData: 1, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'TimeLogout', FormName: 'TimeLogout', PositionData: 2, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'UpdatedTime', FormName: 'UpdatedTime', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'TotalTimes', FormName: 'TotalTimes', PositionData: 4, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'UserID', FormName: 'UserID', PositionData: 5, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Online', FormName: 'Online', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'LogActivity' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "LogActivity",
            _id: "LogActivity",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetLogActivity", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetLogActivity", _f: "Id,task,todo,UpdatedTime,UserID,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetLogActivity", _f: "Id,task,todo,UpdatedTime,UserID,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "task", name: "task", create: true, edit: true, list: true  }
			,/*2*/{ field: "todo", name: "todo", create: true, edit: true, list: true  }
			,/*3*/{ field: "UpdatedTime", name: "UpdatedTime", create: true, edit: true, list: true , type: "datetime" }
			,/*4*/{ field: "UserID", name: "UserID", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "LogActivity",
            cols: [
               /*1*/{ ColName: 'task', FormName: 'task', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'todo', FormName: 'todo', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'UpdatedTime', FormName: 'UpdatedTime', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'UserID', FormName: 'UserID', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "LogActivitydetail",
            cols: [
               /*1*/{ ColName: 'task', FormName: 'task', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'todo', FormName: 'todo', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'UpdatedTime', FormName: 'UpdatedTime', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'UserID', FormName: 'UserID', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'Business' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "Business",
            _id: "Business",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetBusiness", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetBusiness", _f: "Id,Name,ShortName,Email,Address,Phone,City,District,Ward,CountryCode,StateCode,PostalCode,Logo,BannerLogo,OpenTime,Description,IndustryID,UserID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetBusiness", _f: "Id,Name,ShortName,Email,Address,Phone,City,District,Ward,CountryCode,StateCode,PostalCode,Logo,BannerLogo,OpenTime,Description,IndustryID,UserID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*2*/{ field: "ShortName", name: "ShortName", create: true, edit: true, list: true  }
			,/*3*/{ field: "Email", name: "Email", create: true, edit: true, list: true  }
			,/*4*/{ field: "Address", name: "Address", create: true, edit: true, list: true  }
			,/*5*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*6*/{ field: "City", name: "City", create: true, edit: true, list: true  }
			,/*7*/{ field: "District", name: "District", create: true, edit: true, list: true  }
			,/*8*/{ field: "Ward", name: "Ward", create: true, edit: true, list: true  }
			,/*9*/{ field: "CountryCode", name: "CountryCode", create: true, edit: true, list: true  }
			,/*10*/{ field: "StateCode", name: "StateCode", create: true, edit: true, list: true  }
			,/*11*/{ field: "PostalCode", name: "PostalCode", create: true, edit: true, list: true  }
			,/*12*/{ field: "Logo", name: "Logo", create: true, edit: true, list: true  }
			,/*13*/{ field: "BannerLogo", name: "BannerLogo", create: true, edit: true, list: true  }
			,/*14*/{ field: "OpenTime", name: "OpenTime", create: true, edit: true, list: true  }
			,/*15*/{ field: "Description", name: "Description", create: true, edit: true, list: true  }
			,/*16*/{ field: "IndustryID", name: "IndustryID", create: true, edit: true, list: true , type: "money"  }
			,/*17*/{ field: "UserID", name: "UserID", create: true, edit: true, list: true , type: "money"  }
			,/*18*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*19*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*20*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*21*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*22*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14,15], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [16,17], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [18,19], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [20,21], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14,15], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [16,17], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [18,19], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [20,21], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "Business",
            cols: [
               /*1*/{ ColName: 'Name', FormName: 'Name', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'ShortName', FormName: 'ShortName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Email', FormName: 'Email', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Address', FormName: 'Address', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Phone', FormName: 'Phone', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'City', FormName: 'City', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'District', FormName: 'District', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'Ward', FormName: 'Ward', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'CountryCode', FormName: 'CountryCode', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'StateCode', FormName: 'StateCode', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'PostalCode', FormName: 'PostalCode', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'Logo', FormName: 'Logo', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'BannerLogo', FormName: 'BannerLogo', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'OpenTime', FormName: 'OpenTime', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'Description', FormName: 'Description', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'IndustryID', FormName: 'IndustryID', PositionData: 16, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'UserID', FormName: 'UserID', PositionData: 17, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 18, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 19, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 20, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 21, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 22, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "Businessdetail",
            cols: [
               /*1*/{ ColName: 'Name', FormName: 'Name', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'ShortName', FormName: 'ShortName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Email', FormName: 'Email', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Address', FormName: 'Address', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Phone', FormName: 'Phone', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'City', FormName: 'City', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'District', FormName: 'District', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'Ward', FormName: 'Ward', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'CountryCode', FormName: 'CountryCode', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'StateCode', FormName: 'StateCode', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'PostalCode', FormName: 'PostalCode', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'Logo', FormName: 'Logo', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'BannerLogo', FormName: 'BannerLogo', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'OpenTime', FormName: 'OpenTime', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'Description', FormName: 'Description', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'IndustryID', FormName: 'IndustryID', PositionData: 16, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'UserID', FormName: 'UserID', PositionData: 17, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 18, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 19, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 20, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 21, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 22, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'BusinessTime' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "BusinessTime",
            _id: "BusinessTime",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetBusinessTime", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetBusinessTime", _f: "Id,dayth,opentime,closetime,BusinessID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetBusinessTime", _f: "Id,dayth,opentime,closetime,BusinessID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "dayth", name: "dayth", create: true, edit: true, list: true  }
			,/*2*/{ field: "opentime", name: "opentime", create: true, edit: true, list: true , type: "datetime" }
			,/*3*/{ field: "closetime", name: "closetime", create: true, edit: true, list: true , type: "datetime" }
			,/*4*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*9*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "BusinessTime",
            cols: [
               /*1*/{ ColName: 'dayth', FormName: 'dayth', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'opentime', FormName: 'opentime', PositionData: 2, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'closetime', FormName: 'closetime', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "BusinessTimedetail",
            cols: [
               /*1*/{ ColName: 'dayth', FormName: 'dayth', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'opentime', FormName: 'opentime', PositionData: 2, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'closetime', FormName: 'closetime', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'BusinessServiceStaffSetting' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "BusinessServiceStaffSetting",
            _id: "BusinessServiceStaffSetting",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetBusinessServiceStaffSetting", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetBusinessServiceStaffSetting", _f: "Id,Description,BusinessID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetBusinessServiceStaffSetting", _f: "Id,Description,BusinessID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Description", name: "Description", create: true, edit: true, list: true  }
			,/*2*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "BusinessServiceStaffSetting",
            cols: [
               /*1*/{ ColName: 'Description', FormName: 'Description', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "BusinessServiceStaffSettingdetail",
            cols: [
               /*1*/{ ColName: 'Description', FormName: 'Description', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'TicketSetting' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "TicketSetting",
            _id: "TicketSetting",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetTicketSetting", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetTicketSetting", _f: "Id,FieldName,FormName,TableName,Ordered,BusinessID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetTicketSetting", _f: "Id,FieldName,FormName,TableName,Ordered,BusinessID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "FieldName", name: "FieldName", create: true, edit: true, list: true  }
			,/*2*/{ field: "FormName", name: "FormName", create: true, edit: true, list: true  }
			,/*3*/{ field: "TableName", name: "TableName", create: true, edit: true, list: true  }
			,/*4*/{ field: "Ordered", name: "Ordered", create: true, edit: true, list: true  }
			,/*5*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*9*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*10*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "TicketSetting",
            cols: [
               /*1*/{ ColName: 'FieldName', FormName: 'FieldName', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'FormName', FormName: 'FormName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'TableName', FormName: 'TableName', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Ordered', FormName: 'Ordered', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 5, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "TicketSettingdetail",
            cols: [
               /*1*/{ ColName: 'FieldName', FormName: 'FieldName', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'FormName', FormName: 'FormName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'TableName', FormName: 'TableName', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Ordered', FormName: 'Ordered', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 5, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'CheckoutType' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "CheckoutType",
            _id: "CheckoutType",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetCheckoutType", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetCheckoutType", _f: "Id,Name,FormName,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetCheckoutType", _f: "Id,Name,FormName,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*2*/{ field: "FormName", name: "FormName", create: true, edit: true, list: true  }
			,/*3*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "CheckoutType",
            cols: [
               /*1*/{ ColName: 'Name', FormName: 'Name', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'FormName', FormName: 'FormName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "CheckoutTypedetail",
            cols: [
               /*1*/{ ColName: 'Name', FormName: 'Name', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'FormName', FormName: 'FormName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'CheckoutSetting' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "CheckoutSetting",
            _id: "CheckoutSetting",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetCheckoutSetting", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetCheckoutSetting", _f: "Id,PointBonus,CheckoutTypeID,BusinessID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetCheckoutSetting", _f: "Id,PointBonus,CheckoutTypeID,BusinessID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "PointBonus", name: "PointBonus", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*2*/{ field: "CheckoutTypeID", name: "CheckoutTypeID", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "CheckoutSetting",
            cols: [
               /*1*/{ ColName: 'PointBonus', FormName: 'PointBonus', PositionData: 1, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'CheckoutTypeID', FormName: 'CheckoutTypeID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "CheckoutSettingdetail",
            cols: [
               /*1*/{ ColName: 'PointBonus', FormName: 'PointBonus', PositionData: 1, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'CheckoutTypeID', FormName: 'CheckoutTypeID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'BusinessPolycies' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "BusinessPolycies",
            _id: "BusinessPolycies",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetBusinessPolycies", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetBusinessPolycies", _f: "Id,Description,OrtherPolices,BusinessID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetBusinessPolycies", _f: "Id,Description,OrtherPolices,BusinessID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Description", name: "Description", create: true, edit: true, list: true  }
			,/*2*/{ field: "OrtherPolices", name: "OrtherPolices", create: true, edit: true, list: true  }
			,/*3*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "BusinessPolycies",
            cols: [
               /*1*/{ ColName: 'Description', FormName: 'Description', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'OrtherPolices', FormName: 'OrtherPolices', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "BusinessPolyciesdetail",
            cols: [
               /*1*/{ ColName: 'Description', FormName: 'Description', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'OrtherPolices', FormName: 'OrtherPolices', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'BusinessLanguages' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "BusinessLanguages",
            _id: "BusinessLanguages",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetBusinessLanguages", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetBusinessLanguages", _f: "Id,BusinessID,LanguageID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetBusinessLanguages", _f: "Id,BusinessID,LanguageID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "LanguageID", name: "LanguageID", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "BusinessLanguages",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'LanguageID', FormName: 'LanguageID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "BusinessLanguagesdetail",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'LanguageID', FormName: 'LanguageID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'Languages' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "Languages",
            _id: "Languages",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetLanguages", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetLanguages", _f: "Id,Name,FormName,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetLanguages", _f: "Id,Name,FormName,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*2*/{ field: "FormName", name: "FormName", create: true, edit: true, list: true  }
			,/*3*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "Languages",
            cols: [
               /*1*/{ ColName: 'Name', FormName: 'Name', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'FormName', FormName: 'FormName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "Languagesdetail",
            cols: [
               /*1*/{ ColName: 'Name', FormName: 'Name', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'FormName', FormName: 'FormName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'SMS' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "SMS",
            _id: "SMS",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetSMS", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetSMS", _f: "Id,Name,FormName,NameTemplate,Description,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetSMS", _f: "Id,Name,FormName,NameTemplate,Description,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*2*/{ field: "FormName", name: "FormName", create: true, edit: true, list: true  }
			,/*3*/{ field: "NameTemplate", name: "NameTemplate", create: true, edit: true, list: true  }
			,/*4*/{ field: "Description", name: "Description", create: true, edit: true, list: true  }
			,/*5*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*9*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "SMS",
            cols: [
               /*1*/{ ColName: 'Name', FormName: 'Name', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'FormName', FormName: 'FormName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'NameTemplate', FormName: 'NameTemplate', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Description', FormName: 'Description', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "SMSdetail",
            cols: [
               /*1*/{ ColName: 'Name', FormName: 'Name', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'FormName', FormName: 'FormName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'NameTemplate', FormName: 'NameTemplate', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Description', FormName: 'Description', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'SMSGobalTemplate' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "SMSGobalTemplate",
            _id: "SMSGobalTemplate",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetSMSGobalTemplate", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetSMSGobalTemplate", _f: "Id,Name,FormName,NameTemplate,Description,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetSMSGobalTemplate", _f: "Id,Name,FormName,NameTemplate,Description,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*2*/{ field: "FormName", name: "FormName", create: true, edit: true, list: true  }
			,/*3*/{ field: "NameTemplate", name: "NameTemplate", create: true, edit: true, list: true  }
			,/*4*/{ field: "Description", name: "Description", create: true, edit: true, list: true  }
			,/*5*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*9*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "SMSGobalTemplate",
            cols: [
               /*1*/{ ColName: 'Name', FormName: 'Name', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'FormName', FormName: 'FormName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'NameTemplate', FormName: 'NameTemplate', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Description', FormName: 'Description', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "SMSGobalTemplatedetail",
            cols: [
               /*1*/{ ColName: 'Name', FormName: 'Name', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'FormName', FormName: 'FormName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'NameTemplate', FormName: 'NameTemplate', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Description', FormName: 'Description', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'BusinessSMS' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "BusinessSMS",
            _id: "BusinessSMS",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetBusinessSMS", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetBusinessSMS", _f: "Id,BusinessID,SMSID,ContentName,FormName,Description,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetBusinessSMS", _f: "Id,BusinessID,SMSID,ContentName,FormName,Description,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "SMSID", name: "SMSID", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "ContentName", name: "ContentName", create: true, edit: true, list: true  }
			,/*4*/{ field: "FormName", name: "FormName", create: true, edit: true, list: true  }
			,/*5*/{ field: "Description", name: "Description", create: true, edit: true, list: true  }
			,/*6*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*9*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*10*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "BusinessSMS",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'SMSID', FormName: 'SMSID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'ContentName', FormName: 'ContentName', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'FormName', FormName: 'FormName', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Description', FormName: 'Description', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "BusinessSMSdetail",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'SMSID', FormName: 'SMSID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'ContentName', FormName: 'ContentName', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'FormName', FormName: 'FormName', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Description', FormName: 'Description', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'PromotionDetail' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "PromotionDetail",
            _id: "PromotionDetail",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetPromotionDetail", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetPromotionDetail", _f: "Id,PromotionID,WhatOfferName,Discount,MixCustomerType,EmailTitle,BusinessName,OtherDesctiption,PhoneTest,EmailTest,ActiveSTOPfromUer,UseOneTimeThisPromotion,SendNow,Income,DateSendPromotion,UpdatedTime,SaveNextTime,ExpireDate,FromDate,ToDate,DeliverEmail,DeliverSMS,Description,TotalUserUsePromotionSMS,TotalUserUsePromotionEmail,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetPromotionDetail", _f: "Id,PromotionID,WhatOfferName,Discount,MixCustomerType,EmailTitle,BusinessName,OtherDesctiption,PhoneTest,EmailTest,ActiveSTOPfromUer,UseOneTimeThisPromotion,SendNow,Income,DateSendPromotion,UpdatedTime,SaveNextTime,ExpireDate,FromDate,ToDate,DeliverEmail,DeliverSMS,Description,TotalUserUsePromotionSMS,TotalUserUsePromotionEmail,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "PromotionID", name: "PromotionID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "WhatOfferName", name: "WhatOfferName", create: true, edit: true, list: true  }
			,/*3*/{ field: "Discount", name: "Discount", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*4*/{ field: "MixCustomerType", name: "MixCustomerType", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "EmailTitle", name: "EmailTitle", create: true, edit: true, list: true  }
			,/*6*/{ field: "BusinessName", name: "BusinessName", create: true, edit: true, list: true  }
			,/*7*/{ field: "OtherDesctiption", name: "OtherDesctiption", create: true, edit: true, list: true  }
			,/*8*/{ field: "PhoneTest", name: "PhoneTest", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*9*/{ field: "EmailTest", name: "EmailTest", create: true, edit: true, list: true  }
			,/*10*/{ field: "ActiveSTOPfromUer", name: "ActiveSTOPfromUer", create: true, edit: true, list: true , type: "money"  }
			,/*11*/{ field: "UseOneTimeThisPromotion", name: "UseOneTimeThisPromotion", create: true, edit: true, list: true , type: "money"  }
			,/*12*/{ field: "SendNow", name: "SendNow", create: true, edit: true, list: true , type: "money"  }
			,/*13*/{ field: "Income", name: "Income", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*14*/{ field: "DateSendPromotion", name: "DateSendPromotion", create: true, edit: true, list: true , type: "datetime" }
			,/*15*/{ field: "UpdatedTime", name: "UpdatedTime", create: true, edit: true, list: true , type: "datetime" }
			,/*16*/{ field: "SaveNextTime", name: "SaveNextTime", create: true, edit: true, list: true , type: "datetime" }
			,/*17*/{ field: "ExpireDate", name: "ExpireDate", create: true, edit: true, list: true , type: "datetime" }
			,/*18*/{ field: "FromDate", name: "FromDate", create: true, edit: true, list: true , type: "datetime" }
			,/*19*/{ field: "ToDate", name: "ToDate", create: true, edit: true, list: true , type: "datetime" }
			,/*20*/{ field: "DeliverEmail", name: "DeliverEmail", create: true, edit: true, list: true  }
			,/*21*/{ field: "DeliverSMS", name: "DeliverSMS", create: true, edit: true, list: true  }
			,/*22*/{ field: "Description", name: "Description", create: true, edit: true, list: true  }
			,/*23*/{ field: "TotalUserUsePromotionSMS", name: "TotalUserUsePromotionSMS", create: true, edit: true, list: true , type: "money"  }
			,/*24*/{ field: "TotalUserUsePromotionEmail", name: "TotalUserUsePromotionEmail", create: true, edit: true, list: true , type: "money"  }
			,/*25*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*26*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*27*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*28*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*29*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14,15], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [16,17], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [18,19], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [20,21], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [22,23], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [24,25], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [26,27], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [28], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14,15], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [16,17], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [18,19], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [20,21], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [22,23], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [24,25], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [26,27], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [28], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "PromotionDetail",
            cols: [
               /*1*/{ ColName: 'PromotionID', FormName: 'PromotionID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'WhatOfferName', FormName: 'WhatOfferName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Discount', FormName: 'Discount', PositionData: 3, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'MixCustomerType', FormName: 'MixCustomerType', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'EmailTitle', FormName: 'EmailTitle', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'BusinessName', FormName: 'BusinessName', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'OtherDesctiption', FormName: 'OtherDesctiption', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'PhoneTest', FormName: 'PhoneTest', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'EmailTest', FormName: 'EmailTest', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'ActiveSTOPfromUer', FormName: 'ActiveSTOPfromUer', PositionData: 10, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'UseOneTimeThisPromotion', FormName: 'UseOneTimeThisPromotion', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'SendNow', FormName: 'SendNow', PositionData: 12, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'Income', FormName: 'Income', PositionData: 13, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'DateSendPromotion', FormName: 'DateSendPromotion', PositionData: 14, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'UpdatedTime', FormName: 'UpdatedTime', PositionData: 15, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'SaveNextTime', FormName: 'SaveNextTime', PositionData: 16, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'ExpireDate', FormName: 'ExpireDate', PositionData: 17, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'FromDate', FormName: 'FromDate', PositionData: 18, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'ToDate', FormName: 'ToDate', PositionData: 19, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'DeliverEmail', FormName: 'DeliverEmail', PositionData: 20, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'DeliverSMS', FormName: 'DeliverSMS', PositionData: 21, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'Description', FormName: 'Description', PositionData: 22, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*23*/,{ ColName: 'TotalUserUsePromotionSMS', FormName: 'TotalUserUsePromotionSMS', PositionData: 23, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*24*/,{ ColName: 'TotalUserUsePromotionEmail', FormName: 'TotalUserUsePromotionEmail', PositionData: 24, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*25*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 25, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*26*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 26, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*27*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 27, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*28*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 28, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*29*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 29, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "PromotionDetaildetail",
            cols: [
               /*1*/{ ColName: 'PromotionID', FormName: 'PromotionID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'WhatOfferName', FormName: 'WhatOfferName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Discount', FormName: 'Discount', PositionData: 3, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'MixCustomerType', FormName: 'MixCustomerType', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'EmailTitle', FormName: 'EmailTitle', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'BusinessName', FormName: 'BusinessName', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'OtherDesctiption', FormName: 'OtherDesctiption', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'PhoneTest', FormName: 'PhoneTest', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'EmailTest', FormName: 'EmailTest', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'ActiveSTOPfromUer', FormName: 'ActiveSTOPfromUer', PositionData: 10, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'UseOneTimeThisPromotion', FormName: 'UseOneTimeThisPromotion', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'SendNow', FormName: 'SendNow', PositionData: 12, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'Income', FormName: 'Income', PositionData: 13, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'DateSendPromotion', FormName: 'DateSendPromotion', PositionData: 14, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'UpdatedTime', FormName: 'UpdatedTime', PositionData: 15, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'SaveNextTime', FormName: 'SaveNextTime', PositionData: 16, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'ExpireDate', FormName: 'ExpireDate', PositionData: 17, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'FromDate', FormName: 'FromDate', PositionData: 18, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'ToDate', FormName: 'ToDate', PositionData: 19, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'DeliverEmail', FormName: 'DeliverEmail', PositionData: 20, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'DeliverSMS', FormName: 'DeliverSMS', PositionData: 21, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'Description', FormName: 'Description', PositionData: 22, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*23*/,{ ColName: 'TotalUserUsePromotionSMS', FormName: 'TotalUserUsePromotionSMS', PositionData: 23, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*24*/,{ ColName: 'TotalUserUsePromotionEmail', FormName: 'TotalUserUsePromotionEmail', PositionData: 24, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*25*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 25, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*26*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 26, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*27*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 27, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*28*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 28, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*29*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 29, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'PromotionDashBoard' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "PromotionDashBoard",
            _id: "PromotionDashBoard",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetPromotionDashBoard", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetPromotionDashBoard", _f: "Id,BusinessID,PromotionID,TotalDelivered,Income,Expense,Phone,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetPromotionDashBoard", _f: "Id,BusinessID,PromotionID,TotalDelivered,Income,Expense,Phone,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "PromotionID", name: "PromotionID", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "TotalDelivered", name: "TotalDelivered", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*4*/{ field: "Income", name: "Income", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*5*/{ field: "Expense", name: "Expense", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*6*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*7*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*10*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*11*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "PromotionDashBoard",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'PromotionID', FormName: 'PromotionID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'TotalDelivered', FormName: 'TotalDelivered', PositionData: 3, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Income', FormName: 'Income', PositionData: 4, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Expense', FormName: 'Expense', PositionData: 5, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Phone', FormName: 'Phone', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 10, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "PromotionDashBoarddetail",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'PromotionID', FormName: 'PromotionID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'TotalDelivered', FormName: 'TotalDelivered', PositionData: 3, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Income', FormName: 'Income', PositionData: 4, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Expense', FormName: 'Expense', PositionData: 5, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Phone', FormName: 'Phone', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 10, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'PromotionDetailDashBoard' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "PromotionDetailDashBoard",
            _id: "PromotionDetailDashBoard",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetPromotionDetailDashBoard", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetPromotionDetailDashBoard", _f: "Id,BusinessID,PromotionID,CusomerName,CustomerPhone,NumVisit,TotalDelivered,Income,Expense,Phone,Email,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetPromotionDetailDashBoard", _f: "Id,BusinessID,PromotionID,CusomerName,CustomerPhone,NumVisit,TotalDelivered,Income,Expense,Phone,Email,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "PromotionID", name: "PromotionID", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "CusomerName", name: "CusomerName", create: true, edit: true, list: true  }
			,/*4*/{ field: "CustomerPhone", name: "CustomerPhone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*5*/{ field: "NumVisit", name: "NumVisit", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "TotalDelivered", name: "TotalDelivered", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*7*/{ field: "Income", name: "Income", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*8*/{ field: "Expense", name: "Expense", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*9*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*10*/{ field: "Email", name: "Email", create: true, edit: true, list: true  }
			,/*11*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*12*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*13*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*14*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*15*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "PromotionDetailDashBoard",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'PromotionID', FormName: 'PromotionID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'CusomerName', FormName: 'CusomerName', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'CustomerPhone', FormName: 'CustomerPhone', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'NumVisit', FormName: 'NumVisit', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'TotalDelivered', FormName: 'TotalDelivered', PositionData: 6, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'Income', FormName: 'Income', PositionData: 7, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'Expense', FormName: 'Expense', PositionData: 8, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'Phone', FormName: 'Phone', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'Email', FormName: 'Email', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 12, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 13, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 14, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "PromotionDetailDashBoarddetail",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'PromotionID', FormName: 'PromotionID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'CusomerName', FormName: 'CusomerName', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'CustomerPhone', FormName: 'CustomerPhone', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'NumVisit', FormName: 'NumVisit', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'TotalDelivered', FormName: 'TotalDelivered', PositionData: 6, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'Income', FormName: 'Income', PositionData: 7, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'Expense', FormName: 'Expense', PositionData: 8, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'Phone', FormName: 'Phone', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'Email', FormName: 'Email', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 12, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 13, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 14, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'Staff' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "Staff",
            _id: "Staff",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetStaff", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetStaff", _f: "Id,BusinessID,DepartmentID,Name,Avatar,Code,Phone,ortherPhone,Email,Address,Color,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetStaff", _f: "Id,BusinessID,DepartmentID,Name,Avatar,Code,Phone,ortherPhone,Email,Address,Color,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "DepartmentID", name: "DepartmentID", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*4*/{ field: "Avatar", name: "Avatar", create: true, edit: true, list: true  }
			,/*5*/{ field: "Code", name: "Code", create: true, edit: true, list: true  }
			,/*6*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*7*/{ field: "ortherPhone", name: "ortherPhone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*8*/{ field: "Email", name: "Email", create: true, edit: true, list: true  }
			,/*9*/{ field: "Address", name: "Address", create: true, edit: true, list: true  }
			,/*10*/{ field: "Color", name: "Color", create: true, edit: true, list: true  }
			,/*11*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*12*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*13*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*14*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*15*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "Staff",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'DepartmentID', FormName: 'DepartmentID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Name', FormName: 'Name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Avatar', FormName: 'Avatar', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Code', FormName: 'Code', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Phone', FormName: 'Phone', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'ortherPhone', FormName: 'ortherPhone', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'Email', FormName: 'Email', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'Address', FormName: 'Address', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'Color', FormName: 'Color', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 12, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 13, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 14, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "Staffdetail",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'DepartmentID', FormName: 'DepartmentID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Name', FormName: 'Name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Avatar', FormName: 'Avatar', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Code', FormName: 'Code', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Phone', FormName: 'Phone', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'ortherPhone', FormName: 'ortherPhone', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'Email', FormName: 'Email', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'Address', FormName: 'Address', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'Color', FormName: 'Color', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 12, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 13, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 14, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'StaffWorkingTime' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "StaffWorkingTime",
            _id: "StaffWorkingTime",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetStaffWorkingTime", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetStaffWorkingTime", _f: "Id,StaffID,Dayth,InTime,OutTime,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetStaffWorkingTime", _f: "Id,StaffID,Dayth,InTime,OutTime,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "StaffID", name: "StaffID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "Dayth", name: "Dayth", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "InTime", name: "InTime", create: true, edit: true, list: true , type: "datetime" }
			,/*4*/{ field: "OutTime", name: "OutTime", create: true, edit: true, list: true , type: "datetime" }
			,/*5*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*9*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "StaffWorkingTime",
            cols: [
               /*1*/{ ColName: 'StaffID', FormName: 'StaffID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Dayth', FormName: 'Dayth', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'InTime', FormName: 'InTime', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'OutTime', FormName: 'OutTime', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "StaffWorkingTimedetail",
            cols: [
               /*1*/{ ColName: 'StaffID', FormName: 'StaffID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Dayth', FormName: 'Dayth', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'InTime', FormName: 'InTime', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'OutTime', FormName: 'OutTime', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'Department' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "Department",
            _id: "Department",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetDepartment", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetDepartment", _f: "Id,Code,Name,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetDepartment", _f: "Id,Code,Name,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Code", name: "Code", create: true, edit: true, list: true  }
			,/*2*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*3*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "Department",
            cols: [
               /*1*/{ ColName: 'Code', FormName: 'Code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Name', FormName: 'Name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "Departmentdetail",
            cols: [
               /*1*/{ ColName: 'Code', FormName: 'Code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Name', FormName: 'Name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'StaffServives' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "StaffServives",
            _id: "StaffServives",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetStaffServives", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetStaffServives", _f: "Id,StaffID,ServicesID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetStaffServives", _f: "Id,StaffID,ServicesID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "StaffID", name: "StaffID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "ServicesID", name: "ServicesID", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "StaffServives",
            cols: [
               /*1*/{ ColName: 'StaffID', FormName: 'StaffID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'ServicesID', FormName: 'ServicesID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "StaffServivesdetail",
            cols: [
               /*1*/{ ColName: 'StaffID', FormName: 'StaffID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'ServicesID', FormName: 'ServicesID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'Categorys' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "Categorys",
            _id: "Categorys",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetCategorys", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetCategorys", _f: "Id,Code,Name,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetCategorys", _f: "Id,Code,Name,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Code", name: "Code", create: true, edit: true, list: true  }
			,/*2*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*3*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "Categorys",
            cols: [
               /*1*/{ ColName: 'Code', FormName: 'Code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Name', FormName: 'Name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "Categorysdetail",
            cols: [
               /*1*/{ ColName: 'Code', FormName: 'Code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Name', FormName: 'Name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'Services' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "Services",
            _id: "Services",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetServices", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetServices", _f: "Id,BusinessID,ServicesID,CategoryID,Name,Price,Duration,NumStaffDoIt,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetServices", _f: "Id,BusinessID,ServicesID,CategoryID,Name,Price,Duration,NumStaffDoIt,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "ServicesID", name: "ServicesID", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "CategoryID", name: "CategoryID", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*5*/{ field: "Price", name: "Price", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*6*/{ field: "Duration", name: "Duration", create: true, edit: true, list: true  }
			,/*7*/{ field: "NumStaffDoIt", name: "NumStaffDoIt", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*10*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*11*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*12*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "Services",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'ServicesID', FormName: 'ServicesID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'CategoryID', FormName: 'CategoryID', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Name', FormName: 'Name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Price', FormName: 'Price', PositionData: 5, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Duration', FormName: 'Duration', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'NumStaffDoIt', FormName: 'NumStaffDoIt', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 9, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 10, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 11, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "Servicesdetail",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'ServicesID', FormName: 'ServicesID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'CategoryID', FormName: 'CategoryID', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Name', FormName: 'Name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Price', FormName: 'Price', PositionData: 5, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Duration', FormName: 'Duration', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'NumStaffDoIt', FormName: 'NumStaffDoIt', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 9, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 10, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 11, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'CustomerType' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "CustomerType",
            _id: "CustomerType",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetCustomerType", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetCustomerType", _f: "Id,BusinessID,Name,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetCustomerType", _f: "Id,BusinessID,Name,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*3*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "CustomerType",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Name', FormName: 'Name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "CustomerTypedetail",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Name', FormName: 'Name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'Customers' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "Customers",
            _id: "Customers",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetCustomers", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetCustomers", _f: "Id,BusinessID,Name,Phone,Email,Birthday,CustTypeID,VisitCount,LifeTimePoint,CurrentPoint,SMSSent,EmailSent,Note,AnniversaryDay,RelationInfo,OcupationInfo,LastVisited,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetCustomers", _f: "Id,BusinessID,Name,Phone,Email,Birthday,CustTypeID,VisitCount,LifeTimePoint,CurrentPoint,SMSSent,EmailSent,Note,AnniversaryDay,RelationInfo,OcupationInfo,LastVisited,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*3*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*4*/{ field: "Email", name: "Email", create: true, edit: true, list: true  }
			,/*5*/{ field: "Birthday", name: "Birthday", create: true, edit: true, list: true  }
			,/*6*/{ field: "CustTypeID", name: "CustTypeID", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "VisitCount", name: "VisitCount", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "LifeTimePoint", name: "LifeTimePoint", create: true, edit: true, list: true  }
			,/*9*/{ field: "CurrentPoint", name: "CurrentPoint", create: true, edit: true, list: true  }
			,/*10*/{ field: "SMSSent", name: "SMSSent", create: true, edit: true, list: true  }
			,/*11*/{ field: "EmailSent", name: "EmailSent", create: true, edit: true, list: true  }
			,/*12*/{ field: "Note", name: "Note", create: true, edit: true, list: true  }
			,/*13*/{ field: "AnniversaryDay", name: "AnniversaryDay", create: true, edit: true, list: true  }
			,/*14*/{ field: "RelationInfo", name: "RelationInfo", create: true, edit: true, list: true  }
			,/*15*/{ field: "OcupationInfo", name: "OcupationInfo", create: true, edit: true, list: true  }
			,/*16*/{ field: "LastVisited", name: "LastVisited", create: true, edit: true, list: true , type: "datetime" }
			,/*17*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*18*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*19*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*20*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*21*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14,15], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [16,17], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [18,19], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [20], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14,15], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [16,17], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [18,19], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [20], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "Customers",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Name', FormName: 'Name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Phone', FormName: 'Phone', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Email', FormName: 'Email', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Birthday', FormName: 'Birthday', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'CustTypeID', FormName: 'CustTypeID', PositionData: 6, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'VisitCount', FormName: 'VisitCount', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'LifeTimePoint', FormName: 'LifeTimePoint', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'CurrentPoint', FormName: 'CurrentPoint', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'SMSSent', FormName: 'SMSSent', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'EmailSent', FormName: 'EmailSent', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'Note', FormName: 'Note', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'AnniversaryDay', FormName: 'AnniversaryDay', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'RelationInfo', FormName: 'RelationInfo', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'OcupationInfo', FormName: 'OcupationInfo', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'LastVisited', FormName: 'LastVisited', PositionData: 16, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 17, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 18, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 19, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 20, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 21, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "Customersdetail",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Name', FormName: 'Name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Phone', FormName: 'Phone', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Email', FormName: 'Email', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Birthday', FormName: 'Birthday', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'CustTypeID', FormName: 'CustTypeID', PositionData: 6, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'VisitCount', FormName: 'VisitCount', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'LifeTimePoint', FormName: 'LifeTimePoint', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'CurrentPoint', FormName: 'CurrentPoint', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'SMSSent', FormName: 'SMSSent', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'EmailSent', FormName: 'EmailSent', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'Note', FormName: 'Note', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'AnniversaryDay', FormName: 'AnniversaryDay', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'RelationInfo', FormName: 'RelationInfo', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'OcupationInfo', FormName: 'OcupationInfo', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'LastVisited', FormName: 'LastVisited', PositionData: 16, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 17, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 18, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 19, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 20, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 21, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'Orders' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "Orders",
            _id: "Orders",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetOrders", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetOrders", _f: "Id,BusinessID,CustomerID,DateCheckIn,DateCheckOut,DateDeliveryInfo,DaySendInfo,RoomInfo,PersonReceiveInfo,StatusOrder,AnniversaryDay,RelationInfo,OcupationInfo,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetOrders", _f: "Id,BusinessID,CustomerID,DateCheckIn,DateCheckOut,DateDeliveryInfo,DaySendInfo,RoomInfo,PersonReceiveInfo,StatusOrder,AnniversaryDay,RelationInfo,OcupationInfo,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "CustomerID", name: "CustomerID", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "DateCheckIn", name: "DateCheckIn", create: true, edit: true, list: true , type: "datetime" }
			,/*4*/{ field: "DateCheckOut", name: "DateCheckOut", create: true, edit: true, list: true , type: "datetime" }
			,/*5*/{ field: "DateDeliveryInfo", name: "DateDeliveryInfo", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "DaySendInfo", name: "DaySendInfo", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "RoomInfo", name: "RoomInfo", create: true, edit: true, list: true  }
			,/*8*/{ field: "PersonReceiveInfo", name: "PersonReceiveInfo", create: true, edit: true, list: true  }
			,/*9*/{ field: "StatusOrder", name: "StatusOrder", create: true, edit: true, list: true  }
			,/*10*/{ field: "AnniversaryDay", name: "AnniversaryDay", create: true, edit: true, list: true  }
			,/*11*/{ field: "RelationInfo", name: "RelationInfo", create: true, edit: true, list: true  }
			,/*12*/{ field: "OcupationInfo", name: "OcupationInfo", create: true, edit: true, list: true  }
			,/*13*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*14*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*15*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*16*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*17*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14,15], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [16], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14,15], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [16], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "Orders",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'CustomerID', FormName: 'CustomerID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'DateCheckIn', FormName: 'DateCheckIn', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'DateCheckOut', FormName: 'DateCheckOut', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'DateDeliveryInfo', FormName: 'DateDeliveryInfo', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'DaySendInfo', FormName: 'DaySendInfo', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'RoomInfo', FormName: 'RoomInfo', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'PersonReceiveInfo', FormName: 'PersonReceiveInfo', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'StatusOrder', FormName: 'StatusOrder', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'AnniversaryDay', FormName: 'AnniversaryDay', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'RelationInfo', FormName: 'RelationInfo', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'OcupationInfo', FormName: 'OcupationInfo', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 13, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 14, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 15, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 16, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 17, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "Ordersdetail",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'CustomerID', FormName: 'CustomerID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'DateCheckIn', FormName: 'DateCheckIn', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'DateCheckOut', FormName: 'DateCheckOut', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'DateDeliveryInfo', FormName: 'DateDeliveryInfo', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'DaySendInfo', FormName: 'DaySendInfo', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'RoomInfo', FormName: 'RoomInfo', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'PersonReceiveInfo', FormName: 'PersonReceiveInfo', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'StatusOrder', FormName: 'StatusOrder', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'AnniversaryDay', FormName: 'AnniversaryDay', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'RelationInfo', FormName: 'RelationInfo', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'OcupationInfo', FormName: 'OcupationInfo', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 13, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 14, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 15, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 16, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 17, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'OrderDetail' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "OrderDetail",
            _id: "OrderDetail",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetOrderDetail", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetOrderDetail", _f: "Id,ServicesID,OrderID,StaffID,Price,TIP,NumServices,Discount,Total,Coupon,Note,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetOrderDetail", _f: "Id,ServicesID,OrderID,StaffID,Price,TIP,NumServices,Discount,Total,Coupon,Note,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "ServicesID", name: "ServicesID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "OrderID", name: "OrderID", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "StaffID", name: "StaffID", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "Price", name: "Price", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*5*/{ field: "TIP", name: "TIP", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*6*/{ field: "NumServices", name: "NumServices", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "Discount", name: "Discount", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*8*/{ field: "Total", name: "Total", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*9*/{ field: "Coupon", name: "Coupon", create: true, edit: true, list: true  }
			,/*10*/{ field: "Note", name: "Note", create: true, edit: true, list: true  }
			,/*11*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*12*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*13*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*14*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*15*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "OrderDetail",
            cols: [
               /*1*/{ ColName: 'ServicesID', FormName: 'ServicesID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'OrderID', FormName: 'OrderID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'StaffID', FormName: 'StaffID', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Price', FormName: 'Price', PositionData: 4, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'TIP', FormName: 'TIP', PositionData: 5, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'NumServices', FormName: 'NumServices', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'Discount', FormName: 'Discount', PositionData: 7, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'Total', FormName: 'Total', PositionData: 8, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'Coupon', FormName: 'Coupon', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'Note', FormName: 'Note', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 12, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 13, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 14, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "OrderDetaildetail",
            cols: [
               /*1*/{ ColName: 'ServicesID', FormName: 'ServicesID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'OrderID', FormName: 'OrderID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'StaffID', FormName: 'StaffID', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Price', FormName: 'Price', PositionData: 4, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'TIP', FormName: 'TIP', PositionData: 5, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'NumServices', FormName: 'NumServices', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'Discount', FormName: 'Discount', PositionData: 7, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'Total', FormName: 'Total', PositionData: 8, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'Coupon', FormName: 'Coupon', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'Note', FormName: 'Note', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 12, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 13, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 14, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'Promotions' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "Promotions",
            _id: "Promotions",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetPromotions", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetPromotions", _f: "Id,BusinessID,Name,Expense,Income,NumOrderd,DateSent,DateStop,DeliverEmail,DeliverSMS,TotalUserUsePromotionSMS,TotalUserUsePromotionEmail,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetPromotions", _f: "Id,BusinessID,Name,Expense,Income,NumOrderd,DateSent,DateStop,DeliverEmail,DeliverSMS,TotalUserUsePromotionSMS,TotalUserUsePromotionEmail,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*3*/{ field: "Expense", name: "Expense", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*4*/{ field: "Income", name: "Income", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*5*/{ field: "NumOrderd", name: "NumOrderd", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "DateSent", name: "DateSent", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "DateStop", name: "DateStop", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "DeliverEmail", name: "DeliverEmail", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*9*/{ field: "DeliverSMS", name: "DeliverSMS", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*10*/{ field: "TotalUserUsePromotionSMS", name: "TotalUserUsePromotionSMS", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*11*/{ field: "TotalUserUsePromotionEmail", name: "TotalUserUsePromotionEmail", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*12*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*13*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*14*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*15*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*16*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14,15], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [14,15], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "Promotions",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Name', FormName: 'Name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Expense', FormName: 'Expense', PositionData: 3, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Income', FormName: 'Income', PositionData: 4, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'NumOrderd', FormName: 'NumOrderd', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'DateSent', FormName: 'DateSent', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'DateStop', FormName: 'DateStop', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'DeliverEmail', FormName: 'DeliverEmail', PositionData: 8, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'DeliverSMS', FormName: 'DeliverSMS', PositionData: 9, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'TotalUserUsePromotionSMS', FormName: 'TotalUserUsePromotionSMS', PositionData: 10, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'TotalUserUsePromotionEmail', FormName: 'TotalUserUsePromotionEmail', PositionData: 11, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 12, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 13, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 14, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 15, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 16, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "Promotionsdetail",
            cols: [
               /*1*/{ ColName: 'BusinessID', FormName: 'BusinessID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Name', FormName: 'Name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Expense', FormName: 'Expense', PositionData: 3, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Income', FormName: 'Income', PositionData: 4, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'NumOrderd', FormName: 'NumOrderd', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'DateSent', FormName: 'DateSent', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'DateStop', FormName: 'DateStop', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'DeliverEmail', FormName: 'DeliverEmail', PositionData: 8, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'DeliverSMS', FormName: 'DeliverSMS', PositionData: 9, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'TotalUserUsePromotionSMS', FormName: 'TotalUserUsePromotionSMS', PositionData: 10, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'TotalUserUsePromotionEmail', FormName: 'TotalUserUsePromotionEmail', PositionData: 11, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 12, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 13, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 14, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 15, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 16, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'GroupRights' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "GroupRights",
            _id: "GroupRights",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetGroupRights", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetGroupRights", _f: "Id,ParentGroupID,Code,Name,Path,Description,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetGroupRights", _f: "Id,ParentGroupID,Code,Name,Path,Description,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "ParentGroupID", name: "ParentGroupID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "Code", name: "Code", create: true, edit: true, list: true  }
			,/*3*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*4*/{ field: "Path", name: "Path", create: true, edit: true, list: true  }
			,/*5*/{ field: "Description", name: "Description", create: true, edit: true, list: true  }
			,/*6*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*9*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*10*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "GroupRights",
            cols: [
               /*1*/{ ColName: 'ParentGroupID', FormName: 'ParentGroupID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Code', FormName: 'Code', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Name', FormName: 'Name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Path', FormName: 'Path', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Description', FormName: 'Description', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "GroupRightsdetail",
            cols: [
               /*1*/{ ColName: 'ParentGroupID', FormName: 'ParentGroupID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Code', FormName: 'Code', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Name', FormName: 'Name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Path', FormName: 'Path', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Description', FormName: 'Description', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'GroupRightDetail' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "GroupRightDetail",
            _id: "GroupRightDetail",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetGroupRightDetail", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetGroupRightDetail", _f: "Id,GroupID,ParentGroupID,subGroup,Name,Path,Description,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetGroupRightDetail", _f: "Id,GroupID,ParentGroupID,subGroup,Name,Path,Description,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "GroupID", name: "GroupID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "ParentGroupID", name: "ParentGroupID", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "subGroup", name: "subGroup", create: true, edit: true, list: true  }
			,/*4*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*5*/{ field: "Path", name: "Path", create: true, edit: true, list: true  }
			,/*6*/{ field: "Description", name: "Description", create: true, edit: true, list: true  }
			,/*7*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*10*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*11*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "GroupRightDetail",
            cols: [
               /*1*/{ ColName: 'GroupID', FormName: 'GroupID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'ParentGroupID', FormName: 'ParentGroupID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'subGroup', FormName: 'subGroup', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Name', FormName: 'Name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Path', FormName: 'Path', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Description', FormName: 'Description', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 10, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "GroupRightDetaildetail",
            cols: [
               /*1*/{ ColName: 'GroupID', FormName: 'GroupID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'ParentGroupID', FormName: 'ParentGroupID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'subGroup', FormName: 'subGroup', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Name', FormName: 'Name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Path', FormName: 'Path', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Description', FormName: 'Description', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 10, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },
         
 'Roles' : {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "Roles",
            _id: "Roles",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetRoles", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetRoles", _f: "Id,UserID,GroupRightID,Permission,SubPermission,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }
				,{ AjaxObj: { a: "fGetRoles", _f: "Id,UserID,GroupRightID,Permission,SubPermission,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "UserID", name: "UserID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "GroupRightID", name: "GroupRightID", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "Permission", name: "Permission", create: true, edit: true, list: true  }
			,/*4*/{ field: "SubPermission", name: "SubPermission", create: true, edit: true, list: true  }
			,/*5*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "isValid", name: "isValid", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "isCreatedDate", name: "isCreatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "isUpdatedDate", name: "isUpdatedDate", create: true, edit: true, list: true , type: "datetime" }
			,/*9*/{ field: "isPartFull", name: "isPartFull", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "Roles",
            cols: [
               /*1*/{ ColName: 'UserID', FormName: 'UserID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'GroupRightID', FormName: 'GroupRightID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Permission', FormName: 'Permission', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'SubPermission', FormName: 'SubPermission', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "Rolesdetail",
            cols: [
               /*1*/{ ColName: 'UserID', FormName: 'UserID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'GroupRightID', FormName: 'GroupRightID', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Permission', FormName: 'Permission', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'SubPermission', FormName: 'SubPermission', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'isActive', FormName: 'isActive', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'isValid', FormName: 'isValid', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'isCreatedDate', FormName: 'isCreatedDate', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'isUpdatedDate', FormName: 'isUpdatedDate', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'isPartFull', FormName: 'isPartFull', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        },

        
};
