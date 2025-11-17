import '../styles/App.css';

function TemperatureInput({ temperature, onTemperatureChange, label }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder="Température"
        className="input-field"
      />
    </div>
  );
}

export default TemperatureInput;
