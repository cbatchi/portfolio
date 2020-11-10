import React from 'react'
import { 
  Grid,
  Navbar, 
  Datas as data, 
  Row, 
  Logo, 
  Banner
} from '../store'

const Header = () => {
  const { menu } = data.navbar
  const { content } = data.banner
  const { button } = data.banner

  return (
    <header className="header">
      <Grid>
        <Row><Navbar logo={Logo} menus={menu} /></Row>
        <Row><Banner infos={content} buttonInfos={button} /></Row>
      </Grid>
    </header>
  )
}

export default Header
