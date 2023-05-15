
import React from 'react';

function Item({ id, task, checked, changeStatus }) {
    return (
        <li
            className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2" key={id}>
            <div className="d-flex align-items-center">
                <input className="form-check-input me-2" type="checkbox" aria-label="..." onChange={() => changeStatus(id)} checked={checked} />
                <p style={checked ? { textDecorationLine: "line-through" } : { textDecorationLine: "none" }}>{task}</p>
            </div>
        </li>
    );
}

export default Item;