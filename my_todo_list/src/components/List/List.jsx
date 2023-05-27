import React from 'react';
import Item from '../Item/Item.jsx';
function List({ list, changeStatus }) {
    return (
        <ul className="list-group mb-0">
            {list && list.map((item) =>
                <div key={item.id}>
                    <Item
                        id={item.id}
                        task={item.task}
                        checked={item.checked}
                        changeStatus={changeStatus}
                    />
                </div>
            )}
        </ul>
    );
}
export default List;