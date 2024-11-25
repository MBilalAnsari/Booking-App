import React from 'react'
import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItems">
                <img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg" alt="" className='featureImg' />
                <div className="featuredTitles">
                    <h1>Yes</h1>
                    <h2>Yes</h2>
                </div>
            </div>
            <div className="featuredItems">
                <img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg" alt="" className='featureImg' />
                <div className="featuredTitles">
                    <h1>Yes</h1>
                    <h2>Yes</h2>
                </div>
            </div>
            <div className="featuredItems">
                <img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg" alt="" className='featureImg' />
                <div className="featuredTitles">
                    <h1>Yes</h1>
                    <h2>Yes</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured
