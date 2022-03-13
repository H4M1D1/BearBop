import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>The Most Illustrious Collection in the Game!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.png'
              path='/buy'
            />
            <CardItem
              src='images/img-1.png'
              path='/buy'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.png'
              path='/buy'
            />
            <CardItem
              src='images/img-1.png'
              path='/buy'
            />
            <CardItem
              src='images/img-1.png'
              path='/buy'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;