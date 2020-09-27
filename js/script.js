var scoreElem=document.getElementById("score");
var paperElem=document.getElementById("paper");
var scissorElem=document.getElementById("scissor")
var rockElem=document.getElementById("rock");
var buttonElem=document.getElementById("play-button");
var h3Elem=document.createElement("h3");
var h2Elem=document.createElement("h2");
var h1Elem=document.createElement("h1");
var mainElem=document.getElementById("heading")
var mainElem2=document.getElementById("heading2")
var mainElem3=document.getElementById("heading3")
var mainVar =document.getElementById("main-container")
var selection=document.getElementById("selection")
var userScore=0;
var houseScore=0;
var userChoice;
var houseChoice;
var cc;


function start(){
var house=["Paper","Scissor","Rock"];
var randomElem=Math.floor(Math.random()*3);
 houseChoice=house[randomElem];
 console.log(houseChoice);
 if(houseChoice=="Paper"){
    cc=paperElem;

 }
 else if(houseChoice=="Scissor")
 {
     cc=scissorElem;
 }
 else{
     cc=rockElem;
 }

function play1(){ 

    if(userChoice=="Paper" & houseChoice=="Rock"){
        userScore++;
        scoreElem.innerText=userScore;
        // h3Elem.innerText="you won"
        h2Elem.innerText="you picked"
        mainElem.appendChild(h2Elem);
        mainElem.appendChild(paperElem)
        win();
        
    }else if(userChoice=="Paper"&houseChoice=="Scissor"){
        userScore--;
        if(userScore<=0){
            userScore=0;
        }
        scoreElem.innerText=userScore;
        h2Elem.innerText="you picked"
        mainElem.appendChild(h2Elem);
        mainElem.appendChild(paperElem)

        lose();
    }
    else{
        h2Elem.innerText="both picked"
    mainElem.appendChild(h2Elem);
    mainElem.appendChild(paperElem)
        
        draw();
        
    }
}

function play2(){ if(userChoice=="Scissor" & houseChoice=="Paper"){
    userScore++;
    scoreElem.innerText=userScore;
    h2Elem.innerText="you picked"
        mainElem.appendChild(h2Elem);
        mainElem.appendChild(scissorElem)
      win();
}
else if(userChoice=="Scissor"&houseChoice=="Rock"){
    userScore--;
    if(userScore<=0){
        userScore=0;
    }
    scoreElem.innerText=userScore;
    h2Elem.innerText="you picked"
        mainElem.appendChild(h2Elem);
        mainElem.appendChild(scissorElem)
        lose();
}
else{
    h2Elem.innerText="you picked"
    mainElem.appendChild(h2Elem);
    mainElem.appendChild(scissorElem)
        draw();
}}


function play3(){
    if(userChoice=="Rock" & houseChoice=="Scissor"){
        userScore++;
        scoreElem.innerText=userScore;
        h2Elem.innerText="you picked"
        mainElem.appendChild(h2Elem);
        mainElem.appendChild(rockElem)
        win();
    }
    else if(userChoice=="Rock"&houseChoice=="Paper"){
        userScore--;
        if(userScore<=0){
            userScore=0;
        }
        scoreElem.innerText=userScore;
        h2Elem.innerText="you picked"
        mainElem.appendChild(h2Elem);
        mainElem.appendChild(rockElem)
        lose();
    }
    else{
        h2Elem.innerText="you picked"
        mainElem.appendChild(h2Elem);
        mainElem.appendChild(rockElem);
        draw();
    }
}

paperElem.addEventListener("click",function(){
    userChoice="Paper";
    mainVar.style.display="none";

    
     play1();
} ,{once:true})

// buttonElem.addEventListener("click",function(){
//     // mainVar.style.visibility="initial";
//     start();
//     // paperElem.style.display="flex";
//     // selection.style.display="none"
//     // start();
//     console.log("hi");
// })
buttonElem.addEventListener("click",function(){
//    mainVar.style.display="none";
// location.reload(mainVar);

// while(div.firstChild) { 
    // selection.style.display="none";
    // var ssElem=document.getElementById("sections")
    // selection.style.display="none";
    // ssElem.style.display="block";
    start();

    

    // mainVar.appendChild(div); 
// } 
    // console.log("hi")
    
})


scissorElem.addEventListener("click",function(){
    userChoice="Scissor";
    var div = document.getElementById("main-container"); 
            while(div.firstChild) { 
                div.removeChild(div.firstChild); 
            } 
    play2();
},{once:true})


rockElem.addEventListener("click",function(){
    userChoice="Rock";
    var div = document.getElementById("main-container"); 
            while(div.firstChild) { 
                div.removeChild(div.firstChild); 
            } 
    play3();
},{once:true})



 
function show(){
    h1Elem.innerText="House picked"
        mainElem2.appendChild(h1Elem)
        mainElem2.appendChild(cc);
}

function win(){
    setTimeout(function(){ show();
    },1000);
   setTimeout(function(){
       h3Elem.innerText="You win😎😀"
   mainElem3.appendChild(h3Elem);
   buttonElem.style.visibility="visible"
   buttonElem.innerText="play again";
   mainElem3.appendChild(buttonElem);
   },2000)
}
function lose(){
    setTimeout(function(){
        show();
    },1000);
    setTimeout(function(){
        h3Elem.innerText="You lose😔"
    mainElem3.appendChild(h3Elem);
    buttonElem.style.visibility="visible"
    buttonElem.innerText="play again";
    mainElem3.appendChild(buttonElem);
    },2000)
}
function draw(){
    
        setTimeout(function(){
            show();
        },1000);
        setTimeout(function(){
            h3Elem.innerText="Its a draw😉!!"
        mainElem3.appendChild(h3Elem);
        buttonElem.style.visibility="visible"
        buttonElem.innerText="play again";
        mainElem3.appendChild(buttonElem);
        },2000)
}

}
start();