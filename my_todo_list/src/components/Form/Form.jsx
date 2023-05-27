import React from 'react';

function Form({ task, setTask, handleSubmit }) {
    return (
        <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleSubmit}>
            <div className="form-outline flex-fill">
                <input type="text" id="form3" className="form-control form-control-lg" value={task} onChange={(event) => setTask(event.target.value)} />
                <label className="form-label" htmlFor="form3">What do you need to do today?</label>
            </div>
            <button type="submit" className="btn btn-primary btn-lg ms-2">Add</button>
        </form>
    );
}

export default Form;