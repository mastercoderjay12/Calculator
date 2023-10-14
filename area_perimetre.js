function areas(){
    area_of_square=Number(document.getElementById("no1").value)* Number(document.getElementById("no1").value);
    document.getElementById("answer").innerHTML=area_of_square;

}
function peris(){
    peri_of_square=Number(document.getElementById("no1").value)*4;
    document.getElementById("answer").innerHTML=peri_of_square;

}
 function arear(){
    area_of_rectangle=Number(document.getElementById("no1").value)* Number(document.getElementById("no2").value);
    document.getElementById("answer").innerHTML=area_of_rectangle;
 } 
 function perir(){
    peri_of_rectangle=2*(Number(document.getElementById("no1").value)+ Number(document.getElementById("no2").value) );
    document.getElementById("answer").innerHTML=peri_of_rectangle;
 }