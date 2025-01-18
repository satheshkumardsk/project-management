import PropTypes from "prop-types";
function Input({ type, labelName }) {
  let input;
  if (type === "input") {
    input = <input />;
  } else if (type === "textarea") {
    input = <textarea />;
  }

  const label = <label>{labelName}</label>;
  return (
    <>
      {label}
      {input}
    </>
  );
}

export default Input;

Input.propTypes = {
  type: PropTypes.oneOf(["input", "textarea"]).isRequired,
  labelName: PropTypes.string.isRequired,
};
