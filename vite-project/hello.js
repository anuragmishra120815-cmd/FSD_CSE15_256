const os = require("node:os");
console.log(os.hostname());
console.log("free memory: " + os.freemem());
console.log("total memory: " + os.totalmem());
console.log("platform: " + os.platform());
console.log("architecture: " + os.arch());
console.log("CPU info: " + JSON.stringify(os.cpus()));
console.log("home directory: " + os.homedir());
console.log("hostname: " + os.hostname());