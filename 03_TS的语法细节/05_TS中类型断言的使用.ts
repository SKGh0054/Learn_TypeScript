// 1.断言的使用
const img = document.querySelector("#img") as HTMLImageElement  // 断言获取到的dom对象一定是HTMLImageElement类型
img.src = "xxx"
img.alt = "yyy"

// 2.类型断言的规则
// 断言只能断言成更加具体的类型或者不太具体(any/unknown)的类型
const age: number = 18
// const age2 = age as string  // 是错误的 不可以将number类型断言为string类型



export { }