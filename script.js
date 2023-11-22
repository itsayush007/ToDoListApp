// fetching input box
const inputBox = document.getElementById('inputBox');
// fetching add button
const addBtn = document.getElementById('addBtn');
// fetching ul of task container
const taskContainer = document.getElementById('task-container');

// adding functionallity to add button
addBtn.addEventListener('click',createTask);

// funcitonallity of add button
function createTask(){
    if(inputBox.value === ''){
        alert("task can't be empty");
    }
    else{
        // creating list element
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        taskContainer.appendChild(li);

        // creating delete icon
        let delIcon = document.createElement('img');
        delIcon.src = "assets/deleteIcon.png";
        li.appendChild(delIcon);

        inputBox.value = '';
    }
}

// adding event listener on task contaienr
taskContainer.addEventListener('click',handleCheckAndDeletion);
function handleCheckAndDeletion(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();
    }
}
