// src/components/WeeklySchedule.jsx
import React from 'react';
import './WeeklySchedule.css';
import Club from './Club';
import CategoryList from './CategoryList';
import { scheduleData, categoriesData } from './clubsData';

const WeeklySchedule = () => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  const periods = ['morning', 'lunch', 'afterSchool'];
  const periodLabels = {
    morning: 'Morning',
    lunch: 'Lunch',
    afterSchool: 'After School'
  };

  return (
    <div className="container">
      <h1>Hillcrest Middle School Clubs Weekly Schedule</h1>
      
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time Period</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          {periods.map(period => (
            <tr key={period}>
              <td>{periodLabels[period]}</td>
              {days.map(day => (
                <td key={`${period}-${day}`}>
                  {scheduleData[period][day] && scheduleData[period][day].length > 0 ? (
                    scheduleData[period][day].map((club, index) => (
                      <Club
                        key={index}
                        name={club.name}
                        time={club.time}
                        location={club.location}
                        teacher={club.teacher}
                        description={club.description}
                      />
                    ))
                  ) : (
                    <div className="empty-cell">-</div>
                  )}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td>Variable Time</td>
            <td colSpan="5">
              {scheduleData.variable.map((club, index) => (
                <Club
                  key={index}
                  name={club.name}
                  time={club.time}
                  location={club.location}
                  teacher={club.teacher}
                  description={club.description}
                />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      
      <h2>Choose Clubs by Interest</h2>
      
      <div className="categories-container">
        {categoriesData.map((category, index) => (
          <CategoryList 
            key={index}
            title={category.title}
            clubs={category.clubs}
          />
        ))}
      </div>
    </div>
  );
};

export default WeeklySchedule;