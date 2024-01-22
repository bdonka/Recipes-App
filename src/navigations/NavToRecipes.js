import React from 'react'
import { Link } from 'react-router-dom';

const NavToRecipes = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="link to-recipes">
            <Link to="/recipes">Go to Recipes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavToRecipes;