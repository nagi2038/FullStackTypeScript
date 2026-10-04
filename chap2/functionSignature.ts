type Run = (miles : number) => boolean
let runner : Run = function( mile:number) : boolean{
    if ( mile > 10){
        return true;
    }
    return false;
}
console.log(runner(9))