function symm(array) {
    for (let index in array) {
        if (array[index] !=array[array.length - index -1]) {
            return false
        }
    }
    return true;
}

console.log(symm([1,2,3,4]));

console.log(symm([1,2,2,1]));

console.log(symm([1,1,1,1]));


class myClass {
    constructor(array) {
        this.array = array
    }
    get symmetrical(){
        return this.symm();
    }
    symm() {
        for (let index in this.array) {
            if (this.array[index] !=this.array [this.array.length - index -1]) {
                return false
            }
            return true;
        }
    }
}

let calc = new myClass([1,2,3,4]);
console.log(calc.symmetrical);

let calc2 = new myClass([1,2,2,1]);
console.log(calc2.symmetrical);