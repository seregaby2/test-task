export const nameValidation = (name: string) => {
  const nameArr = name.split(' ');

  if (nameArr.length !== 2 || name[name.length - 1] === ' ') return '*name must be in two parts';
  if (nameArr[0].length < 3 || nameArr[0].length > 30)
    return '*first name must be more than 3 less and than 30 symbols';
  if (nameArr[1].length < 3 || nameArr[1].length > 30)
    return '*last name must be more than 3 less and than 30 symbols';
  return '';
};

export const validateEmail = (email: string) => {
  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (re.test(email)) return '';
  else return 'incorrect email';
};

export const textValidation = (text: string) => {
  if (text.length < 10 || text.length > 300)
    return '*message must be more than 10 less and than 30 symbols';
  return '';
};

export const phoneValidation = (phone: string) => {
  const re = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
  if (re.test(phone)) return '';
  else return 'incorrect phone';
};

export const dateValidation = (date: string) => {
  const re = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if (re.test(date)) return '';
  else return 'incorrect date';
};
