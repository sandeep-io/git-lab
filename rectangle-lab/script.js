function calculateArea() {
  // get values
  let length = document.getElementById("length").value;
  let width = document.getElementById("width").value;

  // calculate area
  let area = length * width;

  // display result
  document.getElementById("result").innerText = "Area: " + area;
}