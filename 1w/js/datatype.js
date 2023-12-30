console.log(Math.round(2.7))
console.log(Math.abs(-3))
console.log(Math.min(5, 3, 2));
console.log("프로그래밍은 재미없어".replace("재미없어", "재미있어"));

const list=[1,2,3]

// list.forEach(function(item) {
//     console.log(item)
// })

const result = list.map(function(item) {
    // console.log(item)
    return item*3;
})

console.log(result)

const a = 1
const b = a>2
console.log(b)
if (a>2) {
    console.log("a는 2보다 큽니다.")
} else if (a == 2 ){
    console.log("a는 2입니다.")
} else {
    console.log("a는 2보다 작습니다.")
}