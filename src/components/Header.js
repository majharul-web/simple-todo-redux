import React, { useState } from "react";
import { useDispatch } from "react-redux";
import doubleTickImg from "../assets/images/double-tick.png";
import notesImg from "../assets/images/notes.png";
import plusImg from "../assets/images/plus.png";
import { added, allCleared, allCompleted } from "../redux/todos/actions";

const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };

  const completeHadler = () => {
    dispatch(allCompleted());
  };

  const clearHeandler = () => {
    dispatch(allCleared());
  };
  return (
    <div>
      <form onSubmit={submitHandler} className='flex items-center bg-gray-100 px-4 py-4 rounded-md'>
        <img src={notesImg} className='w-6 h-6' alt='Add todo' />
        <input
          type='text'
          placeholder='Type your todo'
          className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500'
          onChange={handleInput}
          value={input}
        />
        <button
          type='submit'
          className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className='flex justify-between my-4 text-xs text-gray-500'>
        <li className='flex space-x-1 cursor-pointer' onClick={completeHadler}>
          <img className='w-4 h-4' src={doubleTickImg} alt='Complete' />
          <span>Complete All Tasks</span>
        </li>
        <li className='cursor-pointer' onClick={clearHeandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
