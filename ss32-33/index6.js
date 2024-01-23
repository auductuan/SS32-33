let products = [
    { id: 1, product_name: 'Iphone 11', price: 500 },
    { id: 2, product_name: 'Iphone 12', price: 700 },
    { id: 3, product_name: 'Cục gạch', price: 80 },
  ];
  function a(productList) {
    return productList.sort((a, b) => a.price - b.price);
  }
  let b = a(products);
  console.log('Danh sách products sau khi sắp xếp tăng dần theo giá:');
  console.log(b);
  
