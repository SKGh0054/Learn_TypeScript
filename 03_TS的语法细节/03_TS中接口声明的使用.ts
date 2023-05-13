type pointType = {
    x: number,
    y: number,
    z?: number
}

// 声明的方式使用接口
interface pointType2 {
    x: number,
    y: number,
    z?: number
}

function pp(point: pointType) { }
function pp2(point: pointType2) { }

<<<<<<< HEAD
=======

>>>>>>> origin/main
// type与interface的区别
// 1.type的使用范围更广可以赋值基本数据类型，而interface只能用来声明对象类型
type a = number
interface b { }

// 2.在声明对象的时候interface可以多次声明
interface c {
    x: number,
    y: number,
}
interface c {
    z?: number
}

// 3.interface支持继承extends
interface IPerson {
    name: string,
    age: number
}
interface Ikun extends IPerson {
    kouhao: string
}

const kunkun: Ikun = {
    name: "wrj",
    age: 18,
    kouhao: "真Ikun"
}

// 4.interface可以被类calss实现implements
// class Person implements IPerson{}


export { }