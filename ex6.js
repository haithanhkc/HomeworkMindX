/**
 * a. 
 * 
 * Cho mảng gồm các số nguyên (ví dụ: [1, 6, 7, 22, 8]).
 * Viết arow function sử dụng array function map() biến mảng đầu vào thành mảng mới với điều kiện:
 *  - Phần tử chi hết cho 2 thì giữ nguyên.
 *  - Phần tử không chia hết cho 2 thì nhân 2
 * 
 * Example:  [1, 6, 7, 22, 8] => [2, 12, 14, 22, 8]
 */

// Code here ...
const inputArray = [1, 6, 7, 22, 8];

const transformedArray = inputArray.map(number => {
    if (number % 2 === 0) {
        return number; 
    } else {
        return number * 2; 
    }
});

console.log(transformedArray);

/**
 * b.
 * 
 * Cho mảng gồm các số nguyên (ví dụ: [1, 6, 7, 22, 8]).
 * Viết arow function sử dụng array function filter() và reduce() tính tổng các phần tử chi hết cho 2:
 * 
 * Example:  [1, 6, 7, 22, 8] => 36
 */

// Code here ...
const arrayList = [1, 6, 7, 22, 8];

const sumOfEvenElements = arrayList
    .filter(number => number % 2 === 0) 
    .reduce((sum, number) => sum + number, 0); 

console.log(sumOfEvenElements);