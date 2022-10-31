const pinButton=document.getElementById("generate-button");
pinButton.addEventListener('click',function(){
    let randomNumber=Math.floor(Math.random() * 10000);
    document.getElementById("display-section").value=randomNumber;

    document.getElementById("match").style.display="none";
    document.getElementById("not-match").style.display="none";

    document.getElementById("keyboard-display").value ="";



});

function keyboard(num){
    document.getElementById("keyboard-display").value+=num;
}
function deleteMe(){
    document.getElementById("keyboard-display").value ="";

}

function deleteLastNumber(){
    let totalNumber=document.getElementById("keyboard-display").value;
    let updateNumber=totalNumber.substr(0,totalNumber.length-1);
    document.getElementById("keyboard-display").value=updateNumber;

}
let n=0;
function matcher(){
    let generatePin=document.getElementById("display-section").value;
    let inputtedValue=document.getElementById("keyboard-display").value;
    if (generatePin==inputtedValue){
        document.getElementById("match").style.display="block";
        
    }
    else if (generatePin!=inputtedValue){
        document.getElementById("not-match").style.display="block";
        n=n+1
        if (n<=3){
            document.getElementById("misCount").innerText=(3-n)+" try left"
        }
        
        if (n==3){
            // document.getElementById("keyboard-display").disabled = true;
            document.getElementById("keyboard-display").style.display="none"
            document.getElementById("fail").style.display="block";
            document.getElementById("misCount").innerText="Better Luck Next Time😂"

        }
    }
}