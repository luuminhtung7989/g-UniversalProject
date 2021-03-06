var _gbLanguageI18 = {
        _dictSelf: new Map(),
        init: function () {
      var obj0 = {
            _id: 'sysdiagrams',//table
            _fieldsList: [
                /*0*/{ field: 'name', vn: 'name' }
				,/*1*/{ field: 'principal_id', vn: 'principal_id' }
				,/*2*/{ field: 'diagram_id', vn: 'diagram_id' }
				,/*3*/{ field: 'version', vn: 'version' }
				,/*4*/{ field: 'definition', vn: 'definition' }

            ],
        }
         this._dictSelf.set('sysdiagrams', obj0);
      var obj1 = {
            _id: 'bill_assign_detail_bill',//table
            _fieldsList: [
                /*0*/{ field: 'bill_assign_detail_id', vn: 'bill_assign_detail_id' }
				,/*1*/{ field: 'bill_id', vn: 'bill_id' }
				,/*2*/{ field: 'note', vn: 'note' }
				,/*3*/{ field: 'status', vn: 'status' }
				,/*4*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*5*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*6*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*7*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*8*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*9*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bill_assign_detail_bill', obj1);
      var obj2 = {
            _id: 'bill_request_sms',//table
            _fieldsList: [
                /*0*/{ field: 'sms_id', vn: 'sms_id' }
				,/*1*/{ field: 'bill_assign_id', vn: 'bill_assign_id' }
				,/*2*/{ field: 'bill_request_id', vn: 'bill_request_id' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'status', vn: 'status' }
				,/*5*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*6*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*7*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*8*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*9*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*10*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bill_request_sms', obj2);
      var obj3 = {
            _id: 'department_manage_account',//table
            _fieldsList: [
                /*0*/{ field: 'department_id', vn: 'department_id' }
				,/*1*/{ field: 'account_id', vn: 'account_id' }
				,/*2*/{ field: 'note', vn: 'note' }
				,/*3*/{ field: 'status', vn: 'status' }
				,/*4*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*5*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*6*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*7*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*8*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*9*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('department_manage_account', obj3);
      var obj4 = {
            _id: 'receipt_bill_request',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'receipt_id', vn: 'receipt_id' }
				,/*2*/{ field: 'bill_assign_id', vn: 'bill_assign_id' }
				,/*3*/{ field: 'bill_request_id', vn: 'bill_request_id' }
				,/*4*/{ field: 'note', vn: 'note' }
				,/*5*/{ field: 'status', vn: 'status' }
				,/*6*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*7*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*8*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*9*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*10*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*11*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('receipt_bill_request', obj4);
      var obj5 = {
            _id: 'supplier_profile',//table
            _fieldsList: [
                /*0*/{ field: 'supplier_id', vn: 'supplier_id' }
				,/*1*/{ field: 'profile_id', vn: 'profile_id' }
				,/*2*/{ field: 'note', vn: 'note' }
				,/*3*/{ field: 'status', vn: 'status' }
				,/*4*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*5*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*6*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*7*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*8*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*9*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('supplier_profile', obj5);
      var obj6 = {
            _id: 'zone_group_country',//table
            _fieldsList: [
                /*0*/{ field: 'zone_group_id', vn: 'zone_group_id' }
				,/*1*/{ field: 'country_id', vn: 'country_id' }
				,/*2*/{ field: 'note', vn: 'note' }
				,/*3*/{ field: 'status', vn: 'status' }
				,/*4*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*5*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*6*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*7*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*8*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*9*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('zone_group_country', obj6);
      var obj7 = {
            _id: 'zone_group_zone',//table
            _fieldsList: [
                /*0*/{ field: 'zone_group_id', vn: 'zone_group_id' }
				,/*1*/{ field: 'zone_id', vn: 'zone_id' }
				,/*2*/{ field: 'note', vn: 'note' }
				,/*3*/{ field: 'status', vn: 'status' }
				,/*4*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*5*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*6*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*7*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*8*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*9*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('zone_group_zone', obj7);
      var obj8 = {
            _id: 'bag_confirm_detail',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'bag_confirm_id', vn: 'bag_confirm_id' }
				,/*2*/{ field: 'bill_package_id', vn: 'bill_package_id' }
				,/*3*/{ field: 'account_id', vn: 'account_id' }
				,/*4*/{ field: 'time', vn: 'time' }
				,/*5*/{ field: 'barcode', vn: 'barcode' }
				,/*6*/{ field: 'note', vn: 'note' }
				,/*7*/{ field: 'status', vn: 'status' }
				,/*8*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*9*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*10*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*11*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*12*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*13*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bag_confirm_detail', obj8);
      var obj9 = {
            _id: 'bill_assign_detail_package',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'bill_assign_id', vn: 'bill_assign_id' }
				,/*2*/{ field: 'bill_package_id', vn: 'bill_package_id' }
				,/*3*/{ field: 'account_id', vn: 'account_id' }
				,/*4*/{ field: 'assign_account_id', vn: 'assign_account_id' }
				,/*5*/{ field: 'create_time', vn: 'create_time' }
				,/*6*/{ field: 'confirm_account_id', vn: 'confirm_account_id' }
				,/*7*/{ field: 'confirm_time', vn: 'confirm_time' }
				,/*8*/{ field: 'confirm_status', vn: 'confirm_status' }
				,/*9*/{ field: 'confirm_note', vn: 'confirm_note' }
				,/*10*/{ field: 'note', vn: 'note' }
				,/*11*/{ field: 'status', vn: 'status' }
				,/*12*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*13*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*14*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*15*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*16*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*17*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bill_assign_detail_package', obj9);
      var obj10 = {
            _id: 'action',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'note', vn: 'note' }
				,/*2*/{ field: 'url', vn: 'url' }
				,/*3*/{ field: 'name', vn: 'name' }
				,/*4*/{ field: 'image', vn: 'image' }
				,/*5*/{ field: 'controller_id', vn: 'controller_id' }
				,/*6*/{ field: 'status', vn: 'status' }
				,/*7*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*8*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*9*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*10*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*11*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*12*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('action', obj10);
      var obj11 = {
            _id: 'bill_assign_detail',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'bill_assign_id', vn: 'bill_assign_id' }
				,/*2*/{ field: 'bill_request_id', vn: 'bill_request_id' }
				,/*3*/{ field: 'voucher_id', vn: 'voucher_id' }
				,/*4*/{ field: 'account_id', vn: 'account_id' }
				,/*5*/{ field: 'assign_account_id', vn: 'assign_account_id' }
				,/*6*/{ field: 'create_time', vn: 'create_time' }
				,/*7*/{ field: 'status', vn: 'status' }
				,/*8*/{ field: 'confirm_account_id', vn: 'confirm_account_id' }
				,/*9*/{ field: 'confirm_time', vn: 'confirm_time' }
				,/*10*/{ field: 'confirm_note', vn: 'confirm_note' }
				,/*11*/{ field: 'confirm_status', vn: 'confirm_status' }
				,/*12*/{ field: 'note', vn: 'note' }
				,/*13*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*14*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*15*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*16*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*17*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*18*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bill_assign_detail', obj11);
      var obj12 = {
            _id: 'bill_request',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'account_id', vn: 'account_id' }
				,/*2*/{ field: 'branch_id', vn: 'branch_id' }
				,/*3*/{ field: 'create_time', vn: 'create_time' }
				,/*4*/{ field: 'customer_id', vn: 'customer_id' }
				,/*5*/{ field: 'from_branch_id', vn: 'from_branch_id' }
				,/*6*/{ field: 'from_country_id', vn: 'from_country_id' }
				,/*7*/{ field: 'from_province_id', vn: 'from_province_id' }
				,/*8*/{ field: 'from_district_id', vn: 'from_district_id' }
				,/*9*/{ field: 'from_address', vn: 'from_address' }
				,/*10*/{ field: 'from_fullname', vn: 'from_fullname' }
				,/*11*/{ field: 'from_phone', vn: 'from_phone' }
				,/*12*/{ field: 'from_identity', vn: 'from_identity' }
				,/*13*/{ field: 'from_time', vn: 'from_time' }
				,/*14*/{ field: 'to_branch_id', vn: 'to_branch_id' }
				,/*15*/{ field: 'to_country_id', vn: 'to_country_id' }
				,/*16*/{ field: 'to_province_id', vn: 'to_province_id' }
				,/*17*/{ field: 'to_district_id', vn: 'to_district_id' }
				,/*18*/{ field: 'to_address', vn: 'to_address' }
				,/*19*/{ field: 'to_fullname', vn: 'to_fullname' }
				,/*20*/{ field: 'to_phone', vn: 'to_phone' }
				,/*21*/{ field: 'to_identity', vn: 'to_identity' }
				,/*22*/{ field: 'to_time', vn: 'to_time' }
				,/*23*/{ field: 'service_type_id', vn: 'service_type_id' }
				,/*24*/{ field: 'price_type', vn: 'price_type' }
				,/*25*/{ field: 'barcode', vn: 'barcode' }
				,/*26*/{ field: 'note', vn: 'note' }
				,/*27*/{ field: 'status', vn: 'status' }
				,/*28*/{ field: 'confirm_status', vn: 'confirm_status' }
				,/*29*/{ field: 'map_params', vn: 'map_params' }
				,/*30*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*31*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*32*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*33*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*34*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*35*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bill_request', obj12);
      var obj13 = {
            _id: 'bill_request_deleted',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'bill_request_id', vn: 'bill_request_id' }
				,/*2*/{ field: 'branch_id', vn: 'branch_id' }
				,/*3*/{ field: 'account_id', vn: 'account_id' }
				,/*4*/{ field: 'create_time', vn: 'create_time' }
				,/*5*/{ field: 'note', vn: 'note' }
				,/*6*/{ field: 'status', vn: 'status' }
				,/*7*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*8*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*9*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*10*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*11*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*12*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bill_request_deleted', obj13);
      var obj14 = {
            _id: 'constant',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'content_', vn: 'content_' }
				,/*5*/{ field: 'type', vn: 'type' }
				,/*6*/{ field: 'status', vn: 'status' }
				,/*7*/{ field: 'site_id', vn: 'site_id' }
				,/*8*/{ field: 'module_id', vn: 'module_id' }
				,/*9*/{ field: 'controller_id', vn: 'controller_id' }
				,/*10*/{ field: 'mode', vn: 'mode' }
				,/*11*/{ field: 'value', vn: 'value' }
				,/*12*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*13*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*14*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*15*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*16*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*17*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('constant', obj14);
      var obj15 = {
            _id: 'group_',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'parent_id', vn: 'parent_id' }
				,/*4*/{ field: 'permission', vn: 'permission' }
				,/*5*/{ field: 'note', vn: 'note' }
				,/*6*/{ field: 'status', vn: 'status' }
				,/*7*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*8*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*9*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*10*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*11*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*12*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('group_', obj15);
      var obj16 = {
            _id: 'login',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'account_id', vn: 'account_id' }
				,/*2*/{ field: 'site', vn: 'site' }
				,/*3*/{ field: 'time', vn: 'time' }
				,/*4*/{ field: 'session_id', vn: 'session_id' }
				,/*5*/{ field: 'ip', vn: 'ip' }
				,/*6*/{ field: 'server_ip', vn: 'server_ip' }
				,/*7*/{ field: 'user_agent', vn: 'user_agent' }
				,/*8*/{ field: 'logout_time', vn: 'logout_time' }
				,/*9*/{ field: 'status', vn: 'status' }
				,/*10*/{ field: 'note', vn: 'note' }
				,/*11*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*12*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*13*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*14*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*15*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*16*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('login', obj16);
      var obj17 = {
            _id: 'reason_group',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*5*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*6*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*7*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*8*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*9*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('reason_group', obj17);
      var obj18 = {
            _id: 'store',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'branch_id', vn: 'branch_id' }
				,/*2*/{ field: 'code', vn: 'code' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'status', vn: 'status' }
				,/*5*/{ field: 'account_time', vn: 'account_time' }
				,/*6*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*7*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*8*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*9*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*10*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*11*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('store', obj18);
      var obj19 = {
            _id: 'store_zone',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'store_id', vn: 'store_id' }
				,/*2*/{ field: 'code', vn: 'code' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'status', vn: 'status' }
				,/*5*/{ field: 'account_time', vn: 'account_time' }
				,/*6*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*7*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*8*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*9*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*10*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*11*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('store_zone', obj19);
      var obj20 = {
            _id: 'supplier',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'com_type', vn: 'com_type' }
				,/*3*/{ field: 'name', vn: 'name' }
				,/*4*/{ field: 'esta_time', vn: 'esta_time' }
				,/*5*/{ field: 'abbr_name', vn: 'abbr_name' }
				,/*6*/{ field: 'address', vn: 'address' }
				,/*7*/{ field: 'phone', vn: 'phone' }
				,/*8*/{ field: 'fax', vn: 'fax' }
				,/*9*/{ field: 'email', vn: 'email' }
				,/*10*/{ field: 'website', vn: 'website' }
				,/*11*/{ field: 'tax_code', vn: 'tax_code' }
				,/*12*/{ field: 'note', vn: 'note' }
				,/*13*/{ field: 'birthday_time', vn: 'birthday_time' }
				,/*14*/{ field: 'type', vn: 'type' }
				,/*15*/{ field: 'rep_sign_type', vn: 'rep_sign_type' }
				,/*16*/{ field: 'rep_number', vn: 'rep_number' }
				,/*17*/{ field: 'warning_after_out_bill', vn: 'warning_after_out_bill' }
				,/*18*/{ field: 'warning_max_debt', vn: 'warning_max_debt' }
				,/*19*/{ field: 'debt', vn: 'debt' }
				,/*20*/{ field: 'status', vn: 'status' }
				,/*21*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*22*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*23*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*24*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*25*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*26*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('supplier', obj20);
      var obj21 = {
            _id: 'zone',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'from_branch_id', vn: 'from_branch_id' }
				,/*4*/{ field: 'to_branch_id', vn: 'to_branch_id' }
				,/*5*/{ field: 'km', vn: 'km' }
				,/*6*/{ field: 'note', vn: 'note' }
				,/*7*/{ field: 'type', vn: 'type' }
				,/*8*/{ field: 'status', vn: 'status' }
				,/*9*/{ field: 'account_time', vn: 'account_time' }
				,/*10*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*11*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*12*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*13*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*14*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*15*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('zone', obj21);
      var obj22 = {
            _id: 'zone_group',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'crates_id', vn: 'crates_id' }
				,/*4*/{ field: 'type', vn: 'type' }
				,/*5*/{ field: 'status', vn: 'status' }
				,/*6*/{ field: 'account_time', vn: 'account_time' }
				,/*7*/{ field: 'note', vn: 'note' }
				,/*8*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*9*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*10*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*11*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*12*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*13*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('zone_group', obj22);
      var obj23 = {
            _id: 'branch_group',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'type', vn: 'type' }
				,/*4*/{ field: 'status', vn: 'status' }
				,/*5*/{ field: 'note', vn: 'note' }
				,/*6*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*7*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*8*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*9*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*10*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*11*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('branch_group', obj23);
      var obj24 = {
            _id: 'branch_group_detail',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'branch_group_id', vn: 'branch_group_id' }
				,/*2*/{ field: 'branch_id', vn: 'branch_id' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'status', vn: 'status' }
				,/*5*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*6*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*7*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*8*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*9*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*10*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('branch_group_detail', obj24);
      var obj25 = {
            _id: 'bag_confirm',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'bill_package_id', vn: 'bill_package_id' }
				,/*2*/{ field: 'branch_id', vn: 'branch_id' }
				,/*3*/{ field: 'account_id', vn: 'account_id' }
				,/*4*/{ field: 'time', vn: 'time' }
				,/*5*/{ field: 'note', vn: 'note' }
				,/*6*/{ field: 'status', vn: 'status' }
				,/*7*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*8*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*9*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*10*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*11*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*12*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bag_confirm', obj25);
      var obj26 = {
            _id: 'bill_direction',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'Bill_id', vn: 'Bill_id' }
				,/*2*/{ field: 'account_id', vn: 'account_id' }
				,/*3*/{ field: 'customer_id', vn: 'customer_id' }
				,/*4*/{ field: 'RealTime_Info', vn: 'RealTime_Info' }
				,/*5*/{ field: 'from_country_id', vn: 'from_country_id' }
				,/*6*/{ field: 'from_province_id', vn: 'from_province_id' }
				,/*7*/{ field: 'from_district_id', vn: 'from_district_id' }
				,/*8*/{ field: 'from_ward_id', vn: 'from_ward_id' }
				,/*9*/{ field: 'from_branch_id', vn: 'from_branch_id' }
				,/*10*/{ field: 'from_google_position', vn: 'from_google_position' }
				,/*11*/{ field: 'x1', vn: 'x1' }
				,/*12*/{ field: 'y1', vn: 'y1' }
				,/*13*/{ field: 'to_country_id', vn: 'to_country_id' }
				,/*14*/{ field: 'to_province_id', vn: 'to_province_id' }
				,/*15*/{ field: 'to_district_id', vn: 'to_district_id' }
				,/*16*/{ field: 'to_ward_id', vn: 'to_ward_id' }
				,/*17*/{ field: 'to_branch_id', vn: 'to_branch_id' }
				,/*18*/{ field: 'to_google_position', vn: 'to_google_position' }
				,/*19*/{ field: 'x2', vn: 'x2' }
				,/*20*/{ field: 'y2', vn: 'y2' }
				,/*21*/{ field: 'realkm', vn: 'realkm' }
				,/*22*/{ field: 'googlekm', vn: 'googlekm' }
				,/*23*/{ field: 'timetransferbyprg', vn: 'timetransferbyprg' }
				,/*24*/{ field: 'timetransferreal', vn: 'timetransferreal' }
				,/*25*/{ field: 'findpathbygoogle', vn: 'findpathbygoogle' }
				,/*26*/{ field: 'findpathbyadmin', vn: 'findpathbyadmin' }
				,/*27*/{ field: 'findpathreal', vn: 'findpathreal' }
				,/*28*/{ field: 'note', vn: 'note' }
				,/*29*/{ field: 'status', vn: 'status' }
				,/*30*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*31*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*32*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*33*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*34*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*35*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bill_direction', obj26);
      var obj27 = {
            _id: 'bill_assign',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'type', vn: 'type' }
				,/*2*/{ field: 'barcode', vn: 'barcode' }
				,/*3*/{ field: 'branch_id', vn: 'branch_id' }
				,/*4*/{ field: 'account_id', vn: 'account_id' }
				,/*5*/{ field: 'create_time', vn: 'create_time' }
				,/*6*/{ field: 'for_account_id', vn: 'for_account_id' }
				,/*7*/{ field: 'for_account_time', vn: 'for_account_time' }
				,/*8*/{ field: 'number', vn: 'number' }
				,/*9*/{ field: 'number_confirm', vn: 'number_confirm' }
				,/*10*/{ field: 'note', vn: 'note' }
				,/*11*/{ field: 'status', vn: 'status' }
				,/*12*/{ field: 'record_enable', vn: 'record_enable' }
				,/*13*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*14*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*15*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*16*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*17*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*18*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bill_assign', obj27);
      var obj28 = {
            _id: 'Resource',//table
            _fieldsList: [
                /*0*/{ field: 'ID', vn: 'ID' }
				,/*1*/{ field: 'IDParent', vn: 'IDParent' }
				,/*2*/{ field: 'FormName', vn: 'FormName' }
				,/*3*/{ field: 'ActionName', vn: 'ActionName' }
				,/*4*/{ field: 'Caption', vn: 'Caption' }
				,/*5*/{ field: 'SmallImageIndex', vn: 'SmallImageIndex' }
				,/*6*/{ field: 'LagerImageIndex', vn: 'LagerImageIndex' }
				,/*7*/{ field: 'IconName', vn: 'IconName' }
				,/*8*/{ field: 'Active', vn: 'Active' }
				,/*9*/{ field: 'AppName', vn: 'AppName' }
				,/*10*/{ field: 'Description', vn: 'Description' }
				,/*11*/{ field: 'Priority', vn: 'Priority' }

            ],
        }
         this._dictSelf.set('Resource', obj28);
      var obj29 = {
            _id: 'temp',//table
            _fieldsList: [
                /*0*/{ field: 'Status', vn: 'Status' }
				,/*1*/{ field: 'Compare', vn: 'Compare' }

            ],
        }
         this._dictSelf.set('temp', obj29);
      var obj30 = {
            _id: 'price_target_time',//table
            _fieldsList: [
                /*0*/{ field: 'price_id', vn: 'price_id' }
				,/*1*/{ field: 'zone_group_id', vn: 'zone_group_id' }
				,/*2*/{ field: 'from_hour', vn: 'from_hour' }
				,/*3*/{ field: 'to_hour', vn: 'to_hour' }
				,/*4*/{ field: 'note', vn: 'note' }
				,/*5*/{ field: 'status', vn: 'status' }
				,/*6*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*7*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*8*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*9*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*10*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*11*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('price_target_time', obj30);
      var obj31 = {
            _id: 'price_policy_department_',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'deparment_id', vn: 'deparment_id' }
				,/*2*/{ field: 'price_policy_id', vn: 'price_policy_id' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'status', vn: 'status' }
				,/*5*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*6*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*7*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*8*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*9*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*10*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('price_policy_department_', obj31);
      var obj32 = {
            _id: 'branch',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'district_id', vn: 'district_id' }
				,/*5*/{ field: 'address', vn: 'address' }
				,/*6*/{ field: 'phone', vn: 'phone' }
				,/*7*/{ field: 'fax', vn: 'fax' }
				,/*8*/{ field: 'status', vn: 'status' }
				,/*9*/{ field: 'is_transport_center', vn: 'is_transport_center' }
				,/*10*/{ field: 'company_id', vn: 'company_id' }
				,/*11*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*12*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*13*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*14*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*15*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }
				,/*16*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }

            ],
        }
         this._dictSelf.set('branch', obj32);
      var obj33 = {
            _id: 'company',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'district_id', vn: 'district_id' }
				,/*5*/{ field: 'address', vn: 'address' }
				,/*6*/{ field: 'phone', vn: 'phone' }
				,/*7*/{ field: 'fax', vn: 'fax' }
				,/*8*/{ field: 'status', vn: 'status' }
				,/*9*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*10*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*11*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*12*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*13*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }
				,/*14*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }

            ],
        }
         this._dictSelf.set('company', obj33);
      var obj34 = {
            _id: 'price_policy',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'start_time', vn: 'start_time' }
				,/*4*/{ field: 'end_time', vn: 'end_time' }
				,/*5*/{ field: 'file_', vn: 'file_' }
				,/*6*/{ field: 'note', vn: 'note' }
				,/*7*/{ field: 'status', vn: 'status' }
				,/*8*/{ field: 'approve_account_id', vn: 'approve_account_id' }
				,/*9*/{ field: 'approve_account_time', vn: 'approve_account_time' }
				,/*10*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*11*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*12*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*13*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*14*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*15*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('price_policy', obj34);
      var obj35 = {
            _id: 'zone_category',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'status', vn: 'status' }
				,/*5*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*6*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*7*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*8*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*9*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }
				,/*10*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }

            ],
        }
         this._dictSelf.set('zone_category', obj35);
      var obj36 = {
            _id: 'pay_type',//table
            _fieldsList: [
                /*0*/{ field: 'ID', vn: 'ID' }
				,/*1*/{ field: 'Name', vn: 'Name' }
				,/*2*/{ field: 'status', vn: 'status' }
				,/*3*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*4*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*5*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*6*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*7*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }
				,/*8*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }

            ],
        }
         this._dictSelf.set('pay_type', obj36);
      var obj37 = {
            _id: 'customer_to_customer',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'from_cus_id', vn: 'from_cus_id' }
				,/*2*/{ field: 'to_cus_id', vn: 'to_cus_id' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'status', vn: 'status' }
				,/*5*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*6*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*7*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*8*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*9*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*10*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('customer_to_customer', obj37);
      var obj38 = {
            _id: 'product_unit',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'status', vn: 'status' }
				,/*5*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*6*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*7*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*8*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*9*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }
				,/*10*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }

            ],
        }
         this._dictSelf.set('product_unit', obj38);
      var obj39 = {
            _id: 'price',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'price_policy_id', vn: 'price_policy_id' }
				,/*2*/{ field: 'price_base_id', vn: 'price_base_id' }
				,/*3*/{ field: 'code', vn: 'code' }
				,/*4*/{ field: 'name', vn: 'name' }
				,/*5*/{ field: 'note', vn: 'note' }
				,/*6*/{ field: 'type', vn: 'type' }
				,/*7*/{ field: 'fkg', vn: 'fkg' }
				,/*8*/{ field: 'fkg_postage', vn: 'fkg_postage' }
				,/*9*/{ field: 'fkg_weight', vn: 'fkg_weight' }
				,/*10*/{ field: 'start_time', vn: 'start_time' }
				,/*11*/{ field: 'end_time', vn: 'end_time' }
				,/*12*/{ field: 'status', vn: 'status' }
				,/*13*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*14*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*15*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*16*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*17*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*18*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('price', obj39);
      var obj40 = {
            _id: 'category_group',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'name', vn: 'name' }
				,/*2*/{ field: 'note', vn: 'note' }
				,/*3*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*4*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*5*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*6*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*7*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*8*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('category_group', obj40);
      var obj41 = {
            _id: 'category',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'category_group_id', vn: 'category_group_id' }
				,/*2*/{ field: 'id_value', vn: 'id_value' }
				,/*3*/{ field: 'code', vn: 'code' }
				,/*4*/{ field: 'name', vn: 'name' }
				,/*5*/{ field: 'note', vn: 'note' }
				,/*6*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*7*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*8*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*9*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*10*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*11*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('category', obj41);
      var obj42 = {
            _id: 'price_level',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'level_number', vn: 'level_number' }
				,/*4*/{ field: 'note', vn: 'note' }
				,/*5*/{ field: 'status', vn: 'status' }
				,/*6*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*7*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*8*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*9*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*10*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }
				,/*11*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }

            ],
        }
         this._dictSelf.set('price_level', obj42);
      var obj43 = {
            _id: 'price_base_detail',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'price_base_id', vn: 'price_base_id' }
				,/*2*/{ field: 'product_id', vn: 'product_id' }
				,/*3*/{ field: 'product_unit', vn: 'product_unit' }
				,/*4*/{ field: 'cal_type', vn: 'cal_type' }
				,/*5*/{ field: 'value', vn: 'value' }
				,/*6*/{ field: 'per_value', vn: 'per_value' }
				,/*7*/{ field: 'postage', vn: 'postage' }
				,/*8*/{ field: 'postage_extra', vn: 'postage_extra' }
				,/*9*/{ field: 'postage_type', vn: 'postage_type' }
				,/*10*/{ field: 'note', vn: 'note' }
				,/*11*/{ field: 'status', vn: 'status' }
				,/*12*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*13*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*14*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*15*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*16*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*17*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('price_base_detail', obj43);
      var obj44 = {
            _id: 'price_customer',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'customer_id', vn: 'customer_id' }
				,/*2*/{ field: 'zone_category_service_type_id', vn: 'zone_category_service_type_id' }
				,/*3*/{ field: 'zone_customer_number', vn: 'zone_customer_number' }
				,/*4*/{ field: 'note', vn: 'note' }
				,/*5*/{ field: 'status', vn: 'status' }
				,/*6*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*7*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*8*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*9*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*10*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }
				,/*11*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }

            ],
        }
         this._dictSelf.set('price_customer', obj44);
      var obj45 = {
            _id: 'vehicle_type',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'status', vn: 'status' }
				,/*5*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*6*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*7*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*8*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*9*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }
				,/*10*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }

            ],
        }
         this._dictSelf.set('vehicle_type', obj45);
      var obj46 = {
            _id: 'department_to_deparment',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'from_department_id', vn: 'from_department_id' }
				,/*2*/{ field: 'to_department_id', vn: 'to_department_id' }
				,/*3*/{ field: 'service_id', vn: 'service_id' }
				,/*4*/{ field: 'vehicle_type_id', vn: 'vehicle_type_id' }
				,/*5*/{ field: 'fix_km', vn: 'fix_km' }
				,/*6*/{ field: 'fix_Hour', vn: 'fix_Hour' }
				,/*7*/{ field: 'note', vn: 'note' }
				,/*8*/{ field: 'status', vn: 'status' }
				,/*9*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*10*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*11*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*12*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*13*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }
				,/*14*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }

            ],
        }
         this._dictSelf.set('department_to_deparment', obj46);
      var obj47 = {
            _id: 'add_service',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'service_type_id', vn: 'service_type_id' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'code', vn: 'code' }
				,/*4*/{ field: 'type', vn: 'type' }
				,/*5*/{ field: 'count_type', vn: 'count_type' }
				,/*6*/{ field: 'object_type', vn: 'object_type' }
				,/*7*/{ field: 'value', vn: 'value' }
				,/*8*/{ field: 'status', vn: 'status' }
				,/*9*/{ field: 'note', vn: 'note' }
				,/*10*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*11*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*12*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*13*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*14*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*15*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('add_service', obj47);
      var obj48 = {
            _id: 'customer_profile',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'customer_id', vn: 'customer_id' }
				,/*2*/{ field: 'profile_id', vn: 'profile_id' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*5*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*6*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*7*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*8*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*9*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('customer_profile', obj48);
      var obj49 = {
            _id: 'department',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'branch_id', vn: 'branch_id' }
				,/*2*/{ field: 'parent_id', vn: 'parent_id' }
				,/*3*/{ field: 'code', vn: 'code' }
				,/*4*/{ field: 'name', vn: 'name' }
				,/*5*/{ field: 'address', vn: 'address' }
				,/*6*/{ field: 'district_id', vn: 'district_id' }
				,/*7*/{ field: 'province_id', vn: 'province_id' }
				,/*8*/{ field: 'phone', vn: 'phone' }
				,/*9*/{ field: 'email', vn: 'email' }
				,/*10*/{ field: 'fax', vn: 'fax' }
				,/*11*/{ field: 'mission', vn: 'mission' }
				,/*12*/{ field: 'status', vn: 'status' }
				,/*13*/{ field: 'manage_account_id', vn: 'manage_account_id' }
				,/*14*/{ field: 'note', vn: 'note' }
				,/*15*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*16*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*17*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*18*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*19*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }
				,/*20*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }

            ],
        }
         this._dictSelf.set('department', obj49);
      var obj50 = {
            _id: 'binaryTest',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'Name', vn: 'Name' }

            ],
        }
         this._dictSelf.set('binaryTest', obj50);
      var obj51 = {
            _id: 'bill_add_service',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'bill_package_id', vn: 'bill_package_id' }
				,/*2*/{ field: 'add_service_id', vn: 'add_service_id' }
				,/*3*/{ field: 'name', vn: 'name' }
				,/*4*/{ field: 'code', vn: 'code' }
				,/*5*/{ field: 'type', vn: 'type' }
				,/*6*/{ field: 'value', vn: 'value' }
				,/*7*/{ field: 'cal_value', vn: 'cal_value' }
				,/*8*/{ field: 'count', vn: 'count' }
				,/*9*/{ field: 'postage', vn: 'postage' }
				,/*10*/{ field: 'note', vn: 'note' }
				,/*11*/{ field: 'status', vn: 'status' }
				,/*12*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*13*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*14*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*15*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*16*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*17*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bill_add_service', obj51);
      var obj52 = {
            _id: 'bill_package_image',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'bill_package_id', vn: 'bill_package_id' }
				,/*2*/{ field: 'url', vn: 'url' }
				,/*3*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*4*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*5*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*6*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*7*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*8*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bill_package_image', obj52);
      var obj53 = {
            _id: 'profile',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'customer_id', vn: 'customer_id' }
				,/*2*/{ field: 'type_id', vn: 'type_id' }
				,/*3*/{ field: 'name', vn: 'name' }
				,/*4*/{ field: 'email', vn: 'email' }
				,/*5*/{ field: 'phone', vn: 'phone' }
				,/*6*/{ field: 'position', vn: 'position' }
				,/*7*/{ field: 'birthday_time', vn: 'birthday_time' }
				,/*8*/{ field: 'note', vn: 'note' }
				,/*9*/{ field: 'address', vn: 'address' }
				,/*10*/{ field: 'id_number', vn: 'id_number' }
				,/*11*/{ field: 'yahoo', vn: 'yahoo' }
				,/*12*/{ field: 'skype', vn: 'skype' }
				,/*13*/{ field: 'facebook', vn: 'facebook' }
				,/*14*/{ field: 'gmail', vn: 'gmail' }
				,/*15*/{ field: 'department', vn: 'department' }
				,/*16*/{ field: 'sign_type', vn: 'sign_type' }
				,/*17*/{ field: 'status', vn: 'status' }
				,/*18*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*19*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*20*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*21*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*22*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*23*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('profile', obj53);
      var obj54 = {
            _id: 'sms',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'department_id', vn: 'department_id' }
				,/*2*/{ field: 'puid', vn: 'puid' }
				,/*3*/{ field: 'fullname', vn: 'fullname' }
				,/*4*/{ field: 'phone', vn: 'phone' }
				,/*5*/{ field: 'brandname', vn: 'brandname' }
				,/*6*/{ field: 'message', vn: 'message' }
				,/*7*/{ field: 'send_time', vn: 'send_time' }
				,/*8*/{ field: 'send_account_id', vn: 'send_account_id' }
				,/*9*/{ field: 'note', vn: 'note' }
				,/*10*/{ field: 'message_id', vn: 'message_id' }
				,/*11*/{ field: 'error', vn: 'error' }
				,/*12*/{ field: 'error_description', vn: 'error_description' }
				,/*13*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*14*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*15*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*16*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*17*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*18*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('sms', obj54);
      var obj55 = {
            _id: 'receipt_bill_bill_backup',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'receipt_id', vn: 'receipt_id' }
				,/*2*/{ field: 'bill_id', vn: 'bill_id' }
				,/*3*/{ field: 'bill_backup_id', vn: 'bill_backup_id' }
				,/*4*/{ field: 'note', vn: 'note' }
				,/*5*/{ field: 'status', vn: 'status' }
				,/*6*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*7*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*8*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*9*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*10*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*11*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('receipt_bill_bill_backup', obj55);
      var obj56 = {
            _id: 'bill_f3_detail',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'bill_f3_id', vn: 'bill_f3_id' }
				,/*2*/{ field: 'bill_package_id', vn: 'bill_package_id' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'go_time', vn: 'go_time' }
				,/*5*/{ field: 'go_user_id_check', vn: 'go_user_id_check' }
				,/*6*/{ field: 'arrival_time', vn: 'arrival_time' }
				,/*7*/{ field: 'arrival_user_id_check', vn: 'arrival_user_id_check' }
				,/*8*/{ field: 'status', vn: 'status' }
				,/*9*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*10*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*11*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*12*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*13*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*14*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bill_f3_detail', obj56);
      var obj57 = {
            _id: 'reason',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'group_id', vn: 'group_id' }
				,/*2*/{ field: 'code', vn: 'code' }
				,/*3*/{ field: 'name', vn: 'name' }
				,/*4*/{ field: 'descript', vn: 'descript' }
				,/*5*/{ field: 'type', vn: 'type' }
				,/*6*/{ field: 'note', vn: 'note' }
				,/*7*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*8*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*9*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*10*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*11*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*12*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('reason', obj57);
      var obj58 = {
            _id: 'reason_add_service',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'reason_id', vn: 'reason_id' }
				,/*2*/{ field: 'add_service_id', vn: 'add_service_id' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*5*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*6*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*7*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*8*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*9*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('reason_add_service', obj58);
      var obj59 = {
            _id: 'shelf',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'type', vn: 'type' }
				,/*2*/{ field: 'department_id', vn: 'department_id' }
				,/*3*/{ field: 'code', vn: 'code' }
				,/*4*/{ field: 'name', vn: 'name' }
				,/*5*/{ field: 'note', vn: 'note' }
				,/*6*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*7*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*8*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*9*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*10*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*11*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('shelf', obj59);
      var obj60 = {
            _id: 'account',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'username', vn: 'username' }
				,/*2*/{ field: 'password', vn: 'password' }
				,/*3*/{ field: 'fullname', vn: 'fullname' }
				,/*4*/{ field: 'department_id', vn: 'department_id' }
				,/*5*/{ field: 'status', vn: 'status' }
				,/*6*/{ field: 'login_time', vn: 'login_time' }
				,/*7*/{ field: 'logout_time', vn: 'logout_time' }
				,/*8*/{ field: 'note', vn: 'note' }
				,/*9*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*10*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*11*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*12*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*13*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*14*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('account', obj60);
      var obj61 = {
            _id: 'receipt_add_service',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'receipt_id', vn: 'receipt_id' }
				,/*2*/{ field: 'add_service_id', vn: 'add_service_id' }
				,/*3*/{ field: 'type', vn: 'type' }
				,/*4*/{ field: 'value', vn: 'value' }
				,/*5*/{ field: 'cal_value', vn: 'cal_value' }
				,/*6*/{ field: 'postage', vn: 'postage' }
				,/*7*/{ field: 'count', vn: 'count' }
				,/*8*/{ field: 'note', vn: 'note' }
				,/*9*/{ field: 'status', vn: 'status' }
				,/*10*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*11*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*12*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*13*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*14*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*15*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('receipt_add_service', obj61);
      var obj62 = {
            _id: 'price_department_to_department_zone',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'zone_category_id', vn: 'zone_category_id' }
				,/*2*/{ field: 'department_to_department_id', vn: 'department_to_department_id' }
				,/*3*/{ field: 'price_id', vn: 'price_id' }
				,/*4*/{ field: 'is_price_cal', vn: 'is_price_cal' }
				,/*5*/{ field: 'is_group_go', vn: 'is_group_go' }
				,/*6*/{ field: 'is_group_receive', vn: 'is_group_receive' }
				,/*7*/{ field: 'note', vn: 'note' }
				,/*8*/{ field: 'status', vn: 'status' }
				,/*9*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*10*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*11*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*12*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*13*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }
				,/*14*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }

            ],
        }
         this._dictSelf.set('price_department_to_department_zone', obj62);
      var obj63 = {
            _id: 'customer_contract',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'customer_id', vn: 'customer_id' }
				,/*2*/{ field: 'contract_code', vn: 'contract_code' }
				,/*3*/{ field: 'from_date', vn: 'from_date' }
				,/*4*/{ field: 'to_date', vn: 'to_date' }
				,/*5*/{ field: 'our_sign_name', vn: 'our_sign_name' }
				,/*6*/{ field: 'customer_sign_name', vn: 'customer_sign_name' }
				,/*7*/{ field: 'note', vn: 'note' }
				,/*8*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*9*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*10*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*11*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*12*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*13*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('customer_contract', obj63);
      var obj64 = {
            _id: 'service_type',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'formular_convert', vn: 'formular_convert' }
				,/*4*/{ field: 'note', vn: 'note' }
				,/*5*/{ field: 'status', vn: 'status' }
				,/*6*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*7*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*8*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*9*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*10*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }
				,/*11*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }

            ],
        }
         this._dictSelf.set('service_type', obj64);
      var obj65 = {
            _id: 'price_base',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'service_type_id', vn: 'service_type_id' }
				,/*2*/{ field: 'code', vn: 'code' }
				,/*3*/{ field: 'name', vn: 'name' }
				,/*4*/{ field: 'start_time', vn: 'start_time' }
				,/*5*/{ field: 'end_time', vn: 'end_time' }
				,/*6*/{ field: 'note', vn: 'note' }
				,/*7*/{ field: 'status', vn: 'status' }
				,/*8*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*9*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*10*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*11*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*12*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*13*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('price_base', obj65);
      var obj66 = {
            _id: 'zone_category_service_type',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'zone_category_id', vn: 'zone_category_id' }
				,/*2*/{ field: 'service_type_id', vn: 'service_type_id' }
				,/*3*/{ field: 'zone_number', vn: 'zone_number' }
				,/*4*/{ field: 'note', vn: 'note' }
				,/*5*/{ field: 'status', vn: 'status' }
				,/*6*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*7*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*8*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*9*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*10*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }
				,/*11*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }

            ],
        }
         this._dictSelf.set('zone_category_service_type', obj66);
      var obj67 = {
            _id: 'receipt_bill_package',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'receipt_id', vn: 'receipt_id' }
				,/*2*/{ field: 'bill_assign_id', vn: 'bill_assign_id' }
				,/*3*/{ field: 'old_bill_package_id', vn: 'old_bill_package_id' }
				,/*4*/{ field: 'new_bill_package_id', vn: 'new_bill_package_id' }
				,/*5*/{ field: 'note', vn: 'note' }
				,/*6*/{ field: 'status', vn: 'status' }
				,/*7*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*8*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*9*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*10*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*11*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*12*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('receipt_bill_package', obj67);
      var obj68 = {
            _id: 'vehicle_shifting_order_detail',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'vehicle_shifting_order_id', vn: 'vehicle_shifting_order_id' }
				,/*2*/{ field: 'bill_f3_id', vn: 'bill_f3_id' }
				,/*3*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*4*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*5*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*6*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*7*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*8*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('vehicle_shifting_order_detail', obj68);
      var obj69 = {
            _id: 'vehicle_shifting_order',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'provider_id', vn: 'provider_id' }
				,/*2*/{ field: 'vehicle_id', vn: 'vehicle_id' }
				,/*3*/{ field: 'provider_shifting_order_id', vn: 'provider_shifting_order_id' }
				,/*4*/{ field: 'way_id', vn: 'way_id' }
				,/*5*/{ field: 'route_id', vn: 'route_id' }
				,/*6*/{ field: 'driver1_id', vn: 'driver1_id' }
				,/*7*/{ field: 'driver1_name', vn: 'driver1_name' }
				,/*8*/{ field: 'driver1_phone', vn: 'driver1_phone' }
				,/*9*/{ field: 'driver2_id', vn: 'driver2_id' }
				,/*10*/{ field: 'driver2_name', vn: 'driver2_name' }
				,/*11*/{ field: 'driver2_phone', vn: 'driver2_phone' }
				,/*12*/{ field: 'guide_name', vn: 'guide_name' }
				,/*13*/{ field: 'guide_phone', vn: 'guide_phone' }
				,/*14*/{ field: 'note', vn: 'note' }
				,/*15*/{ field: 'shifting_date', vn: 'shifting_date' }
				,/*16*/{ field: 'start_time_id', vn: 'start_time_id' }
				,/*17*/{ field: 'start_time', vn: 'start_time' }
				,/*18*/{ field: 'finish_time', vn: 'finish_time' }
				,/*19*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*20*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*21*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*22*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*23*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*24*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('vehicle_shifting_order', obj69);
      var obj70 = {
            _id: 'bill_f3',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'from_department_id', vn: 'from_department_id' }
				,/*2*/{ field: 'to_department_id', vn: 'to_department_id' }
				,/*3*/{ field: 'final_department_id', vn: 'final_department_id' }
				,/*4*/{ field: 'message_code', vn: 'message_code' }
				,/*5*/{ field: 'go_time', vn: 'go_time' }
				,/*6*/{ field: 'go_user_id', vn: 'go_user_id' }
				,/*7*/{ field: 'arrival_time', vn: 'arrival_time' }
				,/*8*/{ field: 'arrival_user_id', vn: 'arrival_user_id' }
				,/*9*/{ field: 'code', vn: 'code' }
				,/*10*/{ field: 'weight', vn: 'weight' }
				,/*11*/{ field: 'note', vn: 'note' }
				,/*12*/{ field: 'supplier_id', vn: 'supplier_id' }
				,/*13*/{ field: 'plate_number', vn: 'plate_number' }
				,/*14*/{ field: 'driver_name', vn: 'driver_name' }
				,/*15*/{ field: 'reciever_name', vn: 'reciever_name' }
				,/*16*/{ field: 'attendant', vn: 'attendant' }
				,/*17*/{ field: 'barcode', vn: 'barcode' }
				,/*18*/{ field: 'status', vn: 'status' }
				,/*19*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*20*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*21*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*22*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*23*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*24*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bill_f3', obj70);
      var obj71 = {
            _id: 'customer',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'com_type', vn: 'com_type' }
				,/*3*/{ field: 'name', vn: 'name' }
				,/*4*/{ field: 'esta_time', vn: 'esta_time' }
				,/*5*/{ field: 'abbr_name', vn: 'abbr_name' }
				,/*6*/{ field: 'address', vn: 'address' }
				,/*7*/{ field: 'phone', vn: 'phone' }
				,/*8*/{ field: 'fax', vn: 'fax' }
				,/*9*/{ field: 'identity_id', vn: 'identity_id' }
				,/*10*/{ field: 'ward', vn: 'ward' }
				,/*11*/{ field: 'district_id', vn: 'district_id' }
				,/*12*/{ field: 'province_id', vn: 'province_id' }
				,/*13*/{ field: 'email', vn: 'email' }
				,/*14*/{ field: 'website', vn: 'website' }
				,/*15*/{ field: 'tax_code', vn: 'tax_code' }
				,/*16*/{ field: 'note', vn: 'note' }
				,/*17*/{ field: 'birthday_time', vn: 'birthday_time' }
				,/*18*/{ field: 'type', vn: 'type' }
				,/*19*/{ field: 'rep_sign_type', vn: 'rep_sign_type' }
				,/*20*/{ field: 'rep_number', vn: 'rep_number' }
				,/*21*/{ field: 'warning_after_out_bill', vn: 'warning_after_out_bill' }
				,/*22*/{ field: 'warning_max_debt', vn: 'warning_max_debt' }
				,/*23*/{ field: 'debt', vn: 'debt' }
				,/*24*/{ field: 'pay_type_id', vn: 'pay_type_id' }
				,/*25*/{ field: 'status', vn: 'status' }
				,/*26*/{ field: 'owner_account_id', vn: 'owner_account_id' }
				,/*27*/{ field: 'district', vn: 'district' }
				,/*28*/{ field: 'province', vn: 'province' }
				,/*29*/{ field: 'country', vn: 'country' }
				,/*30*/{ field: 'address_is_point', vn: 'address_is_point' }
				,/*31*/{ field: 'map_params', vn: 'map_params' }
				,/*32*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*33*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*34*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*35*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*36*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }
				,/*37*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }

            ],
        }
         this._dictSelf.set('customer', obj71);
      var obj72 = {
            _id: 'lyt_PT_Manager',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'GroupId', vn: 'GroupId' }
				,/*2*/{ field: 'Type', vn: 'Type' }
				,/*3*/{ field: 'Code', vn: 'Code' }
				,/*4*/{ field: 'UserName', vn: 'UserName' }
				,/*5*/{ field: 'Password', vn: 'Password' }
				,/*6*/{ field: 'Name', vn: 'Name' }
				,/*7*/{ field: 'FullName', vn: 'FullName' }
				,/*8*/{ field: 'PrimaryPhone', vn: 'PrimaryPhone' }
				,/*9*/{ field: 'PrimaryEmail', vn: 'PrimaryEmail' }
				,/*10*/{ field: 'Address', vn: 'Address' }
				,/*11*/{ field: 'ProvinceId', vn: 'ProvinceId' }
				,/*12*/{ field: 'AreaCode', vn: 'AreaCode' }
				,/*13*/{ field: 'VanPhongId', vn: 'VanPhongId' }
				,/*14*/{ field: 'TeamId', vn: 'TeamId' }
				,/*15*/{ field: 'Status', vn: 'Status' }
				,/*16*/{ field: 'IsPrgCreatedDate', vn: 'IsPrgCreatedDate' }
				,/*17*/{ field: 'IsPrgUpdatedDate', vn: 'IsPrgUpdatedDate' }
				,/*18*/{ field: 'IsPrgCreatedUserId', vn: 'IsPrgCreatedUserId' }
				,/*19*/{ field: 'IsPrgUpdatedUserId', vn: 'IsPrgUpdatedUserId' }

            ],
        }
         this._dictSelf.set('lyt_PT_Manager', obj72);
      var obj73 = {
            _id: 'PT_Group',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Type', vn: 'Type' }
				,/*2*/{ field: 'Code', vn: 'Code' }
				,/*3*/{ field: 'Name', vn: 'Name' }
				,/*4*/{ field: 'Description', vn: 'Description' }
				,/*5*/{ field: 'Color', vn: 'Color' }
				,/*6*/{ field: 'Status', vn: 'Status' }
				,/*7*/{ field: 'IsPrgCreatedDate', vn: 'IsPrgCreatedDate' }
				,/*8*/{ field: 'IsPrgUpdatedDate', vn: 'IsPrgUpdatedDate' }
				,/*9*/{ field: 'IsPrgCreatedUserId', vn: 'IsPrgCreatedUserId' }
				,/*10*/{ field: 'IsPrgUpdatedUserId', vn: 'IsPrgUpdatedUserId' }

            ],
        }
         this._dictSelf.set('PT_Group', obj73);
      var obj74 = {
            _id: 'PT_Group_Permission',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'GroupId', vn: 'GroupId' }
				,/*2*/{ field: 'PermissionId', vn: 'PermissionId' }
				,/*3*/{ field: 'Type', vn: 'Type' }
				,/*4*/{ field: 'Code', vn: 'Code' }
				,/*5*/{ field: 'Name', vn: 'Name' }
				,/*6*/{ field: 'Description', vn: 'Description' }
				,/*7*/{ field: 'Status', vn: 'Status' }
				,/*8*/{ field: 'IsPrgCreatedDate', vn: 'IsPrgCreatedDate' }
				,/*9*/{ field: 'IsPrgUpdatedDate', vn: 'IsPrgUpdatedDate' }
				,/*10*/{ field: 'IsPrgCreatedUserId', vn: 'IsPrgCreatedUserId' }
				,/*11*/{ field: 'IsPrgUpdatedUserId', vn: 'IsPrgUpdatedUserId' }

            ],
        }
         this._dictSelf.set('PT_Group_Permission', obj74);
      var obj75 = {
            _id: 'PT_Permission',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Type', vn: 'Type' }
				,/*2*/{ field: 'Code', vn: 'Code' }
				,/*3*/{ field: 'Name', vn: 'Name' }
				,/*4*/{ field: 'Module', vn: 'Module' }
				,/*5*/{ field: 'Description', vn: 'Description' }
				,/*6*/{ field: 'Status', vn: 'Status' }
				,/*7*/{ field: 'IsPrgCreatedDate', vn: 'IsPrgCreatedDate' }
				,/*8*/{ field: 'IsPrgUpdatedDate', vn: 'IsPrgUpdatedDate' }
				,/*9*/{ field: 'IsPrgCreatedUserId', vn: 'IsPrgCreatedUserId' }
				,/*10*/{ field: 'IsPrgUpdatedUserId', vn: 'IsPrgUpdatedUserId' }

            ],
        }
         this._dictSelf.set('PT_Permission', obj75);
      var obj76 = {
            _id: 'PT_User_Permission',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'UserId', vn: 'UserId' }
				,/*2*/{ field: 'PermissionId', vn: 'PermissionId' }
				,/*3*/{ field: 'Type', vn: 'Type' }
				,/*4*/{ field: 'Code', vn: 'Code' }
				,/*5*/{ field: 'Name', vn: 'Name' }
				,/*6*/{ field: 'Description', vn: 'Description' }
				,/*7*/{ field: 'Status', vn: 'Status' }
				,/*8*/{ field: 'IsPrgCreatedDate', vn: 'IsPrgCreatedDate' }
				,/*9*/{ field: 'IsPrgUpdatedDate', vn: 'IsPrgUpdatedDate' }
				,/*10*/{ field: 'IsPrgCreatedUserId', vn: 'IsPrgCreatedUserId' }
				,/*11*/{ field: 'IsPrgUpdatedUserId', vn: 'IsPrgUpdatedUserId' }

            ],
        }
         this._dictSelf.set('PT_User_Permission', obj76);
      var obj77 = {
            _id: 'price_customer_extra',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'price_id', vn: 'price_id' }
				,/*2*/{ field: 'customer_id', vn: 'customer_id' }
				,/*3*/{ field: 'zone_category_service_type_id', vn: 'zone_category_service_type_id' }
				,/*4*/{ field: 'price_base_detail_id', vn: 'price_base_detail_id' }
				,/*5*/{ field: 'price_customer_id', vn: 'price_customer_id' }
				,/*6*/{ field: 'zone_customer_number_extra', vn: 'zone_customer_number_extra' }
				,/*7*/{ field: 'note', vn: 'note' }
				,/*8*/{ field: 'status', vn: 'status' }
				,/*9*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*10*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*11*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*12*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*13*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*14*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('price_customer_extra', obj77);
      var obj78 = {
            _id: 'bill_package',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'bill_id', vn: 'bill_id' }
				,/*2*/{ field: 'department_current_id', vn: 'department_current_id' }
				,/*3*/{ field: 'no', vn: 'no' }
				,/*4*/{ field: 'barcode', vn: 'barcode' }
				,/*5*/{ field: 'quantity_total', vn: 'quantity_total' }
				,/*6*/{ field: 'store_zone_id', vn: 'store_zone_id' }
				,/*7*/{ field: 'go_time', vn: 'go_time' }
				,/*8*/{ field: 'arrival_note', vn: 'arrival_note' }
				,/*9*/{ field: 'arrival_time', vn: 'arrival_time' }
				,/*10*/{ field: 'parent_id', vn: 'parent_id' }
				,/*11*/{ field: 'product_id', vn: 'product_id' }
				,/*12*/{ field: 'package_description', vn: 'package_description' }
				,/*13*/{ field: 'product_l', vn: 'product_l' }
				,/*14*/{ field: 'product_w', vn: 'product_w' }
				,/*15*/{ field: 'product_h', vn: 'product_h' }
				,/*16*/{ field: 'product_weight', vn: 'product_weight' }
				,/*17*/{ field: 'product_convert_weight', vn: 'product_convert_weight' }
				,/*18*/{ field: 'product_value', vn: 'product_value' }
				,/*19*/{ field: 'cost_main', vn: 'cost_main' }
				,/*20*/{ field: 'cost_add', vn: 'cost_add' }
				,/*21*/{ field: 'receive_fullname', vn: 'receive_fullname' }
				,/*22*/{ field: 'receive_identity', vn: 'receive_identity' }
				,/*23*/{ field: 'receive_identity_date', vn: 'receive_identity_date' }
				,/*24*/{ field: 'receive_identity_place', vn: 'receive_identity_place' }
				,/*25*/{ field: 'receive_phone', vn: 'receive_phone' }
				,/*26*/{ field: 'receive_note', vn: 'receive_note' }
				,/*27*/{ field: 'receive_time', vn: 'receive_time' }
				,/*28*/{ field: 'receive_user_id', vn: 'receive_user_id' }
				,/*29*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*30*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*31*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*32*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*33*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*34*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bill_package', obj78);
      var obj79 = {
            _id: 'z_test_cal_data',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'dep_to_dep_id_in', vn: 'dep_to_dep_id_in' }
				,/*2*/{ field: 'service_type_id_in', vn: 'service_type_id_in' }
				,/*3*/{ field: 'from_dep_id', vn: 'from_dep_id' }
				,/*4*/{ field: 'price_base_id', vn: 'price_base_id' }
				,/*5*/{ field: 'note', vn: 'note' }
				,/*6*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }

            ],
        }
         this._dictSelf.set('z_test_cal_data', obj79);
      var obj80 = {
            _id: 'z_test_cal_price',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'from_dep_id_in', vn: 'from_dep_id_in' }
				,/*2*/{ field: 'to_dep_id_in', vn: 'to_dep_id_in' }
				,/*3*/{ field: 'dep_to_dep_id_in', vn: 'dep_to_dep_id_in' }
				,/*4*/{ field: 'service_type_id_in', vn: 'service_type_id_in' }
				,/*5*/{ field: 'weight_cal_in', vn: 'weight_cal_in' }
				,/*6*/{ field: 'price_base_detail_id_in', vn: 'price_base_detail_id_in' }
				,/*7*/{ field: 'zone_category_id_out', vn: 'zone_category_id_out' }
				,/*8*/{ field: 'customer_id_in', vn: 'customer_id_in' }
				,/*9*/{ field: 'price_id_out', vn: 'price_id_out' }
				,/*10*/{ field: 'price_base_id_out', vn: 'price_base_id_out' }
				,/*11*/{ field: 'postage_out', vn: 'postage_out' }
				,/*12*/{ field: 'note', vn: 'note' }
				,/*13*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }

            ],
        }
         this._dictSelf.set('z_test_cal_price', obj80);
      var obj81 = {
            _id: 'receipt',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'bill_id', vn: 'bill_id' }
				,/*2*/{ field: 'reason_id', vn: 'reason_id' }
				,/*3*/{ field: 'reason_group', vn: 'reason_group' }
				,/*4*/{ field: 'reason_name', vn: 'reason_name' }
				,/*5*/{ field: 'reason_type', vn: 'reason_type' }
				,/*6*/{ field: 'from_fullname', vn: 'from_fullname' }
				,/*7*/{ field: 'from_identity', vn: 'from_identity' }
				,/*8*/{ field: 'from_identity_date', vn: 'from_identity_date' }
				,/*9*/{ field: 'from_identity_place', vn: 'from_identity_place' }
				,/*10*/{ field: 'note', vn: 'note' }
				,/*11*/{ field: 'responsibility_account_id', vn: 'responsibility_account_id' }
				,/*12*/{ field: 'resonsibility_name', vn: 'resonsibility_name' }
				,/*13*/{ field: 'witness_name', vn: 'witness_name' }
				,/*14*/{ field: 'approve_name', vn: 'approve_name' }
				,/*15*/{ field: 'approve_account_id', vn: 'approve_account_id' }
				,/*16*/{ field: 'approve_account_time', vn: 'approve_account_time' }
				,/*17*/{ field: 'cost', vn: 'cost' }
				,/*18*/{ field: 'original_document', vn: 'original_document' }
				,/*19*/{ field: 'original_document_file', vn: 'original_document_file' }
				,/*20*/{ field: 'create_department_id', vn: 'create_department_id' }
				,/*21*/{ field: 'resolved_account_id', vn: 'resolved_account_id' }
				,/*22*/{ field: 'resolved_note', vn: 'resolved_note' }
				,/*23*/{ field: 'resolved_comment', vn: 'resolved_comment' }
				,/*24*/{ field: 'resolved_cost', vn: 'resolved_cost' }
				,/*25*/{ field: 'resolved_compensation', vn: 'resolved_compensation' }
				,/*26*/{ field: 'resolved_account_time', vn: 'resolved_account_time' }
				,/*27*/{ field: 'status', vn: 'status' }
				,/*28*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*29*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*30*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*31*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*32*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*33*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('receipt', obj81);
      var obj82 = {
            _id: 'product',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'status', vn: 'status' }
				,/*5*/{ field: 'type', vn: 'type' }
				,/*6*/{ field: 'order_', vn: 'order_' }
				,/*7*/{ field: 'unit', vn: 'unit' }
				,/*8*/{ field: 'product_group_id', vn: 'product_group_id' }
				,/*9*/{ field: 'Record_Enable', vn: 'Record_Enable' }
				,/*10*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*11*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*12*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*13*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*14*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*15*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('product', obj82);
      var obj83 = {
            _id: 'product_group',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'code', vn: 'code' }
				,/*2*/{ field: 'name', vn: 'name' }
				,/*3*/{ field: 'note', vn: 'note' }
				,/*4*/{ field: 'status', vn: 'status' }
				,/*5*/{ field: 'order_', vn: 'order_' }
				,/*6*/{ field: 'Record_Enable', vn: 'Record_Enable' }
				,/*7*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*8*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*9*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*10*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*11*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*12*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('product_group', obj83);
      var obj84 = {
            _id: 'Area',//table
            _fieldsList: [
                /*0*/{ field: 'ID', vn: 'ID' }
				,/*1*/{ field: 'ParentID', vn: 'ParentID' }
				,/*2*/{ field: 'Type', vn: 'Type' }
				,/*3*/{ field: 'Code', vn: 'Code' }
				,/*4*/{ field: 'Name', vn: 'Name' }
				,/*5*/{ field: 'Note', vn: 'Note' }
				,/*6*/{ field: 'status', vn: 'status' }
				,/*7*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*8*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*9*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*10*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*11*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*12*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('Area', obj84);
      var obj85 = {
            _id: 'bill',//table
            _fieldsList: [
                /*0*/{ field: 'id', vn: 'id' }
				,/*1*/{ field: 'dept_to_dept_id', vn: 'dept_to_dept_id' }
				,/*2*/{ field: 'customer_id', vn: 'customer_id' }
				,/*3*/{ field: 'from_department_id', vn: 'from_department_id' }
				,/*4*/{ field: 'from_address', vn: 'from_address' }
				,/*5*/{ field: 'from_ward', vn: 'from_ward' }
				,/*6*/{ field: 'from_district_id', vn: 'from_district_id' }
				,/*7*/{ field: 'from_province_id', vn: 'from_province_id' }
				,/*8*/{ field: 'from_fullname', vn: 'from_fullname' }
				,/*9*/{ field: 'from_phone', vn: 'from_phone' }
				,/*10*/{ field: 'from_identity', vn: 'from_identity' }
				,/*11*/{ field: 'to_department_id', vn: 'to_department_id' }
				,/*12*/{ field: 'to_address', vn: 'to_address' }
				,/*13*/{ field: 'to_ward', vn: 'to_ward' }
				,/*14*/{ field: 'to_district_id', vn: 'to_district_id' }
				,/*15*/{ field: 'to_province_id', vn: 'to_province_id' }
				,/*16*/{ field: 'to_fullname', vn: 'to_fullname' }
				,/*17*/{ field: 'to_phone', vn: 'to_phone' }
				,/*18*/{ field: 'to_identity', vn: 'to_identity' }
				,/*19*/{ field: 'to_postal_code_id', vn: 'to_postal_code_id' }
				,/*20*/{ field: 'to_security_code', vn: 'to_security_code' }
				,/*21*/{ field: 'time_totransferfix', vn: 'time_totransferfix' }
				,/*22*/{ field: 'weight', vn: 'weight' }
				,/*23*/{ field: 'totalcost', vn: 'totalcost' }
				,/*24*/{ field: 'addcost', vn: 'addcost' }
				,/*25*/{ field: 'package_total', vn: 'package_total' }
				,/*26*/{ field: 'package_total_arrival', vn: 'package_total_arrival' }
				,/*27*/{ field: 'weight_c', vn: 'weight_c' }
				,/*28*/{ field: 'realkm', vn: 'realkm' }
				,/*29*/{ field: 'service_type_id', vn: 'service_type_id' }
				,/*30*/{ field: 'vat', vn: 'vat' }
				,/*31*/{ field: 'pay_type', vn: 'pay_type' }
				,/*32*/{ field: 'barcode_prefix', vn: 'barcode_prefix' }
				,/*33*/{ field: 'barcode', vn: 'barcode' }
				,/*34*/{ field: 'qr_Code', vn: 'qr_Code' }
				,/*35*/{ field: 'unique_code', vn: 'unique_code' }
				,/*36*/{ field: 'imageurl', vn: 'imageurl' }
				,/*37*/{ field: 'rfid_info_descript', vn: 'rfid_info_descript' }
				,/*38*/{ field: 'movinginfo_descript', vn: 'movinginfo_descript' }
				,/*39*/{ field: 'parent_id', vn: 'parent_id' }
				,/*40*/{ field: 'note', vn: 'note' }
				,/*41*/{ field: 'isprg_status', vn: 'isprg_status' }
				,/*42*/{ field: 'isprg_userinfo_descript', vn: 'isprg_userinfo_descript' }
				,/*43*/{ field: 'isprg_created_date', vn: 'isprg_created_date' }
				,/*44*/{ field: 'isprg_updated_date', vn: 'isprg_updated_date' }
				,/*45*/{ field: 'isprg_created_userid', vn: 'isprg_created_userid' }
				,/*46*/{ field: 'isprg_updated_userid', vn: 'isprg_updated_userid' }

            ],
        }
         this._dictSelf.set('bill', obj85);
      var obj86 = {
            _id: 'PT_KhieuNai',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Type', vn: 'Type' }
				,/*2*/{ field: 'Code', vn: 'Code' }
				,/*3*/{ field: 'Name', vn: 'Name' }
				,/*4*/{ field: 'TenKhachHang', vn: 'TenKhachHang' }
				,/*5*/{ field: 'SoDienThoai', vn: 'SoDienThoai' }
				,/*6*/{ field: 'Email', vn: 'Email' }
				,/*7*/{ field: 'NgayTiepNhan', vn: 'NgayTiepNhan' }
				,/*8*/{ field: 'NhanVienTiepNhan', vn: 'NhanVienTiepNhan' }
				,/*9*/{ field: 'BoPhanGiaiQuyet', vn: 'BoPhanGiaiQuyet' }
				,/*10*/{ field: 'TrangThaiGiaiQuyet', vn: 'TrangThaiGiaiQuyet' }
				,/*11*/{ field: 'NoiDungKhieuNai', vn: 'NoiDungKhieuNai' }
				,/*12*/{ field: 'NoiDungGiaiQuyet', vn: 'NoiDungGiaiQuyet' }
				,/*13*/{ field: 'NgayTraLoi', vn: 'NgayTraLoi' }
				,/*14*/{ field: 'NhanVienTraLoi', vn: 'NhanVienTraLoi' }
				,/*15*/{ field: 'Status', vn: 'Status' }
				,/*16*/{ field: 'IsPrgCreatedDate', vn: 'IsPrgCreatedDate' }
				,/*17*/{ field: 'IsPrgUpdatedDate', vn: 'IsPrgUpdatedDate' }
				,/*18*/{ field: 'IsPrgCreatedUserId', vn: 'IsPrgCreatedUserId' }
				,/*19*/{ field: 'IsPrgUpdatedUserId', vn: 'IsPrgUpdatedUserId' }

            ],
        }
         this._dictSelf.set('PT_KhieuNai', obj86);
      var obj87 = {
            _id: 'PT_BoPhanGiaiQuyet',//table
            _fieldsList: [
                /*0*/{ field: 'Id', vn: 'Id' }
				,/*1*/{ field: 'Type', vn: 'Type' }
				,/*2*/{ field: 'Code', vn: 'Code' }
				,/*3*/{ field: 'Name', vn: 'Name' }
				,/*4*/{ field: 'Status', vn: 'Status' }
				,/*5*/{ field: 'IsPrgCreatedDate', vn: 'IsPrgCreatedDate' }
				,/*6*/{ field: 'IsPrgUpdatedDate', vn: 'IsPrgUpdatedDate' }
				,/*7*/{ field: 'IsPrgCreatedUserId', vn: 'IsPrgCreatedUserId' }
				,/*8*/{ field: 'IsPrgUpdatedUserId', vn: 'IsPrgUpdatedUserId' }

            ],
        }
         this._dictSelf.set('PT_BoPhanGiaiQuyet', obj87);

        }
};
