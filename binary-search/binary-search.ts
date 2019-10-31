export default class BinarySearch {
    array: any;
    constructor(list: number[]) {
        this.array = this.isSorted(list);
    }

    isSorted(list: number[]) {
        const sortedList = [...list]
        const compare = (element: number, index: number) => element === list[index];
        sortedList.sort((a, b) => a - b)
        if (!sortedList.every(compare)) return undefined;
        return list;
    }

    indexOf(val: number) {
        let low = 0;
        let high = this.array.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (this.array[mid] === val) return mid;
            else if (this.array[mid] < val) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}
