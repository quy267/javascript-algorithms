function insertionSort(array) {
    // change code below this line
    const len = array.length;
    for (let i = 1; i < len; i++) {
        let j;
        let tmp = array[i]; // Copy of the current element.
        /* Check through the sorted part and compare with the number in tmp. If large, shift the number */
        for (j = i - 1; j >= 0 && (array[j] > tmp); j--) {
            // Shift the number
            array[j + 1] = array[j]
        }
        // Insert the copied number at the correct position
        // in sorted part.
        array[j + 1] = tmp
    }
    return array;
    // change code above this line
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
