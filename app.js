// OOB 
// Object interacting one another to use complex application 

//Constructor and Instances *class  
// to make your life coding more convinient since you dont need to repeat the same 
//kind of format all over again. 

const Person = ['Carl', 'Abe', 'Tin', 'Ben', 'Kurt']; //array of person. 

//INHERITANCE 
// The Student is also part of the Person then we will inherit those parameters of the person to student. 

// Prototype properties and prototype chains 
// Person --> Prototype "CalculateAge()"
// function inside object. 

//Function constructor 

let john = { 
    name:'John',
    yearOfBirth: 1990,
    job: 'teacher',
};



let Persons = function(name, yearOfBirth,job){ //creating object Person 
    this.name = name; 
    this.yearOfBirth = yearOfBirth;
    this.job = job;
   
}

Persons.prototype.calculateAge =
 function () {
    console.log (2021 - this.yearOfBirth);
    
};

Persons.prototype.isStudent = 
function (){
    let age = (2021 - this.yearOfBirth);
   
    if (age <= 25){
        console.log('This person is a student!');
        
    } else {
        console.log('Not a Student')
       
    }
    
};



let John = new Persons ('John Cena', 1990, 'teacher'); // create instance John.
let Jade = new Persons ('Jade Dela Cruz', 1998,'engineer');
let Mark = new Persons ('Mark Corpuz', 1995,'Computer Technician');
let Tin = new Persons ('Tin Alvares', 2000, 'Engineering');


console.log(John.job);
console.log(Jade);

John.calculateAge();
Jade.calculateAge();
Mark.calculateAge();

Mark.isStudent();
Tin.isStudent();
John.isStudent();
Jade.isStudent();


//ITEMS RECEIVED 

let Items = function(name,serialNo,quantity,dateDelivered,expiration){
    this.name = name;
    this.serialNo = serialNo;
    this.quantity = quantity;
    this.dateDelivered = dateDelivered;
    this.expiration = expiration;
};

Items.prototype.isExpire = 
function() {
    let  yearleft = this.expiration - 2021;
     if (yearleft < 0) { 
        console.log('NOTICED:This item is already expired! last ' + this.expiration);
    } else {
        console.log('REMINDER that this items will expire in year ' + this.expiration);
    }
};

let Shoe1 = new Items('bans shoes', '1a2b3c', 30, 'November 2020', 2022);
let Bed1 = new Items('queens bed','152ab12', 5, 'December 2015', 2019);

console.log(Shoe1);
Shoe1.isExpire();
Bed1.isExpire();

Shoe1.expiration = 2025;
console.log(Shoe1);