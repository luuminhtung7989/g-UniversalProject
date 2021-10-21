/* for grid */
/*var curRg = null;*/
var cur_gb_CotrolID = null;
var cur_gb_Account = null;
var cur_gb_GroupRight = null;
var cur_gb_Index = null;
var cur_gb_cur_ListdDataIndex = 0;
var cur_gb_curMainObj = null;
var cur_gb_Obj = null;
/*var divShowCID = null; define in code*/
var cur_gb_DataDivShow = null;
var cur_gb_DataDivShowIndex = null;
var cur_gb_cur_ListDataShow = null;
var cur_gb_cur_TailListDataShow = null;
var gb_stopFocus = null;
var gb_NumComboBox = 20;
var gb_strFilter = ' ';
var gb_strFilterGrid = ' ';
var gb_strSort = ' ';
var gb_PageSize = 20;
var gb_Combo_MaxItem = 0;
var gb_curBoxDlg = null;
var cur_gb_KeyObj = '';
var cur_gb_KeyId = -1;
var cur_gb_KeyId2 = -1;
var cur_gb_TailClassObj = null;
var cur_gb_curReceiptID = null;
var cur_gb_showReceipt = null;
var cur_gb_HOCPHI_HOCVIEN = null;
var cur_gb_GridDataIndex = 0;
var cur_gb_TabActive = '';
var cur_gb_ReceitpID = '';
var cur_gb_CurItemID = null;
var cur_gb_CurDetailID = '';
var cur_gb_CurItemObject = null;

var cur_gb_FlagControlCmb = null;
var cur_gb_FlagControlCmbMulti = 0;




function onItemClickReport(itemLI, tBox, index) {

    if (cur_gb_DataDivShow == null)
        return false;
    if (itemLI == null || tBox == null || index == null)
        return false;
    var tCurBox = $("#" + tBox)[0];
    var tCurBoxId = $("#" + tBox + '_ID')[0];
    if (tCurBox != null) {
        if (cur_gb_DataDivShow) {
            cur_gb_DataDivShowIndex = index;
            var item = cur_gb_DataDivShow[index][0];
            $("#" + tBox)[0].value = item;
            $("#" + tBox + '_ID')[0].value = cur_gb_DataDivShow[index][2];
            $("#divShowID").hide();
            if (typeof postonItemClick == 'function') {
                postonItemClick(itemLI, tBox, index)
            }
        }
    }

}


function onItemClick(itemLI, tBox, index) {
    if (cur_gb_DataDivShow == null)
        return false;
    if (itemLI == null || tBox == null || index == null)
        return false;
    var tCurBox = $("#" + tBox)[0];
    var tCurBoxId = $("#" + tBox.substring(0, tBox.length - 1) + 'h')[0];
    if (tCurBox != null) {
        if (cur_gb_DataDivShow) {
            cur_gb_DataDivShowIndex = index;
            var item = cur_gb_DataDivShow[index];
            $("#" + tBox)[0].value = item[2];
            var iid = tBox.substring(0, tBox.length - 1) + 'h';
            $("#" + iid)[0].value = item[1];
            $("#divShowID").hide();
            if (typeof postonItemClick == 'function') {
                postonItemClick(itemLI, tBox, index)
            }
        }
    }
}

function onItemClickMulti(itemLI, tBox, index) {
    if (cur_gb_DataDivShow == null)
        return false;
    if (itemLI == null || tBox == null || index == null)
        return false;
    var tCurBox = $("#" + tBox)[0];
    var tCurBoxId = $("#" + tBox + '_ID')[0];
    if (tCurBox != null) {
        if (cur_gb_DataDivShow) {
            cur_gb_DataDivShowIndex = index;
            var item = cur_gb_DataDivShow[index];
            $("#" + tBox)[0].value = $("#" + tBox)[0].value + "," + item[1];
            var iid = tBox.ra('i', 'h');
            $("#" + iid)[0].value = item[0];
            //$("#divShowID").hide();
            if (typeof postonItemClickMulti == 'function') {
                postonItemClickMulti(itemLI, tBox, index)
            }
        }
    }
}

