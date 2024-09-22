import React from 'react';
import _ from 'lodash'; // Importing lodash for utility functions (specifically, for breaking the text into words)

function StatsDisplay({ text }) {

  // Convert the input text to lowercase and split it into words using lodash's words method
  const wordArray = _.words(text.toLowerCase());
  // Create a Set to automatically filter out duplicate words and store only unique words
  const uniqueWords = new Set(wordArray);
  // Calculate the number of characters by removing spaces and punctuation using a regular expression
  const characters = text.replace(/[^a-zA-Z0-9]/g, '').length;

  return (
    <div>
      <h3>Statistics</h3>
      {/* To show the number of unique words */}
      <p>Unique Words: {uniqueWords.size}</p>
      {/* Display the number of characters excluding spaces and punctuation */}
      <p>Characters (excluding spaces and punctuation): {characters}</p>
    </div>
  );
}

export default StatsDisplay;
