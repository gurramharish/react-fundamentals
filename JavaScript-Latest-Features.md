# Next-Gen JavaScript

## let & const

## Exports and Imports

1. Export samples:

   ```typescript
   const person = {
     name: 'Json',
   };

   export default person;
   ```

   ```typescript
   export const clean = () =. {}
   export const baseData = 10
   ```

1. Imports for the above exports

   ```typescript
   import person from './person.ts';
   import prs from './person.ts'; // Imports default export from the file, Name in the receiving file is up to the consumer.

   import { clean, baseData as defaultValue } from './utility.ts'; // Named imports

   import * as util from './utility.ts'; // Importing all the exports into util alias
   ```

## Classes

1. Classes are blue print for objects.

   ```typescript
   class Person {
     constructor(name: string) {
       this.name = name;
     }
     name: string;
     call(): void {
       console.log(`Hello ${this.name}`);
     }
   }

   const person = new Person('harish');
   person.call();
   ```

## Spread and Rest Operators

1. Spread `...` is used to split up array elements OR object properties

    ```typescript
    const newArray = [...oldArray, 1, 2];
    const newObject = {...oldObject, name: 'Harish'}
    ```

1. Rest is used to merge a list of function arguments into an array

    ```typescript
    function(...args) {
        args.sort()
    }
    ```

## Destructuring

1. Easily extract array elements or object properties and store them in variables.

    ```typescript
    let [a, b] = [1, 2, 3];

    let {name} = {name: 'Harish'}

    let {name: myName} = {name: 'Sai Kumar'} // Giving different name to the name key after destructuring
    ```


