import React, { useState } from 'react';

function StringReplace({ text, setText, setHighlightedText }) {
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');

  const handleReplace = () => {
    const newText = text.split(searchString).join(replaceString);
    setText(newText);
    setHighlightedText({newText , replaceString});  // For optional highlight feature
  };

  return (
    <div>
      <h3>String Replacement</h3>
      <input
        type="text"
        placeholder="Search for..."
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <input
        type="text"
        placeholder="Replace with..."
        value={replaceString}
        onChange={(e) => setReplaceString(e.target.value)}
      />
      <button onClick={handleReplace}>Replace All</button>
    </div>
  );
}

export default StringReplace;
