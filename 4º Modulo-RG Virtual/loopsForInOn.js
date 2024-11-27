
// Explanation of for...in loop
// The for...in loop is used to iterate over the enumerable properties of an object.
// It loops through all the keys of the object, allowing you to access each key-value pair.
// Use it when you need to work with the keys of an object.

const exampleObject = { x: 1, y: 2, z: 5 };

for (const key in exampleObject) {
    if (exampleObject.hasOwnProperty(key)) { // Checks if the key is a direct property
        console.log(`${key}: ${exampleObject[key]}`); // Logs key-value pair
    }
}

// Explanation of for...of loop
// The for...of loop is used to iterate over iterable objects, such as arrays, strings, maps, etc.
// It directly provides the values of the iterable, making it ideal for arrays or lists.
// Use it when you only need the values from an iterable.

const exampleArray = [100, 200, 300];

for (const value of exampleArray) {
    console.log(value); // Logs each value in the array
}
