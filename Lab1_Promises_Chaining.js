// Lab1_Promises_Chaining.js

const fs = require('fs').promises;

console.log('Starting to read files...');

fs.readFile('event1.json', 'utf8')
  .then(data1 => {
    console.log('✅ Read event1:', data1);
    return fs.readFile('event2.json', 'utf8');
  })
  .then(data2 => {
    console.log('✅ Read event2:', data2);
    return fs.readFile('event3.json', 'utf8');
  })
  .then(data3 => {
    console.log('✅ Read event3:', data3);
    console.log('✅ All files read in sequence!');
  })
  .catch(error => {
    console.log('❌ Error:', error.message);
  });
