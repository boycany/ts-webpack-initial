//---abstract---
//像是interface一樣有約束力，子層的 class 繼承母層的東西都需實作出來

abstract class Animals{
    run(){
        console.log("run....");
    }
    abstract hello(): void
}

class Snake extends Animals{
    hello(): void {
        
    }
}

/*  抽象類別是不能被 new 的
const a1 = new Animals()
*/