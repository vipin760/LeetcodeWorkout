var romanToInt = function(s) {
    var roman = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let curVal = 0;
    let preVal = 0;
    let result = 0;
    for(let i=s.length-1 ; i>=0 ; i--){
        let romanVal = s[i]
        curVal = roman[romanVal]
        if(curVal=>preVal){
            result += curVal
    }else{
        result -= curVal
    }
    preVal = curVal
}
   return result 
};

const input = "III"
console.log(romanToInt(input));