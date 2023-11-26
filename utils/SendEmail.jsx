'use client';
import React, { useState } from 'react'

//funtion to send email

const SendEmail = () => {
  const [values, setValues] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setValues(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return {values, handleChange};
};

export default SendEmail