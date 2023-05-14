// <T = string>泛型默认值
interface Ikun<T = string> {
    name: T,
    age: number,
    solgan: T
}

const kunkun: Ikun<string> = {
    name: "wrj",
    age: 18,
    solgan: "真爱坤"
}

const kunkun1: Ikun<number> = {
    name: 111,
    age: 18,
    solgan: 1111111
}

const kunkun2: Ikun = {
    name: "wrj",
    age: 18,
    solgan: "真爱坤"
}


export { }