import React from 'react'
import { GiConfirmed } from "react-icons/gi";
import { FaTrash } from "react-icons/fa";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo } from './TodoList';

const TodoItem = ( {todo }: { todo: Todo }) => {
    const queryClient = useQueryClient();

    const { mutate: updateTodo, isPending: isUpdating } = useMutation({
        mutationKey: ["updateTodo"],
        mutationFn: async () => {
            if (todo.completed) return alert("Todo is already completed");

            try {
                const res = await fetch(`http://localhost:4000/api/todos/${todo._id}`, {
                    method: "PATCH",                    
                });
                const data = res.json();

                if (!res.ok) {
                    throw new Error("Oops... Somthing went wrong !");
                }
                
                return data;
            } catch (error) {
                console.log(error);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["todos"] });
        }
    });

    const { mutate: deleteTodo, isPending: isDeleting } = useMutation({
        mutationKey: ["deleteTodo"],
        mutationFn: async () => {
            
            try {
                const res = await fetch(`http://localhost:4000/api/todos/${todo._id}`, {
                    method: "DELETE",                    
                });
                const data = res.json();

                if (!res.ok) {
                    throw new Error("Oops... Somthing went wrong !");
                }
                
                return data;
            } catch (error) {
                console.log(error);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["todos"] });
        }
    });
    return (
        <>
            <div className={"btn-container form-control"}>
                
                <input
                    type={'text'}
                    value={todo.body}
                    disabled
                    ref={(input) => input && input.focus()}
                    className="form-input"
                    style={{fontWeight: 'bolder', fontSize: 17 ,marginRight: 5, color: todo.completed.toString() === 'true' ? 'green' : 'blue', textDecoration: todo.completed.toString() === 'true' ? "Line-through" : ""}}                        
                />     
                <label className={"task-label-" + (todo.completed.toString() === "true" ? "done" : "process")}>{todo.completed.toString() === "true" ? "done" : "process"}</label>
                <div style={{paddingTop: 8, width: 100, paddingLeft: 15}}>
                    {todo.completed.toString() === 'false' ?
                        <GiConfirmed size={20} color={"green"} style={{marginRight: 5}} onClick={() => updateTodo()} />
                        : <GiConfirmed size={20} color={"green"} style={{marginRight: 5}} />}
                    
                    <FaTrash size={20} color='red' style={{marginLeft: 5}} onClick={() => deleteTodo()} />
                </div>
            </div>
        </>
    )
}

export default TodoItem;