//extends 一般用法

interface A{
    name: string
}

interface B extends A {}

const b : B = { name: ''}

//class
class AA {}
class BB extends AA {}

//在條件判斷上的 extends
type T1 = string extends string ? string : number
type T2 = B extends A ? string : number

//一樣以extends 作條件判斷
interface C { name: string }
interface D { name: string, age: number }
interface D2 { name: string, age: number, desc: string }
type T3 = D extends C ? string : number
type T3_2 = D extends D2 ? string : number 

//基本泛型用法
type TT1 = 'bruce' extends 'bruce' ? string : number
type TT1_2<T> = T extends 'bruce' ? string : number
type res1 = TT1
type res1_2 = TT1_2<'bruce'>  // string
type res1_2_1 = TT1_2<'red'>  // number

type TT1_3<T> = T extends 'bruce' ? T : number
type res1_3 = TT1_3<'bruce'>  // "bruce"


//Union 泛型用法
type TT2 = 'bruce' | 'bruce2' extends 'bruce' ? string : number  //number

//跟 TT2 的行爲不一樣
type TT3<T> = T extends 'bruce' ? string : number
type R1 = TT3<'bruce' | 'bruce2'>  // string | number


//never 是所有東西的子類別
type N1 = never extends 'bruce' ? string : number  //string

type N2<T> = T extends 'bruce' ? string : number
//當Ｔ傳入 never 的時候，像是被當成一個空的 union，所以也會回傳一個 never
type R2 = N2<never> //never


type TT4<T> = [T] extends ['bruce'] ? string : number
type R4 = TT4<'bruce' | 'bruce2'> //會像是 TT2 一樣的狀況，回傳 number
