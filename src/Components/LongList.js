import React, { useState } from 'react'

const itemStyle = {
  backgroundColor: 'grey',
  width: '100%',
  height: '20px',
  marginBottom: '2px',
}

const Item = ({ number }) => {
  return (
    <article style={itemStyle}>
      {number}
    </article>
  )
}

const longListStyle = {
  backgroundColor: 'green',
  marginTop: '1000px',
  padding: '5px',
}

const buttonStyle = {
  position: 'fixed',
  top: 50,
  right: 50,
  width: '100px',
  height: '100px',
}

function generateRandomString(length, chars) {
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

function generateManyRandomThings() {
  return Array.from(
    Array(4500), 
    function generateRandomThing() {
      return Math.random() > 0.5 ? 
      generateRandomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') : 
      Math.random() * 100000
    } 
  );
} 

export const LongList = () => {
  const [clickCount, setClickCount] = useState(0);
  const [randomThings, setRandomThings] = useState(() => generateManyRandomThings());
  const handleClick = () => {
    setClickCount(clickCount + 1);
    setRandomThings(generateManyRandomThings());
  }

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>{`reload (clickCount: ${clickCount})`}</button>
      <section style={longListStyle}>
        {randomThings.map((num, idx) => (
          <Item key={`item-${idx}`} number={num}/>
          ))}
      </section>
    </div>
  )
}