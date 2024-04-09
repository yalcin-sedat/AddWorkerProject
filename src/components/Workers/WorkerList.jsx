import Card from "../UI/Card"

const WorkerList = (props) => {
    const { workers ,setWorkers } = props;

    //if dont have any worker return
    if(workers.length < 1){
        return;
    }

    
    const deleteWorker = (id) => {
        setWorkers(
            workers.filter((item) => item.id!== id)
        );
    };
    
return (
    <Card listClasse="mt-2">
        <ul>
            {workers.map((worker)=>(
            <li className="flex justify-between cursor-pointer hover:shadow-xl p-2 bg-white 
             rounded-xl mt-2 transition-shadow"
             key={worker.id}
             onClick={()=> deleteWorker(worker.id)}>
            
            <span className="text-teal-700 font-medium pl-1"> {worker.name}   </span>
            <span className="text-teal-700 font-medium"> {worker.wage} $ </span>
   
            </li>))}
        </ul>
    </Card>
   
);
};

export default WorkerList