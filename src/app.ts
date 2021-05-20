/* INTERSECTION TYPES */

// With Types

type Admin = {
    name: string;
    privilages: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Mauro',
    privilages: ['create-server'],
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
    privilages: ['create-server'],
    startDate: new Date()
}