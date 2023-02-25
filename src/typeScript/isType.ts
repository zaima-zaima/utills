const val = {
  "[object Undefined]": "undefined",
  "[object Null]": "null",
  "[object Number]": "number",
  "[object String]": "string",
  "[object Boolean]": "boolean",
  "[object Object]": "object",
  "[object Array]": "array",
};

export default function (tar) {
  try {
    return val[Object.prototype.toString.call(tar)];
  } catch {
    throw Error("check the param and retry it");
  }
}
