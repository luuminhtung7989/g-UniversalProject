var _gbSubDictionary = {
	Logins : {
		_rightOnTable: { },
		_titleName: "Logins",
		_id: "Logins",
		_className: "display",
		_listReports: [{}],
		_listSelfTables: [
			{ AjaxObj: { a: "fGetLogins", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetLogins", _f: "Id,TimeLogin,TimeLogout,UpdatedTime,TotalTimes,UserID,Online,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetLogins", _f: "Id,TimeLogin,TimeLogout,UpdatedTime,TotalTimes,UserID,Online,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
		],
		_listRefTables: [
			{ field: "UserID", mergename: [1], objAjax: { AjaxObj: { a: "fGetUsers", c: { }, _f: "Id,Name", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }
		],
		_fieldsList: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" },
			/*1*/{ field: "TimeLogin", name: "TimeLogin", create: true, edit: true, list: true, type: "datetime",  expandtype:"" },
			/*2*/{ field: "TimeLogout", name: "TimeLogout", create: true, edit: true, list: true, type: "datetime",  expandtype:"" },
			/*3*/{ field: "UpdatedTime", name: "UpdatedTime", create: true, edit: true, list: true, type: "datetime",  expandtype:"" },
			/*4*/{ field: "TotalTimes", name: "TotalTimes", create: true, edit: true, list: true, type: "double",  expandtype:"" },
			/*5*/{ field: "UserID", name: "UserID", create: true, edit: true, list: true, type: "bigint",  expandtype:"" , option:{ field: "UserID", mergename: [1], objAjax: { AjaxObj: { a: "fGetUsers", c: { }, _f: "Id,Name", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*6*/{ field: "Online", name: "Online", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*7*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" },
			/*8*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*9*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*10*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" }
		],
		_editform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },
			{ row: [10], style: [".col-md-2"] }
		],
		_updateform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },
			{ row: [10], style: [".col-md-2"] }
		],
	},
	Users : {
		_rightOnTable: { },
		_titleName: "Users",
		_id: "Users",
		_className: "display",
		_listReports: [{}],
		_listSelfTables: [
			{ AjaxObj: { a: "fGetUsers", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetUsers", _f: "Id,UserName,Password,Email,PassCode,Phone,Domain,BusinessID,StaffID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetUsers", _f: "Id,UserName,Password,Email,PassCode,Phone,Domain,BusinessID,StaffID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
		],
		_listRefTables: [
			{ field: "BusinessID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetBusiness", c: { }, _f: "Id,Name,Phone", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } },
			{ field: "StaffID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetStaff", c: { }, _f: "Id,Name,Phone", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }
		],
		_fieldsList: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" },
			/*1*/{ field: "UserName", name: "UserName", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*2*/{ field: "Password", name: "Password", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*3*/{ field: "Email", name: "Email", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*4*/{ field: "PassCode", name: "PassCode", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*5*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*6*/{ field: "Domain", name: "Domain", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*7*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true, type: "bigint",  expandtype:"" , option:{ field: "BusinessID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetBusiness", c: { }, _f: "Id,Name,Phone", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*8*/{ field: "StaffID", name: "StaffID", create: true, edit: true, list: true, type: "bigint",  expandtype:"" , option:{ field: "StaffID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetStaff", c: { }, _f: "Id,Name,Phone", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*9*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*10*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" },
			/*11*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*12*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*13*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" }
		],
		_editform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },
			{ row: [10, 11], style: [".col-md-2", ".col-md-4"] },
			{ row: [12, 13], style: [".col-md-2", ".col-md-4"] },

		],
		_updateform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },
			{ row: [10, 11], style: [".col-md-2", ".col-md-4"] },
			{ row: [12, 13], style: [".col-md-2", ".col-md-4"] },

		],
	},

};
