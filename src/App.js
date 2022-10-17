
import './App.css';
import Countries from './components/Countries';

import Number from './components/Number';
import NumberGenerator from './components/NumGenerator/NumberGenerator';
import Skills from './components/Skills';

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

  return (
    <div className="App">
     <h1>30 Days Of React </h1>
     <h3>Number Generator</h3>
     <NumberGenerator/>
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
