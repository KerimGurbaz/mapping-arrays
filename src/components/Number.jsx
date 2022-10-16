const Number = ({ numbers }) => {
  console.log(numbers);
  const list = numbers.map((number, index) => <li key={index}>{number}</li>);
  return list;
};

export default Number;
