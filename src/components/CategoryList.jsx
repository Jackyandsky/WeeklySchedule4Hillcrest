// src/components/CategoryList.jsx
import React from 'react';
import PropTypes from 'prop-types';

const CategoryList = ({ title, clubs }) => {
  return (
    <div className="category">
      <h3>{title}</h3>
      <ul className="category-list">
        {clubs.map((club, index) => (
          <li key={index}>{club}</li>
        ))}
      </ul>
    </div>
  );
};

CategoryList.propTypes = {
  title: PropTypes.string.isRequired,
  clubs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CategoryList;