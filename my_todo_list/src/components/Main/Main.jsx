import React from 'react';
import Form from '../Form/Form.jsx';
import List from '../List/List.jsx';


function Main({ task, setTask, handleSubmit, changeStatus, list }) {
    return (
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
    );
}

export default Main;