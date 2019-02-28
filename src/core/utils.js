
export class Utils {

    static formatCurrency(value) {
        if (!Utils.isNumeric(value)) {
            return value;
        }
        return (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    static isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
}
