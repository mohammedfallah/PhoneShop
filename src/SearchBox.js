import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='input-group'>
            <div className='input-group-prepend'>
                <span className='input-group-text'><i className='fas fa-search'></i></span>
            </div>
            <input type='text' style={{ padding: 2 }}
                placeholder='نام, برند ,کالا...'
                className='form-control col-md-3'
                onChange={searchChange}
               />

        </div>
    );
}

export default SearchBox;


