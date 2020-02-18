import React from 'react';
import './App.css';
import { DatalayerRouter } from './components/with-datalayer'
import {pageRoutes} from './pages/pageRoutes'

const App: React.FC = () => {
  return (
    <div className="App">
      <DatalayerRouter 
        pageRoutes={pageRoutes} 
        
      />
    </div>
  );
}

export default App