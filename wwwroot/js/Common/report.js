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
    if (dateString == null) {
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

    return 'format error!';
};
function gDT(dd, dt) {
    var dts = $.trim((null != dd ? dd : "") + " " + (null != dt ? dt : ""));
    var departureTime = new Date();
    if ("" != dts) {
        departureTime = parseDateJs(dts);
    }
    // console.log(departureTime);
    return departureTime;
};
function rp1(obj, pbId) {
    var strW = (pbId != '' ? (' DepartmentId = ' + pbId) : '');
    obj._a = 'rp1';
    obj._cf = {
        bShowIndexRow: false,
        mColMergForSubSumRow: 3,
        mArrArgSumary: [3],
        reportId: 1,
        strOrderBy: ' order by DepartmentIdName, Name asc ',
        hdValue: ' ',
        mMaxLevel: 1,                                           // 1: group by 1 cap; 2: group by 2 cap
        bShowSubSumary: 1,
        classCol: [
            [2, 'dhu_rpt_TextLeft']
        ],
        strWhere: strW
    };
}


function rp2(obj, startDate, endDate, nvId, pbId) {
    var strW = " enddate >= '" + dateToString(gDT(startDate, '00:00'), 'iso')
        + "' and enddate <= '" + dateToString(gDT(endDate, '23:59'), 'iso') + "'"
        + (nvId != '' ? (' and EmployeeId = ' + nvId + ' ') : ' ')
        + (pbId != '' ? (' and DepartmentId = ' + pbId + ' ') : ' ');
    _a = 'rp2';
    _cf = {
        bShowIndexRow: false,
        mColMergForSubSumRow: 6,
        mArrArgSumary: [6, 7, 8, 9, 10, 11],
        reportId: 2,
        strOrderBy: ' order by EndDate, EmployeeIdHoTen, criteriaidcode, WorkIdCode asc ',
        hdValue: 'Từ ngày ' + startDate + ' 00:00 đến ngày ' + endDate + ' 23:59',
        mMaxLevel: 2, // 1: group by 1 cap; 2: group by 2 cap
        bShowSubSumary: 1,
        classCol: [
            [5, 'dhu_rpt_TextLeft'],
        ],
        alterView: [
            "alter view XIKE_Report as select EndDate, employeeid, employeeidhoten, " +
            "case when workid is not null then workidcriteriaIdCode else " +
            "case when Workeventid is not null then workeventidcriteriaIdCode " +
            "else workexternalidcriteriaIdCode end end as criteriaIdcode, " +
            "case when workid is not null then workidcode else " +
            "case when Workeventid is not null then workeventidname else WorkExternalIdcode end end as WorkIdCode, " +
            "count(case when taskstatusidcode = 'HT' then 1 else null end) as HThanh, " +
            "count(case when taskstatusidcode != 'HT' then 1 else null end) as CHThanh, " +
            "sum (case when taskstatusidcode = 'HT' then Marks else 0 end) as Marks, " +
            "sum (case when taskstatusidcode = 'HT' then AddMarks else 0 end) as AddMarks, " +
            "sum (case when taskstatusidcode = 'HT' then SubMarks else 0 end) as SubMarks, " +
            "sum((case when taskstatusidcode = 'HT' then Marks else 0 end) + " +
            "(case when taskstatusidcode = 'HT' then AddMarks else 0 end) - " +
            "(case when taskstatusidcode = 'HT' then SubMarks else 0 end)) as TotalMark " +
            "from XIKE_Task_Assignment04 " +
            "where " + strW +
            " group by EndDate, employeeid, employeeidhoten, workid, workidcode, workeventid, " +
            "workeventidname, workexternalid, WorkExternalIdcode, workidcriteriaid, workidcriteriaidcode, " +
            "workeventidcriteriaid, workeventidcriteriaidcode, workexternalidcriteriaid, workexternalidcriteriaidcode"
        ],
    };
};
function rp3(obj, startDate, endDate, nvId, pbId) {
    var strW = " enddate >= '" + dateToString(gDT(startDate, '00:00'), 'iso')
        + "' and enddate <= '" + dateToString(gDT(endDate, '23:59'), 'iso') + "'"
        + (nvId != '' ? (' and EmployeeId = ' + nvId + ' ') : ' ')
        + (pbId != '' ? (' and DepartmentId = ' + pbId + ' ') : ' ');
    _a = 'rp3';
    _cf = {
        bShowIndexRow: false,
        mColMergForSubSumRow: 4,
        mArrArgSumary: [4, 5, 6, 7, 8, 9],
        reportId: 3,
        strOrderBy: ' order by EndDate, DepartmentIdName, EmployeeIdHoTen asc ',
        hdValue: 'Từ ngày ' + startDate + ' 00:00 đến ngày ' + endDate + ' 23:59',
        mMaxLevel: 2, // 1: group by 1 cap; 2: group by 2 cap
        bShowSubSumary: 1,
        classCol: [
            [5, 'dhu_rpt_TextLeft'],
        ],
        alterView: [
            "alter view XIKE_Report as select EndDate, departmentid, departmentidName, EmployeeIdHoTen, " +
            "count(case when taskstatusidcode = 'HT' then 1 else null end) as HThanh, " +
            "count(case when taskstatusidcode != 'HT' then 1 else null end) as CHThanh, " +
            "sum (case when taskstatusidcode = 'HT' then Marks else 0 end) as Marks, " +
            "sum (case when taskstatusidcode = 'HT' then AddMarks else 0 end) as AddMarks, " +
            "sum (case when taskstatusidcode = 'HT' then SubMarks else 0 end) as SubMarks, " +
            "sum((case when taskstatusidcode = 'HT' then Marks else 0 end) + " +
            "(case when taskstatusidcode = 'HT' then AddMarks else 0 end) - " +
            "(case when taskstatusidcode = 'HT' then SubMarks else 0 end)) as TotalMark " +
            "from XIKE_Task_Assignment04 " +
            "where " + strW +
            " group by EndDate, departmentid, departmentidName, employeeid, EmployeeIdHoTen "
        ],
    };
};

