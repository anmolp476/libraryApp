//Model
let library = [];
let arrId = [];

function Book(title, author, numPages, readBook)
{
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.readBook = readBook;
}


function addBookToLibrary(inputTitle, inputAuthor, inputNumPages, inputReadBook)
{
    const book = new Book(inputTitle, inputAuthor, inputNumPages, inputReadBook)
    library.push(book);
}


let myBook = new Book("Testing Book", "Testing Author", "Testing numPages", "read");
let myBook2 = new Book("Another Book", "Another Author", "Another numPages", "not read");
let myBook3 = new Book("testing3", "author3", "numPages3", "read")

// addBookToLibrary(myBook);
// addBookToLibrary(myBook2);
// addBookToLibrary(myBook3);


//View
function render()
{
    let table = document.querySelector(".main-table");
    console.log("rendered");
    // console.log(library);
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
            newReadButtonValue = object.readBook;
            console.log(newReadButtonValue)
            newReadButton.innerText = newReadButtonValue.toUpperCase();
            newReadButton.style = "width: 100%; height: 36px;"

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

function addNewBook()
{
    let form = document.querySelector(".form")
    form.innerHTML = "";
    createForm(form);

    let submit = document.createElement("button");
    submit.type = "button";
    submit.textContent = "Submit";
    submit.onclick = submitButton;

    form.appendChild(submit);
    console.log("addNewBook()");
}


//Helper Functions
function createForm(form)
{
    for(let i = 0; i < 5; i++)
    {
        const random = Math.floor(Math.random()*9999);
        arrId.push(random);

    }

    console.log("createForm");
    const newTitle = document.createElement("h4");
    newTitle.innerText = "Title";
    newTitle.style = "margin-bottom: 0;";
    const titleInput = document.createElement("input");
    titleInput.id = arrId[0];

    const newAuthor = document.createElement("h4");
    newAuthor.innerText = "Author";
    newAuthor.style = "margin-bottom: 0;";
    const authorInput = document.createElement("input");
    authorInput.id = arrId[1];


    const numPages = document.createElement("h4");
    numPages.innerText = "# of Pages";
    numPages.style = "margin-bottom: 0;";
    const numPagesInput = document.createElement("input");
    numPagesInput.id = arrId[2];


    const isRead = document.createElement("h4");
    isRead.innerText = "Have you read the book?(read/not read)";
    isRead.style = "margin-bottom: 0;";
    const isReadInput = document.createElement("input");
    isReadInput.id = arrId[3];

    console.log(isReadInput.id, numPagesInput.id, authorInput.id, titleInput.id);

    form.appendChild(newTitle);
    form.appendChild(titleInput);
    form.appendChild(newAuthor);
    form.appendChild(authorInput);
    form.appendChild(numPages);
    form.appendChild(numPagesInput);
    form.appendChild(isRead);
    form.appendChild(isReadInput);
}   

function submitButton()
{
    library = [];
    console.log("submitButton()")
    let title =  document.getElementById(arrId[0]);
    let author =  document.getElementById(arrId[1]);
    let numPages = document.getElementById(arrId[2]);
    let readBook = document.getElementById(arrId[3]);

    console.log(title);
    console.log(author);
    console.log(numPages);
    console.log(readBook);
    addBookToLibrary(title.value, author.value, numPages.value, readBook.value)

    console.log(library)
    render();
}

















