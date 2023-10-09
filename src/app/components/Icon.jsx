import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

function IconColorChanger() {
  // Initialize state for the icon color
  const [iconColor, setIconColor] = useState('black'); // Default color is black

  // Function to toggle the icon color when it's clicked
  const handleIconClick = () => {
    // Change the color to a different one when clicked
    setIconColor(iconColor === 'black' ? 'red' : 'black');
  };

  return (
    <div>
      {/* Render the icon with the current color */}
      <FaHeart onClick={handleIconClick} style={{ color: iconColor, cursor: 'pointer' }} size={30} />
    </div>
  );
}

export default IconColorChanger;
