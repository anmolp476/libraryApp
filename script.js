//Model
let library = [];

function Book(title, author, numPages, readBook)
{
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.readBook = readBook;
}


function addBookToLibrary (Book)
{
    library.push(Book);
}


let myBook = new Book("Testing Book", "Testing Author", "Testing numPages", "read");
let myBook2 = new Book("Another Book", "Another Author", "Another numPages", "not read");
let myBook3 = new Book("testing3", "author3", "numPages3", "read")

addBookToLibrary(myBook);
addBookToLibrary(myBook2);
addBookToLibrary(myBook3);


//View
function render()
{
    let table = document.querySelector(".main-table");
    if(Object.keys(library).length > 0)
    {
        library.forEach((object) =>
        {
            const newTableRow = document.createElement("tr");
            const newTitle = document.createElement("td");
            newTitle.innerText = object.title;
            newTitle.style = "text-align: center;"
            const newAuthor = document.createElement("td");
            newAuthor.innerText = object.author;
            newAuthor.style = "text-align: center;"
            const newNumPages = document.createElement("td");
            newNumPages.innerText = object.numPages;
            newNumPages.style = "text-align: center;"
            const newReadBook = document.createElement("td");
            const newReadButton = document.createElement("button");
            newReadButton.innerText = object.readBook.toUpperCase();
            newReadButton.style = "width: 100%;"
            table.appendChild(newTableRow);
            newTableRow.appendChild(newTitle);
            newTableRow.appendChild(newAuthor);
            newTableRow.appendChild(newNumPages);
            newTableRow.appendChild(newReadBook);
            newReadBook.appendChild(newReadButton);
        });
    }
}


render();















