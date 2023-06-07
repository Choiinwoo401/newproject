import { createContext } from 'react';

export const CalendarContext = createContext({
  events: [],
  setEvents: () => {},
  date: null,
  setDate: () => {},
  days: [],
  setDays: () => {},
  clicked: '',
  setClicked: () => {}
});