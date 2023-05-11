let info: object = {  // 类型注解为空对象类型  不推荐这种写法
    name: "wrj",
    age: 18
}
// console.log(info.name); // 报错

let info2: {  // 这样无法为info2添加或删除属性  不推荐这种写法
    name: string,
    age: number
} = {  // 类型注解为空对象类型  不推荐这种写法
    name: "wrj",
    age: 18
}
// info2.hei = 1.88 // 报错


let info3 = {  // 直接进行类型推导   推荐这种写法
    name: "wrj",
    age: 18
}
export { }