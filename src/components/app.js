import React from 'react';
import _ from 'lodash';

import ProductList from './ProductList'
import Categories from './Categories'
import CartList from './CartList'

import SerachBar from './bricks/SearchBar'
class App extends React.Component{
     tempData ={
         "products": [
             {
                 "availableSizes": [
                     "S",
                     "XS"
                 ],
                 "availableColors": [
                     "Black",
                     "Grey"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "4 MSL",
                 "id": 12,
                 "installments": 9,
                 "isFreeShipping": true,
                 "price": 10.9,
                 "sku": 12064273040195392,
                 "style": "Black with custom print",
                 "title": "Cat Tee Black T-Shirt",
             },
             {
                 "availableSizes": [
                     "M"
                 ],
                 "availableColors": [
                     "Black",
                     "Red"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "",
                 "id": 13,
                 "installments": 5,
                 "isFreeShipping": true,
                 "price": 29.45,
                 "sku": 51498472915966370,
                 "style": "Front print and paisley print",
                 "title": "Dark Thug Blue-Navy T-Shirt"
             },
             {
                 "availableSizes": [
                     "X",
                     "L",
                     "XL"
                 ],
                 "availableColors": [
                     "Black",
                     "Grey"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "GPX Poly 1",
                 "id": 14,
                 "installments": 3,
                 "isFreeShipping": true,
                 "price": 9,
                 "sku": 10686354557628304,
                 "style": "Front tie dye print",
                 "title": "Sphynx Tie Dye Wine T-Shirt"
             },
             {
                 "availableSizes": [
                     "X",
                     "L",
                     "XL",
                     "XXL"
                 ],
                 "availableColors": [
                     "Black",
                     "Grey"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "Treino 2014",
                 "id": 15,
                 "installments": 5,
                 "isFreeShipping": true,
                 "price": 14,
                 "sku": 11033926921508488,
                 "style": "Black T-Shirt with front print",
                 "title": "Skuul"
             },
             {
                 "availableSizes": [
                     "X",
                     "L"
                 ],
                 "availableColors": [
                     "Grey"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "",
                 "id": 11,
                 "installments": 3,
                 "isFreeShipping": true,
                 "price": 13.25,
                 "sku": 39876704341265610,
                 "style": "Wine",
                 "title": "Wine Skul T-Shirt"
             },
             {
                 "availableSizes": [
                     "X",
                     "L",
                     "XL",
                     "XXL"
                 ],
                 "availableColors": [
                     "Grey"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "14/15 s/nº",
                 "id": 0,
                 "installments": 9,
                 "isFreeShipping": true,
                 "price": 10.9,
                 "sku": 8552515751438644,
                 "style": "Branco com listras pretas",
                 "title": "Cat Tee Black T-Shirt"
             },
             {
                 "availableSizes": [
                     "X",
                     "L",
                     "XL",
                     "XXL"
                 ],
                 "availableColors": [
                     "Black",
                     "Grey"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "14/15 s/nº",
                 "id": 1,
                 "installments": 9,
                 "isFreeShipping": true,
                 "price": 10.9,
                 "sku": 18644119330491310,
                 "style": "Preta com listras brancas",
                 "title": "Sphynx Tie Dye Grey T-Shirt"
             },
             {
                 "availableSizes": [
                     "X",
                     "L"
                 ],
                 "availableColors": [
                     "Black",
                     "Grey"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "14/15 s/nº",
                 "id": 2,
                 "installments": 7,
                 "isFreeShipping": true,
                 "price": 14.9,
                 "sku": 11854078013954528,
                 "style": "Branco com listras pretas",
                 "title": "Danger Knife Grey"
             },
             {
                 "availableSizes": [
                     "X",
                     "L"
                 ],
                 "availableColors": [
                     "Black",
                     "Grey"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "2014 s/nº",
                 "id": 3,
                 "installments": 7,
                 "isFreeShipping": true,
                 "price": 14.9,
                 "sku": 876661122392077,
                 "style": "Preto com listras brancas",
                 "title": "White DGK Script Tee"
             },
             {
                 "availableSizes": [
                     "XL"
                 ],
                 "availableColors": [
                     "Black",
                     "Grey"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "14/15 s/nº - Jogador",
                 "id": 4,
                 "installments": 12,
                 "isFreeShipping": false,
                 "price": 25.9,
                 "sku": 9197907543445676,
                 "style": "Branco com listras pretas",
                 "title": "Born On The Streets"
             },
             {
                 "availableSizes": [
                     "X",
                     "L",
                     "XL"
                 ],
                 "availableColors": [
                     "Black",
                     "Grey"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "14/15 + Camiseta 1º Mundial",
                 "id": 5,
                 "installments": 9,
                 "isFreeShipping": false,
                 "price": 10.9,
                 "sku": 10547961582846888,
                 "style": "Preto",
                 "title": "Tso 3D Short Sleeve T-Shirt A"
             },
             {
                 "availableSizes": [
                     "XL",
                     "XXL"
                 ],
                 "availableColors": [
                     "Black",
                     "Grey"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "Goleiro 13/14",
                 "id": 6,
                 "installments": 0,
                 "isFreeShipping": true,
                 "price": 49.9,
                 "sku": 6090484789343891,
                 "style": "Branco",
                 "title": "Man Tie Dye Cinza Grey T-Shirt"
             },
             {
                 "availableSizes": [
                     "S"
                 ],
                 "availableColors": [
                     "Black",
                     "Grey"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "1977 Infantil",
                 "id": 7,
                 "installments": 4,
                 "isFreeShipping": true,
                 "price": 22.5,
                 "sku": 18532669286405344,
                 "style": "Preto com listras brancas",
                 "title": "Crazy Monkey Black T-Shirt"
             },
             {
                 "availableSizes": [
                     "XL"
                 ],
                 "availableColors": [
                     "Black",
                     "Grey"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "",
                 "id": 8,
                 "installments": 4,
                 "isFreeShipping": false,
                 "price": 18.7,
                 "sku": 5619496040738316,
                 "style": "Azul escuro",
                 "title": "Tso 3D Black T-Shirt"
             },
             {
                 "availableSizes": [
                     "L",
                     "XL"
                 ],
                 "availableColors": [
                     "Black",
                     "Grey"
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "",
                 "id": 9,
                 "installments": 5,
                 "isFreeShipping": true,
                 "price": 134.9,
                 "sku": 11600983276356164,
                 "style": "",
                 "title": "Crazy Monkey Grey"
             },
             {
                 "availableSizes": [
                     "L",
                     "XL"
                 ],
                 "availableColors": [
                     "Black",
                     "Grey",
                     'Red'
                 ],
                 "currencyFormat": "$",
                 "currencyId": "USD",
                 "description": "",
                 "id": 10,
                 "installments": 9,
                 "isFreeShipping": true,
                 "price": 49,
                 "sku": 27250082398145996,
                 "style": "",
                 "title": "On The Streets Black T-Shirt"
             }
         ]
     };

     state={
        products:this.tempData.products,
        cart:[],
         cartNo:0,
         search:'',
         category:''
    };

     onSearchHandler = (e) => {
         this.setState({search:e.target.value});

     };
     onClickHandler = (e) =>{
         let tempCart = this.state.cart;
         let products = this.state.products;
         let obj = products.find((o,i) => {
             if(o.id == e.target.parentElement.parentElement.id)
                 return products[i];
         });
         tempCart.push(obj);
         this.setState({cart:tempCart});
     };
     onCatSelect =(e) =>{
         if(this.state.category === '' || this.state.category !== e.target.innerText)
         this.setState({category:e.target.innerText});
         else if(this.state.category === e.target.innerText)
             this.setState({category:''});

     };
     removeFromCart = e =>{
         let tempCart = this.state.cart;
         let products = this.state.products;
         let obj = products.find((o,i) => {
             if(o.id == e.target.parentElement.parentElement.parentElement.id)
                 return i;
         });
         tempCart.splice(obj,1);
         this.setState({cart:tempCart});
     };
    productsSelector= () =>{
        let search = this.state.search;
        let category = this.state.category;
        if(search ==='' && category===''){
           return this.state.products;

        }else{
            if(search !== ''){
                let re = new RegExp(search,'i');
                let temp =[];
                _.forEach(this.state.products,function (prod) {
                    if(re.test(prod.title)){
                        temp.push(prod);
                    }

                });
                return temp;
            }else if(category !== ''){
                let temp = [];
                _.forEach(this.state.products,function (prod) {
                    if(prod.availableSizes.indexOf(category) !== "undefined"){
                        if(prod.availableSizes.indexOf(category)>0){
                            temp.push(prod);
                        }
                        else if(prod.availableColors.indexOf(category)>0){
                            temp.push(prod);
                        }
                    }


                });
                return temp;
            }else{
                return this.tempData.products;
            }
        }
    };
    render(){
        return(
          <div className={`App`}>
              <CartList cart={this.state.cart} removeHander={e => this.removeFromCart(e)} numItems={this.state.cart.length}/>
              <div className="row">
                  <div className="col-3 col-lg-3 col-xl-3 leftPanel ">
                        <SerachBar handler={this.onSearchHandler} value={this.state.search}/>
                        <Categories handler={this.onCatSelect}/>
                  </div>
                  <div className="col-8 col-lg-8 col-xl-8 offset-4 offset-lg-4 offset-md-4">
                      <ProductList list={this.productsSelector()} click={e=>this.onClickHandler(e)}/>
                  </div>
              </div>
          </div>
        );
    }
}

export default App;