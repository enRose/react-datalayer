import React from 'react';
import './App.css';
import { DatalayerRouter } from './components/with-datalayer'
import {pageRoutes} from './pages/pageRoutes'
import * as datalayerConfig from './components/with-datalayer/config.json'
import {Ana} from './analytics'

const App: React.FC = () => {

  const ana = Ana.getInstance()

  ana.set(datalayerConfig)

  return (
    <div className="App">
      <DatalayerRouter 
        pageRoutes={pageRoutes} 
        analytics={ana}
      />
    </div>
  )
}

export default App