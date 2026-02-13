// Lab1_Callbacks.js 

const fs = require('fs');

function readEventFile(filename, callback) {
  fs.readFile(filename, 'utf8', (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      try {
        const eventData = JSON.parse(data);
        callback(null, eventData);
      } catch (parseError) {
        callback(parseError, null);
      }
    }
  });
}

// USING THE CALLBACK:
readEventFile('sample.txt', (error, data) => {
  if (error) {
    console.log('❌ Error:', error.message);
  } else {
    console.log('✅ Data:', data);
  }
});
