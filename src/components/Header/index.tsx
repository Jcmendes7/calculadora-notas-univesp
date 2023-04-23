import { Calculator, GithubLogo } from 'phosphor-react'
import logoUnivesp from '../../assets/logo-univesp.png'
import { HeaderContainer, NavLinks } from './styles'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoUnivesp}
        alt="Logo da Universidade Virtual do Estado de São Paulo, Univesp"
      />
      <NavLinks>
        <NavLink to="/">
          <Calculator size={35} />
        </NavLink>
        <NavLink
          to="https://github.com/Jcmendes7/calculadora-notas-univesp.git"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <GithubLogo size={35} />{' '}
        </NavLink>
      </NavLinks>
    </HeaderContainer>
  )
}
