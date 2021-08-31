class Book {
  constructor(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
  }

  read() {
    reurn`Estou lendo ${this.title}`
  }
}

let book = new Book('algoritmos : desmetificando', 'Luke', '410')

console.log(Book)
