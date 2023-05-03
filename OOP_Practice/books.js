const books = document.querySelector(".books")

const booksStorage = JSON.parse(localStorage.getItem("books")) || []
const yourBooksStorage = JSON.parse(localStorage.getItem("yourBooks")) || []


booksStorage.map((book) => {
    const bookEl = document.createElement("div")
    bookEl.setAttribute("id", book.id)
    bookEl.classList.add("book")
    bookEl.innerHTML = `
        <h3>Author : ${book.author}</h3>
        <h3>Title : ${book.title}</h3>
        <h3>Year : ${book.year}</h3>
        <h3>$ ${book.price}</h3>
        <div class="btns">
        <a href="bookDetails.html">
            <button class="details-btn">Details</button>
        </a>
        </div>
    `

  
    books.appendChild(bookEl)

})

localStorage.setItem("books", JSON.stringify(booksStorage))