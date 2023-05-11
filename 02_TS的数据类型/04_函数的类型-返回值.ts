function sum(num1: number, num2: number): number {
    return num1 + num2
}

const res = sum(3, 4)

// 定义一个对象类型
type aa = {
    name: string,
    age: number
}

function returnAA(re1: string, re2: number): aa[] {
    const AA: aa[] = []
    AA.push({ name: re1, age: re2 })
    return AA
}

const bb: aa[] = returnAA("wrj", 18)
console.log(bb);


// 匿名函数一般不推荐添加类型注解

export { }