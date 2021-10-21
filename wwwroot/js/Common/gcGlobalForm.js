/* for grid */
/*var curRg = null;*/
var curTCID = null;
var curMainObj = null;
var curObj = null;
/*var divShowCID = null; define in code*/
var curDataDivShow = null;
var curDataDivShowIndex = null;
var curDataGridShow = null;
var stopFocus = null;



function loadIFame(url, w, h) {
    divIframe = document.createElement("div");
    divIframe.id = "divIframe";
    divIframe.className = "divDialog";
    divIframe.style.width = w + 'px';
    divIframe.style.height = h + 'px';
    divIframe.style.top = '20px';
    divIframe.style.left = ((screen.width / 2) - w) + 'px';


    header = " <div class=\"HeaderDialog\" > <span style=' font-size: larger; color: white; margin-left: 20px; position: relative; top: 11px; left: -4px'> Thông tin chi tiết hồ sơ </span>";
    header += "<input type=\"button\" style=\"float:right; height: 100%\" value=\"Đóng\" onclick=\"toogleleIFrame(\'divIframe\')\" /> </div> ";
    iframe = "<iframe src = \"" + url + "\" style=\"width:99%;height:100%\"> </iframe>";

    divIframe.innerHTML += header;
    divIframe.innerHTML += iframe;

    document.body.appendChild(divIframe);
}

function toogleleIFrame(id) {

    iframe = document.getElementById(id);
    document.body.removeChild(iframe);
}

function buildSide(div, result) {
    var str1 = "<div class='sideItem' > <a id='A11'  href='Default.aspx?_p=1'  >Hồ sơ mới (<label style='color:red;'>" + result[0] + "</label>)</a> </div>";
    var str2 = "<div class='sideItem' > <a id='A21'  href='Default.aspx?_p=2' >Hồ sơ đã chuyển (<label style='color:green;'>" + result[1] + "</label>)</a> </div>";
    var str3 = "<div class='sideItem' > <a id='A31'  href='Default.aspx?_p=3'>Hồ sơ đã xử lý (<label style='color:blue;'>" + result[2] + "</label>)</a> </div>";
    var str4 = "<div class='sideItem' > <a id='A41'  href='Default.aspx?_p=4'>Hồ sơ đang xử lý (" + result[3] + ")</a> </div>";
    var str5 = "<div class='sideItem' > <a id='A51'  href='Default.aspx?_p=5' >Hồ sơ trể (" + result[4] + ")</a> </div>";
    var str6 = "<div class='sideItem' > <a id='A61'  href='Default.aspx?_p=6'>Hồ sơ lỗi (" + result[5] + ")</a> </div>";
    var str6 = "<div class='sideItem' > <a id='A61'  href='Default.aspx'  >Trang chủ </a> </div>";
    div.innerHTML = str1 + str2 + str3 + str4 + str5 + str6;
}
function getTD(val, style) {
    var space = "&nbsp;";
    if (val != null)
        space = val;
    return "<td " + style + ">" + space + "</td>";
}

