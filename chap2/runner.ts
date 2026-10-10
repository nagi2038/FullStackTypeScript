class Runner{
    static lastRunTypeName : string ;
    constructor(private typeName : string){}
    run(){
        Runner.lastRunTypeName = this.typeName
    }
}
const a = new Runner("a")
const runner_b = new Runner("b")

runner_b.run()
a.run()
console.log(Runner.lastRunTypeName)
export {}
