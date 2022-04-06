function onClick(){
    alert("Salam")
}
function biggerIsBetter(){
    var mess = document.getElementById("a");
    console.log(mess);

    mess.style.fontSize = "24pt";
    console.log(mess);
}
function changeText(){
    var mess = document.getElementById("a");
    mess.style.fontWeight = "bold";
    mess.style.color = "blue";
    mess.style.textDecoration = "underline"}
function changeBack(){
    var mess = document.getElementById("a");
    mess.style.fontWeight = "normal";
    mess.style.color = "black";
    mess.style.textDecoration = "none"}

/*function moo(){
    var mess = document.getElementById("a");
    mess.value = mess.value.toUpperCase();
    size = mess.value.length;
    for(var i = 0; i<size;i++){
        console.log(size + "size");
        if(mess.value[i]=="." || mess.value[i] == "?" || mess.value[i] == "!"){
            var period = mess.value[i].split(".");
            //the text before puntuation has -moo added
            period[i - 1] += "-MOO";
            console.log(period.value.length + "size");

            i += 4;//i skips 4
            size += 4;//size skips 4
            mess.value = period.join(" ")
        }
    }
}*/

function moo(){
var mess = document.getElementById("a");
mess.value = mess.value.toUpperCase() 
var words = mess.value.split(".")
words.pop();
for(var i=0;i<words.length;i++){
    words[i] += "-MOO";
    }
mess.value = words.join(" ");
}
