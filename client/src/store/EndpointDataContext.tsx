import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';
import { EndpointDataMap } from '@ws-dashboard/types/endpoints';

interface EndpointDataContextType {
	endpointData: EndpointDataMap[];
	setEndpointData: Dispatch<SetStateAction<EndpointDataMap[]>>;
}

export const EndpointDataContext = createContext<EndpointDataContextType>(
	{} as EndpointDataContextType
);

export const EndpointDataProvider = ({ children }: { children: ReactNode }) => {
	const [endpointData, setEndpointData] = useState<EndpointDataMap[]>([]);

	const value = { endpointData, setEndpointData };

	return (
		<EndpointDataContext.Provider value={value}>
			{children}
		</EndpointDataContext.Provider>
	);
};
