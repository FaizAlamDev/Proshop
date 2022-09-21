import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function FilterBar() {
  return (
    <>
      <ButtonGroup className="mb-2 mt-3">
        <Button>Male</Button>
        <Button>Female</Button>
      </ButtonGroup>
    </>
  );
}

export default FilterBar;
