//import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';



function App() {
  const expenses = [
    {id:1, date : new Date(2018, 8, 22) , name : "ToiletPaper", price : 94.12 },
    {id:2, date : new Date(2018, 8, 22) , name : "New TV", price : 799.49 },
    {id:3, date : new Date(2018, 8, 22) , name : "Car Insurance", price : 294.67 },
    {id:4, date : new Date(2018, 8, 22) , name : "New Desk (Wooden)", price : 450 },
  ] 
  return (
  <div>
    <Expenses expenses={expenses} />

    <ul>
      {expenses.map((el, index) => {
       return <li key={index} >{el.name} - {el.price} -{el.date.toDateString()} </li>
      })}
    </ul>
  </div>
    
  );
}

export default App;
