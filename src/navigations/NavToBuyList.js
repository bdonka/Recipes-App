import React from 'react'
import { Link } from 'react-router-dom';

const NavToBuyList = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/buy-list">Go to Buy List</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavToBuyList;