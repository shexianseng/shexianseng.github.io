// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function(){
//     alert('别戳我，我怕疼')
// }

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/mozilla.png') {
        myImage.setAttribute('src', 'images/firefox.png')
    } else {
        myImage.setAttribute('src', 'images/mozilla.png')
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName()
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}

myButton.onclick = function () {
    setUserName();
}