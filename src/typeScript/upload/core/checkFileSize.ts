type ErrorType = "sytax" | "limit" | "accept";

/**
 * checkRes：是否通过检查
 * resErrorType: 错误类型
 * msg：附加信息
 */

interface CheckResponse {
  checkRes: boolean;
  resErrorType?: ErrorType;
  msg: string;
}

/**
 * 检查文件是否符合上传要求
 * @param file 文件
 * @param limit 上传文件大小的限制
 * @param accept 接受文件的上传类型
 */

export default function (
  file: File,
  limit?: number,
  accept?: string[]
): CheckResponse {
  if (limit && file.size > limit) {
    // 文件超出限制的大小
    return {
      checkRes: false,
      resErrorType: "limit",
      msg: `size excess: you have limitted file size is ${limit}kb,but got ${file.size}kb，souce:${file.name}`,
    };
  }

  const fileType = file.type.split("/");

  if (accept && accept.length && !accept.includes(fileType[1])) {
    // 文件类型不符合
    return {
      checkRes: false,
      resErrorType: "accept",
      msg: `Type of the file have exclusive of range,source:${file.name}`,
    };
  }

  return {
    // 通过验证
    checkRes: true,
    msg: "check sccuessfully!!",
  };
}