function rp4(obj, startDate, endDate, nvId, pbId) {
    var strW = " enddate >= '" + dateToString(gDT(startDate, '00:00'), 'iso')
        + "' and enddate <= '" + dateToString(gDT(endDate, '23:59'), 'iso') + "'"
        + (nvId != '' ? (' and EmployeeId = ' + nvId + ' ') : ' ')
        + (pbId != '' ? (' and DepartmentId = ' + pbId + ' ') : ' ');
    _a = 'rp4';
    _cf = {
        bShowIndexRow: false,
        mColMergForSubSumRow: 4,
        mArrArgSumary: [4, 5, 6, 7, 8, 9],
        reportId: 4,
        strOrderBy: ' order by EndDate, EmployeeIdHoTen, criteriaidcode asc ',
        hdValue: 'Từ ngày ' + startDate + ' 00:00 đến ngày ' + endDate + ' 23:59',
        mMaxLevel: 2, // 1: group by 1 cap; 2: group by 2 cap
        bShowSubSumary: 1,
        //classCol: [
        //    [5, 'dhu_rpt_TextLeft'],
        //],
        alterView: [
            "alter view XIKE_Report as select EndDate, employeeid, employeeidhoten, criteriaIdCode, " +
            "count(case when taskstatusidcode = 'HT' then 1 else null end) as HThanh, " +
            "count(case when taskstatusidcode != 'HT' then 1 else null end) as CHThanh, " +
            "sum (case when taskstatusidcode = 'HT' then Marks else 0 end) as Marks, " +
            "sum (case when taskstatusidcode = 'HT' then AddMarks else 0 end) as AddMarks, " +
            "sum (case when taskstatusidcode = 'HT' then SubMarks else 0 end) as SubMarks, " +
            "sum((case when taskstatusidcode = 'HT' then Marks else 0 end) + " +
            "(case when taskstatusidcode = 'HT' then AddMarks else 0 end) - " +
            "(case when taskstatusidcode = 'HT' then SubMarks else 0 end)) as TotalMark " +
            "from (select a.*, " +
            "case when a.workid is not null then a.workidcriteriaId else " +
            "case when a.Workeventid is not null then a.workeventidcriteriaId " +
            "else a.workexternalidcriteriaId end end as criteriaId, " +
            "case when a.workid is not null then a.workidcriteriaIdCode else " +
            "case when a.Workeventid is not null then a.workeventidcriteriaIdCode " +
            "else a.workexternalidcriteriaIdCode end end as criteriaIdcode " +
            " from XIKE_Task_Assignment04 a) as b " +
            "where " + strW +
            " group by EndDate, employeeid, employeeidhoten, criteriaid, criteriaidcode"
        ],
    };
};
function rp5(obj, startDate, endDate, nvId, pbId) {
    var strW = " convert(int, substring(convert(nvarchar(10), enddate, 110), 0,3)) >= " + (gDT(startDate, '00:00').getMonth() + 1)
        + " and convert(int, substring(convert(nvarchar(10), enddate, 110), 0,3)) <= " + (gDT(endDate, '00:00').getMonth() + 1)
        + " and convert(int, substring(convert(nvarchar(10), enddate, 120), 0,5)) >= " + (gDT(startDate, '00:00').getFullYear())
        + " and convert(int, substring(convert(nvarchar(10), enddate, 120), 0,5)) <= " + (gDT(endDate, '00:00').getFullYear())
        + (nvId != '' ? (' and EmployeeId = ' + nvId + ' ') : ' ')
        + (pbId != '' ? (' and DepartmentId = ' + pbId + ' ') : ' ');
    _a = 'rp5';
    _cf = {
        bShowIndexRow: false,
        mColMergForSubSumRow: 4,
        mArrArgSumary: [4, 5, 6, 7, 8, 9],
        reportId: 5,
        strOrderBy: ' order by Month, EmployeeIdHoTen, criteriaidcode asc ',
        hdValue: 'Từ ngày ' + startDate + ' 00:00 đến ngày ' + endDate + ' 23:59',
        mMaxLevel: 2, // 1: group by 1 cap; 2: group by 2 cap
        bShowSubSumary: 1,
        //classCol: [
        //    [5, 'dhu_rpt_TextLeft'],
        //],
        alterView: [
            "alter view XIKE_Report as select (N'Tháng ' + convert(nvarchar(5), " +
            "substring(convert(nvarchar(10), enddate, 110), 0,3))) as Month, " +
            "employeeid, employeeidhoten, criteriaIdCode, " +
            "count(case when taskstatusidcode = 'HT' then 1 else null end) as HThanh, " +
            "count(case when taskstatusidcode != 'HT' then 1 else null end) as CHThanh, " +
            "sum (case when taskstatusidcode = 'HT' then Marks else 0 end) as Marks, " +
            "sum (case when taskstatusidcode = 'HT' then AddMarks else 0 end) as AddMarks, " +
            "sum (case when taskstatusidcode = 'HT' then SubMarks else 0 end) as SubMarks, " +
            "sum((case when taskstatusidcode = 'HT' then Marks else 0 end) + " +
            "(case when taskstatusidcode = 'HT' then AddMarks else 0 end) - " +
            "(case when taskstatusidcode = 'HT' then SubMarks else 0 end)) as TotalMark " +
            "from XIKE_Assignment07 " +
            "where " + strW +
            " group by convert(nvarchar(5), substring(convert(nvarchar(10), enddate, 110), 0,3)), " +
            "employeeid, employeeidhoten, criteriaid, criteriaidcode"
        ],
    };
};

