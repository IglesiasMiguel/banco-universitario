import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({  }) => {
    const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      placeholderText="Seleccione su fecha de nacimiento"
      className="rounded border outline-none focus:border-primary-color"

    />
  );
};
  
  export default DateInput;