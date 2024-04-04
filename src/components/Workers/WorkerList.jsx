import Card from "../UI/Card"

const WorkerList = (props) => {
return (
    <Card className="mt-10">
        <ul>
            <li className="flex justify-between p-2 bg-white rounded-xl mt-2">
            
                
                <span className="font-bold text-black"  >Name</span>
                <span className="font-bold text-black">Salary</span>
               
            </li>
            {props.workers.map((worker)=>(
            
            <li  className="flex justify-between cursor-pointer hover:shadow-xl p-2 bg-white 
             rounded-xl mt-2 transition-shadow">
            
            <span className="font-bold  text-black">     Sedat   </span>
            <span className="text-teal-700 font-medium"> 50000 $ </span>
   
            </li>))}
        </ul>
    </Card>
   
);
};

export default WorkerList