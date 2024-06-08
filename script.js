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
                        <p>Hey</p>
                    </div>
                    <div class="col-2" task-id=${section.title +'-'+0}>
                        <p>Due By</p>
                    </div>
                    <div class="col-1" task-id=${section.title +'-'+0}>
                        <p>cool</p>
                    </div>
                </div>
                <div class="divider"></div>

                <div class="row my-4" task-id=${section.title +'-'+1}>
                    <div class="col" tasl-id=${section.title +'-'+1}>
                        <p></p>
                    </div>
                    <div class="col-2 task-id=${section.title +'-'+1}">
                        <p>Due By</p>
                    </div>
                    <div class="col-1" task-id=${section.title +'-'+1}>
                        <p>cool</p>
                    </div>
                </div>
                <div class="divider"></div>

                <div class="row my-4" task-id=${section.title +'-'+2}>
                    <div class="col" task-id=${section.title +'-'+2}>
                        <p>hey</p>
                    </div>
                    <div class="col-2" task-id=${section.title +'-'+2}>
                        <p>Due By</p>
                    </div>
                    <div class="col-1" task-id=${section.title +'-'+2}>
                        <p>cool</p>
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
        completed: false
    }
]

var loadUserData = () =>{
    userData.forEach((task)=>{
        var pickedBlock = document.querySelector(".col[task-id='" + task.taskId + "']")

        pickedBlock.textContent = task.content
    })
}

loadUserData()
