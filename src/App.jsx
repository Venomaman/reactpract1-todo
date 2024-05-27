import { useState } from "react";
import { RiCheckboxBlankFill, RiDeleteBin6Line } from "react-icons/ri";
import { TbPencilPlus } from "react-icons/tb";
import { v4 as uuid } from "uuid";
import { IoWarning} from 'react-icons/io5'

const toDoListDefault = [
  {
    id: uuid(),
    text: "testing 1 check if it works!",
    complete: false,
  },
  {
    id: uuid(),
    text: "testing 2",
    complete: false,
  },
];

console.log(toDoListDefault);



function App() {
  const [toDoList, setToDoList] = useState(toDoListDefault);
  //track the state of pop up
  const [popUp, setPopUp] = useState(false)
  function handlePopUp(){
    setPopUp(true);
  }

  return (
    <>
      {popUp && <Modal setPopUp={setPopUp}/>}
      <div className="p-3 border-2 bg-slate-700 text-slate-50">
        <div className=" p-2 grid grid-cols-2 ">
          <div className="grid grid-cols-1">
            <p className="text-4xl p-2 pl-12">My Task</p>
          </div>
          <p className="grid-cols-1 pt-3 text-3xl flex justify-end pr-12 hover:text-cyan-500">
            <TbPencilPlus onClick={handlePopUp}/>
          </p>
        </div>
      </div>
      <div className="p-2">
        {toDoList.map((listItem) => {
          return (
            <div
              key={listItem.id}
              className=" grid grid-cols-2 p-6 border-2 shadow-md hover:shadow-xl"
            >
              <div className="flex pl-2">
                <div className="grid grid-cols-1 text-2xl">
                  <div className="flex justify-end">
                    <p className="pr-4 pt-1.5">
                      <RiCheckboxBlankFill />
                    </p>
                    <p>{listItem.text}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end p-3">
                <p className="grid grid-cols-1 text-2xl pr-5">
                  <RiDeleteBin6Line />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}


function Modal({setPopUp}) {
  return (
    <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
      <div className='bg-white p-10 rounded-md shadow-md'>
        <h1 className='font-bold text-center text-2xl my-5'>Add Task</h1>
         <input type="text" className="border-2 w-max p-16"/>
        <div className='flex justify-between mt-5'>
          <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
          onClick={() =>{setPopUp(false)} }
          >No, Cancel</button>
          <button className='outline outline-1 outline-[#101f20] hover:bg-[#101f20] hover:text-white py-2 px-4 bg-transparent text-black'
          onClick={() => console.log("Please like and subscribe")}
          >Yes, Add Task</button>
        </div>
      </div>
    </div>
  )
}

export default App;
