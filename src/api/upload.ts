import { Response } from "../type/response";
import { PreCheckResposne } from "../typeScript/upload";

export async function checkFile(hash: string) {
  const resp = await fetch(`/api/upload/check/${hash}`, {
    method: "post",
  });

  const response = JSON.parse(await resp.text()) as Response<PreCheckResposne>;

  //   console.log("====================================");
  //   console.log(response);
  //   console.log("====================================");

  return response;
}
