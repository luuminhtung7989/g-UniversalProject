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

    
    $('#DepartureDate').datepicker({
        format: 'mm/dd/yyyy'
    });

   

    //Load report for current date
    loadReport();
});


function loadReport() {

    ajaxManager.stop();
    ajaxManager.run();

    var departureDate = moment($('#DepartureDate').val(), "MM/DD/YYYY");
    //var bgrandom = ["bg-success", "bg-danger", "bg-info", "bg-warning"];
    //var bgrandom = ["bg-old", "bg-event"];

    $('tbody#reportPerRoute').empty();

    //Chart today
    ajaxManager.addReq({
        type: "POST",
        url: "/api/v1/svc?format=json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            _a: "sslyt_CPC_GetReportTicketStatusPerDayAsChart",
            _c: { DepartureDate: departureDate.format("YYYY-MM-DDT00:00:00.000") }
        }),
        success: function(response) {
            var categories = [];
            var totals = [];
            var paids = [];
            var onlines = [];
            var discounts = [];

            for (var i = 0; i < response.Records.length; i++) {
                categories.push(response.Records[i][1]);
                totals.push(response.Records[i][2]);
                paids.push(response.Records[i][3]);
                onlines.push(response.Records[i][4]);
                discounts.push(response.Records[i][5]);
            }
            $('#divMoneySeries').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Departure Ticket In ' + departureDate.format("MM/DD/YYYY")
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
                        text: 'Number of ticket'
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
                series: [
                    {
                        name: 'Total Ticket',
                        data: totals

                    }, {
                        name: 'Paid',
                        data: paids
                    }, {
                        name: 'Online Paid',
                        data: onlines
                    }, {
                        name: 'Discount',
                        data: discounts
                    }
                ]
            });
        }
    });

    //Summary
    ajaxManager.addReq({
        type: "POST",
        url: "/api/v1/svc?format=json",
        contentType: "application/json; charset=utf-8",
        //async: false,
        data: JSON.stringify({
            _a: "sslyt_CPC_GetTotalReportTicketStatus",
            _c: { DepartureDate: departureDate.format("YYYY-MM-DDT00:00:00.000") }
        }),
        success: function (response) {
            var $container = $('tbody#reportPerRoute');
            var summary = "";
            for (var i = 0; i < response.TotalRecordCount; i++) {
                switch (i) {
                    case 0:
                        summary += "<tr class='bg-info'><td colspan=2>Summary on {9}</td><td><strong style='color: #7cb5ec;'>{0}</strong></td><td><strong style='color: red;'>{1}</strong></td><td><strong>{2}</strong></td><td><strong style='color: #90ed7d;'>{3}</strong></td><td><strong style='color: #f7a35c;'>{4}</strong></td><td><strong style='color: blue;'>{5}</strong></td><td>{6}</td><td>{7}</td><td>{8}</td></tr>".format(
                              response.Records[i][0].formatMoney(0, ',', '.'), (response.Records[i][0] - response.Records[i][1]).formatMoney(0, ',', '.'), response.Records[i][1].formatMoney(0, ',', '.'),
                          response.Records[i][3].formatMoney(0, ',', '.'), response.Records[i][5].formatMoney(0, ',', '.'),
                          response.Records[i][2].formatMoney(0, ',', '.'), ((response.Records[i][1] / response.Records[i][0]) * 100).toFixed(2), ((response.Records[i][3] / response.Records[i][0]) * 100).toFixed(2),
                          (((response.Records[i][0] - response.Records[i][1]) / response.Records[i][0]) * 100).toFixed(2), departureDate.format("MM/DD/YYYY")
                        );
                        break;
                    case 1:
                        var v1 = (response.Records[i][0] - response.Records[i][1]) - (response.Records[2][0] - response.Records[2][1]);
                        if (v1 < 0) {
                            v1 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v1.formatMoney(0, ',', '.'));
                        } else {
                            v1 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v1.formatMoney(0, ',', '.'));
                        }

                        var v2 = (response.Records[i][1] - response.Records[2][1]);
                        if (v2 < 0) {
                            v2 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v2.formatMoney(0, ',', '.'));
                        } else {
                            v2 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v2.formatMoney(0, ',', '.'));
                        }

                        var v3 = (response.Records[i][3] - response.Records[2][3]);
                        if (v3 < 0) {
                            v3 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v3.formatMoney(0, ',', '.'));
                        } else {
                            v3 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v3.formatMoney(0, ',', '.'));
                        }

                        var v4 = (response.Records[i][5] - response.Records[2][5]);
                        if (v4 < 0) {
                            v4 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v4.formatMoney(0, ',', '.'));
                        } else {
                            v4 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v4.formatMoney(0, ',', '.'));
                        }

                        var v5 = (response.Records[i][2] - response.Records[2][2]);
                        if (v5 < 0) {
                            v5 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v5.formatMoney(0, ',', '.'));
                        } else {
                            v5 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v5.formatMoney(0, ',', '.'));
                        }

                        var v6 = (((response.Records[i][1] / response.Records[i][0]) * 100) - ((response.Records[2][1] / response.Records[2][0]) * 100));
                        if (v6 < 0) {
                            v6 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v6.toFixed(2));
                        } else {
                            v6 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v6.toFixed(2));
                        }
                        var v7 = (((response.Records[i][3] / response.Records[i][0]) * 100) - ((response.Records[2][3] / response.Records[2][0]) * 100));
                        if (v7 < 0) {
                            v7 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v7.toFixed(2));
                        } else {
                            v7 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v7.toFixed(2));
                        }

                        var v8 = ((((response.Records[i][0] - response.Records[i][1]) / response.Records[i][0]) * 100) - (((response.Records[2][0] - response.Records[2][1]) / response.Records[2][0]) * 100));
                        if (v8 < 0) {
                            v8 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v8.toFixed(2));
                        } else {
                            v8 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v8.toFixed(2));
                        }

                        summary += "<tr class='bg-info'><td colspan=2>From {9} to {10}</td><td><strong style='color: #7cb5ec;'>{0}</strong></td><td><strong style='color: red;'>{1}</strong><br/>{11}</td><td><strong>{2}</strong><br/>{12}</td><td><strong style='color: #90ed7d;'>{3}</strong><br/>{13}</td><td><strong style='color: #f7a35c;'>{4}</strong><br/>{14}</td><td><strong style='color: blue;'>{5}</strong><br/>{15}</td><td>{6}<br/>{16}</td><td>{7}<br/>{17}</td><td>{8}<br/>{18}</td></tr>".format(
                             response.Records[i][0].formatMoney(0, ',', '.'), (response.Records[i][0] - response.Records[i][1]).formatMoney(0, ',', '.'), response.Records[i][1].formatMoney(0, ',', '.'),
                          response.Records[i][3].formatMoney(0, ',', '.'), response.Records[i][5].formatMoney(0, ',', '.'),
                          response.Records[i][2].formatMoney(0, ',', '.'), ((response.Records[i][1] / response.Records[i][0]) * 100).toFixed(2), ((response.Records[i][3] / response.Records[i][0]) * 100).toFixed(2),
                          (((response.Records[i][0] - response.Records[i][1]) / response.Records[i][0]) * 100).toFixed(2), moment(departureDate).startOf('year').format("MM/DD/YYYY"), departureDate.format("MM/DD/YYYY"),
                          v1, v2, v3, v4, v5, v6, v7, v8
                       );
                        break;
                    case 2:
                        summary += "<tr class='bg-info bdb'><td colspan=2>From {9} to {10}</td><td><strong style='color: #7cb5ec;'>{0}</strong></td><td><strong style='color: red;'>{1}</strong></td><td><strong>{2}</strong></td><td><strong style='color: #90ed7d;'>{3}</strong></td><td><strong style='color: #f7a35c;'>{4}</strong></td><td><strong style='color: blue;'>{5}</strong></td><td>{6}</td><td>{7}</td><td>{8}</td></tr>".format(
                          response.Records[i][0].formatMoney(0, ',', '.'), (response.Records[i][0] - response.Records[i][1]).formatMoney(0, ',', '.'), response.Records[i][1].formatMoney(0, ',', '.'),
                          response.Records[i][3].formatMoney(0, ',', '.'), response.Records[i][5].formatMoney(0, ',', '.'),
                          response.Records[i][2].formatMoney(0, ',', '.'), ((response.Records[i][1] / response.Records[i][0]) * 100).toFixed(2), ((response.Records[i][3] / response.Records[i][0]) * 100).toFixed(2),
                          (((response.Records[i][0] - response.Records[i][1]) / response.Records[i][0]) * 100).toFixed(2), moment(departureDate).subtract(1, 'years').startOf('year').format("MM/DD/YYYY"), moment(departureDate).subtract(1, 'years').format("MM/DD/YYYY")
                      );
                        break;
                }
            }
            $container.prepend(summary);
        }
    });

    //Load report per route
    var routeReqIndexs = [];
    for (var r = 0; r < routes.length; r++) {

        routeReqIndexs.push(r);

        ajaxManager.addReq({
            type: "POST",
            url: "/api/v1/svc?format=json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                _a: "sslyt_CPC_GetReportTicketStatusPerRoute",
                _c: {
                    DepartureDate: departureDate.format("YYYY-MM-DDT00:00:00.000"),
                    DepartureFRouteId: routes[r][0],
                    DepartureKRouteId: routes[r][1],
                    RetunrFRouteId: routes[r][2],
                    RetunrKRouteId: routes[r][3]
                }
            }),
            success: function (response) {

                var ir = routeReqIndexs.shift();
                var fname = routes[ir][4];
                var tname = routes[ir][5];

                var $container = $('tbody#reportPerRoute');
                var summary = "";

                var availExpect = 0;
                var paidExpect = 0;
                var onlineExpect = 0;
                var discountExpect = 0;
                var paidMoneyExpect = 0;
                var rateExpect = 0.00;
                var onlineRateExpect = 0.00;
                var availRateExpect = 0.00;

                for (var i = 0; i < response.TotalRecordCount; i++) {
                    switch (i) {
                        case 0:
                            summary += "<tr><td>{0}</td><td>{1}</td><td><strong style='color: #7cb5ec;'>{2}</strong></td><td><strong style='color: red;'>{3}</strong></td><td><strong>{4}</strong></td><td><strong style='color: #90ed7d;'>{5}</strong></td><td><strong style='color: #f7a35c;'>{6}</strong></td><td><strong style='color: blue;'>{7}</strong></td><td>{8}</td><td>{9}</td><td>{10}</td></tr>".format(
                                i + 1, fname,
                                response.Records[i][0].formatMoney(0, ',', '.'), (response.Records[i][0] - response.Records[i][1]).formatMoney(0, ',', '.'), response.Records[i][1].formatMoney(0, ',', '.'),
                                response.Records[i][3].formatMoney(0, ',', '.'), response.Records[i][5].formatMoney(0, ',', '.'),
                                response.Records[i][2].formatMoney(0, ',', '.'), ((response.Records[i][1] / response.Records[i][0]) * 100).toFixed(2), ((response.Records[i][3] / response.Records[i][0]) * 100).toFixed(2),
                                (((response.Records[i][0] - response.Records[i][1]) / response.Records[i][0]) * 100).toFixed(2)
                            );
                            break;
                        case 1:
                            summary += "<tr><td>{0}</td><td>{1}</td><td><strong style='color: #7cb5ec;'>{2}</strong></td><td><strong style='color: red;'>{3}</strong></td><td><strong>{4}</strong></td><td><strong style='color: #90ed7d;'>{5}</strong></td><td><strong style='color: #f7a35c;'>{6}</strong></td><td><strong style='color: blue;'>{7}</strong></td><td>{8}</td><td>{9}</td><td>{10}</td></tr>".format(
                                i + 1, tname,
                                response.Records[i][0].formatMoney(0, ',', '.'), (response.Records[i][0] - response.Records[i][1]).formatMoney(0, ',', '.'), response.Records[i][1].formatMoney(0, ',', '.'),
                                response.Records[i][3].formatMoney(0, ',', '.'), response.Records[i][5].formatMoney(0, ',', '.'),
                                response.Records[i][2].formatMoney(0, ',', '.'), ((response.Records[i][1] / response.Records[i][0]) * 100).toFixed(2), ((response.Records[i][3] / response.Records[i][0]) * 100).toFixed(2),
                                (((response.Records[i][0] - response.Records[i][1]) / response.Records[i][0]) * 100).toFixed(2)
                            );
                            break;
                        case 2:

                            //Expectation value
                            availExpect += (response.Records[i][0] - response.Records[i][1]);
                            paidExpect += response.Records[i][1];
                            onlineExpect += response.Records[i][3];
                            discountExpect += response.Records[i][5];
                            paidMoneyExpect += response.Records[i][2];
                            rateExpect += (response.Records[i][1] / response.Records[i][0]) * 100;
                            onlineRateExpect += (response.Records[i][3] / response.Records[i][0]) * 100;
                            availRateExpect += ((response.Records[i][0] - response.Records[i][1]) / response.Records[i][0]) * 100;

                            summary += "<tr class='{11}'><td>{0}</td><td>{1}</td><td><strong style='color: #7cb5ec;'>{2}</strong></td><td><strong style='color: red;'>{3}</strong></td><td><strong>{4}</strong></td><td><strong style='color: #90ed7d;'>{5}</strong></td><td><strong style='color: #f7a35c;'>{6}</strong></td><td><strong style='color: blue;'>{7}</strong></td><td>{8}</td><td>{9}</td><td>{10}</td></tr>".format(
                                i + 1, "Total",
                                response.Records[i][0].formatMoney(0, ',', '.'), (response.Records[i][0] - response.Records[i][1]).formatMoney(0, ',', '.'), response.Records[i][1].formatMoney(0, ',', '.'),
                                response.Records[i][3].formatMoney(0, ',', '.'), response.Records[i][5].formatMoney(0, ',', '.'),
                                response.Records[i][2].formatMoney(0, ',', '.'), ((response.Records[i][1] / response.Records[i][0]) * 100).toFixed(2), ((response.Records[i][3] / response.Records[i][0]) * 100).toFixed(2),
                                (((response.Records[i][0] - response.Records[i][1]) / response.Records[i][0]) * 100).toFixed(2),
                                "success"
                            );
                            break;
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:

                            var v1 = ((response.Records[2][0] - response.Records[2][1]) - (response.Records[i][0] - response.Records[i][1]));
                            if (v1 < 0) {
                                v1 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v1.formatMoney(0, ',', '.'));
                            } else {
                                v1 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v1.formatMoney(0, ',', '.'));
                            }

                            var v2 = (response.Records[2][1] - response.Records[i][1]);
                            if (v2 < 0) {
                                v2 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v2.formatMoney(0, ',', '.'));
                            } else {
                                v2 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v2.formatMoney(0, ',', '.'));
                            }

                            var v3 = (response.Records[2][3] - response.Records[i][3]);
                            if (v3 < 0) {
                                v3 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v3.formatMoney(0, ',', '.'));
                            } else {
                                v3 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v3.formatMoney(0, ',', '.'));
                            }

                            var v4 = (response.Records[2][5] - response.Records[i][5]);
                            if (v4 < 0) {
                                v4 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v4.formatMoney(0, ',', '.'));
                            } else {
                                v4 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v4.formatMoney(0, ',', '.'));
                            }

                            var v5 = (response.Records[2][2] - response.Records[i][2]);
                            if (v5 < 0) {
                                v5 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v5.formatMoney(0, ',', '.'));
                            } else {
                                v5 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v5.formatMoney(0, ',', '.'));
                            }

                            var v6 = (((response.Records[2][1] / response.Records[2][0]) * 100) - ((response.Records[i][1] / response.Records[i][0]) * 100));
                            if (v6 < 0) {
                                v6 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v6.toFixed(2));
                            } else {
                                v6 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v6.toFixed(2));
                            }
                            var v7 = (((response.Records[2][3] / response.Records[2][0]) * 100) - ((response.Records[i][3] / response.Records[i][0]) * 100));
                            if (v7 < 0) {
                                v7 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v7.toFixed(2));
                            } else {
                                v7 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v7.toFixed(2));
                            }

                            var v8 = ((((response.Records[2][0] - response.Records[2][1]) / response.Records[2][0]) * 100) - (((response.Records[i][0] - response.Records[i][1]) / response.Records[i][0]) * 100));
                            if (v8 < 0) {
                                v8 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v8.toFixed(2));
                            } else {
                                v8 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v8.toFixed(2));
                            }

                            //Expectation value
                            availExpect += (response.Records[i][0] - response.Records[i][1]);
                            paidExpect += response.Records[i][1];
                            onlineExpect += response.Records[i][3];
                            discountExpect += response.Records[i][5];
                            paidMoneyExpect += response.Records[i][2];
                            rateExpect += (response.Records[i][1] / response.Records[i][0]) * 100;
                            onlineRateExpect += (response.Records[i][3] / response.Records[i][0]) * 100;
                            availRateExpect += ((response.Records[i][0] - response.Records[i][1]) / response.Records[i][0]) * 100;

                            summary += "<tr class='{11}'><td>{0}</td><td>{1}</td><td><strong style='color: #7cb5ec;'>{2}</strong></td><td><strong style='color: red;'>{3}<br />{12}</strong></td><td><strong>{4}<br />{13}</strong></td><td><strong style='color: #90ed7d;'>{5}<br />{14}</strong></td><td><strong style='color: #f7a35c;'>{6}<br />{15}</strong></td><td><strong style='color: blue;'>{7}<br />{16}</strong></td><td>{8}<br />{17}</td><td>{9}<br />{18}</td><td>{10}<br />{19}</td></tr>".format(
                                i + 1, i == 7 ? "Last year" : (i == 6 ? "Last month" : ((i - 2) > 1 ? "Last " + (i - 2) + " weeks" : "Last week")),
                                response.Records[i][0].formatMoney(0, ',', '.'), (response.Records[i][0] - response.Records[i][1]).formatMoney(0, ',', '.'), response.Records[i][1].formatMoney(0, ',', '.'),
                                response.Records[i][3].formatMoney(0, ',', '.'), response.Records[i][5].formatMoney(0, ',', '.'),
                                response.Records[i][2].formatMoney(0, ',', '.'), ((response.Records[i][1] / response.Records[i][0]) * 100).toFixed(2), ((response.Records[i][3] / response.Records[i][0]) * 100).toFixed(2),
                                (((response.Records[i][0] - response.Records[i][1]) / response.Records[i][0]) * 100).toFixed(2),
                                "warning", v1, v2, v3, v4, v5, v6, v7, v8
                            );
                            break;
                        case 8:
                            summary += "<tr class='{11}'><td>{0}</td><td>From {1} to {12}</td><td><strong style='color: #7cb5ec;'>{2}</strong></td><td><strong style='color: red;'>{3}</strong></td><td><strong>{4}</strong></td><td><strong style='color: #90ed7d;'>{5}</strong></td><td><strong style='color: #f7a35c;'>{6}</strong></td><td><strong style='color: blue;'>{7}</strong></td><td>{8}</td><td>{9}</td><td>{10}</td></tr>".format(
                               i + 1, moment(departureDate).subtract(1, 'years').startOf('year').format("MM/DD/YYYY"),
                               response.Records[i][0].formatMoney(0, ',', '.'), (response.Records[i][0] - response.Records[i][1]).formatMoney(0, ',', '.'), response.Records[i][1].formatMoney(0, ',', '.'),
                               response.Records[i][3].formatMoney(0, ',', '.'), response.Records[i][5].formatMoney(0, ',', '.'),
                               response.Records[i][2].formatMoney(0, ',', '.'), ((response.Records[i][1] / response.Records[i][0]) * 100).toFixed(2), ((response.Records[i][3] / response.Records[i][0]) * 100).toFixed(2),
                               (((response.Records[i][0] - response.Records[i][1]) / response.Records[i][0]) * 100).toFixed(2),
                               "info", moment(departureDate).subtract(1, 'years').format("MM/DD/YYYY")
                           );
                            break;
                        case 9:

                            var v9 = ((response.Records[i][0] - response.Records[i][1]) - (response.Records[8][0] - response.Records[8][1]));
                            if (v9 < 0) {
                                v9 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v9.formatMoney(0, ',', '.'));
                            } else {
                                v9 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v9.formatMoney(0, ',', '.'));
                            }

                            var v10 = (response.Records[i][1] - response.Records[8][1]);
                            if (v10 < 0) {
                                v10 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v10.formatMoney(0, ',', '.'));
                            } else {
                                v10 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v10.formatMoney(0, ',', '.'));
                            }

                            var v11 = (response.Records[i][3] - response.Records[8][3]);
                            if (v11 < 0) {
                                v11 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v11.formatMoney(0, ',', '.'));
                            } else {
                                v11 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v11.formatMoney(0, ',', '.'));
                            }

                            var v12 = (response.Records[i][5] - response.Records[8][5]);
                            if (v12 < 0) {
                                v12 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v12.formatMoney(0, ',', '.'));
                            } else {
                                v12 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v12.formatMoney(0, ',', '.'));
                            }

                            var v13 = (response.Records[i][2] - response.Records[8][2]);
                            if (v13 < 0) {
                                v13 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v13.formatMoney(0, ',', '.'));
                            } else {
                                v13 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v13.formatMoney(0, ',', '.'));
                            }

                            var v14 = (((response.Records[i][1] / response.Records[i][0]) * 100) - ((response.Records[8][1] / response.Records[8][0]) * 100));
                            if (v14 < 0) {
                                v14 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v14.toFixed(2));
                            } else {
                                v14 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v14.toFixed(2));
                            }
                            var v15 = (((response.Records[i][3] / response.Records[i][0]) * 100) - ((response.Records[8][3] / response.Records[8][0]) * 100));
                            if (v15 < 0) {
                                v15 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v15.toFixed(2));
                            } else {
                                v15 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v15.toFixed(2));
                            }

                            var v16 = ((((response.Records[i][0] - response.Records[i][1]) / response.Records[i][0]) * 100) - (((response.Records[8][0] - response.Records[8][1]) / response.Records[8][0]) * 100));
                            if (v16 < 0) {
                                v16 = "<span class='badge bg-red'><i class='fa fa-caret-down'></i>{0}</span>".format(v16.toFixed(2));
                            } else {
                                v16 = "<span class='badge bg-green'><i class='fa fa-caret-up'></i>{0}</span>".format(v16.toFixed(2));
                            }

                            summary += "<tr class='{11}'><td>{0}</td><td>From {1} to {12}</td><td><strong style='color: #7cb5ec;'>{2}</strong></td><td><strong style='color: red;'>{3}<br />{13}</strong></td><td><strong>{4}<br />{14}</strong></td><td><strong style='color: #90ed7d;'>{5}<br />{15}</strong></td><td><strong style='color: #f7a35c;'>{6}<br />{16}</strong></td><td><strong style='color: blue;'>{7}<br />{17}</strong></td><td>{8}<br />{18}</td><td>{9}<br />{19}</td><td>{10}<br />{20}</td></tr>".format(
                               i + 1, moment(departureDate).startOf('year').format("MM/DD/YYYY"),
                               response.Records[i][0].formatMoney(0, ',', '.'), (response.Records[i][0] - response.Records[i][1]).formatMoney(0, ',', '.'), response.Records[i][1].formatMoney(0, ',', '.'),
                               response.Records[i][3].formatMoney(0, ',', '.'), response.Records[i][5].formatMoney(0, ',', '.'),
                               response.Records[i][2].formatMoney(0, ',', '.'), ((response.Records[i][1] / response.Records[i][0]) * 100).toFixed(2), ((response.Records[i][3] / response.Records[i][0]) * 100).toFixed(2),
                               (((response.Records[i][0] - response.Records[i][1]) / response.Records[i][0]) * 100).toFixed(2),
                               "info", moment(departureDate).format("MM/DD/YYYY"), v9, v10, v11, v12, v13, v14, v15, v16
                           );
                            break;
                    }
                }

                //Expert
                summary += "<tr class='{9} bdb'><td colspan=2>Expectation</td><td><strong style='color: #7cb5ec;'>{0}</strong></td><td><strong style='color: red;'>{1}</strong></td><td><strong>{2}</strong></td><td><strong style='color: #90ed7d;'>{3}</strong></td><td><strong style='color: #f7a35c;'>{4}</strong></td><td><strong style='color: blue;'>{5}</strong></td><td>{6}</td><td>{7}</td><td>{8}</td></tr>".format(
                    response.Records[2][0].formatMoney(0, ',', '.'), Math.ceil((availExpect / 6)), Math.ceil((paidExpect / 6)),
                    Math.ceil((onlineExpect / 6)), Math.ceil((discountExpect / 6)), Math.ceil((paidMoneyExpect / 6)),
                    (rateExpect / 6).toFixed(2), (onlineRateExpect / 6).toFixed(2), (availRateExpect / 6).toFixed(2),
                    "danger"
                );

                $container.append(summary);
            }
        });
    }


};
