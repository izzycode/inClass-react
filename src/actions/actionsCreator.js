export const getFiveDayForecast = (city) => ({
  type: 'GET_FIVE_DAY_FORECAST',
  city
});

export const getSelectedDay = (day) => ({
  type: 'GET_SELECTED_DAY',
  day
});
