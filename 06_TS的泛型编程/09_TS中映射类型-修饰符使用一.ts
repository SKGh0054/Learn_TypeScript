type MapPerson<Type> = {
    readonly [Property in keyof Type]?: Type[Property]  // 使用 ?: 将映射后的属性变为可选属性
}

interface IPerson {
    name: string
    age: number
    height: number
    address: string
}

type IPersonOptional = MapPerson<IPerson>

const p: IPersonOptional = {

}

export { }

