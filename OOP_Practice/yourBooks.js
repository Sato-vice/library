const books = document.querySelector(".books")
const countDisplay = document.querySelector(".count")
const yourBooksStorage = JSON.parse(localStorage.getItem("yourBooks")) || []

// for (let index = 0; index < yourBooksStorage.length; index++) {
//     const element = yourBooksStorage[index];
    
// }

yourBooksStorage.map(element => {
    const bookEl = document.createElement("div")
    bookEl.classList.add("book")
    bookEl.innerHTML = `
        <h3>Author : ${element.author}</h3>
        <h3>Title : ${element.title}</h3>
        <h3>Year : ${element.year}</h3>
        <h3>$${element.price}</h3>
        <a href="yourBooksDetails.html">
            <button class="details-btn">Details</button>
        </a>
    `

    books.appendChild(bookEl)

    
    countBooks()
})

if(yourBooksStorage.length === 0) {
    countDisplay.innerHTML = "<h3>Currently there are no books in Your library.</h3>"
}

function countBooks() {
    
    return countDisplay.textContent = `There are ${yourBooksStorage.length} in your library` 
}
