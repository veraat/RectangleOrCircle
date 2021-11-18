var x = 0;
var y = 0;

var draw_circle = false;
var draw_rectangle = false;

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "Listening ...";
    recognition.start();
}


recognition.onresult = function(event) {
    console.log(event)
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML ="Object identified is : " + content;
    
    if (content == "circle"){
        x = Math.floor(Math.random() * 850);
        y = Math.floor(Math.random() * 850);
        document.getElementById("status").innerHTML ="Object identified is : CIRCLE";
        draw_circle= true;
        
        // draw_rectangle = false;
        console.log("circle")
    }
    
    else if (content == "rectangle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML ="Object identified is : RECTANGLE";
        draw_rectangle= true;
        // draw_circle = false;
        console.log("rectangle")
    }
}

function setup() {
    canvas = createCanvas(900,600);
}

function draw() {
    if(draw_circle == true) {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        draw_circle= false;
    }
    else if(draw_rectangle == true) {
        // radius = Math.floor(Math.random() * 100);
        w = Math.floor(Math.random() * 100)+ 10;
        h = Math.floor(Math.random() * 100) + 10;
        // h = Math.floor(Math.random(10, 100) )
        rect(x, y, w, h,);
        draw_rectangle= false;
    }
}