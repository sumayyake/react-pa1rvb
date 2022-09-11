import React, { useState } from 'react';
import ListItem from './ListItem';
import FormInput from './FormInput';
import { FaReact, FaAngular, FaVuejs, FaAppStore } from 'react-icons/fa';

const FRAMEWORKS = [
  { id: 1, name: 'React', icon: <FaReact />, isNew: false },
  { id: 2, name: 'Angular', icon: <FaAngular />, isNew: false },
  { id: 3, name: 'Vue', icon: <FaVuejs />, isNew: false },
  { id: 4, name: 'Something elses', icon: <FaAppStore />, isNew: true },
];

export default function List() {
  const [listItem, setItem] = useState([...FRAMEWORKS]);

  const onAddItem = (textItem) => {
    const newItem = {
      id: Math.random,
      name: textItem,
      icon: <FaAppStore />,
      isNew: false,
    };
    setItem([...listItem, newItem]);
    console.log(newItem);
  };

  const removeItem = (id) => {
    const newItem = listItem.filter((item) => item.id != id);
    setItem(newItem);
  };
  if (listItem.length === 0) {
    return (
      <div className="alert alert-primary" role="alert">
        Sorry no item in this list
      </div>
    );
  }

  return (
    <>
      <ul className="list-group">
        {listItem.map((list) => {
          return (
            <ListItem item={list} key={list.id} onRemoveItem={removeItem}>
              <span className="badge badge-primary">Primary</span>
            </ListItem>
          );
        })}
      </ul>
      <FormInput onAddItem={onAddItem} />
    </>
  );
}
