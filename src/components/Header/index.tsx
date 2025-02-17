import { Link } from 'react-router-dom'
import logo from '../../assets/images/alter (1).svg'
import cesta from '../../assets/images/carrinho.svg'
import { CartButton, HeaderBar, HeaderRow, LinkItem, Links, MenuHamburguer, NavMenu, SpanNotification } from './styles'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'


const Header = () => {   
  const dispatch = useDispatch()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {items} = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
      <div >
        <MenuHamburguer onClick={()=> setIsMenuOpen(!isMenuOpen)}>
          <span/>
          <span/>
          <span/>
        </MenuHamburguer>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <nav>
          <Links>
          <LinkItem><Link to="#/categories">Categorias</Link></LinkItem>
          <LinkItem><Link to="#/embreve">Novidades</Link></LinkItem>
          <LinkItem><Link to="#/promocao">Promoções</Link></LinkItem>
          </Links>
      </nav>
      </div>
      <CartButton onClick={openCart}> 
    {items.length > 0 && (
      <SpanNotification>
          {items.length} 
      </SpanNotification>
  )}
  <img src={cesta} />
</CartButton>

      </HeaderRow>
      <NavMenu className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem><Link to="/categories">Categorias</Link></LinkItem>
          <LinkItem><Link to="/embreve">Novidades</Link></LinkItem>
          <LinkItem><Link to="/promocao">Promoções</Link></LinkItem>
          </Links>
      </NavMenu>
    </HeaderBar>
  )
}

export default Header
