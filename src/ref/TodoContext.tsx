import { useContext, useState } from "react";
import { createContext } from "react";
import { Todo } from "../models/todoModel"

interface ITodoContext {
     todo: string
     todos: Todo[]
     handleSubmit: (e: React.FormEvent) => void 
}

interface ITodoProviderProps {
     children: any
}

const TodoContext = createContext<ITodoContext | null>(null);

export const useTodoContext = () => {
     return useContext(TodoContext)
}

export const TodoProvider = ({children}:ITodoProviderProps) => {
     
     const [todo, setTodo] = useState<string>('')
     const [todos, setTodos] = useState<Todo[]>([])

     const handleSubmit = (e:React.FormEvent) => {
          e.preventDefault()     

          setTodos(currentTodos => [...currentTodos, {id: Date.now(), text: todo, isCompleted: false}])
          setTodo('')
     }

     return <TodoContext.Provider value={{todo, todos, handleSubmit}}/>
          {children}
     </TodoContext.Provider>
}

export default TodoProvider