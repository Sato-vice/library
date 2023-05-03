const book = document.querySelector(".book")

const yourBooksStorage = JSON.parse(localStorage.getItem("yourBooks")) || []
const booksStorage = JSON.parse(localStorage.getItem("books")) || []

booksStorage.map(item => {
        book.innerHTML = `
        <div class="sub-class">
            <div class="img-container">
                <div class="img">
                    image
                </div>
                <div class="author">
                    <h4>Author:  ${item.author}</h4>
                </div>
            </div>
            <div class="info-container">
                <h2>Title : ${item.title}</h2>
                <p class="script">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus laborum fugit a fugiat tempore quas. Necessitatibus nesciunt reprehenderit, fugit ratione similique magni praesentium quas molestias delectus rem repellat laboriosam?</p>
                <h3>${item.price}$</h3>
                </div>
        </div>
        <div class="btn-class">
            <h3 class="title">Do you like it?</h3>
            <button class="btn">Add</button>
        </div>
    `


    const addBtn = document.querySelector(".btn")
    addBtn.addEventListener("click", () => {

        item.added = true
        if(item.added === true) {
            book.innerHTML = `
            <div class="sub-class">
                <div class="img-container">
                    <div class="img">
                        image
                    </div>
                    <div class="author">
                        <h4>Author:  ${item.author}</h4>
                    </div>
                </div>
                <div class="info-container">
                    <h2>Title : ${item.title}</h2>
                    <p class="script">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus laborum fugit a fugiat tempore quas. Necessitatibus nesciunt reprehenderit, fugit ratione similique magni praesentium quas molestias delectus rem repellat laboriosam?</p>
                    <h3>${item.price}</h3>
                    </div>
                </div>
            <div class="btn-class">
                <h3>The book is added</h3>
                <a href="yourBooks.html">
                    <button class="btn">Your Books</button>
                </a>
                <p>You can view it in Your library!</p>
            </div>
            `
        }
        yourBooksStorage.push(item)
        booksStorage.splice(item, 1)
        localStorage.setItem("yourBooks", JSON.stringify(yourBooksStorage))
        localStorage.setItem("books", JSON.stringify(booksStorage))

    })

})

localStorage.setItem("yourBooks", JSON.stringify(yourBooksStorage))
localStorage.setItem("books", JSON.stringify(booksStorage))
