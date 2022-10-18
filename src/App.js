
import './App.css';
import Countries from './components/Countries';
import { useState } from 'react';
import Number from './components/Number';
import Button from './components/NumGenerator/Button';
import NumberGenerator from './components/NumGenerator/NumberGenerator';
import Skills from './components/Skills';
import Description from './Description';

function App() {
  const numbers = [1, 2, 3, 4, 5];

  const skills = [
    ['HTML', 10],
    ['CSS', 7],
    ['JavaScript', 9],
    ['React', 8],
  ]

  const countries = [
    { name: 'Finland', city: 'Helsinki' },
    { name: 'Sweden', city: 'Stockholm' },
    { name: 'Denmark', city: 'Copenhagen' },
    { name: 'Norway', city: 'Oslo' },
    { name: 'Iceland', city: 'Reykjavík' },
  ]

  const [value, setValue] = useState(32);


  return (
    <div className="App">
     <h1>30 Days Of React </h1>
     <h3>Number Generator</h3>
     <Button setValue={setValue} value={value}/>
     <NumberGenerator value={value}/>
     <Description/>
{/* 
     <ul>
     <Number numbers={numbers}/>
     </ul>

     <Skills skills={skills}/>

     <Countries countries={countries}/> */}

    



    </div>
  );
}

export default App;
