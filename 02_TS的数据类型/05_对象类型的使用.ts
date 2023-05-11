// 对象类型与函数的结合使用
function printCoordinate(point: { x: number, y: number, z?: number }) {  // z?代表可选参数
    console.log("x轴坐标: ", point.x);
    console.log("y轴坐标: ", point.y);
}

printCoordinate({ x: 1, y: 2 })






export { }