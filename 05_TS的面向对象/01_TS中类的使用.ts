class Person {
    // 在TS中必须声明成员属性
    name: string
    age: number
    // 严格模式下成员属性必须初始化
    // 1. name:string = ""
    // 2. name!:string
    // 3. 在constructor构造器中初始化
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

<<<<<<< HEAD

=======
>>>>>>> origin/main
const p1: Person = new Person("wrj", 18)
const p2: Person = new Person("www", 20)







export { }