//---extends----

class Animal{
    constructor(name1: string){
        this.name = name1
    }
    name: string
    run(animal: string){
        console.log( animal + " " + this.name +  " run...");
    }
}

class Dog extends Animal{
    run(animal: string): void {
        super.run("dog")  //如果還想要母層class的東西，都可以用 super
        console.log("ddd run...")
    }
}
class Cat extends Animal{}

const d1 = new Dog("red")
d1.run("dog")
// console.log(d1.name)

const c1 = new Cat("CiCi")
c1.run("cat")
c1.name