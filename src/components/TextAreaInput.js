import React from 'react';

function TextAreaInput({ text, setText }) {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type your text here..."
        rows="10"
        cols="50"
      />
    </div>
  );
}

export default TextAreaInput;
