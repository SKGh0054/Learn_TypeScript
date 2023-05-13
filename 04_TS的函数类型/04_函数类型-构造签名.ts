class Person { }
interface ICTORPerson {
    new(): Person  // 构造签名
}
function factory(fn: ICTORPerson) {
    return new fn()
}
factory(Person)


export { }