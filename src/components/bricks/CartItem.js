import React from 'react';

const CartItem = (props)=>{
    return(
        <div className="cartItem" id={props.id}>
            <div className="row">
                <div className="col-3 col-lg-3">
                    <img
                        src={props.image} alt="" className="item__photo"/>
                </div>
                <div className="col-9 col-lg-9">
                    <h2 className="item__title">{props.title}</h2>
                    <h2 className="item__quantity">{`Quantity: ` + props.quantity}</h2>
                    <h2 className="item__price">Price: {props.price}$</h2>
                    <button className="item__remove" onClick={props.removeHandler}>X</button>
                </div>
            </div>
            <span className="cartItem__seperateLine">__________________</span>

        </div>
    );
};

export default CartItem;