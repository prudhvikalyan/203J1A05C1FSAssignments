//Task1
/*let a: number;
let b: string;
let c: boolean;
let d: number[];
let e: any[];*/
let a=10;
let b="this is a string";
let c=false;
let d=[1,2,3];
let e=[1,"hi",true];
enum days {sunday=1,monday=2,tuesday=3,wednesday=4,thursday=5,friday=6,saturday=7};
let day1 = days.sunday;
//Task2
let addition = (num1:number,num2:number)=>{
return num1+num2; 
}
let capitalize=(s:string)=>{
    let upper=s.toUpperCase();
    return upper;
}
console.log(addition(3,34));
console.log(capitalize("happy"));
//Task 3
//Interface person
interface Person{
   name:string;
    age:number;
   email:string;
}
let info= (person:Person)=>{
console.log("name="+person.name+",age="+person.age+",email="+person.email);
}
let user={name:'prudhvi',age:20,email:'something@gmail.com'};
info(user);
//Task4
class Car{
    make:string;
    model:string;
    year:number;
    displayInfo(){
        console.log("make="+this.make);
        console.log("model="+this.model);
        console.log("year="+this.year);
    }
}
let car = new Car();
car.make="Suzuki";
car.model="Swift";
car.year=2001;
car.displayInfo();
//Task5
let reverse=(arr)=>{
    for(let i=arr.length-1;i>=0;i--)
    {
        console.log(arr[i]);
    }
}
reverse([1,2,3,4,5]);




