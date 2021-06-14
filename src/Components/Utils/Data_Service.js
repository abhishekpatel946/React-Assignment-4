const initialState = {
  Name: '',
  Email: '',
  DateOfBirth: '',
  Gender: '',
  Education: '',
  Password: '',
  ConfirmPass: '',
};
localStorage.setItem('userData', JSON.stringify(initialState));

export function getter(keyName) {
  return JSON.parse(localStorage.getItem(keyName));
}

export function setter(keyName, arrayData) {
  const prevData = JSON.parse(localStorage.getItem(keyName));
  prevData.push(...arrayData);
  console.log(prevData);
  debugger;
  return localStorage.setItem(
    keyName,
    JSON.stringify(prevData ? prevData : arrayData)
  );
}
