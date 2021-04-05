//function & void
{
    let sum = (x: number, y?:number) => { return x+<number>y}
    let speech = (output: any):void => {
        console.log("result: "+ output)
    }

    speech(sum(5,12))
    console.log(speech(sum(8,5)))
}

// Never & Void
{
    let something: void = undefined
    //let nothing: never = null
    function throwErr(errMsg:string):never{
        throw new Error(errMsg);
    }
}

// function & callback
{
    function addAndHandle(x: number, y: number, cb:(num:number) => void){
        const result = x+y
        cb(result)
    }
    addAndHandle(10, 20, (result) => console.log(result))
}