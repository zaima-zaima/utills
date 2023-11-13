import checkFileSize from "./core/checkFileSize";
import fileSlice from "./core/fileSlice";

export type UploadMethod = "formData";

export type UploadNetMethod = "GET" | "POST" | "PUT" | "DELETE";

interface PreCheckResposne {
  done: boolean;
  progress: number;
  filename: number;
  key: string;
}

/**
 * uploadMethod 上传方式，默认为formData
 * limit：文件限制大小，默认不限制,单位kb
 * spreadSize ：每个文件分段最大数值,默认为0(不分段)，单位kb
 * name:name字段，当上传方式为formData时必填
 * accept: 允许被上传的文件的类型
 */

interface UploadOption {
  uploadMethod?: UploadMethod;
  name?: string;
  limit?: number;
  spreadSize?: number;
  accept?: string[];
  method?: UploadNetMethod;
  preCheck?: (file: File) => PreCheckResposne;
}

export function upload(url: string, file: File[], option?: UploadOption): void;

export function upload(url: string, file: File[], option?: UploadOption): void {
  // 检查上传的文件组中的文件是否都满足条件

  for (let i = 0; i < file.length; i++) {
    const result = checkFileSize(file[i], option?.limit, option?.accept);

    if (!result.checkRes) {
      throw Error(result.msg);
    }
  }
  // 对文件进行切割
  let array: Array<Blob[]> = [];
  for (let i = 0; i < file.length; i++) {
    if (
      !option ||
      (option && (!option.spreadSize || option.spreadSize === 0))
    ) {
      // 不需要切片
      array.push([file[i]]);

      continue;
    }
    //   // 每个切片数组
    const blobData = fileSlice(file[i], (option && option.spreadSize) || 0);
    array.push(blobData);
  }

  console.log("====================================");
  console.log(array);
  console.log("====================================");
}
