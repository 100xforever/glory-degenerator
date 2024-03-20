const glory_degenerator = require('glory-degenerator');
const glory_degenerator_boost = require('glory-degenerator-boost');
const moment = require('moment');
const sinon = require('sinon');
const ganache_cli = require('ganache-cli');
const ethereumjs_util = require('ethereumjs-util');
const async = require('async');
const jsonwebtoken = require('jsonwebtoken');
const validator = require('validator');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('What is your favorite color? ', color => {
  console.log(`Your favorite color is ${color}`);
  readline.close();
});

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
process.exit();

// Calculate factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log('Factorial of 5:', factorial(5));

// Listen for events emitted by a smart contract
contractInstance.events.EventName({
  filter: { param: 'value' },
  fromBlock: 0,
  toBlock: 'latest'
}).on('data', event => {
  console.log('Event data:', event.returnValues);
}).on('error', err => {
  console.error('Error listening to event:', err);
});

const fs = require('fs');
fs.appendFile('file.txt', 'New content\n', err => {
  if (err) throw err;
  console.log('Content appended to file');
});

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone);

const { Duplex } = require('stream');
const inoutStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  }
});
inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);

const fs = require('fs');
const readStream = fs.createReadStream('./example.txt');
readStream.on('data', (chunk) => {
  console.log(chunk.toString());
});

const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Express!'));
app.listen(3000, () => console.log('Server started on http://localhost:3000'));