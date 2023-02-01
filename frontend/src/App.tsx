import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TestData, GetTestDataResponse } from './types/TestType';
import {getTestData} from './api'
import TestTile from './components/TestTile/TestTile';



function App() {
  const [data, setData] = useState<TestData[] | undefined>([{id : 0, title : "asdf", description : "qwerty"}]);

  useEffect(() => {
    getTestData().then((result) => {
      setData(result);
    });
    
  },[])

  return (
    <div>
      <header>Данные из Django</header>
      <hr></hr>
      {data?.map((item) => {
        return <TestTile key={item.id} testData={item} />;
      })}
    </div>
  );
}

export default App;
