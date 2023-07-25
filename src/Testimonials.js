import React from "react"
import './styles.scss';

const testimonialInfo = [
    {
        imgSrc: './Testimonial-Pictures/Sara_Lopez.jpg',
        name: 'Sara Lopes',
        soMeName: 'Sara72',
        coment: 'Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!',
        rating: '5'
    },
    {
        imgSrc: './Testimonial-Pictures/Johnny_Bernard.jpg',
        name: 'Johnny Bernard',
        soMeName: 'Johnny_Utah',
        coment: 'We had such a great time celebrating my grandmothers bitthday!',
        rating: '5'
    },
    {
        imgSrc: './Testimonial-Pictures/Ramir_Santos.jpg',
        name: 'Ramir Santos',
        soMeName: 'San_Rami',
        coment: 'Best Feta Salad in town. Flawless everytime!',
        rating: '5'
    },
    {
        imgSrc: './Testimonial-Pictures/Susan_Bronson.jpg',
        name: 'Susan Bronson',
        soMeName: 'Sweet Susi',
        coment: 'Such a chilled out atmosphere - love it!',
        rating: '5'
    },
]

function Testimonials() {
    return (
        <div className="T-Card-Container">
            {testimonialInfo.map((card, index) => (
                <div className="T-Card" key={index}>
                    <div className='Picture-n-Name'>
                        <img src={card.imgSrc} />
                        <div>
                            <p><strong>{card.name}</strong></p>
                            <p><b>{card.soMeName}</b></p>
                        </div>
                    </div>
                    <p><i>"{card.coment}"</i></p>
                    <img className="Stars" src = "./Testimonial-Pictures/stars.png"/>
                </div>
            ))}
        </div>
    );
};

export default Testimonials