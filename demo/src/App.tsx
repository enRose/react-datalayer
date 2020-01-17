import React from 'react';
import './App.css';
import { RouterWithDatalayer } from './components/with-datalayer'
import {pageRoutes} from './pages/pageRoutes'

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterWithDatalayer pageRoutes={pageRoutes} relativePath="../../pages" />
    </div>
  );
}

export default App