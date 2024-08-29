import { MonitoringDataProvider } from './store/MonitoringDataContext';
import Test from './components/Test';

function App() {
	return (
		<MonitoringDataProvider>
			<Test />
		</MonitoringDataProvider>
	);
}

export default App;
