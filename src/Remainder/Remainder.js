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
        className='inpu'
        placeholder="Medicine Name"
        value={medicine.name}
        onChange={(e) => setMedicine({ ...medicine, name: e.target.value })}
      />
      <input
        type="text"
        className='inpu'
        placeholder="gm"
        value={medicine.gm}
        onChange={(e) => setMedicine({ ...medicine, gm: e.target.value })}
      />
      <input
        type="time"
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



// import React, { useState } from 'react';

// const App = () => {
//   const [medicines, setMedicines] = useState([]);

//   const addMedicine = (medicine) => {
//     setMedicines([...medicines, medicine]);
//     // Schedule reminder using setTimeout or a library like node-schedule
//   };

//   return (
//     <div>
//       <h1>Medicine Reminder App</h1>
//       <MedicineForm addMedicine={addMedicine} />
//       <ReminderList medicines={medicines} />
//     </div>
//   );
// };

// const MedicineForm = ({ addMedicine }) => {
//   const [medicine, setMedicine] = useState({
//     name: '',
//     dosage: '',
//     frequency: '',
//     time: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addMedicine(medicine);
//     // Clear form inputs
//     setMedicine({
//       name: '',
//       dosage: '',
//       frequency: '',
//       time: '',
//     });
//   };

//   // Update medicine state as user inputs values

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Form fields for medicine details */}
//       <button type="submit">Add Medicine</button>
//     </form>
//   );
// };

// const ReminderList = ({ medicines }) => {
//   // Map through medicines and display reminders

//   return (
//     <div>
//       <h2>Reminders</h2>
//       {/* Display reminders */}
//     </div>
//   );
// };

// export default App;



// // import React, { useState } from 'react';

// // function MedicationReminder() {
// //   const [medication, setMedication] = useState('');
// //   const [hour, setHour] = useState('');
// //   const [minute, setMinute] = useState('');
// //   const [remainingTime, setRemainingTime] = useState('');

// //   const calculateRemainingTime = () => {
// //     const now = new Date();
// //     const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(hour), parseInt(minute));
// //     const timeDifference = targetTime - now;

// //     if (timeDifference <= 0) {
// //       setRemainingTime('Medication time has passed');
// //     } else {
// //       const minutes = Math.floor(timeDifference / (1000 * 60));
// //       setRemainingTime(`${minutes} minutes remaining`);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Medication Reminder</h1>
// //       <div>
// //         <label>
// //           Medication Name:
// //           <input
// //             type="text"
// //             value={medication}
// //             onChange={(e) => setMedication(e.target.value)}
// //           />
// //         </label>
// //       </div>
// //       <div>
// //         <label>
// //           Hour:
// //           <input
// //             type="number"
// //             value={hour}
// //             onChange={(e) => setHour(e.target.value)}
// //           />
// //         </label>
// //         <label>
// //           Minute:
// //           <input
// //             type="number"
// //             value={minute}
// //             onChange={(e) => setMinute(e.target.value)}
// //           />
// //         </label>
// //       </div>
// //       <button onClick={calculateRemainingTime}>Calculate Remaining Time</button>
// //       <div>
// //         <p>{remainingTime}</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default MedicationReminder;



// // // import React, { useState, useEffect } from 'react';

// // // function Remainder() {
// // //   const [currentTime, setCurrentTime] = useState(new Date());

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentTime(new Date());
// // //     }, 1000); // Update the current time every second

// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   // Calculate the remainder in minutes
// // //   const calculateRemainder = (targetHour, targetMinute) => {
// // //     const now = new Date();
// // //     const targetTime = new Date(
// // //       now.getFullYear(),
// // //       now.getMonth(),
// // //       now.getDate(),
// // //       targetHour,
// // //       targetMinute
// // //     );
// // //     if (now > targetTime) {
// // //       targetTime.setDate(targetTime.getDate() + 1);
// // //     }
// // //     const timeDifference = targetTime - now;
// // //     const remainderMinutes = Math.floor(timeDifference / (1000 * 60));
// // //     return remainderMinutes;
// // //   };

// // //   const remainderMinutes = calculateRemainder(9, 0); // Example: 9:00 AM

// // //   return (
// // //     <div className="App">
// // //       <h1>Medication Reminder</h1>
// // //       <p>Time Now: {currentTime.toLocaleTimeString()}</p>
// // //       <p>Time to Take Medication: 9:00 AM</p>
// // //       <p>Remainder: {remainderMinutes} minutes</p>
// // //     </div>
// // //   );
// // // }

// // // export default Remainder;
