async function delayResult(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("I completed successfully")
        }, 500)
    });
}

const result = await delayResult()
console.log(result)