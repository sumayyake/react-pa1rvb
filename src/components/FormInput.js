import React, { useState } from 'react';

export default function FormInput({ onAddItem }) {
  const [text, setText] = useState('');
  const onHandleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  const onSubmit = (e) => {
    e.prevnetDefault;
    console.log(text);
    onAddItem(text);
    setText('');
  };
  return (
    <form className="row g-3 m-2">
      <div className="col-auto">
        <input
          onChange={onHandleChange}
          type="text"
          className="form-control"
          value={text}
        />
      </div>
      <div className="col-auto">
        <button
          onClick={onSubmit}
          type="submit"
          className="btn btn-primary mb-3"
        >
          Add
        </button>
      </div>
    </form>
  );
}
