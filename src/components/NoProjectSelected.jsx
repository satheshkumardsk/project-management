import Button from "./button";
import PropTypes from "prop-types";
function NoProjectSelected({onProjectSelection}) {
    return (
        <div>
            <p>No project selected</p>
            <Button onClick={() => onProjectSelection(1)}>Add project</Button>
        </div>
    );
}

export default NoProjectSelected;

NoProjectSelected.propTypes = {
    onProjectSelection: PropTypes.func
}