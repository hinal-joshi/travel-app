import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
import images from '../img';




function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={images[0]}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem
                        src={images[1]}
                        text="Travel through the islands of Bali on a private cruise"
                        label="Luxury"
                        path="/services"
                        />
                        
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src={images[2]}
                        text="Deep dive inside the Pacific Ocean and explore the sea world"
                        label="Mystery"
                        path="/services"
                        />
                        <CardItem
                        src={images[3]}
                        text="Experience the most beautiful sunset in Greece"
                        label="Nature"
                        path="/services"
                        />
                        <CardItem
                        src={images[4]}
                        text="Visit the lands of Sahara desert"
                        label="Travel"
                        path="/services"
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
