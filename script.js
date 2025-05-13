// JavaScript source code
// Change text content dynamically
document.getElementById('myHeading').textContent = 'Hello, world!';

// Modify CSS styles via JavaScript
document.getElementById('myDiv').style.backgroundColor = 'lightblue';

// Add or remove an element when a button is clicked
document.getElementById('myButton').addEventListener('click', function () {
    if (document.getElementById('myElement')) {
        document.getElementById('myElement').remove();
    } else {
        var newElement = document.createElement('p');
        newElement.textContent = 'New element added!';
        newElement.id = 'myElement';
        document.getElementById('myDiv').appendChild(newElement);
    }
});