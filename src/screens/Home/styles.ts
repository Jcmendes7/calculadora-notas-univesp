import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  flex-wrap: wrap;
`

export const SchoolAverage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const StartButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 0;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;

  background: ${(props) => props.theme['rose-600']};
  color: ${(props) => props.theme['gray-100']};
  transition: 200ms;

  &:hover {
    background: ${(props) => props.theme['rose-700']};
  }
`

export const InputAverage = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    border-color: ${(props) => props.theme['rose-600']};
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`
