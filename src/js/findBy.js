export default function findBy(key, prop) {
  return function (elem) {
    return (elem[key] === prop);
  };
}
