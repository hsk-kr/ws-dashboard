import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';
import { MonitoringAPIResponse } from '@ws-dashboard/types/api';

interface MonitoringDataContextType {
	monitoringData?: MonitoringAPIResponse;
	setMonitoringData: Dispatch<
		SetStateAction<MonitoringAPIResponse | undefined>
	>;
}

export const MonitoringDataContext = createContext<MonitoringDataContextType>(
	{} as MonitoringDataContextType
);

export const MonitoringDataProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [monitoringData, setMonitoringData] = useState<MonitoringAPIResponse>();

	const value = { monitoringData, setMonitoringData };

	return (
		<MonitoringDataContext.Provider value={value}>
			{children}
		</MonitoringDataContext.Provider>
	);
};
