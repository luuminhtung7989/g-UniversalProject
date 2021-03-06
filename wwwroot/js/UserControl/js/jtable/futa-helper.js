//Format money
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