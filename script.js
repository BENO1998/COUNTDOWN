
var counter = 10;
setInterval(function(){
    counter--;
    if(counter>=0){
        id = document.getElementById("count");
        id.innerHTML = counter;
    }
    if(counter === 0){
        id.innerHTML = "OOMBU!!!";
    }
}, 1500);
