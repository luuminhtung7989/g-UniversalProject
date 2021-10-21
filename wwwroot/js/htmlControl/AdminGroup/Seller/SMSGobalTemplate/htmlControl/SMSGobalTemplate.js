var _gbSubDictionary = {
	SMSGobalTemplate : {
		_rightOnTable: { },
		_titleName: "SMSGobalTemplate",
		_id: "SMSGobalTemplate",
		_className: "display",
		_listReports: [{}],
		_listSelfTables: [
			{ AjaxObj: { a: "fGetSMSGobalTemplate", _f: "*", _gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetSMSGobalTemplate", _f: "Id,Name,FormName,NameTemplate,Description,isActive,isUserID,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetSMSGobalTemplate", _f: "Id,Name,FormName,NameTemplate,Description,isActive,isUserID,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
		],
		_listRefTables: [
			{ field: "UserID", mergename: [1], objAjax: { AjaxObj: { a: "fGetUsers", c: { }, _f: "Id,UseName",_gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }
		],
		_fieldsList: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" , allownull:false},
			/*1*/{ field: "Name", name: "Name", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false},
			/*2*/{ field: "FormName", name: "FormName", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false},
			/*3*/{ field: "NameTemplate", name: "NameTemplate", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false},
			/*4*/{ field: "Description", name: "Description", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false},
			/*5*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" , allownull:false},
			/*6*/{ field: "isUserID", name: "isUser", create: true, edit: true, list: true, type: "bigint",  expandtype:"" , allownull:false},
			/*7*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" , allownull:false},
			/*8*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" , allownull:false},
			/*9*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" , allownull:false},
			/*10*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" , allownull:false}
		],
		_fieldsReport: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" , allownull:false},
			/*1*/{ field: "Name", name: "Name", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false},
			/*2*/{ field: "FormName", name: "FormName", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false},
			/*3*/{ field: "NameTemplate", name: "NameTemplate", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false},
			/*4*/{ field: "Description", name: "Description", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false},
			/*5*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" , allownull:false},
			/*6*/{ field: "isUserID", name: "isUser", create: true, edit: true, list: true, type: "bigint",  expandtype:"" , allownull:false},
			/*7*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" , allownull:false},
			/*8*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" , allownull:false},
			/*9*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" , allownull:false},
			/*10*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" , allownull:false}
		],
		_fieldsSearch: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" , allownull:false,search:""},
			/*1*/{ field: "Name", name: "Name", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false,search:""},
			/*2*/{ field: "FormName", name: "FormName", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false,search:""},
			/*3*/{ field: "NameTemplate", name: "NameTemplate", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false,search:""},
			/*4*/{ field: "Description", name: "Description", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false,search:""},
			/*5*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" , allownull:false,search:""},
			/*6*/{ field: "isUserID", name: "isUser", create: true, edit: true, list: true, type: "bigint",  expandtype:"" , allownull:false,search:"group"},
			/*7*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" , allownull:false,search:""},
			/*8*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" , allownull:false,search:""},
			/*9*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" , allownull:false,search:""},
			/*10*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" , allownull:false,search:""}
		],
		_editform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },
			{ row: [10], style: [".col-md-2"] }
		],
		_searchform: [
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
			{ AjaxObj: { a: "fGetUsers", _f: "*", _gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetUsers", _f: "Id,UserName,Password,Email,PassCode,Phone,Domain,BusinessID,StaffID,isActive,isUserID,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetUsers", _f: "Id,UserName,Password,Email,PassCode,Phone,Domain,BusinessID,StaffID,isActive,isUserID,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
		],
		_listRefTables: [
			{ field: "BusinessID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetBusiness", c: { }, _f: "Id,Name,Phone",_gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } },
			{ field: "UserID", mergename: [1], objAjax: { AjaxObj: { a: "fGetUsers", c: { }, _f: "Id,UseName",_gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } },
			{ field: "StaffID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetStaff", c: { }, _f: "Id,Name,Phone",_gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }
		],
		_fieldsList: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" , allownull:false},
			/*1*/{ field: "UserName", name: "UserName", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false},
			/*2*/{ field: "Password", name: "Password", create: true, edit: true, list: true, type: "string",  expandtype:"password" , allownull:false},
			/*3*/{ field: "Email", name: "Email", create: true, edit: true, list: true, type: "string",  expandtype:"email" , allownull:false},
			/*4*/{ field: "PassCode", name: "PassCode", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false},
			/*5*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true, type: "string",  expandtype:"phone" , allownull:false},
			/*6*/{ field: "Domain", name: "Domain", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false},
			/*7*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:true , option:{ field: "BusinessID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetBusiness", c: { }, _f: "Id,Name,Phone",_gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }, allownull:true},
			/*8*/{ field: "StaffID", name: "StaffID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:true , option:{ field: "StaffID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetStaff", c: { }, _f: "Id,Name,Phone",_gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }, allownull:true},
			/*9*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" , allownull:false},
			/*10*/{ field: "isUserID", name: "isUser", create: true, edit: true, list: true, type: "bigint",  expandtype:"" , allownull:false},
			/*11*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" , allownull:false},
			/*12*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" , allownull:false},
			/*13*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" , allownull:false},
			/*14*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" , allownull:false}
		],
		_fieldsReport: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" , allownull:false},
			/*1*/{ field: "UserName", name: "UserName", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false},
			/*2*/{ field: "Password", name: "Password", create: true, edit: true, list: true, type: "string",  expandtype:"password" , allownull:false},
			/*3*/{ field: "Email", name: "Email", create: true, edit: true, list: true, type: "string",  expandtype:"email" , allownull:false},
			/*4*/{ field: "PassCode", name: "PassCode", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false},
			/*5*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true, type: "string",  expandtype:"phone" , allownull:false},
			/*6*/{ field: "Domain", name: "Domain", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false},
			/*7*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:true , option:{ field: "BusinessID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetBusiness", c: { }, _f: "Id,Name,Phone",_gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }, allownull:true},
			/*8*/{ field: "StaffID", name: "StaffID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:true , option:{ field: "StaffID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetStaff", c: { }, _f: "Id,Name,Phone",_gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }, allownull:true},
			/*9*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" , allownull:false},
			/*10*/{ field: "isUserID", name: "isUser", create: true, edit: true, list: true, type: "bigint",  expandtype:"" , allownull:false},
			/*11*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" , allownull:false},
			/*12*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" , allownull:false},
			/*13*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" , allownull:false},
			/*14*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" , allownull:false}
		],
		_fieldsSearch: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" , allownull:false,search:""},
			/*1*/{ field: "UserName", name: "UserName", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false,search:""},
			/*2*/{ field: "Password", name: "Password", create: true, edit: true, list: true, type: "string",  expandtype:"password" , allownull:false,search:""},
			/*3*/{ field: "Email", name: "Email", create: true, edit: true, list: true, type: "string",  expandtype:"email" , allownull:false,search:""},
			/*4*/{ field: "PassCode", name: "PassCode", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false,search:""},
			/*5*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true, type: "string",  expandtype:"phone" , allownull:false,search:""},
			/*6*/{ field: "Domain", name: "Domain", create: true, edit: true, list: true, type: "string",  expandtype:"" , allownull:false,search:""},
			/*7*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:true , option:{ field: "BusinessID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetBusiness", c: { }, _f: "Id,Name,Phone",_gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }, allownull:true,search:""},
			/*8*/{ field: "StaffID", name: "StaffID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:true , option:{ field: "StaffID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetStaff", c: { }, _f: "Id,Name,Phone",_gb: " ORDER BY Id Desc", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }, allownull:true,search:""},
			/*9*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" , allownull:false,search:""},
			/*10*/{ field: "isUserID", name: "isUser", create: true, edit: true, list: true, type: "bigint",  expandtype:"" , allownull:false,search:"group"},
			/*11*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" , allownull:false,search:""},
			/*12*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" , allownull:false,search:""},
			/*13*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" , allownull:false,search:""},
			/*14*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" , allownull:false,search:""}
		],
		_editform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },
			{ row: [10, 11], style: [".col-md-2", ".col-md-4"] },
			{ row: [12, 13], style: [".col-md-2", ".col-md-4"] },
			{ row: [14], style: [".col-md-2"] }
		],
		_searchform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },
			{ row: [10, 11], style: [".col-md-2", ".col-md-4"] },
			{ row: [12, 13], style: [".col-md-2", ".col-md-4"] },
			{ row: [14], style: [".col-md-2"] }
		],
		_updateform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },
			{ row: [10, 11], style: [".col-md-2", ".col-md-4"] },
			{ row: [12, 13], style: [".col-md-2", ".col-md-4"] },
			{ row: [14], style: [".col-md-2"] }
		],
	},

};
