// import disk from "diskusage";
import net from "net";
import fs from "fs";

(async function () {
  const root = await fs.readdirSync("/");
  root.forEach((item) => {
    console.log("====================================");
    console.log(item);
    console.log("====================================");
  });
})();

// import { exec } from "child_process";

// console.log("====================================");
// const list = exec("ifconfig", (err, msg) => {
//   console.log("====================================");
//   //   console.log(msg);
//   console.log("====================================");
// });

// console.log("=========sss===========================");
// // console.log();
// console.log("====================================");

// console.log(os.cpus().length);
// console.log(os.totalmem() / 1024 / 1024 / 1024);
// console.log("====================================");

// console.log("====================================");
// console.log((os.freemem() / os.totalmem()) * 100 + "%");
// console.log("====================================");

// ===========================================================

// import sysInfo from "systeminformation";

// const disk = sysInfo.getAllData().then((data) => {
//   console.log("====================================");
//   console.log(data);
//   console.log("====================================");
// });
