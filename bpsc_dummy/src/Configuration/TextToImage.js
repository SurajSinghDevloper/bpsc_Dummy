import React, { useState, useEffect } from 'react';

const TextToImage = ({ text,style }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const boxWidth = 120;
    const boxHeight = 40;

    canvas.width = boxWidth;
    canvas.height = boxHeight;

    context.clearRect(0, 0, canvas.width, canvas.height);

    const fontSize = 20; // Set your desired font size
    context.font = `${fontSize}px Arial`;
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, boxWidth / 2, boxHeight / 2);

    const dataUrl = canvas.toDataURL('image/png');
    setImageUrl(dataUrl);
  }, [text]);

  return <img src={imageUrl} alt="" style={style}/>;
};

export default TextToImage;
