"use strict";
//return type of data
function t2() {
    const n = 44;
    return n;
}
console.log("t2: ", t2());
//procedure void - групування коду
function t3() {
    document.querySelector(".out-1").textContent = "hello TS";
}
t3();
// Arguments
function t4(a, b) {
    return a * b;
}
console.log("t4: ", t4(4, 5));
console.log("t4: ", 100 - t4(4, 5));
console.log("t4: ", 100 - t4(4, "5")); //worked
console.log("t4: ", 100 - t4(4, "t")); //NaN
//procedure
function t5(a, b) {
    console.log("t5: ", a * b);
}
t5(4, 4);
//Amount of arguments
function t6(a, b) {
    if (b)
        return a * b;
    else
        return a;
}
console.log("t6: ", t6(4, 4));
console.log("t6: ", t6(4)); //NaN without b?
console.log("t6: ", t6(4)); // a-after check
// multiple value types
function checkEmail(email) {
    if (email.indexOf("@") !== -1)
        return email.toLocaleLowerCase();
    return false;
}
console.log("checkEmail: ", checkEmail("Ivan@Buzduha.ua"));
console.log("checkEmail: ", checkEmail("IvanBuzduha.ua"));
if (checkEmail("IvanBuzduha.ua")) {
    console.log("your email is valid");
}
else
    console.log("your email is invalid");
// const s1:string='hello ';
// const s2:string='World TS ';
// console.log(s1+s2)
// const s3:string=s1+s2+243242342;
// console.log(s3, typeof s3)
// const b1:boolean=true
// console.log(b1,typeof b1)
// const w1:number=parseInt('333',10)
// const w2:number=parseInt(s3,10)
// console.log(w1,typeof w1)
// console.log(w2,typeof w2)
// const c1:string=String(444)
// console.log(c1,typeof c1)
// document.querySelector('.out-1').textContent=s3;
// document.querySelector('.out-1').textContent=String(w2);
//# sourceMappingURL=scripts.js.map