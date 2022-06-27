import { form, response } from '../../interface';

export const apiRequest = (data: form) => {
  fetch('https://stark-wave-89559.herokuapp.com/api/users', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
    },
  })
    .then((response) => response.json())
    .then((response: response) => {
      console.log(response.message);
    });
};
