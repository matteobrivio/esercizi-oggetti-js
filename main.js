// parte 1

// libro

let book = {
    name : "Il Signore degli Anelli",
    author: "J.R.R. Tolkien",
    publishingDate: 1954
}
console.log(`nome:${book.name} autore: ${book.author}`);
console.log(`nome:${book["name"]} autore: ${book["author"]}`);
book.genre = "Fantasy";
book.publishingDate = 1955;
console.log(book);

// studente

let student = {
    name: "Matteo",
    surname: "Brivio",
    toGreat:function(){
        console.log(`Ciao, sono ${student.name} ${student.surname}`);
    }
}
student.toGreat();
// parte 2

// carrello

let kart = {
    products:[],
    addProduct:function(product){
        this.products.push(product);
    },
    showKart:function(){
        console.log(this.products);
    }
}
kart.addProduct("Shoes");
kart.addProduct("Bike");
kart.showKart();

// classe persona

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        console.log(`mi chiamo ${this.name} e ho ${this.age} anni`);
    }
}
let persona = new Person("Matteo", 29);
persona.introduce();
console.log(persona);

// animale

class Animal{
    constructor(name,sound){
        this.name=name;
        this.sound=sound;
    }
    verso(){
        console.log(`il ${this.name} fa un verso`);
    }
}

let cane = new Animal("Cane");
cane.verso();
console.log(cane);

class Cat extends Animal
{
    verso(){
        console.log(`il ${this.name} miagola`);
    }
}

let gatto = new Cat("gatto", "miao");
gatto.verso();
console.log(gatto);

// terza parte

// date

let birthDay = new Date("1995-04-15");
console.log(birthDay.getFullYear());
console.log(birthDay.getMonth());
console.log(birthDay.getDate());


let today = new Date();
let data = new Date(today);
data.setDate(today.getDate()+7);
console.log(data);

// giocatore

let giocatore = {
    score:1
}
let giocatore2 = giocatore;
giocatore2.score = 2;
let giocatore3 = {...giocatore};
console.log(giocatore,giocatore2,giocatore3);

// sconto


try{
    function priceDiscout(price, discount){
        console.log(price-(price*discount)/100);
        if(discount<0 || discount>100){
            throw new Error("Il valore dello sconto deve essere compreso tra 0 e 100.");}

    }
    priceDiscout(100,10);
    
}catch{
    console.log("Il valore dello sconto deve essere compreso tra 0 e 100.");
}

// function priceDiscount(price, discount) {                        Correzione del bro chatgpt
//     try {
//         if (discount < 0 || discount > 100) {
//             throw new Error();
//         }
//         console.log(price - (price * discount) / 100);
//     } catch (error) {
//         console.log("Errore:", error.message);
//     }
// }


