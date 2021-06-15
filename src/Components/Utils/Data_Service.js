// initial emtpy state
const initialState = [
  {
    id: null,
    Name: '',
    Email: '',
    DateOfBirth: '',
    Gender: '',
    Education: '',
    Password: '',
    ConfirmPass: '',
  },
];

// handle the initial state of localStorage
export function initialSet() {
  localStorage.setItem('userData', JSON.stringify(initialState));
}

// get the data from localStorage
export function getter(keyName) {
  return JSON.parse(localStorage.getItem(keyName));
}

// set the data into localStorage
export function setter(keyName, arrayData) {
  const prevData = JSON.parse(localStorage.getItem(keyName));
  prevData.push(...arrayData);
  return localStorage.setItem(
    keyName,
    JSON.stringify(prevData ? prevData : arrayData)
  );
}

// remove the data from localStorage
export function remove(keyName, remainArr) {
  localStorage.clear(keyName);
  initialSet();
  setter(keyName, remainArr);
}
