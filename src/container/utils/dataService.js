// Constant Keyname for localStorage
const keyName = 'userData';

// handle the initial state of localStorage
export function initialState() {
  localStorage.setItem('userData', JSON.stringify([]));
}

// get the data from localStorage
export function getFromLocalStorage() {
  const data = localStorage.getItem(keyName);
  if (data !== null) {
    return JSON.parse(data);
  } else {
    initialState();
    return [];
  }
}

// set the data into localStorage
export function setIntoLocalStorage(arrayData) {
  const data = localStorage.getItem(keyName);
  if (data && data.length > 0) {
    Object.keys(data).forEach((k) => data[k] == null && delete data[k]);
    const prevData = JSON.parse(data);
    prevData.push(arrayData);
    return localStorage.setItem(
      keyName,
      JSON.stringify(prevData ? prevData : arrayData)
    );
  }
  return localStorage.setItem(keyName, []);
}
