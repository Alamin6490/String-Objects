const person = {
    name: 'sodor uddin',
    age: 25,
    proffession: 'developer',
    salary: 2500,
    married: true
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

// console.log(person)

//dot notation 
//console.log(person.proffession)
const income = person.salary;
// console.log(income)

// bracket Notation
// third bracket diye access kora
console.log(person['age'])
const boyos = person['age' ]
console.log(boyos)
// another option


// eroor 
//console.log(person.'fav places')
console.log(person["fav places"])






JavaScript-এ **Object Properties** সেট করার জন্য বিভিন্ন পদ্ধতি রয়েছে। নিচে সেই পদ্ধতিগুলো ব্যাখ্যা করা হলো:

### ১. **Dot Notation**
ডট নোটেশন ব্যবহার করে একটি অবজেক্টের প্রপার্টি সেট করা খুবই সহজ এবং সাধারণ। এর মাধ্যমে সরাসরি প্রপার্টির নাম ব্যবহার করে ভ্যালু সেট করা হয়।

```javascript
const person = {};
person.name = 'Rahim';  // প্রপার্টি 'name' সেট করা হলো
person.age = 25;        // প্রপার্টি 'age' সেট করা হলো
```

এখানে `person.name` ও `person.age` দ্বারা সরাসরি প্রপার্টি তৈরি ও সেট করা হলো।

### ২. **Bracket Notation**
যদি প্রপার্টির নাম একটি স্ট্রিং বা ভেরিয়েবল হিসেবে ব্যবহার করতে হয়, তবে ব্র্যাকেট নোটেশন ব্যবহার করা হয়। এটি বিশেষত তখন উপকারী যখন প্রপার্টির নাম ডাইনামিকভাবে তৈরি হয়।

```javascript
const person = {};
person['name'] = 'Rahim'; // প্রপার্টি 'name' সেট করা হলো
person['age'] = 25;       // প্রপার্টি 'age' সেট করা হলো
```

এখানে `person['name']` এর মতো করে প্রপার্টি সেট করা হচ্ছে।

### ৩. **Object.defineProperty()**
এই মেথডটি দিয়ে অবজেক্টের প্রপার্টি আরও বিস্তারিতভাবে কন্ট্রোল করা যায়, যেমন writable, enumerable বা configurable কি না তা নির্ধারণ করা যায়।

```javascript
const person = {};
Object.defineProperty(person, 'name', {
  value: 'Rahim',
  writable: true,
  enumerable: true,
  configurable: true
});
```

এখানে `Object.defineProperty()` ব্যবহার করে একটি প্রপার্টি সেট করা হয়েছে এবং সেটি কিভাবে আচরণ করবে তাও নির্ধারণ করা হয়েছে।

### ৪. **Object.assign()**
একাধিক প্রপার্টি একবারে সেট করার জন্য `Object.assign()` মেথডটি খুব কার্যকর। এটি একটি বা একাধিক অবজেক্টের প্রপার্টিগুলোকে একটি টার্গেট অবজেক্টে কপি করে।

```javascript
const person = {};
Object.assign(person, { name: 'Rahim', age: 25 });
```

এখানে `Object.assign()` এর মাধ্যমে একাধিক প্রপার্টি সেট করা হয়েছে একবারে।

### ৫. **Spread Operator (...)**
স্প্রেড অপারেটর ব্যবহার করে অবজেক্টে নতুন প্রপার্টি যোগ করা যায় খুব সহজে।

```javascript
const person = { name: 'Rahim' };
const updatedPerson = { ...person, age: 25 };
```

এখানে `...person` দ্বারা আগের অবজেক্ট কপি করে নতুন প্রপার্টি যোগ করা হয়েছে।

### সংক্ষেপে
- **Dot Notation** এবং **Bracket Notation** সরাসরি প্রপার্টি সেট করার জন্য সহজ এবং বেশি ব্যবহৃত।
- **Object.defineProperty()** ডিটেইলড কন্ট্রোল দেয় প্রপার্টির আচরণ কেমন হবে সেটার উপর।
- **Object.assign()** এবং **Spread Operator** ব্যবহার করে একাধিক প্রপার্টি সহজেই কপি বা সেট করা যায়। 

এগুলোই JavaScript-এ Object-এর প্রপার্টি সেট করার বিভিন্ন উপায়।