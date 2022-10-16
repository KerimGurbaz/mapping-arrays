
import './App.css';
import Number from './components/Number';
import Skills from './components/Skills';

function App() {
  const numbers = [1, 2, 3, 4, 5];

  const skills = [
    ['HTML', 10],
    ['CSS', 7],
    ['JavaScript', 9],
    ['React', 8],
  ]

  return (
    <div className="App">
     <h1>Numbers List</h1>

     <ul>
     <Number numbers={numbers}/>
     </ul>

     <Skills skills={skills}/>

    </div>
  );
}

export default App;
