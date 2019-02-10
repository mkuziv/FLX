let data = {
    winnings:{
        1: 10,
        2: 5,
        3: 2
    },
    ranges:{
        firstRange: 0,
        secondRange: 5
    },
    numbers:{
        one: 1
    }
}
let gameCounter = 0;
let prize= 0;
let attempts = 3;
let userNumber;
let wannaPlay = confirm('Do you want to play a game?');

if(wannaPlay === false){
    alert('You did not become a millionaire, but can.');
} else{
    startGame();
}

function startGame(){ 
    gameCounter++;
    if(gameCounter > data.numbers.one){
        data.winnings[data.numbers.one] *= 3;
        data.winnings[2] = Math.floor(data.winnings[data.numbers.one] / 2);
        data.winnings[3] = Math.floor(data.winnings[data.numbers.one] / 4);
    }

    let randomNumber = Math.round(Math.random() * (data.ranges.secondRange - data.ranges.firstRange) 
    + data.ranges.firstRange);
    let currentAttemptPrize = 0;
    
    while (userNumber !== randomNumber && attempts > 0 ){
        if(attempts === 3){
            currentAttemptPrize = data.winnings[data.numbers.one];
        } else if(attempts === 2){
            currentAttemptPrize = data.winnings[2];
        } else if(attempts === data.numbers.one){
            currentAttemptPrize = data.winnings[3];
        }
        
        let output = `
Enter a number from ${data.ranges.firstRange} to ${data.ranges.secondRange}
Attempts left: ${attempts}
Total prize: ${prize}$
Possible prize on a current attempt: ${currentAttemptPrize}$ `;
        userNumber = +prompt(output, '');
        attempts--;
    }

    if(userNumber === randomNumber) {
        if(attempts === 2){
            prize += data.winnings[data.numbers.one];
        }else if (attempts === data.numbers.one){
            prize += data.winnings[2];
        }else if(attempts === 0){
            prize += data.winnings[3];
        }

        if(confirm(`Congratulation! Your prize is:${prize}$. Do you want to continue?`)){
            data.ranges.secondRange *=2;
            attempts = 3;
            startGame();

        } else{
            alert(`Thank you for a game. Your prize is: ${prize}$.`);
            if(confirm('Would you like to play again?')){
                gameCounter = 0;
                prize = 0;
                attempts = 3;
                data.winnings[data.numbers.one] = 10;
                data.winnings[2] = 5;
                data.winnings[3] = 2;
                data.ranges.secondRange = 5;
                startGame();
            }
        }
    } else {
        alert(`Thank you for a game. Your prize is: ${prize}$.`);
        if(confirm('Would you like to play again?')){
            gameCounter = 0;
            prize = 0;
            attempts = 3;
            data.winnings[data.numbers.one] = 10;
            data.winnings[2] = 5;
            data.winnings[3] = 2;
            data.ranges.secondRange = 5;
            startGame();
        }
    }
}