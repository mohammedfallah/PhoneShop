//Cart کامپوننت  

import React, { Component } from 'react';
import Title from '../Tilte';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
import styled from 'styled-components'
export default class Cart extends Component {
  render() {
    return (
      <CartWrapper>
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name='سبد ' title='خرید' />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              )
            } else {
              return <EmptyCart />
            }
          }}
        </ProductConsumer>
      </section>
      </CartWrapper>
    )
  }
}

const CartWrapper = styled.section`
   font-family:'IRANSansMobile';
`
