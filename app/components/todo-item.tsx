import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Trash2 } from 'lucide-react'
import React from 'react'

type TodoItemProps = {
  id: string
  title: string
  completed: boolean
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <div className='flex items-center justify-between p-4 bg-background rounded border border-input'>
      <div className='flex items-center'>
        <Checkbox
          checked={completed}
          onCheckedChange={() => onToggle(id)}
          className='mr-2'
        />
        <span className={completed ? 'line-through text-gray-500' : ''}>
          {title}
        </span>
      </div>
      <Button
        size={'icon'}
        onClick={() => onDelete(id)}
        variant='destructive'
        className='text-sm'
      >
        <Trash2 />
      </Button>
    </div>
  )
}
