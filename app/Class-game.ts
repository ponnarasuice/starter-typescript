class Class_game{
player:Class_player;
age:number;

constructor(player:Class_player,age:number){
    this.player=player;
    this.age=age;
}
displayGame():void{
    let gameform:string ='';
    gameform += '<div>'+this.player.name+'---'+this.age+'</div>';
console.log(gameform);
    let outelement:HTMLElement = document.getElementById('outelement')!;
    outelement.innerHTML = gameform;
}
}