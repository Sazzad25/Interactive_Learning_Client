import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './components/Routes/Routes/Routes';

function App() {
  return (
    <div className="App">
       <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
