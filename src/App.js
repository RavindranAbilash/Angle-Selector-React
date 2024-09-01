import React, { useState } from 'react';
import './AngleSelector.css'; // Import the CSS file

const AngleSelector = () => {
  const [angle, setAngle] = useState(0);

  const handleTextChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (isNaN(value)) value = 0;
    if (value < 0) value = 0;
    if (value > 360) value = 360;
    setAngle(value);
  };

  const handleSliderChange = (event) => {
    setAngle(parseInt(event.target.value, 10));
  };

  const handleRadioChange = (event) => {
    setAngle(parseInt(event.target.value, 10));
  };

  // Function to calculate arc end coordinates
  const calculateArc = (angle) => {
    const radius = 50; // Radius of the circle
    const x = radius + radius * Math.cos((Math.PI * (angle - 90)) / 180);
    const y = radius + radius * Math.sin((Math.PI * (angle - 90)) / 180);
    return { x, y };
  };

  // Calculate arc end point for the selected angle
  const { x, y } = calculateArc(angle);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Angle Selector</h2>

      {/* Text Box */}
      <div>
        <label>Angle: </label>
        <input
          type="number"
          value={angle}
          onChange={handleTextChange}
          min="0"
          max="360"
          style={{ width: '50px' }}
        />
      </div>

      {/* Slider */}
      <div>
        <input
          type="range"
          value={angle}
          onChange={handleSliderChange}
          min="0"
          max="360"
          className="slider" // Apply the CSS class
          style={{ width: '300px' }}
        />
      </div>

      {/* Radio Buttons */}
      <div>
        <label>Common Angles: </label>
        <label>
          <input
            type="radio"
            value="0"
            checked={angle === 0}
            onChange={handleRadioChange}
          />
          0°
        </label>
        <label>
          <input
            type="radio"
            value="45"
            checked={angle === 45}
            onChange={handleRadioChange}
          />
          45°
        </label>
        <label>
          <input
            type="radio"
            value="60"
            checked={angle === 60}
            onChange={handleRadioChange}
          />
          60°
        </label>
        <label>
          <input
            type="radio"
            value="90"
            checked={angle === 90}
            onChange={handleRadioChange}
          />
          90°
        </label>
        <label>
          <input
            type="radio"
            value="180"
            checked={angle === 180}
            onChange={handleRadioChange}
          />
          180°
        </label>
      </div>

      {/* SVG Pie Chart */}
      <div style={{ marginTop: '20px' }}>
        <svg width="120" height="120" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="#ddd" />
          <path
            d={`M50,50 L50,0 A50,50 0 ${angle > 180 ? 1 : 0},1 ${x},${y} Z`}
            fill="#4CAF50"
          />
          <circle cx="50" cy="50" r="45" fill="white" />
          {/* Text showing the angle in the middle */}
          <text x="50" y="55" fontSize="14" textAnchor="middle" fill="#333">
            {angle}°
          </text>
        </svg>
      </div>
    </div>
  );
};

export default AngleSelector;
