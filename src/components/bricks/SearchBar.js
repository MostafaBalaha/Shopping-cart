import React from 'react';

const SearchBar = props =>{
    return (
        <div className='ui container' >
            <div className="ui category search " >
                <div className="ui icon input" style={{width:'100%'}}>
                    <input className="prompt" type="text" placeholder="Search..." value={props.value} onChange={props.handler}/>
                        <i className="search icon"></i>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;