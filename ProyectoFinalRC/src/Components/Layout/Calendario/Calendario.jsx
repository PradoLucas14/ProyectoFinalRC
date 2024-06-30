import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarPicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
    // Verificar si la fecha seleccionada es domingo
    if (date.getDay() === 0) {
      alert('¡No puedes seleccionar un domingo!');
      setSelectedDate(null); // Limpiar la selección si es domingo
    }
  };

  return (
    <div>
      <h2>Selecciona una fecha:</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
};

export default CalendarPicker;