// ++++++++++++++++++++++++++ Operatin System Module +++++++++++++++++++++++++++++++++++++//
// OS Module

// This include multiple methods to retrieve details about the operating system of a computer

const os = require('os')


console.log("CPU Architecture:" + os.arch())
// CPU Architecture:x64

console.log("Free Memory:" + os.freemem())
// Free Memory: 2687442944

console.log("Total Memory:" + os.totalmem())
// Total Memory:8358518784

console.log("Network Interface:" + os.networkInterfaces())
// Network Interface:[object Object]

console.log("OS Default Tempt Directory:" + os.tmpdir())

console.log("Endianness:" + os.endianness())

console.log("Hostname:" + os.hostname())

console.log("OS Type:" + os.type())

console.log("OS Platform:" + os.platform())

console.log("OS Release:" + os.release())