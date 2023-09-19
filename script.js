const wordDictionary = new Array ;
//Save word in dictionary!
function saveWord() {
  wordDictionary.push(document.getElementById("insertword").value);
}

//Find word in dictionary!
function searchWord() {
  if (wordDictionary.includes(document.getElementById("searchword").value)) {
    alert("The word was found !");
  } else {
    alert("The word wasn't found !");
  }
}
