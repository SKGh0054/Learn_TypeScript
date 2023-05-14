function getLength(args: { length: number }): void {  // 获取传入值的length属性  这种函数没有必要使用泛型
    console.log(args.length);
}

getLength("aaaaa")
getLength(["a", "b", "c"])
getLength({ length: 10 })




// 泛型约束使用
interface IInfo {
    length: number
}
function getInfo<T extends IInfo>(info: T): T {  // 使用<T extends IInfo>之后传入的参数类型T必须同时满足IInfo中的类型
    return info
}

const res1 = getInfo<string>("aaaaa")
const res2 = getInfo<string[]>(["a", "b", "c"])
const res3 = getInfo<{ length: number }>({ length: 10 })
// const res4 = getInfo<number>(111)









export { }