function showPopupDivData(result) {

    if ((result == null) || (result == 'undefined'))
        return false;
    if (cur_gb_CotrolID == null)
        return false;

    cur_gb_DataDivShow = result;
    if (cur_gb_DataDivShow.length <= 0)
        return false;
    var strGobal = "";
    var text = $('#' + cur_gb_CotrolID)[0];

    $("#" + cur_gb_CotrolID).removeClass("loader");
    $("#" + cur_gb_CotrolID).addClass("gc-style-form-combo");

    for (iM = 0; iM < (cur_gb_DataDivShow.length - 1); ++iM) {
        var _value = cur_gb_DataDivShow[iM];
        if (_value) {
            var style = (_value[_value.length - 1]).toString();

            //xử lý cho 1 phần tử
            var idstr = "itemid" + iM;
            if (cur_gb_CotrolID == 'VatTuIdP72')
                if (style == "1") {
                    onItemClick(idstr, cur_gb_CotrolID, iM.toString());
                    return;
                }

            var value = _value[0];
            var moreText = _value[1];
            //------------------------------------------------------------------------------
            if (_value[5] != undefined && _value[5] != null && _value[6] != null) {
                if (_value[5] == "109")// rau
                    moreText = "<span style='color:blue;'>" + moreText + "</span>";
                else if (_value[5] == "110")// nghêu
                    moreText = "<span style='color:green;'>" + moreText + "</span>";
            }
            //-------------------------------------------------------------------------------------

            if (_value[2] != "" && _value[3] != null)
                moreText += " ( <span style='color:#ee0000;'>" + gcFormatStr(_value[2]) + "</span> ";
            if (_value[3] != undefined && _value[3] != null)
                moreText += "/" + _value[3] + " ";
            if (_value[4] != undefined && _value[4] != null && _value[5] != null)
                moreText += "/" + _value[4] + " ";
            //if (_value.length > 7)
            //    moreText += "-Giá: " + _value[3] + "đ -" + _value[9] + "-" + _value[10];

            if (_value[2] != "" && _value[3] != null)
                moreText += " )";




            var str = "<div  id=\"" + idstr + "\" class='gcAUCC' onclick='onItemClick(\"" + idstr + "\",\"" + cur_gb_CotrolID + "\",\"" + iM.toString() + "\"); ' >"
                + "<div class='gcLAC' >"

                + "<div class='gcLAC1'>" + value + "</div>"
                + "<div class='gcLACE'>" + moreText + "</div>"
                + "</div>"

                + "</div><div style='clear:both;'></div>";
            if (style == "1") {
                str = "<div  id=\"" + idstr + "\" class='gcAUCC' onclick='onItemClick(\"" + idstr + "\",\"" + cur_gb_CotrolID + "\",\"" + iM.toString() + "\"); ' >"
                    + "<div class='gcLAC' >"

                    + "<div class='gcLAC1'>" + value + "</div>"
                    + "<div class='gcLACE'>" + moreText + "</div>"
                    + "</div>"
                    + "</div><div style='clear:both;'></div>";
            }

            strGobal += str;

        }
    }
    var divShow = $("#divShowID")[0];
    var _value = cur_gb_DataDivShow[cur_gb_DataDivShow.length - 1];


    var strr = "<div class='gcAUCH'>"
        + "<div class='gcLAC'>"
        + "<div class='gcLAC1'> Mã </div>"
        + "<div class='gcLACE'> Tên </div>"
        + "</div>"
        + "</div><div style='clear:both;'></div>";
    var strr2 = "<div class='gcDIVF'>Tổng số: (" + _value[0].toString() + " phần tử) "
        + "</div>";

    if (_value[1] != null)
        strr2 = "<div class='gcDIVF'>Tổng số: (" + _value[0].toString() + "- max: " + _value[1].toString() + ") "
            + "</div>";
    gb_Combo_MaxItem = _value[0];

    if (text) {
        divShow.style.width = text.offsetWidth + 21 + 'px';
        strr = "<div class='gcAUCH' >"
            + "<div class='gcLAC'>"
            + "<div class='gcLAC1'> Mã </div>"
            + "<div class='gcLACE'> Tên </div>"
            + "</div>"
            + "</div><div style='clear:both;'></div>";
        if ((text.offsetWidth + 21) < 150) {
            divShow.style.width = 180 + 'px';
            strr = "<div class='gcAUCH' >"
                + "<div class='gcLAC'>"
                + "<div class='gcLAC1'> Mã </div>"
                + "<div class='gcLACE'> Tên </div>"
                + "</div>"
                + "</div><div style='clear:both;'></div>";
        }

        if (text.offsetWidth > 200) {
            strr = "<div  class='gcAUCH' >"
                + "<div class='gcLAC'>"
                + "<div class='gcLAC1'> Mã </div>"
                + "<div class='gcLACE'> Tên </div>"
                + "</div>"
                + "</div><div style='clear:both;'></div>";
            strr2 = "<div style='width:" + (text.offsetWidth + 19).toString() + "px !important;' class='gcDIVF'>Tổng số: (" + _value[0].toString() + " phần tử) "
                + "</div>";
            if (_value[1] != null)
                strr2 = "<div style='width:" + (text.offsetWidth + 19).toString() + "px !important;' class='gcDIVF'>Tổng số: (" + _value[0].toString() + "- max: " + _value[1].toString() + ") "
                    + "</div>";
            divShow.innerHTML = strr + "<div  style='width:" + (text.offsetWidth + 19).toString() + "px !important;' class='gcDIVShow2'>" + strGobal + "</div>" + strr2;
        }
        else
            divShow.innerHTML = strr + "<div  class='gcDIVShow2'>" + strGobal + "</div>" + strr2;
    }
    divShow.style.display = "block";

    if (typeof postUpdateDivLast == 'function')
        postUpdateDivLast(result)

    if (typeof postUpdateDivGetProductList == 'function')
        postUpdateDivGetProductList(result)

    //using jquery to fix problem
    var fieldExample = $('#' + cur_gb_CotrolID);
    $("#divShowID").css({
        "position": "absolute",
        "left": fieldExample.offset().left,
        "top": fieldExample.offset().top + fieldExample.outerHeight()
    });
    $(divShowID.gcDIVShow).show();
}

