function createTable (tableLength) {
	var s="<table class='myTable'>";
	var i=tableLength;
	for (i; i>0; i--) {
		s+="<tr><td> name"+i+"</td><td> position"+i+"</td><td> phone"+"</td><td><input type='submit' value='delete'></td></tr>"
	}
	s+="</table>";
	document.body.innerHTML=s;
};

function makeRowColour(event) {
	if (event.target.parentElement.style.background==="green") {
		event.target.parentElement.style.background="white"
	} else {
		event.target.parentElement.style.background="green"
	}
}

function deleteThisRow(event) {
	var currentRow = event.target.parentElement.parentElement;
	document.querySelector(".myTable").childNodes[0].removeChild(currentRow);
}

function makeRowsRed(event) {
	var parentLength=event.target.parentElement.parentElement.childElementCount;
	for (var i=0; i<parentLength; i++) {
		if ((i+1)%3===0) {
				event.target.parentElement.parentElement.children[i].style.backgroundColor="red"
			}
		}
}


function makeRowsUnRed(event) {
	var parentLength=event.target.parentElement.parentElement.childElementCount;
	for (var i=0; i<parentLength; i++) {
		if (event.target.parentElement.parentElement.children[i].style.backgroundColor==="red") {
			event.target.parentElement.parentElement.children[i].style.backgroundColor="white"
		}
	}
}


function chooseWhattoDo (event) {
	if (event.target.nodeName==="TD") {
		var parent = event.target.parentNode.parentNode;
		var index = Array.prototype.indexOf.call(parent.children, event.target.parentNode);
		if ((index+1)%3===0) {
			//partly helps to work with "delete" problem
			if (event.target.parentElement.style.backgroundColor==="red") {
				makeRowsUnRed(event); 
			} else {
				makeRowsRed(event); 
			}
		} else {
			makeRowColour(event);
		}
	}
	if (event.target.nodeName==="INPUT") {
		deleteThisRow(event);
	}
}

window.onload = function () {
	//choose the number of rows in the table in this function
	createTable(30);

	(function changeColourOnClick () {
	document.querySelector(".myTable").addEventListener ("click", chooseWhattoDo);
	})();
}
