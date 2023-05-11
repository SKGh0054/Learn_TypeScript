let id: any = "aaa"  // id如果没办法确定类型可以使用any动态类型

id = 123
id = true
id = []
console.log(id.length);  // 在any类型上做任何操作都是合法的


export{}