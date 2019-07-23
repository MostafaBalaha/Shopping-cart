import React from 'react';
import _ from 'lodash';

const CategoryMenu = props =>{
    let anchors = _.map(props.sub,function (el,index) {
        return (   <a key={index} className="item type" onClick={props.click}>
            {el}
        </a>);
    });
    return (
        <div className='CategoryMenu'>
            <div className="ui vertical text menu">
                <div className="header item">{props.catName}</div>
                {anchors}
            </div>
        </div>
    );
};

export default CategoryMenu;