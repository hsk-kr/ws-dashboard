import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.extend(utc);

export const getCurrentDateTimeAsString = () => {
	return dayjs().utc().format();
};

export const formatLocalDateTime = (datetime: string) => {
	return dayjs(datetime).local().format('YYYY-MM-DD HH:mm:ss');
};

export const fromNow = (datetime: string) => {
	return dayjs(datetime).utc().fromNow();
};
