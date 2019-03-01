const input = document.getElementById("input");
const myUL = document.getElementById("myUL");

function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("UL");
list.addEventListener(
  "click",
  function(ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
let sendNewToDo = () => {
  let objToSend = {};
  let date = new Date();
  objToSend = {
    date: date.getDate(),
    description: input.value,
    status: true
  };
  console.log(objToSend);
  fetch(`http://localhost:3000/users/todo/jaskaran`, {
    method: "POST",
    body: JSON.stringify({
      title: "newToDo",
      body: objToSend
    }),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((input.value = ""))
    .then((myUL.innerHTML = ""))
    .then(getAllTodos)
    .catch(err => console.error(err));
};

let getAllTodos = () => {
  fetch(`http://localhost:3000/users/todo/`, { mode: "cors" })
    .then(function(response) {
      return response.json();
    })
    .then(data =>
      data.map(item => {
        let newLI = createNode("LI");
        try {
          newLI.innerText = item.body.description;
          append(myUL, newLI);
        } catch (err) {
          console.log(err);
          newLI.innerText = item.body;
          append(myUL, newLI);
        }
      })
    );
};

let deleteTodo = () => {
  // id needs to be set 1) get id 2) send id
  fetch(`http://localhost:3000/users/todo/jaskaran`, {
    method: "DELETE"
  });
};

getAllTodos();

// const refreshToDo() => {
// todoList.innerHtml=""

// }

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }
