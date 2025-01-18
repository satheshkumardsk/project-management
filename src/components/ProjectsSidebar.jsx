import Button from "./button";
function ProjectsSidebar() {
    return (
        <aside className="w-1/3 bg-indigo-500">
            <h2 className="underline">Projects</h2>
            <div>
                <Button>+Add project</Button>
            </div>
        </aside>
    );
}
export default ProjectsSidebar;