//var is js usage since long time. all the variables are bring tothe top during js execution
//ts - let used so that strong type checking is possible
//for strong type check you can use strict so taht compiler always allows strong type checking stuffs.
function letDemo(){
    //var a = 10 ; is not allowed here since we used strict mode
    //allowed
    let playername:string ='ponnarasu';
    //playerName = 5; gives compiler error
    const age:number = 23;// value doesnt change
    
    //union used to assign different types
    let singer:string|null|undefined;
    singer = 'parvathi'; singer = null;
    //any type
    let dancer:any ;
    dancer = 'sandy'; dancer = null; dancer =10;
    logValue(dancer);
    //HTMLElement type. not null check is default by compiler
    let msgElement:HTMLElement|null = document.getElementById("msg");
    msgElement!.innerText ='not null for html element..';
    
}

function logValue(dancer){
    console.log(`thiis is way to dynamic variable manipulation:dancer- ${dancer}`);
}

document.getElementById('demoBtn')!.addEventListener("click",letDemo)