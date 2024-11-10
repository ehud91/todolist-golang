import React, { useState } from 'react'
import TodoItem from './TodoItem'
import { useQuery } from '@tanstack/react-query';

/*
const todos = [
    {
        _id: 1,
        body: "Buy groceries",
        completed: true
    },
    {
        _id: 2,
        body: "Walk the dog",
        completed: true
    },
    {
        _id: 3,
        body: "Do laundry",
        completed: true
    },
    {
        _id: 4,
        body: "Cook dinner",
        completed: true
    }
];
*/

export type Todo = {
    _id: number;
    body: string;
    completed: boolean;
};

const TodoList = (props: any) => {

    const { darkMode } = props;
    
    const { data:todos, isLoading } = useQuery<Todo[]>({
        queryKey: ["todos"],

        queryFn: async () => {
            try {
                const res = await fetch("http://localhost:4000/api/todos");
                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.error || "oops... somthing went wrong!");
                }                
                
                return data || [];

            } catch (error) {
                console.log(error);
            }
        }
    });

    return (
        <>
            <div className={"form-container"} style={{backgroundColor: darkMode ? '' : '#17153B', borderColor:  darkMode ? '' : '#2E236C'}}>
                <h2 className="form-heading">Today's Tasks</h2>             
                {!isLoading && todos?.length === 0 && (
                    <div className={"complete-message"}>All tasks completed !</div>
                )}

                { todos?.map(todo => 
                    <TodoItem key={todo._id} todo={todo} />
                )}                

            </div>
        </>
    )
}

export default TodoList;