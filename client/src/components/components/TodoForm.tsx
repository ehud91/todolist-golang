import React, { useState } from 'react';
import ButtonSubmit from './ButtonSubmit';
import Spinner from './Spinner';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const TodoForm = (props: any) => {

    const { darkMode } = props;
    
    const [newTodo, setNewTodo] = useState("");
    const [isPending, setIsPending] = useState(false);

    /*
    const createTodo = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsPending(true);
        alert("Todo added!");
    };
    */
    const queryClient = useQueryClient();

    const { mutate: createTodo, isPending: isCreating } = useMutation({
        mutationKey: ["createTodo"],
        mutationFn: async (e: React.FormEvent) => {
            e.preventDefault();
            try {
                const res = await fetch("http://localhost:4000/api/todos", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ body: newTodo }),
                });
                const data = await res.json();

                if (!res.ok) {
                    throw new Error("Oops... Somthing went wrong !");
                }

                setNewTodo("");
                return data;

            } catch (error: any) {
                console.log(error);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
        onError: (error: any) => {
            console.error(error.message)
        }
    });

    return (        
        <div className={"form-container"} style={{backgroundColor: darkMode ? '' : '#17153B', borderColor:  darkMode ? '' : '#2E236C'}}>    
            <div className="form-title">Add task</div>        
            <form onSubmit={createTodo}>            
                <div className={"btn-container form-control"}>
                    <input
                        type={'text'}
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        ref={(input) => input && input.focus()}
                        className="form-input"
                        style={{marginRight: 5}}                        
                    />     
                    <ButtonSubmit />
                </div>
            </form>
        </div>
    );
}

export default TodoForm;