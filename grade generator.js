const ik= require("prompt-sync");
const prompt=ik()


function studentgrade()
{let marks =prompt("enter your marks")
    if(marks <= 100 && marks >79){
    return"you got A";
}else if (marks <= 79 && marks >=60) {
    return"you got B";
}else if (marks <=59 && marks >=49){
    return"you got C";
}else if (marks <=48 && marks >=40){
    return"you got D";
}else if (marks<40){         
   return "you got E";
}else {
    return"out of Range";
}}
console.log(studentgrade());

