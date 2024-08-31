import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useMemo,
	useState,
} from 'react';
import {
	Endpoint,
	EndpointData,
	EndpointDataMap,
} from '@ws-dashboard/types/endpoints';

interface EndpointDataContextType {
	endpointData: EndpointDataMap[];
	region: Endpoint;
	latestEndpointData?: EndpointData;
	setRegion: Dispatch<SetStateAction<Endpoint>>;
	setEndpointData: Dispatch<SetStateAction<EndpointDataMap[]>>;
}

export const EndpointDataContext = createContext<EndpointDataContextType>(
	{} as EndpointDataContextType
);

export const EndpointDataProvider = ({ children }: { children: ReactNode }) => {
	const [endpointData, setEndpointData] = useState<EndpointDataMap[]>([]);
	const [region, setRegion] = useState<Endpoint>('us-east');
	const latestEndpointData = useMemo<
		EndpointDataContextType['latestEndpointData']
	>(() => {
		for (let i = endpointData.length - 1; i >= 0; i--) {
			const data = endpointData[i];
			if (data[region] !== undefined) return data[region];
		}

		return undefined;
	}, [region, endpointData]);

	const value = {
		endpointData,
		setEndpointData,
		region,
		setRegion,
		latestEndpointData,
	};

	return (
		<EndpointDataContext.Provider value={value}>
			{children}
		</EndpointDataContext.Provider>
	);
};
