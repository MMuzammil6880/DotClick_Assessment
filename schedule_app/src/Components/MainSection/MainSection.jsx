import React from 'react';
import './MainSection.css';

import Header from '../Header/Header';

import IMGLogo from '../assets/Vector 1.png';

const MainSection = () => {
  const sections = [
    {
      name: 'Holiday Inn',
      distance: '1.5 miles away from job location.',
      singlesPrice: '$120',
      doublesPrice: '$145',
    },
    {
      name: 'Holiday Inn',
      distance: '1.5 miles away from job location.',
      singlesPrice: '$120',
      doublesPrice: '$145',
    },
    {
      name: 'Holiday Inn',
      distance: '1.5 miles away from job location.',
      singlesPrice: '$120',
      doublesPrice: '$145',
    },
  ];

  return (
    <div className='MainSection__parent'>
      <Header />
      <div className='MainSection__Center'>
        <button className='btn btn__section'>
          COMPLETED
        </button>
      </div>
      <div className='detail__finding'>
                <p>Rare Find</p>
            </div>
      <div className='MainSection__Bottom'>
        {sections.map((section, index) => (
          <div className='MainSection__Bottom__Parent' key={index}>
            <div className='MBP__header'>
              <img src={IMGLogo} alt='' />
              <p>{section.name}</p>
            </div>
            <div className='MBP__middle__parent__Sec'>
              <div className='MBP__middle'>
                <p>{section.distance}</p>
              </div>
              <div className='MBP__Bfooter'>
                <div className='MBP__Bfooter__child'>
                  <p>Singles: {section.singlesPrice}</p>
                  <p>Doubles: {section.doublesPrice}</p>
                </div>
                <div className='MBP__footer__btn'>
                  <button className='main__footer__btn'>
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
