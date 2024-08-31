import { EndpointDataProvider } from './store/EndpointDataContext';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <EndpointDataProvider>
      <Dashboard />
    </EndpointDataProvider>
  );
}

export default App;
