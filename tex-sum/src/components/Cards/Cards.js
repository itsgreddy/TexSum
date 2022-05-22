import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Who is TEXSUM for?</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images'
                            text='Summarizing college students their boring long essays, by saving their time at free of cost. '
                            label='College Students'
                            path='/services'
                        />
                        <CardItem
                            src='images'
                            text='Helping professors to skim through their multi paged researchs. '
                            label='Professors'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images'
                            text='Saving readers time by summarizing all essential key notes from any particle page. '
                            label='Readers'
                            path='/services'
                        />
                        <CardItem
                            src='images'
                            text='Helping journalists have a easy way out of reading multiple monotonous articles.'
                            label='Journalists'
                            path='/products'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;