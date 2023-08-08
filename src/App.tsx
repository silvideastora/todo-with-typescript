import { useState } from "react"
import { Todos } from "./components/Todos"
import { FilterValue, TodoTitle, type TodoId, type Todo as TodoType } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"


const mockTodos = [
  {
    id:'1',
    title: 'Aprender Backend con Java',
    completed: true
  },
  {
    id:'2',
    title:'Informarme de nuevas tecnologias durante el 2023',
    completed:false
  },
  {
    id: '3',
    title:'Repasar mis habilidades con CSS',
    completed: false
  }
]

const App = (): JSX.Element => {

  const [ todos, setTodos ] = useState(mockTodos)
  const [ filterSelected, setFilterSelected ]= useState<FilterValue>(() => {
    const params = new URLSearchParams(window.location.search)
    const filter = params.get('filter') as FilterValue | null
      if(filter === null) return TODO_FILTERS.ALL
    //checa si el filtro es válido, sino retorna ALL
    return Object
      .values(TODO_FILTERS)
      .includes(filter)
      ? filter
      :TODO_FILTERS.ALL
  })
  
  const handleRemove = ({id}:TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed } : Pick<TodoType, 'id' | 'completed'>
    ): void => {
      const newTodos = todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed
          }
        }
        return todo
      })
      setTodos(newTodos)
  }
  const handleRemoveAllCompleted = ():void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }
  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
    const params = new URLSearchParams(window.location.search)
    params.set('filter', filter)
    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`)
  }
  const activeCount= todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })
  const handleAddTodo = ({title}: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }
  return (
    <div className="todoapp">
      <Header 
        onAddTodo={handleAddTodo}
      />
      <Todos
        onToggleCompletedTodo= {handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveAllCompleted}
      />
    </div>
  )
}

export default App
