var headerStrReceipt = "<table class=\"rptprintBodyTable\" width=\"100%\">"
                + "<tr>"
                            + "<td colspan=\"|4|\" style='font-size:12px;'> &nbsp;</td>"
                            + "</tr>"
                            + "<tr>"
                + "<tr>"
                         + "<td width=\"500px\"align=\"center\" ><span style='font-weight:bold;font-size:18px;'> |1| </span>  </br><span style='font-size:12px;'>Điện thoại: <strong>|2|</strong> &nbsp;Địa chỉ: |3|</br></span></td>"
                            + "</tr>"
                            + "<tr>"
                            + "<tr>"
                            + "<td align=\"center\" colspan=\"|4|\" width=\"400px\"><b><font size=\"6.0pt\" style='font-weight:bold;font-size:22px;'>|5|</font></b> </br>"
                            + "<span style='font-size:16px; font-weight:bold;'>|0|</span><br/>"
                            + "</td>"
                            + "</tr>"

                            + "<tr>"
                            + "<td colspan=\"|4|\" style='font-size:12px;'></td>"
                            + "</tr>"
                        + "</table>";//width=\"670px\"
var footerStrReceipt = "<table class=\"rptprintBodyTable\" width=\"100%\">"
                    + "<tr>"
                    + "<td align=\"center\" colspan=\"2\" width=\"400px\"><b><font size=\"4.0pt\" style='font-weight:bold;font-size:16px;'></font></b> </br>"
                    + "<span style='font-size:14px;'> </span><br/>"
                    + "</td>"
                    + "</tr>"
                    + "<tr>"
                    + "<td align=\"center\" colspan=\"2\" width=\"400px\"><b><font size=\"4.0pt\" >&nbsp; </br>"
                    + "<span style='font-size:14px;'> </span><br/>"
                    + "</td>"
                    + "</tr>"
                + "</table>";
var DefHeader = function()
{
   return [headerStrReceipt];
}
var DefineREPORT = function()
{
    var obj =  {Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'VattuId', FormName: 'Mã',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '1', Parent: 'isParent', ChildNode: '', ColTypeInt: '20', iNotFillData: 0, PositionData:47
    };
    var obj2 =  {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'VattuIdName', FormName: 'STC',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '2', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 41
    };
    var obj3 =  {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'DonViTinhIdName', FormName: 'Mặt hàng ',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '3', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 42
    };
    var obj4 =  {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'GiaBan', FormName: 'ĐVT',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '4', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 45
    };
    var obj5 =  {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'Loại',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 44
    };
    var obj6 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'ThanhTien', FormName: 'SL',
        IsShow: 'isShow', ColType: 'float', OrderCol: '6', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 6
    };
    var obj7 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'Giá bán',
        IsShow: 'isShow', ColType: 'float', OrderCol: '7', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 8
    };
    
    var obj9 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'ThanhTien', FormName: 'Thành tiền',
        IsShow: 'isShow', ColType: 'float', OrderCol: '9', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 10
    };
    var obj8 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'ThanhTien', FormName: 'Người lập',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '10', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 53
    };
    return [obj, obj2, obj3, obj4, obj5, obj6, obj7, obj9,obj8 ];
    
}

var DefineStock = function () {
    var obj1 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'VattuId', FormName: 'Nhóm hàng',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '1', Parent: 'isParent', ChildNode: '', ColTypeInt: '20', iNotFillData: 0, PositionData: 38
    };
    var obj2 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'VattuIdName', FormName: 'Mặt hàng',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '2', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 35
    };
    var obj3 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'DonViTinhIdName', FormName: 'Mã hàng',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '3', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 36
    };
    var obj4 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'GiaBan', FormName: 'ĐVT',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '4', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 37
    };
    var obj5 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'Ngày đầu kỳ',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 1
    };

    var obj6 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'SLDK',
        IsShow: 'isShow', ColType: 'float', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 5
    };
    var obj7 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'SLNK',
        IsShow: 'isShow', ColType: 'float', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 7
    };
    var obj8 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'SLXK',
        IsShow: 'isShow', ColType: 'float', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 6
    };
    var obj9 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'SLHT',
        IsShow: 'isShow', ColType: 'float', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 8
    };
    var obj10 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'SLTT',
        IsShow: 'isShow', ColType: 'float', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 9
    };

   
    var obj11 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'SL Bán ra',
        IsShow: 'isShow', ColType: 'float', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 33
    };
    var obj12 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'SLXH',
        IsShow: 'isShow', ColType: 'float', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 22
    };
    var obj13 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'SLXK-NB',
        IsShow: 'isShow', ColType: 'float', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 32
    };
    var obj14 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'SLXK-NCC',
        IsShow: 'isShow', ColType: 'float', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 25
    };
    var obj15 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'SLNK-NB',
        IsShow: 'isShow', ColType: 'float', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 29
    };
    var obj16 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'SLNK-NCC',
        IsShow: 'isShow', ColType: 'float', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 27
    };



    return [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16];
}


