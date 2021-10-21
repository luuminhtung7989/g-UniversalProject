
var serviceBase = 'http://localhost:5000/callback';
var usus = '';


var _gbLanguage = "vn";
function _gcLoopkupI18(tableName, field) {
    if (typeof (_gbLanguageI18) === 'object') {
        var table = _gbLanguageI18[tableName];
        if (table !== undefined) {
            for (var m = 0; m < table._fieldsList.length; m++)
                if (field === table._fieldsList[m].field) {
                    switch (_gbLanguage) {
                        case 'vn':
                            return table._fieldsList[m].vn;
                        case 'en':
                            return table._fieldsList[m].en;
                        case 'khmer':
                            return table._fieldsList[m].khmer;
                        case 'thai':
                            return table._fieldsList[m].thai;
                        case 'china':
                            return table._fieldsList[m].china;
                        case 'japan':
                            return table._fieldsList[m].japan;
                        case 'korea':
                            return table._fieldsList[m].korea;
                    }
                }
        }
        return field;
    }
    else
        return field;
}
function _gcSetSessionData() {
    window._appGc_Sesstion = {
        cur_gb_Account: '@Session["gcUserName"]', // có thời gian mã hóa tên của user để che lại
        cur_gb_GroupRight: '<%= Session["gcRightGroup"] %>',
        cur_gb_BranchId: '<%= Session["gcBranchId"] %>',
        cur_gb_AccountId: '<%= Session["gcAccountId"] %>',
        cur_gb_MaCanBoId: '<%= Session["gcMaCanBoId"] %>',
        cur_gb_CtyId: '<%= Session["gcCtyId"] %>',
        cur_gb_DepartmentId: '<%= Session["gcDepartmentId"] %>',
        cur_gb_Today: '<%= Session["curday"] %>',
        cur_gb_ElementId: '<%= Session["curday"] %>',
        cur_gb_ChucVuId: '<%= Session["gcChucVuId"] %>',
        cur_gb_KhoHangId: '<%= Session["gcKhoId"] %>',
        cur_gb_comName: '<%= Session["comName"] %>',
        cur_gb_comTel: '<%= Session["comTel"] %>',
        cur_gb_comAdd: '<%= Session["comAdd"] %>',
        cur_gb_cur_ListDataShow: '',
        RowsData: '<%= Session["Rows"] %>',
    }
}
function _gcFormatFullDataTime(value) {
    return (value === null) ? '' : moment(parseDateJs(value)).format(_gbApp.defaultConfig.dateTimeFormat);
}
function _gcFormatMoney(value, precition,en=false) {
    if(en)
        return (value === null) ? '' : value.formatMoney(precition, ',', '.');
    else
        return (value === null) ? '' : value.formatMoney(precition, '.', ',');
}
function _gcRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function _gcArrayTrim(arr) {
    var u = 0;
    var len = arr.length;
    for (; u < len; u++)
        arr[u] = $.trim(arr[u]);
    return arr;
}
function _gcFindIndexFields(_listFields, key, property) {
    var m = 0;
    var lenList = _listFields.length;

    for (m = 0; m < lenList; m++) {
        if (key == _listFields[m][property])
            return m;
    }
    return -1;
}
function _gcGetFixedFields(fields, _listFields) {

    var _listSeft = [];
    var u = 0;
    var len = fields.length;
    var m = 0;
    var lenList = _listFields.length;
    for (; u < len; u++) {

        for (m = 0; m < lenList; m++) {
            if (_listFields[m].field == fields[u]) {
                _listSeft.push(_listFields[m]);
                break;
            }
        }
        if (m == lenList)
            _listSeft.push({ field: fields[u], name: fields[u], create: true, edit: true, list: true });
    }
    return _listSeft;
}
//-------------------------------------------------
//Space
var __Space = {
    //localStorage.setItem('key', 'value');
    //// hoặc
    //localStorage.key = 'value';
    //// hoặc
    //localStorage['key'] = 'value';
    self: new Map(),
    set: function (key, value) {
        this.self[key] = value;
    },
    isContain: function (key) {
        return (this.self.get(key) !== undefined);
    },
    getValue: function (key) {
        if (this.isContain(key))
            return this.self.get(key);
        return null;
    },
    saveToLocal: function () {
        this.self.forEach((value, key) => {
            //console.log(`${key}: ${value}`);
            localStorage[key] = value;
        })
    },
    //Hàm này được gọi nếu không có cache thì gọi lúc đăng nhập
    init: function () {
        if (typeof (Storage) !== 'undefined') {
            //Nếu có hỗ trợ
            //Thực hiện thao tác với Storage
            localStorage.clear();

            //load data from local
            if (localStorage["gcGobal_INCOM_Receipt_Detail"] !== 'undefined')
                this.self["gcGobal_INCOM_Receipt_Detail"] = localStorage.getItem("gcGobal_INCOM_Receipt_Detail");


            //Get data from local
            console.log('Trình duyệt của bạn hỗ trợ Storage');
        } else {
            //Nếu không hỗ trợ
            //Load Space from server
            console.log('Trình duyệt của bạn không hỗ trợ Storage');
        }
    }
};
//End Space
//-------------------------------------------------
var _gbApp = //gobal object
{
    defaultConfig: {
        datePickerFormat: "dd/mm/yyyy",
        dateFormat: "DD/MM/YYYY",
        dateTimeFormat: "HH:mm:ss DD/MM/YYYY",
        isoDateTimeFormat: "YYYY-MM-DDTHH:mm:ss.000"
    },
    __u: 0,
    _curMainOjectName: "",
    __name: "",
    __gcStack: [],
    listTables: [],
    listTablesObjectJS: new Map(),
    /*==========================================*/
    _$storeForms: new Map(),
    _$storeGrids: new Map(),
    /*==========================================*/
    listOptions: [],
    listDataGrids: new Map(),
    reset: function () {
        this.__u = 0;
        _curMainOjectName = "";
        this.__name = "";
        this.__gcStack = [];
        this.listTables = [];
        this.listTablesObjectJS = new Map();
        this._$storeForms = new Map();
        this._$storeGrids = new Map();
        this.listOptions = [];
        this.listDataGrids = new Map();
    },
    add: function (tablename, tableobj) {
        this.listTables.push(tablename);
        this.listTablesObjectJS.set(tablename, tableobj);
    },
    init: function () {
        //_gbDictionary.init();
        //loading component to this instance
        this.loadComponent();
    },
    loadComponent: function () {
        //modal dialog for Object setting
        //remove if tồn tại hoặc giử nguyên

        //$('#bock_inner_exampleModal').remove();
        var $divInner = $('<div></div>')
            .addClass('form-control')
            .attr('id', 'bock_inner_exampleModal')
            //.attr('style', 'display: none !important')
            .load("/js/htmlControl/modalObjectSetting.html");

        var $divInner2 = $('<div></div>')
            .addClass('form-control')
            .attr('id', 'bock_inner_exampleModal')
            .load("/js/htmlControl/CreateAllObjectDlg.html");

        $divInner.appendTo($('body'));
        $divInner2.appendTo($('body'));
        //-----------------------------
        //now loading instance html and java script;
    },
    run: async function ($Container, $ContainerForm) {
        for (var u = 0; u < this.listTables.length; u++) {

            //load data for grid
            var tablesObjectJS = this.listTablesObjectJS.get(this.listTables[u]);
            var ojbAjax = this.listTablesObjectJS.get(this.listTables[u])._listSelfTables[0];
            var _id = tablesObjectJS._id;
            //_gbApp.__name = _id;

            //PostRequest(ojbAjax, tablesObjectJS._id);
            //get local data
            if (typeof (localStorage[tablesObjectJS._id]) !== 'undefined') {
                _gbCaches.memory.set(tablesObjectJS._id, JSON.parse(localStorage[tablesObjectJS._id]));

                await _gbCaches.load(tablesObjectJS._id).then(function () {
                    _gbControler.run(tablesObjectJS._id, $Container, $ContainerForm);
                    _gbCaches.saveToLocal();
                });
            }
            else {//load data from server
                await _gbAjax.post(ojbAjax, tablesObjectJS._id).then(async function (data) {
                    _gbCaches.memory.set(tablesObjectJS._id, data.records);

                    await _gbCaches.load(tablesObjectJS._id).then(function () {
                        _gbControler.run(tablesObjectJS._id, $Container, $ContainerForm);
                        _gbCaches.saveToLocal();
                    });
                }).catch(e => {
                    console.log(e);
                })

            };

        }
    },
    reload: async function ($Container, $ContainerForm) {
        for (var u = 0; u < this.listTables.length; u++) {

            //load data for grid
            var tablesObjectJS = this.listTablesObjectJS.get(this.listTables[u]);
            var ojbAjax = tablesObjectJS._listSelfTables[0];
            var _id = tablesObjectJS._id;
            //_gbApp.__name = _id;

            await _gbAjax.get(ojbAjax, tablesObjectJS._id).then(async function (data) {
                _gbCaches.memory.set(tablesObjectJS._id, data.records);

                _gbGrids.run(tablesObjectJS, $Container);
                _gbGrids._createDataTable(tablesObjectJS._id);

            }).catch(e => {
                console.log(e);
            });

        }
    }
};

