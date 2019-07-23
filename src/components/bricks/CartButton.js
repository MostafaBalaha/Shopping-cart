import React from 'react';

const CartButton = props => {
   return (
       <button className="shoppingCart" onClick={props.openList}>
           <i className="shopping cart icon"></i>
           <span className='noOfItems'>{props.number}</span>
       </button>
   );
};

export default CartButton;