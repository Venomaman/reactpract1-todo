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

  return (
    <>
    <div>
     
      {/* <button className='outline outline-1 px-3 py-2 hover:bg-black hover:text-white'
      onClick={() => setPopUp(true)}
      >Open Modal</button>
      {popUp && <Modal setPopUp={setPopUp} />} */}
      <Modal setPopUp={setPopUp}/>

    </div>
      <div className="p-3 border-2 bg-slate-700 text-slate-50">
        <div className=" p-2 grid grid-cols-2 ">
          <div className="grid grid-cols-1">
            <p className="text-4xl p-2 pl-12">My Task</p>
          </div>
          <p className="grid-cols-1 pt-3 text-3xl flex justify-end pr-12">
            <TbPencilPlus />
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
        <h1 className='font-bold text-center text-lg my-5'>Add Task</h1>
        <p>
          Are you sure you want to delete <b>Charle Kasasira</b>
          <p className='bg-[#ffe9d9] p-2 border-l-2 border-[#fa703f] text-[#bc4c2e] flex flex-col text-sm my-1'>
            <span className='text-[#771505] font-bold flex items-center gap-1'>
              <IoWarning />
              Warning
            </span>
            By Deleting this account, you won't be able to access the system.
          </p>
        </p>
        <div className='flex justify-between mt-5'>
          <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
          onClick={() => setPopUp(false)}
          >No, Cancel</button>
          <button className='outline outline-1 outline-[#101f20] hover:bg-[#101f20] hover:text-white py-2 px-4 bg-transparent text-black'
          onClick={() => console.log("Please like and subscribe")}
          >Yes, Delete</button>
        </div>
      </div>
    </div>
  )
}

export default App;
