// * ================= Homework: EVENTS =================
import { EventEmitter } from "node:events";
// ? ================= Masala1 =================
// const eventEmitter1 = new EventEmitter();
// eventEmitter1.on("hello", (message) => {
//   console.log(message);
// });
// eventEmitter1.emit("hello", "Assalomu alaykum!");
// ? ================= Masala1 =================

// ? ================= Masala2 =================
class Counter extends EventEmitter {
  constructor() {
    super();
    this.count = 0;

    this.on("increment", () => {
      this.count++;
      console.log(`Joriy qiymat: ${this.count}`);
    });
  }
  increment() {
    this.emit("increment");
  }
  getCount() {
    return this.count;
  }
}
const counter = new Counter();
// counter.increment()
// counter.increment()
// counter.increment()
// ? ================= Masala2 =================

// ? ================= Masala3 =================
// const eventEmitter3 = new EventEmitter();
// eventEmitter3.once("start", (message) => {
//   console.log(message);
// });
// eventEmitter3.emit("start", "start event");
// eventEmitter3.emit("start", "start event");
// ? ================= Masala3 =================

// ? ================= Masala4 =================
// const eventEmitter4 = new EventEmitter();
// eventEmitter4.on("message", (message) => {
//   console.log(message);
// });
// eventEmitter4.emit('message','Salom FN3')
// ? ================= Masala4 =================

// ? ================= Masala5 =================
class TestEmitter extends EventEmitter {
  constructor() {
    super();
    this.testHandler = (data) => {
      console.log(`Test eventi ishladi: ${data}`);
    };
  }

  testniYoqish() {
    this.on("test", this.testHandler);
    console.log("Test eventi yoqildi");
  }

  testniOchirish() {
    this.removeListener("test", this.testHandler);
    console.log("Test eventi ochirildi");
  }
}

const emitter = new TestEmitter();
// emitter.testniYoqish();
// emitter.emit("test", "Ma'lumot");
// emitter.testniOchirish();
// emitter.emit("test", "Ma'lumot");
// ? ================= Masala5 =================

// * ================= Homework: EVENTS =================

// * ================= Homework: STREAMS =================
import path from "node:path";
import fs from "node:fs";
// ? ================= Masala6 =================
// const readStream6 = fs.createReadStream(
//   path.join(process.cwd(), "katta_fayl.txt"),
//   "utf-8"
// );
// readStream6.on("data", (chunk) => {
//   console.log(chunk);
// });
// readStream6.on("end", () => {
//   console.log("readed file");
// });
// ? ================= Masala6 =================

// ? ================= Masala7 =================
// const writeStream = fs.createWriteStream("output.txt");

// console.log("Matn kiriting (to'xtatish uchun Ctrl+C bosing):");

// process.stdin.on("data", (data) => {
//   writeStream.write(data);
// });

// process.on("SIGINT", () => {
//   writeStream.end();
//   console.log("\nFaylga yozish yakunlandi");
//   process.exit();
// });
// ? ================= Masala7 =================

// ? ================= Masala8 =================
// const readStream8 = fs.createReadStream(path.join(process.cwd(), "output.txt"));
// const writeStream8 = fs.createWriteStream(
//   path.join(process.cwd(), "output_copy.txt")
// );
// readStream8.pipe(writeStream8);
// ? ================= Masala8 =================
import { Transform } from "node:stream";
// ? ================= Masala9 =================
// const readStream9 = fs.createReadStream(path.join(process.cwd(), "sonlar.txt"));
// const writeStream9 = fs.createWriteStream(path.join(process.cwd(), "juft.txt"));
// const transform = new Transform({
//   transform: function (chunk, encoding, callbackFn) {
//     callbackFn(
//       null,
//       chunk
//         .toString("utf-8")
//         .split("")
//         .filter((value) => value % 2 == 0)
//         .join("")
//     );
//   },
// });

// readStream9.pipe(transform).pipe(writeStream9);
// ? ================= Masala9 =================

// ? ================= Masala10 =================
// let path10 = path.join(process.cwd(), "katta_fayl.txt");
// const readStream10 = fs.createReadStream(path10, "utf-8");
// readStream10.on("data", (chunk) => {
//   fs.stat(path10, (err, data) => {
//     console.log("file size: ", data.size, " bayte");
//   });
// });
// ? ================= Masala10 =================

// * ================= Homework: STREAMS =================
