const net = require("net");
const {IP, PORT} = require('./constants');
const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log("Connected successfully.");
    r1.question("What is your name? ", (name) => {
      conn.write("Name: " + name);
      readline.moveCursor(process.stdout, 0, -1);
    });
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = {connect};