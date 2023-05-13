function foo(this: { name: string }, info: { name: string }) {
    console.log(this, info)
}
foo.call({ name: "why" }, { name: "kobe" })

// 获取上述函数的类型
type FooType = typeof foo
// type FooType = (this: {
//     name: string;
// }, info: {
//     name: string;
// }) => void



// 工具一：ThisParameterType<>
// 获取上述函数中this的类型
type FooThisType = ThisParameterType<FooType>  // 使用ThisParameterType将FooType类型中的this的类型提取出来
// type FooThisType = {
//     name: string;
// }



// 工具二：OmitThisParameter<>
// 获取上述函数中剔除this类型后的参数类型
type PrueFooType = OmitThisParameter<FooType>  // 使用OmitThisParameter将FooType类型中的剔除this后的的类型提取出来
// type PrueFooType = (info: {
//     name: string;
// }) => void



// 工具三：ThisType<>
// 用于绑定一个上下文的this
interface IState {
    name: string
    age: number
}

interface IStore {
    state: IState
    eating: () => void
    running: () => void
}

const store: IStore & ThisType<IState> = {  // ThisType<IState>将IState作为this绑定到store对象
    state: {
        name: "why",
        age: 18
    },
    eating: function () {
        console.log(this.name)
    },
    running: function () {
        console.log(this.name)
    }
}
// pinia中的getter actions都是这么做的
store.eating.call(store.state)

// 在TypeScript中，ThisType用于在对象字面量中键入this，并提供通过上下文类型控制this类型的便捷方式。ThisType是一个函数，用于将类型的信息与this关键字关联起来。
// 要使用ThisType，需要在对象字面量中使用特定的语法。对象字面量中的this类型由以下因素决定：
// 1.如果方法显示指定了this参数，那么this具有该参数的类型。
// 2.如果方法由带this参数的签名进行上下文键入，那么this具有该参数的类型。
// 3.如果—noImplicitThis选项已经启用，并且对象字面量中包含由ThisType<T>键入的上下文类型，那么this的类型为T。
// 4.如果—noImplicitThis选项已经启用，并且对象字面量中不包含由ThisType<T>键入的上下文类型，那么this的类型为该上下文类型。
// 5.如果—noImplicitThis选项已经启用，this具有该对象字面量的类型。
// 在这个例子中，通过使用ThisType<T> 关键字，可以将T类型的信息与this关键字关联起来。因此，在方法中使用this关键字时，如果需要指定this的类型，可以使用T类型。


<<<<<<< HEAD

=======
>>>>>>> origin/main
export { }