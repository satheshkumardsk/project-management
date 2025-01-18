import Button from "./button";
import PropTypes from "prop-types";
function ProjectsSidebar({onProjectSelection}) {
    return (
        <aside className="w-1/3 bg-stone-500">
            <h2 className="underline">Projects</h2>
            <div>
                <Button onClick={() => onProjectSelection(1)}>+Add project</Button>
            </div>
        </aside>
    );
}
export default ProjectsSidebar;

ProjectsSidebar.propTypes = {
    onProjectSelection: PropTypes.func
}