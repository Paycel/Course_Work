const fs = require('fs');

const content = document.getElementById("id2");

const array = fs.readFileSync('digests/digest1/poem1.txt');
const string = array.toString('utf-8');
const textByLine = string.split("\n");

console.log(textByLine);
content.innerHTML = textByLine.join("<br>");

