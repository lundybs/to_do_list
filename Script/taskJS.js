function CreateTask() {
    console.log("In CreateTask function!");

    var name = document.getElementsByName('person');
    var difficult = document.getElementsByName('difficulty');
    var description = document.getElementById('task');

    var parent = document.getElementById("list-container");
    var ul = document.createElement("ul");
    var li = document.createElement('li');

    li.innerHTML = name + "has a task of" + description + "(" + difficult + ").";
    ul.appendChild(li);

}