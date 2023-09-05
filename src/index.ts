import { queryParser } from "./typeScript/parse-query";

const query = queryParser(
  "?type=edit&aid=B9877eFD-eA5E-2EFd-09C7-bFE4784ec24f"
);

console.log(query);
