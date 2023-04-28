/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = "", place = 0 
    num = String(num)
    
    for (let i = num.length-1; i>=0; i--) {
        if (place === 0) {
            if (num[i] === '0') {
                place++
            } else if (num[i] === '1') {
                result = "I" + result
                place++
            } else if (num[i] === '2') {
                result = "II" + result
                place++
            } else if (num[i] === '3') {
                result = "III" + result
                place++
            } else if (num[i] === '4') {
                result = "IV" + result
                place++
            } else if (num[i] === '5') {
                result = "V" + result
                place++
            } else if (num[i] === '6') {
                result = "VI" + result
                place++
            } else if (num[i] === '7') {
                result = "VII" + result
                place++
            } else if (num[i] === '8') {
                result = "VIII" + result
                place++
            } else if (num[i] === '9') {
                result = "IX" + result
                place++
            }
        } else if (place === 1) {
            if (num[i] === '0') {
                place++
            } else if (num[i] === '1') {
                result = "X" + result
                place++
            } else if (num[i] === '2') {
                result = "XX" + result
                place++
            } else if (num[i] === '3') {
                result = "XXX" + result
                place++
            } else if (num[i] === '4') {
                result = "XL" + result
                place++
            } else if (num[i] === '5') {
                result = "L" + result
                place++
            } else if (num[i] === '6') {
                result = "LX" + result
                place++
            } else if (num[i] === '7') {
                result = "LXX" + result
                place++
            } else if (num[i] === '8') {
                result = "LXXX" + result
                place++
            } else if (num[i] === '9') {
                result = "XC" + result
                place++
            }
        } else if (place === 2) {
            if (num[i] === '0') {
                place++
            } else if (num[i] === '1') {
                result = "C" + result
                place++
            } else if (num[i] === '2') {
                result = "CC" + result
                place++
            } else if (num[i] === '3') {
                result = "CCC" + result
                place++
            } else if (num[i] === '4') {
                result = "CD" + result
                place++
            } else if (num[i] === '5') {
                result = "D" + result
                place++
            } else if (num[i] === '6') {
                result = "DC" + result
                place++
            } else if (num[i] === '7') {
                result = "DCC" + result
                place++
            } else if (num[i] === '8') {
                result = "DCCC" + result
                place++
            } else if (num[i] === '9') {
                result = "CM" + result
                place++
            }
        } else if (place === 3) {
            if (num[i] === '0') {
                place++
            } else if (num[i] === '1') {
                result = "M" + result
                place++
            } else if (num[i] === '2') {
                result = "MM" + result
                place++
            } else if (num[i] === '3') {
                result = "MMM" + result
                place++
            }
        }
    }
    return result
};