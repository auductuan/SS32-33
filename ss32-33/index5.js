let books = [
    { author: 'Author1', name: 'Book1' },
    { author: 'Author2', name: 'Book2' },
    { author: 'Author3', name: 'Book3' },
  ];
  let userInput = prompt('Nhập tên tác giả:');
  let book2 = null;
  for (let i = 0; i < books.length; i++) {
    if (books[i].author === userInput) {
      book2 = books[i];
      break;
    }
  }
  if (foundBook !== null) {
    console.log('Đối tượng Book tìm được:', book2);
  } else {
    console.log('Không tìm thấy sách');
  }

  