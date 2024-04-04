import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  return (
    <div className="App">
      <h1 className="text-black text-center mt-6 text-3xl">Salary Automation</h1>
      <AddWorker />
      <WorkerList workers={[]}/>
    </div>
  );
}

export default App;
