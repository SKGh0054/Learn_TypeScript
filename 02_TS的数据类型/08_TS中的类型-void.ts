function sum1(num1: number, num2: number): number { // 返回number类型
    return num1 + num2
}


function sum2(num1: number, num2: number): void { // 返回void类型
    console.log(num1 + num2);

    return undefined  // 返回void类型可以返回undefined
}

// 用途：用来指定函数的类型的返回值为void
type fooType = () => void
const foo: fooType = () => { }
// 原理同上
const bar: () => void = () => { }










export { }