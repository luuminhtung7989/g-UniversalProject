var _gbDictionary = {
    _Self: new Map(),
      _sessionStore: {
                UserId: -1, UserName: "", SesstionId: "", ClientName: "",
                CompanyName: "", CompanyTel: "", BrandName: "", DepartmentName: "",
                CurDate: null,
                DeptId: -1, BrandId: -1, CompanyId: -1, EmployeeId: -1,
                keyApp: "", sessionKey: ""
            },
                get: function (tablename) {
                    return this._Self.get(tablename);
                },
    init: function () {
         var obj0 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "sysdiagrams",
            _id: "sysdiagrams",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetsysdiagrams", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetsysdiagrams", _f: "name,principal_id,diagram_id,version,definition", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetsysdiagrams", _f: "name,principal_id,diagram_id,version,definition", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

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
        };
         this._Self.set('sysdiagrams', obj0);
         var obj1 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bill_assign_detail_bill",
            _id: "bill_assign_detail_bill",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbill_assign_detail_bill", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_assign_detail_bill", _f: "bill_assign_detail_id,bill_id,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_assign_detail_bill", _f: "bill_assign_detail_id,bill_id,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "bill_assign_detail_id", name: "bill_assign_detail_id", create: true, edit: true, list: true , type: "money"  }
			,/*1*/{ field: "bill_id", name: "bill_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*3*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*4*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*5*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*6*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*7*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*8*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "bill_assign_detail_bill",
            cols: [
               /*1*/{ ColName: 'bill_assign_detail_id', FormName: 'bill_assign_detail_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_id', FormName: 'bill_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bill_assign_detail_billdetail",
            cols: [
               /*1*/{ ColName: 'bill_assign_detail_id', FormName: 'bill_assign_detail_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_id', FormName: 'bill_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bill_assign_detail_bill', obj1);
         var obj2 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bill_request_sms",
            _id: "bill_request_sms",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbill_request_sms", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_request_sms", _f: "sms_id,bill_assign_id,bill_request_id,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_request_sms", _f: "sms_id,bill_assign_id,bill_request_id,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "sms_id", name: "sms_id", create: true, edit: true, list: true , type: "money"  }
			,/*1*/{ field: "bill_assign_id", name: "bill_assign_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "bill_request_id", name: "bill_request_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*5*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*6*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*7*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*8*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "bill_request_sms",
            cols: [
               /*1*/{ ColName: 'sms_id', FormName: 'sms_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_assign_id', FormName: 'bill_assign_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'bill_request_id', FormName: 'bill_request_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'note', FormName: 'note', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bill_request_smsdetail",
            cols: [
               /*1*/{ ColName: 'sms_id', FormName: 'sms_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_assign_id', FormName: 'bill_assign_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'bill_request_id', FormName: 'bill_request_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'note', FormName: 'note', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bill_request_sms', obj2);
         var obj3 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "department_manage_account",
            _id: "department_manage_account",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetdepartment_manage_account", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetdepartment_manage_account", _f: "department_id,account_id,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetdepartment_manage_account", _f: "department_id,account_id,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "department_id", name: "department_id", create: true, edit: true, list: true , type: "money"  }
			,/*1*/{ field: "account_id", name: "account_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*3*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*4*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*5*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*6*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*7*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*8*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "department_manage_account",
            cols: [
               /*1*/{ ColName: 'department_id', FormName: 'department_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "department_manage_accountdetail",
            cols: [
               /*1*/{ ColName: 'department_id', FormName: 'department_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('department_manage_account', obj3);
         var obj4 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "receipt_bill_request",
            _id: "receipt_bill_request",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetreceipt_bill_request", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreceipt_bill_request", _f: "id,receipt_id,bill_assign_id,bill_request_id,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreceipt_bill_request", _f: "id,receipt_id,bill_assign_id,bill_request_id,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "receipt_id", name: "receipt_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "bill_assign_id", name: "bill_assign_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "bill_request_id", name: "bill_request_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*5*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*6*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*7*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*8*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "receipt_bill_request",
            cols: [
               /*1*/{ ColName: 'receipt_id', FormName: 'receipt_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_assign_id', FormName: 'bill_assign_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'bill_request_id', FormName: 'bill_request_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'note', FormName: 'note', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "receipt_bill_requestdetail",
            cols: [
               /*1*/{ ColName: 'receipt_id', FormName: 'receipt_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_assign_id', FormName: 'bill_assign_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'bill_request_id', FormName: 'bill_request_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'note', FormName: 'note', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('receipt_bill_request', obj4);
         var obj5 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "supplier_profile",
            _id: "supplier_profile",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetsupplier_profile", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetsupplier_profile", _f: "supplier_id,profile_id,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetsupplier_profile", _f: "supplier_id,profile_id,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "supplier_id", name: "supplier_id", create: true, edit: true, list: true , type: "money"  }
			,/*1*/{ field: "profile_id", name: "profile_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*3*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*4*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*5*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*6*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*7*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*8*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "supplier_profile",
            cols: [
               /*1*/{ ColName: 'supplier_id', FormName: 'supplier_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'profile_id', FormName: 'profile_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "supplier_profiledetail",
            cols: [
               /*1*/{ ColName: 'supplier_id', FormName: 'supplier_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'profile_id', FormName: 'profile_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('supplier_profile', obj5);
         var obj6 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "zone_group_country",
            _id: "zone_group_country",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetzone_group_country", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetzone_group_country", _f: "zone_group_id,country_id,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetzone_group_country", _f: "zone_group_id,country_id,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "zone_group_id", name: "zone_group_id", create: true, edit: true, list: true , type: "money"  }
			,/*1*/{ field: "country_id", name: "country_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*3*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*4*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*5*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*6*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*7*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*8*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "zone_group_country",
            cols: [
               /*1*/{ ColName: 'zone_group_id', FormName: 'zone_group_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'country_id', FormName: 'country_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "zone_group_countrydetail",
            cols: [
               /*1*/{ ColName: 'zone_group_id', FormName: 'zone_group_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'country_id', FormName: 'country_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('zone_group_country', obj6);
         var obj7 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "zone_group_zone",
            _id: "zone_group_zone",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetzone_group_zone", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetzone_group_zone", _f: "zone_group_id,zone_id,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetzone_group_zone", _f: "zone_group_id,zone_id,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "zone_group_id", name: "zone_group_id", create: true, edit: true, list: true , type: "money"  }
			,/*1*/{ field: "zone_id", name: "zone_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*3*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*4*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*5*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*6*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*7*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*8*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "zone_group_zone",
            cols: [
               /*1*/{ ColName: 'zone_group_id', FormName: 'zone_group_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'zone_id', FormName: 'zone_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "zone_group_zonedetail",
            cols: [
               /*1*/{ ColName: 'zone_group_id', FormName: 'zone_group_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'zone_id', FormName: 'zone_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('zone_group_zone', obj7);
         var obj8 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bag_confirm_detail",
            _id: "bag_confirm_detail",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbag_confirm_detail", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbag_confirm_detail", _f: "id,bag_confirm_id,bill_package_id,account_id,time,barcode,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbag_confirm_detail", _f: "id,bag_confirm_id,bill_package_id,account_id,time,barcode,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "bag_confirm_id", name: "bag_confirm_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "bill_package_id", name: "bill_package_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "account_id", name: "account_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "time", name: "time", create: true, edit: true, list: true , type: "datetime" }
			,/*5*/{ field: "barcode", name: "barcode", create: true, edit: true, list: true ,color: 'orange', addon:  { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-barcode' } }
			,/*6*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*7*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*8*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*10*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*11*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*12*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*13*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "bag_confirm_detail",
            cols: [
               /*1*/{ ColName: 'bag_confirm_id', FormName: 'bag_confirm_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_package_id', FormName: 'bill_package_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'time', FormName: 'time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'barcode', FormName: 'barcode', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'note', FormName: 'note', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'status', FormName: 'status', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bag_confirm_detaildetail",
            cols: [
               /*1*/{ ColName: 'bag_confirm_id', FormName: 'bag_confirm_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_package_id', FormName: 'bill_package_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'time', FormName: 'time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'barcode', FormName: 'barcode', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'note', FormName: 'note', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'status', FormName: 'status', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bag_confirm_detail', obj8);
         var obj9 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bill_assign_detail_package",
            _id: "bill_assign_detail_package",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbill_assign_detail_package", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_assign_detail_package", _f: "id,bill_assign_id,bill_package_id,account_id,assign_account_id,create_time,confirm_account_id,confirm_time,confirm_status,confirm_note,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_assign_detail_package", _f: "id,bill_assign_id,bill_package_id,account_id,assign_account_id,create_time,confirm_account_id,confirm_time,confirm_status,confirm_note,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "bill_assign_id", name: "bill_assign_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "bill_package_id", name: "bill_package_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "account_id", name: "account_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "assign_account_id", name: "assign_account_id", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "create_time", name: "create_time", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "confirm_account_id", name: "confirm_account_id", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "confirm_time", name: "confirm_time", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "confirm_status", name: "confirm_status", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "confirm_note", name: "confirm_note", create: true, edit: true, list: true  }
			,/*10*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*11*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*12*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*13*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*14*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*15*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*16*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*17*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "bill_assign_detail_package",
            cols: [
               /*1*/{ ColName: 'bill_assign_id', FormName: 'bill_assign_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_package_id', FormName: 'bill_package_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'assign_account_id', FormName: 'assign_account_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'create_time', FormName: 'create_time', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'confirm_account_id', FormName: 'confirm_account_id', PositionData: 6, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'confirm_time', FormName: 'confirm_time', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'confirm_status', FormName: 'confirm_status', PositionData: 8, IsShow: 'isShow', ColType: 'smallint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'confirm_note', FormName: 'confirm_note', PositionData: 9, IsShow: 'isShow', ColType: 'ntext', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'note', FormName: 'note', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'status', FormName: 'status', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bill_assign_detail_packagedetail",
            cols: [
               /*1*/{ ColName: 'bill_assign_id', FormName: 'bill_assign_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_package_id', FormName: 'bill_package_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'assign_account_id', FormName: 'assign_account_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'create_time', FormName: 'create_time', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'confirm_account_id', FormName: 'confirm_account_id', PositionData: 6, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'confirm_time', FormName: 'confirm_time', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'confirm_status', FormName: 'confirm_status', PositionData: 8, IsShow: 'isShow', ColType: 'smallint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'confirm_note', FormName: 'confirm_note', PositionData: 9, IsShow: 'isShow', ColType: 'ntext', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'note', FormName: 'note', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'status', FormName: 'status', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bill_assign_detail_package', obj9);
         var obj10 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "action",
            _id: "action",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetaction", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetaction", _f: "id,note,url,name,image,controller_id,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetaction", _f: "id,note,url,name,image,controller_id,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*2*/{ field: "url", name: "url", create: true, edit: true, list: true  }
			,/*3*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*4*/{ field: "image", name: "image", create: true, edit: true, list: true  }
			,/*5*/{ field: "controller_id", name: "controller_id", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*7*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*9*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*11*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*12*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "action",
            cols: [
               /*1*/{ ColName: 'note', FormName: 'note', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'url', FormName: 'url', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'name', FormName: 'name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'image', FormName: 'image', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'controller_id', FormName: 'controller_id', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "actiondetail",
            cols: [
               /*1*/{ ColName: 'note', FormName: 'note', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'url', FormName: 'url', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'name', FormName: 'name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'image', FormName: 'image', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'controller_id', FormName: 'controller_id', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('action', obj10);
         var obj11 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bill_assign_detail",
            _id: "bill_assign_detail",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbill_assign_detail", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_assign_detail", _f: "id,bill_assign_id,bill_request_id,voucher_id,account_id,assign_account_id,create_time,status,confirm_account_id,confirm_time,confirm_note,confirm_status,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_assign_detail", _f: "id,bill_assign_id,bill_request_id,voucher_id,account_id,assign_account_id,create_time,status,confirm_account_id,confirm_time,confirm_note,confirm_status,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "bill_assign_id", name: "bill_assign_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "bill_request_id", name: "bill_request_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "voucher_id", name: "voucher_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "account_id", name: "account_id", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "assign_account_id", name: "assign_account_id", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "create_time", name: "create_time", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*8*/{ field: "confirm_account_id", name: "confirm_account_id", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "confirm_time", name: "confirm_time", create: true, edit: true, list: true , type: "datetime" }
			,/*10*/{ field: "confirm_note", name: "confirm_note", create: true, edit: true, list: true  }
			,/*11*/{ field: "confirm_status", name: "confirm_status", create: true, edit: true, list: true , type: "money"  }
			,/*12*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*13*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*14*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*15*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*16*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*17*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*18*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "bill_assign_detail",
            cols: [
               /*1*/{ ColName: 'bill_assign_id', FormName: 'bill_assign_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_request_id', FormName: 'bill_request_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'voucher_id', FormName: 'voucher_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'assign_account_id', FormName: 'assign_account_id', PositionData: 5, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'create_time', FormName: 'create_time', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'status', FormName: 'status', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'confirm_account_id', FormName: 'confirm_account_id', PositionData: 8, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'confirm_time', FormName: 'confirm_time', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'confirm_note', FormName: 'confirm_note', PositionData: 10, IsShow: 'isShow', ColType: 'ntext', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'confirm_status', FormName: 'confirm_status', PositionData: 11, IsShow: 'isShow', ColType: 'smallint', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'note', FormName: 'note', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bill_assign_detaildetail",
            cols: [
               /*1*/{ ColName: 'bill_assign_id', FormName: 'bill_assign_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_request_id', FormName: 'bill_request_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'voucher_id', FormName: 'voucher_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'assign_account_id', FormName: 'assign_account_id', PositionData: 5, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'create_time', FormName: 'create_time', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'status', FormName: 'status', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'confirm_account_id', FormName: 'confirm_account_id', PositionData: 8, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'confirm_time', FormName: 'confirm_time', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'confirm_note', FormName: 'confirm_note', PositionData: 10, IsShow: 'isShow', ColType: 'ntext', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'confirm_status', FormName: 'confirm_status', PositionData: 11, IsShow: 'isShow', ColType: 'smallint', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'note', FormName: 'note', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bill_assign_detail', obj11);
         var obj12 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bill_request",
            _id: "bill_request",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbill_request", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_request", _f: "id,account_id,branch_id,create_time,customer_id,from_branch_id,from_country_id,from_province_id,from_district_id,from_address,from_fullname,from_phone,from_identity,from_time,to_branch_id,to_country_id,to_province_id,to_district_id,to_address,to_fullname,to_phone,to_identity,to_time,service_type_id,price_type,barcode,note,status,confirm_status,map_params", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_request", _f: "id,account_id,branch_id,create_time,customer_id,from_branch_id,from_country_id,from_province_id,from_district_id,from_address,from_fullname,from_phone,from_identity,from_time,to_branch_id,to_country_id,to_province_id,to_district_id,to_address,to_fullname,to_phone,to_identity,to_time,service_type_id,price_type,barcode,note,status,confirm_status,map_params,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "account_id", name: "account_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "branch_id", name: "branch_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "create_time", name: "create_time", create: true, edit: true, list: true , type: "datetime" }
			,/*4*/{ field: "customer_id", name: "customer_id", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "from_branch_id", name: "from_branch_id", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "from_country_id", name: "from_country_id", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "from_province_id", name: "from_province_id", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "from_district_id", name: "from_district_id", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "from_address", name: "from_address", create: true, edit: true, list: true  }
			,/*10*/{ field: "from_fullname", name: "from_fullname", create: true, edit: true, list: true  }
			,/*11*/{ field: "from_phone", name: "from_phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*12*/{ field: "from_identity", name: "from_identity", create: true, edit: true, list: true  }
			,/*13*/{ field: "from_time", name: "from_time", create: true, edit: true, list: true , type: "datetime" }
			,/*14*/{ field: "to_branch_id", name: "to_branch_id", create: true, edit: true, list: true , type: "money"  }
			,/*15*/{ field: "to_country_id", name: "to_country_id", create: true, edit: true, list: true , type: "money"  }
			,/*16*/{ field: "to_province_id", name: "to_province_id", create: true, edit: true, list: true , type: "money"  }
			,/*17*/{ field: "to_district_id", name: "to_district_id", create: true, edit: true, list: true , type: "money"  }
			,/*18*/{ field: "to_address", name: "to_address", create: true, edit: true, list: true  }
			,/*19*/{ field: "to_fullname", name: "to_fullname", create: true, edit: true, list: true  }
			,/*20*/{ field: "to_phone", name: "to_phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*21*/{ field: "to_identity", name: "to_identity", create: true, edit: true, list: true  }
			,/*22*/{ field: "to_time", name: "to_time", create: true, edit: true, list: true , type: "datetime" }
			,/*23*/{ field: "service_type_id", name: "service_type_id", create: true, edit: true, list: true , type: "money"  }
			,/*24*/{ field: "price_type", name: "price_type", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*25*/{ field: "barcode", name: "barcode", create: true, edit: true, list: true ,color: 'orange', addon:  { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-barcode' } }
			,/*26*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*27*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*28*/{ field: "confirm_status", name: "confirm_status", create: true, edit: true, list: true , type: "money"  }
			,/*29*/{ field: "map_params", name: "map_params", create: true, edit: true, list: true  }
			,/*30*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*31*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*32*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*33*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*34*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*35*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "bill_request",
            cols: [
               /*1*/{ ColName: 'account_id', FormName: 'account_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'branch_id', FormName: 'branch_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'create_time', FormName: 'create_time', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'from_branch_id', FormName: 'from_branch_id', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'from_country_id', FormName: 'from_country_id', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'from_province_id', FormName: 'from_province_id', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'from_district_id', FormName: 'from_district_id', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'from_address', FormName: 'from_address', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'from_fullname', FormName: 'from_fullname', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'from_phone', FormName: 'from_phone', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'from_identity', FormName: 'from_identity', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'from_time', FormName: 'from_time', PositionData: 13, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'to_branch_id', FormName: 'to_branch_id', PositionData: 14, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'to_country_id', FormName: 'to_country_id', PositionData: 15, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'to_province_id', FormName: 'to_province_id', PositionData: 16, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'to_district_id', FormName: 'to_district_id', PositionData: 17, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'to_address', FormName: 'to_address', PositionData: 18, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'to_fullname', FormName: 'to_fullname', PositionData: 19, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'to_phone', FormName: 'to_phone', PositionData: 20, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'to_identity', FormName: 'to_identity', PositionData: 21, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'to_time', FormName: 'to_time', PositionData: 22, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*23*/,{ ColName: 'service_type_id', FormName: 'service_type_id', PositionData: 23, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*24*/,{ ColName: 'price_type', FormName: 'price_type', PositionData: 24, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*25*/,{ ColName: 'barcode', FormName: 'barcode', PositionData: 25, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*26*/,{ ColName: 'note', FormName: 'note', PositionData: 26, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*27*/,{ ColName: 'status', FormName: 'status', PositionData: 27, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*28*/,{ ColName: 'confirm_status', FormName: 'confirm_status', PositionData: 28, IsShow: 'isShow', ColType: 'smallint', Parent: 'isParent', iNotFillData: 0 }
				/*29*/,{ ColName: 'map_params', FormName: 'map_params', PositionData: 29, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bill_requestdetail",
            cols: [
               /*1*/{ ColName: 'account_id', FormName: 'account_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'branch_id', FormName: 'branch_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'create_time', FormName: 'create_time', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'from_branch_id', FormName: 'from_branch_id', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'from_country_id', FormName: 'from_country_id', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'from_province_id', FormName: 'from_province_id', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'from_district_id', FormName: 'from_district_id', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'from_address', FormName: 'from_address', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'from_fullname', FormName: 'from_fullname', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'from_phone', FormName: 'from_phone', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'from_identity', FormName: 'from_identity', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'from_time', FormName: 'from_time', PositionData: 13, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'to_branch_id', FormName: 'to_branch_id', PositionData: 14, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'to_country_id', FormName: 'to_country_id', PositionData: 15, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'to_province_id', FormName: 'to_province_id', PositionData: 16, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'to_district_id', FormName: 'to_district_id', PositionData: 17, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'to_address', FormName: 'to_address', PositionData: 18, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'to_fullname', FormName: 'to_fullname', PositionData: 19, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'to_phone', FormName: 'to_phone', PositionData: 20, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'to_identity', FormName: 'to_identity', PositionData: 21, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'to_time', FormName: 'to_time', PositionData: 22, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*23*/,{ ColName: 'service_type_id', FormName: 'service_type_id', PositionData: 23, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*24*/,{ ColName: 'price_type', FormName: 'price_type', PositionData: 24, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*25*/,{ ColName: 'barcode', FormName: 'barcode', PositionData: 25, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*26*/,{ ColName: 'note', FormName: 'note', PositionData: 26, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*27*/,{ ColName: 'status', FormName: 'status', PositionData: 27, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*28*/,{ ColName: 'confirm_status', FormName: 'confirm_status', PositionData: 28, IsShow: 'isShow', ColType: 'smallint', Parent: 'isParent', iNotFillData: 0 }
				/*29*/,{ ColName: 'map_params', FormName: 'map_params', PositionData: 29, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bill_request', obj12);
         var obj13 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bill_request_deleted",
            _id: "bill_request_deleted",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbill_request_deleted", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_request_deleted", _f: "id,bill_request_id,branch_id,account_id,create_time,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_request_deleted", _f: "id,bill_request_id,branch_id,account_id,create_time,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "bill_request_id", name: "bill_request_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "branch_id", name: "branch_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "account_id", name: "account_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "create_time", name: "create_time", create: true, edit: true, list: true , type: "datetime" }
			,/*5*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*6*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*7*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*9*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*11*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*12*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "bill_request_deleted",
            cols: [
               /*1*/{ ColName: 'bill_request_id', FormName: 'bill_request_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'branch_id', FormName: 'branch_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'create_time', FormName: 'create_time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bill_request_deleteddetail",
            cols: [
               /*1*/{ ColName: 'bill_request_id', FormName: 'bill_request_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'branch_id', FormName: 'branch_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'create_time', FormName: 'create_time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bill_request_deleted', obj13);
         var obj14 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "constant",
            _id: "constant",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetconstant", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetconstant", _f: "id,code,name,note,content_,type,status,site_id,module_id,controller_id,mode,value", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetconstant", _f: "id,code,name,note,content_,type,status,site_id,module_id,controller_id,mode,value,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "content_", name: "content_", create: true, edit: true, list: true  }
			,/*5*/{ field: "type", name: "type", create: true, edit: true, list: true  }
			,/*6*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*7*/{ field: "site_id", name: "site_id", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "module_id", name: "module_id", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "controller_id", name: "controller_id", create: true, edit: true, list: true , type: "money"  }
			,/*10*/{ field: "mode", name: "mode", create: true, edit: true, list: true  }
			,/*11*/{ field: "value", name: "value", create: true, edit: true, list: true  }
			,/*12*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*13*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*14*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*15*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*16*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*17*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "constant",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'content_', FormName: 'content_', PositionData: 4, IsShow: 'isShow', ColType: 'ntext', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'type', FormName: 'type', PositionData: 5, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'site_id', FormName: 'site_id', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'module_id', FormName: 'module_id', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'controller_id', FormName: 'controller_id', PositionData: 9, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'mode', FormName: 'mode', PositionData: 10, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'value', FormName: 'value', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "constantdetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'content_', FormName: 'content_', PositionData: 4, IsShow: 'isShow', ColType: 'ntext', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'type', FormName: 'type', PositionData: 5, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'site_id', FormName: 'site_id', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'module_id', FormName: 'module_id', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'controller_id', FormName: 'controller_id', PositionData: 9, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'mode', FormName: 'mode', PositionData: 10, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'value', FormName: 'value', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('constant', obj14);
         var obj15 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "group_",
            _id: "group_",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetgroup_", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetgroup_", _f: "id,code,name,parent_id,permission,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetgroup_", _f: "id,code,name,parent_id,permission,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "parent_id", name: "parent_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "permission", name: "permission", create: true, edit: true, list: true  }
			,/*5*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*6*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*7*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*9*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*11*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*12*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "group_",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'parent_id', FormName: 'parent_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'permission', FormName: 'permission', PositionData: 4, IsShow: 'isShow', ColType: 'ntext', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "group_detail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'parent_id', FormName: 'parent_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'permission', FormName: 'permission', PositionData: 4, IsShow: 'isShow', ColType: 'ntext', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('group_', obj15);
         var obj16 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "login",
            _id: "login",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetlogin", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetlogin", _f: "id,account_id,site,time,session_id,ip,server_ip,user_agent,logout_time,status,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetlogin", _f: "id,account_id,site,time,session_id,ip,server_ip,user_agent,logout_time,status,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "account_id", name: "account_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "site", name: "site", create: true, edit: true, list: true  }
			,/*3*/{ field: "time", name: "time", create: true, edit: true, list: true , type: "datetime" }
			,/*4*/{ field: "session_id", name: "session_id", create: true, edit: true, list: true  }
			,/*5*/{ field: "ip", name: "ip", create: true, edit: true, list: true  }
			,/*6*/{ field: "server_ip", name: "server_ip", create: true, edit: true, list: true  }
			,/*7*/{ field: "user_agent", name: "user_agent", create: true, edit: true, list: true  }
			,/*8*/{ field: "logout_time", name: "logout_time", create: true, edit: true, list: true , type: "datetime" }
			,/*9*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*10*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*11*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*12*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*13*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*14*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*15*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*16*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "login",
            cols: [
               /*1*/{ ColName: 'account_id', FormName: 'account_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'site', FormName: 'site', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'time', FormName: 'time', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'session_id', FormName: 'session_id', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'ip', FormName: 'ip', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'server_ip', FormName: 'server_ip', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'user_agent', FormName: 'user_agent', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'logout_time', FormName: 'logout_time', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'status', FormName: 'status', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'note', FormName: 'note', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "logindetail",
            cols: [
               /*1*/{ ColName: 'account_id', FormName: 'account_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'site', FormName: 'site', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'time', FormName: 'time', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'session_id', FormName: 'session_id', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'ip', FormName: 'ip', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'server_ip', FormName: 'server_ip', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'user_agent', FormName: 'user_agent', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'logout_time', FormName: 'logout_time', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'status', FormName: 'status', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'note', FormName: 'note', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('login', obj16);
         var obj17 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "reason_group",
            _id: "reason_group",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetreason_group", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreason_group", _f: "id,code,name,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreason_group", _f: "id,code,name,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*5*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*6*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*7*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*8*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "reason_group",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "reason_groupdetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('reason_group', obj17);
         var obj18 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "store",
            _id: "store",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetstore", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetstore", _f: "id,branch_id,code,note,status,account_time", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetstore", _f: "id,branch_id,code,note,status,account_time,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "branch_id", name: "branch_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*5*/{ field: "account_time", name: "account_time", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*7*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*8*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "store",
            cols: [
               /*1*/{ ColName: 'branch_id', FormName: 'branch_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'code', FormName: 'code', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'account_time', FormName: 'account_time', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "storedetail",
            cols: [
               /*1*/{ ColName: 'branch_id', FormName: 'branch_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'code', FormName: 'code', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'account_time', FormName: 'account_time', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('store', obj18);
         var obj19 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "store_zone",
            _id: "store_zone",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetstore_zone", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetstore_zone", _f: "id,store_id,code,note,status,account_time", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetstore_zone", _f: "id,store_id,code,note,status,account_time,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "store_id", name: "store_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*5*/{ field: "account_time", name: "account_time", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*7*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*8*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "store_zone",
            cols: [
               /*1*/{ ColName: 'store_id', FormName: 'store_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'code', FormName: 'code', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'account_time', FormName: 'account_time', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "store_zonedetail",
            cols: [
               /*1*/{ ColName: 'store_id', FormName: 'store_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'code', FormName: 'code', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'account_time', FormName: 'account_time', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('store_zone', obj19);
         var obj20 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "supplier",
            _id: "supplier",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetsupplier", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetsupplier", _f: "id,code,com_type,name,esta_time,abbr_name,address,phone,fax,email,website,tax_code,note,birthday_time,type,rep_sign_type,rep_number,warning_after_out_bill,warning_max_debt,debt,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetsupplier", _f: "id,code,com_type,name,esta_time,abbr_name,address,phone,fax,email,website,tax_code,note,birthday_time,type,rep_sign_type,rep_number,warning_after_out_bill,warning_max_debt,debt,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "com_type", name: "com_type", create: true, edit: true, list: true  }
			,/*3*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*4*/{ field: "esta_time", name: "esta_time", create: true, edit: true, list: true , type: "datetime" }
			,/*5*/{ field: "abbr_name", name: "abbr_name", create: true, edit: true, list: true  }
			,/*6*/{ field: "address", name: "address", create: true, edit: true, list: true  }
			,/*7*/{ field: "phone", name: "phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*8*/{ field: "fax", name: "fax", create: true, edit: true, list: true  }
			,/*9*/{ field: "email", name: "email", create: true, edit: true, list: true  }
			,/*10*/{ field: "website", name: "website", create: true, edit: true, list: true  }
			,/*11*/{ field: "tax_code", name: "tax_code", create: true, edit: true, list: true  }
			,/*12*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*13*/{ field: "birthday_time", name: "birthday_time", create: true, edit: true, list: true , type: "datetime" }
			,/*14*/{ field: "type", name: "type", create: true, edit: true, list: true  }
			,/*15*/{ field: "rep_sign_type", name: "rep_sign_type", create: true, edit: true, list: true  }
			,/*16*/{ field: "rep_number", name: "rep_number", create: true, edit: true, list: true  }
			,/*17*/{ field: "warning_after_out_bill", name: "warning_after_out_bill", create: true, edit: true, list: true , type: "money"  }
			,/*18*/{ field: "warning_max_debt", name: "warning_max_debt", create: true, edit: true, list: true , type: "money"  }
			,/*19*/{ field: "debt", name: "debt", create: true, edit: true, list: true , type: "money"  }
			,/*20*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*21*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*22*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*23*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*24*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*25*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*26*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "supplier",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'com_type', FormName: 'com_type', PositionData: 2, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'name', FormName: 'name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'esta_time', FormName: 'esta_time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'abbr_name', FormName: 'abbr_name', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'address', FormName: 'address', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'phone', FormName: 'phone', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'fax', FormName: 'fax', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'email', FormName: 'email', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'website', FormName: 'website', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'tax_code', FormName: 'tax_code', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'note', FormName: 'note', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'birthday_time', FormName: 'birthday_time', PositionData: 13, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'type', FormName: 'type', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'rep_sign_type', FormName: 'rep_sign_type', PositionData: 15, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'rep_number', FormName: 'rep_number', PositionData: 16, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'warning_after_out_bill', FormName: 'warning_after_out_bill', PositionData: 17, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'warning_max_debt', FormName: 'warning_max_debt', PositionData: 18, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'debt', FormName: 'debt', PositionData: 19, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'status', FormName: 'status', PositionData: 20, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "supplierdetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'com_type', FormName: 'com_type', PositionData: 2, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'name', FormName: 'name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'esta_time', FormName: 'esta_time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'abbr_name', FormName: 'abbr_name', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'address', FormName: 'address', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'phone', FormName: 'phone', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'fax', FormName: 'fax', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'email', FormName: 'email', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'website', FormName: 'website', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'tax_code', FormName: 'tax_code', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'note', FormName: 'note', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'birthday_time', FormName: 'birthday_time', PositionData: 13, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'type', FormName: 'type', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'rep_sign_type', FormName: 'rep_sign_type', PositionData: 15, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'rep_number', FormName: 'rep_number', PositionData: 16, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'warning_after_out_bill', FormName: 'warning_after_out_bill', PositionData: 17, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'warning_max_debt', FormName: 'warning_max_debt', PositionData: 18, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'debt', FormName: 'debt', PositionData: 19, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'status', FormName: 'status', PositionData: 20, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('supplier', obj20);
         var obj21 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "zone",
            _id: "zone",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetzone", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetzone", _f: "id,code,name,from_branch_id,to_branch_id,km,note,type,status,account_time", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetzone", _f: "id,code,name,from_branch_id,to_branch_id,km,note,type,status,account_time,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "from_branch_id", name: "from_branch_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "to_branch_id", name: "to_branch_id", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "km", name: "km", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*6*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*7*/{ field: "type", name: "type", create: true, edit: true, list: true  }
			,/*8*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*9*/{ field: "account_time", name: "account_time", create: true, edit: true, list: true , type: "datetime" }
			,/*10*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*12*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*13*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*14*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*15*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "zone",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'from_branch_id', FormName: 'from_branch_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'to_branch_id', FormName: 'to_branch_id', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'km', FormName: 'km', PositionData: 5, IsShow: 'isShow', ColType: 'real', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'note', FormName: 'note', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'type', FormName: 'type', PositionData: 7, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'account_time', FormName: 'account_time', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "zonedetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'from_branch_id', FormName: 'from_branch_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'to_branch_id', FormName: 'to_branch_id', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'km', FormName: 'km', PositionData: 5, IsShow: 'isShow', ColType: 'real', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'note', FormName: 'note', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'type', FormName: 'type', PositionData: 7, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'account_time', FormName: 'account_time', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('zone', obj21);
         var obj22 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "zone_group",
            _id: "zone_group",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetzone_group", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetzone_group", _f: "id,code,name,crates_id,type,status,account_time,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetzone_group", _f: "id,code,name,crates_id,type,status,account_time,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "crates_id", name: "crates_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "type", name: "type", create: true, edit: true, list: true  }
			,/*5*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*6*/{ field: "account_time", name: "account_time", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*8*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*10*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*11*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*12*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*13*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "zone_group",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'crates_id', FormName: 'crates_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'type', FormName: 'type', PositionData: 4, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'account_time', FormName: 'account_time', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'note', FormName: 'note', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "zone_groupdetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'crates_id', FormName: 'crates_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'type', FormName: 'type', PositionData: 4, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'account_time', FormName: 'account_time', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'note', FormName: 'note', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('zone_group', obj22);
         var obj23 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "branch_group",
            _id: "branch_group",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbranch_group", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbranch_group", _f: "id,code,name,type,status,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbranch_group", _f: "id,code,name,type,status,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "type", name: "type", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*5*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*6*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*7*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*8*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "branch_group",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'type', FormName: 'type', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "branch_groupdetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'type', FormName: 'type', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('branch_group', obj23);
         var obj24 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "branch_group_detail",
            _id: "branch_group_detail",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbranch_group_detail", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbranch_group_detail", _f: "id,branch_group_id,branch_id,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbranch_group_detail", _f: "id,branch_group_id,branch_id,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "branch_group_id", name: "branch_group_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "branch_id", name: "branch_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*5*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*6*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*7*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*8*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "branch_group_detail",
            cols: [
               /*1*/{ ColName: 'branch_group_id', FormName: 'branch_group_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'branch_id', FormName: 'branch_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "branch_group_detaildetail",
            cols: [
               /*1*/{ ColName: 'branch_group_id', FormName: 'branch_group_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'branch_id', FormName: 'branch_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('branch_group_detail', obj24);
         var obj25 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bag_confirm",
            _id: "bag_confirm",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbag_confirm", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbag_confirm", _f: "id,bill_package_id,branch_id,account_id,time,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbag_confirm", _f: "id,bill_package_id,branch_id,account_id,time,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "bill_package_id", name: "bill_package_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "branch_id", name: "branch_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "account_id", name: "account_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "time", name: "time", create: true, edit: true, list: true , type: "datetime" }
			,/*5*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*6*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*7*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*9*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*11*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*12*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "bag_confirm",
            cols: [
               /*1*/{ ColName: 'bill_package_id', FormName: 'bill_package_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'branch_id', FormName: 'branch_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'time', FormName: 'time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bag_confirmdetail",
            cols: [
               /*1*/{ ColName: 'bill_package_id', FormName: 'bill_package_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'branch_id', FormName: 'branch_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'time', FormName: 'time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bag_confirm', obj25);
         var obj26 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bill_direction",
            _id: "bill_direction",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbill_direction", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_direction", _f: "id,Bill_id,account_id,customer_id,RealTime_Info,from_country_id,from_province_id,from_district_id,from_ward_id,from_branch_id,from_google_position,x1,y1,to_country_id,to_province_id,to_district_id,to_ward_id,to_branch_id,to_google_position,x2,y2,realkm,googlekm,timetransferbyprg,timetransferreal,findpathbygoogle,findpathbyadmin,findpathreal,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_direction", _f: "id,Bill_id,account_id,customer_id,RealTime_Info,from_country_id,from_province_id,from_district_id,from_ward_id,from_branch_id,from_google_position,x1,y1,to_country_id,to_province_id,to_district_id,to_ward_id,to_branch_id,to_google_position,x2,y2,realkm,googlekm,timetransferbyprg,timetransferreal,findpathbygoogle,findpathbyadmin,findpathreal,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Bill_id", name: "Bill_id", create: true, edit: true, list: true  }
			,/*2*/{ field: "account_id", name: "account_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "customer_id", name: "customer_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "RealTime_Info", name: "RealTime_Info", create: true, edit: true, list: true  }
			,/*5*/{ field: "from_country_id", name: "from_country_id", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "from_province_id", name: "from_province_id", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "from_district_id", name: "from_district_id", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "from_ward_id", name: "from_ward_id", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "from_branch_id", name: "from_branch_id", create: true, edit: true, list: true , type: "money"  }
			,/*10*/{ field: "from_google_position", name: "from_google_position", create: true, edit: true, list: true  }
			,/*11*/{ field: "x1", name: "x1", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*12*/{ field: "y1", name: "y1", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*13*/{ field: "to_country_id", name: "to_country_id", create: true, edit: true, list: true , type: "money"  }
			,/*14*/{ field: "to_province_id", name: "to_province_id", create: true, edit: true, list: true , type: "money"  }
			,/*15*/{ field: "to_district_id", name: "to_district_id", create: true, edit: true, list: true , type: "money"  }
			,/*16*/{ field: "to_ward_id", name: "to_ward_id", create: true, edit: true, list: true , type: "money"  }
			,/*17*/{ field: "to_branch_id", name: "to_branch_id", create: true, edit: true, list: true , type: "money"  }
			,/*18*/{ field: "to_google_position", name: "to_google_position", create: true, edit: true, list: true  }
			,/*19*/{ field: "x2", name: "x2", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*20*/{ field: "y2", name: "y2", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*21*/{ field: "realkm", name: "realkm", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*22*/{ field: "googlekm", name: "googlekm", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*23*/{ field: "timetransferbyprg", name: "timetransferbyprg", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*24*/{ field: "timetransferreal", name: "timetransferreal", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*25*/{ field: "findpathbygoogle", name: "findpathbygoogle", create: true, edit: true, list: true  }
			,/*26*/{ field: "findpathbyadmin", name: "findpathbyadmin", create: true, edit: true, list: true  }
			,/*27*/{ field: "findpathreal", name: "findpathreal", create: true, edit: true, list: true  }
			,/*28*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*29*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*30*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*31*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*32*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*33*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*34*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*35*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "bill_direction",
            cols: [
               /*1*/{ ColName: 'Bill_id', FormName: 'Bill_id', PositionData: 1, IsShow: 'isShow', ColType: 'nchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'RealTime_Info', FormName: 'RealTime_Info', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'from_country_id', FormName: 'from_country_id', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'from_province_id', FormName: 'from_province_id', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'from_district_id', FormName: 'from_district_id', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'from_ward_id', FormName: 'from_ward_id', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'from_branch_id', FormName: 'from_branch_id', PositionData: 9, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'from_google_position', FormName: 'from_google_position', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'x1', FormName: 'x1', PositionData: 11, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'y1', FormName: 'y1', PositionData: 12, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'to_country_id', FormName: 'to_country_id', PositionData: 13, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'to_province_id', FormName: 'to_province_id', PositionData: 14, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'to_district_id', FormName: 'to_district_id', PositionData: 15, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'to_ward_id', FormName: 'to_ward_id', PositionData: 16, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'to_branch_id', FormName: 'to_branch_id', PositionData: 17, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'to_google_position', FormName: 'to_google_position', PositionData: 18, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'x2', FormName: 'x2', PositionData: 19, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'y2', FormName: 'y2', PositionData: 20, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'realkm', FormName: 'realkm', PositionData: 21, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'googlekm', FormName: 'googlekm', PositionData: 22, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*23*/,{ ColName: 'timetransferbyprg', FormName: 'timetransferbyprg', PositionData: 23, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*24*/,{ ColName: 'timetransferreal', FormName: 'timetransferreal', PositionData: 24, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*25*/,{ ColName: 'findpathbygoogle', FormName: 'findpathbygoogle', PositionData: 25, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*26*/,{ ColName: 'findpathbyadmin', FormName: 'findpathbyadmin', PositionData: 26, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*27*/,{ ColName: 'findpathreal', FormName: 'findpathreal', PositionData: 27, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*28*/,{ ColName: 'note', FormName: 'note', PositionData: 28, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*29*/,{ ColName: 'status', FormName: 'status', PositionData: 29, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bill_directiondetail",
            cols: [
               /*1*/{ ColName: 'Bill_id', FormName: 'Bill_id', PositionData: 1, IsShow: 'isShow', ColType: 'nchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'RealTime_Info', FormName: 'RealTime_Info', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'from_country_id', FormName: 'from_country_id', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'from_province_id', FormName: 'from_province_id', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'from_district_id', FormName: 'from_district_id', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'from_ward_id', FormName: 'from_ward_id', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'from_branch_id', FormName: 'from_branch_id', PositionData: 9, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'from_google_position', FormName: 'from_google_position', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'x1', FormName: 'x1', PositionData: 11, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'y1', FormName: 'y1', PositionData: 12, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'to_country_id', FormName: 'to_country_id', PositionData: 13, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'to_province_id', FormName: 'to_province_id', PositionData: 14, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'to_district_id', FormName: 'to_district_id', PositionData: 15, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'to_ward_id', FormName: 'to_ward_id', PositionData: 16, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'to_branch_id', FormName: 'to_branch_id', PositionData: 17, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'to_google_position', FormName: 'to_google_position', PositionData: 18, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'x2', FormName: 'x2', PositionData: 19, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'y2', FormName: 'y2', PositionData: 20, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'realkm', FormName: 'realkm', PositionData: 21, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'googlekm', FormName: 'googlekm', PositionData: 22, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*23*/,{ ColName: 'timetransferbyprg', FormName: 'timetransferbyprg', PositionData: 23, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*24*/,{ ColName: 'timetransferreal', FormName: 'timetransferreal', PositionData: 24, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*25*/,{ ColName: 'findpathbygoogle', FormName: 'findpathbygoogle', PositionData: 25, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*26*/,{ ColName: 'findpathbyadmin', FormName: 'findpathbyadmin', PositionData: 26, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*27*/,{ ColName: 'findpathreal', FormName: 'findpathreal', PositionData: 27, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*28*/,{ ColName: 'note', FormName: 'note', PositionData: 28, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*29*/,{ ColName: 'status', FormName: 'status', PositionData: 29, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bill_direction', obj26);
         var obj27 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bill_assign",
            _id: "bill_assign",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbill_assign", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_assign", _f: "id,type,barcode,branch_id,account_id,create_time,for_account_id,for_account_time,number,number_confirm,note,status,record_enable", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_assign", _f: "id,type,barcode,branch_id,account_id,create_time,for_account_id,for_account_time,number,number_confirm,note,status,record_enable,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_created_userid,isprg_updated_date,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "type", name: "type", create: true, edit: true, list: true  }
			,/*2*/{ field: "barcode", name: "barcode", create: true, edit: true, list: true ,color: 'orange', addon:  { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-barcode' } }
			,/*3*/{ field: "branch_id", name: "branch_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "account_id", name: "account_id", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "create_time", name: "create_time", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "for_account_id", name: "for_account_id", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "for_account_time", name: "for_account_time", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "number", name: "number", create: true, edit: true, list: true  }
			,/*9*/{ field: "number_confirm", name: "number_confirm", create: true, edit: true, list: true  }
			,/*10*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*11*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*12*/{ field: "record_enable", name: "record_enable", create: true, edit: true, list: true  }
			,/*13*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*14*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*15*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*16*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*17*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*18*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "bill_assign",
            cols: [
               /*1*/{ ColName: 'type', FormName: 'type', PositionData: 1, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'barcode', FormName: 'barcode', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'branch_id', FormName: 'branch_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'create_time', FormName: 'create_time', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'for_account_id', FormName: 'for_account_id', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'for_account_time', FormName: 'for_account_time', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'number', FormName: 'number', PositionData: 8, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'number_confirm', FormName: 'number_confirm', PositionData: 9, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'note', FormName: 'note', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'status', FormName: 'status', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'record_enable', FormName: 'record_enable', PositionData: 12, IsShow: 'isShow', ColType: 'bit', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bill_assigndetail",
            cols: [
               /*1*/{ ColName: 'type', FormName: 'type', PositionData: 1, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'barcode', FormName: 'barcode', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'branch_id', FormName: 'branch_id', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'account_id', FormName: 'account_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'create_time', FormName: 'create_time', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'for_account_id', FormName: 'for_account_id', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'for_account_time', FormName: 'for_account_time', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'number', FormName: 'number', PositionData: 8, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'number_confirm', FormName: 'number_confirm', PositionData: 9, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'note', FormName: 'note', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'status', FormName: 'status', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'record_enable', FormName: 'record_enable', PositionData: 12, IsShow: 'isShow', ColType: 'bit', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bill_assign', obj27);
         var obj28 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "Resource",
            _id: "Resource",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetResource", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetResource", _f: "ID,IDParent,FormName,ActionName,Caption,SmallImageIndex,LagerImageIndex,IconName,Active,AppName,Description,Priority", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetResource", _f: "ID,IDParent,FormName,ActionName,Caption,SmallImageIndex,LagerImageIndex,IconName,Active,AppName,Description,Priority", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "ID", name: "ID", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "IDParent", name: "IDParent", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "FormName", name: "FormName", create: true, edit: true, list: true  }
			,/*3*/{ field: "ActionName", name: "ActionName", create: true, edit: true, list: true  }
			,/*4*/{ field: "Caption", name: "Caption", create: true, edit: true, list: true  }
			,/*5*/{ field: "SmallImageIndex", name: "SmallImageIndex", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "LagerImageIndex", name: "LagerImageIndex", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "IconName", name: "IconName", create: true, edit: true, list: true  }
			,/*8*/{ field: "Active", name: "Active", create: true, edit: true, list: true  }
			,/*9*/{ field: "AppName", name: "AppName", create: true, edit: true, list: true  }
			,/*10*/{ field: "Description", name: "Description", create: true, edit: true, list: true  }
			,/*11*/{ field: "Priority", name: "Priority", create: true, edit: true, list: true , type: "money"  }

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
            name: "Resource",
            cols: [
               /*1*/{ ColName: 'IDParent', FormName: 'IDParent', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'FormName', FormName: 'FormName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'ActionName', FormName: 'ActionName', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Caption', FormName: 'Caption', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'SmallImageIndex', FormName: 'SmallImageIndex', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'LagerImageIndex', FormName: 'LagerImageIndex', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'IconName', FormName: 'IconName', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'Active', FormName: 'Active', PositionData: 8, IsShow: 'isShow', ColType: 'bit', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'AppName', FormName: 'AppName', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'Description', FormName: 'Description', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'Priority', FormName: 'Priority', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "Resourcedetail",
            cols: [
               /*1*/{ ColName: 'IDParent', FormName: 'IDParent', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'FormName', FormName: 'FormName', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'ActionName', FormName: 'ActionName', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Caption', FormName: 'Caption', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'SmallImageIndex', FormName: 'SmallImageIndex', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'LagerImageIndex', FormName: 'LagerImageIndex', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'IconName', FormName: 'IconName', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'Active', FormName: 'Active', PositionData: 8, IsShow: 'isShow', ColType: 'bit', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'AppName', FormName: 'AppName', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'Description', FormName: 'Description', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'Priority', FormName: 'Priority', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('Resource', obj28);
         var obj29 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "temp",
            _id: "temp",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGettemp", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGettemp", _f: "Status,Compare", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGettemp", _f: "Status,Compare", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Status", name: "Status", create: true, edit: true, list: true , type: "money"  }
			,/*1*/{ field: "Compare", name: "Compare", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "temp",
            cols: [
               /*1*/{ ColName: 'Status', FormName: 'Status', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Compare', FormName: 'Compare', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "tempdetail",
            cols: [
               /*1*/{ ColName: 'Status', FormName: 'Status', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Compare', FormName: 'Compare', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('temp', obj29);
         var obj30 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "price_target_time",
            _id: "price_target_time",
            _listRefTables: [
                { field: "price_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetprice", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }

            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetprice_target_time", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_target_time", _f: "price_id,zone_group_id,from_hour,to_hour,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_target_time", _f: "price_id,zone_group_id,from_hour,to_hour,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "price_id", name: "price_id", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*1*/{ field: "zone_group_id", name: "zone_group_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "from_hour", name: "from_hour", create: true, edit: true, list: true  }
			,/*3*/{ field: "to_hour", name: "to_hour", create: true, edit: true, list: true  }
			,/*4*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*5*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*6*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false  }
			,/*7*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*8*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "price_target_time",
            cols: [
               /*1*/{ ColName: 'price_id', FormName: 'price_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'zone_group_id', FormName: 'zone_group_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'from_hour', FormName: 'from_hour', PositionData: 3, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'to_hour', FormName: 'to_hour', PositionData: 4, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "price_target_timedetail",
            cols: [
               /*1*/{ ColName: 'price_id', FormName: 'price_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'zone_group_id', FormName: 'zone_group_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'from_hour', FormName: 'from_hour', PositionData: 3, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'to_hour', FormName: 'to_hour', PositionData: 4, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('price_target_time', obj30);
         var obj31 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "price_policy_department_",
            _id: "price_policy_department_",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetprice_policy_department_", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_policy_department_", _f: "id,deparment_id,price_policy_id,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_policy_department_", _f: "id,deparment_id,price_policy_id,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "deparment_id", name: "deparment_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "price_policy_id", name: "price_policy_id", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*5*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*6*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*7*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*8*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "price_policy_department_",
            cols: [
               /*1*/{ ColName: 'deparment_id', FormName: 'deparment_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'price_policy_id', FormName: 'price_policy_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "price_policy_department_detail",
            cols: [
               /*1*/{ ColName: 'deparment_id', FormName: 'deparment_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'price_policy_id', FormName: 'price_policy_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('price_policy_department_', obj31);
         var obj32 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "branch",
            _id: "branch",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbranch", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbranch", _f: "id,code,name,note,district_id,address,phone,fax,status,is_transport_center,company_id", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbranch", _f: "id,code,name,note,district_id,address,phone,fax,status,is_transport_center,company_id,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_created_userid,isprg_updated_userid,isprg_updated_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "district_id", name: "district_id", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "address", name: "address", create: true, edit: true, list: true  }
			,/*6*/{ field: "phone", name: "phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*7*/{ field: "fax", name: "fax", create: true, edit: true, list: true  }
			,/*8*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "is_transport_center", name: "is_transport_center", create: true, edit: true, list: true  }
			,/*10*/{ field: "company_id", name: "company_id", create: true, edit: true, list: true , type: "money"  }
			,/*11*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*12*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*13*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*14*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*15*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }
			,/*16*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }

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
            name: "branch",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'district_id', FormName: 'district_id', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'address', FormName: 'address', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'phone', FormName: 'phone', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'fax', FormName: 'fax', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'is_transport_center', FormName: 'is_transport_center', PositionData: 9, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'company_id', FormName: 'company_id', PositionData: 10, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "branchdetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'district_id', FormName: 'district_id', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'address', FormName: 'address', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'phone', FormName: 'phone', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'fax', FormName: 'fax', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'is_transport_center', FormName: 'is_transport_center', PositionData: 9, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'company_id', FormName: 'company_id', PositionData: 10, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('branch', obj32);
         var obj33 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "company",
            _id: "company",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetcompany", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetcompany", _f: "id,code,name,note,district_id,address,phone,fax,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetcompany", _f: "id,code,name,note,district_id,address,phone,fax,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_created_userid,isprg_updated_userid,isprg_updated_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "district_id", name: "district_id", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "address", name: "address", create: true, edit: true, list: true  }
			,/*6*/{ field: "phone", name: "phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*7*/{ field: "fax", name: "fax", create: true, edit: true, list: true  }
			,/*8*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*11*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*12*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*13*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }
			,/*14*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }

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
            name: "company",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'district_id', FormName: 'district_id', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'address', FormName: 'address', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'phone', FormName: 'phone', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'fax', FormName: 'fax', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "companydetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'district_id', FormName: 'district_id', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'address', FormName: 'address', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'phone', FormName: 'phone', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'fax', FormName: 'fax', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('company', obj33);
         var obj34 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "price_policy",
            _id: "price_policy",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetprice_policy", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_policy", _f: "id,code,name,start_time,end_time,file_,note,status,approve_account_id,approve_account_time", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_policy", _f: "id,code,name,start_time,end_time,file_,note,status,approve_account_id,approve_account_time,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "start_time", name: "start_time", create: true, edit: true, list: true , type: "datetime" }
			,/*4*/{ field: "end_time", name: "end_time", create: true, edit: true, list: true , type: "datetime" }
			,/*5*/{ field: "file_", name: "file_", create: true, edit: true, list: true  }
			,/*6*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*7*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*8*/{ field: "approve_account_id", name: "approve_account_id", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "approve_account_time", name: "approve_account_time", create: true, edit: true, list: true , type: "datetime" }
			,/*10*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*12*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*13*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*14*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*15*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "price_policy",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'start_time', FormName: 'start_time', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'end_time', FormName: 'end_time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'file_', FormName: 'file_', PositionData: 5, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'note', FormName: 'note', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'status', FormName: 'status', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'approve_account_id', FormName: 'approve_account_id', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'approve_account_time', FormName: 'approve_account_time', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "price_policydetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'start_time', FormName: 'start_time', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'end_time', FormName: 'end_time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'file_', FormName: 'file_', PositionData: 5, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'note', FormName: 'note', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'status', FormName: 'status', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'approve_account_id', FormName: 'approve_account_id', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'approve_account_time', FormName: 'approve_account_time', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('price_policy', obj34);
         var obj35 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "zone_category",
            _id: "zone_category",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetzone_category", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetzone_category", _f: "id,code,name,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetzone_category", _f: "id,code,name,note,status,isprg_status,isprg_userinfo_descript,isprg_created_userid,isprg_created_date,isprg_updated_userid,isprg_updated_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*6*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*7*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "zone_category",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "zone_categorydetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('zone_category', obj35);
         var obj36 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "pay_type",
            _id: "pay_type",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetpay_type", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetpay_type", _f: "ID,Name,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetpay_type", _f: "ID,Name,status,isprg_status,isprg_userinfo_descript,isprg_created_userid,isprg_created_date,isprg_updated_userid,isprg_updated_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "ID", name: "ID", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*2*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*4*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*5*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*6*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*7*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "pay_type",
            cols: [
               /*1*/{ ColName: 'Name', FormName: 'Name', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'status', FormName: 'status', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "pay_typedetail",
            cols: [
               /*1*/{ ColName: 'Name', FormName: 'Name', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'status', FormName: 'status', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('pay_type', obj36);
         var obj37 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "customer_to_customer",
            _id: "customer_to_customer",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetcustomer_to_customer", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetcustomer_to_customer", _f: "id,from_cus_id,to_cus_id,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetcustomer_to_customer", _f: "id,from_cus_id,to_cus_id,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "from_cus_id", name: "from_cus_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "to_cus_id", name: "to_cus_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*6*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*7*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*8*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "customer_to_customer",
            cols: [
               /*1*/{ ColName: 'from_cus_id', FormName: 'from_cus_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'to_cus_id', FormName: 'to_cus_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "customer_to_customerdetail",
            cols: [
               /*1*/{ ColName: 'from_cus_id', FormName: 'from_cus_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'to_cus_id', FormName: 'to_cus_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('customer_to_customer', obj37);
         var obj38 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "product_unit",
            _id: "product_unit",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetproduct_unit", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetproduct_unit", _f: "id,code,name,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetproduct_unit", _f: "id,code,name,note,status,isprg_status,isprg_userinfo_descript,isprg_created_userid,isprg_created_date,isprg_updated_userid,isprg_updated_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*6*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*7*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "product_unit",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "product_unitdetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('product_unit', obj38);
         var obj39 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "price",
            _id: "price",
            _listRefTables: [
                { field: "price_policy_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetprice_policy", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }
				,{ field: "price_base_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetprice_base", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }

            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetprice", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice", _f: "id,price_policy_id,price_base_id,code,name,note,type,fkg,fkg_postage,fkg_weight,start_time,end_time,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice", _f: "id,price_policy_id,price_base_id,code,name,note,type,fkg,fkg_postage,fkg_weight,start_time,end_time,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "price_policy_id", name: "price_policy_id", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*2*/{ field: "price_base_id", name: "price_base_id", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*3*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*4*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*5*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*6*/{ field: "type", name: "type", create: true, edit: true, list: true  }
			,/*7*/{ field: "fkg", name: "fkg", create: true, edit: true, list: true  }
			,/*8*/{ field: "fkg_postage", name: "fkg_postage", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "fkg_weight", name: "fkg_weight", create: true, edit: true, list: true , addon: { text: '(kg)', css: 'gb-gcolor' } }
			,/*10*/{ field: "start_time", name: "start_time", create: true, edit: true, list: true , type: "datetime" }
			,/*11*/{ field: "end_time", name: "end_time", create: true, edit: true, list: true , type: "datetime" }
			,/*12*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*13*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*14*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*15*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*16*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*17*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*18*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "price",
            cols: [
               /*1*/{ ColName: 'price_policy_id', FormName: 'price_policy_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'price_base_id', FormName: 'price_base_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'code', FormName: 'code', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'name', FormName: 'name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'type', FormName: 'type', PositionData: 6, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'fkg', FormName: 'fkg', PositionData: 7, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'fkg_postage', FormName: 'fkg_postage', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'fkg_weight', FormName: 'fkg_weight', PositionData: 9, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'start_time', FormName: 'start_time', PositionData: 10, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'end_time', FormName: 'end_time', PositionData: 11, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'status', FormName: 'status', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "pricedetail",
            cols: [
               /*1*/{ ColName: 'price_policy_id', FormName: 'price_policy_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'price_base_id', FormName: 'price_base_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'code', FormName: 'code', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'name', FormName: 'name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'type', FormName: 'type', PositionData: 6, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'fkg', FormName: 'fkg', PositionData: 7, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'fkg_postage', FormName: 'fkg_postage', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'fkg_weight', FormName: 'fkg_weight', PositionData: 9, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'start_time', FormName: 'start_time', PositionData: 10, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'end_time', FormName: 'end_time', PositionData: 11, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'status', FormName: 'status', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('price', obj39);
         var obj40 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "category_group",
            _id: "category_group",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetcategory_group", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetcategory_group", _f: "id,name,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetcategory_group", _f: "id,name,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*2*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*3*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*4*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*5*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*6*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*7*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "category_group",
            cols: [
               /*1*/{ ColName: 'name', FormName: 'name', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'note', FormName: 'note', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "category_groupdetail",
            cols: [
               /*1*/{ ColName: 'name', FormName: 'name', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'note', FormName: 'note', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('category_group', obj40);
         var obj41 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "category",
            _id: "category",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetcategory", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetcategory", _f: "id,category_group_id,id_value,code,name,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetcategory", _f: "id,category_group_id,id_value,code,name,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "category_group_id", name: "category_group_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "id_value", name: "id_value", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*4*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*5*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*6*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*7*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*8*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "category",
            cols: [
               /*1*/{ ColName: 'category_group_id', FormName: 'category_group_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'id_value', FormName: 'id_value', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'code', FormName: 'code', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'name', FormName: 'name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "categorydetail",
            cols: [
               /*1*/{ ColName: 'category_group_id', FormName: 'category_group_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'id_value', FormName: 'id_value', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'code', FormName: 'code', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'name', FormName: 'name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('category', obj41);
         var obj42 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "price_level",
            _id: "price_level",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetprice_level", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_level", _f: "id,code,name,level_number,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_level", _f: "id,code,name,level_number,note,status,isprg_status,isprg_userinfo_descript,isprg_created_userid,isprg_created_date,isprg_updated_userid,isprg_updated_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "level_number", name: "level_number", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*4*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*5*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*7*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*8*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }

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
            name: "price_level",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'level_number', FormName: 'level_number', PositionData: 3, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'note', FormName: 'note', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "price_leveldetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'level_number', FormName: 'level_number', PositionData: 3, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'note', FormName: 'note', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('price_level', obj42);
         var obj43 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "price_base_detail",
            _id: "price_base_detail",
            _listRefTables: [
                { field: "price_base_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetprice_base", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }

            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetprice_base_detail", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_base_detail", _f: "id,price_base_id,product_id,product_unit,cal_type,value,per_value,postage,postage_extra,postage_type,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_base_detail", _f: "id,price_base_id,product_id,product_unit,cal_type,value,per_value,postage,postage_extra,postage_type,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "price_base_id", name: "price_base_id", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*2*/{ field: "product_id", name: "product_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "product_unit", name: "product_unit", create: true, edit: true, list: true  }
			,/*4*/{ field: "cal_type", name: "cal_type", create: true, edit: true, list: true  }
			,/*5*/{ field: "value", name: "value", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*6*/{ field: "per_value", name: "per_value", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*7*/{ field: "postage", name: "postage", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "postage_extra", name: "postage_extra", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "postage_type", name: "postage_type", create: true, edit: true, list: true  }
			,/*10*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*11*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*12*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*13*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*14*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*15*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*16*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*17*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "price_base_detail",
            cols: [
               /*1*/{ ColName: 'price_base_id', FormName: 'price_base_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'product_id', FormName: 'product_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'product_unit', FormName: 'product_unit', PositionData: 3, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'cal_type', FormName: 'cal_type', PositionData: 4, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'value', FormName: 'value', PositionData: 5, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'per_value', FormName: 'per_value', PositionData: 6, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'postage', FormName: 'postage', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'postage_extra', FormName: 'postage_extra', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'postage_type', FormName: 'postage_type', PositionData: 9, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'note', FormName: 'note', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'status', FormName: 'status', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "price_base_detaildetail",
            cols: [
               /*1*/{ ColName: 'price_base_id', FormName: 'price_base_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'product_id', FormName: 'product_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'product_unit', FormName: 'product_unit', PositionData: 3, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'cal_type', FormName: 'cal_type', PositionData: 4, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'value', FormName: 'value', PositionData: 5, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'per_value', FormName: 'per_value', PositionData: 6, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'postage', FormName: 'postage', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'postage_extra', FormName: 'postage_extra', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'postage_type', FormName: 'postage_type', PositionData: 9, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'note', FormName: 'note', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'status', FormName: 'status', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('price_base_detail', obj43);
         var obj44 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "price_customer",
            _id: "price_customer",
            _listRefTables: [
                { field: "customer_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetcustomer", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }
				,{ field: "zone_category_service_type_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetzone_category_service_type", c: {}, _f: "id,Id", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }

            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetprice_customer", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_customer", _f: "id,customer_id,zone_category_service_type_id,zone_customer_number,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_customer", _f: "id,customer_id,zone_category_service_type_id,zone_customer_number,note,status,isprg_status,isprg_userinfo_descript,isprg_created_userid,isprg_created_date,isprg_updated_userid,isprg_updated_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "customer_id", name: "customer_id", create: true, edit: true, list: true  , type: "select", option:{ field: "customer_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetcustomer", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*2*/{ field: "zone_category_service_type_id", name: "zone_category_service_type_id", create: true, edit: true, list: true  , type: "select", option:{ field: "zone_category_service_type_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetzone_category_service_type", c: {}, _f: "id,Id", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*3*/{ field: "zone_customer_number", name: "zone_customer_number", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*4*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*5*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*7*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*8*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }

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
            name: "price_customer",
            cols: [
               /*1*/{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'zone_category_service_type_id', FormName: 'zone_category_service_type_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'zone_customer_number', FormName: 'zone_customer_number', PositionData: 3, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'note', FormName: 'note', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "price_customerdetail",
            cols: [
               /*1*/{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'zone_category_service_type_id', FormName: 'zone_category_service_type_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'zone_customer_number', FormName: 'zone_customer_number', PositionData: 3, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'note', FormName: 'note', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('price_customer', obj44);
         var obj45 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "vehicle_type",
            _id: "vehicle_type",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetvehicle_type", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetvehicle_type", _f: "id,code,name,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetvehicle_type", _f: "id,code,name,note,status,isprg_status,isprg_userinfo_descript,isprg_created_userid,isprg_created_date,isprg_updated_userid,isprg_updated_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*6*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*7*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "vehicle_type",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "vehicle_typedetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('vehicle_type', obj45);
         var obj46 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "department_to_deparment",
            _id: "department_to_deparment",
            _listRefTables: [
                { field: "from_department_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetdepartment", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }
				,{ field: "to_department_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetdepartment", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }

            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetdepartment_to_deparment", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetdepartment_to_deparment", _f: "id,from_department_id,to_department_id,service_id,vehicle_type_id,fix_km,fix_Hour,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetdepartment_to_deparment", _f: "id,from_department_id,to_department_id,service_id,vehicle_type_id,fix_km,fix_Hour,note,status,isprg_status,isprg_userinfo_descript,isprg_created_userid,isprg_created_date,isprg_updated_userid,isprg_updated_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "from_department_id", name: "from_department_id", create: true, edit: true, list: true  , type: "select", option:{ field: "from_department_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetdepartment", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*2*/{ field: "to_department_id", name: "to_department_id", create: true, edit: true, list: true  , type: "select", option:{ field: "to_department_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetdepartment", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*3*/{ field: "service_id", name: "service_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "vehicle_type_id", name: "vehicle_type_id", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "fix_km", name: "fix_km", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*6*/{ field: "fix_Hour", name: "fix_Hour", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*7*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*8*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*11*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*12*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*13*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }
			,/*14*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }

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
            name: "department_to_deparment",
            cols: [
               /*1*/{ ColName: 'from_department_id', FormName: 'from_department_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'to_department_id', FormName: 'to_department_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'service_id', FormName: 'service_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'vehicle_type_id', FormName: 'vehicle_type_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'fix_km', FormName: 'fix_km', PositionData: 5, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'fix_Hour', FormName: 'fix_Hour', PositionData: 6, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'note', FormName: 'note', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "department_to_deparmentdetail",
            cols: [
               /*1*/{ ColName: 'from_department_id', FormName: 'from_department_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'to_department_id', FormName: 'to_department_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'service_id', FormName: 'service_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'vehicle_type_id', FormName: 'vehicle_type_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'fix_km', FormName: 'fix_km', PositionData: 5, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'fix_Hour', FormName: 'fix_Hour', PositionData: 6, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'note', FormName: 'note', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('department_to_deparment', obj46);
         var obj47 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "add_service",
            _id: "add_service",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetadd_service", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetadd_service", _f: "id,service_type_id,name,code,type,count_type,object_type,value,status,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetadd_service", _f: "id,service_type_id,name,code,type,count_type,object_type,value,status,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_created_userid,isprg_updated_date,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "service_type_id", name: "service_type_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*4*/{ field: "type", name: "type", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "count_type", name: "count_type", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "object_type", name: "object_type", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "value", name: "value", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*8*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*10*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*12*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*13*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*14*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*15*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "add_service",
            cols: [
               /*1*/{ ColName: 'service_type_id', FormName: 'service_type_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'code', FormName: 'code', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'type', FormName: 'type', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'count_type', FormName: 'count_type', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'object_type', FormName: 'object_type', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'value', FormName: 'value', PositionData: 7, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'note', FormName: 'note', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "add_servicedetail",
            cols: [
               /*1*/{ ColName: 'service_type_id', FormName: 'service_type_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'code', FormName: 'code', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'type', FormName: 'type', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'count_type', FormName: 'count_type', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'object_type', FormName: 'object_type', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'value', FormName: 'value', PositionData: 7, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'note', FormName: 'note', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('add_service', obj47);
         var obj48 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "customer_profile",
            _id: "customer_profile",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetcustomer_profile", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetcustomer_profile", _f: "id,customer_id,profile_id,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetcustomer_profile", _f: "id,customer_id,profile_id,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "customer_id", name: "customer_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "profile_id", name: "profile_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*5*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*6*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*7*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*8*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "customer_profile",
            cols: [
               /*1*/{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'profile_id', FormName: 'profile_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "customer_profiledetail",
            cols: [
               /*1*/{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'profile_id', FormName: 'profile_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('customer_profile', obj48);
         var obj49 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "department",
            _id: "department",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetdepartment", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetdepartment", _f: "id,branch_id,parent_id,code,name,address,district_id,province_id,phone,email,fax,mission,status,manage_account_id,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetdepartment", _f: "id,branch_id,parent_id,code,name,address,district_id,province_id,phone,email,fax,mission,status,manage_account_id,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_created_userid,isprg_updated_userid,isprg_updated_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "branch_id", name: "branch_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "parent_id", name: "parent_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*4*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*5*/{ field: "address", name: "address", create: true, edit: true, list: true  }
			,/*6*/{ field: "district_id", name: "district_id", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "province_id", name: "province_id", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "phone", name: "phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*9*/{ field: "email", name: "email", create: true, edit: true, list: true  }
			,/*10*/{ field: "fax", name: "fax", create: true, edit: true, list: true  }
			,/*11*/{ field: "mission", name: "mission", create: true, edit: true, list: true  }
			,/*12*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*13*/{ field: "manage_account_id", name: "manage_account_id", create: true, edit: true, list: true , type: "money"  }
			,/*14*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*15*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*16*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*17*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*18*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*19*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }
			,/*20*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }

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

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [6,7], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [8,9], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [10,11], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [12,13], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "department",
            cols: [
               /*1*/{ ColName: 'branch_id', FormName: 'branch_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'parent_id', FormName: 'parent_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'code', FormName: 'code', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'name', FormName: 'name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'address', FormName: 'address', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'district_id', FormName: 'district_id', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'province_id', FormName: 'province_id', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'phone', FormName: 'phone', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'email', FormName: 'email', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'fax', FormName: 'fax', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'mission', FormName: 'mission', PositionData: 11, IsShow: 'isShow', ColType: 'ntext', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'status', FormName: 'status', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'manage_account_id', FormName: 'manage_account_id', PositionData: 13, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'note', FormName: 'note', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "departmentdetail",
            cols: [
               /*1*/{ ColName: 'branch_id', FormName: 'branch_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'parent_id', FormName: 'parent_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'code', FormName: 'code', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'name', FormName: 'name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'address', FormName: 'address', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'district_id', FormName: 'district_id', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'province_id', FormName: 'province_id', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'phone', FormName: 'phone', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'email', FormName: 'email', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'fax', FormName: 'fax', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'mission', FormName: 'mission', PositionData: 11, IsShow: 'isShow', ColType: 'ntext', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'status', FormName: 'status', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'manage_account_id', FormName: 'manage_account_id', PositionData: 13, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'note', FormName: 'note', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('department', obj49);
         var obj50 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "binaryTest",
            _id: "binaryTest",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbinaryTest", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbinaryTest", _f: "id,Name", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbinaryTest", _f: "id,Name", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }

            ],
            //define form
            _editform: [
                { row: [0], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "binaryTest",
            cols: [
               /*1*/{ ColName: 'Name', FormName: 'Name', PositionData: 1, IsShow: 'isShow', ColType: 'nchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "binaryTestdetail",
            cols: [
               /*1*/{ ColName: 'Name', FormName: 'Name', PositionData: 1, IsShow: 'isShow', ColType: 'nchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('binaryTest', obj50);
         var obj51 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bill_add_service",
            _id: "bill_add_service",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbill_add_service", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_add_service", _f: "id,bill_package_id,add_service_id,name,code,type,value,cal_value,count,postage,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_add_service", _f: "id,bill_package_id,add_service_id,name,code,type,value,cal_value,count,postage,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "bill_package_id", name: "bill_package_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "add_service_id", name: "add_service_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*4*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*5*/{ field: "type", name: "type", create: true, edit: true, list: true  }
			,/*6*/{ field: "value", name: "value", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*7*/{ field: "cal_value", name: "cal_value", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "count", name: "count", create: true, edit: true, list: true  }
			,/*9*/{ field: "postage", name: "postage", create: true, edit: true, list: true , type: "money"  }
			,/*10*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*11*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*12*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*13*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*14*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*15*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*16*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*17*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "bill_add_service",
            cols: [
               /*1*/{ ColName: 'bill_package_id', FormName: 'bill_package_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'add_service_id', FormName: 'add_service_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'name', FormName: 'name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'code', FormName: 'code', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'type', FormName: 'type', PositionData: 5, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'value', FormName: 'value', PositionData: 6, IsShow: 'isShow', ColType: 'real', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'cal_value', FormName: 'cal_value', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'count', FormName: 'count', PositionData: 8, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'postage', FormName: 'postage', PositionData: 9, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'note', FormName: 'note', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'status', FormName: 'status', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bill_add_servicedetail",
            cols: [
               /*1*/{ ColName: 'bill_package_id', FormName: 'bill_package_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'add_service_id', FormName: 'add_service_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'name', FormName: 'name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'code', FormName: 'code', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'type', FormName: 'type', PositionData: 5, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'value', FormName: 'value', PositionData: 6, IsShow: 'isShow', ColType: 'real', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'cal_value', FormName: 'cal_value', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'count', FormName: 'count', PositionData: 8, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'postage', FormName: 'postage', PositionData: 9, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'note', FormName: 'note', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'status', FormName: 'status', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bill_add_service', obj51);
         var obj52 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bill_package_image",
            _id: "bill_package_image",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbill_package_image", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_package_image", _f: "id,bill_package_id,url", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_package_image", _f: "id,bill_package_id,url,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "bill_package_id", name: "bill_package_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "url", name: "url", create: true, edit: true, list: true  }
			,/*3*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*4*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*5*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*6*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*7*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "bill_package_image",
            cols: [
               /*1*/{ ColName: 'bill_package_id', FormName: 'bill_package_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'url', FormName: 'url', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bill_package_imagedetail",
            cols: [
               /*1*/{ ColName: 'bill_package_id', FormName: 'bill_package_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'url', FormName: 'url', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bill_package_image', obj52);
         var obj53 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "profile",
            _id: "profile",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetprofile", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprofile", _f: "id,customer_id,type_id,name,email,phone,position,birthday_time,note,address,id_number,yahoo,skype,facebook,gmail,department,sign_type,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprofile", _f: "id,customer_id,type_id,name,email,phone,position,birthday_time,note,address,id_number,yahoo,skype,facebook,gmail,department,sign_type,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "customer_id", name: "customer_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "type_id", name: "type_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*4*/{ field: "email", name: "email", create: true, edit: true, list: true  }
			,/*5*/{ field: "phone", name: "phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*6*/{ field: "position", name: "position", create: true, edit: true, list: true  }
			,/*7*/{ field: "birthday_time", name: "birthday_time", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*9*/{ field: "address", name: "address", create: true, edit: true, list: true  }
			,/*10*/{ field: "id_number", name: "id_number", create: true, edit: true, list: true  }
			,/*11*/{ field: "yahoo", name: "yahoo", create: true, edit: true, list: true  }
			,/*12*/{ field: "skype", name: "skype", create: true, edit: true, list: true  }
			,/*13*/{ field: "facebook", name: "facebook", create: true, edit: true, list: true  }
			,/*14*/{ field: "gmail", name: "gmail", create: true, edit: true, list: true  }
			,/*15*/{ field: "department", name: "department", create: true, edit: true, list: true  }
			,/*16*/{ field: "sign_type", name: "sign_type", create: true, edit: true, list: true  }
			,/*17*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*18*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*19*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*20*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*21*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*22*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*23*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "profile",
            cols: [
               /*1*/{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'type_id', FormName: 'type_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'name', FormName: 'name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'email', FormName: 'email', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'phone', FormName: 'phone', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'position', FormName: 'position', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'birthday_time', FormName: 'birthday_time', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'note', FormName: 'note', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'address', FormName: 'address', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'id_number', FormName: 'id_number', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'yahoo', FormName: 'yahoo', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'skype', FormName: 'skype', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'facebook', FormName: 'facebook', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'gmail', FormName: 'gmail', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'department', FormName: 'department', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'sign_type', FormName: 'sign_type', PositionData: 16, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'status', FormName: 'status', PositionData: 17, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "profiledetail",
            cols: [
               /*1*/{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'type_id', FormName: 'type_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'name', FormName: 'name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'email', FormName: 'email', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'phone', FormName: 'phone', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'position', FormName: 'position', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'birthday_time', FormName: 'birthday_time', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'note', FormName: 'note', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'address', FormName: 'address', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'id_number', FormName: 'id_number', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'yahoo', FormName: 'yahoo', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'skype', FormName: 'skype', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'facebook', FormName: 'facebook', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'gmail', FormName: 'gmail', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'department', FormName: 'department', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'sign_type', FormName: 'sign_type', PositionData: 16, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'status', FormName: 'status', PositionData: 17, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('profile', obj53);
         var obj54 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "sms",
            _id: "sms",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetsms", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetsms", _f: "id,department_id,puid,fullname,phone,brandname,message,send_time,send_account_id,note,message_id,error,error_description", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetsms", _f: "id,department_id,puid,fullname,phone,brandname,message,send_time,send_account_id,note,message_id,error,error_description,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "department_id", name: "department_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "puid", name: "puid", create: true, edit: true, list: true  }
			,/*3*/{ field: "fullname", name: "fullname", create: true, edit: true, list: true  }
			,/*4*/{ field: "phone", name: "phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*5*/{ field: "brandname", name: "brandname", create: true, edit: true, list: true  }
			,/*6*/{ field: "message", name: "message", create: true, edit: true, list: true  }
			,/*7*/{ field: "send_time", name: "send_time", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "send_account_id", name: "send_account_id", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*10*/{ field: "message_id", name: "message_id", create: true, edit: true, list: true  }
			,/*11*/{ field: "error", name: "error", create: true, edit: true, list: true  }
			,/*12*/{ field: "error_description", name: "error_description", create: true, edit: true, list: true  }
			,/*13*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*14*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*15*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*16*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*17*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*18*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "sms",
            cols: [
               /*1*/{ ColName: 'department_id', FormName: 'department_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'puid', FormName: 'puid', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'fullname', FormName: 'fullname', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'phone', FormName: 'phone', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'brandname', FormName: 'brandname', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'message', FormName: 'message', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'send_time', FormName: 'send_time', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'send_account_id', FormName: 'send_account_id', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'note', FormName: 'note', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'message_id', FormName: 'message_id', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'error', FormName: 'error', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'error_description', FormName: 'error_description', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "smsdetail",
            cols: [
               /*1*/{ ColName: 'department_id', FormName: 'department_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'puid', FormName: 'puid', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'fullname', FormName: 'fullname', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'phone', FormName: 'phone', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'brandname', FormName: 'brandname', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'message', FormName: 'message', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'send_time', FormName: 'send_time', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'send_account_id', FormName: 'send_account_id', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'note', FormName: 'note', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'message_id', FormName: 'message_id', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'error', FormName: 'error', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'error_description', FormName: 'error_description', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('sms', obj54);
         var obj55 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "receipt_bill_bill_backup",
            _id: "receipt_bill_bill_backup",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetreceipt_bill_bill_backup", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreceipt_bill_bill_backup", _f: "id,receipt_id,bill_id,bill_backup_id,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreceipt_bill_bill_backup", _f: "id,receipt_id,bill_id,bill_backup_id,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "receipt_id", name: "receipt_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "bill_id", name: "bill_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "bill_backup_id", name: "bill_backup_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*5*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*6*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*7*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*8*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "receipt_bill_bill_backup",
            cols: [
               /*1*/{ ColName: 'receipt_id', FormName: 'receipt_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_id', FormName: 'bill_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'bill_backup_id', FormName: 'bill_backup_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'note', FormName: 'note', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "receipt_bill_bill_backupdetail",
            cols: [
               /*1*/{ ColName: 'receipt_id', FormName: 'receipt_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_id', FormName: 'bill_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'bill_backup_id', FormName: 'bill_backup_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'note', FormName: 'note', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('receipt_bill_bill_backup', obj55);
         var obj56 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bill_f3_detail",
            _id: "bill_f3_detail",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbill_f3_detail", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_f3_detail", _f: "id,bill_f3_id,bill_package_id,note,go_time,go_user_id_check,arrival_time,arrival_user_id_check,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_f3_detail", _f: "id,bill_f3_id,bill_package_id,note,go_time,go_user_id_check,arrival_time,arrival_user_id_check,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "bill_f3_id", name: "bill_f3_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "bill_package_id", name: "bill_package_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "go_time", name: "go_time", create: true, edit: true, list: true , type: "datetime" }
			,/*5*/{ field: "go_user_id_check", name: "go_user_id_check", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "arrival_time", name: "arrival_time", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "arrival_user_id_check", name: "arrival_user_id_check", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*9*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*11*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*12*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*13*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*14*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "bill_f3_detail",
            cols: [
               /*1*/{ ColName: 'bill_f3_id', FormName: 'bill_f3_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_package_id', FormName: 'bill_package_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'go_time', FormName: 'go_time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'go_user_id_check', FormName: 'go_user_id_check', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'arrival_time', FormName: 'arrival_time', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'arrival_user_id_check', FormName: 'arrival_user_id_check', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bill_f3_detaildetail",
            cols: [
               /*1*/{ ColName: 'bill_f3_id', FormName: 'bill_f3_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_package_id', FormName: 'bill_package_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'go_time', FormName: 'go_time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'go_user_id_check', FormName: 'go_user_id_check', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'arrival_time', FormName: 'arrival_time', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'arrival_user_id_check', FormName: 'arrival_user_id_check', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bill_f3_detail', obj56);
         var obj57 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "reason",
            _id: "reason",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetreason", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreason", _f: "id,group_id,code,name,descript,type,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreason", _f: "id,group_id,code,name,descript,type,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "group_id", name: "group_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*3*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*4*/{ field: "descript", name: "descript", create: true, edit: true, list: true  }
			,/*5*/{ field: "type", name: "type", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*7*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*9*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*11*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*12*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "reason",
            cols: [
               /*1*/{ ColName: 'group_id', FormName: 'group_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'code', FormName: 'code', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'name', FormName: 'name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'descript', FormName: 'descript', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'type', FormName: 'type', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'note', FormName: 'note', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "reasondetail",
            cols: [
               /*1*/{ ColName: 'group_id', FormName: 'group_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'code', FormName: 'code', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'name', FormName: 'name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'descript', FormName: 'descript', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'type', FormName: 'type', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'note', FormName: 'note', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('reason', obj57);
         var obj58 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "reason_add_service",
            _id: "reason_add_service",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetreason_add_service", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreason_add_service", _f: "id,reason_id,add_service_id,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreason_add_service", _f: "id,reason_id,add_service_id,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_created_userid,isprg_updated_date,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "reason_id", name: "reason_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "add_service_id", name: "add_service_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*5*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*6*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*7*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2], style: [".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "reason_add_service",
            cols: [
               /*1*/{ ColName: 'reason_id', FormName: 'reason_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'add_service_id', FormName: 'add_service_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "reason_add_servicedetail",
            cols: [
               /*1*/{ ColName: 'reason_id', FormName: 'reason_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'add_service_id', FormName: 'add_service_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('reason_add_service', obj58);
         var obj59 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "shelf",
            _id: "shelf",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetshelf", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetshelf", _f: "id,type,department_id,code,name,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetshelf", _f: "id,type,department_id,code,name,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "type", name: "type", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "department_id", name: "department_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*4*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*5*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*6*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*7*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*8*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "shelf",
            cols: [
               /*1*/{ ColName: 'type', FormName: 'type', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'department_id', FormName: 'department_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'code', FormName: 'code', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'name', FormName: 'name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "shelfdetail",
            cols: [
               /*1*/{ ColName: 'type', FormName: 'type', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'department_id', FormName: 'department_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'code', FormName: 'code', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'name', FormName: 'name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('shelf', obj59);
         var obj60 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "account",
            _id: "account",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetaccount", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetaccount", _f: "id,username,password,fullname,department_id,status,login_time,logout_time,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetaccount", _f: "id,username,password,fullname,department_id,status,login_time,logout_time,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "username", name: "username", create: true, edit: true, list: true  }
			,/*2*/{ field: "password", name: "password", create: true, edit: true, list: true  }
			,/*3*/{ field: "fullname", name: "fullname", create: true, edit: true, list: true  }
			,/*4*/{ field: "department_id", name: "department_id", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*6*/{ field: "login_time", name: "login_time", create: true, edit: true, list: true , type: "datetime" }
			,/*7*/{ field: "logout_time", name: "logout_time", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*9*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*11*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*12*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*13*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*14*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "account",
            cols: [
               /*1*/{ ColName: 'username', FormName: 'username', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'password', FormName: 'password', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'fullname', FormName: 'fullname', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'department_id', FormName: 'department_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'login_time', FormName: 'login_time', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'logout_time', FormName: 'logout_time', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'note', FormName: 'note', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "accountdetail",
            cols: [
               /*1*/{ ColName: 'username', FormName: 'username', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'password', FormName: 'password', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'fullname', FormName: 'fullname', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'department_id', FormName: 'department_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'login_time', FormName: 'login_time', PositionData: 6, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'logout_time', FormName: 'logout_time', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'note', FormName: 'note', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('account', obj60);
         var obj61 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "receipt_add_service",
            _id: "receipt_add_service",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetreceipt_add_service", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreceipt_add_service", _f: "id,receipt_id,add_service_id,type,value,cal_value,postage,count,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreceipt_add_service", _f: "id,receipt_id,add_service_id,type,value,cal_value,postage,count,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "receipt_id", name: "receipt_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "add_service_id", name: "add_service_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "type", name: "type", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "value", name: "value", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*5*/{ field: "cal_value", name: "cal_value", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "postage", name: "postage", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "count", name: "count", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*8*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*9*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*10*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*12*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*13*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*14*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*15*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "receipt_add_service",
            cols: [
               /*1*/{ ColName: 'receipt_id', FormName: 'receipt_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'add_service_id', FormName: 'add_service_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'type', FormName: 'type', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'value', FormName: 'value', PositionData: 4, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'cal_value', FormName: 'cal_value', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'postage', FormName: 'postage', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'count', FormName: 'count', PositionData: 7, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'note', FormName: 'note', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'status', FormName: 'status', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "receipt_add_servicedetail",
            cols: [
               /*1*/{ ColName: 'receipt_id', FormName: 'receipt_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'add_service_id', FormName: 'add_service_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'type', FormName: 'type', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'value', FormName: 'value', PositionData: 4, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'cal_value', FormName: 'cal_value', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'postage', FormName: 'postage', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'count', FormName: 'count', PositionData: 7, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'note', FormName: 'note', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'status', FormName: 'status', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('receipt_add_service', obj61);
         var obj62 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "price_department_to_department_zone",
            _id: "price_department_to_department_zone",
            _listRefTables: [
                { field: "zone_category_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetzone_category", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }
				,{ field: "department_to_department_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetdepartment_to_deparment", c: {}, _f: "id,Id", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }
				,{ field: "price_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetprice", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }

            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetprice_department_to_department_zone", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_department_to_department_zone", _f: "id,zone_category_id,department_to_department_id,price_id,is_price_cal,is_group_go,is_group_receive,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_department_to_department_zone", _f: "id,zone_category_id,department_to_department_id,price_id,is_price_cal,is_group_go,is_group_receive,note,status,isprg_status,isprg_userinfo_descript,isprg_created_userid,isprg_created_date,isprg_updated_userid,isprg_updated_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "zone_category_id", name: "zone_category_id", create: true, edit: true, list: true  , type: "select", option:{ field: "zone_category_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetzone_category", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*2*/{ field: "department_to_department_id", name: "department_to_department_id", create: true, edit: true, list: true  , type: "select", option:{ field: "department_to_department_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetdepartment_to_deparment", c: {}, _f: "id,Id", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*3*/{ field: "price_id", name: "price_id", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*4*/{ field: "is_price_cal", name: "is_price_cal", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*5*/{ field: "is_group_go", name: "is_group_go", create: true, edit: true, list: true  }
			,/*6*/{ field: "is_group_receive", name: "is_group_receive", create: true, edit: true, list: true  }
			,/*7*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*8*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*11*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*12*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*13*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }
			,/*14*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }

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
            name: "price_department_to_department_zone",
            cols: [
               /*1*/{ ColName: 'zone_category_id', FormName: 'zone_category_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'department_to_department_id', FormName: 'department_to_department_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'price_id', FormName: 'price_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'is_price_cal', FormName: 'is_price_cal', PositionData: 4, IsShow: 'isShow', ColType: 'bit', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'is_group_go', FormName: 'is_group_go', PositionData: 5, IsShow: 'isShow', ColType: 'bit', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'is_group_receive', FormName: 'is_group_receive', PositionData: 6, IsShow: 'isShow', ColType: 'bit', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'note', FormName: 'note', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "price_department_to_department_zonedetail",
            cols: [
               /*1*/{ ColName: 'zone_category_id', FormName: 'zone_category_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'department_to_department_id', FormName: 'department_to_department_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'price_id', FormName: 'price_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'is_price_cal', FormName: 'is_price_cal', PositionData: 4, IsShow: 'isShow', ColType: 'bit', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'is_group_go', FormName: 'is_group_go', PositionData: 5, IsShow: 'isShow', ColType: 'bit', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'is_group_receive', FormName: 'is_group_receive', PositionData: 6, IsShow: 'isShow', ColType: 'bit', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'note', FormName: 'note', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('price_department_to_department_zone', obj62);
         var obj63 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "customer_contract",
            _id: "customer_contract",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetcustomer_contract", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetcustomer_contract", _f: "id,customer_id,contract_code,from_date,to_date,our_sign_name,customer_sign_name,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetcustomer_contract", _f: "id,customer_id,contract_code,from_date,to_date,our_sign_name,customer_sign_name,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_created_userid,isprg_updated_date,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "customer_id", name: "customer_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "contract_code", name: "contract_code", create: true, edit: true, list: true  }
			,/*3*/{ field: "from_date", name: "from_date", create: true, edit: true, list: true , type: "datetime" }
			,/*4*/{ field: "to_date", name: "to_date", create: true, edit: true, list: true , type: "datetime" }
			,/*5*/{ field: "our_sign_name", name: "our_sign_name", create: true, edit: true, list: true  }
			,/*6*/{ field: "customer_sign_name", name: "customer_sign_name", create: true, edit: true, list: true  }
			,/*7*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*8*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*10*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*11*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*12*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*13*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "customer_contract",
            cols: [
               /*1*/{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'contract_code', FormName: 'contract_code', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'from_date', FormName: 'from_date', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'to_date', FormName: 'to_date', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'our_sign_name', FormName: 'our_sign_name', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'customer_sign_name', FormName: 'customer_sign_name', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'note', FormName: 'note', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "customer_contractdetail",
            cols: [
               /*1*/{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'contract_code', FormName: 'contract_code', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'from_date', FormName: 'from_date', PositionData: 3, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'to_date', FormName: 'to_date', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'our_sign_name', FormName: 'our_sign_name', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'customer_sign_name', FormName: 'customer_sign_name', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'note', FormName: 'note', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('customer_contract', obj63);
         var obj64 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "service_type",
            _id: "service_type",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetservice_type", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetservice_type", _f: "id,code,name,formular_convert,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetservice_type", _f: "id,code,name,formular_convert,note,status,isprg_status,isprg_userinfo_descript,isprg_created_userid,isprg_created_date,isprg_updated_userid,isprg_updated_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "formular_convert", name: "formular_convert", create: true, edit: true, list: true  }
			,/*4*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*5*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*7*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*8*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }

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
            name: "service_type",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'formular_convert', FormName: 'formular_convert', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'note', FormName: 'note', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "service_typedetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'formular_convert', FormName: 'formular_convert', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'note', FormName: 'note', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('service_type', obj64);
         var obj65 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "price_base",
            _id: "price_base",
            _listRefTables: [
                { field: "service_type_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetservice_type", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }

            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetprice_base", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_base", _f: "id,service_type_id,code,name,start_time,end_time,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_base", _f: "id,service_type_id,code,name,start_time,end_time,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "service_type_id", name: "service_type_id", create: true, edit: true, list: true  , type: "select", option:{ field: "service_type_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetservice_type", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*2*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*3*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*4*/{ field: "start_time", name: "start_time", create: true, edit: true, list: true , type: "datetime" }
			,/*5*/{ field: "end_time", name: "end_time", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*7*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*8*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*10*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*11*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*12*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*13*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "price_base",
            cols: [
               /*1*/{ ColName: 'service_type_id', FormName: 'service_type_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'code', FormName: 'code', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'name', FormName: 'name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'start_time', FormName: 'start_time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'end_time', FormName: 'end_time', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'note', FormName: 'note', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'status', FormName: 'status', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "price_basedetail",
            cols: [
               /*1*/{ ColName: 'service_type_id', FormName: 'service_type_id', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'code', FormName: 'code', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'name', FormName: 'name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'start_time', FormName: 'start_time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'end_time', FormName: 'end_time', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'note', FormName: 'note', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'status', FormName: 'status', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('price_base', obj65);
         var obj66 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "zone_category_service_type",
            _id: "zone_category_service_type",
            _listRefTables: [
                { field: "zone_category_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetzone_category", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }
				,{ field: "service_type_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetservice_type", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }

            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetzone_category_service_type", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetzone_category_service_type", _f: "id,zone_category_id,service_type_id,zone_number,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetzone_category_service_type", _f: "id,zone_category_id,service_type_id,zone_number,note,status,isprg_status,isprg_userinfo_descript,isprg_created_userid,isprg_created_date,isprg_updated_userid,isprg_updated_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "zone_category_id", name: "zone_category_id", create: true, edit: true, list: true  , type: "select", option:{ field: "zone_category_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetzone_category", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*2*/{ field: "service_type_id", name: "service_type_id", create: true, edit: true, list: true  , type: "select", option:{ field: "service_type_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetservice_type", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*3*/{ field: "zone_number", name: "zone_number", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*4*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*5*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*7*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*8*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*9*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }

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
            name: "zone_category_service_type",
            cols: [
               /*1*/{ ColName: 'zone_category_id', FormName: 'zone_category_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'service_type_id', FormName: 'service_type_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'zone_number', FormName: 'zone_number', PositionData: 3, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'note', FormName: 'note', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "zone_category_service_typedetail",
            cols: [
               /*1*/{ ColName: 'zone_category_id', FormName: 'zone_category_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'service_type_id', FormName: 'service_type_id', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'zone_number', FormName: 'zone_number', PositionData: 3, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'note', FormName: 'note', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'status', FormName: 'status', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('zone_category_service_type', obj66);
         var obj67 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "receipt_bill_package",
            _id: "receipt_bill_package",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetreceipt_bill_package", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreceipt_bill_package", _f: "id,receipt_id,bill_assign_id,old_bill_package_id,new_bill_package_id,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreceipt_bill_package", _f: "id,receipt_id,bill_assign_id,old_bill_package_id,new_bill_package_id,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "receipt_id", name: "receipt_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "bill_assign_id", name: "bill_assign_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "old_bill_package_id", name: "old_bill_package_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "new_bill_package_id", name: "new_bill_package_id", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*6*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*7*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*9*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*11*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*12*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "receipt_bill_package",
            cols: [
               /*1*/{ ColName: 'receipt_id', FormName: 'receipt_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_assign_id', FormName: 'bill_assign_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'old_bill_package_id', FormName: 'old_bill_package_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'new_bill_package_id', FormName: 'new_bill_package_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "receipt_bill_packagedetail",
            cols: [
               /*1*/{ ColName: 'receipt_id', FormName: 'receipt_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_assign_id', FormName: 'bill_assign_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'old_bill_package_id', FormName: 'old_bill_package_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'new_bill_package_id', FormName: 'new_bill_package_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('receipt_bill_package', obj67);
         var obj68 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "vehicle_shifting_order_detail",
            _id: "vehicle_shifting_order_detail",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetvehicle_shifting_order_detail", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetvehicle_shifting_order_detail", _f: "id,vehicle_shifting_order_id,bill_f3_id", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetvehicle_shifting_order_detail", _f: "id,vehicle_shifting_order_id,bill_f3_id,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "vehicle_shifting_order_id", name: "vehicle_shifting_order_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "bill_f3_id", name: "bill_f3_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*4*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*5*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*6*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*7*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "vehicle_shifting_order_detail",
            cols: [
               /*1*/{ ColName: 'vehicle_shifting_order_id', FormName: 'vehicle_shifting_order_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_f3_id', FormName: 'bill_f3_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "vehicle_shifting_order_detaildetail",
            cols: [
               /*1*/{ ColName: 'vehicle_shifting_order_id', FormName: 'vehicle_shifting_order_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'bill_f3_id', FormName: 'bill_f3_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('vehicle_shifting_order_detail', obj68);
         var obj69 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "vehicle_shifting_order",
            _id: "vehicle_shifting_order",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetvehicle_shifting_order", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetvehicle_shifting_order", _f: "id,provider_id,vehicle_id,provider_shifting_order_id,way_id,route_id,driver1_id,driver1_name,driver1_phone,driver2_id,driver2_name,driver2_phone,guide_name,guide_phone,note,shifting_date,start_time_id,start_time,finish_time", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetvehicle_shifting_order", _f: "id,provider_id,vehicle_id,provider_shifting_order_id,way_id,route_id,driver1_id,driver1_name,driver1_phone,driver2_id,driver2_name,driver2_phone,guide_name,guide_phone,note,shifting_date,start_time_id,start_time,finish_time,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "provider_id", name: "provider_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "vehicle_id", name: "vehicle_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "provider_shifting_order_id", name: "provider_shifting_order_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "way_id", name: "way_id", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "route_id", name: "route_id", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "driver1_id", name: "driver1_id", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "driver1_name", name: "driver1_name", create: true, edit: true, list: true  }
			,/*8*/{ field: "driver1_phone", name: "driver1_phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*9*/{ field: "driver2_id", name: "driver2_id", create: true, edit: true, list: true , type: "money"  }
			,/*10*/{ field: "driver2_name", name: "driver2_name", create: true, edit: true, list: true  }
			,/*11*/{ field: "driver2_phone", name: "driver2_phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*12*/{ field: "guide_name", name: "guide_name", create: true, edit: true, list: true  }
			,/*13*/{ field: "guide_phone", name: "guide_phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*14*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*15*/{ field: "shifting_date", name: "shifting_date", create: true, edit: true, list: true , type: "datetime" }
			,/*16*/{ field: "start_time_id", name: "start_time_id", create: true, edit: true, list: true , type: "money"  }
			,/*17*/{ field: "start_time", name: "start_time", create: true, edit: true, list: true , type: "datetime" }
			,/*18*/{ field: "finish_time", name: "finish_time", create: true, edit: true, list: true , type: "datetime" }
			,/*19*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*20*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*21*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*22*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*23*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*24*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "vehicle_shifting_order",
            cols: [
               /*1*/{ ColName: 'provider_id', FormName: 'provider_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'vehicle_id', FormName: 'vehicle_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'provider_shifting_order_id', FormName: 'provider_shifting_order_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'way_id', FormName: 'way_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'route_id', FormName: 'route_id', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'driver1_id', FormName: 'driver1_id', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'driver1_name', FormName: 'driver1_name', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'driver1_phone', FormName: 'driver1_phone', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'driver2_id', FormName: 'driver2_id', PositionData: 9, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'driver2_name', FormName: 'driver2_name', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'driver2_phone', FormName: 'driver2_phone', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'guide_name', FormName: 'guide_name', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'guide_phone', FormName: 'guide_phone', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'note', FormName: 'note', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'shifting_date', FormName: 'shifting_date', PositionData: 15, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'start_time_id', FormName: 'start_time_id', PositionData: 16, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'start_time', FormName: 'start_time', PositionData: 17, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'finish_time', FormName: 'finish_time', PositionData: 18, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "vehicle_shifting_orderdetail",
            cols: [
               /*1*/{ ColName: 'provider_id', FormName: 'provider_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'vehicle_id', FormName: 'vehicle_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'provider_shifting_order_id', FormName: 'provider_shifting_order_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'way_id', FormName: 'way_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'route_id', FormName: 'route_id', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'driver1_id', FormName: 'driver1_id', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'driver1_name', FormName: 'driver1_name', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'driver1_phone', FormName: 'driver1_phone', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'driver2_id', FormName: 'driver2_id', PositionData: 9, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'driver2_name', FormName: 'driver2_name', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'driver2_phone', FormName: 'driver2_phone', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'guide_name', FormName: 'guide_name', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'guide_phone', FormName: 'guide_phone', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'note', FormName: 'note', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'shifting_date', FormName: 'shifting_date', PositionData: 15, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'start_time_id', FormName: 'start_time_id', PositionData: 16, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'start_time', FormName: 'start_time', PositionData: 17, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'finish_time', FormName: 'finish_time', PositionData: 18, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('vehicle_shifting_order', obj69);
         var obj70 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bill_f3",
            _id: "bill_f3",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbill_f3", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_f3", _f: "id,from_department_id,to_department_id,final_department_id,message_code,go_time,go_user_id,arrival_time,arrival_user_id,code,weight,note,supplier_id,plate_number,driver_name,reciever_name,attendant,barcode,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_f3", _f: "id,from_department_id,to_department_id,final_department_id,message_code,go_time,go_user_id,arrival_time,arrival_user_id,code,weight,note,supplier_id,plate_number,driver_name,reciever_name,attendant,barcode,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "from_department_id", name: "from_department_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "to_department_id", name: "to_department_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "final_department_id", name: "final_department_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "message_code", name: "message_code", create: true, edit: true, list: true  }
			,/*5*/{ field: "go_time", name: "go_time", create: true, edit: true, list: true , type: "datetime" }
			,/*6*/{ field: "go_user_id", name: "go_user_id", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "arrival_time", name: "arrival_time", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "arrival_user_id", name: "arrival_user_id", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*10*/{ field: "weight", name: "weight", create: true, edit: true, list: true , addon: { text: '(kg)', css: 'gb-gcolor' } }
			,/*11*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*12*/{ field: "supplier_id", name: "supplier_id", create: true, edit: true, list: true , type: "money"  }
			,/*13*/{ field: "plate_number", name: "plate_number", create: true, edit: true, list: true  }
			,/*14*/{ field: "driver_name", name: "driver_name", create: true, edit: true, list: true  }
			,/*15*/{ field: "reciever_name", name: "reciever_name", create: true, edit: true, list: true  }
			,/*16*/{ field: "attendant", name: "attendant", create: true, edit: true, list: true  }
			,/*17*/{ field: "barcode", name: "barcode", create: true, edit: true, list: true ,color: 'orange', addon:  { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-barcode' } }
			,/*18*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*19*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*20*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*21*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*22*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*23*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*24*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "bill_f3",
            cols: [
               /*1*/{ ColName: 'from_department_id', FormName: 'from_department_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'to_department_id', FormName: 'to_department_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'final_department_id', FormName: 'final_department_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'message_code', FormName: 'message_code', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'go_time', FormName: 'go_time', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'go_user_id', FormName: 'go_user_id', PositionData: 6, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'arrival_time', FormName: 'arrival_time', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'arrival_user_id', FormName: 'arrival_user_id', PositionData: 8, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'code', FormName: 'code', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'weight', FormName: 'weight', PositionData: 10, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'note', FormName: 'note', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'supplier_id', FormName: 'supplier_id', PositionData: 12, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'plate_number', FormName: 'plate_number', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'driver_name', FormName: 'driver_name', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'reciever_name', FormName: 'reciever_name', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'attendant', FormName: 'attendant', PositionData: 16, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'barcode', FormName: 'barcode', PositionData: 17, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'status', FormName: 'status', PositionData: 18, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bill_f3detail",
            cols: [
               /*1*/{ ColName: 'from_department_id', FormName: 'from_department_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'to_department_id', FormName: 'to_department_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'final_department_id', FormName: 'final_department_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'message_code', FormName: 'message_code', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'go_time', FormName: 'go_time', PositionData: 5, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'go_user_id', FormName: 'go_user_id', PositionData: 6, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'arrival_time', FormName: 'arrival_time', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'arrival_user_id', FormName: 'arrival_user_id', PositionData: 8, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'code', FormName: 'code', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'weight', FormName: 'weight', PositionData: 10, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'note', FormName: 'note', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'supplier_id', FormName: 'supplier_id', PositionData: 12, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'plate_number', FormName: 'plate_number', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'driver_name', FormName: 'driver_name', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'reciever_name', FormName: 'reciever_name', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'attendant', FormName: 'attendant', PositionData: 16, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'barcode', FormName: 'barcode', PositionData: 17, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'status', FormName: 'status', PositionData: 18, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bill_f3', obj70);
         var obj71 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "customer",
            _id: "customer",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetcustomer", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetcustomer", _f: "id,code,com_type,name,esta_time,abbr_name,address,phone,fax,identity_id,ward,district_id,province_id,email,website,tax_code,note,birthday_time,type,rep_sign_type,rep_number,warning_after_out_bill,warning_max_debt,debt,pay_type_id,status,owner_account_id,district,province,country,address_is_point,map_params", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetcustomer", _f: "id,code,com_type,name,esta_time,abbr_name,address,phone,fax,identity_id,ward,district_id,province_id,email,website,tax_code,note,birthday_time,type,rep_sign_type,rep_number,warning_after_out_bill,warning_max_debt,debt,pay_type_id,status,owner_account_id,district,province,country,address_is_point,map_params,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_created_userid,isprg_updated_userid,isprg_updated_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "com_type", name: "com_type", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*4*/{ field: "esta_time", name: "esta_time", create: true, edit: true, list: true , type: "datetime" }
			,/*5*/{ field: "abbr_name", name: "abbr_name", create: true, edit: true, list: true  }
			,/*6*/{ field: "address", name: "address", create: true, edit: true, list: true  }
			,/*7*/{ field: "phone", name: "phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*8*/{ field: "fax", name: "fax", create: true, edit: true, list: true  }
			,/*9*/{ field: "identity_id", name: "identity_id", create: true, edit: true, list: true  }
			,/*10*/{ field: "ward", name: "ward", create: true, edit: true, list: true  }
			,/*11*/{ field: "district_id", name: "district_id", create: true, edit: true, list: true , type: "money"  }
			,/*12*/{ field: "province_id", name: "province_id", create: true, edit: true, list: true , type: "money"  }
			,/*13*/{ field: "email", name: "email", create: true, edit: true, list: true  }
			,/*14*/{ field: "website", name: "website", create: true, edit: true, list: true  }
			,/*15*/{ field: "tax_code", name: "tax_code", create: true, edit: true, list: true  }
			,/*16*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*17*/{ field: "birthday_time", name: "birthday_time", create: true, edit: true, list: true , type: "datetime" }
			,/*18*/{ field: "type", name: "type", create: true, edit: true, list: true , type: "money"  }
			,/*19*/{ field: "rep_sign_type", name: "rep_sign_type", create: true, edit: true, list: true , type: "money"  }
			,/*20*/{ field: "rep_number", name: "rep_number", create: true, edit: true, list: true  }
			,/*21*/{ field: "warning_after_out_bill", name: "warning_after_out_bill", create: true, edit: true, list: true , type: "money"  }
			,/*22*/{ field: "warning_max_debt", name: "warning_max_debt", create: true, edit: true, list: true , type: "money"  }
			,/*23*/{ field: "debt", name: "debt", create: true, edit: true, list: true , type: "money"  }
			,/*24*/{ field: "pay_type_id", name: "pay_type_id", create: true, edit: true, list: true , type: "money"  }
			,/*25*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*26*/{ field: "owner_account_id", name: "owner_account_id", create: true, edit: true, list: true , type: "money"  }
			,/*27*/{ field: "district", name: "district", create: true, edit: true, list: true , type: "money"  }
			,/*28*/{ field: "province", name: "province", create: true, edit: true, list: true , type: "money"  }
			,/*29*/{ field: "country", name: "country", create: true, edit: true, list: true , type: "money"  }
			,/*30*/{ field: "address_is_point", name: "address_is_point", create: true, edit: true, list: true , type: "money"  }
			,/*31*/{ field: "map_params", name: "map_params", create: true, edit: true, list: true  }
			,/*32*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*33*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*34*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*35*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*36*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }
			,/*37*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }

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
				{ row: [28,29], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [30], style: [".col-md-2", ".col-md-4"] },

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
				{ row: [28,29], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [30], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "customer",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'com_type', FormName: 'com_type', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'name', FormName: 'name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'esta_time', FormName: 'esta_time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'abbr_name', FormName: 'abbr_name', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'address', FormName: 'address', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'phone', FormName: 'phone', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'fax', FormName: 'fax', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'identity_id', FormName: 'identity_id', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'ward', FormName: 'ward', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'district_id', FormName: 'district_id', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'province_id', FormName: 'province_id', PositionData: 12, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'email', FormName: 'email', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'website', FormName: 'website', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'tax_code', FormName: 'tax_code', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'note', FormName: 'note', PositionData: 16, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'birthday_time', FormName: 'birthday_time', PositionData: 17, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'type', FormName: 'type', PositionData: 18, IsShow: 'isShow', ColType: 'smallint', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'rep_sign_type', FormName: 'rep_sign_type', PositionData: 19, IsShow: 'isShow', ColType: 'smallint', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'rep_number', FormName: 'rep_number', PositionData: 20, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'warning_after_out_bill', FormName: 'warning_after_out_bill', PositionData: 21, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'warning_max_debt', FormName: 'warning_max_debt', PositionData: 22, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*23*/,{ ColName: 'debt', FormName: 'debt', PositionData: 23, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*24*/,{ ColName: 'pay_type_id', FormName: 'pay_type_id', PositionData: 24, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*25*/,{ ColName: 'status', FormName: 'status', PositionData: 25, IsShow: 'isShow', ColType: 'smallint', Parent: 'isParent', iNotFillData: 0 }
				/*26*/,{ ColName: 'owner_account_id', FormName: 'owner_account_id', PositionData: 26, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*27*/,{ ColName: 'district', FormName: 'district', PositionData: 27, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*28*/,{ ColName: 'province', FormName: 'province', PositionData: 28, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*29*/,{ ColName: 'country', FormName: 'country', PositionData: 29, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*30*/,{ ColName: 'address_is_point', FormName: 'address_is_point', PositionData: 30, IsShow: 'isShow', ColType: 'smallint', Parent: 'isParent', iNotFillData: 0 }
				/*31*/,{ ColName: 'map_params', FormName: 'map_params', PositionData: 31, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "customerdetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'com_type', FormName: 'com_type', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'name', FormName: 'name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'esta_time', FormName: 'esta_time', PositionData: 4, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'abbr_name', FormName: 'abbr_name', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'address', FormName: 'address', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'phone', FormName: 'phone', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'fax', FormName: 'fax', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'identity_id', FormName: 'identity_id', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'ward', FormName: 'ward', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'district_id', FormName: 'district_id', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'province_id', FormName: 'province_id', PositionData: 12, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'email', FormName: 'email', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'website', FormName: 'website', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'tax_code', FormName: 'tax_code', PositionData: 15, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'note', FormName: 'note', PositionData: 16, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'birthday_time', FormName: 'birthday_time', PositionData: 17, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'type', FormName: 'type', PositionData: 18, IsShow: 'isShow', ColType: 'smallint', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'rep_sign_type', FormName: 'rep_sign_type', PositionData: 19, IsShow: 'isShow', ColType: 'smallint', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'rep_number', FormName: 'rep_number', PositionData: 20, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'warning_after_out_bill', FormName: 'warning_after_out_bill', PositionData: 21, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'warning_max_debt', FormName: 'warning_max_debt', PositionData: 22, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*23*/,{ ColName: 'debt', FormName: 'debt', PositionData: 23, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*24*/,{ ColName: 'pay_type_id', FormName: 'pay_type_id', PositionData: 24, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*25*/,{ ColName: 'status', FormName: 'status', PositionData: 25, IsShow: 'isShow', ColType: 'smallint', Parent: 'isParent', iNotFillData: 0 }
				/*26*/,{ ColName: 'owner_account_id', FormName: 'owner_account_id', PositionData: 26, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*27*/,{ ColName: 'district', FormName: 'district', PositionData: 27, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*28*/,{ ColName: 'province', FormName: 'province', PositionData: 28, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*29*/,{ ColName: 'country', FormName: 'country', PositionData: 29, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*30*/,{ ColName: 'address_is_point', FormName: 'address_is_point', PositionData: 30, IsShow: 'isShow', ColType: 'smallint', Parent: 'isParent', iNotFillData: 0 }
				/*31*/,{ ColName: 'map_params', FormName: 'map_params', PositionData: 31, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('customer', obj71);
         var obj72 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "lyt_PT_Manager",
            _id: "lyt_PT_Manager",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetlyt_PT_Manager", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetlyt_PT_Manager", _f: "Id,GroupId,Type,Code,UserName,Password,Name,FullName,PrimaryPhone,PrimaryEmail,Address,ProvinceId,AreaCode,VanPhongId,TeamId,Status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetlyt_PT_Manager", _f: "Id,GroupId,Type,Code,UserName,Password,Name,FullName,PrimaryPhone,PrimaryEmail,Address,ProvinceId,AreaCode,VanPhongId,TeamId,Status,IsPrgCreatedDate,IsPrgUpdatedDate,IsPrgCreatedUserId,IsPrgUpdatedUserId", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "GroupId", name: "GroupId", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "Type", name: "Type", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "Code", name: "Code", create: true, edit: true, list: true  }
			,/*4*/{ field: "UserName", name: "UserName", create: true, edit: true, list: true  }
			,/*5*/{ field: "Password", name: "Password", create: true, edit: true, list: true  }
			,/*6*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*7*/{ field: "FullName", name: "FullName", create: true, edit: true, list: true  }
			,/*8*/{ field: "PrimaryPhone", name: "PrimaryPhone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*9*/{ field: "PrimaryEmail", name: "PrimaryEmail", create: true, edit: true, list: true  }
			,/*10*/{ field: "Address", name: "Address", create: true, edit: true, list: true  }
			,/*11*/{ field: "ProvinceId", name: "ProvinceId", create: true, edit: true, list: true , type: "money"  }
			,/*12*/{ field: "AreaCode", name: "AreaCode", create: true, edit: true, list: true  }
			,/*13*/{ field: "VanPhongId", name: "VanPhongId", create: true, edit: true, list: true , type: "money"  }
			,/*14*/{ field: "TeamId", name: "TeamId", create: true, edit: true, list: true , type: "money"  }
			,/*15*/{ field: "Status", name: "Status", create: true, edit: true, list: true , type: "money"  }
			,/*16*/{ field: "IsPrgCreatedDate", name: "IsPrgCreatedDate", create: false, edit: false, list: false , type: "datetime" }
			,/*17*/{ field: "IsPrgUpdatedDate", name: "IsPrgUpdatedDate", create: false, edit: false, list: false , type: "datetime" }
			,/*18*/{ field: "IsPrgCreatedUserId", name: "IsPrgCreatedUserId", create: false, edit: false, list: false , type: "money"  }
			,/*19*/{ field: "IsPrgUpdatedUserId", name: "IsPrgUpdatedUserId", create: false, edit: false, list: false , type: "money"  }

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
            name: "lyt_PT_Manager",
            cols: [
               /*1*/{ ColName: 'GroupId', FormName: 'GroupId', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Type', FormName: 'Type', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Code', FormName: 'Code', PositionData: 3, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'UserName', FormName: 'UserName', PositionData: 4, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Password', FormName: 'Password', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Name', FormName: 'Name', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'FullName', FormName: 'FullName', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'PrimaryPhone', FormName: 'PrimaryPhone', PositionData: 8, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'PrimaryEmail', FormName: 'PrimaryEmail', PositionData: 9, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'Address', FormName: 'Address', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'ProvinceId', FormName: 'ProvinceId', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'AreaCode', FormName: 'AreaCode', PositionData: 12, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'VanPhongId', FormName: 'VanPhongId', PositionData: 13, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'TeamId', FormName: 'TeamId', PositionData: 14, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'Status', FormName: 'Status', PositionData: 15, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "lyt_PT_Managerdetail",
            cols: [
               /*1*/{ ColName: 'GroupId', FormName: 'GroupId', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Type', FormName: 'Type', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Code', FormName: 'Code', PositionData: 3, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'UserName', FormName: 'UserName', PositionData: 4, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Password', FormName: 'Password', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Name', FormName: 'Name', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'FullName', FormName: 'FullName', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'PrimaryPhone', FormName: 'PrimaryPhone', PositionData: 8, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'PrimaryEmail', FormName: 'PrimaryEmail', PositionData: 9, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'Address', FormName: 'Address', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'ProvinceId', FormName: 'ProvinceId', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'AreaCode', FormName: 'AreaCode', PositionData: 12, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'VanPhongId', FormName: 'VanPhongId', PositionData: 13, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'TeamId', FormName: 'TeamId', PositionData: 14, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'Status', FormName: 'Status', PositionData: 15, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('lyt_PT_Manager', obj72);
         var obj73 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "PT_Group",
            _id: "PT_Group",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetPT_Group", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetPT_Group", _f: "Id,Type,Code,Name,Description,Color,Status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetPT_Group", _f: "Id,Type,Code,Name,Description,Color,Status,IsPrgCreatedDate,IsPrgUpdatedDate,IsPrgCreatedUserId,IsPrgUpdatedUserId", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Type", name: "Type", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "Code", name: "Code", create: true, edit: true, list: true  }
			,/*3*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*4*/{ field: "Description", name: "Description", create: true, edit: true, list: true  }
			,/*5*/{ field: "Color", name: "Color", create: true, edit: true, list: true  }
			,/*6*/{ field: "Status", name: "Status", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "IsPrgCreatedDate", name: "IsPrgCreatedDate", create: false, edit: false, list: false , type: "datetime" }
			,/*8*/{ field: "IsPrgUpdatedDate", name: "IsPrgUpdatedDate", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "IsPrgCreatedUserId", name: "IsPrgCreatedUserId", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "IsPrgUpdatedUserId", name: "IsPrgUpdatedUserId", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "PT_Group",
            cols: [
               /*1*/{ ColName: 'Type', FormName: 'Type', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Code', FormName: 'Code', PositionData: 2, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Name', FormName: 'Name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Description', FormName: 'Description', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Color', FormName: 'Color', PositionData: 5, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Status', FormName: 'Status', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "PT_Groupdetail",
            cols: [
               /*1*/{ ColName: 'Type', FormName: 'Type', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Code', FormName: 'Code', PositionData: 2, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Name', FormName: 'Name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Description', FormName: 'Description', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Color', FormName: 'Color', PositionData: 5, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Status', FormName: 'Status', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('PT_Group', obj73);
         var obj74 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "PT_Group_Permission",
            _id: "PT_Group_Permission",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetPT_Group_Permission", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetPT_Group_Permission", _f: "Id,GroupId,PermissionId,Type,Code,Name,Description,Status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetPT_Group_Permission", _f: "Id,GroupId,PermissionId,Type,Code,Name,Description,Status,IsPrgCreatedDate,IsPrgUpdatedDate,IsPrgCreatedUserId,IsPrgUpdatedUserId", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "GroupId", name: "GroupId", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "PermissionId", name: "PermissionId", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "Type", name: "Type", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "Code", name: "Code", create: true, edit: true, list: true  }
			,/*5*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*6*/{ field: "Description", name: "Description", create: true, edit: true, list: true  }
			,/*7*/{ field: "Status", name: "Status", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "IsPrgCreatedDate", name: "IsPrgCreatedDate", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "IsPrgUpdatedDate", name: "IsPrgUpdatedDate", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "IsPrgCreatedUserId", name: "IsPrgCreatedUserId", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "IsPrgUpdatedUserId", name: "IsPrgUpdatedUserId", create: false, edit: false, list: false , type: "money"  }

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
            name: "PT_Group_Permission",
            cols: [
               /*1*/{ ColName: 'GroupId', FormName: 'GroupId', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'PermissionId', FormName: 'PermissionId', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Type', FormName: 'Type', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Code', FormName: 'Code', PositionData: 4, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Name', FormName: 'Name', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Description', FormName: 'Description', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'Status', FormName: 'Status', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "PT_Group_Permissiondetail",
            cols: [
               /*1*/{ ColName: 'GroupId', FormName: 'GroupId', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'PermissionId', FormName: 'PermissionId', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Type', FormName: 'Type', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Code', FormName: 'Code', PositionData: 4, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Name', FormName: 'Name', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Description', FormName: 'Description', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'Status', FormName: 'Status', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('PT_Group_Permission', obj74);
         var obj75 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "PT_Permission",
            _id: "PT_Permission",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetPT_Permission", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetPT_Permission", _f: "Id,Type,Code,Name,Module,Description,Status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetPT_Permission", _f: "Id,Type,Code,Name,Module,Description,Status,IsPrgCreatedDate,IsPrgUpdatedDate,IsPrgCreatedUserId,IsPrgUpdatedUserId", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Type", name: "Type", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "Code", name: "Code", create: true, edit: true, list: true  }
			,/*3*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*4*/{ field: "Module", name: "Module", create: true, edit: true, list: true  }
			,/*5*/{ field: "Description", name: "Description", create: true, edit: true, list: true  }
			,/*6*/{ field: "Status", name: "Status", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "IsPrgCreatedDate", name: "IsPrgCreatedDate", create: false, edit: false, list: false , type: "datetime" }
			,/*8*/{ field: "IsPrgUpdatedDate", name: "IsPrgUpdatedDate", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "IsPrgCreatedUserId", name: "IsPrgCreatedUserId", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "IsPrgUpdatedUserId", name: "IsPrgUpdatedUserId", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "PT_Permission",
            cols: [
               /*1*/{ ColName: 'Type', FormName: 'Type', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Code', FormName: 'Code', PositionData: 2, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Name', FormName: 'Name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Module', FormName: 'Module', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Description', FormName: 'Description', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Status', FormName: 'Status', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "PT_Permissiondetail",
            cols: [
               /*1*/{ ColName: 'Type', FormName: 'Type', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Code', FormName: 'Code', PositionData: 2, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Name', FormName: 'Name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Module', FormName: 'Module', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Description', FormName: 'Description', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Status', FormName: 'Status', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('PT_Permission', obj75);
         var obj76 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "PT_User_Permission",
            _id: "PT_User_Permission",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetPT_User_Permission", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetPT_User_Permission", _f: "Id,UserId,PermissionId,Type,Code,Name,Description,Status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetPT_User_Permission", _f: "Id,UserId,PermissionId,Type,Code,Name,Description,Status,IsPrgCreatedDate,IsPrgUpdatedDate,IsPrgCreatedUserId,IsPrgUpdatedUserId", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "UserId", name: "UserId", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "PermissionId", name: "PermissionId", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "Type", name: "Type", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "Code", name: "Code", create: true, edit: true, list: true  }
			,/*5*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*6*/{ field: "Description", name: "Description", create: true, edit: true, list: true  }
			,/*7*/{ field: "Status", name: "Status", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "IsPrgCreatedDate", name: "IsPrgCreatedDate", create: false, edit: false, list: false , type: "datetime" }
			,/*9*/{ field: "IsPrgUpdatedDate", name: "IsPrgUpdatedDate", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "IsPrgCreatedUserId", name: "IsPrgCreatedUserId", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "IsPrgUpdatedUserId", name: "IsPrgUpdatedUserId", create: false, edit: false, list: false , type: "money"  }

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
            name: "PT_User_Permission",
            cols: [
               /*1*/{ ColName: 'UserId', FormName: 'UserId', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'PermissionId', FormName: 'PermissionId', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Type', FormName: 'Type', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Code', FormName: 'Code', PositionData: 4, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Name', FormName: 'Name', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Description', FormName: 'Description', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'Status', FormName: 'Status', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "PT_User_Permissiondetail",
            cols: [
               /*1*/{ ColName: 'UserId', FormName: 'UserId', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'PermissionId', FormName: 'PermissionId', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Type', FormName: 'Type', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Code', FormName: 'Code', PositionData: 4, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Name', FormName: 'Name', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Description', FormName: 'Description', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'Status', FormName: 'Status', PositionData: 7, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('PT_User_Permission', obj76);
         var obj77 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "price_customer_extra",
            _id: "price_customer_extra",
            _listRefTables: [
                { field: "customer_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetcustomer", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }
				,{ field: "zone_category_service_type_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetzone_category_service_type", c: {}, _f: "id,Id", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }
				,{ field: "price_base_detail_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetprice_base_detail", c: {}, _f: "id,Id", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }

            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetprice_customer_extra", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_customer_extra", _f: "id,price_id,customer_id,zone_category_service_type_id,price_base_detail_id,price_customer_id,zone_customer_number_extra,note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetprice_customer_extra", _f: "id,price_id,customer_id,zone_category_service_type_id,price_base_detail_id,price_customer_id,zone_customer_number_extra,note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "price_id", name: "price_id", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*2*/{ field: "customer_id", name: "customer_id", create: true, edit: true, list: true  , type: "select", option:{ field: "customer_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetcustomer", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*3*/{ field: "zone_category_service_type_id", name: "zone_category_service_type_id", create: true, edit: true, list: true  , type: "select", option:{ field: "zone_category_service_type_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetzone_category_service_type", c: {}, _f: "id,Id", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*4*/{ field: "price_base_detail_id", name: "price_base_detail_id", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*5*/{ field: "price_customer_id", name: "price_customer_id", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*6*/{ field: "zone_customer_number_extra", name: "zone_customer_number_extra", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*7*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*8*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*9*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*10*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*11*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*12*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*13*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*14*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "price_customer_extra",
            cols: [
               /*1*/{ ColName: 'price_id', FormName: 'price_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'zone_category_service_type_id', FormName: 'zone_category_service_type_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'price_base_detail_id', FormName: 'price_base_detail_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'price_customer_id', FormName: 'price_customer_id', PositionData: 5, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'zone_customer_number_extra', FormName: 'zone_customer_number_extra', PositionData: 6, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'note', FormName: 'note', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "price_customer_extradetail",
            cols: [
               /*1*/{ ColName: 'price_id', FormName: 'price_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'zone_category_service_type_id', FormName: 'zone_category_service_type_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'price_base_detail_id', FormName: 'price_base_detail_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'price_customer_id', FormName: 'price_customer_id', PositionData: 5, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'zone_customer_number_extra', FormName: 'zone_customer_number_extra', PositionData: 6, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'note', FormName: 'note', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'status', FormName: 'status', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('price_customer_extra', obj77);
         var obj78 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bill_package",
            _id: "bill_package",
            _listRefTables: [
                { field: "department_current_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetdepartment", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }

            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbill_package", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_package", _f: "id,bill_id,department_current_id,no,barcode,quantity_total,store_zone_id,go_time,arrival_note,arrival_time,parent_id,product_id,package_description,product_l,product_w,product_h,product_weight,product_convert_weight,product_value,cost_main,cost_add,receive_fullname,receive_identity,receive_identity_date,receive_identity_place,receive_phone,receive_note,receive_time,receive_user_id", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill_package", _f: "id,bill_id,department_current_id,no,barcode,quantity_total,store_zone_id,go_time,arrival_note,arrival_time,parent_id,product_id,package_description,product_l,product_w,product_h,product_weight,product_convert_weight,product_value,cost_main,cost_add,receive_fullname,receive_identity,receive_identity_date,receive_identity_place,receive_phone,receive_note,receive_time,receive_user_id,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "bill_id", name: "bill_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "department_current_id", name: "department_current_id", create: true, edit: true, list: true  , type: "select", option:{ field: "department_current_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetdepartment", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*3*/{ field: "no", name: "no", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "barcode", name: "barcode", create: true, edit: true, list: true ,color: 'orange', addon:  { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-barcode' } }
			,/*5*/{ field: "quantity_total", name: "quantity_total", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*6*/{ field: "store_zone_id", name: "store_zone_id", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "go_time", name: "go_time", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "arrival_note", name: "arrival_note", create: true, edit: true, list: true  }
			,/*9*/{ field: "arrival_time", name: "arrival_time", create: true, edit: true, list: true , type: "datetime" }
			,/*10*/{ field: "parent_id", name: "parent_id", create: true, edit: true, list: true , type: "money"  }
			,/*11*/{ field: "product_id", name: "product_id", create: true, edit: true, list: true , type: "money"  }
			,/*12*/{ field: "package_description", name: "package_description", create: true, edit: true, list: true  }
			,/*13*/{ field: "product_l", name: "product_l", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*14*/{ field: "product_w", name: "product_w", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*15*/{ field: "product_h", name: "product_h", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*16*/{ field: "product_weight", name: "product_weight", create: true, edit: true, list: true , addon: { text: '(kg)', css: 'gb-gcolor' } }
			,/*17*/{ field: "product_convert_weight", name: "product_convert_weight", create: true, edit: true, list: true , addon: { text: '(kg)', css: 'gb-gcolor' } }
			,/*18*/{ field: "product_value", name: "product_value", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*19*/{ field: "cost_main", name: "cost_main", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*20*/{ field: "cost_add", name: "cost_add", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*21*/{ field: "receive_fullname", name: "receive_fullname", create: true, edit: true, list: true  }
			,/*22*/{ field: "receive_identity", name: "receive_identity", create: true, edit: true, list: true  }
			,/*23*/{ field: "receive_identity_date", name: "receive_identity_date", create: true, edit: true, list: true , type: "datetime" }
			,/*24*/{ field: "receive_identity_place", name: "receive_identity_place", create: true, edit: true, list: true  }
			,/*25*/{ field: "receive_phone", name: "receive_phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*26*/{ field: "receive_note", name: "receive_note", create: true, edit: true, list: true  }
			,/*27*/{ field: "receive_time", name: "receive_time", create: true, edit: true, list: true , type: "datetime" }
			,/*28*/{ field: "receive_user_id", name: "receive_user_id", create: true, edit: true, list: true , type: "money"  }
			,/*29*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*30*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*31*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*32*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*33*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*34*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "bill_package",
            cols: [
               /*1*/{ ColName: 'bill_id', FormName: 'bill_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'department_current_id', FormName: 'department_current_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'no', FormName: 'no', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'barcode', FormName: 'barcode', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'quantity_total', FormName: 'quantity_total', PositionData: 5, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'store_zone_id', FormName: 'store_zone_id', PositionData: 6, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'go_time', FormName: 'go_time', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'arrival_note', FormName: 'arrival_note', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'arrival_time', FormName: 'arrival_time', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'parent_id', FormName: 'parent_id', PositionData: 10, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'product_id', FormName: 'product_id', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'package_description', FormName: 'package_description', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'product_l', FormName: 'product_l', PositionData: 13, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'product_w', FormName: 'product_w', PositionData: 14, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'product_h', FormName: 'product_h', PositionData: 15, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'product_weight', FormName: 'product_weight', PositionData: 16, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'product_convert_weight', FormName: 'product_convert_weight', PositionData: 17, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'product_value', FormName: 'product_value', PositionData: 18, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'cost_main', FormName: 'cost_main', PositionData: 19, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'cost_add', FormName: 'cost_add', PositionData: 20, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'receive_fullname', FormName: 'receive_fullname', PositionData: 21, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'receive_identity', FormName: 'receive_identity', PositionData: 22, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*23*/,{ ColName: 'receive_identity_date', FormName: 'receive_identity_date', PositionData: 23, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*24*/,{ ColName: 'receive_identity_place', FormName: 'receive_identity_place', PositionData: 24, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*25*/,{ ColName: 'receive_phone', FormName: 'receive_phone', PositionData: 25, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*26*/,{ ColName: 'receive_note', FormName: 'receive_note', PositionData: 26, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*27*/,{ ColName: 'receive_time', FormName: 'receive_time', PositionData: 27, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*28*/,{ ColName: 'receive_user_id', FormName: 'receive_user_id', PositionData: 28, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "bill_packagedetail",
            cols: [
               /*1*/{ ColName: 'bill_id', FormName: 'bill_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'department_current_id', FormName: 'department_current_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'no', FormName: 'no', PositionData: 3, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'barcode', FormName: 'barcode', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'quantity_total', FormName: 'quantity_total', PositionData: 5, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'store_zone_id', FormName: 'store_zone_id', PositionData: 6, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'go_time', FormName: 'go_time', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'arrival_note', FormName: 'arrival_note', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'arrival_time', FormName: 'arrival_time', PositionData: 9, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'parent_id', FormName: 'parent_id', PositionData: 10, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'product_id', FormName: 'product_id', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'package_description', FormName: 'package_description', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'product_l', FormName: 'product_l', PositionData: 13, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'product_w', FormName: 'product_w', PositionData: 14, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'product_h', FormName: 'product_h', PositionData: 15, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'product_weight', FormName: 'product_weight', PositionData: 16, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'product_convert_weight', FormName: 'product_convert_weight', PositionData: 17, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'product_value', FormName: 'product_value', PositionData: 18, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'cost_main', FormName: 'cost_main', PositionData: 19, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'cost_add', FormName: 'cost_add', PositionData: 20, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'receive_fullname', FormName: 'receive_fullname', PositionData: 21, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'receive_identity', FormName: 'receive_identity', PositionData: 22, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*23*/,{ ColName: 'receive_identity_date', FormName: 'receive_identity_date', PositionData: 23, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*24*/,{ ColName: 'receive_identity_place', FormName: 'receive_identity_place', PositionData: 24, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*25*/,{ ColName: 'receive_phone', FormName: 'receive_phone', PositionData: 25, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*26*/,{ ColName: 'receive_note', FormName: 'receive_note', PositionData: 26, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*27*/,{ ColName: 'receive_time', FormName: 'receive_time', PositionData: 27, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*28*/,{ ColName: 'receive_user_id', FormName: 'receive_user_id', PositionData: 28, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bill_package', obj78);
         var obj79 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "z_test_cal_data",
            _id: "z_test_cal_data",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetz_test_cal_data", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetz_test_cal_data", _f: "id,dep_to_dep_id_in,service_type_id_in,from_dep_id,price_base_id,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetz_test_cal_data", _f: "id,dep_to_dep_id_in,service_type_id_in,from_dep_id,price_base_id,note,isprg_created_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "dep_to_dep_id_in", name: "dep_to_dep_id_in", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "service_type_id_in", name: "service_type_id_in", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "from_dep_id", name: "from_dep_id", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "price_base_id", name: "price_base_id", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*5*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*6*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }

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
            name: "z_test_cal_data",
            cols: [
               /*1*/{ ColName: 'dep_to_dep_id_in', FormName: 'dep_to_dep_id_in', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'service_type_id_in', FormName: 'service_type_id_in', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'from_dep_id', FormName: 'from_dep_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'price_base_id', FormName: 'price_base_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "z_test_cal_datadetail",
            cols: [
               /*1*/{ ColName: 'dep_to_dep_id_in', FormName: 'dep_to_dep_id_in', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'service_type_id_in', FormName: 'service_type_id_in', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'from_dep_id', FormName: 'from_dep_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'price_base_id', FormName: 'price_base_id', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'note', FormName: 'note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('z_test_cal_data', obj79);
         var obj80 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "z_test_cal_price",
            _id: "z_test_cal_price",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetz_test_cal_price", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetz_test_cal_price", _f: "id,from_dep_id_in,to_dep_id_in,dep_to_dep_id_in,service_type_id_in,weight_cal_in,price_base_detail_id_in,zone_category_id_out,customer_id_in,price_id_out,price_base_id_out,postage_out,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetz_test_cal_price", _f: "id,from_dep_id_in,to_dep_id_in,dep_to_dep_id_in,service_type_id_in,weight_cal_in,price_base_detail_id_in,zone_category_id_out,customer_id_in,price_id_out,price_base_id_out,postage_out,note,isprg_created_date", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "from_dep_id_in", name: "from_dep_id_in", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "to_dep_id_in", name: "to_dep_id_in", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "dep_to_dep_id_in", name: "dep_to_dep_id_in", create: true, edit: true, list: true , type: "money"  }
			,/*4*/{ field: "service_type_id_in", name: "service_type_id_in", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "weight_cal_in", name: "weight_cal_in", create: true, edit: true, list: true , addon: { text: '(kg)', css: 'gb-gcolor' } }
			,/*6*/{ field: "price_base_detail_id_in", name: "price_base_detail_id_in", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*7*/{ field: "zone_category_id_out", name: "zone_category_id_out", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "customer_id_in", name: "customer_id_in", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "price_id_out", name: "price_id_out", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*10*/{ field: "price_base_id_out", name: "price_base_id_out", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*11*/{ field: "postage_out", name: "postage_out", create: true, edit: true, list: true , type: "money"  }
			,/*12*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*13*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }

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
            name: "z_test_cal_price",
            cols: [
               /*1*/{ ColName: 'from_dep_id_in', FormName: 'from_dep_id_in', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'to_dep_id_in', FormName: 'to_dep_id_in', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'dep_to_dep_id_in', FormName: 'dep_to_dep_id_in', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'service_type_id_in', FormName: 'service_type_id_in', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'weight_cal_in', FormName: 'weight_cal_in', PositionData: 5, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'price_base_detail_id_in', FormName: 'price_base_detail_id_in', PositionData: 6, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'zone_category_id_out', FormName: 'zone_category_id_out', PositionData: 7, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'customer_id_in', FormName: 'customer_id_in', PositionData: 8, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'price_id_out', FormName: 'price_id_out', PositionData: 9, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'price_base_id_out', FormName: 'price_base_id_out', PositionData: 10, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'postage_out', FormName: 'postage_out', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'note', FormName: 'note', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "z_test_cal_pricedetail",
            cols: [
               /*1*/{ ColName: 'from_dep_id_in', FormName: 'from_dep_id_in', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'to_dep_id_in', FormName: 'to_dep_id_in', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'dep_to_dep_id_in', FormName: 'dep_to_dep_id_in', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'service_type_id_in', FormName: 'service_type_id_in', PositionData: 4, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'weight_cal_in', FormName: 'weight_cal_in', PositionData: 5, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'price_base_detail_id_in', FormName: 'price_base_detail_id_in', PositionData: 6, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'zone_category_id_out', FormName: 'zone_category_id_out', PositionData: 7, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'customer_id_in', FormName: 'customer_id_in', PositionData: 8, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'price_id_out', FormName: 'price_id_out', PositionData: 9, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'price_base_id_out', FormName: 'price_base_id_out', PositionData: 10, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'postage_out', FormName: 'postage_out', PositionData: 11, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'note', FormName: 'note', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('z_test_cal_price', obj80);
         var obj81 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "receipt",
            _id: "receipt",
            _listRefTables: [
                { field: "reason_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetreason", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }

            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetreceipt", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreceipt", _f: "id,bill_id,reason_id,reason_group,reason_name,reason_type,from_fullname,from_identity,from_identity_date,from_identity_place,note,responsibility_account_id,resonsibility_name,witness_name,approve_name,approve_account_id,approve_account_time,cost,original_document,original_document_file,create_department_id,resolved_account_id,resolved_note,resolved_comment,resolved_cost,resolved_compensation,resolved_account_time,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetreceipt", _f: "id,bill_id,reason_id,reason_group,reason_name,reason_type,from_fullname,from_identity,from_identity_date,from_identity_place,note,responsibility_account_id,resonsibility_name,witness_name,approve_name,approve_account_id,approve_account_time,cost,original_document,original_document_file,create_department_id,resolved_account_id,resolved_note,resolved_comment,resolved_cost,resolved_compensation,resolved_account_time,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "bill_id", name: "bill_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "reason_id", name: "reason_id", create: true, edit: true, list: true  , type: "select", option:{ field: "reason_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetreason", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*3*/{ field: "reason_group", name: "reason_group", create: true, edit: true, list: true  }
			,/*4*/{ field: "reason_name", name: "reason_name", create: true, edit: true, list: true  }
			,/*5*/{ field: "reason_type", name: "reason_type", create: true, edit: true, list: true  }
			,/*6*/{ field: "from_fullname", name: "from_fullname", create: true, edit: true, list: true  }
			,/*7*/{ field: "from_identity", name: "from_identity", create: true, edit: true, list: true  }
			,/*8*/{ field: "from_identity_date", name: "from_identity_date", create: true, edit: true, list: true , type: "datetime" }
			,/*9*/{ field: "from_identity_place", name: "from_identity_place", create: true, edit: true, list: true  }
			,/*10*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*11*/{ field: "responsibility_account_id", name: "responsibility_account_id", create: true, edit: true, list: true , type: "money"  }
			,/*12*/{ field: "resonsibility_name", name: "resonsibility_name", create: true, edit: true, list: true  }
			,/*13*/{ field: "witness_name", name: "witness_name", create: true, edit: true, list: true  }
			,/*14*/{ field: "approve_name", name: "approve_name", create: true, edit: true, list: true  }
			,/*15*/{ field: "approve_account_id", name: "approve_account_id", create: true, edit: true, list: true , type: "money"  }
			,/*16*/{ field: "approve_account_time", name: "approve_account_time", create: true, edit: true, list: true , type: "datetime" }
			,/*17*/{ field: "cost", name: "cost", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*18*/{ field: "original_document", name: "original_document", create: true, edit: true, list: true  }
			,/*19*/{ field: "original_document_file", name: "original_document_file", create: true, edit: true, list: true  }
			,/*20*/{ field: "create_department_id", name: "create_department_id", create: true, edit: true, list: true , type: "money"  }
			,/*21*/{ field: "resolved_account_id", name: "resolved_account_id", create: true, edit: true, list: true , type: "money"  }
			,/*22*/{ field: "resolved_note", name: "resolved_note", create: true, edit: true, list: true  }
			,/*23*/{ field: "resolved_comment", name: "resolved_comment", create: true, edit: true, list: true  }
			,/*24*/{ field: "resolved_cost", name: "resolved_cost", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*25*/{ field: "resolved_compensation", name: "resolved_compensation", create: true, edit: true, list: true  }
			,/*26*/{ field: "resolved_account_time", name: "resolved_account_time", create: true, edit: true, list: true , type: "datetime" }
			,/*27*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*28*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*29*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*30*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*31*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*32*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*33*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
				{ row: [26], style: [".col-md-2", ".col-md-4"] },

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
				{ row: [26], style: [".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "receipt",
            cols: [
               /*1*/{ ColName: 'bill_id', FormName: 'bill_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'reason_id', FormName: 'reason_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'reason_group', FormName: 'reason_group', PositionData: 3, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'reason_name', FormName: 'reason_name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'reason_type', FormName: 'reason_type', PositionData: 5, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'from_fullname', FormName: 'from_fullname', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'from_identity', FormName: 'from_identity', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'from_identity_date', FormName: 'from_identity_date', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'from_identity_place', FormName: 'from_identity_place', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'note', FormName: 'note', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'responsibility_account_id', FormName: 'responsibility_account_id', PositionData: 11, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'resonsibility_name', FormName: 'resonsibility_name', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'witness_name', FormName: 'witness_name', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'approve_name', FormName: 'approve_name', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'approve_account_id', FormName: 'approve_account_id', PositionData: 15, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'approve_account_time', FormName: 'approve_account_time', PositionData: 16, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'cost', FormName: 'cost', PositionData: 17, IsShow: 'isShow', ColType: 'real', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'original_document', FormName: 'original_document', PositionData: 18, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'original_document_file', FormName: 'original_document_file', PositionData: 19, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'create_department_id', FormName: 'create_department_id', PositionData: 20, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'resolved_account_id', FormName: 'resolved_account_id', PositionData: 21, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'resolved_note', FormName: 'resolved_note', PositionData: 22, IsShow: 'isShow', ColType: 'ntext', Parent: 'isParent', iNotFillData: 0 }
				/*23*/,{ ColName: 'resolved_comment', FormName: 'resolved_comment', PositionData: 23, IsShow: 'isShow', ColType: 'ntext', Parent: 'isParent', iNotFillData: 0 }
				/*24*/,{ ColName: 'resolved_cost', FormName: 'resolved_cost', PositionData: 24, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*25*/,{ ColName: 'resolved_compensation', FormName: 'resolved_compensation', PositionData: 25, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*26*/,{ ColName: 'resolved_account_time', FormName: 'resolved_account_time', PositionData: 26, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*27*/,{ ColName: 'status', FormName: 'status', PositionData: 27, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "receiptdetail",
            cols: [
               /*1*/{ ColName: 'bill_id', FormName: 'bill_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'reason_id', FormName: 'reason_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'reason_group', FormName: 'reason_group', PositionData: 3, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'reason_name', FormName: 'reason_name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'reason_type', FormName: 'reason_type', PositionData: 5, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'from_fullname', FormName: 'from_fullname', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'from_identity', FormName: 'from_identity', PositionData: 7, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'from_identity_date', FormName: 'from_identity_date', PositionData: 8, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'from_identity_place', FormName: 'from_identity_place', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'note', FormName: 'note', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'responsibility_account_id', FormName: 'responsibility_account_id', PositionData: 11, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'resonsibility_name', FormName: 'resonsibility_name', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'witness_name', FormName: 'witness_name', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'approve_name', FormName: 'approve_name', PositionData: 14, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'approve_account_id', FormName: 'approve_account_id', PositionData: 15, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'approve_account_time', FormName: 'approve_account_time', PositionData: 16, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'cost', FormName: 'cost', PositionData: 17, IsShow: 'isShow', ColType: 'real', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'original_document', FormName: 'original_document', PositionData: 18, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'original_document_file', FormName: 'original_document_file', PositionData: 19, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'create_department_id', FormName: 'create_department_id', PositionData: 20, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'resolved_account_id', FormName: 'resolved_account_id', PositionData: 21, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'resolved_note', FormName: 'resolved_note', PositionData: 22, IsShow: 'isShow', ColType: 'ntext', Parent: 'isParent', iNotFillData: 0 }
				/*23*/,{ ColName: 'resolved_comment', FormName: 'resolved_comment', PositionData: 23, IsShow: 'isShow', ColType: 'ntext', Parent: 'isParent', iNotFillData: 0 }
				/*24*/,{ ColName: 'resolved_cost', FormName: 'resolved_cost', PositionData: 24, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*25*/,{ ColName: 'resolved_compensation', FormName: 'resolved_compensation', PositionData: 25, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*26*/,{ ColName: 'resolved_account_time', FormName: 'resolved_account_time', PositionData: 26, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*27*/,{ ColName: 'status', FormName: 'status', PositionData: 27, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('receipt', obj81);
         var obj82 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "product",
            _id: "product",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetproduct", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetproduct", _f: "id,code,name,note,status,type,order_,unit,product_group_id,Record_Enable", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetproduct", _f: "id,code,name,note,status,type,order_,unit,product_group_id,Record_Enable,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*5*/{ field: "type", name: "type", create: true, edit: true, list: true  }
			,/*6*/{ field: "order_", name: "order_", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "unit", name: "unit", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "product_group_id", name: "product_group_id", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "Record_Enable", name: "Record_Enable", create: true, edit: true, list: true  }
			,/*10*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*11*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*12*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*13*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*14*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*15*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
            name: "product",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'type', FormName: 'type', PositionData: 5, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'order_', FormName: 'order_', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'unit', FormName: 'unit', PositionData: 7, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'product_group_id', FormName: 'product_group_id', PositionData: 8, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'Record_Enable', FormName: 'Record_Enable', PositionData: 9, IsShow: 'isShow', ColType: 'bit', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "productdetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'type', FormName: 'type', PositionData: 5, IsShow: 'isShow', ColType: 'tinyint', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'order_', FormName: 'order_', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'unit', FormName: 'unit', PositionData: 7, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'product_group_id', FormName: 'product_group_id', PositionData: 8, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'Record_Enable', FormName: 'Record_Enable', PositionData: 9, IsShow: 'isShow', ColType: 'bit', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('product', obj82);
         var obj83 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "product_group",
            _id: "product_group",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetproduct_group", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetproduct_group", _f: "id,code,name,note,status,order_,Record_Enable", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetproduct_group", _f: "id,code,name,note,status,order_,Record_Enable,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "code", name: "code", create: true, edit: true, list: true  }
			,/*2*/{ field: "name", name: "name", create: true, edit: true, list: true  }
			,/*3*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*4*/{ field: "status", name: "status", create: true, edit: true, list: true  }
			,/*5*/{ field: "order_", name: "order_", create: true, edit: true, list: true , type: "money"  }
			,/*6*/{ field: "Record_Enable", name: "Record_Enable", create: true, edit: true, list: true  }
			,/*7*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*9*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*11*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*12*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "product_group",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'order_', FormName: 'order_', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Record_Enable', FormName: 'Record_Enable', PositionData: 6, IsShow: 'isShow', ColType: 'bit', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "product_groupdetail",
            cols: [
               /*1*/{ ColName: 'code', FormName: 'code', PositionData: 1, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'name', FormName: 'name', PositionData: 2, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'note', FormName: 'note', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'status', FormName: 'status', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'order_', FormName: 'order_', PositionData: 5, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Record_Enable', FormName: 'Record_Enable', PositionData: 6, IsShow: 'isShow', ColType: 'bit', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('product_group', obj83);
         var obj84 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "Area",
            _id: "Area",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetArea", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetArea", _f: "ID,ParentID,Type,Code,Name,Note,status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetArea", _f: "ID,ParentID,Type,Code,Name,Note,status,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "ID", name: "ID", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "ParentID", name: "ParentID", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "Type", name: "Type", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "Code", name: "Code", create: true, edit: true, list: true  }
			,/*4*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*5*/{ field: "Note", name: "Note", create: true, edit: true, list: true  }
			,/*6*/{ field: "status", name: "status", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*9*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*10*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*11*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*12*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [4,5], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "Area",
            cols: [
               /*1*/{ ColName: 'ParentID', FormName: 'ParentID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Type', FormName: 'Type', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Code', FormName: 'Code', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Name', FormName: 'Name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Note', FormName: 'Note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "Areadetail",
            cols: [
               /*1*/{ ColName: 'ParentID', FormName: 'ParentID', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Type', FormName: 'Type', PositionData: 2, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Code', FormName: 'Code', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Name', FormName: 'Name', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'Note', FormName: 'Note', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'status', FormName: 'status', PositionData: 6, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('Area', obj84);
         var obj85 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "bill",
            _id: "bill",
            _listRefTables: [
                { field: "from_department_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetdepartment", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }
				,{ field: "to_department_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetdepartment", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }
				,{ field: "service_type_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetservice_type", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } }

            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetbill", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill", _f: "id,dept_to_dept_id,customer_id,from_department_id,from_address,from_ward,from_district_id,from_province_id,from_fullname,from_phone,from_identity,to_department_id,to_address,to_ward,to_district_id,to_province_id,to_fullname,to_phone,to_identity,to_postal_code_id,to_security_code,time_totransferfix,weight,totalcost,addcost,package_total,package_total_arrival,weight_c,realkm,service_type_id,vat,pay_type,barcode_prefix,barcode,qr_Code,unique_code,imageurl,rfid_info_descript,movinginfo_descript,parent_id,note", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetbill", _f: "id,dept_to_dept_id,customer_id,from_department_id,from_address,from_ward,from_district_id,from_province_id,from_fullname,from_phone,from_identity,to_department_id,to_address,to_ward,to_district_id,to_province_id,to_fullname,to_phone,to_identity,to_postal_code_id,to_security_code,time_totransferfix,weight,totalcost,addcost,package_total,package_total_arrival,weight_c,realkm,service_type_id,vat,pay_type,barcode_prefix,barcode,qr_Code,unique_code,imageurl,rfid_info_descript,movinginfo_descript,parent_id,note,isprg_status,isprg_userinfo_descript,isprg_created_date,isprg_updated_date,isprg_created_userid,isprg_updated_userid", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "id", name: "id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "dept_to_dept_id", name: "dept_to_dept_id", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "customer_id", name: "customer_id", create: true, edit: true, list: true , type: "money"  }
			,/*3*/{ field: "from_department_id", name: "from_department_id", create: true, edit: true, list: true  , type: "select", option:{ field: "from_department_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetdepartment", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*4*/{ field: "from_address", name: "from_address", create: true, edit: true, list: true  }
			,/*5*/{ field: "from_ward", name: "from_ward", create: true, edit: true, list: true  }
			,/*6*/{ field: "from_district_id", name: "from_district_id", create: true, edit: true, list: true , type: "money"  }
			,/*7*/{ field: "from_province_id", name: "from_province_id", create: true, edit: true, list: true , type: "money"  }
			,/*8*/{ field: "from_fullname", name: "from_fullname", create: true, edit: true, list: true  }
			,/*9*/{ field: "from_phone", name: "from_phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*10*/{ field: "from_identity", name: "from_identity", create: true, edit: true, list: true  }
			,/*11*/{ field: "to_department_id", name: "to_department_id", create: true, edit: true, list: true  , type: "select", option:{ field: "to_department_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetdepartment", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*12*/{ field: "to_address", name: "to_address", create: true, edit: true, list: true  }
			,/*13*/{ field: "to_ward", name: "to_ward", create: true, edit: true, list: true  }
			,/*14*/{ field: "to_district_id", name: "to_district_id", create: true, edit: true, list: true , type: "money"  }
			,/*15*/{ field: "to_province_id", name: "to_province_id", create: true, edit: true, list: true , type: "money"  }
			,/*16*/{ field: "to_fullname", name: "to_fullname", create: true, edit: true, list: true  }
			,/*17*/{ field: "to_phone", name: "to_phone", create: true, edit: true, list: true , color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' } }
			,/*18*/{ field: "to_identity", name: "to_identity", create: true, edit: true, list: true  }
			,/*19*/{ field: "to_postal_code_id", name: "to_postal_code_id", create: true, edit: true, list: true , type: "money"  }
			,/*20*/{ field: "to_security_code", name: "to_security_code", create: true, edit: true, list: true  }
			,/*21*/{ field: "time_totransferfix", name: "time_totransferfix", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*22*/{ field: "weight", name: "weight", create: true, edit: true, list: true , addon: { text: '(kg)', css: 'gb-gcolor' } }
			,/*23*/{ field: "totalcost", name: "totalcost", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*24*/{ field: "addcost", name: "addcost", create: true, edit: true, list: true ,color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' } }
			,/*25*/{ field: "package_total", name: "package_total", create: true, edit: true, list: true , type: "money"  }
			,/*26*/{ field: "package_total_arrival", name: "package_total_arrival", create: true, edit: true, list: true , type: "money"  }
			,/*27*/{ field: "weight_c", name: "weight_c", create: true, edit: true, list: true , addon: { text: '(kg)', css: 'gb-gcolor' } }
			,/*28*/{ field: "realkm", name: "realkm", create: true, edit: true, list: true , type: "money" , precition: 2 }
			,/*29*/{ field: "service_type_id", name: "service_type_id", create: true, edit: true, list: true  , type: "select", option:{ field: "service_type_id", mergename: [1], objAjax: { AjaxObj: { a: "fGetservice_type", c: {}, _f: "id,name,code", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" } } }
			,/*30*/{ field: "vat", name: "vat", create: true, edit: true, list: true , type: "money"  }
			,/*31*/{ field: "pay_type", name: "pay_type", create: true, edit: true, list: true , type: "money"  }
			,/*32*/{ field: "barcode_prefix", name: "barcode_prefix", create: true, edit: true, list: true ,color: 'orange', addon:  { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-barcode' } }
			,/*33*/{ field: "barcode", name: "barcode", create: true, edit: true, list: true ,color: 'orange', addon:  { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-barcode' } }
			,/*34*/{ field: "qr_Code", name: "qr_Code", create: true, edit: true, list: true  }
			,/*35*/{ field: "unique_code", name: "unique_code", create: true, edit: true, list: true  }
			,/*36*/{ field: "imageurl", name: "imageurl", create: true, edit: true, list: true  }
			,/*37*/{ field: "rfid_info_descript", name: "rfid_info_descript", create: true, edit: true, list: true  }
			,/*38*/{ field: "movinginfo_descript", name: "movinginfo_descript", create: true, edit: true, list: true  }
			,/*39*/{ field: "parent_id", name: "parent_id", create: true, edit: true, list: true , type: "money"  }
			,/*40*/{ field: "note", name: "note", create: true, edit: true, list: true  }
			,/*41*/{ field: "isprg_status", name: "isprg_status", create: false, edit: false, list: false , type: "money"  }
			,/*42*/{ field: "isprg_userinfo_descript", name: "isprg_userinfo_descript", create: false, edit: false, list: false  }
			,/*43*/{ field: "isprg_created_date", name: "isprg_created_date", create: false, edit: false, list: false , type: "datetime" }
			,/*44*/{ field: "isprg_updated_date", name: "isprg_updated_date", create: false, edit: false, list: false , type: "datetime" }
			,/*45*/{ field: "isprg_created_userid", name: "isprg_created_userid", create: false, edit: false, list: false , type: "money"  }
			,/*46*/{ field: "isprg_updated_userid", name: "isprg_updated_userid", create: false, edit: false, list: false , type: "money"  }

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
				{ row: [28,29], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [30,31], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [32,33], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [34,35], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [36,37], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [38,39], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

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
				{ row: [28,29], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [30,31], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [32,33], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [34,35], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [36,37], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [38,39], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "bill",
            cols: [
               /*1*/{ ColName: 'dept_to_dept_id', FormName: 'dept_to_dept_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'from_department_id', FormName: 'from_department_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'from_address', FormName: 'from_address', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'from_ward', FormName: 'from_ward', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'from_district_id', FormName: 'from_district_id', PositionData: 6, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'from_province_id', FormName: 'from_province_id', PositionData: 7, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'from_fullname', FormName: 'from_fullname', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'from_phone', FormName: 'from_phone', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'from_identity', FormName: 'from_identity', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'to_department_id', FormName: 'to_department_id', PositionData: 11, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'to_address', FormName: 'to_address', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'to_ward', FormName: 'to_ward', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'to_district_id', FormName: 'to_district_id', PositionData: 14, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'to_province_id', FormName: 'to_province_id', PositionData: 15, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'to_fullname', FormName: 'to_fullname', PositionData: 16, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'to_phone', FormName: 'to_phone', PositionData: 17, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'to_identity', FormName: 'to_identity', PositionData: 18, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'to_postal_code_id', FormName: 'to_postal_code_id', PositionData: 19, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'to_security_code', FormName: 'to_security_code', PositionData: 20, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'time_totransferfix', FormName: 'time_totransferfix', PositionData: 21, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'weight', FormName: 'weight', PositionData: 22, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*23*/,{ ColName: 'totalcost', FormName: 'totalcost', PositionData: 23, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*24*/,{ ColName: 'addcost', FormName: 'addcost', PositionData: 24, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*25*/,{ ColName: 'package_total', FormName: 'package_total', PositionData: 25, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*26*/,{ ColName: 'package_total_arrival', FormName: 'package_total_arrival', PositionData: 26, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*27*/,{ ColName: 'weight_c', FormName: 'weight_c', PositionData: 27, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*28*/,{ ColName: 'realkm', FormName: 'realkm', PositionData: 28, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*29*/,{ ColName: 'service_type_id', FormName: 'service_type_id', PositionData: 29, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*30*/,{ ColName: 'vat', FormName: 'vat', PositionData: 30, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*31*/,{ ColName: 'pay_type', FormName: 'pay_type', PositionData: 31, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*32*/,{ ColName: 'barcode_prefix', FormName: 'barcode_prefix', PositionData: 32, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*33*/,{ ColName: 'barcode', FormName: 'barcode', PositionData: 33, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*34*/,{ ColName: 'qr_Code', FormName: 'qr_Code', PositionData: 34, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*35*/,{ ColName: 'unique_code', FormName: 'unique_code', PositionData: 35, IsShow: 'isShow', ColType: 'uniqueidentifier', Parent: 'isParent', iNotFillData: 0 }
				/*36*/,{ ColName: 'imageurl', FormName: 'imageurl', PositionData: 36, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*37*/,{ ColName: 'rfid_info_descript', FormName: 'rfid_info_descript', PositionData: 37, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*38*/,{ ColName: 'movinginfo_descript', FormName: 'movinginfo_descript', PositionData: 38, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*39*/,{ ColName: 'parent_id', FormName: 'parent_id', PositionData: 39, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*40*/,{ ColName: 'note', FormName: 'note', PositionData: 40, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "billdetail",
            cols: [
               /*1*/{ ColName: 'dept_to_dept_id', FormName: 'dept_to_dept_id', PositionData: 1, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'customer_id', FormName: 'customer_id', PositionData: 2, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'from_department_id', FormName: 'from_department_id', PositionData: 3, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'from_address', FormName: 'from_address', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'from_ward', FormName: 'from_ward', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'from_district_id', FormName: 'from_district_id', PositionData: 6, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'from_province_id', FormName: 'from_province_id', PositionData: 7, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'from_fullname', FormName: 'from_fullname', PositionData: 8, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'from_phone', FormName: 'from_phone', PositionData: 9, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'from_identity', FormName: 'from_identity', PositionData: 10, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'to_department_id', FormName: 'to_department_id', PositionData: 11, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'to_address', FormName: 'to_address', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'to_ward', FormName: 'to_ward', PositionData: 13, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'to_district_id', FormName: 'to_district_id', PositionData: 14, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'to_province_id', FormName: 'to_province_id', PositionData: 15, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*16*/,{ ColName: 'to_fullname', FormName: 'to_fullname', PositionData: 16, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*17*/,{ ColName: 'to_phone', FormName: 'to_phone', PositionData: 17, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*18*/,{ ColName: 'to_identity', FormName: 'to_identity', PositionData: 18, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*19*/,{ ColName: 'to_postal_code_id', FormName: 'to_postal_code_id', PositionData: 19, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*20*/,{ ColName: 'to_security_code', FormName: 'to_security_code', PositionData: 20, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*21*/,{ ColName: 'time_totransferfix', FormName: 'time_totransferfix', PositionData: 21, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*22*/,{ ColName: 'weight', FormName: 'weight', PositionData: 22, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*23*/,{ ColName: 'totalcost', FormName: 'totalcost', PositionData: 23, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*24*/,{ ColName: 'addcost', FormName: 'addcost', PositionData: 24, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*25*/,{ ColName: 'package_total', FormName: 'package_total', PositionData: 25, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*26*/,{ ColName: 'package_total_arrival', FormName: 'package_total_arrival', PositionData: 26, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*27*/,{ ColName: 'weight_c', FormName: 'weight_c', PositionData: 27, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*28*/,{ ColName: 'realkm', FormName: 'realkm', PositionData: 28, IsShow: 'isShow', ColType: 'float', Parent: 'isParent', iNotFillData: 0 }
				/*29*/,{ ColName: 'service_type_id', FormName: 'service_type_id', PositionData: 29, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*30*/,{ ColName: 'vat', FormName: 'vat', PositionData: 30, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*31*/,{ ColName: 'pay_type', FormName: 'pay_type', PositionData: 31, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*32*/,{ ColName: 'barcode_prefix', FormName: 'barcode_prefix', PositionData: 32, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*33*/,{ ColName: 'barcode', FormName: 'barcode', PositionData: 33, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*34*/,{ ColName: 'qr_Code', FormName: 'qr_Code', PositionData: 34, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*35*/,{ ColName: 'unique_code', FormName: 'unique_code', PositionData: 35, IsShow: 'isShow', ColType: 'uniqueidentifier', Parent: 'isParent', iNotFillData: 0 }
				/*36*/,{ ColName: 'imageurl', FormName: 'imageurl', PositionData: 36, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*37*/,{ ColName: 'rfid_info_descript', FormName: 'rfid_info_descript', PositionData: 37, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*38*/,{ ColName: 'movinginfo_descript', FormName: 'movinginfo_descript', PositionData: 38, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*39*/,{ ColName: 'parent_id', FormName: 'parent_id', PositionData: 39, IsShow: 'isShow', ColType: 'bigint', Parent: 'isParent', iNotFillData: 0 }
				/*40*/,{ ColName: 'note', FormName: 'note', PositionData: 40, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('bill', obj85);
         var obj86 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "PT_KhieuNai",
            _id: "PT_KhieuNai",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetPT_KhieuNai", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetPT_KhieuNai", _f: "Id,Type,Code,Name,TenKhachHang,SoDienThoai,Email,NgayTiepNhan,NhanVienTiepNhan,BoPhanGiaiQuyet,TrangThaiGiaiQuyet,NoiDungKhieuNai,NoiDungGiaiQuyet,NgayTraLoi,NhanVienTraLoi,Status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetPT_KhieuNai", _f: "Id,Type,Code,Name,TenKhachHang,SoDienThoai,Email,NgayTiepNhan,NhanVienTiepNhan,BoPhanGiaiQuyet,TrangThaiGiaiQuyet,NoiDungKhieuNai,NoiDungGiaiQuyet,NgayTraLoi,NhanVienTraLoi,Status,IsPrgCreatedDate,IsPrgUpdatedDate,IsPrgCreatedUserId,IsPrgUpdatedUserId", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Type", name: "Type", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "Code", name: "Code", create: true, edit: true, list: true  }
			,/*3*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*4*/{ field: "TenKhachHang", name: "TenKhachHang", create: true, edit: true, list: true  }
			,/*5*/{ field: "SoDienThoai", name: "SoDienThoai", create: true, edit: true, list: true  }
			,/*6*/{ field: "Email", name: "Email", create: true, edit: true, list: true  }
			,/*7*/{ field: "NgayTiepNhan", name: "NgayTiepNhan", create: true, edit: true, list: true , type: "datetime" }
			,/*8*/{ field: "NhanVienTiepNhan", name: "NhanVienTiepNhan", create: true, edit: true, list: true , type: "money"  }
			,/*9*/{ field: "BoPhanGiaiQuyet", name: "BoPhanGiaiQuyet", create: true, edit: true, list: true , type: "money"  }
			,/*10*/{ field: "TrangThaiGiaiQuyet", name: "TrangThaiGiaiQuyet", create: true, edit: true, list: true , type: "money"  }
			,/*11*/{ field: "NoiDungKhieuNai", name: "NoiDungKhieuNai", create: true, edit: true, list: true  }
			,/*12*/{ field: "NoiDungGiaiQuyet", name: "NoiDungGiaiQuyet", create: true, edit: true, list: true  }
			,/*13*/{ field: "NgayTraLoi", name: "NgayTraLoi", create: true, edit: true, list: true , type: "datetime" }
			,/*14*/{ field: "NhanVienTraLoi", name: "NhanVienTraLoi", create: true, edit: true, list: true , type: "money"  }
			,/*15*/{ field: "Status", name: "Status", create: true, edit: true, list: true , type: "money"  }
			,/*16*/{ field: "IsPrgCreatedDate", name: "IsPrgCreatedDate", create: false, edit: false, list: false , type: "datetime" }
			,/*17*/{ field: "IsPrgUpdatedDate", name: "IsPrgUpdatedDate", create: false, edit: false, list: false , type: "datetime" }
			,/*18*/{ field: "IsPrgCreatedUserId", name: "IsPrgCreatedUserId", create: false, edit: false, list: false , type: "money"  }
			,/*19*/{ field: "IsPrgUpdatedUserId", name: "IsPrgUpdatedUserId", create: false, edit: false, list: false , type: "money"  }

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
            name: "PT_KhieuNai",
            cols: [
               /*1*/{ ColName: 'Type', FormName: 'Type', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Code', FormName: 'Code', PositionData: 2, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Name', FormName: 'Name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'TenKhachHang', FormName: 'TenKhachHang', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'SoDienThoai', FormName: 'SoDienThoai', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Email', FormName: 'Email', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'NgayTiepNhan', FormName: 'NgayTiepNhan', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'NhanVienTiepNhan', FormName: 'NhanVienTiepNhan', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'BoPhanGiaiQuyet', FormName: 'BoPhanGiaiQuyet', PositionData: 9, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'TrangThaiGiaiQuyet', FormName: 'TrangThaiGiaiQuyet', PositionData: 10, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'NoiDungKhieuNai', FormName: 'NoiDungKhieuNai', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'NoiDungGiaiQuyet', FormName: 'NoiDungGiaiQuyet', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'NgayTraLoi', FormName: 'NgayTraLoi', PositionData: 13, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'NhanVienTraLoi', FormName: 'NhanVienTraLoi', PositionData: 14, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'Status', FormName: 'Status', PositionData: 15, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "PT_KhieuNaidetail",
            cols: [
               /*1*/{ ColName: 'Type', FormName: 'Type', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Code', FormName: 'Code', PositionData: 2, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Name', FormName: 'Name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'TenKhachHang', FormName: 'TenKhachHang', PositionData: 4, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*5*/,{ ColName: 'SoDienThoai', FormName: 'SoDienThoai', PositionData: 5, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*6*/,{ ColName: 'Email', FormName: 'Email', PositionData: 6, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*7*/,{ ColName: 'NgayTiepNhan', FormName: 'NgayTiepNhan', PositionData: 7, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*8*/,{ ColName: 'NhanVienTiepNhan', FormName: 'NhanVienTiepNhan', PositionData: 8, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*9*/,{ ColName: 'BoPhanGiaiQuyet', FormName: 'BoPhanGiaiQuyet', PositionData: 9, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*10*/,{ ColName: 'TrangThaiGiaiQuyet', FormName: 'TrangThaiGiaiQuyet', PositionData: 10, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*11*/,{ ColName: 'NoiDungKhieuNai', FormName: 'NoiDungKhieuNai', PositionData: 11, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*12*/,{ ColName: 'NoiDungGiaiQuyet', FormName: 'NoiDungGiaiQuyet', PositionData: 12, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*13*/,{ ColName: 'NgayTraLoi', FormName: 'NgayTraLoi', PositionData: 13, IsShow: 'isShow', ColType: 'datetime', Parent: 'isParent', iNotFillData: 0 }
				/*14*/,{ ColName: 'NhanVienTraLoi', FormName: 'NhanVienTraLoi', PositionData: 14, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*15*/,{ ColName: 'Status', FormName: 'Status', PositionData: 15, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('PT_KhieuNai', obj86);
         var obj87 = {
            _rightOnTable: {},
            
            /*------------------------------------------------*/
            _titleName: "PT_BoPhanGiaiQuyet",
            _id: "PT_BoPhanGiaiQuyet",
            _listRefTables: [
                
            ],
            className: 'display',
            //print danh sach fields ra day [Id,Code,Name,....]
            _listSelfTables: [
                { AjaxObj: { a: "fGetPT_BoPhanGiaiQuyet", _f: "*", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetPT_BoPhanGiaiQuyet", _f: "Id,Type,Code,Name,Status", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }
				,{ AjaxObj: { a: "fGetPT_BoPhanGiaiQuyet", _f: "Id,Type,Code,Name,Status,IsPrgCreatedDate,IsPrgUpdatedDate,IsPrgCreatedUserId,IsPrgUpdatedUserId", _gb: "", ModelDb: "ExpressMainDb" }, APIkey: "DcEVmCt0A5INV5iPX20kjdGC" }

            ],
            //table
            _fieldsList: [
			/*0*/{ field: "Id", name: "Id", create: true, edit: true, list: true , type: "hidden" }
			,/*1*/{ field: "Type", name: "Type", create: true, edit: true, list: true , type: "money"  }
			,/*2*/{ field: "Code", name: "Code", create: true, edit: true, list: true  }
			,/*3*/{ field: "Name", name: "Name", create: true, edit: true, list: true  }
			,/*4*/{ field: "Status", name: "Status", create: true, edit: true, list: true , type: "money"  }
			,/*5*/{ field: "IsPrgCreatedDate", name: "IsPrgCreatedDate", create: false, edit: false, list: false , type: "datetime" }
			,/*6*/{ field: "IsPrgUpdatedDate", name: "IsPrgUpdatedDate", create: false, edit: false, list: false , type: "datetime" }
			,/*7*/{ field: "IsPrgCreatedUserId", name: "IsPrgCreatedUserId", create: false, edit: false, list: false , type: "money"  }
			,/*8*/{ field: "IsPrgUpdatedUserId", name: "IsPrgUpdatedUserId", create: false, edit: false, list: false , type: "money"  }

            ],
            //define form
            _editform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            _updateform: [
                { row: [0,1], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },
				{ row: [2,3], style: [".col-md-2", ".col-md-4", ".col-md-2", ".col-md-4"] },

            ],
            //-----------------------------------------------------
            _listReports: [
            {
            name: "PT_BoPhanGiaiQuyet",
            cols: [
               /*1*/{ ColName: 'Type', FormName: 'Type', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Code', FormName: 'Code', PositionData: 2, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Name', FormName: 'Name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Status', FormName: 'Status', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
				,{
            name: "PT_BoPhanGiaiQuyetdetail",
            cols: [
               /*1*/{ ColName: 'Type', FormName: 'Type', PositionData: 1, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }
				/*2*/,{ ColName: 'Code', FormName: 'Code', PositionData: 2, IsShow: 'isShow', ColType: 'varchar', Parent: 'isParent', iNotFillData: 0 }
				/*3*/,{ ColName: 'Name', FormName: 'Name', PositionData: 3, IsShow: 'isShow', ColType: 'nvarchar', Parent: 'isParent', iNotFillData: 0 }
				/*4*/,{ ColName: 'Status', FormName: 'Status', PositionData: 4, IsShow: 'isShow', ColType: 'int', Parent: 'isParent', iNotFillData: 0 }

                ],
                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,
                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false
            }
            ],
        };
         this._Self.set('PT_BoPhanGiaiQuyet', obj87);

        }
};
