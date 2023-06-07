import './App.css';
// import db from './db.json'

import Sidebar from './component/Sidebar';
import Route from './component/Route';

import DropdownPage from './pages/DropdownPage';
import AccordianPage from './pages/AccordianPage'
import ModalPage from './pages/ModalPage';
import ButtonPage from './pages/ButtonPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';
import ListPage from './pages/ListPage';
// import ToDo from './pages/ToDo';


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
          <Route path='/count'>
            <CounterPage initialCount={10} />
          </Route>
          <Route path='/listPage'>
            <ListPage  />
          </Route>
          {/* <Route path='/todo'>
            <ToDo />
          </Route> */}
        </div>
      </div>
    </>
  );
}

export default App;
