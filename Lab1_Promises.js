// Lab1_Promises.js
// Promises are the modern way to handle async operations

const fs = require('fs').promises;

console.log('=== READING FILE WITH PROMISES ===\n');

function readEventFile(filename) {
  return fs.readFile(filename, 'utf8')
    .then(data => {
      try {
        return JSON.parse(data);
      } catch (err) {
        throw err;
      }
    })
    .catch(error => {
      console.log('❌ Error reading file:', error.message);
      throw error;
    });
}

// USING THE PROMISE:
readEventFile('sample.txt')
  .then(data => {
    console.log('✅ Successfully read file!');
    console.log('Data:', data);
  })
  .catch(error => {
    console.log('❌ Final error handler:', error.message);
  })
  .finally(() => {
    console.log('✅ Operation completed (either success or failure)');
  });

console.log('File reading started (promise created)...');