function showPopupDivDataMultiselect(result) {

    if ((result == null) || (result == 'undefined'))
        return false;
    if (cur_gb_CotrolID == null)
        return false;

    cur_gb_DataDivShow = result;
    if (cur_gb_DataDivShow.length <= 0)
        return false;
    var strGobal = "";
    var text = $('#' + cur_gb_CotrolID)[0];
    var arrSelect = text.value.toString().split(",");
    $("#" + cur_gb_CotrolID).removeClass("loader");
    $("#" + cur_gb_CotrolID).addClass("gc-style-form-combo");

    for (iM = 0; iM < (cur_gb_DataDivShow.length - 1); ++iM) {
        var _value = cur_gb_DataDivShow[iM];
        if (_value) {
            var style = (_value[_value.length - 1]).toString();

            //xử lý cho 1 phần tử
            var idstr = "itemid" + iM;
            if (cur_gb_CotrolID == 'VatTuIdP72')
                if (style == "1") {
                    onItemClick(idstr, cur_gb_CotrolID, iM.toString());
                    return;
                }

            var value = _value[0];
            var moreText = _value[1];
            //------------------------------------------------------------------------------
            if (_value[5] != undefined && _value[5] != null && _value[6] != null) {
                if (_value[5] == "109")// rau
                    moreText = "<span style='color:blue;'>" + moreText + "</span>";
                else if (_value[5] == "110")// nghêu
                    moreText = "<span style='color:green;'>" + moreText + "</span>";
            }
            //-------------------------------------------------------------------------------------

            if (_value[2] != "" && _value[3] != null)
                moreText += " ( <span style='color:#ee0000;'>" + gcFormatStr(_value[2]) + "</span> ";
            if (_value[3] != undefined && _value[3] != null)
                moreText += "/" + _value[3] + " ";
            if (_value[4] != undefined && _value[4] != null && _value[5] != null)
                moreText += "/" + _value[4] + " ";
            //if (_value.length > 7)
            //    moreText += "-Giá: " + _value[3] + "đ -" + _value[9] + "-" + _value[10];

            if (_value[2] != "" && _value[3] != null)
                moreText += " )";

            var checkedStr = "";
            for (k = 0; k < arrSelect.length; k++)
                if (_value[1].trim() == arrSelect[k].trim()) {
                    checkedStr = " checked = 'checked'";
                    break;
                }

            var str = " <div class='gcAUCC'> <div class='gcLAC1'> <input type='checkbox' id='check" + idstr + "' name='check" + idstr + "'" + checkedStr + ">&nbsp; </div>"

                + "<div  id=\"" + idstr + "\" class='' onclick='onItemClickMulti(\"" + idstr + "\",\"" + cur_gb_CotrolID + "\",\"" + iM.toString() + "\"); ' >"
                + "<div class='gcLAC' >"

                + "<div class='gcLAC1'>" + value + "</div>"
                + "<div class='gcLACE'>" + moreText + "</div>"
                + "</div>"
                + "</div>"
                + "</div><div style='clear:both;'></div>";
            //            if (style == "1") {
            //                str = "<div  id=\"" + idstr + "\" class='gcAUCC' onclick='onItemClick(\"" + idstr + "\",\"" + cur_gb_CotrolID + "\",\"" + iM.toString() + "\"); ' >"
            //                      + "<div class='gcLAC' >"
            //                      + " <div class='gcLAC1'> <input type='checkbox' id='check" + idstr + "' name='check" + idstr + "'> </div>"
            //                      + "<div class='gcLAC1'>" + value + "</div>"
            //                      + "<div class='gcLACE'>" + moreText + "</div>"
            //                      + "</div>"
            //                      + "</div><div style='clear:both;'></div>";
            //            }

            strGobal += str;

        }
    }
    var divShow = $("#divShowID")[0];
    var _value = cur_gb_DataDivShow[cur_gb_DataDivShow.length - 1];


    var strr = "<div class='gcAUCH'>"
        + "<div class='gcLAC'>"
        + "<div class='gcLAC1'> Mã </div>"
        + "<div class='gcLACE'> Tên </div>"
        + "</div>"
        + "</div><div style='clear:both;'></div>";
    var strr2 = "<div class='gcDIVF'>Tổng số: (" + _value[0].toString() + " phần tử) "
        + "</div>";

    if (_value[1] != null)
        strr2 = "<div class='gcDIVF'>Tổng số: (" + _value[0].toString() + "- max: " + _value[1].toString() + ") "
            + "</div>";
    gb_Combo_MaxItem = _value[0];

    if (text) {
        divShow.style.width = text.offsetWidth + 21 + 'px';
        strr = "<div class='gcAUCH' >"
            + "<div class='gcLAC'>"
            + "<div class='gcLAC1'> Mã </div>"
            + "<div class='gcLACE'> Tên </div>"
            + "</div>"
            + "</div><div style='clear:both;'></div>";
        if ((text.offsetWidth + 21) < 150) {
            divShow.style.width = 180 + 'px';
            strr = "<div class='gcAUCH' >"
                + "<div class='gcLAC'>"
                + "<div class='gcLAC1'> Mã </div>"
                + "<div class='gcLACE'> Tên </div>"
                + "</div>"
                + "</div><div style='clear:both;'></div>";
        }

        if (text.offsetWidth > 200) {
            strr = "<div  class='gcAUCH' >"
                + "<div class='gcLAC'>"
                + "<div class='gcLAC1'> Mã </div>"
                + "<div class='gcLACE'> Tên </div>"
                + "</div>"
                + "</div><div style='clear:both;'></div>";
            strr2 = "<div style='width:" + (text.offsetWidth + 19).toString() + "px !important;' class='gcDIVF'>Tổng số: (" + _value[0].toString() + " phần tử) "
                + "</div>";
            if (_value[1] != null)
                strr2 = "<div style='width:" + (text.offsetWidth + 19).toString() + "px !important;' class='gcDIVF'>Tổng số: (" + _value[0].toString() + "- max: " + _value[1].toString() + ") "
                    + "</div>";
            divShow.innerHTML = strr + "<div  style='width:" + (text.offsetWidth + 19).toString() + "px !important;' class='gcDIVShow2'>" + strGobal + "</div>" + strr2;
        }
        else
            divShow.innerHTML = strr + "<div  class='gcDIVShow2'>" + strGobal + "</div>" + strr2;
    }
    divShow.style.display = "block";

    if (typeof postUpdateDivLast == 'function')
        postUpdateDivLast(result)

    if (typeof postUpdateDivGetProductList == 'function')
        postUpdateDivGetProductList(result)

    //using jquery to fix problem
    var fieldExample = $('#' + cur_gb_CotrolID);
    $("#divShowID").css({
        "position": "absolute",
        "left": fieldExample.offset().left,
        "top": fieldExample.offset().top + fieldExample.outerHeight()
    });
    $(divShowID.gcDIVShow).show();
}

