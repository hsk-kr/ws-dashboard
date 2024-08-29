import { useContext } from 'react';
import { MonitoringDataContext } from '../store/MonitoringDataContext';

export default function useMonitoringData() {
	return useContext(MonitoringDataContext);
}
