import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm'

function App() {
  const inputs = [
    {id:1, name : "Nom"},
    {id:2, name : "Age"},
  ] 
    return(
      <div>
        <MyForm inputs={inputs} />

      </div>
    )
}

export default App;
