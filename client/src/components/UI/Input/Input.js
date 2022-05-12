function Input(props) {
  return (
    <input
      type={props.typeInput}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder={props.placeholderInput}
      name={props.nameInput}
      value={props.valueInput}
      onChange={(e) => {
        props.onInputForm(props.nameInput, e.target.value);
      }}
    />
  );
}
export default Input;
