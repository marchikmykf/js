// false
// 0
// 0n
// ""
// null
// undefined
// NaN


// if(умова){
//     [інструкція якщо істина];
//     [інструкція якщо істина];
//     [інструкція якщо істина]
// }else if{
//     [інструкція якщо істина]
// }else{
//     [інструкція якщо хиба]
// }

// оператори порівняння
// ==
// !=
// >
// <
// >=
// <=
// === перевіряється і тип даних
// !==
// let a = 3; b = "3";
// console.log(a === b);
//
// let a = prompt("Type fist num");
// let b = prompt("Type second num");
// let c;
// if(a>b){
//     c = "a > b"
// }else if(a<b){
//     c = "a < b"
// }else{
//     c = "a == b"
// }
// alert(c);


//
// let a = prompt("Type fist num");
// let b = prompt("Type second num");
// let c;
// if(a > b)c = "a > b";
// else if(a < b)c = "a < b";
// else c = "a == b"
// alert(c);



//умова switch

// let course = prompt("What is the course?"), title;
//
// switch (course) {
//     case 'figma':
//     case 'CSS':
//     case "HTML":
//         title = "WEB";
//         break;
//
//     case  'python':
//         title ='programiring';
//         break;
//
//     case "front end":
//             titlet = "WEB prog"
//         break;
//
//     default:
//         title = "Xz";
//         break;
// }
//
// alert(title);


//логічні оператори
//
// let a = false, b = false, c = true;
// console.log(!a); //заперечення, протидія
// console.log(a == c) //якщо не порожнє - тру
// console.log(!!a) //стрінгове заперечення
//
// console.log(a && c) //and
// console.log(a || b) //or
//
// let age = prompt("How old are you?"), info;
// if (age < 18){
//     info = "школота"
// }else if (age >= 18 && age < 35){
//     info = "призивний"
// }else{
//     info = "ще є шанси"
// }
// alert(info);


let name = prompt("What is your name?");
let greeting = 'Hello, ${name || "гість"}!';
alert(greeting);