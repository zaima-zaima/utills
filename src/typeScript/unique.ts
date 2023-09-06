export default function unique<T>(target: T[], signal = "id") {
  let tmp = {};
  let array = [] as T[];
  for (let tar in target) {
    tmp[target[tar][signal]] = target[tar];
  }

  for (let item in tmp) {
    array.push(tmp[item]);
  }

  return array;
}
