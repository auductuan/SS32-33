let product = {
    id: 1,
    name: 'Quat',
    price: 100.000,
    quantity: 100,
};

for(let key in product){
    console.log(key + ': ' + product[key]);
}
