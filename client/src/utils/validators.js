export const required = (value) => {
  if (value) return undefined;
  return `Field cannot be empty`;
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) {
    return `Max length is ${maxLength} symbols!`;
  }
  return undefined;
};

export const minLengthCreator = (minLength) => (value) => {
  if (value && value.length < minLength) {
    return `Min length is ${minLength} symbols!`;
  }
  return undefined;
};

export const matchInput = (input, allInputs) =>
  input === allInputs.email ? undefined : 'Emails does not matches!';

export const matchInputPassword = (input, allInputs) =>
  input === allInputs.password ? undefined : 'Passwords does not matches!';

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const phoneNumber = (value) =>
  value &&
  !/(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/i.test(
    value
  )
    ? 'Invalid phone number'
    : undefined;

export const webSite = (value) =>
  value &&
  !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w-]+)+[\w\-_~:/?#[\]@!&',;=.]+$/i.test(
    value
  )
    ? 'Invalid website address'
    : undefined;
