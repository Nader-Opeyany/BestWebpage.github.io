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
}
function changeBack(event){
    var mess = document.getElementById("a");
    mess.style.fontWeight = "normal";
}