function updateDivReport(result) {
    if ((result == null) || (result == 'undefined'))
        return false;

    if (cur_gb_CotrolID == null)
        return false;

    cur_gb_DataDivShow = result;
    if (cur_gb_DataDivShow.length <= 0)
        return false;
    var strGobal = "";

    $("#" + cur_gb_CotrolID).removeClass("loader");
    $("#" + cur_gb_CotrolID).addClass("gc-style-form-combo");

    for (iM = 0; iM < (cur_gb_DataDivShow.length); ++iM) {
        var _value = cur_gb_DataDivShow[iM][0];
        if (_value) {

            var value = iM;
            var moreText = _value;

            var idstr = "itemid" + iM;
            var str = "<div  id=\"" + idstr + "\" class='gcAUC' onclick='onItemClickReport(\"" + idstr + "\",\"" + cur_gb_CotrolID + "\",\"" + iM.toString() + "\"); ' >"
                + "<div class='gcLAC' >"
                + "<div class='gcLAC1'>" + value + "</div>"
                + "<div class='gcLACE'>" + moreText + "</div>"
                + "</div>"
                + "</div><div style='clear:both;'></div>";

            strGobal += str;

        }
    }
    var divShow = $("#divShowID")[0];
    var _value = cur_gb_DataDivShow[cur_gb_DataDivShow.length - 1];


    var strr = "<div class='gcAUCH'>"
        + "<div class='gcLAC'>"
        + "<div class='gcLAC1'> Code </div>"
        + "<div class='gcLACE'> Name </div>"
        + "</div>"
        + "</div><div style='clear:both;'></div>";
    var strr2 = "<div class='gcDIVF'>Total: (" + _value[0].toString() + " items) "
        + "</div>";

    gb_Combo_MaxItem = _value[0];
    var text = $('#' + cur_gb_CotrolID)[0];
    if (text) {
        divShow.style.width = text.offsetWidth + 21 + 'px';
        strr = "<div class='gcAUCH'" + " style='width:99.5% !important;'>"
            + "<div class='gcLAC'>"
            + "<div class='gcLAC1'> Code </div>"
            + "<div class='gcLACE'> Name </div>"
            + "</div>"
            + "</div><div style='clear:both;'></div>";


        if (text.offsetWidth > 200) {
            strr = "<div  class='gcAUCH' " + "style='width:99.5% !important;'>"
                + "<div class='gcLAC'>"
                + "<div class='gcLAC1'> Code </div>"
                + "<div class='gcLACE'> Name </div>"
                + "</div>"
                + "</div><div style='clear:both;'></div>";
            strr2 = "<div style='width:" + (text.offsetWidth + 19).toString() + "px !important;' class='gcDIVF'>Total: (" + _value[0].toString() + " items) "
                + "</div>";
            divShow.innerHTML = strr + "<div  style='width:" + (text.offsetWidth + 19).toString() + "px !important;' class='gcDIVShow2'>" + strGobal + "</div>" + strr2;
        }
        else
            divShow.innerHTML = strr + "<div  class='gcDIVShow2'>" + strGobal + "</div>" + strr2;
    }
    divShow.style.display = "block";

    if (typeof postUpdateDivLast == 'function')
        postUpdateDivLast(result)

    if (typeof postUpdateDivGetProductList == 'function')
        postUpdateDivGetProductList(result)

    //using jquery to fix problem
    var fieldExample = $('#' + cur_gb_CotrolID);
    $("#divShowID").css({
        "position": "absolute",
        "left": fieldExample.offset().left,
        "top": fieldExample.offset().top + fieldExample.outerHeight()
    });
    $("#" + divShowID.gcDIVShow).show();

}


function gc_gb_fn_LoadComboFail() {
    $("#" + cur_gb_CotrolID).removeClass("loader");
    $("#" + cur_gb_CotrolID).addClass("gc-style-form-combo");
}

function onProcessClick(e) {

    var x = 0;
    var y = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) {
        x = e.pageX;
        y = e.pageY;
    }
    else if (e.clientX || e.clientY) {
        x = e.clientX + document.body.scrollLeft
            + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop
            + document.documentElement.scrollTop;
    }
    var divShow = $('#divShowID')[0];
    // var divBounds = Sys.UI.DomElement.getBounds(divShow);


    if (divShow) {
        if (((divShow.left < x) && (x < divShow.left + divShow.width))
            && ((divShow.top < y) && (y < divShow.top + divShow.height))) {
            divShow.style.display = "block";
        }
        else {

            if (cur_gb_FlagControlCmb != 1)
                divShow.style.display = "none";
            //for multi combo
            if (cur_gb_FlagControlCmbMulti == 1)
                divShow.style.display = "block";
            cur_gb_FlagControlCmb = 0;
        }
    }
}

function getDoc(frame) {
    var doc = null;

    // IE8 cascading access check
    try {
        if (frame.contentWindow) {
            doc = frame.contentWindow.document;
        }
    } catch (err) {
    }

    if (doc) { // successful getting content
        return doc;
    }

    try { // simply checking may throw in ie8 under ssl or mismatched protocol
        doc = frame.contentDocument ? frame.contentDocument : frame.document;
    } catch (err) {
        // last attempt
        doc = frame.document;
    }
    return doc;
}