var _gbControler = {
    run: function (tableName, $Container, $ContainerForm) {
        var table = _gbApp.listTablesObjectJS.get(tableName);
        _gbForms.run(table, $ContainerForm, 0);
        _gbGrids.run(table, $Container);
        _gbGrids._createDataTable(tableName);
    }

};
var _gbCaches = {
    memory: new Map(),
    load: async function (tableName) {
        var table = _gbApp.listTablesObjectJS.get(tableName);
        var goNext = true;
        for (var u = 0; u < table._listRefTables.length; u++) {

            var optionName = tableName + table._listRefTables[u].field;
            var objAjax = table._listRefTables[u].objAjax;

            //cache options
            if (!this.isContain(optionName)) {
                //get local data
                if (typeof (localStorage[optionName]) !== 'undefined') {
                    _gbCaches.memory.set(optionName, JSON.parse(localStorage[optionName]));
                }
                else {//load data from server
                    await _gbAjax.post(objAjax, optionName).then(function (data) {
                        var _optionName = tableName + _gbApp.listTablesObjectJS.get(tableName)._listRefTables[u].field;
                        _gbCaches.memory.set(_optionName, data.records);

                        //save data to local
                        //localStorage[_optionName] = data.records;
                        __Space.set(_optionName, data.records);

                    }).catch(e => {
                        console.log(e);
                    });
                }
            }
            //------------------------------------

        }
    },
    isContain: function (key) {
        return (this.memory.get(key) !== undefined);
    },
    getValue: function (key) {
        if (this.isContain(key))
            return this.memory.get(key);
        return null;
    },
    saveToLocal: function () {
        this.memory.forEach((value, key) => {
            //console.log(`${key}: ${JSON.stringify(value)}`);
            //storage chỉ lưu trữ kiểu chuỗi ta tiến hành chuyển thành json và lưu
            localStorage[key] = JSON.stringify(value);
        })
    },
};

