import React from 'react'
import './HeaderB.css'

import Header from '../Header/Header'

const HeaderB = () => {
  return (
    <>
    <div className='header__parent'>
        <Header />
    <div className='header__bottom__sections'>
    <div className='header__bottom__section'>
      <p>RECEIVED</p>
    </div>
    <div className='header__bottom__section'>
      <p>NEGOTIATING</p>
    </div>
    <div className='header__bottom__section'>
      <p>COMPLETED</p>
    </div>
</div>
</div>
</>
  )
}

export default HeaderB
