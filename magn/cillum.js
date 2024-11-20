import { observable } from 'mobx';

// Example data object
const data = observable({
  a: {
    b: {
      c: 'Observable value',
    },
  },
});

// Function to get an observable object using a key path
function getObservableByKeyPath(obj, keyPath) {
  const keys = keyPath.split('.');
  let currentObj = obj;

  for (const key of keys) {
    currentObj = currentObj[key];
    if (!currentObj) {
      // Handle invalid key path or missing keys
      return undefined;
    }
  }

  return currentObj;
}

// Usage
const observableObj = getObservableByKeyPath(data, 'a.b.c');
console.log(observableObj); // Output: 'Observable value'
