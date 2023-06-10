let imagesNames = ["images/rock.png", "images/paper.png", "images/scissor.png"];
let imageIndex = 0;
let random = 0, comp_score = 0, play_score = 0;
let tie = 0;

function imageChange(){
    imageIndex++;
    if (imageIndex == imagesNames.length) {
      imageIndex = 0;
    }
    document.getElementById("imgChange").src = imagesNames[imageIndex];
    console.log(imageIndex)
  }

function preloadImages() { 
    for (var i = 0 ; i < imagesNames.length; i++) {
      var img = new Image();
      img.src = imagesNames[i];
    }
  } 

function start(){
    random = Math.floor(Math.random() * 3);
    document.getElementById("imgChange_comp").src = imagesNames[random];
    setTimeout(score, 200);
}


function score(){
    if(imageIndex == 0 && random != 0){
        if(random == 2)
        play_score++
        else
        comp_score++
    }
    if(imageIndex == 1 && random != 1){
        if(random == 0)
        play_score++;
        else
        comp_score++;
    }
    if(imageIndex == 2 && random != 2){
        if(random == 1)
        play_score++;
        else
        comp_score++;
    }
    if(imageIndex == random){
      tie++;
    }

    document.getElementById("player_score").children[0].textContent = play_score;
    document.getElementById("computer_score").children[0].textContent = comp_score;
    document.getElementById("tie").children[0].textContent = tie;
}

function reset(){
    document.getElementById("player_score").children[0].textContent = 0;
    document.getElementById("computer_score").children[0].textContent = 0;
    document.getElementById("tie").children[0].textContent = 0;
    document.getElementById("imgChange").src = imagesNames[0];
    document.getElementById("imgChange_comp").src = imagesNames[0];
    imageIndex = 0;
    random = 0 ;
    comp_score = 0;
    play_score = 0;
}