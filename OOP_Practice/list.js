const memberContainer = document.querySelector(".member-container")
const memberList = document.querySelector(".member-list")
const emptyList = document.querySelector(".empty-list")
const totalDisplay = document.querySelector(".total")

let storage = JSON.parse(localStorage.getItem("data"))

memberList.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-btn")) {
        const taskId = e.target.closest("li").id

        removeElement(taskId)
    }
})

memberList.addEventListener("click", (e) => {
    const taskId = e.target.closest("li").id
    
    updateElement(taskId, e.target)
})


storage.map(item => {
    const element = document.createElement("li")
    element.classList.add("member")
    element.setAttribute("id", item.id)

    element.innerHTML = `
        <h4 class="name"><strong class="strong">Name: </strong>${item.name}</h4>
        <h4 class="sName"><strong class="strong">SurName: </strong>${item.sName}</h4>
        <h4 class="phone"><strong class="strong">Phone: </strong>${item.phone}</h4>
            <div class="btns-container">
                <button class="delete-btn">Delete</button>
                <a href="details.html"><button class="details-btn">Details</button></a>
            </div>
    `

    memberList.appendChild(element)
})




function removeElement(elementId) {
    storage = storage.filter(item => item.id !== parseInt(elementId))

    document.getElementById(elementId).remove()
    localStorage.setItem('data', JSON.stringify(storage))
    countTasks()

}



if(storage.length === 0) {
    emptyList.innerHTML = "<h3>The list is currently empty</h3>"
    memberContainer.appendChild(emptyList)
}

// function updateElement(elementId, el) {
//     const element = storage.find(item => item.id === parseInt(elementId))

//     if(el.hasAttribute("contenteditable")) {
//         element.name = el.textContent
//     }

//     localStorage.setItem('data', JSON.stringify(storage))

// }

function countTasks() {
    return totalDisplay.innerHTML = `Total: ${storage.length}`
}
countTasks()

