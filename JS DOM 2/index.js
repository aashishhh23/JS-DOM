

// function eventFunction() {
//     console.log('I have clicked on the document');
// }
// document.addEventListener('click, eventFunction');

// document.removeEventListener('click, eventFunction');


 // REMOVE LISTENER CONDITION
//1. Same EVent Targer . 2] Same type . 3] same function

//Phases of an Event
// 1. capturing phase :- Searching Para
// 2. At Target phase :- When reached Para
// 3. Bubbbling phase:-  Process off going  back .

// By Default add eventFunction execute during Bubbling Phase and When bubbling Start thrn listener function execute. 

// The Event Object :-  When an event occurs, addEvenListener function hai usko ek eventobject milta h or uske andr bhut saari information hoti h !!

// const content =  document.querySelector('#wrapper');

// content.addEventListener('click', function(event){
//     console.log(event);
// })

// THE DEFAULT ACTION

// let links =document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener ('click', function(event) {
//     event.preventDefault();
//     console.log('Nice');
// });

// AVoid too many Events

// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('Para' + event.target.textContent);
// }

// myDiv.addEventListener('click', paraStatus);

// for(let i=1 ; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' +i;

 
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let element = document.querySelector('#wrapper');

element.addEventListener('click' , function(event){
    if(event.target.nodeName ==='SPAN'){
    console.log('span pr click kia hai' + event.target.textContent);
}
});