//--------------------------------------------------
/* Parses given date string to a javascript Date object.
*  Given string must be formatted one of the samples shown below:
*  /Date(1320259705710)/
*  2011-01-01 20:32:42 (YYYY-MM-DD HH:MM:SS)
*  2011-01-01 (YYYY-MM-DD)
*************************************************************************/
function _parseDate(dateString) {
    if (typeof dateString === 'object')
        return dateString;

    try {


        if (dateString.indexOf('Date') >= 0) { //Format: /Date(1320259705710)/
            return new Date(
                parseInt(dateString.substr(6), 10)
            );
        } else if (dateString.length == 10) { //Format: 2011-01-01
            return new Date(
                parseInt(dateString.substr(0, 4), 10),
                parseInt(dateString.substr(5, 2), 10) - 1,
                parseInt(dateString.substr(8, 2), 10)
            );
        } else if (dateString.length == 19) { //Format: 2011-01-01 20:32:42
            return new Date(
                parseInt(dateString.substr(0, 4), 10),
                parseInt(dateString.substr(5, 2), 10) - 1,
                parseInt(dateString.substr(8, 2, 10)),
                parseInt(dateString.substr(11, 2), 10),
                parseInt(dateString.substr(14, 2), 10),
                parseInt(dateString.substr(17, 2), 10)
            );
        } else {
            this._logWarn('Given date is not properly formatted: ' + dateString);
            return 'format error!';
        }
    }
    catch (e) {
        //fixed bug 23/06
        console.log(e + dateString);
    }
}

//---------------------------------------------------------------------------

//gobal print 
function GobalPrintNew(id) {
    var disp_setting = "toolbar=yes,location=yes,directories=yes,menubar=yes,";
    disp_setting += "scrollbars=yes";
    var content_vlue = document.getElementById(id).innerHTML;

    docPrint = window.open("", "", 'width=' + screen.width / 2 + ', height=' + screen.height / 2);
    docPrint.document.open();
    docPrint.document.write('<html><head><link href="../Usercontrol/style_home.css" rel="stylesheet" type="text/css" /> ');
    docPrint.document.write('</head><body onLoad="window.print(); window.close()"><center>');
    docPrint.document.write(content_vlue);
    docPrint.document.write('</center></body></html>');
    docPrint.document.close();
    docPrint.focus();
}

