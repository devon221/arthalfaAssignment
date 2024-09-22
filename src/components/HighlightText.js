import React from 'react';
import Highlighter from 'react-highlight-words';

function HighlightText({text}) {  // Destructure the props object
  return (
    <div>
      <Highlighter
        highlightClassName="highlight"
        searchWords={[text.replaceString]}  // Highlight the given string
        autoEscape={true}
        textToHighlight={text.newText}  // Text where the search string will be highlighted
      />
    </div>
  );
}

export default HighlightText;
