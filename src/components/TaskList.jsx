import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux-toolkit/slices/TodoSlice";
import { ImCheckmark, ImCross } from "react-icons/im";
import { motion } from "framer-motion";

const TaskList = ({ task, id }) => {
  const dispatch = useDispatch();
  const [markTask, setMarkTask] = useState(false);
  

  const handleOnClick = () => {
    setMarkTask(!markTask);
  };

  // Dispatch the deleteTodo action with the task ID as payload
  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{y : '50%', opacity: 0, scale : 0.5}}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="flex  items-center relative w-[40vw] px-3 py-2  bg-violet-800 rounded-md text-white shadow-md shadow-cyan-900 mb-4"
    >
      <h2 className="font-bold ">{task}</h2>
      {markTask === false ? (
        <span
          onClick={handleOnClick}
          className="text-sm  p-1 bg-red-700 rounded-full right-12 absolute "
        >
          <ImCross />
        </span>
      ) : (
        <span
          onClick={handleOnClick}
          className="text-sm  p-1 bg-green-700 rounded-full right-12 absolute "
        >
          <ImCheckmark />
        </span>
      )}
      <span className="absolute right-3">
        <MdDelete
          onClick={handleDelete}
          className=" text-2xl  hover: hover:text-red-600"
        />
      </span>
    </motion.div>
  );
};

export default TaskList;
