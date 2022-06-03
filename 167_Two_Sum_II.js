// /**
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
//  var twoSum = function(numbers, target) {
//     for (let i=0; i<numbers.length-1; i++) {
//         for (let j=i+1; j<numbers.length; j++) {
//             if (numbers[i] + numbers[numbers.length-1] < target) {
//                 break;
//             }
//             if (numbers[i] + numbers[j] === target) {
//                 return [i+1, j+1]
//             }
//         }
//     }
// };

// BETTER:
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
    var twoSum = function(numbers, target) {
    x = 0;
    y = numbers.length -1;

    while (x < y){
        let sum = numbers[x] + numbers[y]
        if (sum === target){
            break
        }
        if (sum > target){
            y--
        } else if (sum < target){
            x++
        }
    }
    return [x+1,y+1]
};