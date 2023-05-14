class Person {
    name: string
    age: number
    height: number

    constructor(name: string, age: number, height: number) {
        this.name = name
        this.age = age
        this.height = height
    }
}

const p = new Person("wrj", 18, 1.88)
console.log(p.name);


// 这是参数属性的使用(在参数前显示使用修饰符) -- 与上面功能一致的语法糖
class Person1 {
    constructor(public readonly name: string, private _age: number, public height: number) {

    }

    set age(newValue: number) {
        this._age = newValue
    }
}

const p1 = new Person1("wrj", 18, 1.88)
// p1.name = "aa" // 只读
console.log(p.name);




export { }