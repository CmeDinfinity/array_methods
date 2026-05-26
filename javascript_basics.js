// //The calculator 

// let num1 = 5
// let num2 = 0

// let operator = "/"

// if (operator === "+"){
//     console.log(num1 + num2);  

// }

// else if (operator === "-"){
//     console.log(num1 - num2);
    
// }

// else if (operator === "*" ){
//     console.log(num1 * num2);
    
// }

// else if (operator ==="/"){
//     if (num2 === 0){
//         console.log("Num 2 cannot be zero");
        
//     }
//     else {
//         console.log(num1 / num2);
//     }
    
// }

// else{
//     console.log("Invalid Operator");
    
// }

//The Marksheet

let marks = 88

let bonus = 5

marks += 5

if (marks >= 90){
    grade = "A";
    
}

else if (marks >= 70){
    grade = "B";
    
}

else if (marks >= 50){
    grade = "C";
    
}

else if (marks < 50){
    grade = "F";
    
}

let result = (marks >= 50? "Pass" : "Fail") 

switch(grade){
    case "A":
        remark = "Excellent"
        break;

    case "B":
        remark = "Good"
        break;

    case "C":
        remark = "Average"
        break;

    case "F":
        remark = "Needs improvement"
        break;



}

console.log(marks);
console.log(grade);
console.log(result);
console.log(remark);







