import { form } from '../../interface';

export const apiRequest = async () => {
  const res = await fetch('https://mockend.com/org/repo/users', {
    // method: 'GET',
    // mode: 'no-cors',
    headers: {
      'Сontent-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
    },
  });
  // const response = await res.json();
  console.log(res, 'response');

  // console.log(e, 'erorr');
};
