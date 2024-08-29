import { EndpointDataProvider } from './store/EndpointDataContext';
import Test from './components/Test';

function App() {
	return (
		<EndpointDataProvider>
			<Test />
		</EndpointDataProvider>
	);
}

export default App;
