var _gbSubDictionary = {
	Roles : {
		_rightOnTable: { },
		_titleName: "Roles",
		_id: "Roles",
		_className: "display",
		_listReports: [{}],
		_listSelfTables: [
			{ AjaxObj: { a: "fGetRoles", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetRoles", _f: "Id,UserID,GroupRightID,Permission,SubPermission,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetRoles", _f: "Id,UserID,GroupRightID,Permission,SubPermission,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
		],
		_listRefTables: [
			{ field: "UserID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetUsers", c: { }, _f: "Id,Email,Phone", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } },
			{ field: "GroupRightID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetGroupRights", c: { }, _f: "Id,Name,Code", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }
		],
		_fieldsList: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" },
			/*1*/{ field: "UserID", name: "UserID", create: true, edit: true, list: true, type: "bigint",  expandtype:"" , option:{ field: "UserID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetUsers", c: { }, _f: "Id,Email,Phone", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*2*/{ field: "GroupRightID", name: "GroupRightID", create: true, edit: true, list: true, type: "bigint",  expandtype:"" , option:{ field: "GroupRightID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetGroupRights", c: { }, _f: "Id,Name,Code", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*3*/{ field: "Permission", name: "Permission", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*4*/{ field: "SubPermission", name: "SubPermission", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*5*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*6*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" },
			/*7*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*8*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*9*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" }
		],
		_editform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },

		],
		_updateform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },

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
	GroupRights : {
		_rightOnTable: { },
		_titleName: "GroupRights",
		_id: "GroupRights",
		_className: "display",
		_listReports: [{}],
		_listSelfTables: [
			{ AjaxObj: { a: "fGetGroupRights", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetGroupRights", _f: "Id,ParentGroupID,Code,Name,Path,Description,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetGroupRights", _f: "Id,ParentGroupID,Code,Name,Path,Description,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
		],
		_listRefTables: [

		],
		_fieldsList: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" },
			/*1*/{ field: "ParentGroupID", name: "ParentGroupID", create: true, edit: true, list: true, type: "bigint",  expandtype:"" },
			/*2*/{ field: "Code", name: "Code", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*3*/{ field: "Name", name: "Name", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*4*/{ field: "Path", name: "Path", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*5*/{ field: "Description", name: "Description", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*6*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" },
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

};
