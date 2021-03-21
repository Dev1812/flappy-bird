var canvas = document.getElementById("canvas"),
             canvas_content = canvas.getContext("2d"),
             bird = new Image(),
             backgrond = new Image(),
             foreground = new Image(),
             pipeUp = new Image(),
             pipeBottom = new Image(),
             fly = new Audio(),
             score_audio = new Audio();
bird.src = "images/bird.png";
backgrond.src = "images/bg.png";
foreground.src = "images/fg.png";
pipeUp.src = "images/pipeUp.png";
pipeBottom.src = "images/pipeBottom.png";

fly.src = 'audio/fly.mp3';
score_audio.src = 'audio/score.mp3';

