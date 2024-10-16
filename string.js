const country = 'Bangladesh';
const division = "Newbangladesh";
const district = `B-baria`
// const thana = new String('Demra')

//console.log(typeof thana);

const numbers = [54, 98, 78, 21,65];
//console.log(numbers.length);
// console.log(number[1])
numbers[1] = 11;
console.log(numbers)

// string is immutable ---> not changeable
//array is mutable ----> you can change the array elements
const capital = 'Dha ka';
console.log(capital.length)
console .log(capital[3]);
console.log(capital);
capital [0] = 'F';
console.log(capital);


//--------explain---------
Here’s a breakdown of your JavaScript code with explanations on each part, focusing on key concepts like variables, arrays, and string immutability:

### 1. **Declaring Variables**
```js
const country = 'Bangladesh';
const division = "Newbangladesh";
const district = `B-baria`;
```
- Here, you are using `const` to declare constants (variables that can't be reassigned).
- `country`, `division`, and `district` are string variables. Notice the use of different types of quotes:
  - Single quotes: `'Bangladesh'`
  - Double quotes: `"Newbangladesh"`
  - Backticks (template literal): `` `B-baria` ``
  
### 2. **Using `new String()` (commented out)**
```js
// const thana = new String('Demra');
// console.log(typeof thana);
```
- This line creates a string using the `new String()` constructor. Using `typeof` on `thana` would return `"object"` because it's a string object, not a primitive string.
- It's commented out, so it won't run unless you remove the `//`.

### 3. **Working with Arrays**
```js
const numbers = [54, 98, 78, 21, 65];
```
- You declare an array `numbers` that contains 5 elements.

```js
// console.log(numbers.length);
```
- This would output the length of the array, which is `5`.

```js
// console.log(number[1])
```
- This line is incorrect because it should be `numbers[1]` (plural form). This would output the second element in the array, `98` (arrays are zero-indexed).

```js
numbers[1] = 11;
console.log(numbers);
```
- Arrays in JavaScript are **mutable**, meaning you can change their elements. Here, you change the second element (`98`) to `11`. The updated array is: `[54, 11, 78, 21, 65]`.

### 4. **String Immutability**
```js
const capital = 'Dha ka';
console.log(capital.length);
```
- `capital` is a string variable, and strings are **immutable** (not changeable). You can access and read string values, but you cannot modify them directly.
- `capital.length` will return the length of the string, which is `7` (counting all characters, including spaces).

```js
console.log(capital[3]);
```
- This will log the character at index `3`, which is `' '` (the space).

```js
console.log(capital);
```
- This will log the original string `'Dha ka'`.

```js
capital[0] = 'F';
console.log(capital);
```
- This is an example of string immutability. Even though you try to change the first character of `capital` to `'F'`, it won’t work because strings in JavaScript cannot be altered this way. The console will still log `'Dha ka'` without any changes.

---

### Summary:
- **Strings** are immutable, meaning you cannot modify individual characters of a string after it's been created.
- **Arrays** are mutable, meaning you can change the elements inside the array.
