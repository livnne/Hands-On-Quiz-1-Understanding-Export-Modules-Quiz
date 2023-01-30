module.exports = function (rate, hours){
    this.rate = 300;
    this.hours = 4*6;
    this.sssDeduct = 1200;
    this.pagIbigDeduct = 300;
    this.philHealthDeduct = 400;
    this.grossPay = function (rate, hours) {
        grossPay = rate*hours;
        return grossPay;
    }
    this.taxDeduct = function (grossPay) {
        taxDeduct = grossPay * 0.1;
        return taxDeduct;
    }
    this.netPay = function () {
        netPay = grossPay - totalDeduct;
        return netPay;
    }
    this.totalDeduct = function () {
        totalDeduct = taxDeduct + sssDeduct + pagIbigDeduct + philHealthDeduct;
        return totalDeduct;
    }
}