const college{
    name:'port',
    class: ['11','12'],
    events: ['science fair','bijoy dibos','21 Feb'],
    unique:{
        colour: 'blue',
        result:{
            gpa: 5,
            merit: 'top'
        }
    }
}

//console.log(college.unique.colour)
//college.unique.result.merit = 'top top top most'
//console.log(college.unique.result.merit)
college.events[1] = '16 December'
console.log(college.events[11])

// delete
delete college.class;
console.log(college)


explain 
JavaScript-এ `Object` হলো key-value পেয়ারের সমষ্টি। এখানে `key` হলো একটি নাম এবং তার সাথে সংশ্লিষ্ট একটি `value` থাকে। এই `key-value` পেয়ারগুলোকে একত্রে বলা হয় object। এখন আমরা key, value, nested object, এবং delete সম্পর্কে বিস্তারিতভাবে ব্যাখ্যা করবো।

### 1. **Key এবং Value:**
   Key হলো object-এর property বা attribute-এর নাম, এবং Value হলো ঐ property-এর মান (data)। JavaScript-এ key একটি string হতে পারে (কিছু ক্ষেত্রে symbol), আর value যেকোনো ধরনের ডাটা হতে পারে (number, string, array, object ইত্যাদি)।

```javascript
const person = {
  name: "Rahim",
  age: 25,
  city: "Dhaka"
};
```

এখানে `name`, `age`, এবং `city` হলো keys, আর "Rahim", 25, "Dhaka" হলো তাদের সংশ্লিষ্ট values।

### 2. **Nested Object:**
   Object-এর ভিতরে আরেকটি object রাখা যেতে পারে। এটিকে বলা হয় nested object। Nested object ব্যবহারের মাধ্যমে আরও জটিল ডাটা স্ট্রাকচার তৈরি করা সম্ভব।

```javascript
const person = {
  name: "Rahim",
  age: 25,
  address: {
    street: "10th Avenue",
    city: "Dhaka",
    country: "Bangladesh"
  }
};
```

এখানে `address` একটি nested object যা `street`, `city`, এবং `country` প্রোপার্টি ধারণ করে। nested object থেকে value access করতে আমরা ডট (`.`) notation বা ব্র্যাকেট (`[]`) notation ব্যবহার করতে পারি।

```javascript
console.log(person.address.city); // Dhaka
```

### 3. **Delete:**
   `delete` অপারেটর ব্যবহার করে object-এর কোনো নির্দিষ্ট property বা key-value পেয়ার মুছে ফেলা যায়। এটি object-এর কোনো প্রোপার্টি স্থায়ীভাবে সরিয়ে দেয়।

```javascript
const person = {
  name: "Rahim",
  age: 25,
  city: "Dhaka"
};

delete person.age; // age প্রোপার্টি মুছে ফেলা হলো
console.log(person); 
```

Output:
```javascript
{
  name: "Rahim",
  city: "Dhaka"
}
```

`delete` করার পরে ঐ property আর object-এর অংশ থাকে না।