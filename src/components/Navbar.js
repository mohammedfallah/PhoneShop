
//کامپوننت Navbar
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox';
import logo from '../../src/img/logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm bg-pimary navba-dark px-sm-5  d-flex justify-content-between flex-row-reverse'>
                <SearchBox searchChange={this.onSearchChange} />
                <Link to='/'>
                    <img width={65} height={50} src={logo} alt='store' className='navbar-brand' style={{ padding: 0 }} />
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml5'>
                        <Link to='/' className='nav-link' style={{ fontSize: 20 }}>فروشگاه</Link>
                    </li>
                    <Link to='/cart' className='ml-auto'>
                        <ButtonContainer>
                            <span className='mr-2'>
                                <i className='fas fa-cart-plus'>سبد خرید </i>
                            </span>
                        </ButtonContainer>
                    </Link>
                </ul>


            </NavWrapper>
        )
    }
}

export default Navbar
// NavWrapper استایل کامپوننت 
const NavWrapper = styled.nav`
          background: var(--mainBlue);
  .nav-link{
                color: var(--mainWhite) !important;
                fontSize:1.3rem;
                text-transform:capitalize;
            }
`;