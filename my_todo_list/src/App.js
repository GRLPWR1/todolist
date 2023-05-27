import { useState } from 'react';
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function App() {

  const [task, setTask] = useState('');
  const [list, setList] = useState([
    {
      id: uuidv4(),
      task,
      checked: false
    }
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === '') {
      return false;
    }
    setList((prev) => [...prev, {
      id: uuidv4(),
      task,
      checked: false
    }]);
    setTask('');
  };

  const changeStatus = (id) => {
    let checkedItem = list.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return { ...item }
    });
    setList(checkedItem)
  }

  return (
    <>
      <Header />
      <Main
        task={task}
        setTask={setTask}
        handleSubmit={handleSubmit}
        changeStatus={changeStatus}
        list={list}
      />
      <Footer />
    </>
  );
}

export default App;
