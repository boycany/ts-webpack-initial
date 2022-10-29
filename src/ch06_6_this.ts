//this

class CarInfo{
    title: string = "xxxx"

    constructor(){
        // this.title = ''
    }

    //被放在 prototype 裏面
    hello(){
        console.log(this)
        console.log(this.title)
    }

    //用箭頭函式的話，this就會綁定在 CarInfo 上
    //＊＊＊缺點：仔細看 this 印出來的結果會有這個函式，而不是寫成箭頭函式的話就沒有
    //        ----> 代表如果有 new 出大量的實體，但並不是每個都有用到該函式的話，會造成記憶體的浪費
    bindHello = () => {   
        console.log(this)
        console.log(this.title)
    }
}

const carInfo = new CarInfo()

//真正執行的地方，此時 this = carInfo
carInfo.hello()

//會報錯，因為此時的 this = global(window)，window 裡面並沒有 title
// const hello2 = carInfo.hello
// hello2()

const xxxCar = {
    title: 'xxx汽車',
    hello2: () => {}
}

xxxCar.hello2 = carInfo.hello
xxxCar.hello2()  //xxx汽車，因為此時的 this 會指到 xxxCar
