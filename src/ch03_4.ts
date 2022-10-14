let obj: { name: string; age?: number };

obj = {
    name: "99",
    age: 10
}

//age設定了 ? 就可以接受 undefined
obj = {
    name: 'red',
    age: undefined
}

//或者沒有age的屬性也OK
obj = {
    name:'kk',
}


//tsconfig 須設定 strictNullChecks

// obj = {
//     name: "red",
//     age: null
// }
