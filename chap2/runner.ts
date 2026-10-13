class Runner{
    static lastRunTypeName : string ;
    constructor(private typeName : string){}
    run() {
        Runner.lastRunTypeName = this.typeName
    }
}
const runner_a = new Runner("a")
const runner_b = new Runner("b")

runner_b.run()
runner_a.run()
console.log(Runner.lastRunTypeName)
