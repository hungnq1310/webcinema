import './App.css';
import { useState } from 'react';

// const Person = (props) => {
//   return (
//     <>
//       <h1> Name: {props.name}</h1>
//       <h1> Last Name: {props.lastName}</h1>
//       <h1> Age: {props.age}</h1>
//     </>
//   )
// }

// const App = () => {
//   return (
//     <div className="App">
//       <Person name="John" lastName={'Doe'}/>
//       <Person />
//       <Person />
//       <Person />
//     </div>
//   );
// }

const App = () => {

  const [counter, setCount] = useState(0);

  // not is not recommended to use this
  // <button onClick={() => setCount(counter-1)}>-</ button>

  return (
    <div className="App">
      <button onClick={() => setCount((preCount) => preCount-1)}>-</ button>
      <h1>{counter}</h1>
      <button onClick={() => setCount((nextCount) => nextCount-1)}>+</ button>
    </div>
  );
}

export default App;
