var sectionHolder = document.querySelector("#scheduler-content")
var button = document.querySelector("#save-task")
var taskIdCounter = 0

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
                <div class="row my-4" task-type=${section.title} task-id=${section.title +'-'+0}>
                    <input class="col" task-type=${section.title} task-id=${section.title +'-'+0}>

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

                <div class="row my-4" task-type=${section.title} task-id=${section.title +'-'+1}>
                    <input class="col" task-type=${section.title} task-id=${section.title +'-'+1}>

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

                <div class="row my-4" task-type=${section.title} task-id=${section.title +'-'+2}>
                    <input class="col" task-type=${section.title} task-id=${section.title +'-'+2}>
      
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

// var userData = [
//     {
//         type: "Personal",
//         taskTag: "Personal-0",
//         content: 'Working example',
//         day: 'friday',
//         completed: true
//     },
//     {
//         type: "Work",
//         taskTag: "Work-1",
//         content: 'Another one',
//         day: 'tuesday',
//         completed: false
//     }
// ]

var userData = []

var loadUserData = () =>{
    var newArray = JSON.parse(localStorage.getItem("scheduler-tasks"))
    if(newArray){
        userData = newArray
    }
    
    console.log(userData)
    if(userData){
        userData.forEach((task)=>{
            var pickedBlockContent = document.querySelector(".col[task-id='" + task.taskTag + "']")
            pickedBlockContent.value = task.content
    
            var pickedBlockDate = document.querySelector(".col-2[task-id='" + task.taskTag + "']")
            pickedBlockDate.value = task.day
    
            var pickedBlockComplete = document.querySelector(".col-1[task-id='" + task.taskTag + "']")
            if(task.completed === true){
                pickedBlockComplete.className = "complete col-1"
            }
        })
    }
}
loadUserData()

const editBlock = (e) =>{
    console.log('edits')
    var taskType = e.target.getAttribute("task-type")
    var taskId = e.target.getAttribute("task-id")
    console.log(taskId)

    if(e.target.matches(".col-1")){
        var editBlockComplete = document.querySelector(".col-1[task-id='" + taskId + "']")

        if(editBlockComplete.hasAttribute("status")){
            editBlockComplete.removeAttribute("status")
            editBlockComplete.classList.remove("complete")
        } else {
            editBlockComplete.className = "complete col-1"
            editBlockComplete.setAttribute('status', "true")
        }
    }

    sectionHolder.addEventListener("change", function(){
        var editBlockContent = document.querySelector(".col[task-id='" + taskId + "']").value
        var editBlockDay = document.querySelector(".col-2[task-id='" + taskId + "']").value
        if(userData.length > 0){
            userData.forEach((task)=>{
                if(task.taskTag === taskId){
                    const index = userData.indexOf(task)
                    userData.splice(index, 1)
                }
            })
        }
        console.log(editBlockContent, 'outside')
        if(editBlockContent && editBlockDay){
            console.log(editBlockContent)
            console.log(editBlockDay)
            userData.push({
                type: taskType,
                taskTag: taskId,
                content: editBlockContent,
                day: editBlockDay
                // completed: 
            })
        } 

        // if(editBlockContent === ""){
        //     console.log('no content')
        // }


        console.log(userData)
        localStorage.setItem("scheduler-tasks", JSON.stringify(userData))
    })
}

sectionHolder.addEventListener("click", editBlock)
