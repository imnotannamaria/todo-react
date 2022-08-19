import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import logo from '../../assets/todoLogo.svg'
import { HeaderContainer, HeaderLogoContainer, TaskForm } from './styles'

interface HeaderProps {
  onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: HeaderProps) {
  const [taskTitle, setTaskTitle] = useState('')

  function handleTaskSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(taskTitle)
    setTaskTitle('')
  }

  function onChangeTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value)
  }

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <img src={logo} />
      </HeaderLogoContainer>

      <TaskForm onSubmit={handleTaskSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTaskTitle}
        />

        <button type="submit">
          Criar
          <PlusCircle size={25} />
        </button>
      </TaskForm>
    </HeaderContainer>
  )
}
