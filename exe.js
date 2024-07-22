//1
function oddNumbers(low, upp) {
    const result = [];
    for (let i = low; i <= upp; i += 2) {
        result.push(i);
    }
    return result;
}

const oddNums = oddNumbers(3, 15);
console.log(oddNums);

//2
function uniqueChars(str) {
    return new Set(str).size === str.length;
}

// Пример использования:
console.log(uniqueChars('abcdef')); 
console.log(uniqueChars('aA')); 
console.log(uniqueChars('hello')); 
