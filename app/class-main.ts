

document.getElementById('startgame')!.addEventListener('click',()=>{
    let player:Class_player = new Class_player();
    player.name = Class_utility.getinputvalue('player_name');
    player.age = Number(Class_utility.getinputvalue('player_age'));

    let sportsname:string = Class_utility.getinputvalue('sportsname');
    let game:Class_game = new Class_game(player,player.age);

    game.displayGame();
});