namespace A{
    export class FirstClass {}
}

namespace B{
    class SecondClass {}
    const test = new A.FirstClass();
}