function keyPressedGrid(sender, args) {
    if (args.get_keyCode() == 13) {
        var e = args.get_domEvent().rawEvent;
        e.returnValue = false;
        e.cancelBubble = true;

        if (e.stopPropagation) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
}
function CloseShowDivGobal(strId, ev) {
    var ev = ev || window.event;
    var keyCode = ev.keyCode || ev.which;
    if (keyCode == 9) {
        var divShow = $get(divShowCID);
        divShow.style.display = 'none';
        return false;
    }
    else if (keyCode == 13)// debug for IE 8
    {
        var ctrlTmp = $get('itemid' + curIndex.toString());
        if (ctrlTmp != null)
            ctrlTmp.onclick();
        var cltParent = $get(strId);
        if (cltParent != null)
            setCaret(cltParent, cltParent.value.length);
        return false;
    }
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

    if ($('#divShowID').length > 0) {
        var divBounds = Sys.UI.DomElement.getBounds($get('divShowID'));
        var divShow = $get('divShowID');


        if (divShow && divBounds) {
            if (((divBounds.x < x) && (x < divBounds.x + divBounds.width))
                   && ((divBounds.y < y) && (y < divBounds.y + divBounds.height))) {
                divShow.style.display = "block";
            }
            else {

                divShow.style.display = "none";
            }
        }
    }
    if ($('#gcDIVShowSelect').length > 0) {
        var divBoundsSelect = Sys.UI.DomElement.getBounds($get('gcDIVShowSelect'));
        var divShowSelect = $get('gcDIVShowSelect');
        if (divShowSelect && divBoundsSelect) {
            if (((divBoundsSelect.x < x) && (x < divBoundsSelect.x + divBoundsSelect.width))
                   && ((divBoundsSelect.y < y) && (y < divBoundsSelect.y + divBoundsSelect.height))) {
                divShowSelect.style.display = "block";
            }
            else {
                divShowSelect.style.display = "none";
            }
        }
    }

}
function shd(result, tt) {
    if (result.Records == "Không có quyền truy cập dữ liệu") {
        showError("Bạn không còn quyền truy cập dữ liệu ở phiên giao dịch hiện tại. </br> Vui lòng đăng nhập lại (2s sau trình duyệt tự chuyển).");
        setTimeout(function () { window.location = '../default.aspx'; }, 2000);
        return false;
    }
    //    if ((result == null) || (result == 'undefined'))
    //        return false;
    if (cur_gb_CotrolID == null)
        return false;

    cur_gb_DataDivShow = result.Records;
    //    if (cur_gb_DataDivShow.length <= 0)
    //        return false;
    var strGobal = "";
    var text = $('#' + cur_gb_CotrolID)[0];

    $("#" + cur_gb_CotrolID).removeClass("loader");
    $("#" + cur_gb_CotrolID).addClass("gc-style-form-combo");

    for (iM = 0; iM < (cur_gb_DataDivShow.length); ++iM) {
        var _value = cur_gb_DataDivShow[iM];
        if (_value) {
            var style = (_value[_value.length - 1]) + '';

            //xử lý cho 1 phần tử
            var idstr = "itemid" + iM;
            if (cur_gb_CotrolID == 'VatTuIdP72')
                if (style == "1") {
                    onItemClick(idstr, cur_gb_CotrolID, iM.toString());
                    return;
                }

            var value = _value[1];
            var moreText = _value[2];
            //            //------------------------------------------------------------------------------
            //            if (_value[5] != undefined && _value[5] != null && _value[6] != null) {
            //                if (_value[5] == "109")// rau
            //                    moreText = "<span style='color:blue;'>" + moreText + "</span>";
            //                else if (_value[5] == "110")// nghêu
            //                    moreText = "<span style='color:green;'>" + moreText + "</span>";
            //            }
            //            //-------------------------------------------------------------------------------------

            //            //            if (_value[2] != "" && _value[3] != null)
            //            //                moreText += " ( <span style='color:#ee0000;'>" + gcFormatStr(_value[2]) + "</span> ";
            //            if (_value[3] != undefined && _value[3] != null)
            //                moreText += "/" + _value[3] + " ";
            //            if (_value[4] != undefined && _value[4] != null)
            //                moreText += "/" + _value[4] + " ";
            //            //if (_value.length > 7)
            //            //    moreText += "-Giá: " + _value[3] + "đ -" + _value[9] + "-" + _value[10];

            //            if (_value[2] != "" && _value[3] != null)
            //                moreText += " )";
            var mt = '';
            if (tt != null) {
                var ts = [];
                ts = tt.split('~');
                for (var i = 3; i < _value.length; i++) {
                    if (ts[i - 2].split('-').length == 1 || (ts[i - 2].split('-').length > 1 && ts[i - 2].split('-')[1] != '0')) {
                        if (i == 3) {
                            mt += " <span style='color:#ee0000;'>" + _value[i] + "</span>"
                        } else {
                            mt += '/ ' + _value[i];
                        }
                    }
                }
            } 
            if (mt.length > 0) moreText = moreText + ' (' + mt + ')';

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
    if ($("#divShowID").length <= 0) {
        var $d = $("<div id='divShowID'></div>");
        $d.appendTo(document.body);
    }
    var divShow = $("#divShowID")[0];
    var _value = result.TotalRecordCount;

    var strr = "<div class='gcAUCH'>"
                  + "<div class='gcLAC'>"
                  + "<div class='gcLAC1'> Mã </div>"
                  + "<div class='gcLACE'> Tên </div>"
                  + "</div>"
                  + "</div><div style='clear:both;'></div>";
    var strr2 = "<div class='gcDIVF'>Tổng số: (" + _value + " phần tử) "
                  + "</div>";

    if (_value[1] != null)
        strr2 = "<div class='gcDIVF'>Tổng số: (" + _value + "- max: ) "
                  + "</div>";
    gb_Combo_MaxItem = _value[0];

    if (text) {
        //divShow.style.width = text.offsetWidth + 21 + 'px';
        strr = "<div class='gcAUCH' >"
                  + "<div class='gcLAC'>"
                  + "<div class='gcLAC1'> Mã </div>"
                  + "<div class='gcLACE'> Tên </div>"
                  + "</div>"
                  + "</div><div style='clear:both;'></div>";
        if ((text.offsetWidth + 21) < 150) {
            //divShow.style.width = 180 + 'px';
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
            strr2 = "<div style='width:" + (text.offsetWidth + 19).toString() + "px !important;' class='gcDIVF'>Tổng số: (" + _value + " phần tử) "
                      + "</div>";
            if (_value[1] != null)
                strr2 = "<div style='width:" + (text.offsetWidth + 19).toString() + "px !important;' class='gcDIVF'>Tổng số: (" + _value + "- max:) "
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


function BuildDivMeNuSearchOption(result) {
    var style = 'gcDIVShowMathSelect3';
    if (curTCID == null)
        return false;
    var arrLog = null;
    var buffSearch = $get(curTCID + '_ID');
    if (buffSearch != null)
        arrLog = buffSearch.value.split('|');
    curDataDivShow = result;
    var strGobal = "";
    for (iM = 0; iM < (curDataDivShow.length - 1); ++iM) {
        var _value = curDataDivShow[iM];
        var chkvalue = ' ';
        if (arrLog != null)
            for (m = 0; m < arrLog.length; m++)
                if (arrLog[m] == _value[0]) {
                    chkvalue = 'checked';
                    break;
                }

        var value = _value[0];
        var moreText = _value[1];
        var idstr = "itemid" + iM;
        var str = "<div  id=\"" + idstr + "\" class='gcAUCMeNu'  >"
              + "<div class='gcLAC' >"
              + "<div class='gcLAC1' style='display:none !important;'>" + value + "</div>"
                      + "<div style='float:left; width:20px;'><input type='checkbox' id='c" + iM + "' " + chkvalue + "  onClick='onItemSearchOptionCheck(this.id,\"" + value + "\")' /></div>"
                      + "<div class='gcLACE' style='margin-left:10px'>" + moreText + "</div>"
                      + "<div style='float:left; width:30px;'></div>"
              + "</div>"
              + "</div><div style='clear:both;'></div>";
        strGobal += str;

    }
    var divShow = $get(gcDIVShowSelectCID);
    var text = $get(curTCID);

    divShow.innerHTML = "<div  class='" + style + "'>" + strGobal + "</div>";

    divShow.style.display = "block";

    if (text) {
        var divBounds = Sys.UI.DomElement.getBounds(text);
        var position = new Sys.UI.Point(divBounds.x, divBounds.y + divBounds.height);

        var div = $get(gcDIVShowSelectCID);
        $common.setLocation(div, position);
    }
}

function BuildDivMeNuSelect(id) {
    var style = 'gcDIVShowMathSelect2';
    var strArr = 'Khách hàng|Công nợ Khách hàng|Thẻ Khách hàng|Lịch hẹn Khách hàng|Phản hồi của Khách hàng';
    var strArr2 = 'Danh sách nhân viên|Chấm công|Lập bảng lương|Nhập tạm ứng/thưởng phạt|Tính lương nhân viên|In phiếu lương|Kế hoạch đào tạo';
    var strArr3 = 'Báo cáo doan thu/chi phí|Báo cáo lãi lổ|Chi phí hằng ngày|Thống kê sửa chữa xe|Báo cáo vận chuyển hàng hóa';
    var strArr4 = 'Danh sách xe|Sửa chữa xe định kỳ|Khấu hao chi phí cho xe|Quản lý xăng dầu';
    var strArr5 = 'Nhập số lượng thực tế kho|Cài đặt sản xuất Sản phẩm|Phiếu nhập kho|Phiếu xuất kho nội bộ|Phiếu xuất kho bán hàng|Phiếu xuất pha chế Vật tư|Kiểm tra hiện trạng kho|Báo cáo xuất/nhập tồn theo kỳ|Báo cáo xuất kho theo kỳ|Báo cáo nhập kho theo kỳ';
    var arrValue = strArr.split('|');
    var No = 0;

    var divShow = $get(gcDIVShowSelectCID);

    if (id == menuQLKHCID) {
        No = 5;
        arrValue = strArr.split('|');
    }
    else if (id == menuQLNVCID) {
        No = 7;
        arrValue = strArr2.split('|');
    }
    else if (id == menuQLBCCID) {
        No = 5;
        arrValue = strArr3.split('|');
    }
    else if (id == menuQLXECID) {
        No = 4;
        arrValue = strArr4.split('|');
    }
    else if (id == menuQLKHOCID) {
        No = 10;
        style = 'gcDIVShowMathSelect3';
        arrValue = strArr5.split('|');
    }
    curDataDivShow = arrValue;
    var strGobal = "";
    for (iM = 0; iM < No; iM++) {
        var value = '';
        var moreText = arrValue[iM];

        var idstr = "itemid" + iM;
        var str = "<div  id=\"" + idstr + "\" class='gcAUCMeNu' onclick='onItemMenuClick(\"" + idstr + "\",\"" + id + "\",\"" + iM.toString() + "\"); ' >"
              + "<div class='gcLAC' >"
              + "<div class='gcLAC1'>" + value + "</div>"
              + "<div class='gcLACE'>" + moreText + "</div>"
              + "</div>"
              + "</div><div style='clear:both;'></div>";
        strGobal += str;

    }
    var text = $get(id);
    divShow.innerHTML = "<div ONMOUSEOVER='this.focus()' ONMOUSEOUT='this.blur()' class='" + style + "'>" + strGobal + "</div>";

    divShow.style.display = "block";

    if (text) {
        var divBounds = Sys.UI.DomElement.getBounds(text);
        var position = new Sys.UI.Point(divBounds.x, divBounds.y + divBounds.height);

        var div = $get(gcDIVShowSelectCID);
        $common.setLocation(div, position);
    }
}

function parserAssigment(str, value, type) {
    var newStr = str.replace('▼', ' ');
    newStr = newStr.trim();
    var varBeetween = value.split('-');
    var varChar = " N'%" + value + "%'";
    var varCharNew = " N'" + value + "'";
    var varCharDate = " '" + value + "'";
    var strArr = 'Chứa = < <= > >= Giữa <>';

    if (newStr == 'Chứa')
        return (type == 'char') ? ' LIKE ' + varChar : (type == 'datetime') ? ' = ' + varCharDate : ' = ' + value;
    else if (newStr == '=')
        return (type == 'char') ? ' = ' + varCharNew : (type == 'datetime') ? ' = ' + varCharDate : ' = ' + value;
    else if (newStr == '<')
        return (type == 'char') ? ' < ' + varCharNew : (type == 'datetime') ? ' = ' + varCharDate : ' < ' + value;
    else if (newStr == '<=')
        return (type == 'char') ? ' <= ' + varCharNew : (type == 'datetime') ? ' = ' + varCharDate : ' <= ' + value;
    else if (newStr == '>')
        return (type == 'char') ? ' > ' + varCharNew : (type == 'datetime') ? ' = ' + varCharDate : ' > ' + value;
    else if (newStr == '>=')
        return (type == 'char') ? ' >= ' + varCharNew : (type == 'datetime') ? ' = ' + varCharDate : ' >= ' + value;
    else if (newStr == 'Giữa')
        return (type == 'char') ? ' BEETWEEN ' + varBeetween[0] + ' TO ' + varBeetween[1] : (type == 'datetime') ? " BEETWEEN '" + varBeetween[0] + "' TO '" + varBeetween[1] + "'" : ' BEETWEEN ' + varBeetween[0] + ' TO ' + varBeetween[1];
    else if (newStr == '<>')
        return (type == 'char') ? ' <> ' + varCharNew : (type == 'datetime') ? ' = ' + varCharDate : ' <> ' + value;

}
function BuildDivMathSelect(id) {
    var strArr = 'Chứa = < <= > >= <> Giữa';
    var arrValue = strArr.split(' ');
    curDataDivShow = arrValue;
    var strGobal = "";
    for (iM = 0; iM < 8; iM++) {
        var value = arrValue[iM];
        var moreText = '';

        var idstr = "itemid" + iM;
        var str = "<div  id=\"" + idstr + "\" class='gcAUCMeNu' onclick='onItemSearchClick(\"" + idstr + "\",\"" + id + "\",\"" + iM.toString() + "\"); ' >"
              + "<div class='gcLAC' >"
              + "<div class='gcLAC1'>" + value + "</div>"
              + "<div class='gcLACE'>" + moreText + "</div>"
              + "</div>"
              + "</div><div style='clear:both;'></div>";
        strGobal += str;

    }
    var divShow = $get(gcDIVShowSelectCID);
    var text = $get(id);
    divShow.innerHTML = "<div ONMOUSEOVER='this.focus()' ONMOUSEOUT='this.blur()' class='gcDIVShowMathSelect2'>" + strGobal + "</div>";

    divShow.style.display = "block";

    if (text) {
        var divBounds = Sys.UI.DomElement.getBounds(text);
        var position = new Sys.UI.Point(divBounds.x, divBounds.y + divBounds.height);

        var div = $get(gcDIVShowSelectCID);
        $common.setLocation(div, position);
    }
}


function updateDiv(result) {
    if ((result == null) || (result == 'undefined'))
        return false;
    if (curTCID == null)
        return false;

    curDataDivShow = result;
    if (curDataDivShow.length <= 0)
        return false;
    var strGobal = "";
    for (iM = 0; iM < (curDataDivShow.length - 1); ++iM) {
        var _value = curDataDivShow[iM];
        if (_value) {
            var style = (_value[_value.length - 1]).toString();
            var value = _value[0];
            var moreText = _value[1];
            if (_value[2] != "" && _value[3] != null)
                moreText += "--" + _value[2] + " ";
            if (_value.length > 7)
                moreText += "-Giá: " + _value[3] + "đ -" + _value[9] + "-" + _value[10];
            var idstr = "itemid" + iM;
            var str = "<div  id=\"" + idstr + "\" class='gcAUC' onclick='onItemClick(\"" + idstr + "\",\"" + curTCID + "\",\"" + iM.toString() + "\"); ' >"
                  + "<div class='gcLAC' >"
                  + "<div class='gcLAC1'>" + value + "</div>"
                  + "<div class='gcLACE'>" + moreText + "</div>"
                  + "</div>"
                  + "</div><div style='clear:both;'></div>";
            if (style == "1") {
                str = "<div  id=\"" + idstr + "\" class='gcAUCC' onclick='onItemClick(\"" + idstr + "\",\"" + curTCID + "\",\"" + iM.toString() + "\"); ' >"
                      + "<div class='gcLAC' >"
                      + "<div class='gcLAC1'>" + value + "</div>"
                      + "<div class='gcLACE'>" + moreText + "</div>"
                      + "</div>"
                      + "</div><div style='clear:both;'></div>";
            }
            strGobal += str;

        }
    }
    var divShow = $get(divShowCID);
    var _value = curDataDivShow[curDataDivShow.length - 1];


    var strr = "<div class='gcAUCH'>"
                  + "<div class='gcLAC'>"
                  + "<div class='gcLAC1'> Mã </div>"
                  + "<div class='gcLACE'> Tên </div>"
                  + "</div>"
                  + "</div><div style='clear:both;'></div>";
    var strr2 = "<div class='gcDIVF'>Tổng số: (" + _value[0].toString() + ") "
                  + "</div>";
    if (_value[1] != null)
        strr2 = "<div class='gcDIVF'>Tổng số: (" + _value[0].toString() + "- max: " + _value[1].toString() + ") "
                  + "</div>";
    MaxItem = _value[0];
    var text = $get(curTCID);
    if (text) {
        divShow.style.width = text.offsetWidth + 21 + 'px';
        strr = "<div class='gcAUCH'" + " style='width:99.7% !important;'>"
                  + "<div class='gcLAC'>"
                  + "<div class='gcLAC1'> Mã </div>"
                  + "<div class='gcLACE'> Tên </div>"
                  + "</div>"
                  + "</div><div style='clear:both;'></div>";

        if (text.offsetWidth > 200) {
            strr = "<div  class='gcAUCH' " + "style='width:99.7% !important;'>"
                      + "<div class='gcLAC'>"
                      + "<div class='gcLAC1'> Mã </div>"
                      + "<div class='gcLACE'> Tên </div>"
                      + "</div>"
                      + "</div><div style='clear:both;'></div>";
            strr2 = "<div style='width:" + (text.offsetWidth + 19).toString() + "px !important;' class='gcDIVF'>Tổng số: (" + _value[0].toString() + ") "
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
    if (text) {
        var divBounds = Sys.UI.DomElement.getBounds(text);
        var position = new Sys.UI.Point(divBounds.x, divBounds.y + divBounds.height);

        var div = $get(divShowCID);
        $common.setLocation(div, position);
    }
}

function updateDivReport(result) {
    if ((result == null) || (result == 'undefined'))
        return false;
    if (curTCID == null)
        return false;

    curDataDivShow = result;
    if (curDataDivShow.length <= 0)
        return false;
    var strGobal = "";
    var lengthA = curDataDivShow.length;
    for (iM = 0; iM < (curDataDivShow.length); ++iM) {
        var _value = curDataDivShow[iM][0];
        if (_value) {

            var value = iM;
            var moreText = _value;

            var idstr = "itemid" + iM;
            var str = "<div  id=\"" + idstr + "\" class='gcAUC' onclick='onItemClickReport(\"" + idstr + "\",\"" + curTCID + "\",\"" + iM.toString() + "\"); ' >"
                  + "<div class='gcLAC' >"
                  + "<div class='gcLAC1'>" + value + "</div>"
                  + "<div class='gcLACE'>" + moreText + "</div>"
                  + "</div>"
                  + "</div><div style='clear:both;'></div>";

            strGobal += str;

        }
    }
    var divShow = $get(divShowCID);
    var _value = curDataDivShow[curDataDivShow.length - 1];


    var strr = "<div class='gcAUCH'>"
                  + "<div class='gcLAC'>"
                  + "<div class='gcLAC1'> Code </div>"
                  + "<div class='gcLACE'> Name </div>"
                  + "</div>"
                  + "</div><div style='clear:both;'></div>";
    var strr2 = "<div class='gcDIVF'>Total: (" + lengthA.toString() + " items) "
                  + "</div>";

    MaxItem = lengthA;
    var text = $get(curTCID);
    if (text) {
        divShow.style.width = text.offsetWidth + 21 + 'px';
        strr = "<div class='gcAUCH'" + " style='width:" + (text.offsetWidth + 19).toString() + "px !important;'>"
                  + "<div class='gcLAC'>"
                  + "<div class='gcLAC1'> Code </div>"
                  + "<div class='gcLACE'> Name </div>"
                  + "</div>"
                  + "</div><div style='clear:both;'></div>";
        if ((text.offsetWidth + 21) < 150) {
            divShow.style.width = 180 + 'px';
            strr = "<div class='gcAUCH' " + "style='width:" + (180).toString() + "px !important;'>"
                  + "<div class='gcLAC'>"
                  + "<div class='gcLAC1'> Code </div>"
                  + "<div class='gcLACE'> Name </div>"
                  + "</div>"
                  + "</div><div style='clear:both;'></div>";
            strr = "<div class='gcAUCH' " + "style='width:" + (180 + 19).toString() + "px !important;'>"
                  + "<div class='gcLAC'>"
                  + "<div class='gcLAC1'> Code </div>"
                  + "<div class='gcLACE'> Name </div>"
                  + "</div>"
                  + "</div><div style='clear:both;'></div>";
        }

        if (text.offsetWidth > 200) {
            strr = "<div  class='gcAUCH' " + "style='width:" + (text.offsetWidth + 19).toString() + "px !important;'>"
                      + "<div class='gcLAC'>"
                      + "<div class='gcLAC1'> Code </div>"
                      + "<div class='gcLACE'> Name </div>"
                      + "</div>"
                      + "</div><div style='clear:both;'></div>";
            strr2 = "<div style='width:" + (text.offsetWidth + 19).toString() + "px !important;' class='gcDIVF'>Total: (" + lengthA.toString() + " items) "
                      + "</div>";
            divShow.innerHTML = strr + "<div  style='width:" + (text.offsetWidth + 19).toString() + "px !important;' class='gcDIVShow2'>" + strGobal + "</div>" + strr2;
        }
        else
            divShow.innerHTML = strr + "<div  class='gcDIVShow2'>" + strGobal + "</div>" + strr2;
    }
    divShow.style.display = "block";

    if (typeof postUpdateDivLast == 'function')
        postUpdateDivLast(result)
    if (text) {
        var divBounds = Sys.UI.DomElement.getBounds(text);
        var position = new Sys.UI.Point(divBounds.x, divBounds.y + divBounds.height);

        var div = $get(divShowCID);
        $common.setLocation(div, position);
    }

}
function updateDivStart(result) {
    if ((result == null) || (result == 'undefined'))
        return false;
    if (curTCID == null)
        return false;

    curDataDivShow = result;
    if (curDataDivShow.length <= 0)
        return false;
    var strGobal = "";
    for (iM = 0; iM < (curDataDivShow.length - 1); ++iM) {
        var _value = curDataDivShow[iM];
        if (_value) {
            var style = (_value[_value.length - 1]).toString();
            var value = _value[0];
            var moreText = _value[1];

            var idstr = "itemid" + iM;
            var str = "<div  id=\"" + idstr + "\" class='gcAUCNew' onclick='onItemClickLink(\"" + idstr + "\",\"" + curTCID + "\",\"" + iM.toString() + "\"); ' >"
                  + "<div class='gcLAC' >"
                  + "<div class='gcLAC1'>" + "" + "</div>"
                  + "<div class='gcLACE'>" + moreText + "</div>"
                  + "</div>"
                  + "</div><div style='clear:both;'></div>";
            if (style == "1") {
                str = "<div  id=\"" + idstr + "\" class='gcAUCC' onclick='onItemClickLink(\"" + idstr + "\",\"" + curTCID + "\",\"" + iM.toString() + "\"); ' >"
                      + "<div class='gcLAC' >"
                      + "<div class='gcLAC1'>" + "" + "</div>"
                      + "<div class='gcLACE'>" + moreText + "</div>"
                      + "</div>"
                      + "</div><div style='clear:both;'></div>";
            }
            strGobal += str;

        }
    }
    var divShow = $get(divShowCID);
    var _value = curDataDivShow[curDataDivShow.length - 1];

    divShow.innerHTML = "<div style='width:" + (250).toString() + "px !important;' class='gcDIVShow2'>" + strGobal + "</div>";

    divShow.style.display = "block";

    var text = $get(curTCID);
    if (text) {
        var divBounds = Sys.UI.DomElement.getBounds(text);
        var position = new Sys.UI.Point(divBounds.x, divBounds.y + divBounds.height);

        var div = $get(divShowCID);
        $common.setLocation(div, position);
    }
}

function printSelection(node) {

    var content = node.innerHTML;
    var pwin = window.open('', 'print_content', 'width=100,height=100');

    pwin.document.open();
    pwin.document.write('<html><head id="Head1" runat=:server"><title>Document</title><link href="../UserControl/style_home.css" rel="stylesheet" type="text/css" /></head><body ">' + content + '</body></html>');
    pwin.print();
    pwin.document.close();
    pwin.close();

}
function buildDivPrint(ctrl, id) {
    ctrl.innerHTML = "Testting";
}
function FormatDiv(str, msg) {
    var buildStr = "<div class='ErrorMsgServer' >"
        + "<div class='ErrorMsgServerCaption'>" + msg + " </div>"
        + str
        + "</div>";
    return buildStr;
}

