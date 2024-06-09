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
                <div class="row my-4 task-id=${section.title +'-'+0}">
                    <div class="col" task-id=${section.title +'-'+0}>
                        <p></p>
                    </div>
                    <div class="col-2" task-id=${section.title +'-'+0}>
                        <p></p>
                    </div>
                    <div class="col-1" task-id=${section.title +'-'+0}>
                        <p></p>
                    </div>
                </div>
                <div class="divider"></div>

                <div class="row my-4" task-id=${section.title +'-'+1}>
                    <div class="col" task-id=${section.title +'-'+1}>
                        <p></p>
                    </div>
                    <div class="col-2 task-id=${section.title +'-'+1}">
                        <p></p>
                    </div>
                    <div class="col-1" task-id=${section.title +'-'+1}>
                        <p></p>
                    </div>
                </div>
                <div class="divider"></div>

                <div class="row my-4" task-id=${section.title +'-'+2}>
                    <div class="col" task-id=${section.title +'-'+2}>
                        <p></p>
                    </div>
                    <div class="col-2" task-id=${section.title +'-'+2}>
                        <p></p>
                    </div>
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
        day: 'Saturday',
        completed: true
    }
]

var loadUserData = () =>{
    userData.forEach((task)=>{
        var pickedBlockContent = document.querySelector(".col[task-id='" + task.taskId + "']")
        pickedBlockContent.innerHTML = "<p>" + task.content +" </p>"
        var pickedBlockDate = document.querySelector(".col-2[task-id='" + task.taskId + "']")
        pickedBlockDate.innerHTML = "<p>" + task.day +" </p>"
        var pickedBlockComplete = document.querySelector(".col-1[task-id='" + task.taskId + "']")
        if(task.completed === true){
            pickedBlockComplete.className = "complete col-1"
        }
        
    })
}

loadUserData()
