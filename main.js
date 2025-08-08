const myLibrary = [];

function Book(title, author, pages){
    //book objects are going to be stored in an array
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = true;
    this.id = crypto.randomUUID();
    //has to return the book obj 
    //so that in addbook() it adds that obj to the array
}

Book.prototype.toggleStatus = function(){
    this.isRead = !this.isRead;
};

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
        card.classList.add("book-card");
        container.appendChild(card);
        const bookTitle = document.createElement("h2");
        bookTitle.textContent = myLibrary[i].title;

        const bookAuthor = document.createElement("h3");
        bookAuthor.textContent = myLibrary[i].author;

        const bookPages = document.createElement("p");
        bookPages.textContent = `${myLibrary[i].pages} pages`;

        const remove = document.createElement("button");
        remove.classList.add("remove-data");
        remove.textContent = "Remove";

        remove.addEventListener('click', (e) =>{
            const ele = e.target.parentElement;
            const bookId = ele.getAttribute("data-id");
            removeBookFromLibrary(bookId);
            display();
        });

        const status = document.createElement("button");
        status.textContent = `${myLibrary[i].isRead ? "Read" : "Not Read"}`;
        status.addEventListener('click', ()=> {
            myLibrary[i].toggleStatus();
            display();
        });
        card.setAttribute("data-id", myLibrary[i].id);
        card.append(bookTitle, bookAuthor, bookPages, remove, status);
        container.append(card);
    }
}
display();



function removeBookFromLibrary(bookId){
    const ind = myLibrary.findIndex( book => book.id === bookId);
    myLibrary.splice(ind, 1);

}

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
const submit = document.getElementById("submit");
submit.addEventListener('click', (e) => {
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    addBookToLibrary(title, author, pages);
    display();
    
});