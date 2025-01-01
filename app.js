// import fsP from "node:fs/promises";
// import fs from "node:fs";
// import path from "node:path";

// const dataPath = path.join(process.cwd(), "users.json");
// fsP
//   .readFile(dataPath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((data) => console.log("Xatolik"));

// * stream : (protocal: (TCP:100%  and UTP: 'd..d..d.d'))

// import { EventEmitter } from "node:events";
// import { Stream } from "node:stream";
// const eventEmitter = new EventEmitter();

// eventEmitter.on("typing", (message) => {
//   console.log(message);
// });

// eventEmitter.emit("typing", "Hello world");
// eventEmitter.emit("typing", "Hello world");

import fs from "node:fs";
import path from "node:path";
import { Transform } from "stream";

// const readStream = fs.createReadStream(
//   path.join(process.cwd(), "users.json"),
//   "utf-8"
// );
// readStream.on("data", (chunk) => {
//   console.log(JSON.parse(chunk));
// });

// const readStream = fs.createReadStream(
//   path.join(process.cwd(), "users.json"),
//   "utf-8"
// );

// const writeStream = fs.createWriteStream(
//   path.join(process.cwd(), "users2.json")
// );

// readStream.pipe(writeStream)

// const readStream = fs.createReadStream(path.join(process.cwd(), "users.json"));
// const writeStream = fs.createWriteStream(
//   path.join(process.cwd(), "users2.json")
// );
// const transform = new Transform({
//   transform: function (chunk, encoding, callbackFn) {
//     callbackFn(null, chunk.toString("utf-8").toUpperCase());
//   },
// });

// readStream.pipe(transform).pipe(writeStream);

let a = "abcd".split("");
console.log(a);
