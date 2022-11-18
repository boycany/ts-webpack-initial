//extends -- array 的用法

//會報錯
function sliceArr1<T>(a:T){
    console.log(a.length);  
}


function sliceArr2<T extends Array<T>>(a: T){
    console.log(a.length);
}


//infer 用法
type GG<T> = T extends Array<infer P> ? P : never
type G1 = GG<number>  //never
type G2 = GG<[string]> //string
type G2_1 = GG<['string', 1]> // "string" | 1
type G2_2 = GG<['string']> //"string"

//function 用法
type ParamType<T> = T extends (param1: infer P) => any ? P : never

type ptR1 = ParamType<(a: number) => void> //number

interface UserCard { name: string }
type ptR2 = ParamType<(a: UserCard) => void> //UserCard

type ptR3 = ParamType<[]> //never