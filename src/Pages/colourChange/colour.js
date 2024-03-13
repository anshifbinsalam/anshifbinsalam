import React, { useState, useEffect } from 'react';
import Image from './colour.png';
import './colour.css';  

const colorPalettes = [
  ['#343C79', '#669361'],
  ['#8C40A5', '#327A4D'],
  ['#D376C8', '#4F955E'],
  ['#6E47A3', '#588936'],  
  ['#fc7c3b', '#01bfff'], 
  ['#6a8df5', '#ff4aa4' ], 
  ['#ff6bdf', '#ffe730' ],
  ['#ffad33', '#001e4c' ],
  ['#ff17ff', '#43ffff' ],
  ['#a56c32', '#d3eff8' ],
  ['#ff168a', '#d3d3d3' ], 
  ['#ff00ff', '#287528' ],   
];

const Change = () => {
  const [currentPalette, setCurrentPalette] = useState(colorPalettes[0]);

  const changepalete = () => {
    const randomIndex = Math.floor(Math.random() * colorPalettes.length);
    setCurrentPalette(colorPalettes[randomIndex]);
  };

  useEffect(() => {
    const root = document.documentElement;

    // Set --grad-1 and --grad-2 values dynamically
    root.style.setProperty('--grad-1', currentPalette[0]);
    root.style.setProperty('--grad-2', currentPalette[1]);
  }, [currentPalette]);
  

  return (

    <div className='colorButton'>
      <button className='buttonClass' onClick={changepalete}>
        <img src={Image} className='imgTest' alt='colour' />
      </button>
    </div>
  );
};

export default Change;
