import { useState } from 'react';
import TemperatureInput from './TemperatureInput';
import '../styles/App.css';

function TemperatureConvertor() {
  const [celsius, setCelsius] = useState('');

  const celsiusToFahrenheit = (c) => {
    if (c === '') return '';
    return (parseFloat(c) * 9/5 + 32).toFixed(2);
  };

  const fahrenheitToCelsius = (f) => {
    if (f === '') return '';
    return ((parseFloat(f) - 32) * 5/9).toFixed(2);
  };

  const handleCelsiusChange = (value) => {
    setCelsius(value);
  };

  const handleFahrenheitChange = (value) => {
    setCelsius(fahrenheitToCelsius(value));
  };

  const fahrenheit = celsiusToFahrenheit(celsius);

  return (
    <div className="temperature-container">
      <div className="temperature-inputs">
        <TemperatureInput
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}
          label="Celsius (°C)"
        />
        <TemperatureInput
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
          label="Fahrenheit (°F)"
        />
      </div>
      <div className="temperature-display">
        {celsius ? (
          <p>
            {celsius}°C = {fahrenheit}°F
          </p>
        ) : (
          <p className="placeholder">Saisissez une température pour voir la conversion</p>
        )}
      </div>
    </div>
  );
}

export default TemperatureConvertor;
