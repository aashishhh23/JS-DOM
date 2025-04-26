// INTERVIEW RELATED : 

// function sync() {
//     console.log('first');
// }
// sync();

// console.log('second');

// setTimeout(function () { // it is a async code(also execute through event loop) and it execute when callstack are empty.

// console.log('third');
// },3000)
//     function sync() {
//    console.log('first');
//     }
//  sync();
//  console.log('second');

 // API :- [Application programming interface( like mediator)].

 // Features of Asyn code :- 1] clean and concise. 2] better error handling. 3] easier debugging

 // Promise :- Anything that you execute parallely in background on js then you use promise. since this is async code 


// let meraPromise1 = new Promise(function(resolve, reject) {
//    setTimeout(function(){
//     console.log('I am inside promise1');
//    }, 5000);
   
// //    resolve(2233);
// reject(new Error('Bhaisaab Error Aaye h'))
//  });
// meraPromise1.then((value) => {console.log(value)},(error) => { console.log("Received an Eror")});



// let meraPromise2= new Promise(function(resolve, reject) {
//     setTimeout(function(){
//      console.log('I am inside promise2');
//     }, 5000);
//  //    resolve(2233);
// //  reject(new Error('Bhaisaab Error Aaye h'))
//  });

//  console.log('pehla');

// let waadaa1 = new Promise ( function (resolve, reject) {
//     setTimeout (()=>{
//         console.log ('setimeout1 started');
//     },2000);
//     resolve(true);
//     })

//    let output= waadaa1.then(()=>{
//         let waadaa2 = new Promise((resolve, reject) => {
//             setTimeout (()=>{
//                 console.log ('setimeout2 started');
//             },3000);
            
//             resolve("waadaa 2 resolved");
//         })
//         return waadaa2;
//     })
//     output.then((value) =>console.log(value) );


// Async - Await=> special syntax used to work with promises.

// async function abcd() {
//     return 7;
// }

// async function utility(){
    

// let delhiMausam = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Very Hot in Delhi");
//     },1000); 
  
// });

// let HydMausam = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Very cool in Hyderabd");
//     },5000); 
  
// });


// let dM = delhiMausam;
// let HM = HydMausam;

// return[dM,HM];
// }


//  FETCH API :- it Return PROMISE

// let obj = {
//     heading: "head"
// };
// async function utility() {


// let content = fetch('https://jsonplaceholder.typicode.com/posts/1');
// let output = (await content).json();
// console.log(output);
// }
// utility();

// async function helper() {



// let options = {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,

//     }),
//     headers: {
//         'Content-type': 'application/json;  charset = UTF-8',
       
//     },
// };

// let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);

// let response = content.json();
// return response;
// }


// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }

// utility();

// CLOSURES:- 

// let -> block scoped
let name = "SHER";

function init() {
   // let name ="Mozilla "; //name is a local variable created by init
    function displayName () {
       // let name = "Aashish";
        // displayName() is the inner function, that  forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();