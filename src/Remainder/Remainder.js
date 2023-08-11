import React, { useState, useEffect } from 'react';
import './Remainder.css'

const App = () => {
  const [medicines, setMedicines] = useState([]);
  
  useEffect(() => {
  }, [medicines]);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  return (
    <div>
      {/* <h1>Medicine Reminder App</h1> */}
      <MedicineForm addMedicine={addMedicine} />
      <ReminderList medicines={medicines} />
    </div>
  );
};

const MedicineForm = ({ addMedicine }) => {
  const [medicine, setMedicine] = useState({
    name: '',
    gm: '',
    time: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicine(medicine);
    setMedicine({
      name: '',
      gm: '',
      time: '',
    });
  };

  return (
    <div className='cont' style={{backgroundColor:"lightblue"}}>
        <h1>Medicine Remainder</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        className='inpu'
        placeholder="Medicine Name"
        value={medicine.name}
        onChange={(e) => setMedicine({ ...medicine, name: e.target.value })}
      />
      <input
        type="number"
        required
        className='inpu'
        placeholder="gm"
        value={medicine.gm}
        onChange={(e) => setMedicine({ ...medicine, gm: e.target.value })}
      />
      <input
        type="time"
        required
        className='inpu'
        value={medicine.time}
        onChange={(e) => setMedicine({ ...medicine, time: e.target.value })}
      />
      <button type="submit">Add Medicine</button>
    </form>
    </div>
  );
};

const ReminderList = ({ medicines }) => {
    const sortedMedicines = [...medicines].sort((a, b) => a.time.localeCompare(b.time));
  
    return (
      <div className='cont' style={{backgroundColor:"lightblue"}}>
        <h2>Reminders</h2>
        <ul>
          {sortedMedicines.map((medicine, index) => (
            <li key={index}>
              {medicine.name} - {medicine.gm} - {medicine.time}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default App;