import { useContext } from 'react';
import { EndpointDataContext } from '../store/EndpointDataContext';

export default function useEndpointData() {
	return useContext(EndpointDataContext);
}
