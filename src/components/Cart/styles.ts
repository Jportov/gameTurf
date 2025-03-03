import styled, { keyframes } from 'styled-components'
import closeIcon from '../../assets/images/fechar.png'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import { TagContainer } from '../Tag/styles'

const slideOpen = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideClose = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.deepBlack};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
    
            ${ButtonContainer} {
                background-color: ${colors.vibrantBlue};
                border: solid 2px ${colors.vibrantBlue};
                       
            }
  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.darkGray};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 260px;
  width: 100%;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;

  &.slideOpen {
    animation-name: ${slideOpen};
  }

  &.slideClose {
    animation-name: ${slideClose};
  }

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    font-weight: bold;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.softWhite};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${colors.softWhite};
    line-height: 20px;
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.softWhite};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.easeGray };
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-size: 18px;
    color: ${colors.softWhite};
  }

  span {
    display: block;
    font-size: 14px;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
    display: inline-block;
  }

  button {
    background-image: url(${closeIcon});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8;
    right: 0;
    cursor: pointer;
  }
`