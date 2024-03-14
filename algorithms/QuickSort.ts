
const array = [9, 3, 7, 4, 69, 420, 42];

function qs(arr: number[], lo: number, hi: number): void {
    if(lo >= hi) {
        return
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx-1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if(arr[i] <= pivot) {
            idx++;
            const tpm = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tpm;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quickSort(arr: number[]): number[] {
    qs(arr, 0, arr.length-1);
    return arr;
}

//ejemplo de implementacion
console.log('before sorting', array)
quickSort(array)
console.log('quickSort', array)