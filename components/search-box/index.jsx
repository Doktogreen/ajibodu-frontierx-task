import React from 'react';

const SearchBox = ({change, reference}) => {
    return (
        <div className='container search-container'>
            <div className='row'>
                <div className=''>
                    <form className='search-form'>
                        <input className='search-box 
                            text-grey-400 text-sm form-control' 
                            placeholder='Lorem Ipsum' 
                            onChange={change}
                            ref={reference}
                            type='text' 
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBox;