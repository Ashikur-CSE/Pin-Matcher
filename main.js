const pinButton=document.getElementById("generate-button");
pinButton.addEventListener('click',function(){
    let randomNumber=Math.floor(Math.random() * 10000);
    document.getElementById("display-section").value=randomNumber;
});

function keyboard(num){
    document.getElementById("keyboard-display").value+=num;
}
function clear(){
    document.getElementById("keyboard-display").value="";
}