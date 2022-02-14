


//Created at startup to grab elements
function startup() {
  
  var colorPick = document.getElementById('rgbColorPicker');
  var colorHexPick = colorPick.value;
  colorPick.addEventListener("input", updateFirst, false);
  colorPick.addEventListener("change", updateAll, false);
  colorPick.select();
  
  console.log(colorHexPick);
}

//When user drags curser in color picker
function updateFirst(event) {
  colorHexPick = event.target.value;
  console.log(colorHexPick);

}

//When window is closed
function updateAll(event) {
  colorHexPick = event.target.value;
}

startup();