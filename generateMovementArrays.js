let variance = 10
let start = 40
start -= variance
let length = (2 * 60) + 31 //video length

let outArr = []
while (length-- > 0) {
    outArr.push(start + Math.floor(Math.random() * variance))
}
// console.log(outArr)

outArr.forEach(e => {
    console.log(`${e},`)
})
