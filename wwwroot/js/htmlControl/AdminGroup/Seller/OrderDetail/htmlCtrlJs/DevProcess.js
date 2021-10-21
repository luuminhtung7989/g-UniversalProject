var _gbSubControl = {
	_modalDlg: "",
	AfterRenderFORM: function () {

	},
	API: async function (objDOM) {
		if (__Debug)
			console.log(objDOM);
		// if(obj.id == "OrderDetailaction_searchOrderDetail")
		// 	this.OrderDetailaction_searchOrderDetail(obj);
		// else if(obj.id == "gcGobal_CUST_Customeraction_savegcGobal_CUST_Customer")
		// 	this.gcGobal_CUST_Customeraction_savegcGobal_CUST_Customer(obj);
		console.log(objDOM.id + objDOM.id.includes('_action_save_'));

		var action = (objDOM.id.includes('_action_save_')) ? '_action_save_' : '';
		if (action === '')
			action = (objDOM.id.includes('_action_back_')) ? '_action_back_' : '';
		if (action === '')
			action = (objDOM.id.includes('_action_print_')) ? '_action_print_' : '';
		if (action === '')
			action = (objDOM.id.includes('_action_update_')) ? '_action_update_' : '';
		if (action === '')
			action = (objDOM.id.includes('_action_search_')) ? '_action_search_' : '';

		if (action === '_action_search_') {
			this.TestCallReport(objDOM);
			return;
		}
		//parser value
		var tmpName = objDOM.id;
		var index = tmpName.indexOf(action);
		var name = tmpName.substring(0, index);
		//------------------------------------------------

		//load js define
		//reloadJs('/js/htmlControl/AdminGroup/Seller/{0}/htmlCtrlJs/{0}.js'.format(name));
		//------------------------------------------------
		var obj = _gbSubDictionary[name];
		if (typeof (obj) === 'undefined')
			obj = _gbDictionary[name];

		console.log(obj + ' action ' + name);

		//----------------------------------------------
		//save data 
		if (typeof (obj) !== 'undefined') {

			var data = _gbForms.getdata(obj);
			__StackBag._ObjName = name;
			//get grid
			var table = $("#{0}_TableData".format(name)).DataTable();
			var rows = table.rows({ selected: true });
			var count = rows.count();
			if (count >= 0) {
				console.log(count + rows.data()[0]);
				//we set to __StackBag() list data, now using init2
				var record = rows.data()[0]
				//__StackBag.initStackInfo(obj._fieldsList);	
				//__StackBag.plushData(record);
				//console.log(__StackBag._StackData)
				//_gbForms.setdata(obj,record)
			}


			__StackBag.initStackInfo(obj._fieldsList);
			//check valid data
			var listInvalid = __StackBag.ValidNull(data);
			//-------------------------------------
			if (listInvalid.length > 0) {
				//active field is null
				for (p = 0; p < listInvalid.length; p++)
					console.log(listInvalid[p])
				var forms = document.querySelectorAll('.needs-validation');
				forms.forEach(function (form) {

					form.classList.add('was-validated')

				});
				return;
			}

			//-------------------------------------
			// chú ý nếu insert thì ta bỏ key Id ra bằng  removeProp 
			var d = __StackBag.parserForm(data);
			console.log(d)
			var sqlRequest = JSON.parse(JSON.stringify(obj._listSelfTables[0]));
			var a, c;
			var Id = data.Id;
			if (action === '_action_save_') {
				removeProp(data, 'Id');
				a = "Insert" + name;
			}
			else if (action === '_action_update_') {
				a = "Update" + name;
				c = { Id: data.Id };
				removeProp(data, 'Id');
				sqlRequest.AjaxObj.c = c;
			}
			else if (action === '_action_delete_') {
				a = "Remove" + name;
				c = { Id: data.Id };
				removeProp(data, 'Id');
				sqlRequest.AjaxObj.c = c;
			}
			sqlRequest.AjaxObj.a = a;
			sqlRequest.AjaxObj._f = "";
			sqlRequest.AjaxObj.d = d;
			
			if(name==="Languages")//check name exsist
			{
				var sqlRequest1 = JSON.parse(JSON.stringify(obj._listSelfTables[0]));
				
				sqlRequest1["bTransfer"] = true;
				sqlRequest1["typeOp"] ="hasCmd"; 
				sqlRequest1["Rules"] =[];
				sqlRequest1.Rules[0] = {applyFunc:1, bStop:{self:true, condition:{result:"null"}}, d:{}, c:{}}
				sqlRequest1.Rules[1] = {applyFunc:2, bStop:{self:true, condition:{result:"object"}}, d:{}, c:{Id:""} }
				sqlRequest1.AjaxObj["c"] = { Name: "N'{0}'".format(data.Name) };
				sqlRequest1.AjaxObj["_f"] = " TOP 1 * ";
				sqlRequest1.AjaxObj["jSonFormat"] = true;

				sqlRequest2 =  JSON.parse(JSON.stringify(sqlRequest));
				sqlRequest2.AjaxObj["a"] = "Insert" + name;
				sqlRequest2.AjaxObj['d'] = d;
				//sqlRequest2.AjaxObj["bStop"] = {self:true, condition:{result:"null"}};

				sqlRequest3 = JSON.parse(JSON.stringify(sqlRequest));
				sqlRequest3.AjaxObj["a"] = "Update" + name;
				sqlRequest3.AjaxObj["c"] = { Id: Id };
				sqlRequest2.AjaxObj["d"] = d;
				
				sqlRequestList = [sqlRequest1, sqlRequest2, sqlRequest3];
				var multiRequest = { CrossData: true, MultiRequest: sqlRequestList };
				await _gbAjax.postN2(multiRequest).then(function (result) {
					console.log(result);
					//udpate grid
					if (result.status === "OK") {
						if (result.listRecords[1] === null)//update
						{
							data['Id'] = Id;
							if(count>0)
								rows.data()[count - 1] = __StackBag.getDataGridChange(rows.data()[count - 1], data, name);
						}
						var newData = table.rows().data();
						if (result.listRecords[1] !== null) {//insert
							data['Id'] = result.listRecords[1][0];
							var $listColumns =  $("#"+name+"_TableData thead tr th");
							var emptyRow = [$listColumns]; //Object.keys(data).length nho hon
							var newRow = __StackBag.getDataGridChange(emptyRow, data, name);
							newData.unshift(newRow);
						}
						table.destroy();// khong co lenh nay no ko cap nhat
						//--------------------------------------------------
						var option = (_gbLanguage==='vn')?_gbFormAction.optionGrids: _gbFormAction.optionGridsEn;
						option.data = newData;
						$("#{0}_TableData".format(name)).DataTable(option).columns.adjust().draw();
					}
				});
				return;
				
			}
			await _gbAjax.postN2(sqlRequest).then(function (result) {
				console.log(result);
				
				//udpate grid
				if (result.status === "OK") {
					if (action === '_action_update_')
					{
						data['Id'] = c.Id;
						if(count>0)
							rows.data()[count - 1] = __StackBag.getDataGridChange(rows.data()[count - 1], data, name);
					}
					var newData = table.rows().data();
					if (action === '_action_save_') {
						data['Id'] = result.records;
						var $listColumns =  $("#"+name+"_TableData thead tr th");
						var emptyRow = [$listColumns]; //Object.keys(data).length nho hon
						var newRow = __StackBag.getDataGridChange(emptyRow, data, name);
						newData.unshift(newRow);
					}
					table.destroy();// khong co lenh nay no ko cap nhat
					//--------------------------------------------------
					var option = (_gbLanguage==='vn')?_gbFormAction.optionGrids: _gbFormAction.optionGridsEn;
					option.data = newData;
					$("#{0}_TableData".format(name)).DataTable(option).columns.adjust().draw();
				}
			});


		}
	},
	ADDICON: function (obj) {
		if (__Debug)
			console.log(obj);
		if (__Debug)
			console.log(obj.id);

		//parser value
		var tmpName = obj.id.replace('_add_icon_action_', '')
		var index = tmpName.indexOf('__p__');
		var name = tmpName.substring(0, index);
		//------------------------------------------------
		var id = tmpName.substring(index + 5, tmpName.length);
		id = id.replace('_search', '');
		console.log(name + ' - ' + id + ' - ');

		//------------------------------------------------
		var obj = _gbSubDictionary[name];
		if (typeof (obj) === 'undefined')
			obj = _gbDictionary[name];

		console.log(obj);
		var objRefName = '';
		if (typeof (obj) !== 'undefined')
			for (var u = 0; u < obj._fieldsList.length; u++) {
				if (id === obj._fieldsList[u].field) {
					objRefName = obj._fieldsList[u].option.objAjax.AjaxObj.a.replace('fGet', '');
				}
			}
		//----------------------------------------------
		var objRef = _gbSubDictionary[objRefName];
		if (typeof (objRef) === 'undefined')
			objRef = _gbDictionary[objRefName];
		console.log(objRef);
		if (typeof (objRef) !== 'undefined') {
			_gbApp.reset();
			_gbApp.add(objRefName, objRef);
			$('#ObjectBodyHtml_div').html('');
			//__SettingObjectModal.set(_gbApp._curMainOjectName).show($('#ObjectBodyHtml_div'), "Dev");


			_gbApp.buildform($("#divGrid2"), $("#ObjectBodyHtml_div"), false).then(function () {
				//_gbCaches.saveToLocal();
				$("#" + objRefName + "_form label").removeClass('col-sm-2');
				$("#" + objRefName + "action_print" + objRefName).hide();
				$("#" + objRefName + "action_back" + objRefName).hide();
				$("span[id*=\'_add_icon_action_" + objRefName + "\']").hide();

			});

			$('#__ModalObjectSetting').modal('show');
			$(".modal-footer").hide();
			$('#exampleModalLabel').html(objRefName);



			//$('#Services_form label').removeClass('col-sm-2');
		}
		//var data  = _gbForms.getdataSearch(table, true);
	},
	TestCallReport: async function (obj) {
		if (__Debug)
			console.log(obj.id);

		var name = "OrderDetail";
		var table = _gbSubDictionary[name];
		var data = _gbForms.getdataSearch(table, true);
		//----------------------------------
		__StackBag._ObjName = name;
		__StackBag.initStackInfo(_gbSubDictionary[name]._fieldsSearch);
		var condition = __StackBag.parserSearchForm(data);

		reloadJs('/js/htmlControl/AdminGroup/Seller/OrderDetail/htmlCtrlJs/OrderDetail.js');
		await __ParserSpaces.LoadcomponentHeader($("#gc_MainForm2"));

		__StackBag._ObjName = name;
		__StackBag.initStackInfo(_gbSubDictionary[name]._fieldsReport);
		//__StackBag._attachReportHeader($("#gc_MainForm2"));
		//reset content


		$("#OrderDetail_griddivReport").html('');
		$("#OrderDetail_griddivReport").remove();

		//try ẩn form
		$("#gcGobal_CUST_Customer_form").hide();

		$("#OrderDetail_HeaderReport").html($("#OrderDetail_HeaderReport").html().format(new Date().toISOString(), new Date().toISOString()));
		$("#OrderDetail_HeaderReport").appendTo($("#gc_MainForm2"));
		console.log(__StackBag._createTable($("#gc_MainForm2")));
		__StackBag._totalAll.indexs[0] = 7;
		__StackBag._totalAll.indexs[1] = 8;
		var sqlRequest = _gbSubDictionary["OrderDetail"]._listSelfTables[0];
		sqlRequest.AjaxObj._f = __StackBag.getStrFields();
		sqlRequest.AjaxObj.c = condition;
		await _gbAjax.postN2(sqlRequest).then(function (data) {
			console.log(data);
			__StackBag.plushDataTable(data.records);
		});

	},

};