var _gbAjax = {
    get: function (objAjax, optionName) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                dataType: "json",
                data: JSON.stringify(objAjax),
                //async: false,
                contentType: 'application/json',

                success: function (data) {
                    data.optionName = optionName;
                    //_gbCaches.memory.set(optionName, data.records);
                    resolve(data);
                },
                url: serviceBase,
                error: function (err) {
                    reject(err);
                }
            })
        });
    },
    post: function (objAjax, optionName) {
        return new Promise(function (resolve, reject) {

            $.ajax({
                type: "POST",
                dataType: "json",
                data: JSON.stringify(objAjax),
                //async: false,
                contentType: 'application/json',

                success: function (data) {
                    data.optionName = optionName;
                    //_gbCaches.memory.set(optionName, data.records);
                    resolve(data);
                },
                url: serviceBase,
                error: function (err) {
                    console.log(err);
                }
            })

        });
    },
    postN2: function (objAjax) {
        return new Promise(function (resolve, reject) {

            $.ajax({
                type: "POST",
                dataType: "json",
                data: JSON.stringify(objAjax),
                //async: false,
                contentType: 'application/json',

                success: function (data) {
                    //data.optionName = optionName;
                    //_gbCaches.memory.set(optionName, data.records);
                    resolve(data);
                },
                url: serviceBase,
                error: function (err) {
                    console.log(err);
                }
            })

        });
    },
    postN3: function (objAjax, data) {
        return new Promise(function (resolve, reject) {

            $.ajax({
                type: "POST",
                dataType: "text",
                data:  JSON.stringify(objAjax) +"[{header}]" + data,
 
                contentType: false,
                cache: false,
                processData: false,
                success: function (data) {
                    //data.optionName = optionName;
                    //_gbCaches.memory.set(optionName, data.records);
                    resolve(data);
                },
                url: serviceBase,
                error: function (err) {
                    console.log(err);
                }
            })

        });
    }

}
var _gbForms = {
    _typeForm: 0,
    _table: null,
    _id: "",
    _$form: null,
    _$mainContainer: null,
    setdata: function (table, rowsdata) {
        var listIndexFields = [];
        var d = {};
        var form = null;
        if (this._typeForm === 0)// edit form
        {
            form = table._editform;
        }
        else
            form = table._updateform;
        var u = 0;
        //_editform
        for (u = 0; u < form.length; u++) {
            var row = form[u].row;
            for (var m = 0; m < row.length; m++)
                listIndexFields.push(row[m]);
        }

        //-------------------------------------------------------------
        //if define override fieldsList update
        if (typeof table._fieldsListUpdateOverride !== 'undefined' && table._fieldsListUpdateOverride != null) {
            for (var i = 0; i < table._fieldsListUpdateOverride.length; i++) {
                var field = $.trim(table._fieldsListUpdateOverride[i]);
                //------------------------------------------------------------
            }
            return;
        }
        //-------------------------------------------------------------
        for (var i = 0; i < listIndexFields.length; i++) {
            var index = listIndexFields[i];
            var field = table._fieldsList[index];
            var $input;
            //--------------------------------------------------------
            var id = table._id;
            if (field.field.toLowerCase() === 'id') {// pass id
                if (typeof (table._autoId) !== 'undefined' && (table._autoId === false)) {
                     $input = $("#" + id + "_form input#" + field.field)[0];
                    $input.value = rowsdata[index];
                }
            }
            else if ((typeof (field['type']) !== 'undefined') && (field.type === "datetime")) {
                 $input = $("#" + id + "_form input#" + field.field + "_inputpicker")[0];
                $input.value = _gcFormatFullDataTime(rowsdata[index]);
            }
            else if ((typeof (field['type']) !== 'undefined') && (field.type === "select")) {
                 $input = $("#" + id + "_form select#" + field.field + "_select")[0];
                $input.value = rowsdata[index];
            }
            else if ((typeof (field['type']) !== 'undefined') && (field.type === "area")) {
                 $input = $("#" + id + "_form area#" + field.field)[0];
                $input.value = rowsdata[index];
            }
            else if ((typeof (field['type']) !== 'undefined') && (field.type === "money")) {
                 $input = $("#" + id + "_form input#" + field.field)[0];
                var value = $.trim($input.value);
                $input.value = _gcFormatMoney(rowsdata[index], 2);
            }
            else {
                 $input = $("#" + id + "_form input#" + field.field)[0];
                $input.value = rowsdata[index];
            }
        }
    },
    getdata: function (table, data, _cAjax) {
        var listIndexFields = [];
        var d = {};
        var form = null;
        if (this._typeForm === 0)// edit form
        {
            form = table._editform;
        }
        else
            form = table._updateform;
        var u = 0;
        //_editform
        for (u = 0; u < form.length; u++) {
            var row = form[u].row;
            for (var m = 0; m < row.length; m++)
                listIndexFields.push(row[m]);
        }

        var $input;
        var value;
        //-------------------------------------------------------------
        //if define override fieldsList update
        if (typeof table._fieldsListInsert !== 'undefined' && table._fieldsListInsert !== null) {
            for (var i = 0; i < table._innerFieldInserts.length; i++) {
                var field = table._innerFieldInserts[i];
                //------------------------------------------------------------
                //--------------------------------------------------------
                var id = table._id;
                if (field.field.toLowerCase() === 'id') {// pass id
                    if (typeof (table._autoId) !== 'undefined' && (table._autoId === false)) {
                         $input = $("#" + id + "_form input#" + field.field)[0];
                         value = $.trim($input.value);
                        d[field.field] = (value === "") ? 0 : parseFloat(gcRev($input.value, ","));
                    }
                }
                else if ((typeof (field['type']) !== 'undefined') && (field.type === "datetime")) {
                     $input = $("#" + id + "_form input#" + field.field + "_inputpicker")[0];
                    d[field.field] = ($input === undefined) ? null : $input.value;
                }
                else if ((typeof (field['type']) !== 'undefined') && (field.type === "select")) {
                     $input = $("#" + id + "_form select#" + field.field + "_select")[0];
                     value = $.trim($input.value);
                    d[field.field] = (value === "") ? null : parseFloat(gcRev($input.value, ","));
                }
                else if ((typeof (field['type']) !== 'undefined') && (field.type === "area")) {
                     $input = $("#" + id + "_form area#" + field.field)[0];
                    d[field.field] = $input.value;
                }
                else if ((typeof (field['type']) !== 'undefined') && (field.type === "money")) {
                     $input = $("#" + id + "_form input#" + field.field)[0];
                     value = $.trim($input.value);
                    d[field.field] = (value === "") ? 0 : parseFloat(gcRev($input.value, ","));
                }
                else {
                     $input = $("#" + id + "_form input#" + field.field)[0];
                    d[field.field] = ($input === undefined) ? '' : $input.value;
                }
            }
            return d;
        }
        //-------------------------------------------------------------
        for (var i = 0; i < listIndexFields.length; i++) {
            var field = table._fieldsList[listIndexFields[i]];
            //--------------------------------------------------------
            var id = table._id;
            if (field.field.toLowerCase() === 'id') {// pass id
                if (typeof (table._autoId) !== 'undefined' && (table._autoId === false)) {
                     $input = $("#" + id + "_form input#" + field.field)[0];
                     value = $.trim($input.value);
                    d[field.field] = (value === "") ? 0 : parseFloat(gcRev($input.value, ","));
                }
            }
            else if ((typeof (field['type']) !== 'undefined') && (field.type === "datetime")) {
                 $input = $("#" + id + "_form input#" + field.field + "_inputpicker")[0];
                d[field.field] = $input.value;
            }
            else if ((typeof (field['type']) !== 'undefined') && (field.type === "select")) {
                 $input = $("#" + id + "_form select#" + field.field + "_select")[0];
                 value = $.trim($input.value);
                d[field.field] = (value === "") ? null : parseFloat(gcRev($input.value, ","));
            }
            else if ((typeof (field['type']) !== 'undefined') && (field.type === "area")) {
                 $input = $("#" + id + "_form area#" + field.field)[0];
                d[field.field] = $input.value;
            }
            else if ((typeof (field['type']) !== 'undefined') && (field.type === "money")) {
                 $input = $("#" + id + "_form input#" + field.field)[0];
                 value = $.trim($input.value);
                d[field.field] = (value === "") ? 0 : parseFloat(gcRev($input.value, ","));
            }
            else {
                 $input = $("#" + id + "_form input#" + field.field)[0];
                d[field.field] = ($input === undefined) ? null : $input.value;
            }
        }
        return d;
    },
    /* Set data the table.
    *************************************************************************/
    run: function (table, $Container, typeForm) {
        //_listSelfTables
        this._id = table._id;
        this._table = table;
        this._typeForm = typeForm;
        this._$mainContainer = $Container;
        this._createForm();
        this._calGridForm();
    },
    _createForm: function () {
        this._$form = $('<form></form>')
            .addClass('form-horizontal bs-callout bs-callout-info gcformfixed')
            .appendTo(this._$mainContainer);
        this._$form.attr('id', this._table._id + '_form');
    },
    _divFormGroup: function (id, css) {
        var $div = $('<div></div>')
            .addClass(css);
        $div.attr('id', id);
        //fixed for multi build form 2021
        //$div.attr('id', id + this._id);
        return $div;
    },
    _divinput: function (id, css) {
        var $div = $('<div></div>')
            .addClass('input-group')
            .addClass(css);
        //$div.attr('id', id);
        //fixed for multi build form 2021
        $div.attr('id', id + this._id);
        return $div;
    },
    _labelFormGroup: function (id, css, labeltext) {
        if (typeof _gcLoopkupI18 == 'function')
            labeltext = _gcLoopkupI18(this._table._id, id);
        var $label = $('<label></label>')
            .addClass('control-label')
            .addClass(css)
            .html(labeltext + ":");
        //$label.attr('id', id);
        //fixed for multi build form 2021
        $label.attr('id', id + this._id);
        return $label;
    },
    _divInputFormGroup: function (divcss, id, css, type, placehoder, listboxcss) {
        var $div = $('<div></div>')
            .addClass(divcss);
        //$div.attr('id', id + '_div');
        //fixed for multi build form 2021
        $div.attr('id', id + this._id + '_div');
        var $input = this._inputFormGroup(id, css, type, placehoder, listboxcss);
        //$input.appendTo($div);
        return $input;
    },
    _divAreaFormGroup: function (divcss, id, css, type, placehoder, listboxcss) {
        var $div = $('<div></div>')
            .addClass(divcss);
        //$div.attr('id', id + '_div');
        //fixed for multi build form 2021
        $div.attr('id', id + this._id + '_div');
        var $input = this._addAreaFormGroup(id, css, type, placehoder);
        //$input.appendTo($div);
        return $input;
    },
    _divInputFormGroupAddOn: function (divcss, id, css, type, placehoder, addon, listboxcss) {
        var $div = $('<div></div>')
            .addClass(divcss);
        //$div.attr('id', id + '_divadon');
        //fixed for multi build form 2021
        $div.attr('id', id + this._id + '_divadon');

        var $divGroup = this._divinput("", "");

        //-------------------------------------
        var $span;
        if (typeof (addon) === 'object') {
            var text = '', scss = '', icon = '';
            if (typeof (addon['css']) !== 'undefined')
                scss = addon['css'];
            if (typeof (addon['icon']) !== 'undefined')
                icon = addon['icon'];
            if (typeof (addon['text']) !== 'undefined')
                text = addon['text'];
            $span = this._addOnSpanFull(text, scss, icon);
        }
        else
            $span = this._addOnSpan(addon);
        var $input = this._inputFormGroup(id, css, type, placehoder, listboxcss);

        $input.appendTo($divGroup);
        $span.appendTo($divGroup);

        $divGroup.appendTo($div);
        return $div;
    },
    _inputFormGroup: function (id, css, type, placehoder, listboxcss) {
        var $input = $('<input></input>')
            .addClass('form-control')
            .addClass(listboxcss)
            .addClass(css);
        //$input.attr('id', id);
        $input.attr('id', id + this._id);

        $input.attr('name', id);
        $input.attr('type', type);
        $input.attr('placehoder', placehoder);
        return $input;
    },
    _addAreaFormGroup: function (id, css, type, placehoder) {

        var $input = $('<textarea></textarea>')
            .addClass('form-control')
            .addClass(css);
        //$input.attr('id', id);
        $input.attr('id', id + this._id);

        $input.attr('name', id);
        $input.attr('type', type);
        $input.attr('placehoder', placehoder);
        return $input;
    },
    _buttonSave: function (id, css, icon, name) {
        var $button = $('<button type="button">' + name + '</button>')
            .addClass(css);
        //$button.attr('id', id);
        $button.attr('id', id + this._id);

        var $span = this._addSpan(icon).appendTo($button);
        //$button.text(name + $span.html());
        return $button;
    },
    _addSelect: function (id, css, key, option, field) {
        var $select = $('<select data-live-search="true" ></select>')
            .addClass(css);
        $select.attr('id', id + this._id + '_select');
        $select.attr('name', id + this._id + '_select');

        //$select.attr('id', id + '_select');
        //$select.attr('name', id + '_select');
        //merger Csss: "mergeCss":[{"index":2,"type":"money","css":"mergeCss"}]
        var mergeCss = (typeof (option["mergeCss"])) !== 'undefined' ? option["mergeCss"][0] : null;
        var precition = 2;
        //
        var data;
        if (_gbCaches.memory.get(key) !== undefined) {
            data = _gbCaches.memory.get(key);
            for (var u = 0; u < data.length; u++) {
                var token = VNConvertVNKODAU(data[u].length > 1 ? data[u][1] : data[u][0]);
                var mergename = option.mergename;
                var name = "";
                for (var m = 0; m < mergename.length; m++) {
                    //format data[u][mergename[m]]
                    var val = data[u][mergename[m]];

                    if (typeof (val) === 'number')
                        if (mergeCss !== null)
                            if (mergeCss["type"] === "money") {
                                val = val.formatMoney(precition, '.', ',')
                                if ((typeof (mergeCss["css"]) !== 'undefined')) {
                                    val = "<span class='" + mergeCss["css"] + "'>" + val + "</span>";

                                }
                            }
                    //------------------------------
                    if (m === 0)
                        name += val;
                    else
                        name += (" | " + val);
                }
                var $option = $('<option></option>')
                    .attr('data-tokens', token)
                    .attr('value', data[u][0])
                    .html(name);
                $option.appendTo($select);
            }
        }
        else {
            //loading data and save to cache
        }
        return $select;
    },
    _addInput: function (id, css) {
        var $span = $('<input></input>')
            .addClass(css);
        //$span.attr('id', id);
        $span.attr('id', id + this._id);
        $span.attr('name', id);
        return $span;
    },
    _addArea: function (id, css) {
        var $span = $('<textarea></textarea>')
            .addClass(css);
        //$span.attr('id', id);
        $span.attr('id', id + this._id);
        $span.attr('name', id);
        return $span;
    },
    _addSpan: function (css) {
        var $span = $('<span></span>')
            .addClass(css);
        return $span;
    },
    _addI: function (css) {
        var $span = $('<i></i>')
            .addClass(css);
        return $span;
    },
    _addOnSpanFull: function (addon, css, icon) {
        var $span = $('<span></span>')
            .addClass('input-group-addon')
            .addClass(icon)
            .addClass(css)
            .html(addon);
        return $span;
    },
    _addOnSpan: function (addon) {
        var $span = $('<span></span>')
            .addClass('input-group-addon')
            .html(addon);
        return $span;
    },
    //<span class="input-group-addon">@</span>
    _createField: function (index, labelclass, groupclass, $divRow) {

        try {


            var idRow = "";
            var css = "", type = "text", placehoder = "";

            var id = this._table._fieldsList[index].field;
            var labeltext = this._table._fieldsList[index].name;
            var listboxcss = "";
            var $label = this._labelFormGroup(id, labelclass, labeltext).appendTo($divRow);

            //if (appDivRow===true)
            //    $label.appendTo($divRow);

            var $div;
            if ((typeof (this._table._fieldsList[index]['type']) !== 'undefined') && (this._table._fieldsList[index].type === "datetime")) {
                //listboxcss = 'gc-style-form-combo';
                $div = $('<div></div>')
                    .addClass(groupclass);
                $div.attr('id', id + '_div');
                //end form group

                var $inputgroup = this._divinput(id + "_datetimepicker", "date");
                var $_addInput = this._addInput(id + "_inputpicker", "form-control form-control-sm");
                var $_addSpan = this._addI("bi-alarm");
                $_addSpan.css({ "font-size": "1.1rem", "color": "cornflowerblue" });

                $_addInput.appendTo($inputgroup);
                $_addSpan.appendTo($inputgroup);

                //$inputgroup.appendTo($div);
                //fix 2021
                $inputgroup.appendTo($divRow);

                var sr = document.createElement('script');
                sr.type = 'text/javascript';
                sr.innerHTML = '$(function () { '
                    + ' $("#' + id + '_inputpicker' + this._id + '").flatpickr({});'
                    + '        });';


                $($divRow).append(sr);
                //$div.appendTo($divRow);

                return $divRow;
            }
            else if ((typeof (this._table._fieldsList[index]['type']) !== 'undefined') && (this._table._fieldsList[index].type == "select")) {
                //listboxcss = 'gc-style-form-combo';
                $div = $('<div></div>')
                    .addClass(groupclass);
                $div.attr('id', id + '_div');
                var key = this._table._id + this._table._fieldsList[index].option.field;
                var option = this._table._fieldsList[index].option;
                var $select = this._addSelect(id, 'selectpicker  form-control form-control-sm', key, option, 0);

                //$select.appendTo($div);
                //$div.appendTo($divRow);
                //fix 2021
                $select.appendTo($divRow);

                var srpicker = document.createElement('script');
                srpicker.type = 'text/javascript';
                srpicker.innerHTML = '$(function () { '
                    + ' $("#' + id + this._id + '_select' + '").select2({ dropdownCssClass: "smalldrop", width: "auto" });'
                    + '        });';

                $($divRow).append(srpicker);

                return $divRow;
            }
            else if ((typeof (this._table._fieldsList[index]['type']) !== 'undefined') && (this._table._fieldsList[index].type == "area")) {
                //listboxcss = 'gc-style-form-combo';

                var $select = this._divAreaFormGroup(groupclass, id, css, type, placehoder).appendTo($divRow);
                return $divRow;
            }

            else {
                if ((typeof (this._table._fieldsList[index]['addon']) !== 'undefined'))
                    $div = this._divInputFormGroupAddOn(groupclass, id, css, type, placehoder, this._table._fieldsList[index]['addon'], listboxcss).appendTo($divRow);

                else
                    $div = this._divInputFormGroup(groupclass, id, ' form-control-sm', type, placehoder, listboxcss).appendTo($divRow);
                return $divRow;
            }
        }
        catch (e) {
            console.log(e + ' => ' + index + '|' + this._table._id + 'i');
        }
    },

    _calGridForm: function () {
        if (this._typeForm === 0)// edit form
        {
            var u = 0;
            //_editform
            for (u = 0; u < this._table._editform.length; u++) {
                var row = this._table._editform[u].row;
                var idRow = this._id + 'div' + u;
                var $divRow = null;
                var labelclass;
                if (row.length === 1)// 1 element
                {
                    $divRow = this._divFormGroup(idRow, "form-group");
                    //label - col-sm-2
                    //imput - col-sm-10
                    labelclass = "col-sm-2", groupclass = "col-sm-6";
                    //check field true for create form
                    $divGroup1 = this._divFormGroup(idRow, "form-group  col-sm-6");
                    this._createField(row[0], labelclass, groupclass, $divGroup1);
                    if (this._table._fieldsList[row[0]].edit === true)
                        $divGroup1.appendTo($divRow);

                    $divRow.appendTo(this._$form);
                }
                if (row.length === 2)// 2 element * 6
                {
                    $divRow = this._divFormGroup(idRow, "form-row");

                    //label - col-sm-2
                    //imput - col-sm-4
                    labelclass = "col-sm-2", groupclass = "col-sm-4";
                    $divGroup1 = this._divFormGroup(idRow, "form-group  col-sm-6");
                    this._createField(row[0], labelclass, groupclass, $divGroup1);
                    $divGroup2 = this._divFormGroup(idRow, "form-group   col-sm-6");
                    this._createField(row[1], labelclass, groupclass, $divGroup2);

                    if (this._table._fieldsList[row[0]].edit === true)
                        $divGroup1.appendTo($divRow);
                    if (this._table._fieldsList[row[1]].edit === true)
                        $divGroup2.appendTo($divRow);

                    $divRow.appendTo(this._$form);
                }
                if (row.length === 3)// 2 element * 2
                {
                    $divRow = this._divFormGroup(idRow, "form-row");
                    //label - col-sm-2
                    //imput - col-sm-2
                    labelclass = "col-sm-2", groupclass = "col-sm-2";
                    $divGroup1 = this._divFormGroup(idRow, "form-group  col-sm-4");
                    this._createField(row[0], labelclass, groupclass, $divGroup1);
                    $divGroup2 = this._divFormGroup(idRow, "form-group  col-sm-4");
                    this._createField(row[1], labelclass, groupclass, $divGroup2);
                    $divGroup3 = this._divFormGroup(idRow, "form-group  col-sm-4");
                    this._createField(row[2], labelclass, groupclass, $divGroup3);

                    if (this._table._fieldsList[row[0]].edit === true)
                        $divGroup1.appendTo($divRow);
                    if (this._table._fieldsList[row[1]].edit === true)
                        $divGroup2.appendTo($divRow);
                    if (this._table._fieldsList[row[2]].edit === true)
                        $divGroup3.appendTo($divRow);

                    $divRow.appendTo(this._$form);
                }
                if (row.length === 4)// 2 element * 1
                {
                    $divRow = this._divFormGroup(idRow, "form-row");
                    //label - col-sm-2
                    //imput - col-sm-1
                    labelclass = "col-sm-2", groupclass = "col-sm-1";
                    $divGroup1 = this._divFormGroup(idRow, "form-group  col-sm-3");
                    this._createField(row[0], labelclass, groupclass, $divGroup1);
                    $divGroup2 = this._divFormGroup(idRow, "form-group  col-sm-3");
                    this._createField(row[1], labelclass, groupclass, $divGroup2);
                    $divGroup3 = this._divFormGroup(idRow, "form-group  col-sm-3");
                    this._createField(row[2], labelclass, groupclass, $divGroup3);
                    $divGroup4 = this._divFormGroup(idRow, "form-group  col-sm-3");
                    this._createField(row[3], labelclass, groupclass, $divGroup4);

                    if (this._table._fieldsList[row[0]].edit === true)
                        $divGroup1.appendTo($divRow);
                    if (this._table._fieldsList[row[1]].edit === true)
                        $divGroup2.appendTo($divRow);
                    if (this._table._fieldsList[row[2]].edit === true)
                        $divGroup3.appendTo($divRow);
                    if (this._table._fieldsList[row[3]].edit === true)
                        $divGroup4.appendTo($divRow);

                    $divRow.appendTo(this._$form);
                }
            }
            var idRow = this._id + 'div' + u;
            var $divRow = this._divFormGroup(idRow, "form-group");

            var $div = $('<div></div>')
                .addClass('col-sm-offset-2 col-sm-10');

            this._buttonSave(this._id + '_save', 'btn btn-info', 'glyphicon glyphicon-save', 'Tạo mới  ').appendTo($div);

            this._buttonSave(this._id + '_update', 'btn btn-success', 'glyphicon glyphicon-edit', 'Cập nhật  ').appendTo($div);

            $div.appendTo($divRow);
            $divRow.appendTo(this._$form);
        }
        else {//update form

        }
    }


};
var _gbGrids = {
    _table: null,
    _$table: null,
    _$mainContainer: null,

    run: function (table, $Container) {
        this._table = table;
        this._$mainContainer = $Container;
        //_listSelfTables


        this._createTable();
        //---------------------------------------------
    },
    /* Creates the table.
        *************************************************************************/
    _createTable: function () {
        var $div = $('<div class=""></div>')
            .appendTo(this._$mainContainer);
        $div.attr('id', this._table._id + '_griddiv');
        $div.appendTo(this._$mainContainer);

        this._$table = $('<table></table>')
            .addClass(this._table.className)
            .appendTo($div);

        this._$table.attr('id', this._table._id + '_TableData');
        this._$table.css('width', '100%');

        this._createTableHead();
        this._createTableFoot();
    },

    /* Creates header (all column headers) of the table.
    *************************************************************************/
    _createTableHead: function () {
        var $thead = $('<thead></thead>')
            .appendTo(this._$table);

        this._addRowToTableHead($thead);
    },

    /* Creates header (all column headers) of the table.
   *************************************************************************/
    _createTableFoot: function () {
        var $thead = $('<tfoot></tfoot>')
            .appendTo(this._$table);

        var $tr = $('<tr></tr>')
            .appendTo($thead);

        this._addColumnsToHeaderRow($tr);

        $tr.appendTo($thead);
    },

    /* Adds tr element to given thead element
    *************************************************************************/
    _addRowToTableHead: function ($thead) {


        var $tr2 = $('<tr></tr>')
            .appendTo($thead);

        //fixed bug ngày 23/06/2021
        //Biến filter này lưu ở bảng của Object =>>> Dictionary để xác định
        //if(bBuildFilterColum)
        //this._addColumnsFilterToHeaderRow($tr2);


        var $tr = $('<tr></tr>')
            .appendTo($thead);

        this._addColumnsToHeaderRow($tr);
    },
    _addColumnsFilterToHeaderRow: function ($tr) {

        //-------------------------------------------------------------
        //if define override fieldsList
        if (typeof this._table._fieldsListOverride !== 'undefined' && this._table._fieldsListOverride != null) {
            for (var i = 0; i < this._table._fieldsListOverride.length; i++) {
                var field = $.trim(this._table._fieldsListOverride[i]);
                var $headerCell = this._createHeaderCellForFilterField(field.name, field, '', i);
                $headerCell.appendTo($tr);
            }
            return;
        }
        //-------------------------------------------------------------
        for (var i = 0; i < this._table._fieldsList.length; i++) {
            var field = this._table._fieldsList[i];
            if (field.list) {

                var $headerCell = this._createHeaderCellForFilterField(field.name, field, '', i);
                $headerCell.appendTo($tr);
            }
        }
    },
    _createHeaderCellForFilterField: function (fieldName, field, width, index) {
        //field.width = field.width || '10%'; //default column width: 10%.
        var $th = $('<td></td>')
            .css('width', width)
            .data('fieldName', fieldName)
            .html('<div class="input-group"><input type="text" id="filter_grid' + fieldName + '" data-index="' + index + '" data-table="' + this._table._id + '" class="form-control" placeholder="" /></div>');


        return $th;
    },
    /* Adds column header cells to given tr element.
    *************************************************************************/
    _addColumnsToHeaderRow: function ($tr) {

        //-------------------------------------------------------------
        //if define override fieldsList
        if (typeof this._table._fieldsListOverride !== 'undefined' && this._table._fieldsListOverride != null) {
            for (var i = 0; i < this._table._fieldsListOverride.length; i++) {
                var fieldname = $.trim(this._table._fieldsListOverride[i]);
                //
                if (typeof _gcLoopkupI18 == 'function')
                    fieldname = _gcLoopkupI18(this._table._id, fieldname);

                var $headerCell = this._createHeaderCellForField(fieldname, null, '');
                $headerCell.appendTo($tr);
            }
            return;
        }
        //-------------------------------------------------------------
        for (var i = 0; i < this._table._fieldsList.length; i++) {
            var field = this._table._fieldsList[i];
            if (field.list) {
                if (typeof _gcLoopkupI18 == 'function')
                    field.name = _gcLoopkupI18(this._table._id, field.name);
                //var width = '';
                //if (i == 0)
                //    width = '80px';
                var $headerCell = this._createHeaderCellForField(field.name, field, '');
                $headerCell.appendTo($tr);
            }
        }
    },
    /* Creates a header cell for given field.
        *  Returns th jQuery object.
        *************************************************************************/
    _createHeaderCellForField: function (fieldName, field, width) {
        //field.width = field.width || '10%'; //default column width: 10%.
        var $th = $('<th></th>')
            .css('width', width)
            .data('fieldName', fieldName)
            .html(fieldName);
        if (width != '')
            $th.css('width', width + ' !important');
        return $th;
    },
    _formatData: function (data, tableName) {
        try {
            var newData = data;
            var table = _gbApp.listTablesObjectJS.get(tableName);
            //------------------------------------------------------------------
            //user define format data
            if (typeof (table._innerFormatData) === 'function')
                return table._innerFormatData(data);

            //------------------------------------------------------------------

            var indexDate = [];
            for (var idx = 0; idx < table._fieldsList.length; idx++) {
                if ((typeof (table._fieldsList[idx]['type']) !== 'undefined') && (table._fieldsList[idx].type === "datetime"))
                    indexDate.push(idx);
            }

            //if define override fieldsList
            //var _innerFields = [];
            if (typeof table._fieldsListOverride !== 'undefined' && table._fieldsListOverride != null) {
                if (typeof table._innerFields === 'undefined' || typeof table._innerFields === undefined || table._innerFields === null) {
                    table._innerFields = _gcGetFixedFields(table._fieldsListOverride, table._fieldsList);
                }
            }
            for (var u = 0; u < newData.length; u++) {
                //if define override fieldsList
                if (typeof table._fieldsListOverride !== 'undefined' && table._fieldsListOverride != null) {
                    for (var p = 0; p < table._innerFields.length; p++) {
                        var value = newData[u][p];


                        //process data
                        var precition = 0;
                        //--------------------------------------------------
                        if ((typeof (table._innerFields[p]['type']) !== 'undefined') && (table._innerFields[p].type === "datetime"))
                            newData[u][p] = (newData[u][p] == null) ? '' : moment(parseDateJs(newData[u][p])).format(_gbApp.defaultConfig.dateTimeFormat);
                        else if ((typeof (table._innerFields[p]['type']) !== 'undefined') && (table._innerFields[p].type === "money")) {
                            if ((typeof (table._innerFields[p]['precition']) !== 'undefined'))
                                precition = table._innerFields[p].precition;
                            try {
                                newData[u][p] = (newData[u][p] == null) ? '' : newData[u][p].formatMoney(precition, '.', ',');
                            }
                            catch (ex) {
                                console.log(newData[u][p] + " | " + typeof (table._innerFields[p]['type']) + " | " + table._innerFields[p]['type'])
                            }

                        }
                        else if ((typeof (table._innerFields[p]['type']) !== 'undefined') && (table._innerFields[p].type === "userdefine")) {
                            if (typeof (table._innerUserDefineDraw) == 'function')
                                newData[u][p] = table._innerUserDefineDraw(table, newData[u], p, table._innerFields[p]);
                        }
                        if (value === null)
                            newData[u][p] = '';
                        //color
                        if ((typeof (table._innerFields[p]['color']) !== 'undefined')) {
                            newData[u][p] = "<span style='color:" + table._innerFields[p].color + "'>" + newData[u][p] + "</span>";

                        }
                    }
                    continue;
                }
                //------------------------------------------------------
                //automatic
                var jdx = 0;
                for (jdx = 0; jdx < indexDate.length; jdx++) {
                    newData[u][indexDate[jdx]] = (newData[u][indexDate[jdx]] == null) ? '' : moment(parseDateJs(newData[u][indexDate[jdx]])).format(_gbApp.defaultConfig.dateTimeFormat);
                }
                var j = 0;

                for (j = 0; j < table._fieldsList.length; j++) {
                    var value = newData[u][j];


                    //if (typeof (newData[u][j]) !== 'undefined')
                    //    newData[u][j] = '';
                    var precition = 0;
                    //money
                    if ((typeof (table._fieldsList[j]['type']) !== 'undefined') && (table._fieldsList[j].type === "money")) {

                        if ((typeof (table._fieldsList[j]['precition']) !== 'undefined'))
                            precition = table._fieldsList[j].precition;
                        try {
                            newData[u][j] = (newData[u][j] === null) ? '' : ((typeof (newData[u][j]) === "number") ? newData[u][j].formatMoney(precition, '.', ',') : newData[u][j]);
                        }
                        catch (ex) {
                            console.log(newData[u][j] + " | " + typeof (table._fieldsList[j]['type']) + " | " + table._fieldsList[j]['type'])
                        }
                    }
                    else if ((typeof (table._fieldsList[j]['type']) !== 'undefined') && (table._fieldsList[j].type === "userdefine")) {
                        if (typeof (table._innerUserDefineDraw) === 'function')
                            newData[u][j] = table._innerUserDefineDraw(table, newData[u], j, table._fieldsList[j]);
                    }

                    if (value === null)
                        newData[u][j] = '';
                    if ((typeof (table._fieldsList[j]['color']) !== 'undefined')) {
                        newData[u][j] = "<span style='color:" + table._fieldsList[j].color + "'>" + newData[u][j] + "</span>";

                    }
                    if ((typeof (table._fieldsList[j]['css']) !== 'undefined')) {
                        newData[u][j] = "<span class='" + table._fieldsList[j].css + "'>" + newData[u][j] + "</span>";

                    }

                    //fix 2021
                    if ((typeof (table._fieldsList[j]['url']) !== 'undefined')) {
                        newData[u][j] = "<a href='" + table._fieldsList[j].url + "' >" + newData[u][j] + "</a>";

                    }
                }
            }
        }
        catch (error) {
            console.log(error + tableName)
        }
        return newData;
    },
    _createDataTable: function (tableName) {
        if (_gbCaches.memory.get(tableName) !== undefined) {
            var newData = this._formatData(_gbCaches.memory.get(tableName), tableName);
            //table.destroy();
            var datatable = _gbApp.listDataGrids.get(tableName);
            if ((typeof (datatable) !== 'undefined'))
                datatable.destroy();
            var order = [];
            if (typeof (this._table._inderOrder) !== 'undefined')
                order = this._table._inderOrder;
            var group = {};
            if (typeof (this._table._inderGroup) !== 'undefined') {
                group = {
                    endRender: null,
                    startRender: function (rows, group) {
                        var temp = 0;
                        var salaryAvg = 0;
                        //var salaryAvg = rows
                        //    .data()
                        //    .pluck(6)
                        //    .reduce(function (a, b) {
                        //        return a + b.replace(/[^\d]/g, '') * 1;
                        //    }, 0) / rows.count();
                        //temp = salaryAvg;
                        //salaryAvg = $.fn.dataTable.render.number(',', '.', 0, '').display(salaryAvg);

                        var ageAvg = 0;
                        var ageAvg = rows
                            .data()
                            .pluck(5)
                            .reduce(function (a, b) {
                                return a + b * 1;
                            }, 0);
                        //temp = ageAvg - temp;
                        ageAvg = $.fn.dataTable.render.number(',', '.', 0, '').display(ageAvg);

                        return $('<tr/>')
                            .append('<td colspan="3" >Tổng hành trình <span style="color:orange">' + group + '</span></td>')
                            .append('<td>' + rows.count() + ' chặng</td>')
                            .append("<td> <div style='color: red; font-weight: 700; font-size: 14pt;'>" + ageAvg + "'</div></td>")
                            .append('<td/>')



                            .append('<td>' + salaryAvg + '</td>')
                            .append('<td>' + temp + '</td>')
                            .append('<td>' + $.fn.dataTable.render.number(',', '.', 0, '').display(temp) + '</td>')
                            ;
                    },
                    dataSrc: this._table._inderGroup
                }
            }
            _gbApp.listDataGrids.set(tableName, $('#' + tableName + '_TableData').DataTable({
                searchHighlight: true,
                responsive: true,
                dom: 'CBftilp',// goog 19/03
                data: newData,
                buttons: [
                    'colvis', 'excel', 'print'
                ],
                scrollX: true,
                scrollCollapse: true,
                colReorder: true,
                //fixedHeader: true,
                select: true,
                // oColVis: {
                //"aiExclude": [0]
                //         },
                //"columnDefs": [{
                //    "targets": 0,
                //    "width": "10%",
                //    "data": null,
                //    "defaultContent": "<div class='form-group' ><button class='fa fa-cog' id='edit' data-table='" + tableName + "'></button> <button class='fa fa-trash-o' id='delete' data-table='" + tableName + "'></button></div> "
                //}],
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

                "order": order,
                //"rowGroup": group
            })
            );
            $('#' + tableName + '_TableData' + ' tbody').on('click', 'button', function (event) {
                var tablename = $(this).attr('data-table');
                var btnType = this.id;
                var table = _gbApp.listDataGrids.get(tablename);
                var tableJS = _gbApp.listTablesObjectJS.get(tablename);
                var data = table.row($(this).parents('tr')).data();
                if (typeof (tableJS._innerProcessClick) == 'function')
                    tableJS._innerProcessClick(table, tableJS, data, event, this);
                //    alert(data[0] + "'s " + btnType + " is: " + data[1] + event + tablename);
                event.stopPropagation();
                return false;
            });

            var t = _gbApp.listDataGrids.get(tableName);

            $('input#filter').on('keydown', function (ev) {
                if (ev.keyCode == 13 || ev.keyCode == 9) { //only on enter keypress (code 13)
                    var tablename = $(this).attr('data-table');
                    var index = $(this).attr('data-index');
                    var btnType = this.id;
                    var table = _gbApp.listDataGrids.get(tablename);
                    table.columns(index)
                        .search(this.value)
                        .draw();
                }
            });

            //$('input#filter').on('keyup change', function (ev) {
            //    //if (ev.keyCode == 13 || ev.keyCode == 9) { //only on enter keypress (code 13)
            //        var tablename = $(this).attr('data-table');
            //        var index = $(this).attr('data-index');
            //        var btnType = this.id;
            //        var table = _gbApp.listDataGrids.get(tablename);
            //        table.columns(index)
            //            .search(this.value)
            //            .draw();
            //    //}
            //});

            //------------------------------
            $('button.buttons-colvis').html('Hiện / Ẩn cột');
            $('button.buttons-print').html('In');
            $('button.buttons-copy').html('Sao chép');
            $('button.buttons-excel').html('Xuất Excel');
            $('button.buttons-pdf').html('Xuất PDF');

            //_gbApp.listDataGrids.get(tableName).on('responsive-resize', function (e, datatable, columns) {
            //    var count = columns.reduce(function (a, b) {
            //        return b === false ? a + 1 : a;
            //    }, 0);

            //    alert(count + ' column(s) are hidden');
            //});
            //var fc = new $.fn.dataTable.fixedColumns(_gbApp.listDataGrids.get(tableName));
            //_gbApp.listDataGrids.get(tableName).column(0).visible(false);
        }
        //else {
        //    var objAjax = _gbApp.listTablesObjectJS.get(tableName)._listSelfTables[0];
        //    var fieldList = $.map(_gbApp.listTablesObjectJS.get(tableName)._fieldsList, function (f) { return f.field; }).join(',');
        //    objAjax.AjaxObj._f = fieldList;//.substring(0, fieldList.length-1);
        //    //---------------------------------------------------------------------------
        //    $.ajax({
        //        type: "POST",
        //        dataType: "jsonp",
        //        contentType: 'application/json',
        //        beforeSend: function (xhr) {
        //        },
        //        success: function (data) {
        //            //process datatime
        //            //find index

        //            //----------------------------------------
        //            _gbCaches.memory.set(tableName, data.records);
        //            var newData = _gbGrids._formatData(data.records, tableName);
        //            _gbApp.listDataGrids.set(tableName, $('#' + tableName).DataTable({
        //                searchHighlight: true,
        //                responsive: true,
        //                dom: 'Bftilp',// goog 19/03
        //                data: newData,
        //                buttons: [
        //                    'copy', 'excel', 'pdf'
        //                ],
        //                "language": {
        //                    "lengthMenu": "Hiển thị _MENU_ hàng",
        //                    "zeroRecords": "Không tìm thấy kết quả ",
        //                    "info": "Trang _PAGE_ / _PAGES_",
        //                    "infoEmpty": "Không tìm thấy dữ liệu",
        //                    "infoFiltered": "(Đang lọc từ _MAX_ bản ghi)",
        //                    "loadingRecords": "Tải dữ liệu...",
        //                    "processing": "Đang xử lý...",
        //                    "search": "Tìm kiếm:",
        //                    "zeroRecords": "Không tìm thấy dữ liệu",
        //                    "paginate": {
        //                        "first": "Đầu",
        //                        "last": "Cuối",
        //                        "next": "Sau",
        //                        "previous": "Trước"
        //                    },
        //                },
        //                //------------------------------------------------------------
        //                //row group

        //                order: [[2, 'asc']],
        //            })
        //            );
        //            _gbApp.listDataGrids.get(tableName).column(0).visible(false);
        //            //var dataTables = _gbApp.listDataGrids.get(tableName);
        //            //var data = _gbCaches.memory.get(tableName);

        //            //dataTables.clear();
        //            //for (u = 0; u < data.length; u++) {
        //            //    var obj = data[u];
        //            //    dataTables.row.add([
        //            //        '<i class="edit-control fa fa-pencil fa-fw"></i>',
        //            //        obj[0],
        //            //        obj[6],
        //            //        obj[1],
        //            //        obj[2],
        //            //        obj[3],// == null ? '' : moment(parseDateJs(obj[3])).format(objTime.defaultConfig.dateFormat),
        //            //        obj[4],// > 100000 ? "<span style='color:blue'>" + obj[4].formatMoney(0, '.', ',') + "</span>" : obj[4].formatMoney(0, '.', ','),
        //            //        obj[4],// < obj[5] ? "<span style='color:green'>" + obj[5].formatMoney(0, '.', ',') + "</span>" : "<span style='color:red'>" + obj[5].formatMoney(0, '.', ',') + "</span>",
        //            //        obj[7],
        //            //    ]);
        //            //}
        //            //dataTables.columns.adjust().draw();
        //        },
        //        url: serviceBase + '?Param=' + JSON.stringify(objAjax),
        //        error: function (xhr, err) {
        //            alert(err);
        //        }
        //    });
        //}
    }
};



