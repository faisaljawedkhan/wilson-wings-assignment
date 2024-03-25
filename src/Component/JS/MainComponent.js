import React, { useEffect, useState } from 'react'
import "../../Pages/CSS/AddInvestor.css"
import "../../Pages/CSS/Investors.css"
import CardComponent from './CardComponent';

const MainComponent = () => {
    // const [cards, setCards] = useState([]);
    // const history = useHistory();

    // useEffect(() => {
    //     const storedCards = JSON.parse(localStorage.getItem('cards'));
    //     if (storedCards) {
    //         setCards(storedCards);
    //     }
    // }, []);
    const [cards, setCards] = useState([]);
    // const addCard = (formData) => {
    //     const updatedCards = [...cards, formData];
    //     setCards(updatedCards);
    //     localStorage.setItem('cards', JSON.stringify(updatedCards));
    //     // history.push('/'); // Redirect to home page after form submission
    // };
    useEffect(() => {
        // Retrieve cards from local storage
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
                {/* <CardComponent /> */}
            </div>
        </>
    )
}

export default MainComponent