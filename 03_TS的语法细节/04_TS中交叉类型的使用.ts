// 联合类型 -- 只有满足一个类型即可
type idType = number | string
const id1: idType = "1"
const id2: idType = 1


// 交叉类型 -- 全部满足类型即可
type NewType = number & string  // 这样使用没有意义

interface Ikun {
    name: string,
    age: number
}

interface ICoder {
    name: string,
    coding: () => void
}

const info: Ikun & ICoder = {  // 这样使用代表info对象必须满足Ikun与ICoder接口中的类型
    name: "wrj",
    age: 18,
    coding: function () {

    }
}













export { }