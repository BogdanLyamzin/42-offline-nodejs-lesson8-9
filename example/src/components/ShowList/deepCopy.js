export const deepCopy = (obj) => {
  const newObj = {};
  /*
  const obj = {
      name: "Alex",
      age: 42
  }
  const arr = Object.entries[obj];
  [
      ["name", "Alex"],
      ["age", 42]
  ]
  */
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null) {
      newObj[key] = deepCopy(value);
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
};
