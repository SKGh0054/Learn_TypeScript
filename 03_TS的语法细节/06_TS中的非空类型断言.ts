interface IPerson {
    name: string,
    age: number,
    friend?: {
        name: string
    }
}

const info: IPerson = {
    name: "wrj",
    age: 18
}

// 1.使用可选链 ?.
console.log(info.friend?.name);
// 属性赋值
// info.friend?.name = "aaa" // 代码错误 -- 赋值表达式的左侧不能是可选属性访问。
// 解决方案一：类型缩小
if (info.friend) {
    info.friend.name = "aaa"
}
// 解决方案二：非空类型断言(非常危险的代码 只有确保有值的时候才能使用 !.)
info.friend!.name = "aaa"






export { }