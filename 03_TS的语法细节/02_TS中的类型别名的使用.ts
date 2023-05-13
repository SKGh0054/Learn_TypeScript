type myNumber = number
const age: myNumber = 118

type IDtype = number | string
function printID(id: IDtype): void {
    console.log(id);
}

type pointType = { x: number, y: number, z?: number }
function printPoint(point: pointType) {
    console.log(point.x, point.y, point.z);
}







export { }