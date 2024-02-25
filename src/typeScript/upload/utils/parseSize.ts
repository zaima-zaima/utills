type Des = "Byte" | "kb" | "Mb" | "Gb" | "Tb";

/**
 * 将字节数转换为特定的格式
 * @param size 字节
 * @param des 目标单位
 * @param fixed 返回结果保留小数点位数，如果值为小于0时，则不对结果进行处理，阿照原格式返回，默认值为-1
 * @returns
 */

export function parseSize(size: number, des: Des, fixed?: number | undefined) {
  if (fixed === undefined) {
    fixed = -1;
  }

  switch (des) {
    case "Byte":
      return fixFactory(size, fixed);
    case "kb":
      return fixFactory(size / 1024, fixed);
    case "Mb":
      return fixFactory(size / 1024 / 1024, fixed);
    case "Gb":
      return fixFactory(size / 1024 / 1024 / 1024, fixed);
    case "Tb":
      return fixFactory(size / 1024 / 1024 / 1024 / 1024, fixed);
  }
}

function fixFactory(size: number, fixed: number) {
  if (fixed < 0) {
    return size;
  }

  return Number(size.toFixed(fixed));
}
