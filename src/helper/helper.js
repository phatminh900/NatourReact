const checkAllEntered = (...inputs) => {
  return inputs.every((input) => input.length);
};
const splitTitle = (title, start, end) => {
  return title.split(" ").slice(start, end).join(" ");
};
const getData = async (type,action) => {
  const response = await fetch(
    `https://tours-5d066-default-rtdb.asia-southeast1.firebasedatabase.app/${type}.json`
  );
  const data = await response.json();

  const [value] = Object.values(data);
  return value

};
export {checkAllEntered,splitTitle,getData}