import PropTypes from "prop-types";

function Button({ children }) {
    return <button className="bg-stone-500 text-white">{children}</button>;
}

export default Button;

Button.propTypes = {
    children: PropTypes.node
}