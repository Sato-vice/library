const text = document.querySelector(".text")
const form = document.querySelector(".form")
const input = document.querySelector(".input")
const container = document.querySelector(".container")
const addContainer = document.querySelector(".addContainer")
const removeContainer = document.querySelector(".removeContainer")
const alertDisplay = document.querySelector(".alert")
const btn = document.querySelector(".btn")
const formContainer = document.querySelector(".form-container")

let dataStorage = JSON.parse(localStorage.getItem("data")) || []

class Library {
    constructor(members) {
        this.members = members = []
    }

    addMember(member) {
        this.members.push(member)
        console.log(this.members);
    }

    removeMemeber(member) {
        this.members.splice(member, 1)
        console.log(this.members);
    }


}

class Librarian {
    constructor(adminName) {
        this.adminName = adminName
    }
}

class Member {
    constructor(name, sName, phone, id, image) {
        this.name = name
        this.sName = sName
        this.phone = phone
        this.id = new Date().getTime()
        this.image = image
    }
    
}

let newMem = new Member("dashdamir", "ewqe", "321", "https://avatars.mds.yandex.net/i?id=16fa71d67eccfec05c57c33585928086e78f20b2-4012465-images-thumbs&n=13")
console.log(newMem);



let library = new Library
let librarian = new Librarian("D")

form.addEventListener("click", (e) => {
    e.preventDefault()
    let inputVal = input.value
    if(inputVal === librarian.adminName) {
        // const addBtn = document.createElement("button")
        // const removeBtn = document.createElement("button")
        // container.innerHTML = "What do you want to do?"
        // addBtn.innerText = "Add a Member"
        // removeBtn.innerText = "Remove a Member"
        // container.appendChild(addContainer)
        // container.appendChild(removeContainer)
        // addContainer.appendChild(addBtn)
        // removeContainer.appendChild(removeBtn)
        // addBtn.addEventListener("click", addMember)
        // removeBtn.addEventListener("click", removeMember)
        const navbar = document.createElement("nav")

        navbar.innerHTML = `
            <ul class="navbar">
                <h3 class="logo">Dostoevskogo.</h3>
                <li><a href="./list.html">Members</a></li>
                <li><a href="addMember.html">Hadle Members</a></li>
                <li><a href="help.html">Help</a></li>
            </ul>
        `

        container.appendChild(navbar)
        input.value = ""
        formContainer.remove(form)
    } else  {
        for (let i = 0; i < dataStorage.length; i++) {
            if(inputVal === dataStorage[i].name) {
                const navbar = document.createElement("nav")
        
                navbar.innerHTML = `
                    <ul class="navbar">
                        <li><a href="books.html">Books</a></li>
                        <li><a href="readingBooks">Your Books</a></li>
                        <li><a href="Help">Help</a></li>
                    </ul>
                `
                container.appendChild(navbar)
                input.value = ""
                formContainer.remove(form)
            }
        }
    }
})  

// const imageInput = document.querySelector("#image_input")
// var uploaded_image = ""

// imageInput.addEventListener("change", () => {
//     const reader = new FileReader()
//     reader.addEventListener("load", () => {
//         uploaded_image = reader.result
//         document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`
//     })
//     reader.readAsDataURL(this.files[0])
// })