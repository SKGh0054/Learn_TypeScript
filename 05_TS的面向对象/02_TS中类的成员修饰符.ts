// public 默认为public, 在类内部或外部都可以访问
// private 私有的属性或方法, 只有在类的内部才可以访问
// protected 被保护的属性或者方法, 只有类的内部及其子类内部才可以被访问

class Person {
    protected name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // 方法变成私有方法: 只有在类内部才能访问
    private eating() {
        console.log("吃东西", this.age, this.name)
    }
}



const p = new Person("why", 18)
// console.log(p.name, p.age)
// p.name = "kobe"
// p.eating()

// 子类中是否可以访问
class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age)
    }

    studying() {
        console.log("在学习", this.name)
    }
}

const stu = new Student("why", 18)
export { }