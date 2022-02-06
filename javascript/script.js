
 function click() {
    var sum=0;
    if (document.getElementById("java").checked){
        sum++;
    } 
    if (document.getElementById("correct").checked){
        sum++;
    } 
    if (document.getElementById("web").checked){
        sum++;
    } 
    if (document.getElementById("formed").checked){
        sum++;
    } 
    if (document.getElementById("write").checked){
        sum++;
    } 
    if (document.getElementById("push").checked){
        sum++;
    } 
    var ans=sum*20;
    document.write("your score is" + ans +"%")

    if (ans>=80){
        document.write("excellent")
    }
    else if (ans<80 && ans<=50){
        document.write(" You fairly passed")
    }
    else if (ans<50){
        document.write("poorly performed")
    }
}
function result2(){
    alert(" make sure you fill all the questions")
}
