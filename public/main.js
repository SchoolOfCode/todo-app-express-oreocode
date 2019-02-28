const input = document.getElementById("input");
let todoId = 1;

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
    id: todoId,
    date: date.getDate(),
    description: input.value,
    status: true
  };
  console.log(objToSend);
  fetch(`/users/todo/jaskaran`, {
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
    .then(todoId++)
    .catch(err => console.error(err));
};
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
