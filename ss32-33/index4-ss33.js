function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
  
    this.displayInfo = function() {
      console.log(`Title: ${this.title}, Author: ${this.author}, Published Year: ${this.publishedYear}`);
    };
  }

  function Library() {
    this.books = [];

    this.addBook = function(book) {
      this.books.push(book);
      console.log(`Đã thêm sách vào thư viện: ${book.title}`);
    };
  

    this.displayLibraryInfo = function() {
      console.log('Danh sách sách trong thư viện:');
      this.books.forEach(book => book.displayInfo());
    };
  }
  
 
  let library = new Library();
  

  let book1 = new Book('Sách 1', 'Tác giả A', 2020);
  let book2 = new Book('Sách 2', 'Tác giả B', 2018);
  let book3 = new Book('Sách 3', 'Tác giả C', 2022);
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  library.displayLibraryInfo();
  