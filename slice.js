const address = 'andorkilla';
const part = address.slice(2, 5);
console.log(part); 


const sentence = 'I am a good and hardworking person';
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendsStr = 'Rahim,kahim,dahim,lahim,fahim,sahim';
const friends = friendsStr.split(',');
console.log(friends);

// join  
const realFriend = ['Rahim,kahim,dahim,lahim,fahim,sahim'];

console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));


JavaScript-এ স্ট্রিং সংক্রান্ত কয়েকটি গুরুত্বপূর্ণ ফাংশন হলো `slice()`, `concat()`, `join()`, এবং `includes()`। এগুলোর কাজ কী এবং কীভাবে ব্যবহার করা হয় তা নিচে ব্যাখ্যা করা হলো:

### ১. `slice()`
`slice()` ফাংশনটি একটি স্ট্রিং-এর অংশ কেটে (slice) বের করার জন্য ব্যবহৃত হয়। এটি দুটি প্যারামিটার নেয়: স্টার্ট এবং এন্ড ইনডেক্স। স্টার্ট ইনডেক্স থেকে শুরু করে এন্ড ইনডেক্সের আগ পর্যন্ত স্ট্রিংটি কেটে বের করে দেয়।

**Syntax:**
```javascript
let newString = str.slice(startIndex, endIndex);
```

**উদাহরণ:**
```javascript
let text = "Hello, World!";
let result = text.slice(0, 5);
console.log(result);  // Output: "Hello"
```

এখানে `0` ইনডেক্স থেকে শুরু করে `5` ইনডেক্স পর্যন্ত কেটে "Hello" অংশটুকু পাওয়া গেছে।

### ২. `concat()`
`concat()` ফাংশনটি দুটি বা তার বেশি স্ট্রিংকে একত্রিত করতে ব্যবহৃত হয়। এটি আসল স্ট্রিং পরিবর্তন না করে একটি নতুন স্ট্রিং তৈরি করে।

**Syntax:**
```javascript
let newString = str1.concat(str2, str3, ...);
```

**উদাহরণ:**
```javascript
let str1 = "Hello";
let str2 = "World";
let result = str1.concat(", ", str2, "!");
console.log(result);  // Output: "Hello, World!"
```

এখানে "Hello" এবং "World"-কে `concat()` ব্যবহার করে একত্রিত করা হয়েছে।

### ৩. `join()`
`join()` মূলত অ্যারে-র উপাদানগুলোকে একত্রিত করে একটি স্ট্রিং তৈরি করার জন্য ব্যবহৃত হয়। এটি প্রতিটি উপাদানের মাঝে একটি নির্দিষ্ট সেপারেটর যোগ করে।

**Syntax:**
```javascript
let newString = array.join(separator);
```

**উদাহরণ:**
```javascript
let words = ["Hello", "World"];
let result = words.join(" ");
console.log(result);  // Output: "Hello World"
```

এখানে অ্যারে-এর প্রতিটি উপাদানকে একটি ফাঁকা জায়গা (space) দিয়ে একত্রিত করা হয়েছে।

### ৪. `includes()`
`includes()` ফাংশনটি একটি স্ট্রিং-এর মধ্যে নির্দিষ্ট কোনো সাবস্ট্রিং আছে কিনা তা চেক করার জন্য ব্যবহৃত হয়। এটি `true` অথবা `false` রিটার্ন করে।

**Syntax:**
```javascript
let isPresent = str.includes(substring);
```

**উদাহরণ:**
```javascript
let text = "Hello, World!";
let result = text.includes("World");
console.log(result);  // Output: true
```

এখানে "World" শব্দটি স্ট্রিং-এর মধ্যে আছে বলে `true` রিটার্ন করেছে।

### সারসংক্ষেপ
- **`slice()`**: স্ট্রিং থেকে একটি অংশ কেটে বের করতে ব্যবহার হয়।
- **`concat()`**: দুটি বা তার বেশি স্ট্রিং একত্রিত করতে ব্যবহার হয়।
- **`join()`**: অ্যারে-এর উপাদানগুলোকে একত্রিত করে একটি স্ট্রিং তৈরি করতে ব্যবহৃত হয়।
- **`includes()`**: কোনো স্ট্রিং-এর মধ্যে নির্দিষ্ট সাবস্ট্রিং আছে কিনা তা চেক করতে ব্যবহার হয়।