function rp6(obj, startDate, endDate, nvId, pbId) {
    var strW = " convert(int, substring(convert(nvarchar(10), enddate, 110), 0,3)) >= " + (gDT(startDate, '00:00').getMonth() + 1)
        + " and convert(int, substring(convert(nvarchar(10), enddate, 110), 0,3)) <= " + (gDT(endDate, '00:00').getMonth() + 1)
        + " and convert(int, substring(convert(nvarchar(10), enddate, 120), 0,5)) >= " + (gDT(startDate, '00:00').getFullYear())
        + " and convert(int, substring(convert(nvarchar(10), enddate, 120), 0,5)) <= " + (gDT(endDate, '00:00').getFullYear())
        + (nvId != '' ? (' and EmployeeId = ' + nvId + ' ') : ' ')
        + (pbId != '' ? (' and DepartmentId = ' + pbId + ' ') : ' ');
    _a = 'rp6';
    _cf = {
        bShowIndexRow: false,
        mColMergForSubSumRow: 4,
        mArrArgSumary: [4, 5, 6, 7, 8, 9],
        reportId: 6,
        strOrderBy: ' order by Month, DepartmentIdName, EmployeeIdHoTen asc ',
        hdValue: 'Từ ngày ' + startDate + ' 00:00 đến ngày ' + endDate + ' 23:59',
        mMaxLevel: 2, // 1: group by 1 cap; 2: group by 2 cap
        bShowSubSumary: 1,
        //classCol: [
        //    [5, 'dhu_rpt_TextLeft'],
        //],
        alterView: [
            "alter view XIKE_Report as select (N'Tháng ' + convert(nvarchar(5), " +
            "substring(convert(nvarchar(10), enddate, 110), 0,3))) as Month, " +
            "DepartmentIdName, employeeidhoten, " +
            "count(case when taskstatusidcode = 'HT' then 1 else null end) as HThanh, " +
            "count(case when taskstatusidcode != 'HT' then 1 else null end) as CHThanh, " +
            "sum (case when taskstatusidcode = 'HT' then Marks else 0 end) as Marks, " +
            "sum (case when taskstatusidcode = 'HT' then AddMarks else 0 end) as AddMarks, " +
            "sum (case when taskstatusidcode = 'HT' then SubMarks else 0 end) as SubMarks, " +
            "sum((case when taskstatusidcode = 'HT' then Marks else 0 end) + " +
            "(case when taskstatusidcode = 'HT' then AddMarks else 0 end) - " +
            "(case when taskstatusidcode = 'HT' then SubMarks else 0 end)) as TotalMark " +
            "from XIKE_Assignment07 " +
            "where " + strW +
            " group by convert(nvarchar(5), substring(convert(nvarchar(10), enddate, 110), 0,3)), " +
            "employeeid, employeeidhoten, DepartmentIdName, departmentId"
        ],
    };
};


