import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [activeListItem, setActiveListItem] = useState('currentRequests');

  const handleListItemClick = (item) => {
    setActiveListItem(item);
  };

  return (
    <div className="sidebar__parent">
      <div className='sidebar__header'>
      <div className="sb__heading">
        <h2>LODGN</h2>
      </div>
      <div className="sd__list__parent">
        <ul>
          <li className={activeListItem === 'currentRequests' ? 'active' : ''} onClick={() => handleListItemClick('currentRequests')}>
            Current requests
          </li>
          <li className={activeListItem === 'ongoingStays' ? 'active' : ''} onClick={() => handleListItemClick('ongoingStays')}>
            Ongoing stays
          </li>
          <li className={activeListItem === 'previousStays' ? 'active' : ''} onClick={() => handleListItemClick('previousStays')}>
            Previous stays
          </li>
          <li className={activeListItem === 'reports' ? 'active' : ''} onClick={() => handleListItemClick('reports')}>
            Reports
          </li>
        </ul>
      </div>
      </div>
      <div className="sidebar__footer">
        <div>
          <button className="btn">Log - Out</button>
        </div>
        <div className='sf__bottom'>
          <p>Help-Desk</p>
          <p>786-874 9988</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
