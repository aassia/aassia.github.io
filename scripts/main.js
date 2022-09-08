const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/white-truck.png') {
    myImage.setAttribute('src','images/open-box.png');
  } else {
    myImage.setAttribute('src','images/white-truck.png');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    const myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `Добре дошли, ${myName}`;
  }
  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Добре дошли, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  }
  function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Добре дошли, ${myName}`;
    }
  }
        




