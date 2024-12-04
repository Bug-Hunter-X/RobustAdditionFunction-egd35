# JavaScript Bug: Incorrect Null/Undefined Handling in Addition Function

This repository demonstrates a common bug in JavaScript involving the incorrect handling of `null` or `undefined` values in a function that adds two numbers.

## Bug Description

The `foo` function attempts to add two numbers, `a` and `b`.  However, its handling of `null` or `undefined` inputs is flawed.  The function simply returns 0 in these cases, which might not be the desired behavior.

## Bug Solution

The solution involves adding more robust checks for `null` or `undefined` values and handling them appropriately.  This could involve assigning default values or throwing an error to indicate invalid input.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the corrected code.
4. Run both files in a JavaScript environment to observe the different behaviors. 
