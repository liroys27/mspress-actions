// Simple test file
console.log('Running tests...');

// Basic test 1: Check if the app starts correctly
const testResults = [];

try {
  // Test that we can require the module
  const app = require('./index.js');
  testResults.push('✓ Application loads successfully');
} catch (error) {
  testResults.push('✗ Failed to load application');
}

// Test that Node version is 14 or higher
const nodeVersion = parseInt(process.version.substring(1).split('.')[0]);
if (nodeVersion >= 14) {
  testResults.push(`✓ Node.js version ${process.version} is compatible`);
} else {
  testResults.push(`✗ Node.js version ${process.version} is too old`);
}

// Display results
console.log('\nTest Results:');
testResults.forEach(result => console.log(result));

// Exit with success if all tests passed
const allPassed = testResults.every(result => result.startsWith('✓'));
process.exit(allPassed ? 0 : 1);
