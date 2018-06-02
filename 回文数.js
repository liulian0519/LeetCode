/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var s = x.toString();
    var n = s.split('').reverse().join('');
    if(s==n)
        return true
    else
        return false
};