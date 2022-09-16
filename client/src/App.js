import './App.css';
import { Routes, Route } from 'react-router-dom';
import PetForm from './components/PetForm';
import Main from './views/Main';
import Edit from './views/Edit';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/pets/new' element={<PetForm />} />
        <Route path='/pets/:id/edit' element={<Edit />} />
        <Route path='/pets/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
