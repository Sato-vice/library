const book = document.querySelector(".book")

const yourBooksStorage = JSON.parse(localStorage.getItem("yourBooks")) || []
const booksStorage = JSON.parse(localStorage.getItem("books")) || []

yourBooksStorage.map(item => {
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
            <h3>You can remove it any time.</h3>
            <div class="removed-btns">
                <a href="books.html">
                    <button class="btn">Remove</button>
                </a>
                <a href="yourBooks.html">
                    <button class="btn">Your Books</button>
                </a>
            </div>
        </div>
    `


    const addBtn = document.querySelector(".btn")
    addBtn.addEventListener("click", () => {
        yourBooksStorage.splice(item, 1)
        booksStorage.push(item)
        item.added = false
        if(item.added === false) {
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
                <h3>The book is removed.</h3>
                <div class="removed-btns">
                    <a href="books.html">
                        <button class="btn">Books</button>
                    </a>
                    <a href="yourBooks.html">
                        <button class="btn">Your Books</button>
                    </a>
                </div>
            </div>
            `
            
            localStorage.setItem("yourBooks", JSON.stringify(yourBooksStorage))
            localStorage.setItem("books", JSON.stringify(booksStorage))

        }
    })
})

