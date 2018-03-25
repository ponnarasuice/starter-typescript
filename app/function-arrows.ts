//old way of writing the function without type mentioning
//function dullfn(value1, value2 ){
//    return 'sdf';
//}

function getscores():void{
let playerscore:HTMLInputElement = <HTMLInputElement>document.getElementById('score');
let name:HTMLInputElement = <HTMLInputElement>document.getElementById('playername');

postscores(name.value,playerscore.value,10);
}
//arrow ananymous function
let logSores = (name:string,score:number|string,innings = 23) =>console.log(name,score,innings);

function postscores(name:string,score:number|string,innings:number):void{
    logSores(name,score,innings);
    let player_name:HTMLElement =<HTMLElement> document.getElementById('player-name');
    player_name.innerText = `${name} ${score} ${innings}`;
}

document.getElementById('scorebtn')!.addEventListener("click",getscores);