//function rp2(obj, startDate, endDate, nvId, pbId) {
//    var strW = " enddate >= '" + dateToString(gDT(startDate, '00:00'), 'iso')
//        + "' and enddate <= '" + dateToString(gDT(endDate, '23:59'), 'iso') + "'"
//        + (nvId != '' ? (' and EmployeeId = ' + nvId + ' ') : ' ')
//        + (pbId != '' ? (' and DepartmentId = ' + pbId + ' ') : ' ');
//    _a = 'rp2';
//    _cf = {
//        bShowIndexRow: false,
//        mColMergForSubSumRow: 6,
//        mArrArgSumary: [6, 7, 8, 9],
//        reportId: 2,
//        strOrderBy: ' order by EndDate, EmployeeIdHoTen, WorkIdCode asc ',
//        hdValue: 'Từ ngày ' + startDate + ' 00:00 đến ngày ' + endDate + ' 23:59',
//        mMaxLevel: 2, // 1: group by 1 cap; 2: group by 2 cap
//        bShowSubSumary: 1,
//        classCol: [
//            [2, 'dhu_rpt_TextLeft'],
//            [3, 'dhu_rpt_TextLeft'],
//        ],
//        alterView: [
//            "alter view XIKE_Report as select EndDate, employeeid, employeeidhoten, workid, " +
//            "case when workid is not null then workidcode else " +
//            "case when Work, " +
//            "count(case when taskstatusidcode = 'HT' then 1 else null end) as HThanh, " +
//            "count(case when taskstatusidcode != 'HT' then 1 else null end) as CHThanh, " +
//            "sum (case when taskstatusidcode = 'HT' then Marks else 0 end) as Marks, " +
//            "sum (case when taskstatusidcode = 'HT' then AddMarks else 0 end) as AddMarks, " +
//            "sum (case when taskstatusidcode = 'HT' then SubMarks else 0 end) as SubMarks, " +
//            "sum((case when taskstatusidcode = 'HT' then Marks else 0 end) + " +
//            "(case when taskstatusidcode = 'HT' then AddMarks else 0 end) - " +
//            "(case when taskstatusidcode = 'HT' then SubMarks else 0 end)) as TotalMark " +
//            "from XIKE_Assignment07 " +
//            "where " + strW +
//            " group by EndDate, employeeid, employeeidhoten, workid, workidcode"
//        ],
//    };
//};
//function rp3(obj, startDate, nvId, pbId) {
//    var strW = " convert(int, substring(convert(nvarchar(10), enddate, 110), 0,3)) <= " + (gDT(startDate, '00:00').getMonth() + 1)
//        + " and convert(int, substring(convert(nvarchar(10), enddate, 120), 0,5)) >= " + (gDT(startDate, '00:00').getFullYear())
//        + (nvId != '' ? (' and EmployeeId = ' + nvId + ' ') : ' ')
//        + (pbId != '' ? (' and DepartmentId = ' + pbId + ' ') : ' ');
//    _a = 'rp3';
//    _cf = {
//        bShowIndexRow: false,
//        mColMergForSubSumRow: 6,
//        mArrArgSumary: [6, 7, 8, 9],
//        reportId: 3,
//        strOrderBy: ' order by Week, EmployeeIdHoTen, WorkIdCode asc ',
//        hdValue: 'Tháng ' + (gDT(startDate, '00:00').getMonth() + 1),
//        mMaxLevel: 2, // 1: group by 1 cap; 2: group by 2 cap
//        bShowSubSumary: 1,
//        classCol: [
//            [2, 'dhu_rpt_TextLeft'],
//            [3, 'dhu_rpt_TextLeft'],
//        ],
//        alterView: [
//            "alter view XIKE_Report as select (N'Tuần ' + convert(nvarchar(5), " +
//            "(convert(int, substring(convert(nvarchar(10), enddate, 105), 0,3))/7 + 1))) as Week, " +
//            "employeeid, employeeidhoten, workid, workidcode, " +
//            "count(case when taskstatusidcode = 'HT' then 1 else null end) as HThanh, " +
//            "count(case when taskstatusidcode != 'HT' then 1 else null end) as DTHanh, " +
//            "sum (case when marks is null then 0 else marks end) as Marks, " +
//            "sum (case when addmarks is null then 0 else addmarks end) as AddMarks, " +
//            "sum (case when submarks is null then 0 else submarks end) as SubMarks, " +
//            "sum((case when marks is null then 0 else marks end) + " +
//            "(case when addmarks is null then 0 else addmarks end) - " +
//            "(case when submarks is null then 0 else submarks end)) as TotalMark " +
//            "from XIKE_Assignment07 " +
//            "where " + strW +
//            " group by convert(int, substring(convert(nvarchar(10), enddate, 105), 0,3))/7, employeeid, employeeidhoten, workid, workidcode"
//        ],
//    };
//};

