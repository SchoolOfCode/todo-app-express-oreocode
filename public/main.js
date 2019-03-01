const input = document.getElementById("input");
const myUL = document.getElementById("myUL");

function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("x");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }
// // Click on a close button to hide the current list item
// var i;
// for (i = 0; i < close.length; i++) {
//   var close = document.getElementsByClassName("close");
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   };
// }
// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector("UL");
// list.addEventListener(
//   "click",
//   function(ev) {
//     if (ev.target.tagName === "LI") {
//       ev.target.classList.toggle("checked");
//     }
//   },
//   false
// );
let sendNewToDo = () => {
  let objToSend = {};
  let date = new Date();
  objToSend = {
    date: date.getDate(),
    description: input.value,
    status: true
  };
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
  myUL.innerHTML = "";
  fetch(`http://localhost:3000/users/todo/`, { mode: "cors" })
    .then(function(response) {
      return response.json();
    })
    .then(data =>
      data.map(item => {
        let newLI = createNode("LI");
        try {
          console.log("item id", item.body.id);
          var span = document.createElement("SPAN");
          var txt = document.createTextNode("x");
          span.className = "close";
          span.setAttribute("id", item.body.id);
          span.appendChild(txt);
          // var close = document.getElementsByClassName("close");
          span.onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            deleteTodo(item.body.id);
            console.log("on click delete fired");
          };
          newLI.innerText = item.body.description;
          newLI.appendChild(span);

          // when we add the button here we add the id
          // to a function that calls the delete with the id attached to the button
          // create the button with the right id
          // add delete functionality

          // let deleteButton = .setAttribute("id", item.body.id)
          // add event lsitener deleteTodo(id) to delete button
          append(myUL, newLI);
          //append(newLI, createDeleteButton);
        } catch (err) {
          console.log(err);
          newLI.innerText = item.body;
          append(myUL, newLI);
        }
      })
    );
};

let deleteTodo = id => {
  // id needs to be set 1) get id 2) send id
  console.log("delete function id", id);
  fetch(`http://localhost:3000/users/todo/${id}`, {
    mode: "cors",
    method: "DELETE"
  })
    // .then(res.status(201).json({ message: "Entry deleted successfully" }))
    .then(getAllTodos);
  // .catch(err => res.status(500).json({ message: "internal server error" }));
};

getAllTodos();
