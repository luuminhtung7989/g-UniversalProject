var _gbSubDictionary = {
	Customers : {
		_rightOnTable: { },
		_titleName: "Customers",
		_id: "Customers",
		_className: "display",
		_listReports: [{}],
		_listSelfTables: [
			{ AjaxObj: { a: "fGetCustomers", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetCustomers", _f: "Id,BusinessID,Name,Phone,Email,Birthday,CustTypeID,VisitCount,LifeTimePoint,CurrentPoint,SMSSent,EmailSent,Note,AnniversaryDay,RelationInfo,OcupationInfo,LastVisited,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetCustomers", _f: "Id,BusinessID,Name,Phone,Email,Birthday,CustTypeID,VisitCount,LifeTimePoint,CurrentPoint,SMSSent,EmailSent,Note,AnniversaryDay,RelationInfo,OcupationInfo,LastVisited,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
		],
		_listRefTables: [
			{ field: "BusinessID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetBusiness", c: { }, _f: "Id,Name,Phone", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } },
			{ field: "CustTypeID", mergename: [1], objAjax: { AjaxObj: { a: "fGetCustomerType", c: { }, _f: "Id,Id", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }
		],
		_fieldsList: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" },
			/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:{obj:"undefined", fcol:"undefined}"}, option:{ field: "BusinessID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetBusiness", c: { }, _f: "Id,Name,Phone", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*2*/{ field: "Name", name: "Name", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*3*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*4*/{ field: "Email", name: "Email", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*5*/{ field: "Birthday", name: "Birthday", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*6*/{ field: "CustTypeID", name: "CustTypeID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:{obj:"undefined", fcol:"undefined}"}, option:{ field: "CustTypeID", mergename: [1], objAjax: { AjaxObj: { a: "fGetCustomerType", c: { }, _f: "Id,Id", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*7*/{ field: "VisitCount", name: "VisitCount", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*8*/{ field: "LifeTimePoint", name: "LifeTimePoint", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*9*/{ field: "CurrentPoint", name: "CurrentPoint", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*10*/{ field: "SMSSent", name: "SMSSent", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*11*/{ field: "EmailSent", name: "EmailSent", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*12*/{ field: "Note", name: "Note", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*13*/{ field: "AnniversaryDay", name: "AnniversaryDay", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*14*/{ field: "RelationInfo", name: "RelationInfo", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*15*/{ field: "OcupationInfo", name: "OcupationInfo", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*16*/{ field: "LastVisited", name: "LastVisited", create: true, edit: true, list: true, type: "datetime",  expandtype:"" },
			/*17*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*18*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" },
			/*19*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*20*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*21*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" }
		],
		_fieldsReport: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" },
			/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:{obj:"undefined", fcol:"undefined}"}, option:{ field: "BusinessID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetBusiness", c: { }, _f: "Id,Name,Phone", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*2*/{ field: "Name", name: "Name", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*3*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*4*/{ field: "Email", name: "Email", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*5*/{ field: "Birthday", name: "Birthday", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*6*/{ field: "CustTypeID", name: "CustTypeID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:{obj:"undefined", fcol:"undefined}"}, option:{ field: "CustTypeID", mergename: [1], objAjax: { AjaxObj: { a: "fGetCustomerType", c: { }, _f: "Id,Id", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*7*/{ field: "VisitCount", name: "VisitCount", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*8*/{ field: "LifeTimePoint", name: "LifeTimePoint", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*9*/{ field: "CurrentPoint", name: "CurrentPoint", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*10*/{ field: "SMSSent", name: "SMSSent", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*11*/{ field: "EmailSent", name: "EmailSent", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*12*/{ field: "Note", name: "Note", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*13*/{ field: "AnniversaryDay", name: "AnniversaryDay", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*14*/{ field: "RelationInfo", name: "RelationInfo", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*15*/{ field: "OcupationInfo", name: "OcupationInfo", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*16*/{ field: "LastVisited", name: "LastVisited", create: true, edit: true, list: true, type: "datetime",  expandtype:"" },
			/*17*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*18*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" },
			/*19*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*20*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*21*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" }
		],
		_fieldsSearch: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" },
			/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:{obj:"undefined", fcol:"undefined}"}, option:{ field: "BusinessID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetBusiness", c: { }, _f: "Id,Name,Phone", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*2*/{ field: "Name", name: "Name", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*3*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*4*/{ field: "Email", name: "Email", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*5*/{ field: "Birthday", name: "Birthday", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*6*/{ field: "CustTypeID", name: "CustTypeID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:{obj:"undefined", fcol:"undefined}"}, option:{ field: "CustTypeID", mergename: [1], objAjax: { AjaxObj: { a: "fGetCustomerType", c: { }, _f: "Id,Id", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*7*/{ field: "VisitCount", name: "VisitCount", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*8*/{ field: "LifeTimePoint", name: "LifeTimePoint", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*9*/{ field: "CurrentPoint", name: "CurrentPoint", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*10*/{ field: "SMSSent", name: "SMSSent", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*11*/{ field: "EmailSent", name: "EmailSent", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*12*/{ field: "Note", name: "Note", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*13*/{ field: "AnniversaryDay", name: "AnniversaryDay", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*14*/{ field: "RelationInfo", name: "RelationInfo", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*15*/{ field: "OcupationInfo", name: "OcupationInfo", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*16*/{ field: "LastVisited", name: "LastVisited", create: true, edit: true, list: true, type: "datetime",  expandtype:"" },
			/*17*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*18*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" },
			/*19*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*20*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*21*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" }
		],
		_editform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },
			{ row: [10, 11], style: [".col-md-2", ".col-md-4"] },
			{ row: [12, 13], style: [".col-md-2", ".col-md-4"] },
			{ row: [14, 15], style: [".col-md-2", ".col-md-4"] },
			{ row: [16, 17], style: [".col-md-2", ".col-md-4"] },
			{ row: [18, 19], style: [".col-md-2", ".col-md-4"] },
			{ row: [20, 21], style: [".col-md-2", ".col-md-4"] },

		],
		_searchform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },
			{ row: [10, 11], style: [".col-md-2", ".col-md-4"] },
			{ row: [12, 13], style: [".col-md-2", ".col-md-4"] },
			{ row: [14, 15], style: [".col-md-2", ".col-md-4"] },
			{ row: [16, 17], style: [".col-md-2", ".col-md-4"] },
			{ row: [18, 19], style: [".col-md-2", ".col-md-4"] },
			{ row: [20, 21], style: [".col-md-2", ".col-md-4"] },

		],
		_updateform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },
			{ row: [10, 11], style: [".col-md-2", ".col-md-4"] },
			{ row: [12, 13], style: [".col-md-2", ".col-md-4"] },
			{ row: [14, 15], style: [".col-md-2", ".col-md-4"] },
			{ row: [16, 17], style: [".col-md-2", ".col-md-4"] },
			{ row: [18, 19], style: [".col-md-2", ".col-md-4"] },
			{ row: [20, 21], style: [".col-md-2", ".col-md-4"] },

		],
	},
	Business : {
		_rightOnTable: { },
		_titleName: "Business",
		_id: "Business",
		_className: "display",
		_listReports: [{}],
		_listSelfTables: [
			{ AjaxObj: { a: "fGetBusiness", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetBusiness", _f: "Id,Name,ShortName,Email,Address,Phone,City,District,Ward,CountryCode,StateCode,PostalCode,Logo,BannerLogo,OpenTime,Description,IndustryID,UserID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetBusiness", _f: "Id,Name,ShortName,Email,Address,Phone,City,District,Ward,CountryCode,StateCode,PostalCode,Logo,BannerLogo,OpenTime,Description,IndustryID,UserID,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
		],
		_listRefTables: [
			{ field: "UserID", mergename: [1], objAjax: { AjaxObj: { a: "fGetUsers", c: { }, _f: "Id,UserName", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }
		],
		_fieldsList: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" },
			/*1*/{ field: "Name", name: "Name", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*2*/{ field: "ShortName", name: "ShortName", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*3*/{ field: "Email", name: "Email", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*4*/{ field: "Address", name: "Address", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*5*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*6*/{ field: "City", name: "City", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*7*/{ field: "District", name: "District", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*8*/{ field: "Ward", name: "Ward", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*9*/{ field: "CountryCode", name: "CountryCode", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*10*/{ field: "StateCode", name: "StateCode", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*11*/{ field: "PostalCode", name: "PostalCode", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*12*/{ field: "Logo", name: "Logo", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*13*/{ field: "BannerLogo", name: "BannerLogo", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*14*/{ field: "OpenTime", name: "OpenTime", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*15*/{ field: "Description", name: "Description", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*16*/{ field: "IndustryID", name: "IndustryID", create: true, edit: true, list: true, type: "bigint",  expandtype:"" },
			/*17*/{ field: "UserID", name: "UserID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:{obj:"undefined", fcol:"undefined}"}, option:{ field: "UserID", mergename: [1], objAjax: { AjaxObj: { a: "fGetUsers", c: { }, _f: "Id,UserName", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*18*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*19*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" },
			/*20*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*21*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*22*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" }
		],
		_fieldsReport: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" },
			/*1*/{ field: "Name", name: "Name", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*2*/{ field: "ShortName", name: "ShortName", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*3*/{ field: "Email", name: "Email", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*4*/{ field: "Address", name: "Address", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*5*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*6*/{ field: "City", name: "City", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*7*/{ field: "District", name: "District", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*8*/{ field: "Ward", name: "Ward", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*9*/{ field: "CountryCode", name: "CountryCode", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*10*/{ field: "StateCode", name: "StateCode", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*11*/{ field: "PostalCode", name: "PostalCode", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*12*/{ field: "Logo", name: "Logo", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*13*/{ field: "BannerLogo", name: "BannerLogo", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*14*/{ field: "OpenTime", name: "OpenTime", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*15*/{ field: "Description", name: "Description", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*16*/{ field: "IndustryID", name: "IndustryID", create: true, edit: true, list: true, type: "bigint",  expandtype:"" },
			/*17*/{ field: "UserID", name: "UserID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:{obj:"undefined", fcol:"undefined}"}, option:{ field: "UserID", mergename: [1], objAjax: { AjaxObj: { a: "fGetUsers", c: { }, _f: "Id,UserName", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*18*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*19*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" },
			/*20*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*21*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*22*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" }
		],
		_fieldsSearch: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" },
			/*1*/{ field: "Name", name: "Name", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*2*/{ field: "ShortName", name: "ShortName", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*3*/{ field: "Email", name: "Email", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*4*/{ field: "Address", name: "Address", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*5*/{ field: "Phone", name: "Phone", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*6*/{ field: "City", name: "City", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*7*/{ field: "District", name: "District", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*8*/{ field: "Ward", name: "Ward", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*9*/{ field: "CountryCode", name: "CountryCode", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*10*/{ field: "StateCode", name: "StateCode", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*11*/{ field: "PostalCode", name: "PostalCode", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*12*/{ field: "Logo", name: "Logo", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*13*/{ field: "BannerLogo", name: "BannerLogo", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*14*/{ field: "OpenTime", name: "OpenTime", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*15*/{ field: "Description", name: "Description", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*16*/{ field: "IndustryID", name: "IndustryID", create: true, edit: true, list: true, type: "bigint",  expandtype:"" },
			/*17*/{ field: "UserID", name: "UserID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:{obj:"undefined", fcol:"undefined}"}, option:{ field: "UserID", mergename: [1], objAjax: { AjaxObj: { a: "fGetUsers", c: { }, _f: "Id,UserName", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*18*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*19*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" },
			/*20*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*21*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*22*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" }
		],
		_editform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },
			{ row: [10, 11], style: [".col-md-2", ".col-md-4"] },
			{ row: [12, 13], style: [".col-md-2", ".col-md-4"] },
			{ row: [14, 15], style: [".col-md-2", ".col-md-4"] },
			{ row: [16, 17], style: [".col-md-2", ".col-md-4"] },
			{ row: [18, 19], style: [".col-md-2", ".col-md-4"] },
			{ row: [20, 21], style: [".col-md-2", ".col-md-4"] },
			{ row: [22], style: [".col-md-2"] }
		],
		_searchform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },
			{ row: [10, 11], style: [".col-md-2", ".col-md-4"] },
			{ row: [12, 13], style: [".col-md-2", ".col-md-4"] },
			{ row: [14, 15], style: [".col-md-2", ".col-md-4"] },
			{ row: [16, 17], style: [".col-md-2", ".col-md-4"] },
			{ row: [18, 19], style: [".col-md-2", ".col-md-4"] },
			{ row: [20, 21], style: [".col-md-2", ".col-md-4"] },
			{ row: [22], style: [".col-md-2"] }
		],
		_updateform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },
			{ row: [8, 9], style: [".col-md-2", ".col-md-4"] },
			{ row: [10, 11], style: [".col-md-2", ".col-md-4"] },
			{ row: [12, 13], style: [".col-md-2", ".col-md-4"] },
			{ row: [14, 15], style: [".col-md-2", ".col-md-4"] },
			{ row: [16, 17], style: [".col-md-2", ".col-md-4"] },
			{ row: [18, 19], style: [".col-md-2", ".col-md-4"] },
			{ row: [20, 21], style: [".col-md-2", ".col-md-4"] },
			{ row: [22], style: [".col-md-2"] }
		],
	},
	CustomerType : {
		_rightOnTable: { },
		_titleName: "CustomerType",
		_id: "CustomerType",
		_className: "display",
		_listReports: [{}],
		_listSelfTables: [
			{ AjaxObj: { a: "fGetCustomerType", _f: "*", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetCustomerType", _f: "Id,BusinessID,Name,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
			{ AjaxObj: { a: "fGetCustomerType", _f: "Id,BusinessID,Name,isActive,isValid,isCreatedDate,isUpdatedDate,isPartFull", _gb: "", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" },
		],
		_listRefTables: [
			{ field: "BusinessID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetBusiness", c: { }, _f: "Id,Name,Phone", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }
		],
		_fieldsList: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" },
			/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:{obj:"undefined", fcol:"undefined}"}, option:{ field: "BusinessID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetBusiness", c: { }, _f: "Id,Name,Phone", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*2*/{ field: "Name", name: "Name", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*3*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*4*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" },
			/*5*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*6*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*7*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" }
		],
		_fieldsReport: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" },
			/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:{obj:"undefined", fcol:"undefined}"}, option:{ field: "BusinessID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetBusiness", c: { }, _f: "Id,Name,Phone", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*2*/{ field: "Name", name: "Name", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*3*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*4*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" },
			/*5*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*6*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*7*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" }
		],
		_fieldsSearch: [
			/*0*/{ field: "Id", name: "Identify", create: true, edit: true, list: true, type: "bigint",  expandtype:"hidden" },
			/*1*/{ field: "BusinessID", name: "BusinessID", create: true, edit: true, list: true, type: "bigint",  expandtype:"select" , fkey:{obj:"undefined", fcol:"undefined}"}, option:{ field: "BusinessID", mergename: [1,2], objAjax: { AjaxObj: { a: "fGetBusiness", c: { }, _f: "Id,Name,Phone", ModelDb: "AppCoreDb" }, APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k" } }},
			/*2*/{ field: "Name", name: "Name", create: true, edit: true, list: true, type: "string",  expandtype:"" },
			/*3*/{ field: "isActive", name: "isActive", create: true, edit: true, list: true, type: "int",  expandtype:"" },
			/*4*/{ field: "isValid", name: "isValid", create: false, edit: false, list: false, type: "int",  expandtype:"" },
			/*5*/{ field: "isCreatedDate", name: "isCreateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*6*/{ field: "isUpdatedDate", name: "isUpdateDated", create: false, edit: false, list: false, type: "datetime",  expandtype:"" },
			/*7*/{ field: "isPartFull", name: "isPartFull", create: false, edit: false, list: false, type: "string",  expandtype:"" }
		],
		_editform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },

		],
		_searchform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },

		],
		_updateform: [
			{ row: [0, 1], style: [".col-md-2", ".col-md-4"] },
			{ row: [2, 3], style: [".col-md-2", ".col-md-4"] },
			{ row: [4, 5], style: [".col-md-2", ".col-md-4"] },
			{ row: [6, 7], style: [".col-md-2", ".col-md-4"] },

		],
	},

};
