declare const myname: string // 声明一个公共类型

declare function foo(foo: string): string  // 声明一个公共函数

declare class Person {  // 声明一个公共类
    constructor(public name: string, public age: number)
}

// 声明文件模块
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg"
declare module "*.mp3"


declare module "*.vue"


// 声明命名空间
declare namespace $ {  // 例如通过cdn引入的jQuery TS不认识$可以通过 声明命名空间 的方式解决
    export function ajax(settings: any): any
}