var needle = 130;
let intervalId, pipeSpeed, tempSpeed = 1;

// styling pipes
let pipes = document.querySelectorAll('.pipe');
let temp = 300;
pipes.forEach(pipe => {
    pipe.style.left = 1600 - temp + "px";
    temp += 300;
    pipe.style.bottom = (Math.floor(Math.random() * 3)) * 100 + "px";
});




// move pipes
function movePipes() {
    // console.log("bottom: "+parseInt(document.getElementById('flyBtn').style.bottom));
    if (parseInt(document.getElementById('flyBtn').style.bottom <= 0)) {
        clearInterval(intervalId);
    }
    pipeSpeed = tempSpeed;
    pipes.forEach(pipe => {
        const pipeLeft = parseInt(pipe.style.left);
        pipe.style.left = (pipeLeft - pipeSpeed++) + "px";
        if (pipeLeft + pipe.offsetWidth < 0) {
            pipe.style.left = "1400px";
            const randomHeight = Math.floor(Math.random() * 4) + 1;
            // pipe.style.height = randomHeight + '00px';
            pipe.style.height = '200px';
        }
    });
};


// move bird
function speedControl() {
    document.getElementById("lb").style.transform =`rotate(${needle-=0.05}deg)`;
    tempSpeed -= 1;
};


// starting moving
window.onload = function () {
    intervalId = setInterval(movePipes, 0);
    setInterval(speedControl, 0);
};



// moving bird event
document.getElementById('game-container').addEventListener('click', function () {
    let bottom = parseInt(document.getElementById('flyBtn').style.bottom);
    document.getElementById('flyBtn').style.bottom = isNaN(bottom) ? "50px" : (bottom + 300) + "px";
    if (bottom + 300 > 650)
        document.getElementById('flyBtn').style.bottom = "650px";
    // }
});



var sound = document.getElementById("crashSound");
var lastClickedTime = 0;
var delay = 500;
var adjustKey = 200;
document.addEventListener('keydown', function (event) {

    if (event.key === 'ArrowUp') {
        // document.getElementById('airPlane').style.transform = "rotate(-45deg)";
        let bottom = parseInt(document.getElementById('flyBtn').style.bottom);
        document.getElementById('flyBtn').style.bottom = isNaN(bottom) ? "50px" : (bottom + adjustKey) + "px";
        if (bottom + adjustKey > 650)
            document.getElementById('flyBtn').style.bottom = "650px";

    }

    if (event.key === 'ArrowDown') {
        // document.getElementById('airPlane').style.transform = "rotate(-45deg)";
        let bottom = parseInt(document.getElementById('flyBtn').style.bottom);
        if (bottom + adjustKey < 0)
            document.getElementById('flyBtn').style.bottom = "0px";
        else
            document.getElementById('flyBtn').style.bottom = isNaN(bottom) ? "50px" : (bottom - adjustKey) + "px";
    }
    // if (event.key === "ArrowRight")
    //     document.getElementById('airPlane').style.transform = "rotate(360deg)";

    if (event.key === "ArrowLeft") {
        document.getElementById("lb").style.transform =`rotate(${needle-=5}deg)`;
        tempSpeed -= 1;
        sound = document.getElementById("brakeSound");
        sound.play();
        lastClickedTime = currentTime;
    }
    // document.getElementById('airPlane').style.transform = "rotate(-360deg)";

    if (event.key === "ArrowRight") {
        sound = document.getElementById("crashSound");
        tempSpeed += 5;
        sound.play();
        // let needle = parseFloat(getComputedStyle(document.getElementById("lb")).transform.split("(")[1].split(")")[0].split(",")[1]);
        // console.log("needle: "+needle);


        document.getElementById("lb").style.transform =`rotate(${needle+=1}deg)`;
        // lastClickedTime = currentTime;
    }

});


