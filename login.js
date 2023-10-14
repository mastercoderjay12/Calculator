function move(){
    identitiy=document.getElementById("name").value;
    localStorage.setItem("Name_of_person", identitiy);
    window.location.replace("calculator.html");
}