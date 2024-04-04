import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";


const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");

  const mininumWage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault(); //The page is not refresh

    //Input not null
    if (enteredWorkerName.trim().length === 0 || enteredWorkerName.trim().length === 0) {
      return;
    }
    //if Sallary > 5000 $
    if (+enteredWage < mininumWage) {

      return;
    }

    props.setWorkers((preyState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWage,
      },
      ...preyState
    ])
    setEnteredWorkerName("");
    setEnteredWage("");
  };
  return (
    <div>
      <ErrorModal/>
      <Card addClasse="mt-2">
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="font-medium text-white text-xs ">
          Employee Name
        </label>
        <input
          type="text"
          className="max-w-[40rem] w-full mx-auto border p-2 border-spacing-2 rounded-xl"
          placeholder="Employee Name"
          id="name"
          onChange={(e) => setEnteredWorkerName(e.target.value)}
          value={enteredWorkerName}
        />

        <label htmlFor="wage" className="font-medium text-white text-xs ">
          Salary Amount
        </label>
        <input
          type="number"
          className="max-w-[40rem] w-full mx-auto border p-2 rounded-xl"
          placeholder="Salary Amount"
          id="wage"
          onChange={(e) => setEnteredWage(e.target.value)}
          value={enteredWage}
        />
        <Button className="mt-2" type="submit">ADD</Button>
      </form>
    </Card>
    </div>

  );
};

export default AddWorker;
