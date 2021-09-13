class Employee{
    constructor(prodName,category,price,jumlahBeli,subTotal){
        this.prodName = prodName;
        this.category = category;
        this.price = price;
        this.jumlahBeli = jumlahBeli;
        let.subTotal = subTotal;
    }
    toString(){
        let subTotal = price * jumlahBeli;
        return `${this.prodName} ${this.category} price = Rp.${this.price} ${this.jumlahBeli} ${subTotal}}`
    }
}
const prodId1 = new Employee("SamsungA1","HP",2500000,3);
const prodId2 = new Employee("Dell Ultrabook","COMPUTER",7850000,2);
const prodId3 = new Employee("Mesin Cuci LG","ELECTRONIC",3500000);
const prodId4 = new Employee("Iphone 12","HP",6000000,2);
const prodId5 = new Employee("Asus Laptop","COMPUTER",6500000,4);

const listEmployee = [prodId1,prodId2,prodId3,prodId4,prodId5];


console.log();