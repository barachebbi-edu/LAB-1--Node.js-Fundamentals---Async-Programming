// Lab1_BonusChallenges.js


const fs = require('fs').promises;

//BONUS 1 
// Test reading a file that does not exist

async function testErrorScenario() {
  try {
    console.log('Testing missing file...\n');

    const data = await fs.readFile('nonexistent.json', 'utf8');
    console.log(data);

  } catch (error) {
    console.log('Error caught:', error.message);
  }
}


//BONUS 2
// Simulate database delay

function simulateDatabaseQuery(delayMs) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Database result');
    }, delayMs);
  });
}

async function testDatabaseSimulation() {
  console.log('\nSimulating database query (2 seconds)...');

  const result = await simulateDatabaseQuery(2000);

  console.log(result);
}


//BONUS 3 
// Simple workflow with steps

async function complexWorkflow() {
  try {
    console.log('\nStarting workflow...\n');

    // Step 1: Create event file
    const event = {
      id: 99,
      title: 'Bonus Event',
      date: '2024-06-01'
    };

    await fs.writeFile('bonus_event.json', JSON.stringify(event, null, 2));
    console.log('Step 1: File created');

    // Step 2: Read file
    const fileData = await fs.readFile('bonus_event.json', 'utf8');
    const parsedEvent = JSON.parse(fileData);
    console.log('Step 2: File read');

    // Step 3: Wait 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Step 3: Wait finished');

    // Step 4: Save processed file
    parsedEvent.processed = true;
    await fs.writeFile('bonus_event_processed.json', JSON.stringify(parsedEvent, null, 2));
    console.log('Step 4: Processed file saved');

    // Step 5: Log completion
    await fs.appendFile('bonus_workflow.log', `Workflow completed at ${new Date().toISOString()}\n`);
    console.log('Step 5: Logged');

    console.log('\nWorkflow completed successfully!');

  } catch (error) {
    console.log('Workflow error:', error.message);
  }
}




async function main() {
  await testErrorScenario();
  await testDatabaseSimulation();
  await complexWorkflow();
}

main();
