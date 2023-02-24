/**
 * 返回随机唯一标识符
 */

import random from "./random";
export default function () {
  return (
    Date.now() + String(random(random(1000, 100000), random(1000, 10000000)))
  );
}

console.log(random(2,5));
