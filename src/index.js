exports.min = function min(array = []) {
    if (array.length === 0) {
        return 0;
    }
    let minValue = array[0];
    array.forEach(item => minValue < item? minValue: minValue = item);
    return minValue;
}

exports.max = function max(array = []) {
    if (array.length === 0) {
        return 0;
    }
    
    return Math.max(...array);
}

exports.avg = function avg(array = []) {
    if (array.length === 0) {
        return 0;
    }
    return array.reduce((sum, item) => sum + item, 0)/array.length;

}
