"use strict";
class DynamicArray {
    constructor() {
        this.arr = [];
    }
    add(number) {
        this.arr.push(number);
    }
    get(index) {
        if (index < 0 || index >= this.arr.length) {
            return null;
        }
        return this.arr[index];
    }
    size() {
        return this.arr.length;
    }
}
