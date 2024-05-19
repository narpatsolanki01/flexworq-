import React from 'react'

function Center({ children, position }) {
    return (
        <div className={`d-flex justify-content-center align-items-center ${position ? position : ''}`}>
            {children}
        </div>
    )
}

export default Center