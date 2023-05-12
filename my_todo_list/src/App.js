import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
  const [list, setList] = useState([
    {
      text: 'listItem'
    },
  ]);
  return (
    <>
      <section className="vh-100" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" >
                <div className="card-body p-5">
                  <h6 className="mb-3">Awesome Todo List</h6>
                  <form className="d-flex justify-content-center align-items-center mb-4">
                    <div className="form-outline flex-fill">
                      <input
                        value={text}
                        type="text"
                        id="form3"
                        className="form-control form-control-lg"
                        onChange={(event) => setText(event.target.value)}
                      />
                      <label className="form-label" htmlFor="form3">
                        What do you need to do today?
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg ms-2">Add</button>
                  </form>
                  <ul className="list-group mb-0">
                    {
                      list.map((item) => (
                        <li
                          className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                          <div className="d-flex align-items-center">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              checked={checked}
                              aria-label="..."
                              onChange={() => setChecked(!checked)}
                            />
                            Make a to do list
                          </div>
                          <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                            <i className="fas fa-times text-primary"></i>
                          </a>
                        </li>
                      ))
                    }

                  </ul>
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