function setClassAll(id) {
    $("#" + id + " input[name*='search']").blur(function (ev) {
        if (this.value == '')
            this.value = 'Tìm kiếm...';
    });
    $("#" + id + " input[name*='search']").focus(function (ev) {
        if (this.value == 'Tìm kiếm...')
            this.value = '';
    });

    //    $("#" + id + " input[id*='DonGia']").keyup(function () {
    //        if ($(this).val().length) {
    //            var value = gcRev($(this).val(), ',');
    //            $(this).val(gcFormatStr(value.toString()));
    //        }
    //    });
    //    $("#" + id + " input[id*='GiamGia']").keyup(function () {
    //        if ($(this).val().length) {
    //            var value = gcRev($(this).val(), ',');
    //            $(this).val(gcFormatStr(value.toString()));
    //        }
    //    });
    $("#" + id + " input[id*='Ten']").css({ 'font-weight': 'bold', 'color': '#555' });
    $("#" + id + " input[id*='HoTen']").css({ 'font-weight': 'bold', 'color': '#555' });
    $("#" + id + " input[id*='Name']").css({ 'font-weight': 'bold', 'color': '#555' });

    $("#" + id + " input[id*='SoCT']").css({ 'font-weight': 'bold', 'color': '#3276b1' });

    $("#" + id + " input[id*='Tien']").css({ 'font-weight': 'bold', 'color': '#17C252' });
    $("#" + id + " input[id*='ThucThu']").css({ 'font-weight': 'normal', 'color': 'rgb(128, 156, 31)' });
    $("#" + id + " input[id*='PhuThu']").css({ 'font-weight': 'normal', 'color': 'rgb(128, 156, 31)' });
    $("#" + id + " input[id*='VAT']").css({ 'font-weight': 'normal', 'color': 'rgb(128, 156, 31)' });
    $("#" + id + " input[id*='Price']").css({ 'font-weight': 'bold', 'color': 'rgb(128, 156, 31)' });
    $("#" + id + " input[id*='Gia']").css({ 'font-weight': 'bold', 'color': 'rgb(128, 156, 31)' });
    $("#" + id + " input[id*='Discount']").css({ 'font-weight': 'normal', 'color': 'rgb(128, 156, 31)' });
    $("#" + id + " input[id*='SoLuong']").css({ 'font-weight': 'bold', 'color': 'rgb(128, 156, 31)' });
    $("#" + id + " input[id*='ChietKhau']").css({ 'font-weight': 'normal', 'color': 'rgb(128, 156, 31)' });
    $("#" + id + " input[id*='KhuyenMai']").css({ 'font-weight': 'normal', 'color': 'rgb(128, 156, 31)' });

    setKeyupUpper("#" + id + " input[id*='Code']");
    setKeyupUpper("#" + id + " input[id*='Ma']");
    setKeyupUpper("#" + id + " input[id*='MaCT']");


    setKeyup("#" + id + " input[id*='Tien']");
    setKeyup("#" + id + " input[id*='ThucThu']");
    setKeyup("#" + id + " input[id*='PhuThu']");
    setKeyup("#" + id + " input[id*='VAT']");
    setKeyup("#" + id + " input[id*='ChietKhau']");
    setKeyup("#" + id + " input[id*='KhuyenMai']");
    setKeyup("#" + id + " input[id*='Price']");
    setKeyup("#" + id + " input[id='Gia']");
    setKeyup("#" + id + " input[id*='Discount']");
    setKeyup("#" + id + " input[id*='SoLuong']");

    //---------------------------------------------------------------------

    $("#" + id + " input[id*='Email']").attr('placeholder', 'e.g@gmail.com');

    $("#" + id + " input[id*='Email']").blur(function (ev) {
        if (this.value == '')
            this.value = 'e.g@gmail.com';
    });
    $("#" + id + " input[id*='Email']").focus(function (ev) {
        if (this.value == 'e.g@gmail.com')
            this.value = '';
    });
    //---------------------------------------------------------------------

    //    $("#" + id + " input[name*='combo']").blur(function (ev) {
    //        if (this.value == '')
    //            this.value = 'Chọn danh sách...';
    //    });
    //    $("#" + id + " input[name*='combo']").focus(function (ev) {
    //        if (this.value == 'Chọn danh sách...')
    //            this.value = '';
    //    });

    $("#" + id + " input[name*='combo']").keydown(function (ev) {
        var ev = ev || window.event;
        var keyCode = (ev == null) ? -1 : (ev.keyCode || ev.which);
        /* tab null backspace , minus*/
        if (keyCode == 9 || keyCode == 16 || keyCode == 17) {
            $("#divShowID").hide();
        }
    });

    //---------------------------------------------------------------------
    //first label
    for (m = 0; m < $("#" + id + "  label").length; m++) {
        if ($($("#" + id + "  label")[m]).css('display') != 'none') {
            $($("#" + id + "  label")[m]).css({ 'font-weight': 'bold', 'color': '#d43f3a' });
            //$($("#" + id + "  label")[m]).html('» ' + $($("#" + id + "  label")[m]).html());
            break;
        }
    }

    if (id == 'gcGobal_CUST_Customer') {
        for (m = 0; m < $("#" + id + "  label").length; m++) {
            $($("#" + id + "  label")[m]).removeClass('brlabel125');
            $($("#" + id + "  label")[m]).removeClass('brlabel125').addClass('brlabel75');
        }
    }
    //

    //first input
    for (m = 0; m < $("#" + id + "  input").length; m++) {
        if ($($("#" + id + "  input")[m]).css('display') != 'none') {
            $($("#" + id + "  input")[m]).css({ 'font-weight': 'bold', 'color': '#d43f3a' });
            break;
        }
    }

    //last input
    //enter last input
    var $login = $($("#" + id + '_Inner')[0]).children()[0];
    for (m = $($login).children().length - 1; m >= 0; m--) {
        //----------------------------------------------------------
        if (typeof fun_BreakControlEnter == 'function') {
            var bProcess = fun_BreakControlEnter($($($login).children()[m]).id);
            if (bProcess == false)
                break;
        }
        //----------------------------------------------------------
        if ($($($login).children()[m]).css('display') != 'none') {
            $($($login).children()[m]).keyup(function (e) {
                if (e.which == 13 || e.keyCode == 13) {
                    $('#' + id + '_Add').click();
                }
            });
            break;
        }
    }
    //---------------------------------------------------------------------

    $("#" + id + " input[name*='datepicker']").keydown(function (ev) {
        var ev = ev || window.event;
        var keyCode = (ev == null) ? -1 : (ev.keyCode || ev.which);
        /* tab null backspace , minus*/
        if (keyCode == 9 || keyCode == 16 || keyCode == 17) {
            $(this).datepicker('hide');
        }
    });
    $("#" + id + " input[name*='datepicker']").click(function (ev) {
        $(this).datepicker('show');
    });




    $("#" + id + " input[name*='file']").css({
        'background': '#fff  url(../Usercontrol/images/open-file-icon.png) no-repeat right 3px center',
        'padding-right': '25px',
        'color': '#888',
        'width': '250px'
    });

    $("#" + id + " input[name*='datepicker']").css({
        'background': '#fff  url(../Usercontrol/images/date7.png) no-repeat right 5px center',
        'padding-right': '20px',
        'font-weight': 'normal',
        'color': '#ed9c28',
        'font-weight': 'bold'
    });

    $("#" + id + " input[name*='datepicker']").datepicker({
        format: 'dd/mm/yyyy'
    }).on('changeDate', function (ev) {
        $("input[name*='datepicker']").datepicker('hide');
    });

    $("#" + id + " input[name*='search']").css({
        'background': '#fff  url(../Usercontrol/images/icon_search.png) no-repeat right 4px center',
        'padding-right': '30px',
        'color': '#888'
    });
    $("#" + id + " input[type='text']").addClass("form-control");
    $("#" + id + " input[type='password']").addClass("form-control");
    $("#" + id + " textarea").addClass("form-control");


    $("#" + id + " input[name*='combo']").addClass('gc-style-form-combo');
    //    $("input[name*='combo']").hover(function () { $("input[name*='combo']").addClass('gc-style-form-combo-hover'); },
    //         function () {
    //             $("input[name*='combo']").removeClass('gc-style-form-combo-hover');
    //         }
    //        );
}

function setKeyup(id) {
    $(id).keyup(function (ev) {
        if ($(this).val().length) {
            var value = gcRev($(this).val(), ',');
            $(this).val(gcFormatStr(value.toString()));
        }
    });
}

function setKeyupUpper(id) {
    $(id).keyup(function (ev) {
        if ($(this).val().length) {
            var value = $(this).val().toString().toUpperCase();
            $(this).val(value);
        }
    });
}

