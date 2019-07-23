import React from 'react';
import _ from 'lodash';

import ProductItem from './bricks/ProductItem';

class ProductList extends React.Component{
    state={
        list:this.props.list
    };
    componentDidUpdate(){
        if(this.state.list !== this.props.list){
            this.setState({list:this.props.list})
        }
    }

    items = () => {
        let clickHandler = (e)=>{this.props.click(e)};
        if(this.state.list.length===0){
            return <h1>No product found!</h1>
        }
        return (_.map(this.state.list,function (item) {
        return (

            <ProductItem
                id={item.id}
                key={item.id}
                className='col-4 col-lg-4 col-xl-4 col-md-4'
                image='https://previews.123rf.com/images/kchung/kchung1712/kchung171200263/92284899-crew-neck-t-shirt-blank-white-cloth-template-for-men-with-invisible-model-isolated-on-white-backgrou.jpg'
                title={item.title}
                price={item.price}
                click={clickHandler}
            />
        );
    }))};
    render(){
        return(
            <div className='row'>
                {this.items()}
            </div>
        );
    }
}

export default ProductList;
