function score() {
    var sum=0;
    if (document.getElementById("java").checked){
        console.log("Hello");
        sum++;
    } 
    if (document.getElementById("correct").checked){
        sum++;
    } 
    if (document.getElementById("web").checked){
        sum++;
    } 
    if (document.getElementById("formed").checked){
        console.log(23);
        sum++;
    } 
    if (document.getElementById("write").checked){
        sum++;
    } 
    if (document.getElementById("push").checked){
        sum++;
    } 
    var ans=sum*16.6666666666666667;
    document.write("your score is" + ans +"%")

    if (ans>=80){
        document.write("excellent")
    }
    else if (ans>=50 && ans<80){
        document.write(" You fairly passed")
    }
    else if (ans<50){
        document.write("poorly performed")
    }
    else{
        console.log("Fail");
    }
}
function result(){
    alert("Hope you have double checked answers");
}