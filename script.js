function stringConcatenation() {
  var firstString = document.getElementById(`stringOne`);
  var firstStringValue = firstString.value;
  var secondString = document.getElementById(`stringTwo`);
  var secondStringValue = secondString.value;
  var finalConcatenation = `${firstStringValue}${secondStringValue}`;
  document.getElementById(`result`).textContent =
    `Result is` + " " + finalConcatenation;
}
