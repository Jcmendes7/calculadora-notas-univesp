import styled from 'styled-components'

export const LayoutContainer = styled.div`
  padding: 2.5rem;
  max-width: 60rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;

  background: ${(props) => props.theme['gray-800']};
`
