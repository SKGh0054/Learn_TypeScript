// 普通的数组可以通过索引访问
const names: string[] = ["a", "b", "c"]
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// 定义一个对象类型 -- 对象类型中可以定义索引签名
interface ICollection {
    [index: number]: any  // 索引签名  通过索引签名可以将一个可迭代对象转化为可以通过下标访问
    [key: string]: any
    length: number
}

// 定义一个函数可以接收上面对象类型
function iterationCollection(collection: ICollection) {
    console.log(collection[0]);
    console.log(collection[1]);
    console.log(collection[2]);

    console.log(collection["name"]);
    console.log(collection["age"]);
    console.log(collection["length"]);
}

// 定义一个元组类型
const tuple: [string, number, number] = ["wrj", 18, 1.88]

iterationCollection(tuple)
iterationCollection(names)
iterationCollection({ name: "wrj", age: 18, height: 1.88, length: 3 })



export { }