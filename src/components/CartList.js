import React from 'react';
import _ from 'lodash';

import CartButton from './bricks/CartButton'
import CartItem from './bricks/CartItem'

class CartList extends React.Component{
    state={
        shown:0,
        cart:this.props.cart,
    };
    closeHandlder(e){
        this.setState({shown:0});
    }
    openHandler(e){
        this.setState({shown:1});
    }
    toggleList(){
        if(this.state.shown ===1){
            return {
                transform:'translateX(0)'
            }
        }else{
            return {
                transform:'translateX(35rem)'
            }
        }
    }
    items = ()=>{
        let removeHandler = (e) => this.props.removeHander(e);
        return _.chain(this.state.cart).groupBy('id').values().map(
            group=>{
                let product = {...group[0]};
                return <CartItem
                            id={product.id}
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            quantity={group.length}
                            image={'https://previews.123rf.com/images/kchung/kchung1712/kchung171200263/92284899-crew-neck-t-shirt-blank-white-cloth-template-for-men-with-invisible-model-isolated-on-white-backgrou.jpg'}
                            removeHandler={removeHandler}
                    />

            }
        ).value();
    };

    checkoutTotalPrice = () =>{
        return _.chain(this.state.cart).groupBy('id').map(
            group =>{
                return group[0].price * group.length;
            }
        ).sum().value();
    };
    makeCheckout = ()=>{
      alert('Total price of your products is: ' + this.checkoutTotalPrice());
    };
    render(){
        return(
            <div>
                <CartButton number={this.props.numItems} openList={(e)=>this.openHandler(e)}/>
                <div className={`cartList`} style={this.toggleList()}>
                    <button className='cartList__close' onClick={(e) =>this.closeHandlder(e)}>X</button>
                    <div className="cartList__header">
                        <i className="shopping cart icon"></i>
                        <span className='noOfItems'>{this.props.numItems}</span>
                        <h1 className="cartList__heading">Cart List</h1>
                    </div>
                    <span className="cartList__seperateLine">__________________</span>
                    <div className="cartList__items">
                        {this.items()}
                    </div>
                    <div className="checkout">
                        <h1 className="checkout__heading">Total Price</h1>
                        <h1 className="checkout__totalPrice"><span>{this.checkoutTotalPrice()}</span> $</h1>
                        <button className="checkout__button" onClick={this.makeCheckout}>Checkout</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default CartList;