String.prototype.getFloat = function (dec_point, thousands_sep) {
    dec_point = typeof dec_point !== 'undefined' ? dec_point : '.';
    thousands_sep = typeof thousands_sep !== 'undefined' ? thousands_sep : ',';

    var parts = this.split(dec_point);
    var re = new RegExp("[" + thousands_sep + "]");
    parts[0] = parts[0].replace(re, '');

    return parseFloat(parts.join(dec_point));
}
function c(num) {//fastest//commafy
    var minus = '';
    if (num < 0) { minus = '-'; }
    var parts = ('' + num).split("."), s = parts[0], i = L = s.length, o = '', c;
    while (i--) {
        o = (i == 0 ? '' : ((L - i) % 3 ? '' : ','))
            + s.charAt(i) + o
    }
    return (parts.length > 1) ? (minus + o + '.' + parts[1]) : (minus + o);
}
function number_format(number, decimals, dec_point, thousands_sep) {
    // http://kevin.vanzonneveld.net
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     bugfix by: Michael White (http://getsprink.com)
    // +     bugfix by: Benjamin Lupton
    // +     bugfix by: Allan Jensen (http://www.winternet.no)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +     bugfix by: Howard Yeend
    // +    revised by: Luke Smith (http://lucassmith.name)
    // +     bugfix by: Diogo Resende
    // +     bugfix by: Rival
    // +      input by: Kheang Hok Chin (http://www.distantia.ca/)
    // +   improved by: davook
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Jay Klehr
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Amir Habibi (http://www.residence-mixte.com/)
    // +     bugfix by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // *     example 1: number_format(1234.56);
    // *     returns 1: '1,235'
    // *     example 2: number_format(1234.56, 2, ',', ' ');
    // *     returns 2: '1 234,56'
    // *     example 3: number_format(1234.5678, 2, '.', '');
    // *     returns 3: '1234.57'
    // *     example 4: number_format(67, 2, ',', '.');
    // *     returns 4: '67,00'
    // *     example 5: number_format(1000);
    // *     returns 5: '1,000'
    // *     example 6: number_format(67.311, 2);
    // *     returns 6: '67.31'
    // *     example 7: number_format(1000.55, 1);
    // *     returns 7: '1,000.6'
    // *     example 8: number_format(67000, 5, ',', '.');
    // *     returns 8: '67.000,00000'
    // *     example 9: number_format(0.9, 0);
    // *     returns 9: '1'
    // *    example 10: number_format('1.20', 2);
    // *    returns 10: '1.20'
    // *    example 11: number_format('1.20', 4);
    // *    returns 11: '1.2000'
    // *    example 12: number_format('1.2000', 3);
    // *    returns 12: '1.200'
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}
function parseJsResponse(data) {
    if (data.hasOwnProperty("d")) {
        return data.d;
    }
    return data;
}
function request(obj, opt) {
    $.ajax({
        url: "../WSASMXGobal/Kernel.asmx/P",
        type: "POST",
        crossDomain: true,
        data: JSON.stringify({ obj: obj }),
        contentType: "application/json; charset=utf-8",
        success: function (r) {
            if (typeof opt.success == 'function')
                opt.success(obj, opt, parseJsResponse(r));
        }
    });
};
function dateToString(date, format) {
    function pad(number) {
        var r = String(number);
        if (r.length === 1) {
            r = '0' + r;
        }
        return r;
    }
    var result = "";
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    switch (format) {
        case "dd-mm-yyyy hh:ii":
            result = pad(day) + "-" + pad(month) + "-" + year + " <b>" + pad(hour) + ":" + pad(minute) + "</b>";
            break;
        case "dd-mm-yyyy":
            result = pad(day) + "-" + pad(month) + "-" + year;
            break;
        case "iso":
            result = year + '-' + pad(month) + '-' + pad(day) + 'T' + pad(hour) + ':' + pad(minute) + ':00.000';
            break;
        case "hh:mm":
            result = pad(hour) + ':' + pad(minute);
            break;
        case 'sql':
            result = pad(month) + "-" + pad(day) + "-" + year + " " + pad(hour) + ":" + pad(minute);
            break;
    }
    return result;
};
function parseDateJs(dateString) {
    if (dateString === null) {
        return new Date();
    }
    try {

        if (typeof (dateString) === "number") {
            console.log(dateString + " No datime type - it's typeof" + typeof (dateString));
            return new Date();
        }
        //fixed 23/=6
        if (dateString.length < 4)
            return new Date();
        if (typeof (dateString) !== "string") {
            console.log(  dateString + " No datime type- it's typeof " + typeof (dateString));
            return new Date();
        }

        if (dateString.indexOf('Date') >= 0) { //Format: /Date(1320259705710)/
            return new Date(
                parseInt(dateString.substr(6), 10)
            );
        } else if (dateString.length == 10) {
            if (dateString.indexOf('-') == 2) { //Format: 01-01-2011
                return new Date(
                    parseInt(dateString.substr(6, 4), 10),
                    parseInt(dateString.substr(3, 2), 10) - 1,
                    parseInt(dateString.substr(0, 2), 10)
                );
            } else if (dateString.indexOf('-') == 4) { //Format: 2011-01-01
                return new Date(
                    parseInt(dateString.substr(0, 4), 10),
                    parseInt(dateString.substr(5, 2), 10) - 1,
                    parseInt(dateString.substr(8, 2), 10)
                );
            }
        } else if (dateString.length == 19) { //Format: 2011-01-01 20:32:42
            return new Date(
                parseInt(dateString.substr(0, 4), 10),
                parseInt(dateString.substr(5, 2), 10) - 1,
                parseInt(dateString.substr(8, 2, 10)),
                parseInt(dateString.substr(11, 2), 10),
                parseInt(dateString.substr(14, 2), 10),
                parseInt(dateString.substr(17, 2), 10)
            );
        } else if (dateString.length == 16) { //Format: 01-01-2011 20:32
            return new Date(
                parseInt(dateString.substr(6, 4), 10),
                parseInt(dateString.substr(3, 2), 10) - 1,
                parseInt(dateString.substr(0, 2, 10)),
                parseInt(dateString.substr(11, 2), 10),
                parseInt(dateString.substr(14, 2), 10),
                0
            );
        }
        else if (dateString.length == 23) { //Format: 2011-01-01T20:32:42.000
            return new Date(
                parseInt(dateString.substr(0, 4), 10),
                parseInt(dateString.substr(5, 2), 10) - 1,
                parseInt(dateString.substr(8, 2), 10),
                parseInt(dateString.substr(11, 2), 10),
                parseInt(dateString.substr(14, 2), 10),
                parseInt(dateString.substr(17, 2), 10));
        }
    }
    catch (e) {
        console.log(e.toString() + dateString + "No datime type- it's " + typeof(dateString));
    }
    return 'format error!';
};
function gDT(dd, dt) {
    var dts = $.trim((null != dd ? dd : "") + " " + (null != dt ? dt : ""));
    var departureTime = new Date();
    if ("" != dts) {
        departureTime = parseDateJs(dts);
    }
    return departureTime;
};
function formatTien(el) {
    if ($(el).val().length) {
        var value = gcRev($(el).val(), ',');
        $(el).val(gcFormatStr(value.toString()));
    }
};
function test(strId, ev, s, tt, cc) {
    ev = ev || window.event;
    cur_gb_CotrolID = strId;
    var value = $('#' + strId).val();
    if (value == '') {
        $('#' + strId.substr(0, strId.length - 1) + 'h').val('');
    }
    var keyCode = (ev == null) ? -1 : (ev.keyCode || ev.which);
    if (value.length > 0 && value[value.length - 1] != ' ')
        if (keyCode == 1) value = "";
        else return true;
    if (ev.type != 'click' && keyCode != 32 && (keyCode != 8 || (keyCode == 8 && value != ""))) {
        $('#divShowID').hide(); return;
    }

    // parse điều kiện filter của foriegnKey
    if ($('#' + strId).val() == '' || $('#' + strId).val() == ' ') { $('#' + strId.substring(0, strId.length - 1) + 'h').val(''); }
    var t = s.split('~');
    for (var i = 0; i < t.length - 1; i++) {
        var v = $(t[i + 1]).val();
        if (v == 'undefined' || v == '') { alert("Bạn chưa chọn đủ thông tin"); return; } else { t[0] = t[0].replace(new RegExp("\\$" + i, "g"), v); }
    }

    cur_gb_FlagControlCmb = 0;
    //gb_strFilter = ' '; /*reset filter*/
    if (cur_gb_CotrolID) {
        var cl = cc.ra('~', ',').ra('-0', '');
        cl = 'Id,' + cl;
        cur_gb_Obj = new Object();
        cur_gb_Index = -1;
        cur_gb_Obj.Id = '-9999';
        cur_gb_Obj.v = value;
        cur_gb_Obj.n = gb_NumComboBox;
        cur_gb_Obj.f = (value.trim() == '' || value.trim() == 'Chọn danh sách...') ? t[0] : (t[0] == '' ? (' (' + (cc.split('~')[0] + " like N'%" + value.trim() + "%'") + " ) ") : (t[0] + ' and (' + (cc.split('~')[0] + " like N'%" + value.trim() + "%'") + " ) "));
        cur_gb_Obj.fid = cur_gb_CotrolID;
        //cur_gb_Obj.oid = s.__id;
        cur_gb_Obj.a = 'pGet' + tt;
        cur_gb_Obj.c = '';
        cur_gb_Obj.d = '';
        cur_gb_Obj.type = 'p';
        cur_gb_Obj.cl = cl;
        cur_gb_Obj.si = 1;
        cur_gb_Obj.mr = 25;
        //  obj: { a: 'pGet' + s._e[0], c: '', d: '', type: 'p', cl: '*', si: 1, mr: 25, se: ' Id desc', f: gb_strFilterGrid }
        $('#' + cur_gb_CotrolID).removeClass('gc-style-form-combo');
        $('#' + cur_gb_CotrolID).addClass('loader');
        //không cần truyền user vì dư thừa chúng ta có thể check dc bằng server.
        Kernel.P(cur_gb_Obj, shd);
    }
};
/************************************************************************
* Xử lý chuyển table html thành file excel                              *
*************************************************************************/
var tableToExcel = (function () {
    var uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" ' +
            'xmlns:x="urn:schemas-microsoft-com:office:excel" ' +
            'xmlns="http://www.w3.org/TR/REC-html40"><head>' +
            '<!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets>' +
            '<x:ExcelWorksheet><x:Name>{worksheet}</x:Name>' +
            '<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>' +
            '</x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook>' +
            '</xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body>' +
            '<table>{table}</table></body></html>'
        , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
        , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
    return function (table, name) {
        if (!table.nodeType) table = $(table)//table = document.getElementById(table)
        var ctx = { worksheet: name || 'Worksheet', table: table.html() }
        window.location.href = uri + base64(format(template, ctx))
    }
})();
/************************************************************************
* Xử lý khi nhấn nút export trong report                                *
*************************************************************************/
function convertTableToExcel(el) {
    tableToExcel(el == null ? '#gc_DivReceiptContent' : el, 'Sheet 1');
};
function round(value, i) {
    var r = 0.0;
    if ($.isNumeric(value)) {
        var t = (value + "").split(".");
        if (t.length > 1 && t[1].length > 0) {
            r = parseFloat(t[0] + "." + t[1].substr(0, i))
        }
        else r = parseFloat(value + "");
    }
    return r;
}
