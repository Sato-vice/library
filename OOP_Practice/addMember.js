const addContainer = document.querySelector(".addContainer")
const removeContainer = document.querySelector(".removeContainer")
const addBookContainer = document.querySelector(".addBookContainer")
const removeBookContainer = document.querySelector(".removeBookContainer")
const alertDisplay = document.querySelector(".alert")
const form = document.querySelector(".form")
const addBtn = document.querySelector(".add")
const removeBtn = document.querySelector(".remove")
const addBookBtn = document.querySelector(".addBook")
const removeBookBtn = document.querySelector(".removeBook")

const dataStorage = JSON.parse(localStorage.getItem("data")) || []
const booksStorage = JSON.parse(localStorage.getItem("books")) || []
const adminBooksStorage = JSON.parse(localStorage.getItem("adminBooks")) || []
localStorage.setItem("books", JSON.stringify(booksStorage))
localStorage.setItem("adminBooks", JSON.stringify(adminBooksStorage))

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


class Member {
    constructor(name, sName, phone, id) {
        this.name = name
        this.sName = sName
        this.phone = phone
        this.id = new Date().getTime()
    }
}




let library = new Library


addBtn.addEventListener("click", addMember)
removeBtn.addEventListener("click", removeMember)
addBookBtn.addEventListener("click", addBook)
removeBookBtn.addEventListener("click", removeBook)

form.addEventListener("click", (e) => {
    e.preventDefault()
    let inputVal = input.value
    if(inputVal === librarian.adminName) {
        const addBtn = document.createElement("button")
        const removeBtn = document.createElement("button")
        addContainer.appendChild(addBtn)
        removeContainer.appendChild(removeBtn)
        addBtn.addEventListener("click", addMember)
        removeBtn.addEventListener("click", removeMember)
        input.value = ""
        formContainer.remove(form)
    }
})  


function addMember() {
    const nameInput = document.createElement("input")
    const sNameInput = document.createElement("input")
    const phoneInput = document.createElement("input")
    const submitBtn = document.createElement("button")
    submitBtn.innerText = "Submit"
    nameInput.placeholder = "Enter the Name"
    sNameInput.placeholder = "Enter the SecondName"
    phoneInput.placeholder = "Enter the PhoneNumber"
    addContainer.appendChild(nameInput)
    addContainer.appendChild(sNameInput)
    addContainer.appendChild(phoneInput)
    addContainer.appendChild(submitBtn)
        submitBtn.addEventListener("click", () => {
            let nInputVal = nameInput.value
            let snInputVal = sNameInput.value
            let phoneInputVal = phoneInput.value
            if(nameInput.value === "" || sNameInput.value === "" || phoneInput.value === "") {
                alert("You have to enter the values")
            } else {
                let newMember = new Member(nInputVal, snInputVal, phoneInputVal)
                dataStorage.push(newMember)
                localStorage.setItem("data", JSON.stringify(dataStorage))
                library.addMember(newMember)
                addContainer.removeChild(nameInput)
                addContainer.removeChild(sNameInput)
                addContainer.removeChild(phoneInput)
                addContainer.removeChild(submitBtn)
                addContainer.appendChild(alertDisplay)
                alertDisplay.innerHTML = "You added a Member"
                setTimeout(() => {
                    alertDisplay.innerHTML = ""
                }, 2000)
            }
          
        })
}


