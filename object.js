//primitive
//basic,primary


const  age = 21;
const scchool = 'rifile square';
const isPassed = true;
// let isDeveloper;

const subjects = ['bangla', 'English', 'Physics', 'Math']
const bottle = ['white',45];
const bottlePrice = 45;
const bottleDrinks = 'water';


//object 
//non-primitive
const bottle = {
    brand: 'apple',
    price: '45',
    color: 'white',
    isClean: false
}

const subject ={
    name: 'biology',
    teacher:'rasheda mam'
    examDate:'30 Feb'

}






JavaScript-এ **object** হলো key-value pair-এর একটি collection, যেখানে key বা property name একটি string হয় এবং value যে কোনো data type হতে পারে। প্রতিটি object-এর কিছু **properties** থাকে, এবং সেই properties-এর **values** গুলো বিভিন্ন data ধারণ করে। এখন আমরা object, property, এবং value সম্পর্কে ধাপে ধাপে আলোচনা করবো।

### ১. Object কী?

JavaScript-এ object হলো এক ধরনের structure যা বিভিন্ন তথ্য বা data একত্রে ধারণ করে। উদাহরণস্বরূপ, একটি student এর object তৈরি করা যেতে পারে যেখানে তার নাম, বয়স, এবং grade থাকবে।

```javascript
const student = {
  name: "Rahim",
  age: 20,
  grade: "A"
};
```

এখানে `student` হলো object, এবং এটি ৩টি property ধারণ করছে: `name`, `age`, এবং `grade`।

### ২. Properties কী?

**Property** হলো object-এর মধ্যে থাকা attributes বা বৈশিষ্ট্য। প্রতিটি property-এর একটি নাম (key) এবং তার সাথে একটি value থাকে। যেমন উপরের উদাহরণে, `name`, `age`, এবং `grade` হল properties।

```javascript
const student = {
  name: "Rahim",  // property name is 'name' and value is 'Rahim'
  age: 20,        // property name is 'age' and value is 20
  grade: "A"      // property name is 'grade' and value is 'A'
};
```

### ৩. Values কী?

**Value** হলো property-র অন্তর্গত তথ্য বা data, যা কোনো নির্দিষ্ট property-এর অধীনে থাকে। উদাহরণস্বরূপ, উপরের উদাহরণে `name` property-এর value হলো "Rahim", `age` property-এর value হলো ২০, এবং `grade` property-এর value হলো "A"।

### ৪. Object-এর property-তে value অ্যাক্সেস করা

Object-এর কোনো নির্দিষ্ট property-র value অ্যাক্সেস করতে আমরা dot notation বা bracket notation ব্যবহার করতে পারি।

#### Dot Notation:
```javascript
console.log(student.name); // Output: "Rahim"
```

#### Bracket Notation:
```javascript
console.log(student["age"]); // Output: 20
```

### ৫. Object-এ নতুন property যোগ করা

Object-এ নতুন property যোগ করা সহজ। উদাহরণস্বরূপ, আমরা `student` object-এ `city` নামে একটি নতুন property যোগ করতে পারি।

```javascript
student.city = "Dhaka";
console.log(student.city);  // Output: "Dhaka"
```

### ৬. Object-এর value পরিবর্তন করা

কোনো property-র value পরিবর্তন করতে আমরা নতুন value অ্যাসাইন করতে পারি।

```javascript
student.age = 21;
console.log(student.age);  // Output: 21
```

### উপসংহার

JavaScript-এ object হলো একটি গুরুত্বপূর্ণ concept যা বিভিন্ন ধরনের data একসাথে ধরে রাখে। প্রতিটি object-এ একাধিক property থাকতে পারে, এবং সেই properties-এর কিছু নির্দিষ্ট value থাকে। Property এবং value নিয়ে কাজ করা JavaScript-এ অনেক সহজ এবং কার্যকর।