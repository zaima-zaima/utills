export function queryParser(query: string) {
  let queryObject = {};
  const reg = /^\?[\w].+$/;
  if (reg.test(query)) {
    query = query.slice(1);
  }
  const queryItem = query.split("&");
  for (let i = 0; i < queryItem.length; i++) {
    const queryItemKeyValue = queryItem[i].split("=");
    queryObject[queryItemKeyValue[0]] = queryItemKeyValue[1];
  }

  return queryObject;
}
