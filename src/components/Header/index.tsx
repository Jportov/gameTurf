import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/alter (1).svg'
import cesta from '../../assets/images/carrinho.svg'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import * as S from './styles'


const Header = () => {
  const dispatch = useDispatch()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {items} = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
      <div >
        <S.MenuHamburguer onClick={()=> setIsMenuOpen(!isMenuOpen)}>
          <span/>
          <span/>
          <span/>
        </S.MenuHamburguer>
      <Link to="/" title='Clique aqui para acessar a pagina inicial'>
        <img src={logo} alt="Logo"  className='img-logo'/>
      </Link>
      <nav>
          <S.Links>
          <S.LinkItem><S.LinkHeader title='Clique aqui para acessar a pagina de categorias' to="/categories" >Categorias</S.LinkHeader></S.LinkItem>
          <S.LinkItem><S.LinkHeader title='Clique aqui para acessar a pagina de novidades' to="/#coming-soon" >Novidades</S.LinkHeader></S.LinkItem>
          <S.LinkItem><S.LinkHeader title='Clique aqui para acessar a pagina de promoções' to="/#on-sale" >Promoções</S.LinkHeader></S.LinkItem>
          </S.Links>
      </nav>
      </div>
      <S.CartButton onClick={openCart}>
    {items.length > 0 && (
      <S.SpanNotification>
          {items.length}
      </S.SpanNotification>
  )}
  <img src={cesta} alt='Cesta de Compras'/>
</S.CartButton>

      </S.HeaderRow>
      <S.NavMenu className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem><S.LinkHeader title='Clique aqui para acessar a pagina de categorias' to="/categories" onClick={()=> setIsMenuOpen(false)}>Categorias</S.LinkHeader></S.LinkItem>
          <S.LinkItem><S.LinkHeader title='Clique aqui para acessar a pagina de novidades' to="/#coming-soon" onClick={()=> setIsMenuOpen(false)}>Novidades</S.LinkHeader></S.LinkItem>
          <S.LinkItem><S.LinkHeader title='Clique aqui para acessar a pagina de promoções' to="/#on-sale" onClick={()=> setIsMenuOpen(false)}>Promoções</S.LinkHeader></S.LinkItem>
          </S.Links>
      </S.NavMenu>
    </S.HeaderBar>
  )
}

export default Header
