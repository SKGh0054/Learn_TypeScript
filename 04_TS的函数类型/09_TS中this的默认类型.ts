// 在没有对this进行特殊配置的情况下，this的默认类型就是any

const obj = {
    name: "wrj",
    foo() {
        console.log(this.name, "吃饭");  // 此时this默认类型为any
    }
}

obj.foo()


function foo() {
    // console.log(this);  // 此时this默认类型为any
}









export { }