// 方案一：函数类型表达式
// 格式：(参数列表) => 返回值
const bar: (arg: number) => number = (arg: number): number => {
    return 123
}

type claFnType = (num1: number, num2: number) => number

const clac: (claFn: claFnType) => void = (claFn: claFnType) => {
    const num1: number = 10
    const num2: number = 20
    const res: number = claFn(num1, num2)
    console.log(res);
}

const aa: claFnType = (num1: number, num2: number): number => {
    return num1 + num2
}

clac(aa)


// 补充一点TS对于传入函数参数的个数不进行校验
// 举个例子
const array1: string[] = ["aa", "bb", "cc"]

array1.forEach((value, index, array) => { // callbackfn: (value: string, index: number, array: string[]) => void
    console.log(value);  // 如果对于函数传入参数的个数进行校验 那这里的函数参数都需要写出来（value: string, index: number, array: string[]），不然就报错了
    console.log(index);
    console.log(array);
})


<<<<<<< HEAD

=======
>>>>>>> origin/main
export { }