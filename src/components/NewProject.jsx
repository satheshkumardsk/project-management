import Input from "./input";
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
      <button>Save</button>
      <button>Cancel</button>
    </menu>
  );
}

export default NewProject;
