import { parseISO, isAfter } from 'date-fns';

const date = '01-04-2018 18:00:00';
const parsedDate = parseISO(date);

const past = isAfter(parsedDate, new Date()); // true

export default Date;