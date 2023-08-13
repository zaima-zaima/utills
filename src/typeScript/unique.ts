export default function unique(target: any[], signal = "id") {
  let tmp = {} as any;
  let array = [] as any[];
  for (let tar in target) {
    tmp[target[tar][signal]] = target[tar];
  }

  for (let item in tmp) {
    array.push(tmp[item]);
  }

  return array;
}
