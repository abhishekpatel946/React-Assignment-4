// Constant Keyname for localStorage
const keyName = 'userData';

// get the data from localStorage
export function getFromLocalStorage() {
  try {
    const serialState = localStorage.getItem(keyName);
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
}

// set the data into localStorage
export function setIntoLocalStorage(arrayData) {
  try {
    const serialState = localStorage.getItem(keyName);
    if (serialState === null) {
      return localStorage.setItem('userData', JSON.stringify([]));
    }
    // remove null, undefined values form array
    Object.keys(serialState).forEach(
      (k) => serialState[k] == null && delete serialState[k]
    );
    // preserve the history
    const prevState = JSON.parse(serialState);
    prevState.push(arrayData);
    // set into localStorage
    return localStorage.setItem(
      keyName,
      JSON.stringify(
        prevState[prevState.length - 1]
          ? prevState[prevState.length - 1]
          : arrayData
      )
    );
  } catch (err) {
    console.log(err);
  }
}
