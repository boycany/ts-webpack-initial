//keyof

interface UserCard {
    name: string,
    age: number,
    title: string,
    desc: string
}

//U1 會變成像是 union 類型： 'name' | 'age' | 'title' | 'desc'
type U1 = keyof UserCard

const uc1: U1 = 'age'
const uc2: U1 = 'aa'  //報錯


//泛型
function getValue<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key]
}





