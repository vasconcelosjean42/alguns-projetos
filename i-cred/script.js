//constants declared for input button and task list area
const taskInput = document.querySelector("#new-task input");
const taskSection = document.querySelector('.tasks')
// listener for the Enter key. Used to add a new task.
taskInput.addEventListener("keyup", (e) => {
    if(e.key == "Enter") 
        createTask();
})
//the onclick event for the 'Add' button
document.querySelector('#push').onclick = () => createTask()
//the funtcion that creates a task
function createTask(){
    if(taskInput.value.length == 0){
        alert('The task field is blank. Enter a task name and try again.')
    } else {
        taskSection.innerHTML += 
            `
                <div class="task">
                    <label id="taskname">
                        <input onclick="updateTask(this)" type="checkbox" id="check-task">
                        <p>${taskInput.value}</p>
                    </label>
                    <div class="delete">
                        <i class="uil uil-trash"></i>
                    </div>
                </div>
            `
        var current_task = document.querySelectorAll(".delete")
        for (var i = 0; i < current_task.length; i++){
            current_task[i].onclick = function() {
                console.log(this.parentNode)
                this.parentNode.remove();
            }
        }
        taskSection.offsetHeight >= 300
        ? taskSection.classList.add("overflow")
        : taskSection.classList.remove("overflow")
    }
}

function updateTask(task){
    let taskItem = task.parentElement.lastElementChild;
    if(task.checked){
        taskItem.classList.add('checked')
    }else{
        taskItem.classList.remove('checked')
    }
}