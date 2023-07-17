import React from "react"
import './styles.scss';

const cardInfo = [
    {
        imgSrc: './DishPhotos/GreekSalad.jpg',
        title: 'Greek Salad',
        price: '$12.99',
        description:'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
    },
    {
        imgSrc: './DishPhotos/Bruschetta.jpg',
        title: 'Bruschetta',
        price: '$5.99',
        description:'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
        imgSrc: './DishPhotos/LemonDessert.jpg',
        title: 'Lemon Dessert',
        price: '$5.00',
        description:'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    },

]

function SpecialsSection() {
    return (
        <div className="Card-Container">
            {cardInfo.map((card, index) => (
                <div className="Card" key={index}>
                    <img src={card.imgSrc} alt={'picture of the dish {card.title}'}/>
                    <div className="Card-WS">
                        <div className='Name_Price-Column'>
                            <h4>{card.title}</h4>
                            <p>{card.price}</p>
                        </div>
                        <p>{card.description}</p>
                        <button>
                            <img src='./Icons/CartIcon.svg'/>
                            Add to cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SpecialsSection