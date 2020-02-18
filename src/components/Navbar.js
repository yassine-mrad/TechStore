import React from 'react';
const Navbar = () => {
    return (  
    <div className="header-middle">
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="logo pull-left">
            <a href="index.html"><img src="images/home/logo.png" alt="" /></a>
          </div>
          <div className="btn-group pull-right">
           
          
          </div>
        </div>
        <div className="col-sm-8">
          <div className="shop-menu pull-right">
            <ul className="nav navbar-nav">
              <li><a href="#"><i className="fa fa-user" /> Account</a></li>
              <li><a href="#"><i className="fa fa-star" /> Wishlist</a></li>
              <li><a href="checkout.html"><i className="fa fa-crosshairs" /> Checkout</a></li>
              <li><a href="cart.html"><i className="fa fa-shopping-cart" /> Cart</a></li>
              <li><a href="login.html"><i className="fa fa-lock" /> Login</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> );
}
 
export default Navbar;