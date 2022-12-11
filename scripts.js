let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').value

    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

function publishLibrary() {
    const library = document.getElementById('library')

    // Clear the library element
    library.innerHTML = ''

    for (const book of myLibrary) {
        const template = document.getElementById('book-template')
        const bookTemplate = template.content.cloneNode(true)

        const bookTitle = bookTemplate.querySelector('#book-title')
        const bookAuthor = bookTemplate.querySelector('#book-author')
        const bookPages = bookTemplate.querySelector('#book-pages')

        bookTitle.textContent = book.title
        bookAuthor.textContent = book.author
        bookPages.textContent = book.pages

        library.appendChild(bookTemplate)
    }

    
    
}

document.getElementById('submit').addEventListener('click', addBookToLibrary);
document.getElementById('submit').addEventListener('click', publishLibrary);




/*

<div class="card">
                <p>"The Great Gatsby"</p>
                <p>F. Scott Fitzgerald</p>
                <p>333 pages</p>
                <button>Read</button>
                <button>Remove</button>
            </div>

            */

