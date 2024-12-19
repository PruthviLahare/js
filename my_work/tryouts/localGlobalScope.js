// function test() {
//         console.log("hi");
        
// }
// console.log(test(90));

//----------------------------

// function test() {
//     console.log("hi");
// }

// function call() {
//     test();
// }
// console.log(call());

//----------------------------

// function add(a,b,c) {
//     let add = a + b;
//     let p = a + b + c;
    
//     return add,p;
// }

// console.log(add(10,20,30));

//----------------------------

// function outer() {
//     console.log("outer");
//     inner();

//     function inner() {
//         console.log("inner");
//     }
// }
// outer();

//----------------------------


// callBeforeDifine();

// function callBeforeDifine(){
//     console.log("abc");
// }


//----------------------------


// function givePara(a,b) {
//     return a + b;
// }
// console.log(givePara(undefined,undefined));

//-------------------------------

// function givePara(a,b) {
//     return a + b;
// }
// let a;
// console.log(givePara(a,1));

//-------------------------------


// function para(a = 10, b = 30) {
//     return a + b;
// }
// console.log(para(20,1,1));


//-------------------------------
// let a = 10;
 
// function sameName() {
//     sameName();
//     function sameName() {
//         console.log("hi");
        
//     }
// }
// sameName();

//-------------------------------

// let a = 10;
// let b = 20;


// a = 5;
// b = 6;
// {
//     let a = 7;
//     let b = 8;
//     console.log(sameGlobalLocalPara(a, b));

//     function sameGlobalLocalPara(a , b) {
//         console.log(a);
//         console.log(b);
        
//         return a + b;
//     }
    
// }

// console.log(sameGlobalLocalPara(a , b));




//********************************************** */

// let o = function hii()
// {
//     console.log("hiii");
//     return 10;
// }
// console.log(o());
