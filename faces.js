var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
theBody.onclick = function gameOver() {
    alert("Game Over!");
    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
};

function delete_all_children() {
    while (theLeftSide.firstChild)
        theLeftSide.removeChild(theLeftSide.firstChild);

    while (theRightSide.firstChild)
        theRightSide.removeChild(theRightSide.firstChild);
}

function generateFaces()
{
  for(var i = 0; i < numberOfFaces; i++)
  {
    var image = document.createElement("img");
    image.src="smile.png";
    var leftPos = Math.floor(Math.random() * 400);
    var leftHeight = Math.floor(Math.random() * 400);
    image.style.left = leftPos+ "px";
    image.style.top = leftHeight+ "px";
    theLeftSide.appendChild(image);
  }
  theLeftSide.lastChild.onclick=
    function nextLevel(event){
        event.stopPropagation();
        delete_all_children();
        numberOfFaces += 5;
        generateFaces();
      };

  var leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);
}
