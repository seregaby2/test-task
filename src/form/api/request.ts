import { form, response } from '../../interface';

export const apiRequest = (data: form) => {
  try {
    fetch('http://localhost:5000/api/users', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.json())
      .then((data: response) => console.log(data.message));
  } catch (e) {
    console.log(e);
  }
};
