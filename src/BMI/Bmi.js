import React, { useState } from 'react';
import './Bmi.css'; // Import your CSS file for styling

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculate = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(3));
    }
  };

  return (
    <div style={{backgroundColor:"lightblue",height:'100vh',padding:"20px"}}>
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <label>Weight (kg): </label>
        <input type="number" placeholder='weight in kg' className='inp' value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Height (cm): </label>
        <input type="number" placeholder='height in cm' className='inp' value={height} onChange={e => setHeight(e.target.value)} />
      </div>
      <button onClick={calculate}>Calculate BMI</button>
      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
          <p className="interpretation">Interpretation: {Calculation(bmi)}</p>
        </div>
      )}
    </div>
    </div>
  );
}

const Calculation = bmi => {
  if (bmi < 18.5){
     return <span className="underweight">Under weight</span>;
  };
  if  (bmi >= 18.5 && bmi < 24.9) {
    return <span className="Normal_Weight">Normal Weight</span>;    
};
  if (bmi >= 25 && bmi < 29.9) {
    return <span className="Overweight">Over Weight</span>;
};
  return 'Obese';
};

export default BMICalculator;
