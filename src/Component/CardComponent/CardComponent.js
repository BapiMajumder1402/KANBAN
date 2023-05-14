import React, { useState } from "react";
import PopOver from "../PopOver/PopOver";
import card from "./card.module.css";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { TodoAtom } from "../Atom/Atom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
// import {CiEdit,MdDelete} from 'react-icons';
// import { useNavigate } from 'react-router-dom';
// export  var itemId;

function CardComponent() {
  const [show, setshow] = useState(false);
  const [todo, setTodo] = useState({
    id: uuidv4(),
    task: "",
    isComplete: false,
  });
  const [todoList, setTodoList] = useRecoilState(TodoAtom);

  function toogle() {
    setshow(!show);
  }

  function changeHandler(e) {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
    console.log(todo);
  }

  function submitTodo() {
    const newTask = {
      id: "",
      task: "",
      isComplete: false,
    };

    setTodoList([...todoList, todo]);
    localStorage.setItem("todoTask", JSON.stringify([...todoList, newTask]));
  }
  console.log(todoList);

  // const nav =useNavigate();

  // function handleFocus(id){
  //     console.log(id)
  //     itemId=id;
  //    nav("/description")
  // }

  function handleDelete() {}
  return (
    <div className={card.container}>
      <div>
        {todoList.map((item) => {
          return (
            <div className={card.todo} key={item.id}>
              <p>{item.task}</p>
              <AiTwotoneDelete onClick={handleDelete} />
              {/* <CiEdit onClick={handleFocus(item.id)}/> */}
              {/* <p><PopOver /></p> */}
            </div>
          );
        })}
      </div>
      <div className={card.card}>
        {!show ? (
          <p className={card.addBtn} onClick={toogle}>
            + Add a Card
          </p>
        ) : (
          <div>
            <Input
              name="task"
              value={todo.task}
              placeholder="Add task Here"
              onChange={changeHandler}
            />
            <div className={card.btns}>
              <Button colorScheme="blue" onClick={submitTodo}>
                Add
              </Button>
              <AiOutlineCloseCircle onClick={toogle} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardComponent;
