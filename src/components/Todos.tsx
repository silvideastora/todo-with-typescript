import { type Todo as TodoType , type TodoId, type ListOfTodos } from "../types"
import { Todo } from "./Todo"
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Props {
  todos: ListOfTodos
  onToggleCompletedTodo:({ id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo:({id}: TodoId) => void
}
export const Todos: React.FC<Props> = ({todos, onRemoveTodo, onToggleCompletedTodo}) => {
  
const [parent] = useAutoAnimate()
  return(
    <ul className="todo-list" ref={parent}>
      {todos.map(todo => (
        <li 
          key={todo.id} 
          className={`${todo.completed ? 'completed': ''}`}>
          <Todo 
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompletedTodo={onToggleCompletedTodo}
          />
        </li>
      ))}
    </ul>
  )
}