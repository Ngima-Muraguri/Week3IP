function multiple(){
    var total=0;
    if(document.getElementById("java").checked){
        total++;
    }
    if(document.getElementById("correct").checked){
        total++;
    }
    if(document.getElementById("web").checked){
        total++;
    }
    if(document.getElementById("formed").checked){
        total++;
    }
    if(document.getElementById("write").checked){
        total++;
    }
    if(document.getElementById("push").checked){
        total++;
    }
    var result=total*16.667;
    document.write("you scored" +result + "%")
}
