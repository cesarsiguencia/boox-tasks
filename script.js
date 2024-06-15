var sectionHolder = document.querySelector("#scheduler-content")
var button = document.querySelector("#save-task")
var date = document.querySelector('#update-date')

var sections = [
    {
        title: 'Work'
    },
    {
        title: 'Personal'
    },
    {
        title: 'Future'
    }
]

const generateSections = () =>{
    sections.forEach((section)=>{
        var sectionLoad = document.createElement("section")
        sectionLoad.className =  "mt-3 shadow-lg"
        sectionLoad.id = `${section.title}`
        sectionLoad.innerHTML = `
            <h3>${section.title}</h3>
            <div class="container-fluid py-1">
                <div class="row my-2" task-type=${section.title} task-id=${section.title +'-'+0}>
                    <input class="col writing" task-type=${section.title} task-id=${section.title +'-'+0}>

                    </input>
                    <select name="Weekday Due" class="col-2" task-type=${section.title} task-id=${section.title +'-'+0}>
                        <option value="" disabled selected>Due Date</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                        <option value="next week">Next Week</option>
                    </select>
                    <div class="col-1" task-type=${section.title} task-id=${section.title +'-'+0}>
                        <p></p>
                    </div>
                </div>
                <div class="divider"></div>

                <div class="row my-2" task-type=${section.title} task-id=${section.title +'-'+1}>
                    <input class="col writing" task-type=${section.title} task-id=${section.title +'-'+1}>

                    </input>
                    <select name="Weekday Due" class="col-2" task-type=${section.title} task-id=${section.title +'-'+1}>
                        <option value="" disabled selected>Due Date</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                        <option value="next week">Next Week</option>
                    </select>
                    <div class="col-1" task-type=${section.title} task-id=${section.title +'-'+1}>
                        <p></p>
                    </div>
                </div>
                <div class="divider"></div>

                <div class="row my-2" task-type=${section.title} task-id=${section.title +'-'+2}>
                    <input class="col writing" task-type=${section.title} task-id=${section.title +'-'+2}>
      
                    </input>
                    <select name="Weekday Due" class="col-2" task-type=${section.title} task-id=${section.title +'-'+2}>
                        <option value="" disabled selected>Due Date</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                        <option value="next week">Next Week</option>
                    </select>
                    <div class="col-1" task-type=${section.title} task-id=${section.title +'-'+2}>
                        <p></p>
                    </div>
                </div>
            </div>
        `

        sectionHolder.appendChild(sectionLoad)
    })
}
generateSections()

var userData = []

var loadUserData = () =>{
    var newArray = JSON.parse(localStorage.getItem("scheduler-tasks"))
    var savedDate = JSON.parse(localStorage.getItem("scheduler-tasks-date"))

    if(savedDate){
        date.value = savedDate
    }
    

    if(newArray){
        userData = newArray
    }
    
    if(userData){
        userData.forEach((task)=>{
            var pickedBlockContent = document.querySelector(".col[task-id='" + task.taskTag + "']")
            pickedBlockContent.value = task.content
    
            var pickedBlockDate = document.querySelector(".col-2[task-id='" + task.taskTag + "']")
            pickedBlockDate.value = task.day
    
            var pickedBlockComplete = document.querySelector(".col-1[task-id='" + task.taskTag + "']")
            if(task.completed === true){
                pickedBlockComplete.className = "complete col-1"
                pickedBlockComplete.setAttribute('status', "true")
            }
        })
    }
}
loadUserData()

var taskStatus = ""

const editBlock = (e) =>{
    var taskType = e.target.getAttribute("task-type")
    var taskId = e.target.getAttribute("task-id")

    if(e.target.matches(".col-1")){
        var editBlockComplete = document.querySelector(".col-1[task-id='" + taskId + "']")

        if(editBlockComplete.hasAttribute("status")){
            editBlockComplete.removeAttribute("status")
            editBlockComplete.classList.remove("complete")
            taskStatus = false
        } else {
            editBlockComplete.className = "complete col-1"
            editBlockComplete.setAttribute('status', "true")
            taskStatus = true
        }

        editStatus(taskStatus, taskId)
    }
    console.log('any detection of delete?')

    if(document.querySelector(".col[task-id='" + taskId + "']").value === ""){
        console.log('no data here')
    }



    sectionHolder.addEventListener("change", function(e){
        console.log('are there changes?')
        var editBlockContent = document.querySelector(".col[task-id='" + taskId + "']").value
        var editBlockDay = document.querySelector(".col-2[task-id='" + taskId + "']").value
        if(userData.length > 0){
            deleteTask(taskId)
        }
        console.log(editBlockContent)
        console.log(editBlockDay)
        if(editBlockContent && editBlockDay){
            userData.push({
                type: taskType,
                taskTag: taskId,
                content: editBlockContent,
                day: editBlockDay
            })
        } else {
            console.log('no')
        }





        localStorage.setItem("scheduler-tasks", JSON.stringify(userData))
    })
}

const editStatus = (changeStatus, changeId) =>{
    userData.forEach((task)=>{
        if(task.taskTag === changeId){
            task.completed = changeStatus
        }
    })
    localStorage.setItem("scheduler-tasks", JSON.stringify(userData))
}

const deleteTask = (deleteId) =>{
    userData.forEach((task)=>{
        if(task.taskTag === deleteId){
            const index = userData.indexOf(task)
            userData.splice(index, 1)
        }
    })
}


sectionHolder.addEventListener("click", editBlock)
date.addEventListener("change", function(){
    localStorage.setItem("scheduler-tasks-date", JSON.stringify(date.value))
})
