// console.log('hello world');

// Global Object

// The function will trigger after 3 secs

setTimeout(() => {
  console.log("Hi there!");
}, 3000); // 3 secs (3000ms)

let count = 0;

// The function will trigger every 2 secs

const timer = setInterval(() => {
  count = count + 2;
  console.log(`${count} seconds have passed`);
  if (count > 6) {
    clearInterval(timer);
  }
}, 2000); // 2 secs (2000ms)

console.log(__dirname);   // Outputs the file-path we are currently in
console.log(__filename);  // Outputs the file-path with the filename we are currently in
