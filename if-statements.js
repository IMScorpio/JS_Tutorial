//Conditional if - Statements;

let testScore = 50;
let collegeStudent = true;
let grade;

if(testScore >= 90){
    grade = 'A';
}else if(testScore >= 80){
    grade = 'B+';
}
else if(testScore >= 70){
    grade = 'B';
}else if(testScore >=60){
    grade = 'c';
}else{
    if(collegeStudent){
        grade = 'U';
    }
    else{
        grade= 'F'
    }
}console.log(grade)