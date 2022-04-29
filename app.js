var front = document.querySelector(".front");
var container = document.querySelector(".container");
var video = document.querySelector(".back video");
var choices = document.querySelector(".choices");
var continueButton = document.querySelector("#continue");
var skipButton = document.querySelector("#skipToEnd");

var shownChoices = false;

var bounce = new Bounce();
bounce
  .translate({
    from: { x: -300, y: 0 },
    to: { x: 0, y: 0 },
    duration: 600,
    stiffness: 4
  })
  .scale({
    from: { x: 1, y: 1 },
    to: { x: 0.1, y: 2.3 },
    easing: "sway",
    duration: 800,
    delay: 65,
    stiffness: 2
  })
  .scale({
    from: { x: 1, y: 1},
    to: { x: 5, y: 1 },
    easing: "sway",
    duration: 300,
    delay: 30,
  })
  .applyTo(document.querySelectorAll(".animation-target"));

video.addEventListener('timeupdate', function(){
  if(video.currentTime > 5 && !shownChoices)
  {
    video.pause();
    choices.style.visibility = "visible";
    shownChoices = true;
  }
});

continueButton.addEventListener('click', function(){
  video.play();
  choices.style.visibility = "hidden";
});

skipButton.addEventListener('click', function(){
  choices.style.visibility = "hidden";
  video.currentTime = 210;
  video.play();
});

container.addEventListener('click', function(){
  if(!container.classList.contains("anim")){
    container.classList.add("anim");
    video.play();
  }
});

video.addEventListener('ended', function(){
  container.classList.remove("anim");
  shownChoices = false;
});