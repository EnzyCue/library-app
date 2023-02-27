// function Book(title, author, numOfPages, isRead) {
//     this.title = title;
//     this.author = author;
//     this.numOfPages = numOfPages;
//     this.isRead = isRead;

//     this.hasBeenRead = ()=> {
//         return (this.isRead) ? 'has been read.' : 'has not been read yet.';
//     }
//     this.info = ()=> {
//         return(`${this.title} by ${this.author}, ${this.numOfPages} pages, ${this.hasBeenRead}`);
//     }

// }

class Book {
    constructor(title, author, numOfPages, isRead){
        this.title = title;
        this.author = author;
        this.numOfPages = numOfPages;
        this.isRead = isRead;
    }


    hasBeenRead() {
        return (this.isRead) ? 'has been read.' : 'has not been read yet.';
    }

    get read() {
        return this.isRead;
    }

    set read(set) {
        this.isRead = set;
    }

    info = ()=> {
        return(`${this.title} by ${this.author}, ${this.numOfPages} pages, ${this.hasBeenRead()}`);
    }

}

const myLibrary = [];

addInitialBooks();

function addBookToLibrary(book){
    index = myLibrary.length + 1;

    const mainContent = document.querySelector('.mainContainer');

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index;

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    card.appendChild(titleContainer);

    addTitle(book, titleContainer, card);

    addremoveCardButton(book, titleContainer,  card);

    addAuthor(book, card);

    addNumOfPages(book, card);

    addIsRead(book, card);

    mainContent.appendChild(card);
    myLibrary.push(book);
}

function addTitle(book, container, card){
    const title = document.createElement('p');
    title.textContent =  book.title;
    title.classList.add('title');
    container.appendChild(title);
}

function addremoveCardButton(book, container, card){
    const button = document.createElement('button');
    button.classList.add('removeCardButton');

    const index = myLibrary.length + 1;

    button.dataset.index = index;  
    
    const cancelSvg = document.createElement('img');
    cancelSvg.setAttribute('src', 'close.svg');
    cancelSvg.classList.add('cancelSvg');

    button.appendChild(cancelSvg);
    container.appendChild(button);

    setupRemoveCardButtonEventListener(button);
}

function setupRemoveCardButtonEventListener(button){
    button.addEventListener('click', () => {
        let index = button.dataset.index;
        console.log(index + ' removed');

        const mainContainer = document.querySelector('.mainContainer');
        const cardToRemove = document.querySelector(`.card[data-index="${index}"]`);

        mainContainer.removeChild(cardToRemove);
    })
}

function addIsRead(book, card){
    const button = document.createElement('button');
    button.classList.add('readButton');
    const index = myLibrary.length + 1;

    button.dataset.index = index;

    button.textContent = 'This book ' + book.hasBeenRead();
    button.classList.add('isRead');
    card.appendChild(button);
    setupReadButton(button);
}

function addNumOfPages(book, card) {
    const numOfPages = document.createElement('p');
    numOfPages.textContent = 'Number of Pages: ' + book.numOfPages;
    numOfPages.classList.add('numOfPages');
    card.appendChild(numOfPages);
}

function addAuthor(book, card) {
    const author = document.createElement('p');
    author.textContent = 'by ' + book.author;
    author.classList.add('author');
    card.appendChild(author);
}

function addInitialBooks(){
    addBookToLibrary(new Book('Life of a Pie', 'Gordon Ramsay', '3149', true));
    addBookToLibrary(new Book('Shronk', 'Simon Baldwick', '78', true));
    addBookToLibrary(new Book('How to write code good', 'The Good Coder', '289', true));
    addBookToLibrary(new Book('How to get a job', 'Anonymous', '15', false));
}


const superContainer = document.querySelector('.superContainer');
const form = document.querySelector('form');
const cancelButton = document.querySelector('.cancelButton');
const submitButton = document.querySelector('.submitButton');



const newBookButton = document.querySelector('.newBookButton');
newBookButton.addEventListener('click', () => {
    form.style.visibility = 'visible';
    superContainer.style.filter = 'blur(5px)';
})

cancelButton.addEventListener('click', () => {
    form.style.visibility = 'hidden';
    superContainer.style.filter = 'none';
})

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const numOfPages = document.querySelector('#numOfPages');
const isRead = document.querySelector('#isRead');


submitButton.addEventListener('click', () => {

    addBookToLibrary(new Book(title.value, author.value, numOfPages.value, isRead.checked));
    form.reset();
    form.style.visibility = 'hidden';
    superContainer.style.filter = 'none';

})


function setupReadButton(button) {
    button.addEventListener('click', () => {
        let myIndex = button.dataset.index - 1;
        let isRead = myLibrary[myIndex].read;
        if (isRead == true) {
            myLibrary[myIndex].isRead = false;
            console.log('changing read to false');
        } else if (isRead == false){
            myLibrary[myIndex].isRead = true;
            console.log('changing read to true');
        }
        button.textContent = 'This book ' + myLibrary[myIndex].hasBeenRead();
    })
}
