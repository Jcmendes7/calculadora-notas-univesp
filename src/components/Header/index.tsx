import { Calculator, GithubLogo } from 'phosphor-react'
import logoUnivesp from '../../assets/logo-univesp.png'
import { HeaderContainer, IconCalculator, IconGitHub, NavLinks } from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoUnivesp} alt="Logo da Univercidade Univesp" />
      <NavLinks>
        <IconCalculator href="/">
          <Calculator size={35} />
        </IconCalculator>
        <IconGitHub href="">
          {' '}
          <GithubLogo size={35} />{' '}
        </IconGitHub>
      </NavLinks>
    </HeaderContainer>
  )
}
