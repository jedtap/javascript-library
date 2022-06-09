function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function openForm(){ overlay.style.display = "flex"; };
function closeForm(){ overlay.style.display = "none"; };

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  memory.clear();
  memory.setItem("myLibrary", JSON.stringify(myLibrary));
}


function clearForm(){
  title.value = "";
  author.value = "";
  pages.value = "";
  readForm.checked = false;
}

function emptyLibrary(){

}

function generateLibrary(){

  // This function's goal is to generate a bootstrap card for each book. HTML code:
  //  <div class="card" style="width: 18rem;">
  //     <div class="card-body">
  //      <h2 class="card-title">The Success Principles wefw</h2>
  //      <h3 class="card-subtitle mb-2 text-muted">Jack Canfield</h3>
  //      <p class="card-text">No. of pages: 69 </p>
  //      <input type="checkbox" checked>
  //      <label>Done reading?</label>
  //      <br>
  //      <p class="remove-link">
  //        <a href="#">Remove book</a>
  //      </p>
  //    </div>
  //  </div>

  for(var x in myLibrary){

    card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style","width: 18rem;")
    container.appendChild(card);
    
    cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    cardTitle = document.createElement("h2");
    cardTitle.appendChild(document.createTextNode(myLibrary[x].title));
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);

    cardSubtitle = document.createElement("h3");
    cardSubtitle.appendChild(document.createTextNode(myLibrary[x].author));
    cardSubtitle.setAttribute("class","card-subtitle mb-2 text-muted");
    cardBody.appendChild(cardSubtitle);

    cardText = document.createElement("p");
    cardText.appendChild(document.createTextNode("No. of pages: " + myLibrary[x].pages));
    cardText.classList.add("card-text");
    cardBody.appendChild(cardText);

    checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    // checkbox.setAttribute("onclick", "return false"); // you might want to explore this
    if (myLibrary[x].read){ checkbox.setAttribute("checked", true); }
    cardBody.appendChild(checkbox);

    checkboxLabel = document.createElement("label");
    checkboxLabel.appendChild(document.createTextNode("Done reading?"));
    cardBody.appendChild(checkboxLabel);

    linebreak = document.createElement("br");
    cardBody.appendChild(linebreak);
    
    removeLink = document.createElement("p");
    removeLink.classList.add("remove-link");
    cardBody.appendChild(removeLink);

    hyperlink = document.createElement("a");
    hyperlink.appendChild(document.createTextNode("Remove book"));
    hyperlink.setAttribute("href","#");
    removeLink.appendChild(hyperlink);
  }
}

function removeBook(){
  // Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

}


function changeRead(){
  // Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
}


// Initial variables

const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");
const openFormButton  = document.querySelector(".open-form");
const closeFormButton = document.querySelector(".close-form");
const submitForm = document.querySelector(".submit-form");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readForm = document.querySelector("#read-form");

let card, cardBody, cardTitle, cardSubtitle, cardText, checkbox, checkboxLabel, removeLink, hyperlink, linebreak;

let myLibrary = [];
let memory = window.localStorage;
if (memory.getItem("myLibrary")){
  myLibrary = JSON.parse(memory.getItem("myLibrary"));
  generateLibrary();
} 

// Open, close, and submit form
openFormButton.addEventListener("click", () => openForm());
closeFormButton.addEventListener("click", () => closeForm());
submitForm.addEventListener("click", () => {
  let newBook = new Book(title.value, author.value, pages.value, readForm.checked);
  addBookToLibrary(newBook);
  clearForm();
  emptyLibrary();
  generateLibrary();
  closeForm();
})

// next make generated checkbox user friendly
// refactor: change generateLibrary to initial library
// refactor: append the library if it is a new book