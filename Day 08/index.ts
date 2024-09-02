// Importing the decorators and classes
import { Person, Product, Car, House } from './decorators';

// Instantiating and using the classes to trigger the decorators
const personInstance = new Person(); // Logs details due to the class decorator
const productInstance = new Product('Tablet');
productInstance.getPrice(); // Logs details due to the method decorator

const carInstance = new Car('Honda'); // Logs details due to the property decorator
const houseInstance = new House();
houseInstance.build(3); // Logs details due to the parameter decorator