function removeMember() {
    const nameInput = document.createElement("input")
    const sNameInput = document.createElement("input")
    const phoneInput = document.createElement("input")
    const submitBtn = document.createElement("button")
    submitBtn.innerText = "Submit"
    nameInput.placeholder = "Enter the Name"
    sNameInput.placeholder = "Enter the SecondName"
    phoneInput.placeholder = "Enter the PhoneNumber"
    removeContainer.appendChild(nameInput)
    removeContainer.appendChild(sNameInput)
    removeContainer.appendChild(phoneInput)
    removeContainer.appendChild(submitBtn)
        submitBtn.addEventListener("click", () => {
            for (let member = 0; member < dataStorage.length; member++) {
                const mem = dataStorage[member];
                if(nameInput.value !== mem.name 
                    || sNameInput.value !== mem.sName 
                    || phoneInput.value !== mem.phone) {
                        alert("Incorrect values")
                } else {
                    removeContainer.removeChild(nameInput)
                    removeContainer.removeChild(sNameInput)
                    removeContainer.removeChild(phoneInput)
                    removeContainer.removeChild(submitBtn)
                    removeContainer.appendChild(alertDisplay)
                    localStorage.setItem("data", JSON.stringify(dataStorage))
                    alertDisplay.innerHTML = "You removed a Member"
                    setTimeout(() => {
                        alertDisplay.innerHTML = ""
                    }, 2000)
                    dataStorage.splice(mem, 1)
                    localStorage.setItem("data", JSON.stringify(dataStorage))
                }
                if (nameInput.value === ""
                    || sNameInput.value === "" 
                    || phoneInput.value === "") {
                        alert("You should enter the fields")
                    }
            }
        })

}

class Book {
    constructor(author, title, year, price, added) {
        this.author = author
        this.title = title
        this.year = year
        this.price = price
        this.added = added = false
        this.id = new Date().getTime()
    }
}


function addBook() {
    const authorInput = document.createElement("input")
    const titleInput = document.createElement("input")
    const yearInput = document.createElement("input")
    const priceInput = document.createElement("input")
    const submitBtn = document.createElement("button")
    submitBtn.innerText = "Submit"
    authorInput.placeholder = "Enter the Author"
    titleInput.placeholder = "Enter the Title"
    yearInput.placeholder = "Enter the Year"
    priceInput.placeholder = "Enter the price"
    addBookContainer.appendChild(authorInput)
    addBookContainer.appendChild(titleInput)
    addBookContainer.appendChild(yearInput)
    addBookContainer.appendChild(priceInput)
    addBookContainer.appendChild(submitBtn)
        submitBtn.addEventListener("click", () => {
            let authorInputVal = authorInput.value
            let titleInputVal = titleInput.value
            let yearInputVal = yearInput.value
            let priceInputVal = priceInput.value
            if(authorInput.value === "" || titleInput.value === "" || yearInput.value === "" || priceInput.value === "") {
                alert("You have to enter the values")
            } else {
                let newBook= new Book(authorInputVal, titleInputVal, yearInputVal, priceInputVal)
                booksStorage.push(newBook)
                adminBooksStorage.push(newBook)
                localStorage.setItem("books", JSON.stringify(adminBooksStorage))
                localStorage.setItem("adminBooks", JSON.stringify(booksStorage))
                addBookContainer.removeChild(authorInput)
                addBookContainer.removeChild(titleInput)
                addBookContainer.removeChild(yearInput)
                addBookContainer.removeChild(priceInput)
                addBookContainer.removeChild(submitBtn)
                addBookContainer.appendChild(alertDisplay)
                alertDisplay.innerHTML = "You added a Book"
                setTimeout(() => {
                    alertDisplay.innerHTML = ""
                }, 2000)
            }
          
        })
}


function removeBook() {
    const titleInput = document.createElement("input")
    const submitBtn = document.createElement("button")
    submitBtn.innerText = "Submit"
    titleInput.placeholder = "Enter the Title"
    removeBookContainer.appendChild(titleInput)
    removeBookContainer.appendChild(submitBtn)
        submitBtn.addEventListener("click", () => {
            for (let book = 0; book < booksStorage.length; book++) {
                const bok = booksStorage[book];
                if(titleInput.value !== bok.title) {
                        alert("Incorrect values")
                } else {
                    removeBookContainer.removeChild(titleInput)
                    removeBookContainer.removeChild(submitBtn)
                    removeBookContainer.appendChild(alertDisplay)
                    localStorage.setItem("books", JSON.stringify(booksStorage))
                    alertDisplay.innerHTML = "You removed a Member"
                    setTimeout(() => {
                        alertDisplay.innerHTML = ""
                    }, 2000)
                    booksStorage.splice(bok, 1)
                    localStorage.setItem("books", JSON.stringify(booksStorage))
                }
                if (titleInput.value === "") {
                        alert("You should enter the fields")
                    }
            }
        })

}
