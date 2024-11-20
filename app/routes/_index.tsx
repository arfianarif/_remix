import type { MetaFunction } from '@remix-run/node'
import { ModeToggle } from '~/components/mode-toggle'
import Todos from '~/components/todos'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className='flex h-screen items-start justify-start max-w-lg mx-auto flex-col gap-4 py-6'>
      <span className='w-full flex justify-end items-end'>
        <ModeToggle />
      </span>
      <Todos />
    </div>
  )
}
