/**
 * 上传文件数据格式工厂
 * @param token 该文件的token
 * @param name 文件名
 * @param size 完整文件大小,单位:字节
 * @param hash 该文件的完整hash
 * @param childHash 当前文件切片的hash
 * @param totalPort 总切片数
 * @param curPort 当前的切片位于总切片的次位
 * @param finish 是否传输完毕
 * @param fileSlice 文件切片
 * @returns
 */

export function uploadFactory(
  token: string,
  name: string,
  size: number,
  hash: string,
  childHash: string,
  totalPort: number,
  curPort: number,
  finish: boolean,
  fileSlice: File | Blob
) {
  return {
    token,
    name,
    size,
    hash,
    childHash,
    totalPort,
    curPort,
    finish,
    fileSlice,
  };
}
