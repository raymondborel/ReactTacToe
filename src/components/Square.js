function Square(props) {
  const { value, onClick } = props;
  return (
    <div>
      <button onClick={onClick}>{value}</button>
    </div>
  );
}
export default Square;
