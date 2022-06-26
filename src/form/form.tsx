import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import { form } from '../interface';
import { useRef } from 'react';
import { IMaskInput } from 'react-imask';

import './style.scss';
import { FormattedInputs } from '../utils/phoneMask';

export function Form() {
  const initialValue = {
    name: '',
    email: '',
    phone: '',
    date: '',
    text: '',
  };

  const ref = useRef(null);

  const [form, setForm] = useState<form>(initialValue);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: e.currentTarget.value });
  };

  const handleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: e.currentTarget.value });
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, date: e.currentTarget.value });
  };

  const handlePhone = (inputValue: string) => {
    setForm({ ...form, phone: inputValue });
  };

  //   const tmp = (phone: string) => {
  //     console.log(phone);
  //   };

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, text: e.currentTarget.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      text: '',
    });
    console.log(form);
  };

  return (
    <div className="wrapper">
      <Typography variant="h4" component="div">
        Feedback Form
      </Typography>
      <Typography variant="subtitle1" component="div" gutterBottom={true} className="subtitle">
        {' '}
        Enter your data
      </Typography>

      <form className="form" onSubmit={handleSubmit}>
        <TextField
          label={'name'}
          size="small"
          margin="normal"
          fullWidth
          placeholder="Ivan Ivanov"
          onChange={handleName}
          value={form.name}
          error={false}
          helperText={'error'}
          FormHelperTextProps={{
            style: {
              position: 'absolute',
              top: '35px',
            },
          }}
        />
        <TextField
          label={'email'}
          size="small"
          margin="normal"
          fullWidth
          onChange={handleMail}
          value={form.email}
          error={false}
          helperText={'error'}
          FormHelperTextProps={{
            style: {
              position: 'absolute',
              top: '35px',
            },
          }}
        />
        <FormattedInputs handlePhone={handlePhone} />
        <TextField
          type="date"
          label={'date'}
          size="small"
          margin="normal"
          fullWidth
          onChange={handleDate}
          value={form.date}
          error={false}
          InputLabelProps={{ shrink: true }}
          helperText={'error'}
          FormHelperTextProps={{
            style: {
              position: 'absolute',
              top: '35px',
            },
          }}
        />
        <TextField
          multiline
          rows={4}
          label={'text'}
          size="small"
          margin="normal"
          fullWidth
          onChange={handleText}
          value={form.text}
          error={false}
          helperText={'error'}
          FormHelperTextProps={{
            style: {
              position: 'absolute',
              top: '105px',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            marginTop: 2,
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
