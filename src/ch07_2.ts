//interface

interface Card<T> {
    title: string
    desc: T
}

function printCardInfo<T>(desc: T): Card<T>{
    const data: Card<T> = {
        title: 'bruce',
        desc
    }

    return data
}

printCardInfo<number>(999)  //{title:'bruce', desc: 999}

//-----------

interface CarProps<T>{
    name: T
}

class Car<T> implements CarProps<T>{
    name: T 
    constructor(value: T){
        this.name = value
    }
}

const car = new Car<string>('Tesla')