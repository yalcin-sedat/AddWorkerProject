import { useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  const [workers,setWorkers] = useState([]);
  return (
    
    <div className="App">
      <h1 className="text-white text-center mt-6 text-3xl bg-black rounded-xl p-4">Salary Automation</h1>

      <AddWorker setWorkers ={setWorkers}/>

      <ul className="mt-2">
      <li className="flex justify-between p-2 bg-black rounded-xl mt-2 pl-8 pr-8">
            
            <span className="font-bold text-white" >NAME</span>
            <span className="font-bold text-white">SALARY</span>
           
        </li>
      </ul>
     
      <WorkerList workers   ={workers} setWorkers={setWorkers}/>
    </div>
   
  );
}

export default App;
