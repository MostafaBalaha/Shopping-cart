import React from 'react';

const ProductItem = (props)=>{
    return(
      <div className={`productItem ${props.className}`} id={props.id}>
          <img src={props.image} alt="" className="productItem__img"/>
          <div className="productItem__detail">
              <h2 className="detail__title">{props.title}</h2>
              <span className="detail__dashLine">___</span>
              <h3 className="detail__price"><span className='detail__price--amount'>{props.price}</span>$</h3>
              <button className="detail__addCart" onClick={props.click}>Add To Cart</button>
          </div>
      </div>
    );
};

export default ProductItem;
