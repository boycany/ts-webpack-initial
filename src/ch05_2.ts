// 泛型
// <>


// T --> type
function print<T>(data: T){
    console.log(data)
}

print<string>('red')
print<boolean>(true)
print<number>(5)