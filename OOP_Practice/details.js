let dataStorage = JSON.parse(localStorage.getItem("data"))
localStorage.setItem("data", JSON.stringify(dataStorage))
const yourBooksStorage = JSON.parse(localStorage.getItem("yourBooks")) || []
localStorage.setItem("yourBooks", JSON.stringify(yourBooksStorage))

const infoContainer = document.querySelector(".info-container")
const title = document.querySelector(".title")

dataStorage.map(member => {
    title.innerHTML = `
        <h2>The information about : ${member.name}</h2>
    `
    infoContainer.innerHTML = `
        <h2 class="name">Name : ${member.name}</h2>
        <h2>SurName : ${member.sName}</h2>
        <h2>Phone :${member.phone}</h2>
        <h3>Id : ${member.id}</h3>
        `

})