var DefineREPORT_ProductTesting = function () {
    var obj = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'VattuId', FormName: 'Mã',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '1', Parent: 'isParent', ChildNode: '', ColTypeInt: '20', iNotFillData: 0, PositionData: 1
    };
    var obj2 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'Code', FormName: 'STC',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '2', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 2
    };
    var obj3 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'Name', FormName: 'Mặt hàng ',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '3', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 3
    };
    var obj4 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'GiaBan', FormName: 'ĐVT',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '4', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 45
    };
    var obj5 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'Loại',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 44
    };
    var obj6 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'ThanhTien', FormName: 'SL',
        IsShow: 'isShow', ColType: 'float', OrderCol: '6', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 6
    };
    var obj7 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'Giá bán',
        IsShow: 'isShow', ColType: 'float', OrderCol: '7', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 8
    };

    var obj9 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'ThanhTien', FormName: 'Thành tiền',
        IsShow: 'isShow', ColType: 'float', OrderCol: '9', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 10
    };
    var obj8 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'ThanhTien', FormName: 'Người lập',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '10', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 53
    };
    return [obj3, obj, obj2, obj4, obj5, obj6, obj7, obj9, obj8];

}

var DefineREPORT_Product = function () {
    var obj = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'VattuId', FormName: 'Mã',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '1', Parent: 'isParent', ChildNode: '', ColTypeInt: '20', iNotFillData: 0, PositionData: 47
    };
    var obj2 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'VattuIdName', FormName: 'STC',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '2', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 41
    };
    var obj3 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'DonViTinhIdName', FormName: 'Mặt hàng ',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '3', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 42
    };
    var obj4 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'GiaBan', FormName: 'ĐVT',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '4', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 45
    };
    var obj5 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'Loại',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 44
    };
    var obj6 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'ThanhTien', FormName: 'SL',
        IsShow: 'isShow', ColType: 'float', OrderCol: '6', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 6
    };
    var obj7 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'Giá bán',
        IsShow: 'isShow', ColType: 'float', OrderCol: '7', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 8
    };

    var obj9 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'ThanhTien', FormName: 'Thành tiền',
        IsShow: 'isShow', ColType: 'float', OrderCol: '9', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 10
    };
    var obj8 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'ThanhTien', FormName: 'Người lập',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '10', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 53
    };
    return [obj3, obj, obj2,  obj4, obj5, obj6, obj7, obj9, obj8];

}
var DefineREPORTSUM_Product = function () {
    var obj1 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'VattuId', FormName: 'Mặt hàng',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '1', Parent: 'isParent', ChildNode: '', ColTypeInt: '20', iNotFillData: 0, PositionData: 0
    };
    var obj2 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'VattuIdName', FormName: 'ĐVT',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '2', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 1
    };
    var obj3 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'DonViTinhIdName', FormName: 'SL',
        IsShow: 'isShow', ColType: 'float', OrderCol: '3', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 2
    };
    var obj4 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'GiaBan', FormName: 'Tổng tiền',
        IsShow: 'isShow', ColType: 'float', OrderCol: '4', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 3
    };
    var obj5 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'SoLuong', FormName: 'Nhân viên',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '5', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 4
    };
    
    var obj98 = {ColName: 'DonViTinhIdName', FormName: 'Giá vốn', IsShow: 'isShow', ColType: 'float',  Parent: 'isParent',  iNotFillData: 0, PositionData: 5 };
    var obj99 = {ColName: 'DonViTinhIdName', FormName: 'Lãi', PositionData: 0, ColType: 'float', IsShow: 'isShow', Parent: 'isParent', iNotFillData: 1 };
    if (window.cur_gb_GroupRight <= 15)
        return [obj1, obj2, obj3, obj4, obj5, obj98, obj99];

    return [obj1, obj2, obj3, obj4, obj5];

}
var DefineREPORTSUM_ProductAll = function () {
    var obj1 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'VattuId', FormName: 'Mặt hàng',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '1', Parent: 'isParent', ChildNode: '', ColTypeInt: '20', iNotFillData: 0, PositionData: 0
    };
    var obj2 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'VattuIdName', FormName: 'ĐVT',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '2', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 1
    };
    var obj3 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'DonViTinhIdName', FormName: 'SL',
        IsShow: 'isShow', ColType: 'float', OrderCol: '3', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 2
    };
    var obj4 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'GiaBan', FormName: 'Tổng tiền',
        IsShow: 'isShow', ColType: 'float', OrderCol: '4', Parent: 'isParent', ChildNode: '', ColTypeInt: '9', iNotFillData: 0, PositionData: 3
    };
  
    var obj98 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'DonViTinhIdName', FormName: 'Giá vốn',
        IsShow: 'isShow', ColType: 'float', OrderCol: '3', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 4
    };
    var obj99 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'DonViTinhIdName', FormName: 'Lãi',
        IsShow: 'isShow', ColType: 'float', OrderCol: '3', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 1, PositionData: 0
    };
    if (window.cur_gb_GroupRight <= 15)
        return [obj1, obj2, obj3, obj4,  obj98, obj99];
    return [obj1, obj2, obj3, obj4];

}
var DefineREPORTSUM_ByEmploy = function () {
    var obj0 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'VattuId', FormName: 'Cửa hàng',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '1', Parent: 'isParent', ChildNode: '', ColTypeInt: '20', iNotFillData: 0, PositionData: 0
    };
    var obj1 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'VattuId', FormName: 'Nhân viên',
        IsShow: 'isShow', ColType: 'nvarchar', OrderCol: '1', Parent: 'isParent', ChildNode: '', ColTypeInt: '20', iNotFillData: 0, PositionData: 1
    };
    var obj2 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'VattuIdName', FormName: 'SL',
        IsShow: 'isShow', ColType: 'float', OrderCol: '2', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 2
    };
    var obj3 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'DonViTinhIdName', FormName: 'Tổng tiền',
        IsShow: 'isShow', ColType: 'float', OrderCol: '3', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 3
    };
    var obj4 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'DonViTinhIdName', FormName: 'Giá vốn',
        IsShow: 'isShow', ColType: 'float', OrderCol: '3', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 0, PositionData: 4
    };
    var obj5 = {
        Id: '1654', ReportId: '16011502', TableName: 'gcGobal_REPORT_AUTOGEN_ProductReceipt', ColName: 'DonViTinhIdName', FormName: 'Lãi',
        IsShow: 'isShow', ColType: 'float', OrderCol: '3', Parent: 'isParent', ChildNode: '', ColTypeInt: '1', iNotFillData: 1, PositionData: 5
    };
    if(window.cur_gb_GroupRight<=15)
        return [obj0,obj1, obj2, obj3, obj4, obj5];
    return [obj0,obj1, obj2, obj3];

}


