import { Check, Trash } from 'phosphor-react'
import { ITask } from '../../App'
import {
  CheckboxContainer,
  CheckboxIndicator,
  DeleteTaskButton,
  IsCompletedTask,
  TaskContainer,
} from './styles'

interface TaskProps {
  task: ITask
  onCompleteTask: (taskId: string) => void
  onDeleteTask: (taskId: string) => void
}

export function Task({ task, onCompleteTask, onDeleteTask }: TaskProps) {
  return (
    <TaskContainer>
      <CheckboxContainer onClick={() => onCompleteTask(task.id)}>
        <CheckboxIndicator>
          <Check size={18} weight="bold" />
        </CheckboxIndicator>
      </CheckboxContainer>

      {!task.isCompleted ? (
        <p>{task.title}</p>
      ) : (
        <IsCompletedTask>{task.title}</IsCompletedTask>
      )}

      <DeleteTaskButton onClick={() => onDeleteTask(task.id)}>
        <Trash size={25} />
      </DeleteTaskButton>
    </TaskContainer>
  )
}
