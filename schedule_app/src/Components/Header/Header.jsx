import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
      <div className='header__top__section__parent'>
        <div className='hts__child hts__child1'>
            <h2>St Judes Hospital</h2>
            <p>Sarasota,FL. 33178</p>
        </div>
        <div className='hts__child hts__child2'>
            <div className='hts__child2__subChild'>
              <div>
            <h2>10 </h2>
            <p>October</p>
            </div>
            <div className='header__slash'>
              -
            </div>
            <div>
            <h2>17</h2>
            <p>December</p>
            </div>
            </div>
        </div>
        <div className='hts__child hts__child3'>
            <h2>20 Rooms</h2>
            <p>10 Singles, 10 doubles</p>
        </div>
      </div>
    </div>
  )
}

export default Header
