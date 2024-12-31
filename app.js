// import fs from "node:fs";
// import fsP from "node:fs/promises";
// import path from "node:path";

// const dataPath = path.join(process.cwd(), "users.json");
// fsP
//   .readFile(dataPath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((data) => console.log("Xatolik"));

// * stream : (protocal: (TCP:100%  and UTP: 'd..d..d.d'))

import { EventEmitter } from "node:events";
import { Stream } from "node:stream";
const eventEmitter = new EventEmitter();