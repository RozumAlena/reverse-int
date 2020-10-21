module.exports = function reverse (n) {
    const stringNum = Math.abs(n).toString().split('').reverse().join('');
    let result = (stringNum.startsWith('0')) ? stringNum.substring(1) : stringNum;
 return result;
}
