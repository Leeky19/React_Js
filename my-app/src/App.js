//import logo from './logo.svg';
import './App.css';



function App() {
  const expenses = [
    {id:1, date :new Date(), name : "ToiletPaper", price : 94.12 },
    {id:2, date :new Date(), name : "New TV", price : 799.49 },
    {id:3, date :new Date(), name : "Car Insurance", price : 294.67 },
    {id:4, date :new Date(), name : "New Desk (Wooden)", price : 450 },
  ] 
  return (
  <div>
    <ul>
      {expenses.map((price) => (
        <li key={price} >{price}</li>
       ))}
    </ul>
  </div>
    
  );
}

export default App;
