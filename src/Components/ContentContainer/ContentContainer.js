import React from 'react'
import "./ContentContainer.css"

const ContentContainer = (props) => {
    var {children} = props;
    return (
        <div className="content-container">
            <div className="content-area">
                {children}
            </div>
        </div>
    )
}

export default ContentContainer
