const wordDictionary = new Array ;
//Save word in dictionary!
function saveWord() {
  wordDictionary.push(document.getElementById("insertword").value);
}

//Find word in dictionary!
function searchWord() {
  const searchedWord = wordDictionary.includes(document.getElementById("searchword").value);
  if (searchedWord) {
    alert("The word it was found !");
  } else {
    alert("The word it wasn't found !");
  }
}