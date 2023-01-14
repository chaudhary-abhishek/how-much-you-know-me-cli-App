var readLineSync = require('readline-sync')

var score = 0;

var questionArray = [{
    question : "Where do I live: ",
    answer : "Ghaziabad"
},{
    question : "What was my branch in B.Tech: ",
    answer : "ECE"
},{
    question : "My college was in which city: ",
    answer : "Jalandhar"
}];

function greet(){
    console.log("Welcome to the game, How Much You Know Me");
    var userName = readLineSync.question("Can I have your name please: ")
    console.log("Welcome "+userName+" Let's start the game ");
}

function play(question,rightAnswer){
    var userAnswer = readLineSync.question(question);
    if(userAnswer===rightAnswer){
        console.log("You were correct!");
        score++;
    }
    else{
        console.log("You were wrong!");
    }
}

function callPlay(){
    for(var i=0;i<questionArray.length;i++){
        play(questionArray[i].question,questionArray[i].answer);
        console.log("-------------------------");
    }
}

greet();
callPlay();
console.log("Your score is: "+score);