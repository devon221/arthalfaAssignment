import React, { useState } from 'react';
import TextAreaInput from './components/TextAreaInput';
import StatsDisplay from './components/StatsDisplay';
import StringReplace from './components/StringReplace';
import HighlightText from './components/HighlightText';
import './App.css';

function App() {
  const [text, setText] = useState('');  // Manage textarea input
  const [highlightedText, setHighlightedText] = useState('');  // For optional highlight feature

  return (
    <div className="container">
        <div className="sidebar">
            <StatsDisplay text={text} />
        </div>
        <div className="main-content">
            <h1>Real-Time Text Analysis and Replacement</h1>
            <TextAreaInput text={text} setText={setText} />
            <StringReplace text={text} setText={setText} setHighlightedText={setHighlightedText} />
            <div className='final-result'>
            {highlightedText && <HighlightText text={highlightedText} />} 
            </div>
            
        </div>
    </div>
);

  // return (
  //   <div className="App">
  //     <h1>Real-Time Text Analysis and Replacement</h1>
  //     <TextAreaInput text={text} setText={setText} />
  //     <StatsDisplay text={text} />
  //     <StringReplace text={text} setText={setText} setHighlightedText={setHighlightedText} />
  //     {highlightedText && <HighlightText text={highlightedText} />} 
  //   </div>
  // );
}

export default App;
