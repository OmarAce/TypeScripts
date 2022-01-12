INSERT INTO typescript (prompt)
VALUES
("const helloWorld = 'Hello World';
let hiWorld = 'Hi World'; // this is a string because it is let

// This function takes all strings
declare function allowsAnyString(arg: string);
allowsAnyString(helloWorld);
allowsAnyString(hiWorld);

// This function only accepts the string literal 'Hello World'
declare function allowsOnlyHello(arg: 'Hello World');
allowsOnlyHello(helloWorld);
allowsOnlyHello(hiWorld);"), ("// Typically an array contains zero to many objects of a
// single type. TypeScript has special analysis around
// arrays which contain multiple types, and where the order
// in which they are indexed is important.

// These are called tuples. Think of them as a way to
// connect some data, but with less syntax than keyed objects.

// You can create a tuple using JavaScript's array syntax:

const failingResponse = ['Not Found', 404];

// but you will need to declare its type as a tuple.

const passingResponse: [string, number] = ['{}', 200];")