// Rest 參數 (function)

const numb = [1, 2, 3] as const  //加as const 才不會報錯

function calculate2(a: number, b: number, c: number){
    console.log('a', a)
    console.log('b', b)
}
calculate2(...numb)

function calculate(...nums: number[]){
    console.log(nums)
}

calculate(1, 2, 3, 4, 5, 99, 123)