var _gbc = {
    _v: ['Cập nhật', 'Xóa'],
    _e: ['Update', 'Delete'],
    _r: {},
    _d: {},
    $gbTit: {},
    $gbHTab: {},
    $gbCTab: {},
    $gbTotal: {},
    pD: function (r) {
        if (r.hasOwnProperty("d")) {
            return r.d;
        }
        return r;
    },
    it: function (r, $el, dic, obj) {
        _gbc._r = _gbc.pD(r);
        _gbc._d = dic;
        if (_gbc._r.Status == 'OK') {
            $("#pagination").jPaginator({
                nbPages: parseInt((parseInt(_gbc._r.TotalRecordCount) - 1) / obj.mr) + 1,
                marginPx: 5,
                nbVisible: 5,
                selectedPage: obj.si,
                onPageClicked: function (a, num) {
                    obj.si = num;
                    Kernel.P(obj, function (result) { _gbc.it(result, $el, dic, obj); });
                }
            });
            _gbc.$gbCTab = $el;
            _gbc.$gbTit = $(dic.jElementTit);
            _gbc.$gbTit.html(dic.title);
            _gbc.$gbTotal = $(typeof dic.totalDiv == 'string' ? dic.totalDiv : '#gc_ShowNumObjectID');
            _gbc.$gbTotal.html((typeof dic.totalTitle == 'string' ? dic.totalTitle : 'Tổng') + ": <span style='color:red;'>" + _gbc._r.TotalRecordCount + "</span>");
            _gbc.rd();
            cur_gb_cur_ListDataShow = _gbc._r.Records;
        }
        else if (_gbc._r.Records == "Không có quyền truy cập dữ liệu") {
            showError("Bạn không còn quyền truy cập dữ liệu ở phiên giao dịch hiện tại. </br> Vui lòng đăng nhập lại (5s sau trình duyệt tự chuyển).");
            setTimeout(function () { window.location = '../default.aspx'; }, 5000);
        }
    },
    rd: function () {
        _gbc.$gbCTab.html("");
        for (var i = 0; i < _gbc._r.Records.length; i++) {
            var ri = _gbc._r.Records[i];
            var $block = $('<div />').attr('id', 'block' + i).addClass('block');
            var $item = $('<div />').attr('id', 'item' + i).addClass('item');
            var $legBottom = $('<div />').attr('id', 'legBottom' + i).addClass('LegBottom');
            var $footerItem = $('<div />').attr('id', 'footerItem' + i);
            var $btnToolbar = $('<div />').attr('id', 'btnToolbar' + i).addClass('btn-toolbar');
            var $btnGroup = $('<div />').attr('id', 'btnGroup' + i).addClass('btn-group');
            var $upPhieuNhapButton = $('<a />').attr('id', 'upPhieuNhapButton' + i).addClass('btn btn-warning btn-sm')
                .attr('onclick', "_gbc._d['" + _gbc._d.button[0][1] + "'](this," + ri[1] + "," + i + ")")
                .append("<i class='glyphicon glyphicon-user'></i> " + _gbc._d.button[0][0]);
            var $delPhieuNhapButton = $('<a />').attr('id', 'delPhieuNhapButton' + i).addClass('btn btn-danger btn-sm')
                .attr('onclick', "_gbc._d['" + _gbc._d.button[1][1] + "'](this," + ri[1] + "," + i + ")")
                .append("<i class='glyphicon glyphicon-user'></i> " + _gbc._d.button[1][0]);
            _gbc.rdC(ri, $item, i);
            _gbc.$gbCTab.append($block.append($item).append($legBottom.append($footerItem
                .append($btnToolbar.append($btnGroup.append($upPhieuNhapButton).append($delPhieuNhapButton))))));
            if (typeof _gbc._d.minHeight != 'undefined') $item.attr('style', 'min-height: ' + _gbc._d.minHeight);
        }
        _gbc.exCs();
        _gbc._d.eventItem();
    },
    rdC: function (ri, $el, i) {       // Render content of item
        var d = _gbc._d.data;
        var $ct = $('<div style="display: none"/>').attr('data-index', i);
        $el.append($ct);
        for (var j = 0; j < d.length; j++) {
            var $div = $('<' + d[j][0] + ' ' + d[j][1] + '/>');
            var $la = $('<' + d[j][2] + ' ' + d[j][3] + '/>').addClass(d[j][4]).append(d[j][6]);
            var $lab = d[j][2] != '' ? (d[j][5] != '' ? $la.attr('id', d[j][5]) : $la) : d[j][6];
            var val = _gbc.pTd(ri[d[j][12]], d[j][11], d[j][13]);
            var $te = $('<' + d[j][7] + ' ' + d[j][8] + '/>').addClass(d[j][9]).append(val);
            var $tex = d[j][7] != '' ? (d[j][10] != '' ? $te.attr('id', d[j][10]) : $te) : val;
            $el.append($div.append($lab).append($tex));
        }
    },
    pTd: function (d, td, df) {
        var r = '';
        if (td === 1 || td === 2 || td === 3 || td === 4) {
            r = d == null ? df : (d + '');
        } else if (td == 5) {
            r = d == null ? df : (typeof d == 'string' ? _parseDate(d + '').format('dd/MM/yyyy HH:mm:ss') : d.format('dd/MM/yyyy HH:mm:ss'));
        } else if (td === 6) {
            r = d == null ? df : gcFormatStr(d + '');
        } else if (td === 7) {
            r = d == null ? df : (typeof d == 'string' ? _parseDate(d + '').format('dd/MM/yyyy') : d.format('dd/MM/yyyy'));
        }
        return r;
    },
    exCs: function () {
        $(".item").focusout(function () {
            $(this).siblings().children().css("display", "none");
        });
        $(".LegBottom").hover(function () { $(this).children().css("display", "block"); },
            function () { $(this).children().css("display", "none"); });
        $(".item").hover(function () { $(this).siblings().children().css("display", "block"); },
            function () { $(this).siblings().children().css("display", "none"); });
        $(".LegBottom").children().css("display", "none");
        if (typeof gc_fn_Gobal_ConfigRightLoadListObject === 'function') { gc_fn_Gobal_ConfigRightLoadListObject(); }
        $("#gc_gobal_PagerTopID").show();
        $('#gc_gb_MessageInfomation').html("<i class='glyphicon glyphicon-ok '></i>&nbsp;<strong>Đã tải dữ liệu thành công.</strong> ");
        _gbc.$gbCTab.removeClass('loaderleft');
        modalcenter.close();
        modal.close();
    }
};

