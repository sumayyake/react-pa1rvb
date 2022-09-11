import React, { useState } from 'react';

export default function ListItem({item, children, onRemoveItem }) {
  return (
   
    <li className="list-group-item">
       <div className="d-flex justify-content-between">
      <p>
        {item.icon} {item.name} {children}
        {item.isNew && <span className="badge badge-success">New! </span>}
      </p>
      <button onClick={() => onRemoveItem(item.id)}>X</button>
      </div>
    </li>
    
  );
}
