// POST adds new todo info

let sendNewToDo = (userId, todoId, date, description, status) => {
  let objToSend = {};
  objToSend = {
    user: userId,
    id: todoId,
    date: date,
    description: description,
    status: status
  };
  console.log(objToSend[userId]);
  fetch(`localhost:3000/users/todo/${userId}`, {
    method: "POST",
    body: JSON.stringify({
      title: "newToDo",
      body: objToSend[userId]
    }),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8"
    }
  });
};
