//CartColumns کامپوننت 

import React, { Component } from 'react'
import styled from 'styled-components'
export default function CartColumns() {

    return (
        <CartColumnsWrapper>
        <div className='container-fluid text-center d-none 
        d-lg-block' >
            <div className='row'>
                <div className='col-10 mx-auto col-lg-2'>
                    <p clasName='text-uppercase'>محصولات</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p clasName='text-uppercase'>نام محصول</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p clasName='text-uppercase'>قیمت </p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p clasName='text-uppercase'>تعداد </p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p clasName='text-uppercase'>حذف از سبد</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p clasName='text-uppercase'>مجموع</p>
                </div>
            </div>
        </div>
        </CartColumnsWrapper>
    )

}


const CartColumnsWrapper = styled.div`
   font-family:'IRANSansMobile';
`