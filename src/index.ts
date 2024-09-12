// import { queryParser } from "./typeScript/parse-query";

import { checkFile } from "./api/upload";
import { upload } from "./typeScript/upload";

// const query = queryParser(
//   "?type=edit&aid=B9877eFD-eA5E-2EFd-09C7-bFE4784ec24f"
// );

// console.log(query);
const input = document.createElement("input");
input.type = "file";
// input.setAttribute("")
const body = document.getElementsByTagName("body")[0];

input.multiple = true;

body.appendChild(input);

input.onchange = (event) => {
  const fileArray = Array.from(input.files || []);

  upload("/api/upload", fileArray, {
    limit: 1024 * 1024 * 10,
    spreadSize: 1024 * 1024 * 2,
    accept: ["jpeg", "zip", "mp4"],
    preCheck: async (hash) => {
      const result = await checkFile(hash);

      if (result.code === 0) {
        return result.data;
      }

      return null;
    },
  });
};
