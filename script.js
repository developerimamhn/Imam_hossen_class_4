const greet = () =>{
    console.log('Hello World, Zonayed Ahmed')
}

setTimeout(greet,10000);

const printNumbers  = () =>{
    let num = 1;
    const intervalId = setInterval(()=>{
        console.log(num);
        if(num === 10){
            clearInterval(intervalId);
        }
        num++;
    },1000)
}

printNumbers();

const handleError = () =>{
    try{
        throw new Error("An error occurred");
    }catch(error){
        console.log("I have handled the error successfully");
    }
}

handleError()


function conditionPromise (condition){
    return new Promise((resolve, reject) =>{
        if(condition){
            resolve ("I am resolved");
        }else{
            reject ("I am reject")
        }
    })
}

conditionPromise(true)
.then(resolve => console.log(resolve))
.catch(reject => console.log(reject));

