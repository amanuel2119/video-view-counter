var video1 = document.querySelector("#video1");
var vc2 = document.querySelector("#v1");

var counter1 = 0;

var lion = document.querySelector("#lion");
var vc2 = document.querySelector("#v2");


var counter2 = 0;

var video3 = document.querySelector("#video3");
var vc3 = document.querySelector("#v3");


var counter3 = 0;

video1.addEventListener("play", function(){
    counter1++;
    v1.innerHTML = counter1;
})

lion.addEventListener("play", function(){

    counter2++;
    vc2.innerHTML = counter2;
})

video3.addEventListener("play", function(){
    counter3++;
    vc3.innerHTML = counter3;
})