//function rp4(obj, startDate, endDate, nvId, pbId) {
//    var strW = " convert(int, substring(convert(nvarchar(10), enddate, 110), 0,3)) >= " + (gDT(startDate, '00:00').getMonth() + 1)
//        + " and convert(int, substring(convert(nvarchar(10), enddate, 110), 0,3)) <= " + (gDT(endDate, '00:00').getMonth() + 1)
//        + " and convert(int, substring(convert(nvarchar(10), enddate, 120), 0,5)) >= " + (gDT(startDate, '00:00').getFullYear())
//        + " and convert(int, substring(convert(nvarchar(10), enddate, 120), 0,5)) <= " + (gDT(endDate, '00:00').getFullYear())
//        + (nvId != '' ? (' and EmployeeId = ' + nvId + ' ') : ' ')
//        + (pbId != '' ? (' and DepartmentId = ' + pbId + ' ') : ' ');
//    _a = 'rp4';
//    _cf = {
//        bShowIndexRow: false,
//        mColMergForSubSumRow: 6,
//        mArrArgSumary: [6, 7, 8, 9],
//        reportId: 4,
//        strOrderBy: ' order by Month, EmployeeIdHoTen, WorkIdCode asc ',
//        hdValue: 'Từ đầu tháng ' + (gDT(startDate, '00:00').getMonth() + 1) + ' đến cuối tháng ' + (gDT(endDate, '00:00').getMonth() + 1),
//        mMaxLevel: 2,                                           // 1: group by 1 cap; 2: group by 2 cap
//        bShowSubSumary: 1,
//        classCol: [
//            [2, 'dhu_rpt_TextLeft'],
//            [3, 'dhu_rpt_TextLeft'],
//        ],
//        alterView: [
//            "alter view XIKE_Report as select (N'Tháng ' + convert(nvarchar(5), substring(convert(nvarchar(10), enddate, 110), 0,3))) as Month, employeeid, employeeidhoten, workid, workidcode, " +
//            "count(case when taskstatusidcode = 'HT' then 1 else null end) as HThanh, " +
//            "count(case when taskstatusidcode != 'HT' then 1 else null end) as DTHanh, " +
//            "sum (case when marks is null then 0 else marks end) as Marks, " +
//            "sum (case when addmarks is null then 0 else addmarks end) as AddMarks, " +
//            "sum (case when submarks is null then 0 else submarks end) as SubMarks, " +
//            "sum((case when marks is null then 0 else marks end) + " +
//            "(case when addmarks is null then 0 else addmarks end) - " +
//            "(case when submarks is null then 0 else submarks end)) as TotalMark " +
//            "from XIKE_Assignment07 " +
//            "where " + strW +
//            " group by convert(nvarchar(5), substring(convert(nvarchar(10), enddate, 110), 0,3)), employeeid, employeeidhoten, workid, workidcode"
//        ],
//    };
//};