var __SettingObjectModal =
{
    objName: '',
    objForm: {},
    objLanguage: {},
    set: function (objName) {
        this.objName = objName;
        this.objForm = _gbDictionary[objName];
        this.objLanguage = _gbLanguageI18[objName];
        return this;
    },
    //userRole: Dev or normal User
    show: function ($targetObj, userRole = 'User') {
        var listFields = this.objForm._fieldsList;
        var listFieldsLang = this.objLanguage._fieldsList;

        var $form = $('<form></form>')
        var $ul = $('<ul></ul>')
            .addClass('list-group');

        //--------------------------------------
        this._addFormRowCol($ul, userRole);
        //tạo danh sách list Item
        for (var i = 0; i < listFields.length; i++) {
            var field = listFields[i];
            var fieldLang = listFieldsLang[i];
            this._addItem(field, fieldLang, $ul, userRole);
        }
        $ul.appendTo($form);
        $form.appendTo($targetObj);
    },
    createObject: function () {

        var sql = $("#" + this.objName + '_objRowColCreate')[0].value;

        var sqlRequest = {
            AjaxObj:
            {
                a: "SQL",
                sql: sql,
                ReloadModel: true,
                ModelDb: "AppCoreDb",
                jSonFormat: "1"
            },
            APIkey: "kUcHUoWsxLPrIJy$rTcbeG5k"
        };
        _gbAjax.postN2(sqlRequest).then(function (data) {
            console.log(data);
        });
    },
    saveToObject: function () {
        _gbDictionary[this.objName]._editform = JSON.parse($("#" + this.objName + '_objRowColSetting')[0].value);
        _gbLanguageI18[this.objName].UIname = JSON.parse($("#" + this.objName + '_objNameSetting')[0].value);

        var listFields = this.objForm._fieldsList;
        var listFieldsLang = this.objLanguage._fieldsList;

        //tạo danh sách list Item
        for (var i = 0; i < listFields.length; i++) {
            var field = listFields[i];
            var fieldLang = listFieldsLang[i];

            _gbDictionary[this.objName]._fieldsList[i] = JSON.parse($("#" + field.field + '_objsetting')[0].value);
            _gbLanguageI18[this.objName]._fieldsList[i] = JSON.parse($("#" + field.field + '_objLangsetting')[0].value);

        }
        //Save it to server


        var Request = {
            SaveObjectJS: true,
            ObjectJsName: this.objName,
            ObjecJS: _gbDictionary[this.objName],
            ObjecLangJS: _gbLanguageI18[this.objName],
            AjaxObj: { SaveObjectJS: true, ModelDb: "CanteenDb" }
        };
        _gbAjax.postN2(Request).then(function () {
            reloadJs('/js/ClassCore/CanteenDb_langFull.js');
            reloadJs('/js/ClassCore/CanteenDb.js');
        });

    },
    _addFormRowCol: function ($targetObj, userRole) {

        if (userRole === 'Dev') {

            var $liCreate = $('<li></li>')
                .addClass('list-group-item');
            var $inputCreate = $('<textarea></textarea>')
                .addClass('form-control')
                //.attr('type', 'text')
                .attr('id', this.objName + '_objRowColCreate')
                //.html(JSON.stringify(this.objForm._editform));
                .load("/js/htmlControl/CreateObjectTemplate.html")
            $inputCreate.appendTo($liCreate);
            $liCreate.appendTo($targetObj);

            var $li = $('<li></li>')
                .addClass('list-group-item');
            var $input1 = $('<textarea></textarea>')
                .addClass('form-control')
                //.attr('type', 'text')
                .attr('id', this.objName + '_objRowColSetting')
                .html(JSON.stringify(this.objForm._editform));
            $input1.appendTo($li);
            $li.appendTo($targetObj);

            //-------

            var $li2 = $('<li></li>')
                .addClass('list-group-item');
            var $input2 = $('<input></input>')
                .addClass('form-control')
                .attr('type', 'text')
                .attr('id', this.objName + '_objNameSetting')
                .attr('value', JSON.stringify(this.objLanguage.UIname));
            $input2.appendTo($li2);
            $li2.appendTo($targetObj);
        }
    },
    _addItem: function (field, fieldLang, $targetObj, userRole) {

        var $li = $('<li></li>')
            .addClass('list-group-item');

        var $div = $('<div></div>')
            .addClass('mb-3');
        //$div.appendTo($li);

        //--------------------
        //create div form group
        var $divformgorup = $('<div></div>')
            .addClass('form-group');
        //$divformgorup.appendTo($div);

        var $input = $('<input></input>')
            .addClass('form-check-input')
            .attr('type', 'checkbox')
            .attr('value', '');
        $input.appendTo($divformgorup);
        var $label = $('<label></label>')
            .addClass('col-form-label')
            .html(field.field);
        $label.appendTo($divformgorup);

        //------------------------------
        $divformgorup.appendTo($div);
        //------------------------------
        if (userRole === 'Dev') {
            var $label2 = $('<label></label>')
                .addClass('col-form-label')
                .html('Form Setting');
            $label2.appendTo($div);
            var $input2 = $('<input></input>')
                .addClass('form-control')
                .attr('type', 'text')
                .attr('id', field.field + '_objsetting')
                .attr('value', JSON.stringify(field));
            $input2.appendTo($div);

            //---------------------------------------
            //langguage
            var $label3 = $('<label></label>')
                .addClass('col-form-label')
                .html('Langguage Setting');
            $label3.appendTo($div);
            var $input3 = $('<input></input>')
                .addClass('form-control')
                .attr('type', 'text')
                .attr('id', field.field + '_objLangsetting')
                .attr('value', JSON.stringify(fieldLang));
            $input3.appendTo($div);
        }
        //---------------------------------
        $div.appendTo($li);
        $li.appendTo($targetObj);

        return $targetObj;
    }
};

