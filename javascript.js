function Book(title, author, numOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;

    this.hasBeenRead = ()=> {
        return (isRead) ? 'has been read.' : 'has not been read yet.';
    }
    this.info = ()=> {
        return(`${title} by ${author}, ${numOfPages} pages, ${this.hasBeenRead()}`);
    }

}

const myLibrary = [];

function addBookToLibrary(book){
    myLibrary.push(book);
}

addBookToLibrary(new Book('Life of a Pi', 'Pi Baker', '3149', false));
addBookToLibrary(new Book('Shronk', 'Simon Baldwick', '78', true));
addBookToLibrary(new Book('How to write code good', 'The Good Coder', '289', false));
addBookToLibrary(new Book('How to write code bad', 'Anonymous', '15', true));
addBookToLibrary(new Book('Shronk 2', 'Simon Baldwick', '100', true));
addBookToLibrary(new Book('Shronk 3: The Finale', 'Simon Baldwick', '80', true));
addBookToLibrary(new Book('Shronk 4: A New World', 'Simon Baldwick', '60', false));

console.log(myLibrary);

function implementLibrary(library){
    const mainContent = document.querySelector('.mainContainer');

    for(let book of library) {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('p');
        title.textContent =  book.title;
        title.classList.add('title');
        card.appendChild(title);

        const author = document.createElement('p');
        author.textContent = 'by ' + book.author;
        author.classList.add('author');
        card.appendChild(author);

        const numOfPages = document.createElement('p');
        numOfPages.textContent = 'Number of Pages: ' + book.numOfPages;
        numOfPages.classList.add('numOfPages');
        card.appendChild(numOfPages);

        const isRead = document.createElement('p');
        isRead.textContent = 'This book ' + book.hasBeenRead();
        isRead.classList.add('isRead');
        card.appendChild(isRead);

        mainContent.appendChild(card);
    }
}

const button = document.querySelector('button');


implementLibrary(myLibrary);