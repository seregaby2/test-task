import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import { form, error } from '../interface';
import { FormattedInputs } from '../utils/phoneMask';
import './style.scss';
import {
  dateValidation,
  nameValidation,
  phoneValidation,
  textValidation,
  validateEmail,
} from '../utils/validation';
import { apiRequest } from './api/request';

export function Form() {
  const initialError = {
    nameError: '',
    emailError: '',
    phoneError: '',
    dateError: '',
    textError: '',
  };

  const initialValue = {
    name: '',
    email: '',
    phone: '',
    date: '',
    text: '',
  };

  const [form, setForm] = useState<form>(initialValue);
  const [error, setError] = useState<error>(initialError);

  useEffect(() => {
    if (form.name !== '') handleErrorName();
    if (form.email !== '') handleErrorEmail();
    if (form.text !== '') handleErrorText();
    if (form.phone !== '') handleErrorPhone();
  }, [form.name, form.email, form.text, form.phone]);

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
    handleErrorPhone();
  };

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, text: e.currentTarget.value });
  };

  const handleErrorName = () => {
    const errorName = nameValidation(form.name);
    setError((error) => ({ ...error, nameError: errorName }));
  };

  const handleErrorEmail = () => {
    const errorEmail = validateEmail(form.email);
    setError((error) => ({ ...error, emailError: errorEmail }));
  };

  const handleErrorText = () => {
    const errorText = textValidation(form.text);
    setError((error) => ({ ...error, textError: errorText }));
  };

  const handleErrorPhone = () => {
    const errorPhone = phoneValidation(form.phone);
    setError((error) => ({ ...error, phoneError: errorPhone }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await apiRequest();
    handleErrorName();
    handleErrorEmail();
    handleErrorText();
    handleErrorPhone();

    setForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      text: '',
    });
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
          value={form.name.toUpperCase()}
          error={Boolean(error.nameError)}
          helperText={error.nameError}
          FormHelperTextProps={{
            style: {
              position: 'absolute',
              top: '35px',
              marginRight: '4px',
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
          error={Boolean(error.emailError)}
          helperText={error.emailError}
          FormHelperTextProps={{
            style: {
              position: 'absolute',
              top: '35px',
            },
          }}
        />
        <FormattedInputs handlePhone={handlePhone} errorMessage={error.phoneError} />
        <TextField
          type="date"
          label={'date'}
          size="small"
          margin="normal"
          fullWidth
          onChange={handleDate}
          value={form.date}
          error={Boolean(error.dateError)}
          InputLabelProps={{ shrink: true }}
          helperText={error.dateError}
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
          label={'message'}
          size="small"
          margin="normal"
          fullWidth
          onChange={handleText}
          value={form.text}
          error={Boolean(error.textError)}
          helperText={error.textError}
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
