const path = "ÍPruthvi's SHELL ~ ";
let redierctTo = '';
const symbol = "%";

const stringify = function (args) {
  return args.join(' ');
};

const getLastFolder = function (args) {
  return args[0].split('/').at(-1) + ' ';
};

const runCommand = function (commandString) {
  const [command, ...args] = commandString.split(' ');

  switch (command) {
    case "echo":
      return stringify(args);

    case "cd":
      return redierctTo = getLastFolder(args);

    case "pwd":
  }
};

const isValidCommand = function (command) {
  return command === undefined;
};

while (true) {
  const command = prompt(path + redierctTo + symbol);
  const executeCommand = runCommand(command);

  if (isValid(executeCommand)) {
    console.log("zsh: command not found: " + command);
  }

}