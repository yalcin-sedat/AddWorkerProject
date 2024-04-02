import Card from "../UI/Card";

const AddWorker = () => {
  return (
    <Card addClasse ="mt-10">
      <form className="flex flex-col gap-y-2">
      <label htmlFor="name" className="font-medium ">
       Employee Name
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
      <button className="p-2 text-lg bg-teal-700 text-white mt-2 rounded-xl">ADD</button>
    </form>
    </Card>
    
  );
};

export default AddWorker;
