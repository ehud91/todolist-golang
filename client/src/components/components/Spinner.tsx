import React from 'react';

const Spinner = () => {

    return (
        <button 
            className="form-button"
            style={{marginLeft: 5}}
        >
            <div className={"loading-icon"}>+</div>
        </button>
    )
}

export default Spinner;