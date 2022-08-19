import { ClipboardText } from 'phosphor-react'
import { Task } from '../Task'
import { ITask } from '../../App'
import {
  CompletedTasks,
  CreatedTasks,
  NoTaskContainer,
  TaskInfoContainer,
  TasksContainer,
} from './styles'

interface TasksProps {
  tasks: ITask[]
  onCompleteTask: (taskId: string) => void
  onDeleteTask: (taskId: string) => void
}

export function Tasks({ tasks, onCompleteTask, onDeleteTask }: TasksProps) {
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <TasksContainer>
      <TaskInfoContainer>
        <CreatedTasks>
          Tarefas criadas
          <span>{tasksQuantity}</span>
        </CreatedTasks>

        <CompletedTasks>
          Concluídas
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </CompletedTasks>
      </TaskInfoContainer>

      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}

      {tasks.length <= 0 && (
        <NoTaskContainer>
          <ClipboardText size={100} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </NoTaskContainer>
      )}
    </TasksContainer>
  )
}
