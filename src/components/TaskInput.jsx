import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,  } from "../redux-toolkit/slices/TodoSlice";
import TaskList from "./TaskList";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';


const TaskInput = () => {
  const dispatch = useDispatch();
  const [taskInput, setTaskInput] = useState("");
  const todos = useSelector((state) => state.todo);

 
  // Dispatch the addTodo action to
  const handleAddTodo = (event) => {
    event.preventDefault();
    if (taskInput.trim() !== "") {
      const taskId = Date.now();
      dispatch(addTodo({ id: taskId, task: taskInput }));
      setTaskInput("");
      toast.success("Todo Item Added")
    }
  };

  return (
  
    <main className="flex flex-col justify-center items-center py-[10vh] px-[10vw] ">
      <Toaster
  position="top-center"
  reverseOrder={true}
/>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 2 }}
        className="mb-7"
      >
        <h2 className="text-white md:text-5xl text-2xl font-bold">
          Add your <span className="text-[#26ffcc]">Todo Task</span> here ✌️
        </h2>
      </motion.div>
      <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ delay : 1,  duration: 1 }}
        className="flex items-center justify-center relative p-3 mb-7 "
      >
        <input
          className="w-[40vw] px-3 py-2 text-xl rounded-md  shadow-lg shadow-teal-600 bg-zinc-100 font-bold outline-none"
          type="text"
          placeholder="Add Todo Tasks Here..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <span className=" text-white font-bold absolute right-7 text-xl bg-slate-500 rounded-full hover:bg-green-400 hover:text-green-800 cursor-pointer ">
          <MdAdd onClick={handleAddTodo}  />
        </span>
      </motion.div>
      {todos.map((item,index) => (
        <TaskList task={item.task} id={item.id} key={index} />
      ))}
    </main>
  );
};

export default TaskInput;
