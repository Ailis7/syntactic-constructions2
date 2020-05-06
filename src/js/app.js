// TODO: write your code here

export default function findBy(key, prop) {
  return function (elem) {
    for (const findKey in elem) {
      if (findKey === key && elem[findKey] === prop) return true;
    }
    return false;
  };
}
