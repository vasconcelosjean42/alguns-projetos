const months = ['Jan', 'March', 'April', 'June'];
console.log(months.splice(1, 0, 'Feb'));
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

console.log(months.splice(4,0, ...months.splice(3, 1)));
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]