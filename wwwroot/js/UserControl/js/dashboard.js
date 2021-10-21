/*
* Author: Abdullah A Almsaeed
* Date: 4 Jan 2014
* Description:
*      This is a demo file used only for the main dashboard (default.aspx)
**/
$(function () {
    Highcharts.setOptions({
        lang: {
            decimalPoint: '.',
            thousandsSep: ','
        }
    });
    //main: refhresh every 10seconds
    main();
    setInterval(function () {
        main();
    }, 30 * 1000); //30s
    //-------------------end -----------------------
});


function main() {
    //box1
    $.ajax({
        type: "POST",
        url: "/api/v1/svc?format=json",
        data: JSON.stringify({
            _a: "sslyt_CPC_GetTotalTodayBooking",
            _c: { TuyenDuongId: 0 }
        }),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var num = parseInt(response.Records[0][0]);
            if (isNaN(num)) {
                num = 0;
            }
            var total = parseInt(response.Records[0][1]);
            if (isNaN(total)) {
                total = 0;
            }
            $('#numneworder').html(num);
            $('#totalneworder').html(total.formatMoney(0, '.', ','));
            //console.log(response.Records);
            //$("#box1").html(response.d);
        },
        error: function (response) {
            console.log(response);
        }
    });

    //box2
    $.ajax({
        type: "POST",
        url: "/api/v1/svc?format=json",
        data: JSON.stringify({
            _a: "sslyt_CPC_GetTotalTodaySuccessBooking",
            _c: { TuyenDuongId: 0 }
        }),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            //$("#box2").html(response.d);
            var tnum = parseInt(response.Records[0][0]);
            if (isNaN(tnum)) {
                tnum = 0;
            }
            var num = parseInt(response.Records[0][1]);
            if (isNaN(num)) {
                num = 0;
            }
            var total = parseInt(response.Records[0][2]);
            if (isNaN(total)) {
                total = 0;
            }
            $('#numsuccessorder').html(num);
            if (tnum != 0) {
                $('#percentsuccessorder').html(((num / tnum) * 100).toFixed(2));
            } else {
                $('#percentsuccessorder').html(0);
            }

            $('#totalsuccessorder').html(total.formatMoney(0, '.', ','));
        },
        error: function (response) {
            console.log(response);
        }
    });

    //Chart Last week
    $.ajax({
        type: "POST",
        url: "/api/v1/svc?format=json",
        data: JSON.stringify({
            _a: "sslyt_CPC_GetLastWeekReportAsChart",
            _c: { TuyenDuongId: 0 }
        }),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var categories = [];
            var totals = [];
            var totalSuccesses = [];
            for (var i = 0; i < response.Records.length; i++) {
                categories.push(response.Records[i][1] + '/' + response.Records[i][2] + '/' + response.Records[i][0]);
                totals.push(response.Records[i][3]);
                totalSuccesses.push(response.Records[i][4]);
            }
            //console.log(categories);
            $('#divMoneySeries').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Booking Ticket In Last 7 Days'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: categories
                },
                yAxis: {
                    min: 0,
                    labels: {
                        format: '{value:,.0f} '
                    },
                    title: {
                        text: 'Total ($)'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:,.0f} </b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.1,
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true
                        }
                    },
                },
                series: [{
                    name: 'Booking',
                    data: totals

                }, {
                    name: 'Payment Success',
                    data: totalSuccesses

                }]
            });



        },
        error: function (response) {
            console.log(response);
        }
    });

    //Table Summary LastWeek
    $.ajax({
        type: "POST",
        url: "/api/v1/svc?format=json",
        data: JSON.stringify({
            _a: "sslyt_CPC_GetLastWeekReportAsTable",
            _c: { TuyenDuongId: 0 }
        }),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            $("#tbl_Summary_LastWeek").find("tr:gt(0)").remove();
            var stt = 1;
            var totalSum = 0;
            var totalSuccessSum = 0;
            var ticketSum = 0;
            var ticketSuccessSum = 0;

            for (var i = 0; i < response.Records.length; i++) {

                var totalTodaySuccess = parseInt(response.Records[i][4]);
                if (isNaN(totalTodaySuccess)) {
                    totalTodaySuccess = 0;
                }

                var totalLastDay = parseInt(response.Records[i][5]);
                var totalLastWeek = parseInt(response.Records[i][6]);
                var totalLastMonth = parseInt(response.Records[i][7]);
                var totalLastYear = parseInt(response.Records[i][8]);
                if (isNaN(totalLastDay)) {
                    totalLastDay = 0;
                }
                if (isNaN(totalLastWeek)) {
                    totalLastWeek = 0;
                }
                if (isNaN(totalLastMonth)) {
                    totalLastMonth = 0;
                }
                if (isNaN(totalLastYear)) {
                    totalLastYear = 0;
                }
                var p_LastDay = totalLastDay == 0 ? (totalTodaySuccess > 0 ? 100 : 0) : ((totalTodaySuccess - totalLastDay) / totalLastDay) * 100;
                var p_LastWeek = totalLastWeek == 0 ? (totalTodaySuccess > 0 ? 100 : 0) : ((totalTodaySuccess - totalLastWeek) / totalLastWeek) * 100;
                var p_LastMonth = totalLastMonth == 0 ? (totalTodaySuccess > 0 ? 100 : 0) : ((totalTodaySuccess - totalLastMonth) / totalLastMonth) * 100;
                var p_LastYear = totalLastYear == 0 ? (totalTodaySuccess > 0 ? 100 : 0) : ((totalTodaySuccess - totalLastYear) / totalLastYear) * 100;


                var d = new Date(response.Records[i][0]);
                var name =(d.getMonth() + 1) + '/' +  d.getDate() + '/' + d.getFullYear();

                var row = "<tr> " +
                      "<td>" + stt + ".</td> " +
                      "<td>" + name + "</td> " +

                      "<td style='text-align:right'>" + response.Records[i][1].formatMoney(0, '.', ',') + "</td> " +
                      "<td style='text-align:right'>" + response.Records[i][2].formatMoney(0, '.', ',') + "</td> " +
                      "<td class='hidden-xs' style='text-align:right'>" + response.Records[i][3].formatMoney(0, '.', ',') + "</td> " +
                      "<td class='hidden-xs' style='text-align:right'>" + response.Records[i][4].formatMoney(0, '.', ',') + "</td> ";

                //percent
                //last day
                if (p_LastDay > 0) {
                    row +=
                    "<td class='hidden-xs'>" +
                    "<span class='badge bg-green'><i class='fa fa-caret-up'></i> " + p_LastDay.toFixed(2) + " %</span>" +
                    "</td> ";
                } else if (p_LastDay < 0) {
                    row +=
                    "<td class='hidden-xs'>" +
                    "<span class='badge bg-red'><i class='fa fa-caret-down'></i> " + p_LastDay.toFixed(2) + " %</span>" +
                    "</td> ";
                } else {
                    row +=
                      "<td class='hidden-xs'>" +
                      "<span class='badge bg-yellow'><i class='fa fa-caret-left'></i> " + p_LastDay.toFixed(2) + " %</span>" +
                      "</td> ";
                }

                //last week                      
                if (p_LastWeek > 0) {
                    row +=
                    "<td class='hidden-xs'>" +
                    "<span class='badge bg-green'><i class='fa fa-caret-up'></i> " + p_LastWeek.toFixed(2) + " %</span>" +
                    "</td> ";
                } else if (p_LastWeek < 0) {
                    row +=
                    "<td class='hidden-xs'>" +
                    "<span class='badge bg-red'><i class='fa fa-caret-down'></i> " + p_LastWeek.toFixed(2) + " %</span>" +
                    "</td> ";
                } else {
                    row +=
                      "<td class='hidden-xs'>" +
                      "<span class='badge bg-yellow'><i class='fa fa-caret-left'></i> " + p_LastWeek.toFixed(2) + " %</span>" +
                      "</td> ";
                }

                //last month                      
                if (p_LastMonth > 0) {
                    row +=
                    "<td class='hidden-xs'>" +
                    "<span class='badge bg-green'><i class='fa fa-caret-up'></i> " + p_LastMonth.toFixed(2) + " %</span>" +
                    "</td> ";
                } else if (p_LastMonth < 0) {
                    row +=
                    "<td class='hidden-xs'>" +
                    "<span class='badge bg-red'><i class='fa fa-caret-down'></i> " + p_LastMonth.toFixed(2) + " %</span>" +
                    "</td> ";
                } else {
                    row +=
                      "<td class='hidden-xs'>" +
                      "<span class='badge bg-yellow'><i class='fa fa-caret-left'></i> " + p_LastMonth.toFixed(2) + " %</span>" +
                      "</td> ";
                }
                //last year                      
                if (p_LastYear > 0) {
                    row +=
                    "<td class='hidden-xs'>" +
                    "<span class='badge bg-green'><i class='fa fa-caret-up'></i> " + p_LastYear.toFixed(2) + " %</span>" +
                    "</td> ";
                } else if (p_LastYear < 0) {
                    row +=
                    "<td class='hidden-xs'>" +
                    "<span class='badge bg-red'><i class='fa fa-caret-down'></i> " + p_LastYear.toFixed(2) + " %</span>" +
                    "</td> ";
                } else {
                    row +=
                      "<td class='hidden-xs'>" +
                      "<span class='badge bg-yellow'><i class='fa fa-caret-left'></i> " + p_LastYear.toFixed(2) + " %</span>" +
                      "</td> ";
                }

                row += "</tr>";

                $("#tbl_Summary_LastWeek").append(row);

                //calculat
                totalSum += response.Records[i][1];
                totalSuccessSum += response.Records[i][2];
                ticketSum += response.Records[i][3];
                ticketSuccessSum += response.Records[i][4];
                stt++;

            }

            //total row
            var row = "<tr  class='row-total' > " +
                      "<td colspan='2'>Total</td> " +


                      "<td style='text-align:right'>" + totalSum.formatMoney(0, '.', ',') + "</td> " +
                      "<td style='text-align:right'>" + totalSuccessSum.formatMoney(0, '.', ',') + "</td> " +
                      "<td class='hidden-xs' style='text-align:right'>" + ticketSum.formatMoney(0, '.', ',') + "</td> " +
                      "<td class='hidden-xs' style='text-align:right'>" + ticketSuccessSum.formatMoney(0, '.', ',') + "</td> " +
                      "<td class='hidden-xs' colspan='3'></td> ";

            $("#tbl_Summary_LastWeek").append(row);

        },
        error: function (response) {
            console.log(response);
        }
    });


    //box1
    $.ajax({
        type: "POST",
        url: "/api/v1/svc?format=json",
        data: JSON.stringify({
            _a: "sslyt_CPC_GetTotalBooking",
            _c: { TuyenDuongId: 0 }
        }),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var num = parseInt(response.Records[0][0]);
            if (isNaN(num)) {
                num = 0;
            }
            var total = parseInt(response.Records[0][1]);
            if (isNaN(total)) {
                total = 0;
            }
            $('#totalTicket').html(num);
            $('#totalMoney').html(total.formatMoney(0, '.', ','));
        },
        error: function (response) {
            console.log(response);
        }
    });

    //box2
    $.ajax({
        type: "POST",
        url: "/api/v1/svc?format=json",
        data: JSON.stringify({
            _a: "sslyt_CPC_GetTotalSuccessBooking",
            _c: { TuyenDuongId: 0 }
        }),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var tnum = parseInt(response.Records[0][0]);
            if (isNaN(tnum)) {
                tnum = 0;
            }
            var num = parseInt(response.Records[0][1]);
            if (isNaN(num)) {
                num = 0;
            }
            var total = parseInt(response.Records[0][2]);
            if (isNaN(total)) {
                total = 0;
            }
            $('#successTicket').html(num);
            if (tnum != 0) {
                $('#percentsuccessticket').html(((num / tnum) * 100).toFixed(2));
            } else {
                $('#percentsuccessticket').html(0);
            }

            $('#successMoney').html(total.formatMoney(0, '.', ','));
        },
        error: function (response) {
            console.log(response);
        }
    });

}