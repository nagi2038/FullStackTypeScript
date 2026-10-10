class Runner {
    typeName;
    static lastRunTypeName;
    constructor(typeName) {
        this.typeName = typeName;
    }
    run() {
        Runner.lastRunTypeName = this.typeName;
    }
}
const a = new Runner("a");
const runner_b = new Runner("b");
runner_b.run();
a.run();
console.log(Runner.lastRunTypeName);
export {};
