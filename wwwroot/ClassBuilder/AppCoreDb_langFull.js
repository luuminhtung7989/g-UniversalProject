var _gbLanguageI18 = {
        
      
         'sysdiagrams' : {
            _id: 'sysdiagrams',//table
         UIname: { en: 'sysdiagrams', vn:'sysdiagrams'},
           _fieldsList: [
                /*0*/{ field: 'name', vn: 'name' }
				,/*1*/{ field: 'principal_id', vn: 'principal_id' }
				,/*2*/{ field: 'diagram_id', vn: 'diagram_id' }
				,/*3*/{ field: 'version', vn: 'version' }
				,/*4*/{ field: 'definition', vn: 'definition' }

            ],
        },      
         'Users' : {
            _id: 'Users',//table
         UIname: { en: 'Users', vn:'Users'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'UserName', vn: 'UserName' }
				,/*2*/{ field: 'Password', vn: 'Password' }
				,/*3*/{ field: 'Email', vn: 'Email' }
				,/*4*/{ field: 'PassCode', vn: 'PassCode' }
				,/*5*/{ field: 'Phone', vn: 'Phone' }
				,/*6*/{ field: 'Domain', vn: 'Domain' }
				,/*7*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*8*/{ field: 'StaffID', vn: 'StaffID' }
				,/*9*/{ field: 'isActive', vn: 'isActive' }
				,/*10*/{ field: 'isValid', vn: 'isValid' }
				,/*11*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*12*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*13*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'Logins' : {
            _id: 'Logins',//table
         UIname: { en: 'Logins', vn:'Logins'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'TimeLogin', vn: 'TimeLogin' }
				,/*2*/{ field: 'TimeLogout', vn: 'TimeLogout' }
				,/*3*/{ field: 'UpdatedTime', vn: 'UpdatedTime' }
				,/*4*/{ field: 'TotalTimes', vn: 'TotalTimes' }
				,/*5*/{ field: 'UserID', vn: 'UserID' }
				,/*6*/{ field: 'Online', vn: 'Online' }
				,/*7*/{ field: 'isValid', vn: 'isValid' }
				,/*8*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*9*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*10*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'LogActivity' : {
            _id: 'LogActivity',//table
         UIname: { en: 'LogActivity', vn:'LogActivity'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'task', vn: 'task' }
				,/*2*/{ field: 'todo', vn: 'todo' }
				,/*3*/{ field: 'UpdatedTime', vn: 'UpdatedTime' }
				,/*4*/{ field: 'UserID', vn: 'UserID' }
				,/*5*/{ field: 'isValid', vn: 'isValid' }
				,/*6*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*7*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*8*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'Business' : {
            _id: 'Business',//table
         UIname: { en: 'Business', vn:'Business'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Name', vn: 'Name' }
				,/*2*/{ field: 'ShortName', vn: 'ShortName' }
				,/*3*/{ field: 'Email', vn: 'Email' }
				,/*4*/{ field: 'Address', vn: 'Address' }
				,/*5*/{ field: 'Phone', vn: 'Phone' }
				,/*6*/{ field: 'City', vn: 'City' }
				,/*7*/{ field: 'District', vn: 'District' }
				,/*8*/{ field: 'Ward', vn: 'Ward' }
				,/*9*/{ field: 'CountryCode', vn: 'CountryCode' }
				,/*10*/{ field: 'StateCode', vn: 'StateCode' }
				,/*11*/{ field: 'PostalCode', vn: 'PostalCode' }
				,/*12*/{ field: 'Logo', vn: 'Logo' }
				,/*13*/{ field: 'BannerLogo', vn: 'BannerLogo' }
				,/*14*/{ field: 'OpenTime', vn: 'OpenTime' }
				,/*15*/{ field: 'Description', vn: 'Description' }
				,/*16*/{ field: 'IndustryID', vn: 'IndustryID' }
				,/*17*/{ field: 'UserID', vn: 'UserID' }
				,/*18*/{ field: 'isActive', vn: 'isActive' }
				,/*19*/{ field: 'isValid', vn: 'isValid' }
				,/*20*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*21*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*22*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'BusinessTime' : {
            _id: 'BusinessTime',//table
         UIname: { en: 'BusinessTime', vn:'BusinessTime'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'dayth', vn: 'dayth' }
				,/*2*/{ field: 'opentime', vn: 'opentime' }
				,/*3*/{ field: 'closetime', vn: 'closetime' }
				,/*4*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*5*/{ field: 'isActive', vn: 'isActive' }
				,/*6*/{ field: 'isValid', vn: 'isValid' }
				,/*7*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*8*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*9*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'BusinessServiceStaffSetting' : {
            _id: 'BusinessServiceStaffSetting',//table
         UIname: { en: 'BusinessServiceStaffSetting', vn:'BusinessServiceStaffSetting'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Description', vn: 'Description' }
				,/*2*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*3*/{ field: 'isActive', vn: 'isActive' }
				,/*4*/{ field: 'isValid', vn: 'isValid' }
				,/*5*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*6*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*7*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'TicketSetting' : {
            _id: 'TicketSetting',//table
         UIname: { en: 'TicketSetting', vn:'TicketSetting'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'FieldName', vn: 'FieldName' }
				,/*2*/{ field: 'FormName', vn: 'FormName' }
				,/*3*/{ field: 'TableName', vn: 'TableName' }
				,/*4*/{ field: 'Ordered', vn: 'Ordered' }
				,/*5*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*6*/{ field: 'isActive', vn: 'isActive' }
				,/*7*/{ field: 'isValid', vn: 'isValid' }
				,/*8*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*9*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*10*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'CheckoutType' : {
            _id: 'CheckoutType',//table
         UIname: { en: 'CheckoutType', vn:'CheckoutType'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Name', vn: 'Name' }
				,/*2*/{ field: 'FormName', vn: 'FormName' }
				,/*3*/{ field: 'isActive', vn: 'isActive' }
				,/*4*/{ field: 'isValid', vn: 'isValid' }
				,/*5*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*6*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*7*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'CheckoutSetting' : {
            _id: 'CheckoutSetting',//table
         UIname: { en: 'CheckoutSetting', vn:'CheckoutSetting'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'PointBonus', vn: 'PointBonus' }
				,/*2*/{ field: 'CheckoutTypeID', vn: 'CheckoutTypeID' }
				,/*3*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*4*/{ field: 'isActive', vn: 'isActive' }
				,/*5*/{ field: 'isValid', vn: 'isValid' }
				,/*6*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*7*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*8*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'BusinessPolycies' : {
            _id: 'BusinessPolycies',//table
         UIname: { en: 'BusinessPolycies', vn:'BusinessPolycies'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Description', vn: 'Description' }
				,/*2*/{ field: 'OrtherPolices', vn: 'OrtherPolices' }
				,/*3*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*4*/{ field: 'isActive', vn: 'isActive' }
				,/*5*/{ field: 'isValid', vn: 'isValid' }
				,/*6*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*7*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*8*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'BusinessLanguages' : {
            _id: 'BusinessLanguages',//table
         UIname: { en: 'BusinessLanguages', vn:'BusinessLanguages'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*2*/{ field: 'LanguageID', vn: 'LanguageID' }
				,/*3*/{ field: 'isActive', vn: 'isActive' }
				,/*4*/{ field: 'isValid', vn: 'isValid' }
				,/*5*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*6*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*7*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'Languages' : {
            _id: 'Languages',//table
         UIname: { en: 'Languages', vn:'Languages'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Name', vn: 'Name' }
				,/*2*/{ field: 'FormName', vn: 'FormName' }
				,/*3*/{ field: 'isActive', vn: 'isActive' }
				,/*4*/{ field: 'isValid', vn: 'isValid' }
				,/*5*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*6*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*7*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'SMS' : {
            _id: 'SMS',//table
         UIname: { en: 'SMS', vn:'SMS'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Name', vn: 'Name' }
				,/*2*/{ field: 'FormName', vn: 'FormName' }
				,/*3*/{ field: 'NameTemplate', vn: 'NameTemplate' }
				,/*4*/{ field: 'Description', vn: 'Description' }
				,/*5*/{ field: 'isActive', vn: 'isActive' }
				,/*6*/{ field: 'isValid', vn: 'isValid' }
				,/*7*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*8*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*9*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'SMSGobalTemplate' : {
            _id: 'SMSGobalTemplate',//table
         UIname: { en: 'SMSGobalTemplate', vn:'SMSGobalTemplate'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Name', vn: 'Name' }
				,/*2*/{ field: 'FormName', vn: 'FormName' }
				,/*3*/{ field: 'NameTemplate', vn: 'NameTemplate' }
				,/*4*/{ field: 'Description', vn: 'Description' }
				,/*5*/{ field: 'isActive', vn: 'isActive' }
				,/*6*/{ field: 'isValid', vn: 'isValid' }
				,/*7*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*8*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*9*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'BusinessSMS' : {
            _id: 'BusinessSMS',//table
         UIname: { en: 'BusinessSMS', vn:'BusinessSMS'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*2*/{ field: 'SMSID', vn: 'SMSID' }
				,/*3*/{ field: 'ContentName', vn: 'ContentName' }
				,/*4*/{ field: 'FormName', vn: 'FormName' }
				,/*5*/{ field: 'Description', vn: 'Description' }
				,/*6*/{ field: 'isActive', vn: 'isActive' }
				,/*7*/{ field: 'isValid', vn: 'isValid' }
				,/*8*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*9*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*10*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'PromotionDetail' : {
            _id: 'PromotionDetail',//table
         UIname: { en: 'PromotionDetail', vn:'PromotionDetail'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'PromotionID', vn: 'PromotionID' }
				,/*2*/{ field: 'WhatOfferName', vn: 'WhatOfferName' }
				,/*3*/{ field: 'Discount', vn: 'Discount' }
				,/*4*/{ field: 'MixCustomerType', vn: 'MixCustomerType' }
				,/*5*/{ field: 'EmailTitle', vn: 'EmailTitle' }
				,/*6*/{ field: 'BusinessName', vn: 'BusinessName' }
				,/*7*/{ field: 'OtherDesctiption', vn: 'OtherDesctiption' }
				,/*8*/{ field: 'PhoneTest', vn: 'PhoneTest' }
				,/*9*/{ field: 'EmailTest', vn: 'EmailTest' }
				,/*10*/{ field: 'ActiveSTOPfromUer', vn: 'ActiveSTOPfromUer' }
				,/*11*/{ field: 'UseOneTimeThisPromotion', vn: 'UseOneTimeThisPromotion' }
				,/*12*/{ field: 'SendNow', vn: 'SendNow' }
				,/*13*/{ field: 'Income', vn: 'Income' }
				,/*14*/{ field: 'DateSendPromotion', vn: 'DateSendPromotion' }
				,/*15*/{ field: 'UpdatedTime', vn: 'UpdatedTime' }
				,/*16*/{ field: 'SaveNextTime', vn: 'SaveNextTime' }
				,/*17*/{ field: 'ExpireDate', vn: 'ExpireDate' }
				,/*18*/{ field: 'FromDate', vn: 'FromDate' }
				,/*19*/{ field: 'ToDate', vn: 'ToDate' }
				,/*20*/{ field: 'DeliverEmail', vn: 'DeliverEmail' }
				,/*21*/{ field: 'DeliverSMS', vn: 'DeliverSMS' }
				,/*22*/{ field: 'Description', vn: 'Description' }
				,/*23*/{ field: 'TotalUserUsePromotionSMS', vn: 'TotalUserUsePromotionSMS' }
				,/*24*/{ field: 'TotalUserUsePromotionEmail', vn: 'TotalUserUsePromotionEmail' }
				,/*25*/{ field: 'isActive', vn: 'isActive' }
				,/*26*/{ field: 'isValid', vn: 'isValid' }
				,/*27*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*28*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*29*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'PromotionDashBoard' : {
            _id: 'PromotionDashBoard',//table
         UIname: { en: 'PromotionDashBoard', vn:'PromotionDashBoard'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*2*/{ field: 'PromotionID', vn: 'PromotionID' }
				,/*3*/{ field: 'TotalDelivered', vn: 'TotalDelivered' }
				,/*4*/{ field: 'Income', vn: 'Income' }
				,/*5*/{ field: 'Expense', vn: 'Expense' }
				,/*6*/{ field: 'Phone', vn: 'Phone' }
				,/*7*/{ field: 'isActive', vn: 'isActive' }
				,/*8*/{ field: 'isValid', vn: 'isValid' }
				,/*9*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*10*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*11*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'PromotionDetailDashBoard' : {
            _id: 'PromotionDetailDashBoard',//table
         UIname: { en: 'PromotionDetailDashBoard', vn:'PromotionDetailDashBoard'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*2*/{ field: 'PromotionID', vn: 'PromotionID' }
				,/*3*/{ field: 'CusomerName', vn: 'CusomerName' }
				,/*4*/{ field: 'CustomerPhone', vn: 'CustomerPhone' }
				,/*5*/{ field: 'NumVisit', vn: 'NumVisit' }
				,/*6*/{ field: 'TotalDelivered', vn: 'TotalDelivered' }
				,/*7*/{ field: 'Income', vn: 'Income' }
				,/*8*/{ field: 'Expense', vn: 'Expense' }
				,/*9*/{ field: 'Phone', vn: 'Phone' }
				,/*10*/{ field: 'Email', vn: 'Email' }
				,/*11*/{ field: 'isActive', vn: 'isActive' }
				,/*12*/{ field: 'isValid', vn: 'isValid' }
				,/*13*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*14*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*15*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'Staff' : {
            _id: 'Staff',//table
         UIname: { en: 'Staff', vn:'Staff'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*2*/{ field: 'DepartmentID', vn: 'DepartmentID' }
				,/*3*/{ field: 'Name', vn: 'Name' }
				,/*4*/{ field: 'Avatar', vn: 'Avatar' }
				,/*5*/{ field: 'Code', vn: 'Code' }
				,/*6*/{ field: 'Phone', vn: 'Phone' }
				,/*7*/{ field: 'ortherPhone', vn: 'ortherPhone' }
				,/*8*/{ field: 'Email', vn: 'Email' }
				,/*9*/{ field: 'Address', vn: 'Address' }
				,/*10*/{ field: 'Color', vn: 'Color' }
				,/*11*/{ field: 'isActive', vn: 'isActive' }
				,/*12*/{ field: 'isValid', vn: 'isValid' }
				,/*13*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*14*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*15*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'StaffWorkingTime' : {
            _id: 'StaffWorkingTime',//table
         UIname: { en: 'StaffWorkingTime', vn:'StaffWorkingTime'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'StaffID', vn: 'StaffID' }
				,/*2*/{ field: 'Dayth', vn: 'Dayth' }
				,/*3*/{ field: 'InTime', vn: 'InTime' }
				,/*4*/{ field: 'OutTime', vn: 'OutTime' }
				,/*5*/{ field: 'isActive', vn: 'isActive' }
				,/*6*/{ field: 'isValid', vn: 'isValid' }
				,/*7*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*8*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*9*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'Department' : {
            _id: 'Department',//table
         UIname: { en: 'Department', vn:'Department'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'isActive', vn: 'isActive' }
				,/*4*/{ field: 'isValid', vn: 'isValid' }
				,/*5*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*6*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*7*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'StaffServives' : {
            _id: 'StaffServives',//table
         UIname: { en: 'StaffServives', vn:'StaffServives'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'StaffID', vn: 'StaffID' }
				,/*2*/{ field: 'ServicesID', vn: 'ServicesID' }
				,/*3*/{ field: 'isActive', vn: 'isActive' }
				,/*4*/{ field: 'isValid', vn: 'isValid' }
				,/*5*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*6*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*7*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'Categorys' : {
            _id: 'Categorys',//table
         UIname: { en: 'Categorys', vn:'Categorys'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Code', vn: 'Code' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'isActive', vn: 'isActive' }
				,/*4*/{ field: 'isValid', vn: 'isValid' }
				,/*5*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*6*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*7*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'Services' : {
            _id: 'Services',//table
         UIname: { en: 'Services', vn:'Services'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*2*/{ field: 'ServicesID', vn: 'ServicesID' }
				,/*3*/{ field: 'CategoryID', vn: 'CategoryID' }
				,/*4*/{ field: 'Name', vn: 'Name' }
				,/*5*/{ field: 'Price', vn: 'Price' }
				,/*6*/{ field: 'Duration', vn: 'Duration' }
				,/*7*/{ field: 'NumStaffDoIt', vn: 'NumStaffDoIt' }
				,/*8*/{ field: 'isActive', vn: 'isActive' }
				,/*9*/{ field: 'isValid', vn: 'isValid' }
				,/*10*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*11*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*12*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'CustomerType' : {
            _id: 'CustomerType',//table
         UIname: { en: 'CustomerType', vn:'CustomerType'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'isActive', vn: 'isActive' }
				,/*4*/{ field: 'isValid', vn: 'isValid' }
				,/*5*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*6*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*7*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'Customers' : {
            _id: 'Customers',//table
         UIname: { en: 'Customers', vn:'Customers'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'Phone', vn: 'Phone' }
				,/*4*/{ field: 'Email', vn: 'Email' }
				,/*5*/{ field: 'Birthday', vn: 'Birthday' }
				,/*6*/{ field: 'CustTypeID', vn: 'CustTypeID' }
				,/*7*/{ field: 'VisitCount', vn: 'VisitCount' }
				,/*8*/{ field: 'LifeTimePoint', vn: 'LifeTimePoint' }
				,/*9*/{ field: 'CurrentPoint', vn: 'CurrentPoint' }
				,/*10*/{ field: 'SMSSent', vn: 'SMSSent' }
				,/*11*/{ field: 'EmailSent', vn: 'EmailSent' }
				,/*12*/{ field: 'Note', vn: 'Note' }
				,/*13*/{ field: 'AnniversaryDay', vn: 'AnniversaryDay' }
				,/*14*/{ field: 'RelationInfo', vn: 'RelationInfo' }
				,/*15*/{ field: 'OcupationInfo', vn: 'OcupationInfo' }
				,/*16*/{ field: 'LastVisited', vn: 'LastVisited' }
				,/*17*/{ field: 'isActive', vn: 'isActive' }
				,/*18*/{ field: 'isValid', vn: 'isValid' }
				,/*19*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*20*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*21*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'Orders' : {
            _id: 'Orders',//table
         UIname: { en: 'Orders', vn:'Orders'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*2*/{ field: 'CustomerID', vn: 'CustomerID' }
				,/*3*/{ field: 'DateCheckIn', vn: 'DateCheckIn' }
				,/*4*/{ field: 'DateCheckOut', vn: 'DateCheckOut' }
				,/*5*/{ field: 'DateDeliveryInfo', vn: 'DateDeliveryInfo' }
				,/*6*/{ field: 'DaySendInfo', vn: 'DaySendInfo' }
				,/*7*/{ field: 'RoomInfo', vn: 'RoomInfo' }
				,/*8*/{ field: 'PersonReceiveInfo', vn: 'PersonReceiveInfo' }
				,/*9*/{ field: 'StatusOrder', vn: 'StatusOrder' }
				,/*10*/{ field: 'AnniversaryDay', vn: 'AnniversaryDay' }
				,/*11*/{ field: 'RelationInfo', vn: 'RelationInfo' }
				,/*12*/{ field: 'OcupationInfo', vn: 'OcupationInfo' }
				,/*13*/{ field: 'isActive', vn: 'isActive' }
				,/*14*/{ field: 'isValid', vn: 'isValid' }
				,/*15*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*16*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*17*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'OrderDetail' : {
            _id: 'OrderDetail',//table
         UIname: { en: 'OrderDetail', vn:'OrderDetail'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'ServicesID', vn: 'ServicesID' }
				,/*2*/{ field: 'OrderID', vn: 'OrderID' }
				,/*3*/{ field: 'StaffID', vn: 'StaffID' }
				,/*4*/{ field: 'Price', vn: 'Price' }
				,/*5*/{ field: 'TIP', vn: 'TIP' }
				,/*6*/{ field: 'NumServices', vn: 'NumServices' }
				,/*7*/{ field: 'Discount', vn: 'Discount' }
				,/*8*/{ field: 'Total', vn: 'Total' }
				,/*9*/{ field: 'Coupon', vn: 'Coupon' }
				,/*10*/{ field: 'Note', vn: 'Note' }
				,/*11*/{ field: 'isActive', vn: 'isActive' }
				,/*12*/{ field: 'isValid', vn: 'isValid' }
				,/*13*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*14*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*15*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'Promotions' : {
            _id: 'Promotions',//table
         UIname: { en: 'Promotions', vn:'Promotions'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'BusinessID', vn: 'BusinessID' }
				,/*2*/{ field: 'Name', vn: 'Name' }
				,/*3*/{ field: 'Expense', vn: 'Expense' }
				,/*4*/{ field: 'Income', vn: 'Income' }
				,/*5*/{ field: 'NumOrderd', vn: 'NumOrderd' }
				,/*6*/{ field: 'DateSent', vn: 'DateSent' }
				,/*7*/{ field: 'DateStop', vn: 'DateStop' }
				,/*8*/{ field: 'DeliverEmail', vn: 'DeliverEmail' }
				,/*9*/{ field: 'DeliverSMS', vn: 'DeliverSMS' }
				,/*10*/{ field: 'TotalUserUsePromotionSMS', vn: 'TotalUserUsePromotionSMS' }
				,/*11*/{ field: 'TotalUserUsePromotionEmail', vn: 'TotalUserUsePromotionEmail' }
				,/*12*/{ field: 'isActive', vn: 'isActive' }
				,/*13*/{ field: 'isValid', vn: 'isValid' }
				,/*14*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*15*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*16*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'GroupRights' : {
            _id: 'GroupRights',//table
         UIname: { en: 'GroupRights', vn:'GroupRights'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'ParentGroupID', vn: 'ParentGroupID' }
				,/*2*/{ field: 'Code', vn: 'Code' }
				,/*3*/{ field: 'Name', vn: 'Name' }
				,/*4*/{ field: 'Path', vn: 'Path' }
				,/*5*/{ field: 'Description', vn: 'Description' }
				,/*6*/{ field: 'isActive', vn: 'isActive' }
				,/*7*/{ field: 'isValid', vn: 'isValid' }
				,/*8*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*9*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*10*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'GroupRightDetail' : {
            _id: 'GroupRightDetail',//table
         UIname: { en: 'GroupRightDetail', vn:'GroupRightDetail'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'GroupID', vn: 'GroupID' }
				,/*2*/{ field: 'ParentGroupID', vn: 'ParentGroupID' }
				,/*3*/{ field: 'subGroup', vn: 'subGroup' }
				,/*4*/{ field: 'Name', vn: 'Name' }
				,/*5*/{ field: 'Path', vn: 'Path' }
				,/*6*/{ field: 'Description', vn: 'Description' }
				,/*7*/{ field: 'isActive', vn: 'isActive' }
				,/*8*/{ field: 'isValid', vn: 'isValid' }
				,/*9*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*10*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*11*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },      
         'Roles' : {
            _id: 'Roles',//table
         UIname: { en: 'Roles', vn:'Roles'},
           _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'UserID', vn: 'UserID' }
				,/*2*/{ field: 'GroupRightID', vn: 'GroupRightID' }
				,/*3*/{ field: 'Permission', vn: 'Permission' }
				,/*4*/{ field: 'SubPermission', vn: 'SubPermission' }
				,/*5*/{ field: 'isActive', vn: 'isActive' }
				,/*6*/{ field: 'isValid', vn: 'isValid' }
				,/*7*/{ field: 'isCreatedDate', vn: 'isCreatedDate' }
				,/*8*/{ field: 'isUpdatedDate', vn: 'isUpdatedDate' }
				,/*9*/{ field: 'isPartFull', vn: 'isPartFull' }

            ],
        },
        
};
