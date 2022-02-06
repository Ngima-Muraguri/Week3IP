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
        document.write("WELL DONE!!")
    }
    else if (ans>=50 && ans<80){
        document.write("averagely well done")
    }
    else if (ans<50){
        document.write("you need to work some more!")
    }
    else{
        console.log("Fail");
    }
}
function result(){
    alert("Hope you have double checked answers");
}