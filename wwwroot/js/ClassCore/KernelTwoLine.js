var _la = 0;//0:vietnamese,1:english
var cssb = ["btn btn-warning margin-ten-ten", "btn btn-default btn-form-data", "btn btn-default margin-ten-ten btn-form-data"];
var cssbi = ["fa-plus", "fa-plus icon-white color-success", "fa fa-edit icon-white color-info"];
var _gb = //gobal object
    {
        ll: function (i, s) { switch (_la) { case 0: return s._v[i + 1].replace('<span style="color: red;">*</span>', ''); case 1: return s._e[i + 1].replace('<span style="color: red;">*</span>', ''); } },
    _l: function (i) { switch (_la) { case 0: return _gb._v[i]; case 1: return _gb._e[i]; } },
    _v: ['Đóng', 'Thêm mới', 'Cập nhật', 'Xóa', 'Lưu', 'Sao chép', 'Có', 'Không', 'Báo cáo', 'Tìm kiếm', 'Cấu hình','Tùy chọn','In'],
    _e: ['Close', 'Add New', 'Update', 'Delete', 'Save', 'Copy', 'Yes', 'No', 'Report', 'Search','Config','Options','Print'],
    sfi: function (id) {

        var to = $("[id*='f" + id + "']");
        for (m = 0; m < to.length; m++) { $(to[m]).val(''); };
        // setup the first input;
        for (m = 0; m < $("#f" + id + " input").length; m++) {
            if ($($("#f" + id + " input")[m]).css('display') !== 'none') {
                $($("#f" + id + "  input")[m]).focus(); $($("#f" + id + "  input")[m]).select(); break;
            }
        }
    },
    rf: function (s) {
        while (s._r.length > 0)
            s._r.pop();
        while (s._f.length > 0)
            s._f.pop();
    },
    a: function ($r, i, ii, _s, idx) {
        /*return label for field i*/
        var $fg = $("<div />").addClass("form-group " + (ii[3] === '9' ? " col-md-3 col-xs-3 " : "col-md-6 col-xs-12"));
        var $rfg = $fg.appendTo($r);
        _gb.l(i, _s.id, _s._v, _s._e, ii, idx).appendTo($rfg);
        if (ii[3] === '5')
            //_gb.i(i, _s.id, "name='datepicker' type='text' ", ii).appendTo($("<div class=\"input-group\" />").appendTo($rfg));//.after("<span class=\"input-group-addon calendar\"><i class=\"fa fa-calendar color-orange\"></i></span>");
            _gb.i(i, _s.id, "name='datepicker' type='text' ", ii).appendTo($rfg);//.after("<span class=\"input-group-addon calendar\"><i class=\"fa fa-calendar color-orange\"></i></span>");
        else {
            if (ii[4] === '1')//ref key
            {
                var $cb = _gb.i(i, _s.id, "name='combo'  type='text' ", ii);
                $cb.click(function (ev) { $(this).select(); _gb.sv(this.id, ev, _s, ii[5], ii[6], ii); });
                $cb.keyup(function (ev) { _gb.sv(this.id, ev, _s, ii[5], ii[6], ii); });
                $cb.appendTo($rfg);
                _gb.ih(i, _s.id, " type='text' ", ii).appendTo($rfg);
            }
            else if (ii[3] === '9') _gb.i(i, _s.id, " type='checkbox' ", ii).appendTo($rfg);
            else if (ii[3] === '6') _gb.t(i, _s.id, "", ii).appendTo($rfg);
            else if (ii[3] === '1' || ii[3] === '2') _gb.i(i, _s.id, " type='text' name='money' ", ii).appendTo($rfg);//money
            else if (ii[3] === '99' ) _gb.i(i, _s.id, " type='text' name='specname' ", ii).appendTo($rfg); // for custom text and process 15/01/2017
            else _gb.i(i, _s.id, " type='text' ", ii).appendTo($rfg);
        }
        return $r;
    },
    bfg: function (_s) {//build form
        var sr = '';
        for (i = 0; i < _s._f.length; i++) {
            var ii = _s._f[i].split(',');
            var ic = parseInt(ii[0]);
            var f0 = (i <= 9) ? '0' + i : '' + i;
            if (sr === '') {//first is table name
                //                if (_gb.ll(ic, _s) === 'Id')
                //                    sr += ("f|1|: {key: true, list: false, create: false,edit: false, title: '|0|', display: function (data) { return (data.record.f|1| ===null)?'':data.record.f|1|+'' }  } ").f2(_gb.ll(ic, _s), f0);
                //                else
                //                    sr += ("f|1|: {key: true, create: false,edit: false, title: '|0|', display: function (data) { return (data.record.f|1| ===null)?'':data.record.f|1|+'' }  } ").f2(_gb.ll(ic, _s), f0);
                sr += ("f|1|: {key: true, " + ((ii[2] === '0' || ii[2] === '2') ? 'list: false,' : '') + "create: false,edit: false, title: '|0|', display: function (data) { return (data.record.f|1| ===null)?'':data.record.f|1|+'' }  } ").f2(_gb.ll(ic, _s), f0);
            }
            else {
                var v = new String(",f|0|: {" + ((ii[2] === '0' || ii[2] === '2') ? 'list: false,' : '') + "title: '|1|',display: function (data) { return (data.record.f|2| ===null)?'':data.record.f|2|+'' }  } ").f2(f0, _gb.ll(ic, _s), ii[1]);
                if (ii[4] === '1')//f key
                    v = new String(",f|0|: {" + ((ii[2] === '0' || ii[2] === '2') ? 'list: false,' : '') + "title: '|1|',display: function (data) { return (data.record.f|2| ===null)?'':data.record.f|2|+'' }  } ").f2(f0, _gb.ll(ic, _s), (parseInt(ii[7]) - 1) + '');
                else {
                    if ((ii[3] === '3' || ii[3] === '2' || ii[3] === '1') && ii[4] !== '1')//number
                        v = new String(",f|0|: {" + ((ii[2] === '0' || ii[2] === '2') ? 'list: false,' : '') + "title: '|1|',display: function (data) { return (data.record.f|2| ===null)?'':(parseFloat(data.record.f|2|+'') >= 0 ? c(data.record.f|2|+'') : ('-' + c(-parseFloat(data.record.f|2|+'')))) }  } ").f2(f0, _gb.ll(ic, _s), ii[1]);
                    else if (ii[3] === '5')//date
                        v = new String(",f|0|: {" + ((ii[2] === '0' || ii[2] === '2') ? 'list: false,' : '') + "title: '|1|',display: function (data) { return (data.record.f|2| ===null)?'':(_la === 0)?parseDateJs(data.record.f|2|+'').format('dd/MM/yyyy HH:mm:ss'):parseDateJs(data.record.f|2|+'').format('MM/dd//yyyy HH:mm:ss') }  } ").f2(f0, _gb.ll(ic, _s), ii[1]);
                    else if (ii[3] === '9')
                        v = new String(",f|0|: {" + ((ii[2] === '0' || ii[2] === '2') ? 'list: false,' : '') + "title: '|1|', display: function (data) { var $img=$(\"<i class='fa \" + (data.record.f|2| === true ?  'fa-check-square-o' : 'fa-square-o') + \" icon-jtable'></i>\"); return $img; } } ").f2(f0, _gb.ll(ic, _s), ii[1]);
                }
                if (typeof pCW === 'function') {
                    v = pCW(v, _s, _gb.ll(ic, _s), i, ii, ic, f0);
                }
                sr += v;
            }
        }
        var bAdd = {
            allow: false,
            sr: '',
        };
        if (typeof pGe_o === 'function') {
            bAdd = pGe_o(sr, _s);
            if (bAdd.allow)
                sr += bAdd.sr;
        }
        if (!bAdd.allow)
            //sr += ",d: {width: '1%',sorting: false, type: 'img',title: '', display: function (data) { var $img=$(\"<div class='gimg'></div>\"); $img.click(function(){ del(data.record,'" + _s._e[0] + "','" + _s.id + "'," + _s._e.length + ")}); return $img; } } ";
            sr += ",d: {width: '1%',sorting: false, type: 'img',title: '', display: function (data) { var $img=$(\"<i class='fa fa-trash-o icon-jtable'></i>\"); $img.click(function(){ del(data.record,'" + _s._e[0] + "'," + _s.id + "," + _s._e.length + ")}); return $img; } } ";
        //sr += ",d: {width: '1%',sorting: false, type: 'img',title: '', display: function (data) { var $img=$(\"<button class='icon-remoce-jtable' type='button' title='Xóa'></button>\"); $img.click(function(){ del(data.record,'" + _s._e[0] + "'," + _s.id + "," + _s._e.length + ")}); return $img; } } ";
        return sr;
    },
    fi: function (_s) { //form input
        _s.$dw = $("<div class='" + _s.dwcss + "'></div>");
        var idx = 0;
        for (i = 0; i < _s._d.length; i++) {
            var r = _s._d[i].split('|');
            var $r01 = _gb.r(i < 10 ? '0' + i : i + '', _s.id);;
            for (u = 0; u < r.length; u++)
            { idx++; var ii = r[u].split(','); _gb.a($r01, ii[0], ii, _s, parseInt(ii[0]) + 1); }
            _gb.fh($r01);
            $r01.appendTo(_s.$dw);
        }
        $("<div />").addClass("clear").appendTo(_s.$dw);
        _gb.be().appendTo(_s.$dw);
        if (typeof pfi_o === 'function') pfi_o(_s.$dw, _s); //extension fi
    },
    ff: function (_sg, _s) {// form full, sg: show grid
        var $dall = $("<div id='" + _s.id + "' class='" + _s._sy + "'></div>");
        _gb.fc(_sg, _s).appendTo($dall);
        if ($("#gobalSaveFormInner").length <= 0)
            $('body').append($("<div id='gobalSaveFormInner' style='display:none;'></div>"));
        $("#gobalSaveFormInner").html($dall);
        //setup css
        $("#" + _s.id + " label").addClass('control-label');
        $("#" + _s.id + " input[name*='combo']");
        $("#" + _s.id + " input[type*='text']");
        $("#" + _s.id + " input[type*='checkbox']").addClass('inputcheckbox');
        $("#" + _s.id).find(".login_sign").find(':checkbox').checkboxpicker();
        setClassAll(_s.id);
        if (typeof psc_o === 'function') psc_o(_s);
        //load data grid
        if (_sg !== null && _sg !== undefined && _sg) {
            var obj = { s: _s, a: 'pGet' + _s._e[0], c: '', d: '', type: 'p', cl: '*', si: 1, mr: (typeof _s.mr === "number" ? _s.mr : 20), se: (typeof _s.se === "string" ? _s.se : ' Id desc'), f: gb_strFilterGrid };
            if (typeof pJtablCustomizeObj === 'function')
                pJtablCustomizeObj(obj, _s);

            if (ValidO(_s.objInfor)) _s.objInfor.c = GetListInfoCondition(_s);
            $("#" + _s.id + "_g").jtable('load', {
                obj: (ValidO(_s.objInfor) ? [obj, _s.objInfor] : obj)
            , jtStartIndex: 0
            , jtPageSize: 300
            });
        }
        if (!_sg && typeof gR === 'function') {
            gR(_s);
        }
        return _s;
    },
    fc: function (_sg, _s) { //form control, sg: show grid
        var $fa = _gb.fa(_s.id);
        var $da = _gb.da(_s.id);
        var $db = _gb.db(_s.cssb);
        //_gb.btn(_s, cssb[0], 'c', 0, _sg).appendTo($db);
        _gb.btn(_s, cssb[1], 'i', 1, _sg).appendTo($db);
        _gb.btn(_s, cssb[2], 'u', 2, _sg).appendTo($db);
        _gb.fi(_s);
        $db.appendTo(_s.$dw)
        _s.$dw.appendTo($fa);
        if (_sg != null && _sg !== undefined && _sg) {
            _gb.sg($da, _s, (typeof _s.mr === "number" ? _s.mr : 20));
        }
        if (typeof pfc_o === 'function') pfc_o(_s.$dw, _s); //extension fc
        $da.appendTo($fa);
        return $fa;
    },
    sf: function (o, s) {//set form
        _gb.pr(s);
        for (u = 0; u < s._f.length; u++)// duyet field, field phai duoc parser tu _gb
        {
            var of = s._f[u].split(',');
            var fel = 'f' + of[1];
            var felv = 'f' + (parseInt(of[7]) - 1);
            if (of[4] === '1') {
                if ($('#f' + s.id + of[0] + 'i').length) $('#f' + s.id + of[0] + 'i').val((o[felv] === null) ? '' : o[felv] + '');
                if ($('#f' + s.id + of[0] + 'h').length) $('#f' + s.id + of[0] + 'h').val((o[fel] === null) ? '' : o[fel] + '');
            }
            else {
                if (of[3] === '5') { if ($('#f' + s.id + of[0] + 'i').length) $('#f' + s.id + of[0] + 'i').val((o[fel] === null) ? '' : (_la === 0) ? parseDateJs(o[fel] + '').format('dd/MM/yyyy HH:mm:ss') : parseDateJs(o[fel] + '').format('MM/dd/yyyy HH:mm:ss')); } //date time
                else if ((of[3] === '3' || of[3] === '2' || of[3] === '1') && of[4] != '1') { if ($('#f' + s.id + of[0] + 'i').length) $('#f' + s.id + of[0] + 'i').val((o[fel] === null) ? '' : (parseFloat(o[fel] + '') >= 0 ? c(o[fel] + '') : ('-' + c(-parseFloat(o[fel] + ''))))); } //int
                else if (of[3] === '9') { if ($('#f' + s.id + of[0] + 'i').length) (o[fel] === null || !o[fel]) ? ($('#f' + s.id + of[0] + 'i').prop('checked', false)) : ($('#f' + s.id + of[0] + 'i').prop('checked', true)); }
                else if ($('#f' + s.id + of[0] + 'i').length) $('#f' + s.id + of[0] + 'i').val((o[fel] === null) ? '' : o[fel] + '');
            }
        }
        _gb.rf(s);
        return s;
    },
    gf: function (s) { //get form
        _gb.pr(s);
        s._coj = new Object();
        for (u = 0; u < s._f.length; u++) {
            var of = s._f[u].split(',');

            var fel = 'f' + of[1];
            var felv = 'f' + (parseInt(of[7]) - 1);
            if (of[4] === '1') {
                if ($('#f' + s.id + of[0] + 'h').length) s._coj['f' + of[0]] = ($('#f' + s.id + of[0] + 'h').val()).ra(',', '');;  //f key
            }
            else {
                if (of[3] === '5') {//date
                    if ($('#f' + s.id + of[0] + 'i').length)
                        s._coj['f' + of[0]] = (_la === 0) ? d2e($('#f' + s.id + of[0] + 'i').val()) : $('#f' + s.id + of[0] + 'i').val(); //date time
                }
                else if ((of[3] === '3' || of[3] === '2' || of[3] === '1') && of[4] != '1') {
                    if ($('#f' + s.id + of[0] + 'i').length)
                        s._coj['f' + of[0]] = ($('#f' + s.id + of[0] + 'i').val()).ra(',', ''); //number
                }
                else if (of[3] === '9') {
                    if ($('#f' + s.id + of[0] + 'i').length)
                        s._coj['f' + of[0]] = ($('#f' + s.id + of[0] + 'i').is(':checked')); //bit
                }
                else {
                    if ($('#f' + s.id + of[0] + 'i').length)
                        s._coj['f' + of[0]] = $('#f' + s.id + of[0] + 'i').val(); //normal
                }
            }
        }
        _gb.rf(s);
        return s;
    },
    pr: function (s) {//push row
        for (i = 0; i < s._d.length; i++) {
            s._r.push(s._d);
            var r = s._d[i].split('|');
            for (u = 0; u < r.length; u++) s._f.push(r[u]);
        }
        return this;
    },
    //show and hide control
    fh: function ($r) {
        var t1 = 0;
        for (u = 0; u < $r.find("label").length; u++)
            if ($($r.find("label")[u]).css('display') === 'none') { t1++; $($r.find("label")[u]).closest(".form-group").attr('style', 'display:none !important'); }
        if (t1 === $r.find("label").length) $($r).attr('style', 'display:none !important');
    },
    /*return input for field i,if foreign key, add service & hide input*/
    i: function (i, id, n, ii) {
        if (ii[2] === '0' || ii[2] === '3') return $("<input id='f" + id + ii[1] + "i' style='display:none !important;' autocomplete='off' " + n + "></input>");
        else return $("<input id='f" + id + ii[1] + "i'  autocomplete='off' " + n + "></input>");
    },
    ih: function (i, id, n, ii) { return $("<input id='f" + id + ii[1] + "h' type='text' style='display:none !important;' autocomplete='off' " + n + "></input>"); },
    l: function (i, id, v, e, ii, idx) { /*return label for field i*/
        var $v = $("<label id='l" + id + ii[1] + "i' for='f" + id + ii[1] + "i'>" + ((_la === 0) ? v[idx] : e[idx]) + "</label>");
        if (ii[2] === '0' || ii[2] === '3')
            $v = $("<label id='l" + id + ii[1] + "i' style='display:none !important;' >" + ((_la === 0) ? v[idx] : e[idx]) + "</label>");
        return $v;
    },
    r: function (i, id) { /*return label for field i*/return $("<div class='row col-md-12 col-xs-12' id='r" + i + id + "'></div>"); },
    g: function (id) { /*return label for field i*/return $("<div id='" + id + "_g'></div>"); },
    be: function () {
        var $btn = $("<button style='display:none;'></button>");
        $btn.click(function (ev) { ev.preventDefault(); ev.stopPropagation(); });
        return $btn;
    },
    fa: function (id) { return $("<form name='multiform' action=''  method='POST' id='" + id + "_f'></form>") },
    da: function (id) { return $("<div id='" + id + "_i'></div>") },
    db: function (css) { return $("<div class='" + css + "'></div>") },
    btn: function (s, css, t, i, sg) {//default css=cssb[0],t:type:a->add, u->udpate,i->insert
        var $btn = $("<button type='button' class='" + css + "'  id='" + s.id + t + "_'><i class='fa " + cssbi[i] + "'></i>" + _gb._l(i) + "</button>");
        $btn.click(function (ev) {
            if (t === "c") {
                $.colorbox.close();
                return;
            }
            var flag = false;
            if (typeof pVd === 'function') {   // validate
                flag = pVd(s);
            }
            if (!flag) {
                _gb.gf(s);
                var obj = new Object();
                var type = ((t === 'i') ? 'Insert' : ((t === 'u') ? 'Update' : (t === 'd') ? 'Remove' : 'NONE'));
                if (typeof pad_o === 'function') if (pad_o(s)) return btn; //break here
                obj.a = type + s._e[0];
                obj.c = { Id: s._coj.f00 };
                obj.type = t;
                obj.cl = '';
                obj.si = 1;
                obj.mr = 20;
                obj.id = s.__id;
                obj.d = s._coj;
                obj.P = "U";
                if (typeof pCDT === 'function') //post customize start date and end date
                    pCDT(s, obj);
                var $al = $("<div />").addClass("alert alert-info alert-info-gc-small").text('Loading...');
                $("#" + s.id + "_f .login_sign").before($al);
                var to = $("[id*='f" + s.id + "']");
                for (m = 0; m < to.length; m++) {
                    $(to[m]).val('');
                    if ($(to[m]).attr('type') === 'checkbox') $(to[m]).prop('checked', false);
                };
                //-----------------------------------------------------------------------------
                if (ValidO(s.objInfor)) s.objInfor.c = GetListInfoCondition(s);
                var objForGID = null;
                if (sg != null && sg != undefined && sg) {
                    var pageNum = $("#" + s.id + "_g .jtable-goto-page select option:selected").val();
                    var pageSize = parseInt($("#" + s.id + "_g .jtable-page-size-change select option:selected").val());
                    var RowNo = parseInt(pageNum); if (RowNo < 1) RowNo = 1; if (type === 'Insert') RowNo = 1;// Insert cho lên đầu lưới
                    if (typeof DefineListFilter === 'function')
                        gb_strFilterGrid = DefineListFilter(s.id);
                    objForGID = { s: s, a: 'pGet' + s._e[0], c: '', d: '', type: 'p', cl: '*', si: RowNo, mr: pageSize, se: (typeof s.se === "string" ? s.se : ' Id desc'), f: gb_strFilterGrid, bUpdate:true };
                }
                var postData = (objForGID != null) ? (ValidO(s.objInfor) ? [obj, objForGID, s.objInfor] : [obj, objForGID]) : obj;

                request(postData, {
                    success: function (o, op, r) {
                        if (r.Records === "Không có quyền truy cập dữ liệu") {
                            showError("Bạn không còn quyền truy cập dữ liệu ở phiên giao dịch hiện tại. </br> Vui lòng đăng nhập lại (2s sau trình duyệt tự chuyển).");
                            setTimeout(function () { window.location = '../default.aspx'; }, 2000);
                            return false;
                        }
                        $al = $("#" + s.id + "_f").find(".alert.alert-info.alert-info-gc-small");
                        if (r.Status === "OK" && r.Records != '-1') $al.remove()/*$al.text("Update success")*/; else $al.text("Update fail");
                        var t = setTimeout(function () { $al.remove(); clearTimeout(t); }, 2000);
                        if (typeof p_us_o === 'function')
                            p_us_o(s, t, r, obj);
                        if (sg != null && sg != undefined && sg) {
                            obj = { s: s, a: 'pGet' + s._e[0], c: '', d: '', type: 'p', cl: '*', si: 1, mr: (typeof s.mr === "number" ? s.mr : 20), se: (typeof s.se === "string" ? s.se : ' Id desc'), f: gb_strFilterGrid };
                            if (typeof pJtablCustomizeObj === 'function')
                                pJtablCustomizeObj(obj, s);
                            var data = formatDataForGRID(r.ListRecords[1]);
                            r.Records = data.Records;
                            r.TotalRecordCount = r.ListRecords[1].TotalRecordCount;

                            $("#" + s.id + "_g").jtable('loadDataAtClient', {
                                obj: (ValidO(s.objInfor) ? [obj, s.objInfor] : obj)
                                , jtStartIndex: 0
                                , jtPageSize: 300
                            }, r);
                        }
                    },
                    error: function (e) {
                        $al.text("Update error"); var t = setTimeout(function () { $al.remove(); clearTimeout(t); }, 2000);
                    }
                });


                // setup the first input;
                //_gb.sfi(s.id);
                if (typeof pAssId === 'function')
                    pAssId(s);

            }
        });
        return $btn;
    },
    sg: function ($d, s, si) { //form service, $d: div all, s is object to build, si, page size
        _gb.g(s.id).appendTo($d);
        var sr = document.createElement('script');
        sr.type = 'text/javascript';
        sr.innerHTML = "$(document).ready(function () {"
                        + "$('#" + s.id + "_g').jtable({"
                        //+ "    title: '" + _gb._l(0, s) + "',"
                        + "    title: '" + 'Danh sách' + "',"
                        + "    paging: true,"
                        + "    pageSize: " + si + ","
                        + "    sorting: true,"
                        + "    selecting: true, "
                        + "    multiselect: true, "//Allow multiple selecting
                        + "    selectingCheckboxes: true, "
                        + "    defaultSorting: 'Id ASC',"
                        + "    recordsLoaded: function (event, data) {"
                        + "         if (typeof pgrl_" + s.id + " === 'function')"
                        + "             pgrl_" + s.id + "(data);"
                        + "    },"
                        + "    selectionChanged: function () {"
                        + "        var $selectedRows = $('#" + s.id + "_g').jtable('selectedRows');"
                        + "        if ($selectedRows.length > 0) {"
                        + "            $selectedRows.each(function () {"
                        + "                var record = $(this).data('record');"
                        + "                cur_gb_KeyObj = record.f00.toString();"
                        + "                _gb.sf(record," + s.id + ");"
                        + "                if (typeof pgrs_" + s.id + " === 'function')"
                        + "                    pgrs_" + s.id + "(record);"
                        + "            });"
                        + "        }"
                        + "    },"
                        + "    recordDeleted: function (event, data) {"
                        + "         if (typeof pgrd_" + s.id + " === 'function')"
                        + "             pgrd_" + s.id + "(data);"
                        + "    },"
                        + "    actions: {"
                        + "        listAction: '/api/P',"
                        + "    },"
                        + "    fields: {"
                        + _gb.bfg(s)//bgf build grid field
                        + "    }"
                        + "});"
                        + "});";
        //if (typeof p_ig_71 === 'function')
        //    p_ig_71(sr, $d, s);
        // Use any selector 
        $($d).append(sr);
    },
    sv: function (strId, ev, s, tt, cc, ii) {
        ev = ev || window.event;
        var keyCode = (ev === null) ? -1 : (ev.keyCode || ev.which);
        /* tab null backspace , minus*/
        if (keyCode === 16 || keyCode === 17 || $("#" + strId).attr("readonly") === "readonly") {
            $('#divShowID').hide(); return true;
        }
        else if (keyCode === 40) {
            pArrowDown(strId, ev); ev.preventDefault(); return true;
        }
        else if (keyCode === 38) {
            pArrowUp(strId, ev); ev.preventDefault(); return true;
        }
        else if (keyCode === 13) {
            //if (ev.ctrlKey === 1 || ev.ctrlKey === true)
            if (typeof pe_io === 'function')
                pe_oi(strId, ev, s);
            else {
                if (window.cur_gb_Index != null && $("#divShowID").css("display")!="none") {// Chắc chắn combo phải đang tích cực
                    var ctrlTmp = $('#itemid' + window.cur_gb_Index.toString())[0];
                    if (ctrlTmp != null) {
                        ctrlTmp.onclick();
                        return true;
                    }
                }
            }
        }
        window.cur_gb_CotrolID = strId;
        /*check have space at the end*/
        var value = $("#" + window.cur_gb_CotrolID).val();
        if (value.length > 0 && value[value.length - 1] != ' ')
            if (keyCode === 1) value = "";
            else if (keyCode != 13) return true;
        /*end check*/
        window.cur_gb_FlagControlCmb = 0;

        // parse điều kiện filter của foriegnKey

        if ($('#' + strId).val() === '' || $('#' + strId).val() === ' ') { $('#' + strId.substring(0, strId.length - 1) + 'h').val(''); }
        var t = ii[8].split('~');
        for (var i = 0; i < t.length - 1; i++) {
            var v = $(t[i + 1]).val();
            if (v === 'undefined' || v === '') { alert("Bạn chưa chọn đủ thông tin"); return true; }
            else { t[0] = t[0].replace(new RegExp("\\$" + i, "g"), v); }
        }

        window.gb_strFilter = ' '; /*reset filter*/
        if (value !== '' && value !== 'Select...')
        if (window.cur_gb_CotrolID) {
            var cl = cc.ra('~', ',').ra('-0', '');
            cl = 'Id,' + cl;
            window.cur_gb_Obj = new Object();
            window.cur_gb_Index = -1;
            window.cur_gb_Obj.Id = '-9999';
            window.cur_gb_Obj.v = value;
            window.cur_gb_Obj.n = gb_NumComboBox;
            window.cur_gb_Obj.f = (value.trim() === '' || value.trim() === 'Select...') ? t[0] : (t[0] === '' ? (' (' + (cc.split('~')[0] + " like N'%" + value.trim() + "%'") + " ) ") : (t[0] + ' and (' + (cc.split('~')[0] + " like N'%" + value.trim() + "%'") + " ) "));
            if (tt === "gcGobal_STOCK_gcProductList") {// Nên làm 1 hàm mở rộng và viết riêng cho các đối tượng khác.
                if(!(value.trim() === '' || value.trim() === 'Select...'))
                     window.cur_gb_Obj.f = window.cur_gb_Obj.f + " OR ( MoTa like N'%" + ConvertVNKD(value.trim()).toUpperCase() + "%')";// Đặc biệt cho bảng hàng hóa
                window.cur_gb_Obj.exV = "zgcl_gcGobal_STOCK_gcProductList05All"; 
            }
            window.cur_gb_Obj.fid = window.cur_gb_CotrolID;
            window.cur_gb_Obj.oid = s.__id;
            window.cur_gb_Obj.a = 'pGet' + tt;
            window.cur_gb_Obj.c = '';
            window.cur_gb_Obj.d = '';
            window.cur_gb_Obj.type = 'p';
            window.cur_gb_Obj.cl = cl;
            window.cur_gb_Obj.si = 1;
            window.cur_gb_Obj.mr = 50;
            //cur_gb_Obj.se = " Name ";
            //  obj: { a: 'pGet' + s._e[0], c: '', d: '', type: 'p', cl: '*', si: 1, mr: 25, se: ' Id desc', f: gb_strFilterGrid }
            $('#' + window.cur_gb_CotrolID).removeClass('gc-style-form-combo');
            $('#' + window.cur_gb_CotrolID).addClass('loader');
            //không cần truyền user vì dư thừa chúng ta có thể check dc bằng server.
            if (typeof pAsg === 'function')
                pAsg(strId, ev, s);
            console.log(window.cur_gb_Obj.c);
            request(window.cur_gb_Obj, { success: function (o, op, r) { shd(r, cc); } });
        }
    }
};
function del(r, n, s, si) {
    var $title = $("<div />").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix");
    var $p = $("<p style='padding:20px;'>Bạn có chắc khi xóa dữ liệu này không ? </p>");
    var $delete = $("<button id='deleteRecord' type='button' class='btn btn-default btn-form-data' ><i class='fa fa fa-eraser icon-white color-red'></i> Xóa </button>");
    var $cancel = $("<button id='cancelRecord' type='button' class='btn btn-default btn-form-data' ><i class='fa fa fa-ban icon-white color-info'></i>Hủy thao tác</button>");
    var $d = $("<button style='width:10px !important; background:none!important; border:none !important'></button>");
    var $div = $("<div />").append($title).append($p).append($("<div style='margin: 0 auto; width: 45%;display: inline'>").append($delete).append($d).append($cancel));
    modal.open({ content: $div.html() });
    $("#cancelRecord").click(function () {
        modal.close();
    });
    $("#deleteRecord").click(function () {
        if (ValidO(s.objInfor)) s.objInfor.c = GetListInfoCondition(s);
        var objForGID = null;
        if (s) {
            var pageNum = $("#" + s.id + "_g .jtable-goto-page select option:selected").val();
            var pageSize = parseInt($("#" + s.id + "_g .jtable-page-size-change select option:selected").val());
            var RowNo = parseInt(pageNum); if (RowNo < 1) RowNo = 1; if (type === 'Insert') RowNo = 1;// Insert cho lên đầu lưới
            if (typeof DefineListFilter === 'function')
                gb_strFilterGrid = DefineListFilter(s.id);
            objForGID = { s: s, a: 'pGet' + s._e[0], c: '', d: '', type: 'p', cl: '*', si: RowNo, mr: pageSize, se: (typeof s.se === "string" ? s.se : ' Id desc'), f: gb_strFilterGrid, bUpdate: true };
        }

        var obj = new Object();
        var type = 'Remove';
        if (typeof pad_o === 'function') if (pad_o(n, s.id)) return btn; //break here
        obj.a = type + n; obj.c = { Id: r.f00 }; obj.type = 'D'; obj.cl = ''; obj.si = 1; obj.mr = 20; obj.id = s.id;
        obj.n = n;
        obj.P = "R";
        obj.bUpdate = true;// lấy theo chỉ số lưới

        var postData = (objForGID != null) ? (ValidO(s.objInfor) ? [obj, objForGID, s.objInfor] : [obj, objForGID]) : obj;

        if (typeof pRm === 'function')
            pRm(s, obj);
        request(postData, { success: function (o, op, r) { sf_d(r, s); }, error: function (o, op, r) { ff_a_o(); } });

        modal.close();
    });
}
function sf_d(r, s) {
    if (r.Records === "Không có quyền truy cập dữ liệu") {
        showError("Bạn không còn quyền truy cập dữ liệu ở phiên giao dịch hiện tại. </br> Vui lòng đăng nhập lại (2s sau trình duyệt tự chuyển).");
        setTimeout(function () { window.location = '../default.aspx'; }, 2000);
        return false;
    }
    if (r.Status === 'OK') {
        var pageNum = $("#" + s.id + "_g .jtable-goto-page select option:selected").val();
        var pageSize = parseInt($("#" + s.id + "_g .jtable-page-size-change select option:selected").val());
        var RowNo = parseInt(pageNum); if (RowNo < 1) RowNo = 1;

        var obj = { s: s, a: 'pGet' + s._e[0], c: '', d: '', type: 'p', cl: '*', si: RowNo, mr: pageSize, se: (typeof s.se === "string" ? s.se : ' Id desc'), f: gb_strFilterGrid };
        if (typeof pJtablCustomizeObj === 'function')
            pJtablCustomizeObj(obj, s);
        var data = formatDataForGRID(r.ListRecords[1]);
        r.Records = data.Records;
        r.TotalRecordCount = r.ListRecords[1].TotalRecordCount;

        $("#" + s.id + "_g").jtable('loadDataAtClient', {
            obj: (ValidO(s.objInfor) ? [obj, s.objInfor] : obj)
            , jtStartIndex: 0
            , jtPageSize: 300
        }, r);
        if (typeof p_ug_o === 'function')
            p_ug_o(s);
    }
}
function sf_a_o() {
}
function ff_a_o() {
}
function parseJsResponse(data) {
    if (data.hasOwnProperty('d')) {
        return data.d;
    }
    return data;
}
function completeCallbackPostData(data) {
    if (typeof p_completeCallbackPostData === 'function')
        p_completeCallbackPostData(data);
}

//client data set direct rto grid, because we using f00-f-- cho grid;
// Cột 0 là số thứ tự trong Procedure trả về loại bỏ cột này.
function formatDataForGRID(ListRecords)
{
    var record = ListRecords;
    for(var i=0;i<ListRecords.Records.length;i++)
    {
        var recorditem = [];
        for (var j = 1; j < ListRecords.Records[i].length; j++) {
            recorditem["f" + (((j - 1) >= 10) ? (j-1) : '0' + (j - 1))] = ListRecords.Records[i][j];
        }
        record.Records[i] = recorditem;
    }
    return record;
}
$(document).ready(function () {
    //$(document.body).click(function (ev) {

    //    //onProcessClick(ev);
    //});
});
