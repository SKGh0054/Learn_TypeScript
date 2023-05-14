class Person {
    private _name: string  // 私有属性
    age: number

    constructor(_name: string, age: number) {
        this._name = _name
        this.age = age
    }

    set name(newValue: string) {
        this._name = newValue
    }


    get name(): string {
        return this._name
    }
}


const p = new Person("wrj", 18)
p.name = "aa" // 会自动调用set方法
p.age = 20









export { }