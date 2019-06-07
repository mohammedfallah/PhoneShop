//ProductList کامپوننت 
import React, { Component } from 'react'
import Product from './Product';
import Title from './Tilte';
import { ProductConsumer } from '../context';
import { storeProducts } from '../data';
export default class ProductList extends Component {
  state = {
    products: storeProducts
  }
  render() {

    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='لیست' title='محصولات' />
            <hr />
            <div className='row'>
              <ProductConsumer>
                {value => {
                  return this.state.products.map(product => {
                    return <Product key={product.id} product={product} />
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

