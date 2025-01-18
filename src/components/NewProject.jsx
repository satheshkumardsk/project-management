import Input from "./input";
import Button from "./button";
function NewProject() {
  return (
    <menu>
      <div>
        <Input type="input" labelName='title' />
      </div>
      <div>
        <Input type="textarea" labelName='description' />
      </div>
      <div>
        <Input type="input" labelName='date' />
      </div>
      <Button>Save</Button>
      <Button>Cancel</Button>
    </menu>
  );
}

export default NewProject;
