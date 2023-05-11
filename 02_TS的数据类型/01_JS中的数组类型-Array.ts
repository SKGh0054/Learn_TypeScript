// 明确的指定<数组>的类型注解;

// 1. :string[]  数组类型并且数组中存放的字符串类型 -- 一般写法
let names: string[] = ["abc", "cba", "nba"]
names.push("aaa")

// 2. Array<string>  数组类型并且数组中存放的字符串类型  -- 泛型写法
let names1: Array<string> = ["abc", "cba", "nba"]
names.push("aaa")


export{}
