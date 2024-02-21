/*var images = document.getElementsByTagName('img');
console.log(images)

var anchor = document.getElementsByTagName('a');
console.log(anchor);

var text = document.getElementsByTagName('p');
console.log(text);

var heading = document.getElementById('heading');
console.log(heading);
console.log(heading.innerHTML);
console.log(heading.nodeType);
console.log(heading.nodeName);
*/

var main_content = document.getElementById("main_content");
var newTittle = document.createElement('h1');
var newText = document.createElement ('p');

newTittle.innerHTML = "TESTE";
newText.innerHTML = "Isto é só um teste";

main_content.appendChild(newTittle);
main_content.appendChild(newText);