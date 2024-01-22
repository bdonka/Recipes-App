import React from 'react'
import { Link } from 'react-router-dom';

const NavToBuyList = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="link to-buylist">
            <Link to="/buy-list">Go to Buy List</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavToBuyList;