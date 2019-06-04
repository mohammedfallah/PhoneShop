//CartList کامپوننت 


import React from 'react'
import CartItem from './CartItem';
import styled from 'styled-components'


export default function CartList({ value }) {
  const { cart } = value;
  return (
    <CartListWrapper>
    <div className='container-fluid'>
      {/*  مپ کردن    */}
      {cart.map(item => {
        return <CartItem key={item.key}
          item={item} value={value} />
      })}
    </div>
    </CartListWrapper>
  )
}

const CartListWrapper = styled.div`
  font-family:'IRANSansMobile' ;
`