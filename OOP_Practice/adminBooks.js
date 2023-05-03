const countDisplay = document.querySelector(".count")
const books = document.querySelector(".books")

const adminBooksStorage = JSON.parse(localStorage.getItem("adminBooks")) || []

books.addEventListener("click", (e) => {
    if(e.target.classList.contains("remove-btn")) {
        const taskId = e.target.closest("div").id

        removeBook(taskId)
    }
})

adminBooksStorage.map((book) => {
    const bookEl = document.createElement("div")
    bookEl.setAttribute("id", book.id)
    bookEl.classList.add("book")
    bookEl.innerHTML = `
        <h3>Author : ${book.author}</h3>
        <h3>Title : ${book.title}</h3>
        <h3>Year : ${book.year}</h3>
        <h3>$ ${book.price}</h3>
        <button class="remove-btn">remove</button>
    `
    books.appendChild(bookEl)

    countBooks()
})



function removeBook(itemId) {
    const removingEl = adminBooksStorage.filter(item => item.id !== parseInt(itemId))

    document.getElementById(itemId).remove()
    adminBooksStorage.splice(removingEl, 1)
    localStorage.setItem("adminBooks", JSON.stringify(adminBooksStorage))
    countBooks()
}


if(adminBooksStorage.length === 0) {
    countDisplay.innerHTML = "<h3>Currently there are no books in the library.</h3>"
}

function countBooks() {
    
    return countDisplay.textContent = `There are ${adminBooksStorage.length} in the library` 
}

localStorage.setItem("adminBooks", JSON.stringify(adminBooksStorage))