var __CreateObjectModal =
{
    objName: '',
    objForm: {},
    objLanguage: {},
    set: function (objName) {
        this.objName = "_createAllObj";
        return this;
    },
    //userRole: Dev or normal User
    show: function ($targetObj, userRole = 'User') {
        var listFields = this.objForm._fieldsList;
        var listFieldsLang = this.objLanguage._fieldsList;

        var $form = $('<form></form>')
        var $ul = $('<ul></ul>')
            .addClass('list-group');

        //--------------------------------------
        this._addFormRowCol($ul, userRole);
        //tạo danh sách list Item
        
        $ul.appendTo($form);
        $form.appendTo($targetObj);
    },
    createObject: function () {

        var listObjText = $("#" + this.objName + '_objRowColCreate')[0].value;
        
        //console.log(listObjectSpaces);
        __ParserSpaces.init(listObjectSpaces);
        __ParserSpaces.Parser();
        
        //_gbAjax.postN2(sqlRequest).then(function (data) {
        //    console.log(data);
        //});
    },
    saveToObject: function () {
        
        

    },
    _addFormRowCol: function ($targetObj, userRole) {

        if (userRole === 'Dev') {

            var $liCreate = $('<li></li>')
                .addClass('list-group-item');
            var $inputCreate = $('<textarea></textarea>')
                .addClass('form-control')
                //.attr('type', 'text')
                .attr('id', this.objName + '_objRowColCreate')
                .attr("rows",'100')
                //.html(JSON.stringify(this.objForm._editform));
                .load("/js/Instances/allObject.js")
            $inputCreate.appendTo($liCreate);
            $liCreate.appendTo($targetObj);
        }
    },
    _addItem: function (field, fieldLang, $targetObj, userRole) {

        return $targetObj;
    }
};

