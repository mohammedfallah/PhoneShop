import React from 'react';
import {Switch,Route} from 'react-router-dom' ;
import './App.css';
import 'bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import Navbar from './components/Navbar' ;
import ProductList from './components/ProductList' ;
import Details from './components/Details' ;
import Cart from './components/Cart/Cart' ;
import Default from './components/Default' ;
import Modal from './components/Modal' ;
import Footer from './components/Footer';
import Login from './components/Login' ;
import ForgotPassword from './components/ForgotPassword' ;
function App() {
  return (
  /* React.Fragment استفاده از */
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route path='/login' component={Login} />
          <Route path='/forgotpassword' component={ForgotPassword} />
          <Route  component={Default} />
        </Switch>
        <Modal />
        <Footer />
      </React.Fragment>
  );
}

export default App;
