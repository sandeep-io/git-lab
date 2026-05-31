let books = [];
let editIndex = -1;

const form = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    const book = {
        title: title,
        author: author
    };

    if (editIndex === -1) {
        books.push(book);
    } else {
        books[editIndex] = book;
        editIndex = -1;
    }

    form.reset();
    displayBooks();
});

function displayBooks() {
    bookList.innerHTML = "";

    books.forEach((book, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${book.title} - ${book.author}
            <button onclick="editBook(${index})">Edit</button>
            <button onclick="deleteBook(${index})">Delete</button>
        `;

        bookList.appendChild(li);
    });
}

function editBook(index) {
    document.getElementById("title").value = books[index].title;
    document.getElementById("author").value = books[index].author;

    editIndex = index;
}

function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}