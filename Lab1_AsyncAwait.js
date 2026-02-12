// Lab1_AsyncAwait.js
// Async/Await pattern (BEST WAY)

const fs = require('fs').promises;

async function readEventFile(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8');
    console.log('✅ File read successfully!');
    const event = JSON.parse(data);
    return event;
  } catch (error) {
    console.log('❌ Error:', error.message);
    throw error;
  }
}

async function main() {
  try {
    console.log('Starting to read event...\n');
    const event = await readEventFile('sample.txt');
    console.log('Event data:', event);
    console.log('\n✅ Complete!');
  } catch (error) {
    console.log('❌ Something went wrong:', error.message);
  }
}

main();
