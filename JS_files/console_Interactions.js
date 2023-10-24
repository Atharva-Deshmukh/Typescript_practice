/// <reference lib="es2023" />

console.warn('warning');
console.log('log');
console.info('info');
console.error('error');

// Sample data - an array of objects
const students = [
  { id: 1, name: 'Alice', grade: 90 },
  { id: 2, name: 'Bob', grade: 85 },
  { id: 3, name: 'Charlie', grade: 92 },
  { id: 4, name: 'David', grade: 78 },
];
console.table(students);

console.log(document.getElementById('p1'));
console.dir(document.getElementById('p1'));
