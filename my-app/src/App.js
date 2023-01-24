import logo from './logo.svg';
import './App.css';



function App() {
  const reptiles = ["alligator", "snake", "lizard"];
  return (
    <ol>
    {reptiles.map((reptile) => (
      <li>{reptile}</li>
    ))}
  </ol>
    
  );
}

export default App;
