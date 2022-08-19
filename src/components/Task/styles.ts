import styled from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'

export const TaskContainer = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  margin: 0.75rem auto;

  padding: calc(1rem - 5px);
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray-400']};

  background-color: ${(props) => props.theme['gray-500']};

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`

export const CheckboxContainer = styled(Checkbox.Root)`
  background-color: transparent;
  border: solid 3px transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 25px;
  min-height: 25px;
  border-radius: 100%;

  cursor: pointer;

  &[data-state='checked'] {
    background-color: ${(props) => props.theme['purple-dark']};
    border-color: ${(props) => props.theme['purple-dark']};
  }

  &[data-state='checked']:hover {
    transition: background-color 0.2s, border-color 0.2s;
    background-color: ${(props) => props.theme.purple};
    border-color: ${(props) => props.theme.purple};
  }

  &[data-state='unchecked'] {
    border: solid 3px ${(props) => props.theme.blue};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s, border-color 0.2s;
    border: solid 3px ${(props) => props.theme.blue};
    background-color: ${(props) => props.theme['blue-dark']};
  }
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${(props) => props.theme['gray-100']};
  line-height: 0;
`

export const DeleteTaskButton = styled.button`
  border: 0;
  border-radius: 4px;
  background-color: transparent;
  color: ${(props) => props.theme['gray-300']};

  padding: 5px;

  line-height: 0;

  cursor: pointer;

  &:hover {
    transition: background-color 0.2s, color 0.2s;
    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme.danger};
  }
`

export const IsCompletedTask = styled.p`
  color: ${(props) => props.theme['gray-300']};
  text-decoration: line-through;
`
