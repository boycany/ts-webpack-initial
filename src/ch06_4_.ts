//成員類型（公開、私有、受保護的）

//public private protected 

class UserInformation{
    name: string = 'Red' //不寫的話預設是 public
    private age: number = 19 //沒有要暴露出去給別人使用的話，就可定義成 private，不能被任何人訪問
    protected hobby: string = 'bike'

    getAge(){
        return this.age
    }
}

class StreamerInformation extends UserInformation{
    hello(){
        console.log(this.hobby) //protected 如果是繼承的話，可以訪問他
    }
}

const uInfo = new UserInformation()
console.log(uInfo.name)
console.log(uInfo)


const sInfo = new StreamerInformation()
console.log(sInfo.hello())
console.log(sInfo.getAge())  //可取得private的變數


//JS原生私有成員寫法（2020的新功能）

class UserInformationInJS{
    #name: string = 'Fred'  //JS原生的 private寫法
    getName(){
        return this.#name
    }
}

const u = new UserInformationInJS()
console.log(u)
console.log(u.getName());
