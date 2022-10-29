//static 可以被共用

class Bank{
    //結餘
    //假設銀行結餘的金庫金額是希望所有人共用的，如果沒有設 static，
    //會變成是每 new 出一個實體，就會有不一樣的 balance 
    //所以設定成 static 會比較符合這個狀況，讓大家都會修改到同一個 balance
    private static balance: number = 1000
    
    name: string = "Red"
    
    //提款功能
    static withdraw(money: number){
        if(this.balance <= 0) return 
        this.balance -= money
    }

    static getBalance(){
        return this.balance
    }
}

//設定為 static 的參數，不需經過實體化就可直接被讀取
// console.log(Bank.balance)  

let b = new Bank()
console.log(b.name)


//實際操作提款的函式
function userAWithdraw(money: number){
    Bank.withdraw(money)
    return Bank.getBalance()
}

function userBWithdraw(money: number){
    Bank.withdraw(money)
    return Bank.getBalance()
}

userAWithdraw(200)  //800，balance剩餘的金額
userBWithdraw(500)  //300，balance剩餘的金額