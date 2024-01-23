let books = [
    { id: 1, name: 'Book1', price: 20 },
    { id: 2, name: 'Book2', price: 30 },
    { id: 3, name: 'Book3', price: 25 },
  ];
  let name = prompt('Nhập tên tác giả:');
  let foundBook = null;
  for (let i = 0; i < books.length; i++) {
    if (books[i].name === name) {
      foundBook = books[i];
      break;
    }
  }
  if (foundBook !== null) {
    console.log('Đối tượng Book tìm được:', foundBook);
  } else {
    console.log('Không tìm thấy sách');
  }

  