/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { IMaskInput } from 'react-imask';
import TextField from '@mui/material/TextField';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(function TextMaskCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+7(000)-000-00-00"
      onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

interface State {
  textmask: string;
  numberformat: string;
}

interface myProps {
  handlePhone(inputValue: string): void;
  errorMessage: string;
}

export const FormattedInputs = (props: myProps) => {
  const [values, setValues] = React.useState<State>({
    textmask: '+7(000)-000-00-00',
    numberformat: '1320',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    if (event.target.value !== '+7(000)-000-00-00') props.handlePhone(event.target.value);
  };

  return (
    <TextField
      label={'phone'}
      size="small"
      margin="normal"
      fullWidth
      placeholder="+7(000)-000-00-00"
      error={Boolean(props.errorMessage)}
      helperText={props.errorMessage}
      InputLabelProps={{ shrink: true }}
      FormHelperTextProps={{
        style: {
          position: 'absolute',
          top: '35px',
        },
      }}
      value={values.textmask}
      onChange={handleChange}
      name="textmask"
      id="formatted-text-mask-input"
      InputProps={{
        inputComponent: TextMaskCustom as any,
      }}
    />
  );
};
