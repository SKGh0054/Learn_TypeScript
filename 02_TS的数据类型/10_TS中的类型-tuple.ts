// 1.使用数组类型
const info: any[] = ["wrj", 18, false]  // const info: (string | number | boolean)[]

// 2.使用元组类型
const info1: [string, number, boolean] = ["wrj", 18, false]  // const info1: [string, number, boolean]


// 元组类型 一般在函数中使用最多 特别是函数的返回值
function useState(initialstate: number): [number, (newValue: number) => void] {
    let stateValue = initialstate
    function setValue(newValue: number) {
        stateValue = newValue
    }

    return [stateValue, setValue]
}
const [count, setCount] = useState(10)
setCount(100)


export { }