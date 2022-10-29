function hello<T, U>(text: T, text2: U): T {
    let data: T = text
    let data2: U 
    console.log(text, text2)

    return data
    // return data2 --> 會報錯，因為沒有賦予值，他的類型會是 undefined
    // return text2 --> 會報錯，因為他的類型是 U
}

hello<string, number>('bruce', 2)
hello<number, boolean>(999, true)