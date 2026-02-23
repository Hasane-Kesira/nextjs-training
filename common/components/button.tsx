'use client';
import React, { useState } from 'react';
 

const styles: {[key: string]: React.CSSProperties} = {
  main: {
    'cursor': 'pointer',
  } as React.CSSProperties
};

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
 
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return <button style={styles.main} onClick={handleClick}>Like ({likes})</button>;
}