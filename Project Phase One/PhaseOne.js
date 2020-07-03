//targeting multiple nodes to be modified  
let ul = document.getElementById("toDoList");
let body = document.getElementsByTagName("body")[0];
let background = document.getElementById("mainBody");
let label = document.getElementsByTagName("label")[0];
let footer = document.getElementsByTagName("footer")[0];
let p = document.getElementsByTagName("p")[0];
let button = document.getElementById('add');
let button2 = document.getElementById('light');

//Creating new elements for list
let li = document.createElement("li");
let checkbox = document.createElement("input");

//Modifying checkbox properties
checkbox.type = "checkbox";
checkbox.onclick = ding;

//Add item to list by clicking button
button.onclick = function () {
  //create new elements everytime it's ran
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  //Get the most recent user input
  let userInput = document.getElementById('input');
  //remodify checkbox each time
  checkbox.type = "checkbox";
  checkbox.onclick = ding;
  //append new list item
  li.appendChild(document.createTextNode(userInput.value));
  li.appendChild(checkbox);
  ul.appendChild(li);
}

//output ding sound on checkbox click (couldn't direct onclick due to list function)
function ding() {
  document.getElementById("audio").play();
}

//Change site to dark mode
button2.onclick = function () {
  //detects if the class name is empty
  if (body.className == "") {
    //changes button text and css layout to "Dark mode"
    button2.innerHTML = "Dark Mode";
    body.className = "dark";
    label.className = "dark";
    p.className = "dark";
    background.className = "dark";
    footer.className = "dark";
  } else {
    //changes button text and css layout to "Light mode"
    button2.innerHTML = "Light Mode";
    body.className = "";
    label.className = "";
    p.className = "";
    background.className = "";
    footer.className = "";
  }
}



//Default item added to list
li.appendChild(document.createTextNode("Finally Doing Phase One (Accidentally forgot about it last week)"));
li.appendChild(checkbox);
ul.appendChild(li);