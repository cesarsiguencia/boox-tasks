var sectionHolder = document.querySelector("#scheduler-content")
var taskIdCounter = 0
console.log('working')
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
                <div class="row my-4" task-id=${section.title +'-'+0}>
                    <input class="col" task-id=${section.title +'-'+0}>

                    </input>
                    <select name="Weekday Due" class="col-2" task-id=${section.title +'-'+0}>
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
                    <div class="col-1" task-id=${section.title +'-'+0}>
                        <p></p>
                    </div>
                </div>
                <div class="divider"></div>

                <div class="row my-4" task-id=${section.title +'-'+1}>
                    <input class="col" task-id=${section.title +'-'+1}>

                    </input>
                    <select name="Weekday Due" class="col-2" task-id=${section.title +'-'+0}>
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
                    <div class="col-1" task-id=${section.title +'-'+1}>
                        <p></p>
                    </div>
                </div>
                <div class="divider"></div>

                <div class="row my-4" task-id=${section.title +'-'+2}>
                    <input class="col" task-id=${section.title +'-'+2}>
      
                    </input>
                    <select name="Weekday Due" class="col-2" task-id=${section.title +'-'+0}>
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
                    <div class="col-1" task-id=${section.title +'-'+2}>
                        <p></p>
                    </div>
                </div>
            </div>
        `

        sectionHolder.appendChild(sectionLoad)
    })
}



generateSections()

var userData = [
    {
        type: "Personal",
        taskId: "Personal-0",
        content: 'I have to praise God',
        day: 'friday',
        completed: true
    }
]

var loadUserData = () =>{
    userData.forEach((task)=>{
        var pickedBlockContent = document.querySelector(".col[task-id='" + task.taskId + "']")
        pickedBlockContent.value = task.content

        var pickedBlockDate = document.querySelector(".col-2[task-id='" + task.taskId + "']")
        pickedBlockDate.value = task.day

        var pickedBlockComplete = document.querySelector(".col-1[task-id='" + task.taskId + "']")
        if(task.completed === true){
            pickedBlockComplete.className = "complete col-1"
        }
        
    })
}

loadUserData()


const editBlock = (e) =>{
    if(e.target.matches(".col")){
        var taskId = e.target.getAttribute("task-id")
        var editBlockContent = document.querySelector(".col[task-id='" + taskId + "']").value

        console.log(editBlockContent)
    }

    if(e.target.matches(".col-1")){
        var taskId = e.target.getAttribute("task-id")
        var editBlockComplete = document.querySelector(".col-1[task-id='" + taskId + "']")

        if(editBlockComplete.hasAttribute("status")){
            editBlockComplete.removeAttribute("status")
            editBlockComplete.classList.remove("complete")
        } else {
            editBlockComplete.className = "complete col-1"
            editBlockComplete.setAttribute('status', "true")
        }



    }
}

sectionHolder.addEventListener("click", editBlock)
