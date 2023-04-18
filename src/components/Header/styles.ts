import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100px;
  }
`

export const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;
`

export const IconCalculator = styled.a`
  color: ${(props) => props.theme['gray-100']};
`

export const IconGitHub = styled.a`
  color: ${(props) => props.theme['rose-600']};
`
