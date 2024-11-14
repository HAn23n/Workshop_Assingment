function DivideFive() {
    let result = ""; 
    for (var i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            result += i + " "; 
        }
    }
    document.getElementById("dividefive").textContent = result; 
}
function SubmitPerson() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const age = document.getElementById('age').value;

    document.getElementById('submitPerson').textContent = ` ${fname}  ${lname} Age: ${age}`;

}
function TriangleArea() {
    const b = parseFloat(document.getElementById("b").value);
    const h = parseFloat(document.getElementById("h-1").value);

    const triangle = 0.5 * b * h;
    document.getElementById("triangle").textContent = triangle ? triangle.toFixed(2) : triangle;
  }

  function RectangleArea() {
    const w = parseFloat(document.getElementById("w").value);
    const h = parseFloat(document.getElementById("h-2").value);

    const rectangle = w * h;
    document.getElementById("rectangle").textContent = rectangle
      ? rectangle.toFixed(2)
      : rectangle;
  }