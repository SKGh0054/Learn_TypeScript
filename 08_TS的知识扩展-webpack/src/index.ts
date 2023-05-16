import { sum } from "../src/utils/math"
import axios from "axios"
const message: string = "hello world"

console.log(message.length, message);


const res = sum(10, 20) as number
console.log(res);



const promise = new Promise((resolve, reject) => { })