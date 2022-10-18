//overload function 重載

type Info2 = {name: string, age: number}

function getData(data: string): string[]
function getData(data: number): number
function getData(data: boolean): boolean
function getData(data: Info2): void

function getData(data: unknown): unknown{
    console.log(data)
    if(typeof data === 'string') return []
    if(typeof data === 'number') return 999
    if(typeof data === 'boolean') return true
    
    return false
}

getData(99)
getData('')
getData(false)
getData({ name: 'red', age: 18})