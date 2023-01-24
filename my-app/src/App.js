//import logo from './logo.svg';
import './App.css';



function App() {
  const expenses = [
    {id:1, date :Date.now(), name : "ToiletPaper", price : 94.12 },
    {id:2, date :Date.now(), name : "New TV", price : 799.49 },
    {id:3, date :Date.now(), name : "Car Insurance", price : 294.67 },
    {id:4, date :Date.now(), name : "New Desk (Wooden)", price : 450 },
  ] 
  return (
  <div>
    <ul>
      {expenses.map((el, index) => {
       return <li key={index} >{el.name} - {el.price} -{el.date} </li>
      })}
    </ul>
  </div>
    
  );
}

export default App;
