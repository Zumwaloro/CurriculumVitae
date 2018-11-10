/*
* created by: Attila Bulenda
* date: 22.04.2018
* Oslo, Norway
*/

//adds a task to the manager:
function addTask() {
  let name = document.getElementById('name').value;
  let date = document.getElementById('date').value;
  let task = document.getElementById('task').value;

  if(name === "name: e.g. Attila") {
    alert("Error: name field empty!");
    return;
  }

  if(date === "dd.mm.yyyy") {
    alert("Error: date field empty!");
    return;
  }

  if(task === "task: e.g. programming") {
    alert("Error: task field empty!");
    return;
  }

  alert("Succesfully added the following task:\n\nName: " + name + "\nDate of task: " + date + "\nTask: " + task);
  clearFields();
}

//searches for a task in the database:
function searchTask() {
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;

    if(name === "name: e.g. Attila") {
      alert("Error: name field empty!");
      return;
    }

    if(date === "dd.mm.yyyy") {
      alert("Error: date field empty!");
      return;
    }

    alert(jserver);
    clearFields();
}

//deletes a task:
function deleteTask() {
  let name = document.getElementById('name').value;
  let date = document.getElementById('date').value;
  let task = document.getElementById('task').value;

  if(name === "name: e.g. Attila") {
    alert("Error: name field empty!");
    return;
  }

  if(date === "dd.mm.yyyy") {
    alert("Error: date field empty!");
    return;
  }

  if(task === "task: e.g. programming") {
    alert("Error: task field empty!");
    return;
  }

  alert("Succesfully deleted the following task:\n\nName: " + name + "\nDate of task: " + date + "\nTask: " + task);
  clearFields();
}

//info about the webpage's purpose:
function infoAlert() {
  alert("This page is a demonstration of JavaScript programming, but it's not ready yet.");
}

//instructions how to use the manager:
function helpAlert() {
	alert("To add a task, fill out the name, date and task fields, then click the 'Add' button.\n\nTo pull data from the database, "
  + "fill out the name and date fields, then click the 'Search' button.\n\nTo delete a task, complete the name, date and task fields, then "
  +"click the 'Delete' button.");
}

//clear input fields:
function clearFields() {
  document.getElementById('name').value = "name: e.g. Attila";
  document.getElementById('date').value = "dd.mm.yyyy";
  document.getElementById('task').value = "task: e.g. programming";
}
