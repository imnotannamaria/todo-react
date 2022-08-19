import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeaderLogoContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['gray-700']};
`
export const TaskForm = styled.form`
  height: 54px;
  width: 800px;
  margin-top: -27px;

  display: flex;
  gap: 0.5rem;
  justify-content: space-between;

  input {
    flex: 1;
    border-radius: 8px;
    border: 0;
    background-color: ${(props) => props.theme['gray-500']};
    font-size: 1rem;
    padding-left: 1rem;
    color: ${(props) => props.theme['gray-100']};

    &:focus {
      border: 2px solid ${(props) => props.theme['purple-dark']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 1rem;

    font-size: 14px;
    font-weight: bold;

    border: 0;
    border-radius: 8px;
    color: ${(props) => props.theme['gray-100']};
    background-color: ${(props) => props.theme['blue-dark']};

    &:hover {
      transition: background-color 0.2s;
      background-color: ${(props) => props.theme.blue};
    }
  }

  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    input {
      font-size: 0.8rem;
    }

    button {
      font-size: 0.8rem;
    }
  }
`
