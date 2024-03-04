import crypto from "crypto-js";
import { parseSize } from "./parseSize";
import fileSlice from "../core/fileSlice";

export async function createHash(file: File | Blob, slice?: number) {
  slice = slice ? slice : 1024 * 1024 * 2; // 默认2M

  if (file.size < slice) {
    const buffer = fileConversery(await file.arrayBuffer());

    const hash = crypto.SHA256(buffer).toString();

    return hash;

    // return crypto.lib
  }

  const array = fileSlice(file, slice);

  const algo = crypto.algo.SHA256.create();

  for (let i = 0; i < array.length; i++) {
    const buffer = fileConversery(await array[i].arrayBuffer());

    algo.update(buffer);
  }

  return algo.finalize().toString();
}

function fileConversery(file) {
  return crypto.lib.WordArray.create(file);
}
