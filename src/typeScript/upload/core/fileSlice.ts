/**
 * 对文件进行切分
 * @param file 需要切割的文件
 * @param size 切片的最大的大小，单位kb
 */

export default function (file: File, size: number) {
  const portion = Math.ceil(file.size / size); // 切片分数

  let array: Blob[] = [];

  for (let i = 0; i < portion; i++) {
    const data = file.slice(i * size, i * size + size);
    array.push(data);
  }

  return array;
}
