let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'paper' : 'lose',
        'scissors' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'paper' : 'draw',
        'scissors' : 'lose'
    },
    'scissors' : {
        'rock' : 'lose',
        'paper' : 'win',
        'scissors' : 'draw'
    }
}

function checker(input){
    let choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
    `Computer choose <span> ${choices[num].toUpperCase()} </span>`; //generated  random computer moves

    
    
    document.getElementById("user_choice").innerHTML = ` You choose <span> ${input.toUpperCase()} </span>`; // got user input

    // determine a winner
    let computer_choice = choices[num];
        switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.color = 'green';
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            result_ref.style.color = 'red'
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        case 'draw':
            result_ref.style.color = 'grey';
        result_ref.innerHTML = "DRAW";
        break; 
    }
const cScore = document.getElementById("computer_score");
cScore.innerHTML = computer_score;
const pScore = document.getElementById("user_score");
pScore.innerHTML = user_score;
} 

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    checker('rock')
    checkPoints()
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    checker('paper')
    checkPoints()
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    checker('scissors')
    checkPoints()
})

function checkPoints() {
    if(computer_score >= 6 || user_score >= 6) {
        computer_score = 0;
        user_score = 0;
        const cScore = document.getElementById("computer_score");
        cScore.innerHTML = computer_score;
        const pScore = document.getElementById("user_score");
        pScore.innerHTML = user_score;
        
    }
    
} // reset at 5 

