// Constant Keyname for localStorage
const keyName = 'userData';
const initialData = [
  {
    id: 1,
    name: 'Admin',
    email: 'admin@mail.com',
    dob: '01/01/1900',
    gender: 'Male',
    education: '12th',
    password: 'admin@123',
    cpassword: 'admin@123',
  },
];

// handle the initial state of localStorage
export function initialState() {
  localStorage.setItem('userData', JSON.stringify(initialData));
}

// get the data from localStorage
export function getter() {
  return JSON.parse(localStorage.getItem(keyName));
}

// set the data into localStorage
export function setter(arrayData) {
  const data = localStorage.getItem(keyName);
  Object.keys(data).forEach((k) => data[k] == null && delete data[k]);
  if (data && data.length > 0) {
    const prevData = JSON.parse(data);
    prevData.push(arrayData);
    return localStorage.setItem(
      keyName,
      JSON.stringify(prevData ? prevData : arrayData)
    );
  }
  return localStorage.setItem(keyName, initialData);
}

// remove the data from localStorage
export function remove(remainArr) {
  localStorage.clear(keyName);
  initialState();
  setter(keyName, remainArr);
}
