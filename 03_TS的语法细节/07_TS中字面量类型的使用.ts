// 1.字面量类型的基本使用
const name: "wrj" = "wrj"
const age: 18 = 18

// 2.字面量类型与联合类型一起使用
type FangxiangType = "东" | "南" | "西" | "北"
const aa: FangxiangType = "东"
// const bb: FangxiangType = "c"  // 报错

// 例子：封装请求方法
function request(url: string, methods: "post" | "get") {

}
request("http://www.wrj.nb/api/postapi", "get")
// 问题一：
const info1 = {
    url: "http://www.wrj.nb/api/postapi",
    methods: "post"
}
// request(info1.url, info1.methods) // 这样是报错的 methods: string，string类型传给"post" | "get"类型不正确

// 问题一的解决方法一：使用类型断言
request(info1.url, info1.methods as "post")

// 问题一的解决方法二：将info对象的method类型声明成post
const info2: { url: string, methods: "post" } = {  // 这种太麻烦了
    url: "http://www.wrj.nb/api/postapi",
    methods: "post"
}
request(info2.url, info2.methods)

const info3 = {
    url: "http://www.wrj.nb/api/postapi",
    methods: "post",
} as const  // 这种使用 as const 直接将对象中的属性全部转化为字面量类型
request(info3.url, info3.methods)

export { }