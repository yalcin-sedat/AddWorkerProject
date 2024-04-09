import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrappers from "../Helpers/Wrappers";


const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState();

  const mininumWage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault(); //The page is not refresh

    //Input not null
    if (enteredWorkerName.trim().length === 0 || enteredWorkerName.trim().length === 0) {
      setError({
        title: "ISIm Alani zorunlu...",
        message: " Lütfen bir isim giriniz.",
      });
      return;
    }
    //if Sallary > 5000 $
    if (+enteredWage < mininumWage) {

      setError({
        title: "Maas Alani zorunlu...",
        message: `Lütfen ${mininumWage}degerinden büyük bir maas giriniz.`,
      });
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

  const errorHandler = () => {
    setError(null);

  }
  return (
    <Wrappers>
     {error && <ErrorModal key="error-modal" onConfirm={errorHandler} error={error} />} 
      <Card addClasse="mt-2" key="card-add-worker">
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
      </Wrappers>

  );
};

export default AddWorker;
