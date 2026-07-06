const text=document.getElementById("text");
const count=document.getElementById("count");
const warn=document.getElementById("alert");

const maxLength=200;

text.addEventListener("input",function(){

    let textx = text.value;

    if(textx.length>maxLength){
        text.value=textx.substring(0,maxLength);
        warn.textContent="⚠ Character limit reached!";
    }
    else{
        warn.textContent="";
    }

    let current=text.value.length;
    count.textContent=current + "/" + maxLength + " characters";

});