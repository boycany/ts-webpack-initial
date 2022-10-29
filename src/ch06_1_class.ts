//1. 什麼是 OOP 

/**
 * ex: 會員功能 （物件）
 * 
 * 名字 age address
 * 
 * - 新增
 * - 更新
 * - 刪除資料
 */

//物件的設計圖
class User{
    constructor(username: string){
        console.log("物件建立之前....");
        this.name = username
    }
    //定義屬性（變數）跟功能（函數）
    name: string 
    age: number
    address: string

    add(){}
    update(){}
    delete(){}
}


const u1 = new User("Red")
const u2 = new User("WK")
const u3 = new User("Weihang")


console.log('u1', u1)
console.log('u2', u2)
console.log('u3', u3)