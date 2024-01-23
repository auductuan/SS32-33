function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isAvailable = true;
    
      this.borrow = function() {
      this.isAvailable ? (this.isAvailable = false, console.log(`Đã mượn sách: ${this.title}`)): 
      console.log(`Sách ${this.title} không khả dụng để mượn`);
    };
    this.returnBook = function() {
      !this.isAvailable ? (this.isAvailable = true, console.log(`Đã trả sách: ${this.title}`)) : 
      console.log(`Sách ${this.title} đã ở trong trạng thái trả`);
    };
  }

  function Library() {
    this.books = [];
    this.isBookAvailable = function(bookTitle) {
      const book = this.books.find(book => book.title === bookTitle);
      return book ? book.isAvailable : (console.log(`Không tìm thấy sách: ${bookTitle}`), false);
    };

    this.addBook = function(book) {
      this.books.push(book);
      console.log(`Đã thêm sách vào thư viện: ${book.title}`);
    };
  }
  
  let library = new Library();
  let book1 = new Book('Sách 1', 'Tác giả A', 2020);
  let book2 = new Book('Sách 2', 'Tác giả B', 2018);
  let book3 = new Book('Sách 3', 'Tác giả C', 2022);

  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);

  book1.borrow();
  book2.borrow();
  book2.returnBook();
  
  console.log('Sách 1 có sẵn để mượn:', library.isBookAvailable('Sách 1'));
  console.log('Sách 2 có sẵn để mượn:', library.isBookAvailable('Sách 2'));
  console.log('Sách 3 có sẵn để mượn:', library.isBookAvailable('Sách 3'));
  