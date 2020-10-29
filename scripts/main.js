// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function(){
//     alert('别戳我，我怕疼')
// }

// let myImage = document.querySelector('img');
// myImage.onclick = function () {
//     let mySrc = myImage.getAttribute('src');
//     if (mySrc === 'images/mozilla.png') {
//         myImage.setAttribute('src', 'images/firefox.png')
//     } else {
//         myImage.setAttribute('src', 'images/mozilla.png')
//     }
// }
// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// if (!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
// }

// function setUserName() {
//     let myName = prompt('请输入你的名字。');
//     if (!myName || myName === null) {
//         setUserName()
//     }
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla 酷毙了，' + myName;
// }

// myButton.onclick = function () {
//     setUserName();
// }

const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = '以下是一个动态列表。点击列表外任意位置可添加新的列表项。点击已有的列表项可修改内容。';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function () {
    const listItem = document.createElement('li');
    const listContent = prompt('希望列表中显示什么内容？');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function (e) {
        e.stopPropagation();
        const listContent = prompt('为列表项输入新的内容');
        this.textContent = listContent;
    };
};