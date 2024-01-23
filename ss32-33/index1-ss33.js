let man ={
    name: "tuan",
    age: 19,
    address: "Hà Nội",
};
console.log(man.name,man.age,man.address);
man.date = 25;
delete man.age;
console.log("sau khi sửa:",man.name,man.date,man.address);