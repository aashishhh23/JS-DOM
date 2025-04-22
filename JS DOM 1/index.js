// getElementbyID (heading):- it is called on document object. it returns a single object


// document.getElementbyClassName('p') :- Show multiple result.
// And getElementbyTagName():- both method use document object (b). both return multiple items. (c). the list returned not an array.

// document.querySelector('.jo v chahiye') :- for single item

// document.querySelectorAll('.jo v chahiye') :- For Multiple Items

// .inner HTML(property):- get an element / all of its desc HTML content [b]. it set an elements Html content
// Add a new element


// let content = document.queryselector('paraClass);
// content ;
// let newPara = document.createElement('p');
// newPara;
// <p></p>
// content.appendChild(newPara);
// <p></p>

// content;
// <p class = "paraClass text-lg font-bold false">
//     "Data Structure"
//     <p></p>
// </p>

// CREATING TEXT_NORD

// let newPara = document.createElement('p');

// let textPara = document.createTextNode ('I am the test');
// newPara.appendChild(textPara);
// content.appendChild(newPara);
// <p>Im the new Para</p>

// GOOD PRACTICE (EASY)
let myPara=document.createElement('p');
myPara.textContent = 'I am the text';
Content.appendChild.appendChild('my para');

