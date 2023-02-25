/**
 * 对象深度克隆
 */

import isType from "./isType";

export default function deepClone(object) {
  let tar;
  if (isType(object) === "array") {
    tar = [];
  } else if (isType(object) === "object") {
    tar = {};
  } else {
    throw Error("can not excuted! because the value cannot reference!");
  }

  for (const key in object) {
    if (isType(object[key]) === "array" || isType(object[key]) === "object") {
      tar[key] = deepClone(object[key]);
    } else {
      tar[key] = object[key];
    }
  }
  return tar;
}
