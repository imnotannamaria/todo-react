import styled from 'styled-components'

export const TasksContainer = styled.main`
  margin-top: 4rem;
  width: 800px;
  margin: 4rem auto;

  @media (max-width: 800px) {
    width: 80%;
  }
`

export const TaskInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const CreatedTasks = styled.div`
  display: flex;
  gap: 1rem;

  color: ${(props) => props.theme.blue};
  font-weight: bold;

  span {
    padding: 0 8px;
    border-radius: 10px;
    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-200']};
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
    gap: 0.5rem;
  }
`

export const CompletedTasks = styled.div`
  display: flex;
  gap: 1rem;

  color: ${(props) => props.theme.purple};
  font-weight: bold;

  span {
    padding: 0 8px;
    border-radius: 10px;
    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-200']};
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
    gap: 0.5rem;
  }
`
export const NoTaskContainer = styled.div`
  margin-top: 1.5rem;
  border-radius: 8px;
  border-top: 1px solid ${(props) => props.theme['gray-400']};

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => props.theme['gray-300']};

  svg {
    margin-top: 4rem;
  }

  p {
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`
