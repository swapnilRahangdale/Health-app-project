import React, { useState } from 'react';
import './App.css';
import MenuBar from './MenuBar/MenuBar';
import ShowHealthData from './component/ShowHealthData/ShowHealthData';
import AddHealthData from './component/AddHealthData/AddHealthData';
import AnaData from './component/AnaData/AnaData';
import { MainContextWrapper } from './Store/mainContext/mainContext';


function App() {
  const [loadComponent, setLoadComponent] = useState(<AddHealthData/>)
  
  const  buttonArr = [
    {
      id: 1,
      label: 'add-health',
      btFun: () => {setLoadComponent(<AddHealthData/>)}
    },
    {
      id: 2,
      label: 'show-health',
      btFun: () => {setLoadComponent(<ShowHealthData/>)}
    },
    {
      id: 3,
      label: 'analytics-health',
      btFun:() => {setLoadComponent(<AnaData/>)}
    },
  ];

  return (
  <MainContextWrapper>
       <div>
      <MenuBar buttonArr={buttonArr} />
    {loadComponent}
    </div>
  </MainContextWrapper>
  );
}

export default App;
