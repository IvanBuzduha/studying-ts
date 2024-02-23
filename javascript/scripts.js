"use strict";
/////////////////////////////////////////////////////
//inherit
class T1 {
    name = "";
}
class T2 extends T1 {
    email = "";
}
const obj2 = new T2();
console.log("obj2: ", obj2);
class T3 extends T2 {
    showData() {
        console.log("T3: ", this.name, this.email);
    }
}
const obj3 = new T3();
obj3.name = "Pit";
obj3.email = "piter@gmail.com";
obj3.showData();
class T4 extends T1 {
    email = "";
    constructor(name, email) {
        super();
        this.name = name;
        this.email = email;
    }
    showData() {
        console.log(this.name, this.email);
    }
    showInfo() {
        return this.name + this.email;
    }
}
const obj4 = new T4("Holly", "holly@gmail.com");
obj4.showData();
class T5 extends T4 {
    age = 0;
    constructor(name, email, age) {
        super(name, email);
        this.age = age;
    }
    showData() {
        super.showData();
        console.log(this.age);
    }
    showInfo() {
        const str = super.showInfo();
        return str + this.age;
    }
}
const obj5 = new T5("Nik", "nik@gmail.com", 33);
obj5.showData();
//add div
class ElementHTML {
    text;
    tag = "DIV";
    constructor(str) {
        this.text = str;
    }
    render() {
        const div = document.createElement(this.tag);
        div.textContent = this.text;
        return div;
    }
}
const div1 = new ElementHTML("New DIV");
document.body.append(div1.render());
//--------------
class ElementHTMLCSS extends ElementHTML {
    cssClass;
    constructor(str, css) {
        super(str);
        this.cssClass = css;
    }
    render() {
        const div = super.render();
        this.cssClass.forEach(item => div.classList.add(item));
        return div;
    }
}
const div2 = new ElementHTMLCSS("New DIV with CSS", ["red", "bold"]);
document.body.append(div2.render());
//-------------
class ElementImage extends ElementHTMLCSS {
    src = "";
    constructor(src, css, str) {
        super(str, css);
        this.src = src;
        this.tag = "img";
    }
    render() {
        const img = document.createElement(this.tag);
        img.setAttribute("src", this.src);
        img.setAttribute("alt", this.text);
        this.cssClass.forEach(item => img.classList.add(item));
        return img;
    }
}
const img1 = new ElementImage("https://miro.medium.com/v2/resize:fit:480/0*3EiyyHJm-lD0sBGr.jpeg", ["responsive-img", "something"], "oop");
document.body.append(img1.render());
//-------------
class PictureHTML extends ElementImage {
    source;
    constructor(src, css, str, source) {
        super(src, css, str);
        this.source = source;
    }
    render() {
        const img = super.render();
        const pictures = document.createElement("picture");
        this.source.forEach(item => {
            const source = document.createElement("source");
            source.setAttribute("srcset", item);
            source.setAttribute("media", "(min-width:600px)");
            pictures.append(source);
        });
        pictures.append(img);
        return pictures;
    }
}
const pic = new PictureHTML("https://miro.medium.com/v2/resize:fit:480/0*3EiyyHJm-lD0sBGr.jpeg", ["responsive-img", "something"], "oop", ["https://miro.medium.com/v2/resize:fit:557/1*aG520I03R_xHdbd_gz5-Rg.png"]);
document.body.append(pic.render());
/////////////////////////////////////////////////////
//classes
// class Button {
//   text: string;
//   className: string[];
// }
// const b1 = new Button();
// b1.text = "Submit";
// b1.className = ["btn", "btn-success"];
// console.log("Button: ", b1);
// //enter data directly into the class
// class Header {
//   text: string = "Header 1";
//   fontSize: string = "24px";
//   className: string[] = ["h1"];
// }
// const h1 = new Header();
// console.log("Header: ", h1);
// //methods
// class Btn {
//   text: string;
//   className: string[];
//   create(): HTMLButtonElement {
//     const button = document.createElement("button");
//     button.textContent = this.text;
//     this.className.forEach(item => button.classList.add(item));
//     return button;
//   }
// }
// const b2 = new Btn();
// b2.text = "Submit";
// b2.className = ["btn", "btn-success"];
// document.body.append(b2.create());
// b2.text = "Cancel";
// b2.className = ["btn", "btn-danger"];
// document.body.append(b2.create());
// console.log("b2:", b2);
// //constructor
// class ButtonElement {
//   text: string;
//   className: string[];
//   role: string;
//   readonly type: string; //prohibit changes
//   create(): HTMLButtonElement {
//     const button = document.createElement("button");
//     button.textContent = this.text;
//     button.setAttribute("role", this.role);
//     button.setAttribute("type", this.type);
//     this.className.forEach(item => button.classList.add(item));
//     return button;
//   }
//   constructor(text: string, className: string[]) {
//     this.text = text;
//     this.className = className;
//     this.role = "button";
//   }
// }
// const b3 = new ButtonElement("Push", ["btn", "btn-primary"]);
// document.body.append(b3.create());
// const b4 = new ButtonElement("New Button", ["btn", "btn-secondary"]);
// document.body.append(b4.create());
// //Script
// class Sprint {
//   id: number;
//   courseId: number;
//   url: string;
//   order: number;
//   pay: boolean;
//   blank: string;
//   code: boolean;
//   points: number;
//   lang: string;
//   title: string;
//   text: string;
//   video: string[];
//   time: number;
// }
//const sprint = new Sprint(object);
/////////////////////////////////////////////////////
//object
// const user: { name: string; email: string } = {
//   name: "John",
//   email: "john@gmail.com"
// };
// console.log("user: ", user);
// console.log("user: ", user.name);
// console.log("user: ", user["email"]);
// //user.password = "rrtre"; //error
// user.name = "Linda";
// //user.name = 33; //error
// console.log("user: ", user);
//optional properties
// const user2: { name: string; email: string; age?: number } = {
//   name: "John",
//   email: "john@gmail.com"
//   //age: 33
// };
// console.log("user2: ", user2);
// //console.log("user2: ", user2.test); //error
// if ("test" in user2) {
//   console.log(1);
// } else console.log(0);
// //references to optional properties
// console.log("user2: ", user2.age); //user2:  undefined
// //object as a function argument
// function userProcess(some_var: { name: string; email: string }): void {
//   console.log("userProcess: ", some_var);
// }
// const obj: { name: string; email: string; test: boolean } = {
//   name: "John",
//   email: "LInda@gmail.com",
//   test: false
// };
// userProcess(user2);
// userProcess(obj);
// //userProcess({ name: "John", email: "LInda@gmail.com", test: false }); //error
// userProcess({ name: "Greg", email: "greg@gmail.com" });
// //decomposition
// function foo({ name, email }: { name: string; email: string }): void {
//   console.log("foo: ", name, email);
// }
// foo(user2);
/////////////////////////////////////////////////////
//Arrays
// const arr1: number[] = [3, 4];
// arr1.push(55);
// arr1[3] = 66;
// arr1[1] = 22;
// //arr1.push("Hello"); //error
// console.log("arr1: ", arr1);
// arr1.length = 0; //empty the array
// console.log("arr1: ", arr1); //empty
//create read only array
// const arr3 = ['Hello ' ,'TS'];
// //arr2.push(55); //error
// //arr2[0] = 66;//error
// console.log("arr2: ", arr2);
// const arr3 = ['Hello ' ,'TS'];
// arr3.push('Something');
// //arr3.push(5); //error
// console.log("arr3: ", arr3);
// arr3.length = 0;
// //arr3.push(5); //error
// console.log("arr3: ", arr3);
//array decomposition
// const arr4: number[] = [3, 44, 555, 6666, 77777, 88888];
// const [a, b] = arr4;
// console.log("a&b:", a, b);
// const [, a2, b2] = arr4;
// console.log("a2&b2:", a2, b2);
// const [, a3, b3, ...c] = arr4;
// console.log("a3&32:", a3, b3, c);
// console.log("arr4: ", arr4);
//creating a two-dimensional array
//const arr5: number[][] = [[3, 55, 555, 66.66], [77, 88, 0.888]];
//console.log("arr5: ", arr5);
// const arr5: number[][] = [];
// arr5[0] = [22, 45, 78];
// arr5[1] = [12, 5, 7, 8];
// arr5.push([1, 2]);
// console.log("arr5: ", arr5);
// console.log("arr5: ", arr5[0][1]); //45
// console.log("arr5: ", arr5[1][1]); //5
// console.log("arr5: ", arr5[2][0]); //1
//mixed type array
// const arr6: (number | string)[] = [44, "Igor"];
// console.log("arr6: ", arr6);
// const arr7: Array<number | string> = ["Linda", 44, "Igor"];
// console.log("arr7: ", arr7);
//tuples
// const tuples: [string, number] = ["Igor", 44];
// //const tuples: [string, number] = [44, "Igor"]; //error
// tuples.push(55);
// tuples.push("Hell");
// //tuples.push(false); error
// console.log("tuples: ", tuples);
//optional element in tuples
// const tuples2: [string, number, number?] = ["Igor", 44, 88];
// console.log("tuples2: ", tuples2);
// console.log(tuples2[0]);
// //console.log((tuples2[0] = 33));//error
// console.log((tuples2[0] = "Ivan"));
// console.log((tuples2[2] = 99));
// console.log("tuples2: ", tuples2);
//the number of elements in tuples is unknown
// const tuples3: [number, ...string[]] = [88, "Apple", "Banana", "Berry"];
// //const tuples3:readonly [number, ...string[]] = [88, "Apple", "Banana", "Berry"];
// console.log("tuples3: ", tuples3);
/////////////////////////////////////////////////////
// //return type of data
// function t2(): number {
//   const n = 44;
//   return n;
// }
// console.log("t2: ", t2());
// //procedure void
// function t3(): void {
//   document.querySelector(".out-1").textContent = "Hello TS";
// }
// t3();
// // Arguments
// function t4(a, b): number {
//   return a * b;
// }
// console.log("t4: ", t4(4, 5));
// console.log("t4: ", 100 - t4(4, 5));
// console.log("t4: ", 100 - t4(4, "5")); //worked
// console.log("t4: ", 100 - t4(4, "t")); //NaN
// //procedure
// function t5(a: number, b: number): void {
//   console.log("t5: ", a * b);
// }
// t5(4, 4);
// //Amount of arguments
// function t6(a: number, b?: number): number {
//   if (b) return a * b;
//   else return a;
// }
// console.log("t6: ", t6(4, 4));
// console.log("t6: ", t6(4)); //NaN without b?
// console.log("t6: ", t6(4)); // a-after check
// // multiple value types
// function checkEmail(email: string): string | boolean {
//   if (email.indexOf("@") !== -1) return email.toLocaleLowerCase();
//   return false;
// }
// console.log("checkEmail: ", checkEmail("Ivan@Buzduha.ua"));
// console.log("checkEmail: ", checkEmail("IvanBuzduha.ua"));
// if (checkEmail("IvanBuzduha.ua")) {
//   console.log("your email is valid");
// } else console.log("your email is invalid");
/////////////////////////////////////////////////////
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