var __defineGroup = {
    //Sau khi bạn định nghĩa xong bạn có thể định nghĩa 1 account bất kỳ bằng
    //account:{ref:true, mainObject:adminGroup,listChildObject:{adminGroup.listChildObject[0,2,3,4], sellerGroup.listChidObject[3,4,6]} }
    AdminGroup: {
        //trang chính vào
        mainObject: {
            _id: "gcGobal_INCOM_Receipt", instance: "self", showsearchbar: true, showIcon: "bi-server", showInstanceName: "Nhập đơn hàng"
        },
        //add to menu
        listChildObject: [
            {
                _id: "gcGobal_CUST_Customer", instance: "self", showIcon: "bi-geo-fill", showsearchbar: true, showInstanceName: "Khách hàng",
                //Định nghĩa list children ở đây
            },
            {
                _id: "gcGobal_ACCOUNT_Account", instance: "self", showIcon: "bi-lightbulb-fill", showsearchbar: true, showInstanceName: "Tài khoản",
            },
            {
                _id: "gcGobal_STOCK_gcProductList", instance: "self", showIcon: "bi-gift", showsearchbar: true, showInstanceName: "Hàng hóa",
            },
        ],

    },
    SellerGroup: {
        //trang chính vào
        mainObject: {
            _id: "gcGobal_CUST_Customer", instance: "self", showsearchbar: true, showIcon: "bi-server", showInstanceName: "Nhập đơn hàng",
        },
        //add to menu
        listChildObject: [
            {
                _id: "gcGobal_CUST_Customer", instance: "self", showIcon: "bi-geo-fill", showsearchbar: true, showInstanceName: "Khách hàng",
            },
            {
                _id: "gcGobal_STOCK_gcProduct_Input", instance: "self", showIcon: "bi-lightbulb-fill", showsearchbar: true, showInstanceName: "Tài khoản",
            },
            {
                _id: "gcGobal_STOCK_gcProductList", instance: "self", showIcon: "bi-gift", showsearchbar: true, showInstanceName: "Hàng hóa",
            },
        ],
    },
    SellerReceiveGoup: {},
    SellerDeliveryGroup: {},
    ServiceGroup: {},
    OperatorGroup: {},
    HumanResourceGroup: {},
    DriverGroup: {},
    ShipperGroup: {},
    CEOGroup: {},
    StockGroup: {},
    InputStockGroup: {},
    OuputStockGroup: {},
    ListDataGroup: {},
    PartAccountingGroup: {},
    ConfigAppGroup: {},
    UserUtilityGroup: {},
    CustomerGroup: {},
    CustomerCareServiceGroup: {},
    PartnerGroup: {},
    ProduceGroup: {},
    DebtGroup: {},

    //accounting
    AccountingGroup: {},
    AdminAccountingGroup: {},
    PaymentGroup: {},
    ReceiverGroup: {},
    EmployeeGroup: {},

};
var __GroupRight = {
    _roleName: "",
    init: function ($targetObj, objectGroup, userRole = 'self') {
        var mainObject = objectGroup.mainObject;
        var listChildObject = objectGroup.listChildObject;
        this.addItem(mainObject._id, mainObject.showInstanceName, $targetObj, mainObject.showIcon, userRole);
        //--------------------------------------------
        for (var i = 0; i < listChildObject.length; i++) {
            var ChildObject = listChildObject[i];
            this.addItem(ChildObject._id, ChildObject.showInstanceName, $targetObj, ChildObject.showIcon, userRole);

        }
        //this.addItem('StocInputkGroup', 'Nhập hàng', $targetObj, userRole);
        //this.addItem('StockGroup', 'Kho hàng', $targetObj, userRole);
        //this.addItem('SellerGroup', 'Bán hàng', $targetObj, userRole);
    },

    addItem: function (id, name, $targetObj, classIcon, userRole = 'self') {

        //var classIcon = 'bi-server';
        var $li = $('<li></li>')
            .addClass('nav-item');

        var $a = $('<a></a>')
            .addClass('nav-link text-dark bs-callout bs-callout-info')
            .attr("style", "padding:7px !important;")
            .attr("id", 'navmenu_link_' + id)
            .attr("ObjectName", id)
            .attr("href", '#')
            .html('<i class="bi ' + classIcon + '" style="color:orange"></i>' + name);

        $a.appendTo($li);
        $li.appendTo($targetObj);
        return $targetObj;
    },
    addHomeItem: function ($targetObj) {
        var classIcon = 'bi-server';
        var $li = $('<li></li>')
            .addClass('nav-item');

        var $a = $('<a></a>')
            .addClass('nav-link text-dark bs-callout bs-callout-info')
            .attr("style", "padding:7px !important;")
            .attr("id", '_idMenuHome')
            .attr("href", 'Privacy')

            .html('<i class="bi bi-wrench" style="color:orange"></i>' + 'Home');

        $a.appendTo($li);
        $li.appendTo($targetObj);
        return $targetObj;


    }
};