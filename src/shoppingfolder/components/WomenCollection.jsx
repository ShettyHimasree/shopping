
import React, { useState} from 'react'

const WomenCollection = (props) => {
    const { title, image1, image2, image3, image4, image5, image6, prize1, prize2, prize3, prize4, prize5, prize6 } = props.ladiesFashion
    
    return (
        <div className='collectionSection'>
            <div className='bannerBox'>
                <img src='assets/LadiesBanner.gif' alt={title} />
            </div>
            <h2>{title}</h2>
            <div className='menImages'>
                <div>
                    <img src={image1} alt={title} />
                    <button className="addButton">Prize-{prize1}</button>
                </div>
                
                <div>
                    <img src={image2} alt={title} />
                    <button className="addButton">Prize-{prize2}</button>
                </div>
                <div>
                    <img src={image3} alt={title} />
                    <button className="addButton">Prize-{prize3}</button>
                </div>
                <div>
                    <img src={image4} alt={title} />
                    <button className="addButton">Prize-{prize4}</button>
                </div>
                <div>
                    <img src={image5} alt={title} />
                    <button className="addButton">Prize-{prize5}</button>
                </div>
                <div>
                    <img src={image6} alt={title} />
                    <button className="addButton">Prize-{prize6}</button>
                </div>

            </div>

        </div>
    )
}

export default WomenCollection
