const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, EXIT, MESSAGES } = require("./constants");

let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === EXIT) {
    process.stdout.write('\n');
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
    process.stdout.write('\033[2K' + '\rYou moved UP');
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
    process.stdout.write('\033[2K' + '\rYou moved LEFT');
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
    process.stdout.write('\033[2K' + '\rYou moved DOWN');
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
    process.stdout.write('\033[2K' + '\rYou moved RIGHT');
  }
  if (MESSAGES[key]) {
    connection.write("Say: " + MESSAGES[key]);
    process.stdout.write('\033[2K' + '\rYou said: ' + MESSAGES[key]);
  }
};

module.exports = {setupInput, handleUserInput};