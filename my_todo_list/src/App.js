import { useState } from 'react';
import Form from './components/Form.jsx';
import List from './components/List.jsx'

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
      <section className="vh-100" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">

              <div className="card" >
                <div className="card-body p-5">

                  <h6 className="mb-3">Awesome Todo List</h6>
                  <Form
                    task={task}
                    setTask={setTask}
                    handleSubmit={handleSubmit}
                  />
                  <List
                    list={list}
                    changeStatus={changeStatus}
                  />

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
