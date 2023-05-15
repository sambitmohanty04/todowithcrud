import './App.css';

import Sidebar from './component/Sidebar';
import Route from './component/Route';

import DropdownPage from './pages/DropdownPage';
import AccordianPage from './pages/AccordianPage'
import ModalPage from './pages/ModalPage';
import ButtonPage from './pages/ButtonPage';
import TablePage from './pages/TablePage';


function App() {
  return (
    <>
      <div className='conatiner mx-auto grid grid-cols-6 gap-4 mt-4'>
        <Sidebar />
        <div className='col-span-5'>
          <Route path='/accordian'>
            <AccordianPage />
          </Route>
          <Route path='/'>
            <DropdownPage />
          </Route>
          <Route path='/button'>
            <ButtonPage />
          </Route>
          <Route path='/modal'>
            <ModalPage />
          </Route>
          <Route path='/table'>
            <TablePage />
          </Route>
        </div>
      </div>
    </>
  );
}

export default App;
