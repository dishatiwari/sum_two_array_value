function sum_two_arrays_value() {
    let array1 = [3, 4, 5, 6, 7];
    let array2 = [1, 2, 3, 4, 5];
    let sum_array = [];
    for (i = 0; i < array1.length; i++) {
        let sum = array1[i] + array2[i];
        sum_array.push(sum);
    }
    console.log(sum_array);
}
sum_two_arrays_value();