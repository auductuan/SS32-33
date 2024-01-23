let phoneBook = {
    number1: {
        name: "Alice",
        phone: "123-456-7890",
        email: "alice@example.com",
        displayInfo: function(){
            console.log("tên:",phoneBook.number1.name);
            console.log("Điện thoai:",phoneBook.number1.phone);
            console.log("Email:",phoneBook.number1.email);
            console.log("-------------------------");
        }   
    },
    number2: {
        name: "Bob",
        phone: "987-654-3210",
        email: "bob@example.com",
        displayInfo: function(){
            console.log("tên:",phoneBook.number2.name);
            console.log("Điện thoai:",phoneBook.number2.phone);
            console.log("Email:",phoneBook.number2.email);
            console.log("-------------------------");
        }
    },
};
for(let key in phoneBook){
    phoneBook[key].displayInfo();
}