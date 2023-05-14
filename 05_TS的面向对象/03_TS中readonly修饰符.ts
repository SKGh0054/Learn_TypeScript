class Person {
    readonly name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}


const p = new Person("wrj", 18)
// p.name = "aa"  // 错误name是只读属性
p.age = 20









export { }