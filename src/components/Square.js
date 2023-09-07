function Square(props) {
  const { value, onClick, disabled } = props;
  return (
    <>
      <button onClick={onClick} disabled={disabled}>{value}</button>
    </>
  );
}
export default Square;
