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


const test = new Book('life of pis', 'pi baker', '314159', false);

console.log(test.info());

let myLibrary = [];

function addBookToLibrary(book){
    myLibrary.push(book);
}