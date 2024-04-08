// Higher-order function to apply a function to each element of an array
function mapArray(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]));
    }
    return result;
}

// Callback function to double a number
function double(num) {
    return num * 2;
}

const numbers = [1, 2, 3, 4, 5];

// Using the higher-order function with the callback function
const doubledNumbers = mapArray(numbers, double);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]



// Higher-order function to simulate an asynchronous operation
function fetchData(callback) {
    setTimeout(() => {
        const data = "This is some data from an asynchronous operation";
        callback(data);
    }, 2000);
}

// Callback function to handle the fetched data
function processData(data) {
    console.log("Processing data:", data);
}

// Using the higher-order function with the callback function
fetchData(processData);
console.log("Waiting for data...");
