document.getElementById("text").addEventListener("mouseover",mouseOver);
document.getElementById("text").addEventListener("mouseout",mouseout);

function mouseOver() {
    document.getElementById('text').style.color = 'white';
    document.getElementById('text').style.background = 'rgb(156, 254, 117)';
}
function mouseout() {
    document.getElementById('text').style.color = 'black';
}


const paragraphs = document.getElementsByTagName('p');
const count = paragraphs.length;


document.getElementById('total').textContent = `Total: ${count}`;

function DataPerson() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const sex = document.getElementById('sex').value;
    const tel = document.getElementById('tel').value;
    const age = document.getElementById('age').value;
    const personData = `<br>
        ${fname} <br>
        ${lname} <br>
        ${sex} <br>
        ${tel} <br>
        ${age} <br>
    `;
    document.getElementById('DataPerson').innerHTML = personData;
}