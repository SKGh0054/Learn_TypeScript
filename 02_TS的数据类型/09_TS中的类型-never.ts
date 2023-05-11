// 1.一个函数是死循环
function foo() {
    while (true) {
        console.log("---");
    }

    throw new Error("错误")
}

// 2.一个函数返回空的数组
function bar() { // function bar(): never[]
    return []
}


// 二. 封装工具或者框架时可以用到never
function handleMessage(message: string | number | boolean) {  // 只有处理了新增的参数类型才不会报错
    switch (typeof message) {
        case "string":
            console.log(message.length);
            break
        case "number":
            console.log(message);
            break
        case "boolean":
            console.log(Number(message));
            break
        default:
            const check: never = message  // 不可能走到这一步不然就报错
    }
}
handleMessage("aaa")
handleMessage(111)
handleMessage(true)






export { }