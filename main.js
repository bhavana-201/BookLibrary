const myLibrary = [];

function Book(title, author, pages){
    //book objects are going to be stored in an array
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    //has to return the book obj 
    //so that in addbook() it adds that obj to the array
}

function addBookToLibrary(title, author, pages){
    //create a book from those arguments, 
    //and store the new book object into an array
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    console.log(myLibrary);
}
addBookToLibrary("harry potter", "J.K Rowling",400); 
addBookToLibrary("sherlock holmes", "someone",500);


function display(){
    const container = document.getElementById("book-container")
    container.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        //create new elements for every book
        //add data to that element
        const card = document.createElement("div");
        container.appendChild(card);
        const bookTitle = document.createElement("h3");
        bookTitle.textContent = myLibrary[i].title;

        const bookAuthor = document.createElement("h5");
        bookAuthor.textContent = myLibrary[i].author;

        const bookPages = document.createElement("p");
        bookPages.textContent = `${myLibrary[i].pages} pages`;

        container.append(bookTitle, bookAuthor, bookPages);
    }
}
display();

const dialog = document.querySelector('dialog');
const showForm = document.getElementById('new');
const closeDialog = document.getElementById('closeBtn');

showForm.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", () => {
    dialog.close();
});

const form = document.getElementById("form-submit");
form.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    addBookToLibrary(title, author, pages);
    display();
});