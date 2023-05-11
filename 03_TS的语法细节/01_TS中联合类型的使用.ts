// 联合类型的基本使用

let id: number | string = "abc"
id = 11

// console.log(id.length);  // 需要缩小类型 才能继续操作



function foo(id: number | string): void {
    if (typeof id == "number") {
        console.log(id);
    } else {
        console.log(id.length);
    }
}







export { }