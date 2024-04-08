console.log("start");

const req = fetch("https://jsonplaceholder.typicode.com");

req
  .then(() => {
    console.log("Data fetched successfully");
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

console.log("end");

fetch("https://jsonplaceholder.typicode.com")
  .then((res) => res.json())
  .then((data) => console.log(data));
