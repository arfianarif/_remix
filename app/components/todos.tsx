import { TodoItem } from './todo-item'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useState } from 'react'
import { z } from 'zod'

const todoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
})

export default function Todos() {
  const [todos, setTodos] = useState<
    { id: string; title: string; completed: boolean }[]
  >([])
  const [newTodo, setNewTodo] = useState('')

  const handleAddTodo = () => {
    const result = todoSchema.safeParse({ title: newTodo })
    if (!result.success) {
      alert(result.error.errors[0].message)
      return
    }

    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), title: newTodo, completed: false },
    ])
    setNewTodo('')
  }

  const handleToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className='max-w-xl mx-auto mt-10 space-y-4'>
      <h1 className='text-2xl font-bold'>Todo List</h1>
      <div className='flex space-x-2'>
        {/* Shadcn Input */}
        <Input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Add a new task'
          className='flex-1'
        />
        {/* Shadcn Button */}
        <Button
          onClick={handleAddTodo}
          variant='default'
          className='text-slate-50'
        >
          Add
        </Button>
      </div>
      <div className='space-y-2'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}
