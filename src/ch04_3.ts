// ----擴充----


//type
type Animal = {
    name: string,
}

type Dog = Animal & {
    age: number
}

type Cat = Animal

let dog: Dog = {
    name: '',
    age: 99
}

let cat: Cat = {
    name: ''
}

//interface

interface Transportation {
    speed: number
}

interface Car extends Transportation {}
interface Motor extends Transportation {}

let car: Car = {
    speed: 200
}

let motor: Motor = {
    speed: 120
}


// ----合併----

//interface重複宣告就會合併

interface Dish{
    name: String
}

interface Dish{
    cost: number
}

interface Soup extends Dish{}

let cornSoup: Soup = {
    name: "corn soap",
    cost: 9
}