function callSumSub(tblReport)
{
    //Tong theo nhom và định dạng
    if (tblReport.mListItem.length > 0)
    {
        //var t = tblReport.mArrArgSumary;// tb_cf["mArrArgSumary"] as ArrayList;
        for (var t=0,len=tblReport.mListItem.length;t<len;t++)
        {
            var Item = tblReport.mListItem[t];
            if (tblReport.mMaxLevel > 0)
            {
                var Tem3; //, temp4 = 0;
                for (var u = 0, len3 = tblReport.mArrArgSumary.length; u < len3; u++)
                {
                    if (tblReport.mArrArgSumary[u] == 0) {
                        Item.mValue[u] = "";
                        continue;
                    }
                    Tem3 = 0;
                    if (u < tblReport.mData[0].length)//fixed
                    for (var i = Item.from; i < Item.to; i++)
                    {
                        var value = tblReport.mData[i][u];
                        if (value.toString().length>0)
                            Tem3 += parseFloat(value)
                    }
                    var tmpSum = Tem3.toString().indexOf('.');
                    Item.mValue[u] = (tmpSum > 0) ? Tem3.toFixed(3).toString() : Tem3.toString();
                    //Item.strShowName = tblReport.strShowSumName;
                }
                Item.cssClass = "success-total";
                Item.cssValueClass = "success-total";
                Item.cssClassShowName = "success-total";
                //if (tblReport classListItem"))
                //{
               //     Item.cssClass = (string)_cf["classListItem"];
               //     Item.cssValueClass = (string)_cf["classListItem"];
               //     Item.cssClassShowName = (string)_cf["classListItem"];
               // }
                //for (var m = 0, len00 = Item.list.length; m < len00; m++)
               // {
                //    var Item2 = Item.list[m];
                //    for (var kk = 0, len2 = tblReport.mArrArgSumary.length; kk < len2; kk++)
                //    {
                //        if (tblReport.mArrArgSumary[kk] == 0)
                //            continue;
                //        Tem3 = 0;
                //        if (kk < tblReport.mData[0].length)//fixed
                //        for (var i = Item2.from; i < Item2.to; i++)
                //        {
                 //           var value = tblReport.mData[i][kk];
                //            if (value.toString().length > 0)
                //                Tem3 += value;
                //        }
                //        Item2.mValue[kk] = Tem3;
                        //if (_cf.ContainsKey("strShowSubName"))
                        //    Item2.strShowName = _cf["strShowSubName"] + "";
                //    }
                //    Item.list[m] = Item2;
                    //Item.list.selfAssign(Item2, m);
                //}
            }
            //----------------------------
            //tblReport.mListItem[t] = Item;
            //tblReport.mListItem.selfAssign(Item, t);
        }
    }
}