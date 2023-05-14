interface Person {
    name: string
    age: number
}

interface Ikun extends Person {
    kouhao: string
}

// 使用extends进行接口的继承
const ikun: Ikun = {
    name: "wrj",
    age: 18,
    kouhao: "你干嘛哎呦"
}





export { }