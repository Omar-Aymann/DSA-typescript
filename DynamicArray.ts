class DynamicArray<T> {
    private arr : T[];

    constructor() {
        this.arr = [];
    }

    public add(number : T) {
        this.arr.push(number);
    }
    public get(index : number) {
        if(index <  0 || index >= this.arr.length ) {
            return null;
        }
        return this.arr[index];
    }
    public size() {
        return this.arr.length;
    }
}