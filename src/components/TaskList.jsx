import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux-toolkit/slices/TodoSlice";
import { ImCheckmark, ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';


const TaskList = ({ task, id, addClicked }) => {
  const dispatch = useDispatch();
  const [markTask, setMarkTask] = useState(false);
  

  const handleOnClick = () => {
    setMarkTask(!markTask);
    if (markTask === true) {
      toast.error("Todo Task Incompleted!")
    }
    else{
      toast.success('Todo Task Completed!')
    }
    
  };

  // Dispatch the deleteTodo action with the task ID as payload
  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
    toast.error("Todo Item Deleted")
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{y : '50%', opacity: 0, scale : 0.5}}
      transition={{ ease: "easeOut", delay: addClicked ? 0.2 : 2 , duration: 0.5 }}
      className="flex  items-center relative w-[40vw]  px-3 py-2  bg-violet-800 rounded-md text-white shadow-md shadow-cyan-900 mb-4"
    >
      <h2 className="font-bold ">{task}</h2>
      {markTask === false ? (
        <span
          onClick={handleOnClick}
          className="text-sm  p-1 bg-red-700 rounded-full right-12 absolute cursor-pointer "
        >
          <ImCross />
        </span>
      ) : (
        <span
          onClick={handleOnClick}
          className="text-sm  p-1 bg-green-700 rounded-full right-12 absolute cursor-pointer "
        >
          <ImCheckmark />
        </span>
      )}
      <span className="absolute right-3">
        <MdDelete
          onClick={handleDelete}
          className=" text-2xl  hover: hover:text-red-600 cursor-pointer"
        />
      </span>
    </motion.div>
  );
};

export default TaskList;
