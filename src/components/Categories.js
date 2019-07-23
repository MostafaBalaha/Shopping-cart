import React from 'react';
import CategoryMenu from './bricks/CategoryMenu'

const Categories = props =>{

    return (
        <div>
            <CategoryMenu
                catName='Sizes'
                sub={['XXL','XL','L','M','S','XS']}
                click={props.handler}
            />
            <CategoryMenu
                catName='Colors'
                sub={['Black','Grey','Red']}
                click={props.handler}
            />
        </div>
    );
};
export default Categories;