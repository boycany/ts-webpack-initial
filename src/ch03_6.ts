//union: 使用兩種以上的類型

const arr7: (string | boolean) [] = []
arr7.push(false)
arr7.push('')

let liveName: string | number
liveName = 'red'
liveName = 99

//never

// if(typeof liveName === 'string'){
//     liveName.split()
// }

//強制斷言

let liveName2 = 999
let liveName3 = liveName2 as unknown as string