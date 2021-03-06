const {
    bubbleSort,
    quickSort,
    selectSort,
    mergeSort,
    insertSort
} = require('./index');

//冒泡排序
let arr = [9, 3, 6, 7, 1, 2, 1, 3],
    arrSorted = [1, 1, 2, 3, 3, 6, 7, 9];

test('冒泡排序', () => {
    expect(bubbleSort(arr)).toEqual(arrSorted);
});

arr = [9, 3, 6, 7, 1, 2, 1, 3];
test('选择排序', () => {
    expect(selectSort(arr)).toEqual(arrSorted);
});

arr = [9, 3, 6, 7, 1, 2, 1, 3];
test('插入排序', () => {
    expect(insertSort(arr)).toEqual(arrSorted);
});

arr = [9, 3, 6, 7, 1, 2, 1, 3];
test('归并排序', () => {
    expect(mergeSort(arr)).toEqual(arrSorted);
});

arr = [9, 3, 6, 7, 1, 2, 1, 3];
test('快速排序1', () => {
    expect(quickSort(arr)).toEqual(arrSorted);
});