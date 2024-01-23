function information(id, name, phone, address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
}
let id = +prompt("Nhập id");
let name = prompt("Nhập tên");
let phone = +prompt("Nhập SĐT");
let address = prompt("Nhập địa chỉ");
let a = new information(id, name, phone, address);
console.log(a);




