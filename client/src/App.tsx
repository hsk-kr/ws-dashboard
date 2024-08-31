import { EndpointDataProvider } from './store/EndpointDataContext';
import Dashboard from './pages/Dashboard';
import { ToastProvider } from './store/ToastContext';

function App() {
  return (
    <ToastProvider>
      <EndpointDataProvider>
        <Dashboard />
      </EndpointDataProvider>
    </ToastProvider>
  );
}

export default App;
