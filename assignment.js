const arr = [1, 5, 7, 3, 10];
console.log(arr.filter((e) => e > 5));
console.log(arr.map((e) => ({ num: e })));
const multiplicationArr = arr.reduce(
    (prevValue, currValue) => currValue * prevValue,
    1
);
console.log(multiplicationArr);

function findMax(...numbers) {
    let currMax = numbers[0];
    for (const iterator of numbers) {
        currMax = iterator > currMax ? iterator : currMax;
    }
    return currMax;
}

console.log(findMax(...arr));

function findMinMax(...numbers) {
    let currMax = numbers[0];
    let currMin = numbers[0];
    for (const iterator of numbers) {
        currMax = iterator > currMax ? iterator : currMax;
        currMin = iterator < currMin ? iterator : currMin;
    }

    return [currMax, currMin];
}

const [max, min] = findMinMax(...arr);
console.log(min, max);

const mySet = new Set();
mySet.add(19);
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(11);
console.log(mySet);
