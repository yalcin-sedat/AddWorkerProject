import Button from "../UI/Button";
import Card from "../UI/Card";


const AddWorker = () => {
  return (
    <Card addClasse ="mt-10">
      <form className="flex flex-col gap-y-2">
      <label htmlFor="name" className="font-medium ">
       Calisan ismi
      </label>
      <input
        type="text"
        className="max-w-[40rem] w-full mx-auto border p-2 border-spacing-2 rounded-xl"
        placeholder="Employee Name"
        id="name"
      />

      <label htmlFor="wage" className="font-medium">
      Salary Amount-Test
      </label>
      <input
        type="number"
        className="max-w-[40rem] w-full mx-auto border p-2 rounded-xl"
        placeholder="Salary Amount"
        id="wage"
      />
      <Button className="mt-2">ADD</Button>
    </form>
    </Card>
    
  );
};

export default AddWorker;
