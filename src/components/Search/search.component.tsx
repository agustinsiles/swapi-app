import Button from "../Button/button.component";
import Input from "../Input/input.component";

export default function Search() {
  return (
    <div>
      <Input name="search-planet" label="Search..." type="search" />
      <Button>Search</Button>
    </div>
  );
}
