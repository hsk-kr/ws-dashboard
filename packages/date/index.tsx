import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const getCurrentDateTimeAsString = () => {
	return dayjs().utc().format();
};
