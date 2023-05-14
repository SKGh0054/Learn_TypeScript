class Ponit { // 普通写法
    constructor(public x: number, public y: number) { }
}

const p = new Ponit(1, 2)
// const p1 = new Ponit("1", "2")



class Ponit1<T = number, E = number> { // 泛型写法
    constructor(public x: T, public y: E) { }
}

const pp = new Ponit1(1, 2)  // const pp: Ponit1<number, number>
const pp1 = new Ponit1("1", "2")  // const pp1: Ponit1<string, string>
const pp2 = new Ponit1(1, "2")  // const pp2: Ponit1<number, string>


export { }