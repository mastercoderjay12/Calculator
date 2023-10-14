




function plus(){
    result=Number(document.getElementById("no1").value)+ Number(document.getElementById("no2").value);
    document.getElementById("answer").innerHTML=result;
}
function minus(){
    result=Number(document.getElementById("no1").value)- Number(document.getElementById("no2").value);
    document.getElementById("answer").innerHTML=result;
}
function multiply(){
    result=Number(document.getElementById("no1").value)* Number(document.getElementById("no2").value);
    document.getElementById("answer").innerHTML=result;
}
function divide(){
    result=Number(document.getElementById("no1").value)/ Number(document.getElementById("no2").value);
    document.getElementById("answer").innerHTML=result;
}

function areap(){
    window.location.replace("area_perimetre.html");
}



