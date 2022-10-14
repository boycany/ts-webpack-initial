function get(a: number, b: string) {
    return a + b;
}

let ans = get(1, "2"); //ans 是 string
console.log(ans);

let ans2 = get(99, "");

function set(name: string, age?: string){
    if(typeof age === "string"){
        return name + age.split("")
    } else{
        return name 
    }
}

let ans3 = set("Red", "19")
console.log(ans3);


//return type
function getNum(){
    return 100
}

function getName(): string{
    return ''
}

//type
type Info = {
    name: string,
    age: number
}

function createUserInfo(info: Info){
    console.log(info.age);
    return info
}

//never
function getUserData(): never{
    throw new Error
}

//void
function hello(){
    console.log()
}

//構建函數
//new

type CardObj = {
    name: string
}

type CardCreator = {
    new(name: string): CardObj
}

// function car(){
//     this.name = ''
// }

// const c1 = new car()

function createCard(cardCreator: CardCreator){
    return new cardCreator('Red')
}

// return [] (避免 union 情況的發生)
function getArr(){
    return [0, 1, 'Lee'] as [number, number, string]
}

const arr = getArr