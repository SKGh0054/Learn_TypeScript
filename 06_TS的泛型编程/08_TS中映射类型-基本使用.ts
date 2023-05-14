interface IPerson {
    name: string,
    age: number
}

// 拷贝一份 -- 浪费
interface IPerson1 {
    name: string,
    age: number
}

// 使用映射类型(映射类型不可以使用interface只能使用type创建)
type MapPerson<T> = {
    [Property in keyof T]: T[Property]  // 相当于遍历T类型中的所有属性的类型
}

type Person2 = MapPerson<IPerson>  // 这样Person2类型就可以获取到IPerson中的所有类型了






export { }