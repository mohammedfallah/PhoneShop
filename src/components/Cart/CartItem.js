//CartItem کامپوننت 


import React from 'react'
import styled from 'styled-components'

export default function CartItem({ item, value }) {
    // data ایمپورت کردن  آیتم های زیر از فایل     
    const { id, title, img, price, total, count } = item;
    // context ایمپورت کردن  آیتم های زیر از فایل 
    const { increment, decrement, removeItem } = value;
    return (
        <CartItemWrapper>
        <div className='row my-1 text-capitalize text-center'>
            <div className='col-10 mx-auto col-lg-2'>
                <img
                    src={img}
                    style={{ width: '5rem', height: '5rem' }}
                    className='img-fluid'
                    alt='product'
                />
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>product :</span>
                {title}
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>price :</span>
                {price}
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                <div className='d-flex justify-content-center'>
                    <div>
                        <span className='btn btn-black mx-1' onClick={()=> decrement(id)}>-</span>
                        <span className='btn btn-black mx-1' >{count}</span>
                        <span className='btn btn-black mx-1' onClick={()=> increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <div className='cart-icon' onClick={()=> removeItem(id)}>
                    <i className='fas fa-trash'></i>
                </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <strong>Total  :  {total}</strong>

            </div>
        </div>
        </CartItemWrapper>
    )
}

const CartItemWrapper = styled.div`
   font-family:'IRANSansMobile' ;
`