if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
              ? args[number]
              : match
            ;
        });
    };
}
Number.prototype.formatMoney = function (n, t, i) {
    var u = this,
    n = isNaN(n = Math.abs(n)) ? 2 : n,
    t = t == undefined ? "." : t,
    i = i == undefined ? "," : i,
    e = u < 0 ? "-" : "",
    f = parseInt(u = Math.abs(+u || 0).toFixed(n)) + "",
    r = (r = f.length) > 3 ? r % 3 : 0;
    return e + (r ? f.substr(0, r) + i : "") +
        f.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + i) + (n ? t + Math.abs(u - f).toFixed(n).slice(2) : "");
};

//Ajax manager for queue
var ajaxManager = (function () {
    var requests = [];

    return {
        addReq: function (opt) {
            requests.push(opt);
        },
        removeReq: function (opt) {
            if ($.inArray(opt, requests) > -1)
                requests.splice($.inArray(opt, requests), 1);
        },
        run: function () {
            var self = this,
                oriSuc;

            if (requests.length) {
                oriSuc = requests[0].complete;

                requests[0].complete = function () {
                    if (typeof (oriSuc) === 'function') oriSuc();

                    requests.shift();
                    self.run.apply(self, []);
                };

                $.ajax(requests[0]);

            } else {
                self.tid = setTimeout(function () {
                    self.run.apply(self, []);
                }, 1000);
            }
        },
        stop: function () {
            requests = [];
            clearTimeout(this.tid);
        }
    };
}());