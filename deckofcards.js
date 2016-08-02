function deckConstructor(){
    this.deck = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK', 'SA', 'C1', 'C2', 'C3', 'C4', 'C5','C6', 'C7', 'C8', 'C9', 'C10', 'CJ', 'CQ', 'CK', 'CA', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'DJ', 'DQ', 'DK', 'DA','H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'HJ', 'HQ', 'HK', 'HA'];


}
deckConstructor.prototype.shuffle = function(){
    var shuffled = [];
    for(var i = 0; i< this.deck.length; i++){
        var j = Math.floor(Math.random() * this.deck.length);
        shuffled[i] = this.deck[j];

    }
    this.deck = shuffled;
    console.log(this.deck);
    return this;
}

deckConstructor.prototype.reset = function(){
    this.deck = this.deck;
    return this;

}
deckConstructor.prototype.deal = function(){
    var n = Math.floor(Math.random() * this.deck.length);
    var card = this.deck[n];
    for (var i = n ; i< this.deck.length; i ++){
        this.deck[i] = this.deck[i+1];
    }
    this.deck.pop();

    return card;


}


function playerConstructor(name){
    this.name = name;
    this.hand = [];

}

playerConstructor.prototype.getCard =function(){
    game = new deckConstructor();
    game.shuffle();
    this.hand.push(game.deal());
    console.log(this.hand);
    return this;

}

playerConstructor.prototype.discard = function(x){
    var x = x;
    for (var i = x; i < this.hand.length; i ++){
        this.hand[i] = this.hand[i+1];
    }
    this.hand.pop();
    return this;

}



var player = new playerConstructor('Andy');
console.log(player.getCard().getCard().getCard().discard(1));
