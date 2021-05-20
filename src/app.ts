/* INTERSECTION TYPES */

// With Types

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Mauro',
    privileges: ['create-server'],
    startDate: new Date()
}

// With Interfaces

interface Admin2 {
    name: string;
    privilages: string[];
}

interface Employee2 {
    name: string;
    startDate: Date;
}

interface ElevatedEmployee2 extends Admin, Employee {};

const e2: ElevatedEmployee2 = {
    name: 'Mauro',
    privileges: ['create-server'],
    startDate: new Date()
}

/* TYPE GUARDS */

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Type guard using 'typeof' keyword
function add(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString + b.toString();
    }
    return a + b;
}

// Type guard using 'in' keyword
type UnknowEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknowEmployee){
    console.log('Name: ' + emp.name);
    
    // typeof emp -> 'object', typeof is not helpful    
    if('privileges' in emp){
        console.log('Privileges: ' + emp.privileges);
    }
    if('startDate' in emp){
        console.log('Start date: ' + emp.startDate);
    }    
}

printEmployeeInformation(e1);
printEmployeeInformation({name: 'Piero', startDate: new Date()});


// Type guard using classes and 'instaceof' keyword
class Car{
    drive(){
        console.log('Driving...');
    }
}

class Truck{
    drive(){
        console.log('Driving a truck...');
    }

    loadCargo(amount: number){
        console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();

    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);


// Type guard with Discriminated Unions
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch (animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving with speed: " + speed);
    
}

moveAnimal({type: 'bird', flyingSpeed: 10});


/* TYPE CASTING */

const paragraph = document.getElementById('message-output');

// Alternative 1
const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // "!" to ensure it is not null
userInputElement.value = "Hello";

// Alternative 2
const userInputElement2 = document.getElementById('user-input')! as HTMLInputElement;
userInputElement2.value = "Hello";


/* INDEX PROPERTIES */

interface ErrorContainer {
    [prop: string]: string
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
}


/* FUNCTION OVERLOADS */

function addFn(a: number, b: number): number
function addFn(a: string, b: string): string
function addFn(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString + b.toString();
    }
    return a + b;
}

const res1 = addFn(1, 2);
res1.toFixed;
const res2 = addFn('a', 'b');
res2.toUpperCase();

/* OPTIONAL CHAINING */

const fetchedUserData = {
    id: 'u1',
    name: 'Mauro',
    job: {title: 'Dev', description: 'Web developer'}
}

console.log(fetchedUserData?.job?.title);