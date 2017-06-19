function CreateTask() {
    event.preventDefault();
    console.log("In CreateTask function!");
    
    //get values from the form
    var name = document.querySelector('input[name="person"]:checked').value;
    var difficult = document.getElementById('complexity').value;
    var description = document.getElementById('task').value;

    //create the ul and li and know where to place it in html body
    var parent = document.getElementById("list-container");
    var ulNode = document.createElement("ul");
    var liNode = document.createElement('li');

    //write to div in html
    var liText = document.createTextNode(name + " has a task of " + description + ", (" + difficult + ").");
    liNode.appendChild(liText);
    ulNode.appendChild(liNode);
    parent.appendChild(ulNode);
}