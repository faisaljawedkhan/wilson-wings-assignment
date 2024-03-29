import React, { useEffect, useState } from 'react'
import "../../Pages/CSS/AddInvestor.css"
import "../../Pages/CSS/Investors.css"
import CardComponent from './CardComponent';

const MainComponent = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        const storedCards = JSON.parse(localStorage.getItem('cards'));
        if (storedCards) {
            setCards(storedCards);
        }
    }, []);
    return (
        <>
            <div className="col-md-6 second-right-investor-card-div">
                {cards.map((cardData, index) => (
                    <CardComponent key={index} data={cardData} />
                ))}
            </div>
        </>
    )
}

export default MainComponent