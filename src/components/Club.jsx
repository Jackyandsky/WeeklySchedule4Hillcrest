// src/components/Club.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Club = ({ name, time, location, teacher, description }) => {
  return (
    <div className="club-container">
      <div className="club-name">{name}</div>
      {time && <div className="club-time">{time}</div>}
      <div className="club-location">Location: {location}</div>
      <div className="club-teacher">Sponsor: {teacher}</div>
      <div className="club-desc">{description}</div>
    </div>
  );
};

Club.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string,
  location: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Club;