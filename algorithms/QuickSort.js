"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array = [9, 3, 7, 4, 69, 420, 42];
function qs(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    var pivotIdx = partition(arr, lo, hi);
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}
function partition(arr, lo, hi) {
    var pivot = arr[hi];
    var idx = lo - 1;
    for (var i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            var tpm = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tpm;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
}
function quickSort(arr) {
    qs(arr, 0, arr.length - 1);
    return arr;
}
exports.default = quickSort;
console.log('before sorting', array);
quickSort(array);
console.log('quickSort', array);
