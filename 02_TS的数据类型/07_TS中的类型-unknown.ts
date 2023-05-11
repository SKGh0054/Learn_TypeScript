let id: unknown = "aaa"  // id如果没办法确定类型可以使用unknown动态类型

id = 123
id = true
id = []
// console.log(id.length);  // 报错 在unknown类型上做任何操作都是不合法的

if (typeof id == "string") {  // 在unknown类型进行类型校验后就可以进行其他操作了
    console.log(id.length);
}



export { }