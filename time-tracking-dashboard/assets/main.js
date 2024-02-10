'use strict';

const activities = [
  {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const cardsEl = document.querySelector('.cards');

// display the activity data from the activities array dynamically
const displayActivities = () => {
  // loop over the data and get individual object
  activities.map((activity, i) => {
    const type = activity.title;
    // specify the time-frame
    const currentDuration = activity.timeframes.weekly.current;
    const previousDuration = activity.timeframes.weekly.previous;

    // construct HTML for each activity
    const html = `
      <div class="card ${type.toLowerCase().replace(' ', '-')} b8">
        <div class="img-wrapper">
          <img src='./assets/images/icon-${type
            .toLocaleLowerCase()
            .replace(' ', '-')}.svg' alt="${type} report" />
        </div>
        <div class="card-details b8">
          <div class="flex">
            <p class="type">${type}</p>
            <img src="./assets/images/icon-ellipsis.svg" alt="" />
          </div>
          <div class="duration flex">
            <p class="title">${currentDuration}hrs</p>
            <p class="indicator">Last Week - ${previousDuration}hrs</p>
          </div>
        </div>
      </div>
    `;
    cardsEl.insertAdjacentHTML('beforeend', html);
  });
};

window.addEventListener('DOMContentLoaded', displayActivities);
