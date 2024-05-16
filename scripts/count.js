const slocjs = require("slocjs");

const lines = slocjs.countLinesInDir("./src");
const lines2 = slocjs.countLinesInDir("./posts");
console.log(lines, lines2);
