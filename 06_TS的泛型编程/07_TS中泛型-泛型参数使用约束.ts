// 条件一：传入的key必须是obj已有的key
// <O, K extends keyof O> 表示K继承了O中所有属性名的联合类型
// K extends keyof O 等价于 K extends "wrj" | 18 | 1.88
function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
    return obj[key]
}

const info = {
    myname: "wrj",
    age: 18,
    height: 1.88
}

const myname = getObjectProperty(info, "myname")




export { }