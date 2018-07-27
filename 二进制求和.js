/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split('').reverse();
    b = b.split('').reverse();
    var add = 0;
    var c = [];
    var len = Math.max(a.length,b.length);
    
    for(var i=0;i<len;i++){
        var sum = (a[i]=== undefined?0:Number(a[i])) + (b[i]=== undefined?0:Number(b[i])) + add ;
        c[i] = sum & 1;
        if(sum>=2){
            add = 1
        }else{
            add = 0
        }
    }
    if(add){
        c[len] = 1;
    }
    
    return c.reverse().join('').toString();
};