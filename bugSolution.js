function foo(a, b) {
  // Use the nullish coalescing operator (??) to provide default values if a or b are null or undefined
  const numA = a ?? 0; 
  const numB = b ?? 0; 
  return numA + numB; 
}
//Alternative Solution using conditional operator
function foo(a, b) {
  return (a === null || a === undefined ? 0 : a) + (b === null || b === undefined ? 0 : b);
}