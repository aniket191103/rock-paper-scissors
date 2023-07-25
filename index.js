function play(yourchoice){
    //  console.log(yourchoice.id);
        var humanChoice,BotChoice;
        humanChoice=yourchoice.id;
        BotChoice=NumberToChoice(number());
        // console.log('computer choice' + " "+BotChoice)
        console.log( "YOUR CHOICE :"+ humanChoice, " BOT CHOICE:"+BotChoice);
        result=DecideWinner(humanChoice,BotChoice);
        console.log(result);

     message=finalresult(result);
        console.log(message);

        playfrontend(humanChoice,BotChoice,message);

       

}
function number(){
return Math.floor(Math.random()*3);
}
function  NumberToChoice(number){
return ['rock','paper','scissor'][number];
}
function DecideWinner(yourchoice, computerchoice)
{
var database= {
    'rock': {'scissor':1, 'rock':0.5 ,'paper': 0},
    'paper': {'rock':1,  'paper':0.5 , 'scissor':0},
    'scissor': {'paper':1, 'scissor':0.5 ,'rock':0},
};
var yourscore = database[yourchoice][computerchoice];
var computerscore = database[computerchoice][yourchoice];

return [yourscore,computerscore];
}
function finalresult([yourscore,computerscore]){
    if(yourscore === 0)
    {

        return {'message':'YOU LOST','color':'red'};
    }
    
    else if(yourscore === 1)
    {

        return {'message': 'YOU WON', 'color':'blue'}
    }
    
    else{

        return {'message': 'TIE!!!!', 'color':'grey'};
    }
    
}
   

function  playfrontend(humanChoiceImage,computerchoiceImage,finalmessage)
{
    var imagesdatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src,
    }
    // console.log(imagesdatabase.rock);

    // console.log(humanChoiceImage);
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();


    // console.log(imagesdatabase[humanChoiceImage]);
    var humandiv =document.createElement('div');
    var messagediv =document.createElement('div');
    var botdiv =document.createElement('div');


    humandiv.innerHTML = "<img src = ' "  +imagesdatabase[humanChoiceImage] +"' height=150 width=150 padding-top:10px; font-size:40px >";
        messagediv.innerHTML = "<h2 style = 'color: "+finalmessage['color']+"; padding-top:10px; font-size:40px'>"+message['message']+ "</h2>";
    botdiv.innerHTML = "<img src = ' "  +imagesdatabase[computerchoiceImage] +"' height=150 width=150 >";

    document.getElementById('flexbox1').appendChild(humandiv);
    document.getElementById('flexbox1').appendChild(messagediv);
    document.getElementById('flexbox1').appendChild(botdiv);

    let abc = document.getElementById('move');
    abc.style.display = 'none';
     let btn =document.getElementById('btn-1')
     btn.style.display='block';
     btn.style.display

    }

