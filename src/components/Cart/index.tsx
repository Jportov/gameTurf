import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

import { priceFormat } from '../../utils'
import { CartContainer, CartItem, Overlay, Prices, Quantity, Sidebar } from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

const getTotalPrice = () => {
    return items.reduce((acc, item) => {
      return acc += (item.prices.current!)
    }, 0)
}

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar className={isOpen ? 'slideOpen' : 'slideClose'}>
        {items.length > 0 ? (
          <>
            {items.map((items) => (
              <>
                <ul>
                  <CartItem key={items.id}>
                    <img src={items.media.thumbnail} alt={items.name} />
                    <div>
                      <h3>{items.name}</h3>
                      <Tag>{items.details.category}</Tag>
                      <Tag>{items.details.system}</Tag>
                      <span>{priceFormat(items.prices.current)}</span>
                    </div>
                    <button
                      onClick={() => removeFromCart(items.id)}
                      type="button"
                    />
                  </CartItem>
                </ul>
              </>
            ))}
            <Quantity>{items.length} jogo(s) no carrinho</Quantity>
            <Prices>
              Total de <span>{priceFormat(getTotalPrice())}</span>
              <span>Em até 6x sem juros</span>
            </Prices>
            <Button
              title="Clique aqui para continuar com a compra"
              type="button"
              onClick={goToCheckout}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart