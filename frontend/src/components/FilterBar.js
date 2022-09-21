import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function FilterBar({products}) {
  products.map((item)=>console.log(item.category))
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
