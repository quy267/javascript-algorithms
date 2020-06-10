function quickSort(array) {
    // change code below this line
    const length = array.length;

    if (length <= 1) {
        return array
    }
    let PIVOT = array[0];
    let GREATER = [];
    let LESSER = [];

    for (let i = 1; i < length; i++) {
        if (array[i] > PIVOT) {
            GREATER.push(array[i])
        } else {
            LESSER.push(array[i])
        }
    }

    let sorted = quickSort(LESSER);
    sorted.push(PIVOT)
    sorted = sorted.concat(quickSort(GREATER))
    return sorted;
}

// test array:
console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
