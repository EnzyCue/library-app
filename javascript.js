function Book(title, author, numOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;

    this.hasBeenRead = ()=> {
        return (isRead) ? 'has been read' : 'not read yet';
    }
    this.info = ()=> {
        return(`${title} by ${author}, ${numOfPages} pages, ${this.hasBeenRead()}`);
    }

}

const myLibrary = [];

function addBookToLibrary(book){
    myLibrary.push(book);
}

addBookToLibrary(new Book('life of a pi', 'pi baker', '314159', false));
addBookToLibrary(new Book('Shronk', 'Simon Baldwick', '78', true));
addBookToLibrary(new Book('How to write code good', 'Good Coder', '289', false));
addBookToLibrary(new Book('How to write code bad', 'Anonymous', '15', true));
addBookToLibrary(new Book('Shronk 2', 'Simon Baldwick', '100', true));
addBookToLibrary(new Book('Shronk 3', 'Simon Baldwick', '80', true));
addBookToLibrary(new Book('Shronk: A New World.', 'Simon Baldwick', '120', false));

console.log(myLibrary);

function implementLibrary(library){
    for(let i in library) {
        const card = document.createElement('div');
        card.classList.add('.card');

        const mainContent = document.querySelector('.mainContainer');
        mainContent.appendChild(card);
    }
}