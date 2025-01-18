import PropTypes from "prop-types";

function Button({ children, ...props }) {
    return <button {...props} className="bg-stone-500 text-white">{children}</button>;
}

export default Button;

Button.propTypes = {
    children: PropTypes.node,
    onProjectSelection: PropTypes.func,
    onClick: PropTypes.func
}